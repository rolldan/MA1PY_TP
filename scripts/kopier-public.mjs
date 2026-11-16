import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dest = path.join(rot, "public");
await rm(dest, { recursive: true, force: true });
await mkdir(dest, { recursive: true });

const html = (await readdir(rot, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
  .map((entry) => entry.name);
for (const navn of html) {
  await cp(path.join(rot, navn), path.join(dest, navn));
}
await cp(path.join(rot, "assets"), path.join(dest, "assets"), { recursive: true });
await cp(path.join(rot, "kapitler"), path.join(dest, "kapitler"), { recursive: true });
