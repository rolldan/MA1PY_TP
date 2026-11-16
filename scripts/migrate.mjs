import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const rot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const mappe = path.join(rot, "migrations");
const url = process.env.DATABASE_URL?.trim() ?? "";
const filer = (await readdir(mappe).catch(() => []))
  .filter((f) => f.endsWith(".sql"))
  .sort();
if (url === "" || filer.length === 0) {
  console.log("migrate: nothing to do");
  process.exit(0);
}
const client = new pg.Client({ connectionString: process.env.DATABASE_URL_UNPOOLED?.trim() || url });
await client.connect();
try {
  await client.query("set lock_timeout = '60s'");
  await client.query("select pg_advisory_lock(7272741)");
  await client.query(
    "create table if not exists schema_migrations (name text primary key, applied_at timestamptz not null default now())",
  );
  const done = new Set((await client.query("select name from schema_migrations")).rows.map((r) => r.name));
  for (const file of filer.filter((f) => !done.has(f))) {
    await client.query("begin");
    try {
      await client.query(await readFile(path.join(mappe, file), "utf8"));
      await client.query("insert into schema_migrations (name) values ($1)", [file]);
      await client.query("commit");
      console.log(`migrate: applied ${file}`);
    } catch (error) {
      await client.query("rollback");
      throw error;
    }
  }
} finally {
  await client.end();
}
