import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { spawn } from "node:child_process";

const build = spawn(process.execPath, ["scripts/build.mjs"], { stdio: "inherit", shell: false });
await new Promise((resolve, reject) => { build.on("exit", code => code === 0 ? resolve() : reject(new Error(`Build failed (${code})`))); });
const root = join(process.cwd(), "dist");
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8" };

createServer(async (req, res) => {
  try {
    const rawPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const safePath = normalize(rawPath).replace(/^(\.\.[/\\])+/, "");
    let file = join(root, safePath);
    if ((await stat(file).catch(() => null))?.isDirectory()) file = join(file, "index.html");
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream", "Cache-Control": "no-cache" });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}).listen(4173, () => console.log("Agentstration website: http://localhost:4173/en/"));
