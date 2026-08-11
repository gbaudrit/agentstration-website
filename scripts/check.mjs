import { readdir, readFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";
import { spawn } from "node:child_process";

const build = spawn(process.execPath, ["scripts/build.mjs"], { stdio: "inherit", shell: false });
await new Promise((ok, fail) => build.on("exit", code => code === 0 ? ok() : fail(new Error("Build failed"))));
const dist = resolve("dist");
const files = [];
async function walk(dir) { for (const name of await readdir(dir)) { const p = join(dir,name); (await stat(p)).isDirectory() ? await walk(p) : files.push(p); } }
await walk(dist);
const html = files.filter(x => x.endsWith(".html"));
const errors = [];
for (const file of html) {
  const source = await readFile(file, "utf8");
  if (!/<html lang="(en|fr)"/.test(source)) errors.push(`${file}: missing lang`);
  if (!source.includes("rel=\"canonical\"")) errors.push(`${file}: missing canonical`);
  for (const match of source.matchAll(/(?:href|src)="(\/[^"]+)"/g)) {
    const url = match[1].split("#")[0].split("?")[0];
    if (!url || url === "/") continue;
    const target = join(dist, url, url.endsWith("/") ? "index.html" : "");
    if (!(await stat(target).catch(() => null))) errors.push(`${file}: broken internal reference ${url}`);
  }
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`Checked ${html.length} HTML pages and ${files.length} static files: no broken internal references.`);
