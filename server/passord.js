const { scrypt, randomBytes, timingSafeEqual } = require("crypto");
const { promisify } = require("util");

const scryptAsync = promisify(scrypt);
const PARAM = { N: 16384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 };

async function lagHash(passord) {
  const salt = randomBytes(16);
  const hash = await scryptAsync(passord, salt, 64, PARAM);
  return "scrypt$" + salt.toString("base64url") + "$" + hash.toString("base64url");
}

async function sjekkPassord(passord, lagret) {
  const deler = String(lagret || "").split("$");
  if (deler.length !== 3 || deler[0] !== "scrypt") return false;
  let salt;
  let forventet;
  try {
    salt = Buffer.from(deler[1], "base64url");
    forventet = Buffer.from(deler[2], "base64url");
  } catch (e) {
    return false;
  }
  if (!salt.length || forventet.length < 16) return false;
  const hash = await scryptAsync(String(passord), salt, forventet.length, PARAM);
  if (hash.length !== forventet.length) return false;
  return timingSafeEqual(hash, forventet);
}

module.exports = { lagHash, sjekkPassord };
