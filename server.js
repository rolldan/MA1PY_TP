const express = require("express");
const { handter, lukk } = require("./server/index");

function internSti(req) {
  const sti = (req.url || "").split("?")[0];
  const raw = req.headers["x-ma1py-sti"];
  delete req.headers["x-ma1py-sti"];
  if (sti !== "/__node" || typeof raw !== "string") return;
  if (raw.length < 1 || raw.length > 2000) return;
  if (!raw.startsWith("/") || raw.startsWith("//") || raw.includes("\\") || raw.includes("..")) return;
  if (raw.includes("://") || /[\u0000-\u001f]/.test(raw)) return;
  req.url = raw;
}

const app = express();
app.use((req, res) => {
  internSti(req);
  handter(req, res);
});

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  const host = process.env.HOST || "0.0.0.0";
  const server = app.listen(port, host, () => {
    console.log("lytter " + server.address().port);
  });
  const stopp = () => { lukk().finally(() => process.exit(0)); };
  process.on("SIGTERM", stopp);
  process.on("SIGINT", stopp);
}

module.exports = app;
