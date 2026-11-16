const { next, rewrite } = require("@vercel/functions");

function proxy(request) {
  const url = new URL(request.url);
  if (url.pathname === "/__node" || url.pathname.startsWith("/assets/")) return next();
  const headers = new Headers(request.headers);
  headers.set("x-ma1py-sti", url.pathname + url.search);
  return rewrite(new URL("/__node", request.url), { request: { headers } });
}

module.exports = proxy;
