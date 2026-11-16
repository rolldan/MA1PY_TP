const fs = require("fs");
const path = require("path");
const pg = require("pg");

const databaseUrl = process.env.DATABASE_URL?.trim() ?? "";
const rot = path.join(__dirname, "..");
let pool;
let local;
let ko = Promise.resolve();

function koo(fn) {
  const neste = ko.then(fn, fn);
  ko = neste.then(() => {}, () => {});
  return neste;
}

function startLocal() {
  if (!local) {
    local = (async () => {
      const { PGlite } = require("@electric-sql/pglite");
      const db = new PGlite();
      const mappe = path.join(rot, "migrations");
      let filer = [];
      try {
        filer = fs.readdirSync(mappe).filter((f) => f.endsWith(".sql")).sort();
      } catch (e) {
        filer = [];
      }
      for (const fil of filer) {
        await db.exec(fs.readFileSync(path.join(mappe, fil), "utf8"));
      }
      return db;
    })().catch((error) => {
      local = undefined;
      throw error;
    });
  }
  return local;
}

async function sql(text, params = []) {
  if (databaseUrl !== "") {
    pool ??= new pg.Pool({ connectionString: databaseUrl, max: 5 });
    return (await pool.query(text, params)).rows;
  }
  return koo(async () => {
    const db = await startLocal();
    return (await db.query(text, params)).rows;
  });
}

async function transaksjon(fn) {
  if (databaseUrl !== "") {
    pool ??= new pg.Pool({ connectionString: databaseUrl, max: 5 });
    const client = await pool.connect();
    try {
      await client.query("begin");
      const ut = await fn({
        query: async (text, params = []) => (await client.query(text, params)).rows
      });
      await client.query("commit");
      return ut;
    } catch (error) {
      try { await client.query("rollback"); } catch (e) { /* allerede avsluttet */ }
      throw error;
    } finally {
      client.release();
    }
  }
  return koo(async () => {
    const db = await startLocal();
    await db.exec("begin");
    try {
      const ut = await fn({
        query: async (text, params = []) => (await db.query(text, params)).rows
      });
      await db.exec("commit");
      return ut;
    } catch (error) {
      try { await db.exec("rollback"); } catch (e) { /* allerede avsluttet */ }
      throw error;
    }
  });
}

async function lukk() {
  if (pool) {
    const aktiv = pool;
    pool = undefined;
    await aktiv.end();
  }
  if (local) {
    const db = await local.catch(() => null);
    local = undefined;
    if (db && db.close) await db.close();
  }
}

module.exports = { sql, transaksjon, lukk, brukerPostgres: databaseUrl !== "" };
