import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getContent, site } from "../src/content/site.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const iconPaths = {
  agent: '<path d="M12 3 4.5 18h4.2l3.3-6.2 3.3 6.2h4.2L12 3Z"/><path d="m9 19 3-3 3 3"/>',
  flow: '<path d="M6 4v6a2 2 0 0 0 2 2h8"/><path d="m13 9 3 3-3 3"/><circle cx="6" cy="4" r="2"/><circle cx="6" cy="20" r="2"/><path d="M6 18v-3"/>',
  provider: '<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="17" r="2"/>',
  extension: '<path d="M8 3v4M16 3v4M7 7h10v3a5 5 0 0 1-10 0V7ZM12 15v6"/>',
  workplace: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3M7 9h4M7 13h7"/>',
  control: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/>'
};

function icon(name) {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.control}</svg>`;
}

function pathFor(lang, page) {
  const part = site.paths[page];
  return `/${lang}/${part ? `${part}/` : ""}`;
}

function linkOrDisabled(href, label, unavailableLabel, className = "text-link") {
  return href
    ? `<a class="${className}" href="${href}">${label}<span aria-hidden="true">↗</span></a>`
    : `<span class="${className} is-disabled" aria-disabled="true" title="${unavailableLabel}">${label}<small>${unavailableLabel}</small></span>`;
}

function head(lang, page, c) {
  const url = `${site.origin}${pathFor(lang, page)}`;
  const alternate = lang === "en" ? "fr" : "en";
  return `<!doctype html>
<html lang="${lang}" data-theme="system">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${c.title}</title>
  <meta name="description" content="${c.description}">
  <meta name="theme-color" content="#080b12" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f7f8fb" media="(prefers-color-scheme: light)">
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="${lang}" href="${url}">
  <link rel="alternate" hreflang="${alternate}" href="${site.origin}${pathFor(alternate, page)}">
  <link rel="alternate" hreflang="x-default" href="${site.origin}${pathFor("en", page)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Agentstration">
  <meta property="og:locale" content="${c.locale}">
  <meta property="og:title" content="${c.title}">
  <meta property="og:description" content="${c.description}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${site.origin}/social/agentstration-social.svg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${c.title}">
  <meta name="twitter:description" content="${c.description}">
  <meta name="twitter:image" content="${site.origin}/social/agentstration-social.svg">
  <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/assets/site.css">
  <script>try{const t=localStorage.getItem('agentstration-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
  <script src="/assets/site.js" defer></script>
</head>`;
}

function brand(markOnly = false) {
  return `<svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true"><path class="brand-orbit" d="M24 2.5a21.5 21.5 0 1 1 0 43 21.5 21.5 0 0 1 0-43Z"/><path class="brand-orbit brand-orbit-inner" d="M24 8a16 16 0 1 1 0 32 16 16 0 0 1 0-32Z"/><circle cx="24" cy="2.5" r="2.2"/><circle cx="42.7" cy="13.3" r="2.2"/><circle cx="5.3" cy="34.7" r="2.2"/><path class="brand-a" d="M12.8 34.5 22.1 15c.8-1.7 3.1-1.7 4 0l9.2 19.5-7.9-6.2-3.3-7.4-3.5 7.4-7.8 6.2Z"/><path class="brand-a brand-a-tail" d="m16.8 36.2 7.2-6 7.2 6-7.2-3.1-7.2 3.1Z"/></svg>${markOnly ? "" : '<span class="wordmark">AGENTSTRATION</span>'}`;
}

function header(lang, page, c) {
  const other = lang === "en" ? "fr" : "en";
  return `<body>
<a class="skip-link" href="#main">${c.skip}</a>
<header class="site-header" data-header>
  <div class="container nav-shell">
    <a class="brand" href="${pathFor(lang, "home")}" aria-label="Agentstration — ${c.nav.home}">${brand()}</a>
    <nav class="desktop-nav" aria-label="${c.navLabel}">
      ${site.pages.map(key => `<a href="${pathFor(lang, key)}"${key === page ? ' aria-current="page"' : ""}>${c.nav[key]}</a>`).join("")}
    </nav>
    <div class="nav-actions">
      <a class="language-link" href="${pathFor(other, page)}" hreflang="${other}" lang="${other}" aria-label="${c.languageLabel}">${c.language}</a>
      <button class="icon-button theme-button" type="button" data-theme-toggle aria-label="${c.theme}">
        <svg class="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      </button>
      <button class="icon-button menu-button" type="button" data-menu-toggle aria-label="${c.menu}" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button>
    </div>
  </div>
  <nav class="mobile-nav" id="mobile-menu" data-mobile-menu aria-label="${c.navLabel}" hidden>
    ${site.pages.map(key => `<a href="${pathFor(lang, key)}"${key === page ? ' aria-current="page"' : ""}>${c.nav[key]}</a>`).join("")}
  </nav>
</header>`;
}

function footer(lang, c) {
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div><a class="brand footer-brand" href="${pathFor(lang, "home")}">${brand()}</a><p>${c.footer.statement}</p></div>
    <div><h2>${c.footer.product}</h2>${site.pages.slice(1).map(key => `<a href="${pathFor(lang, key)}">${c.nav[key]}</a>`).join("")}</div>
    <div><h2>${c.footer.resources}</h2>${linkOrDisabled(site.externalLinks.docs, c.footer.documentation, c.footer.comingSoon, "footer-link")}${linkOrDisabled(site.externalLinks.github, c.footer.github, c.footer.comingSoon, "footer-link")}</div>
  </div>
  <div class="container footer-bottom"><span>© ${new Date().getFullYear()} Agentstration. ${c.footer.legal}</span><span>${c.footer.built}</span></div>
</footer>
</body>
</html>`;
}

function pageHero(data) {
  return `<section class="page-hero section-grid"><div class="container narrow"><p class="eyebrow reveal">${data[0]}</p><h1 class="reveal">${data[1]}</h1><p class="lede reveal">${data[2]}</p></div></section>`;
}

function cta(lang, c) {
  return `<section class="section cta-section"><div class="container"><div class="cta-panel reveal"><div><p class="eyebrow">${c.cta.eyebrow}</p><h2>${c.cta.title}</h2><p>${c.cta.body}</p></div><div class="cta-actions"><a class="button primary" href="${pathFor(lang, "architecture")}">${c.cta.primary}</a><a class="button secondary" href="${pathFor(lang, "features")}">${c.cta.secondary}</a></div></div></div></section>`;
}

function architectureGraphic(lang) {
  const labels = lang === "en" ? ["USERS", "WORKPLACE", "FLOWS", "AGENTS", "PROVIDERS · TOOLS · EXTENSIONS"] : ["UTILISATEURS", "WORKPLACE", "FLOWS", "AGENTS", "FOURNISSEURS · OUTILS · EXTENSIONS"];
  return `<div class="architecture-graphic reveal" aria-label="${labels.join(", ")}" role="img">
    ${labels.map((label, i) => `<div class="arch-node node-${i + 1}"><span>${String(i + 1).padStart(2, "0")}</span><strong>${label}</strong></div>${i < labels.length - 1 ? '<div class="arch-connector" aria-hidden="true"><i></i></div>' : ""}`).join("")}
  </div>`;
}

function renderHome(lang, c) {
  return `<main id="main">
  <section class="hero section-grid"><div class="hero-orbit" aria-hidden="true"><i></i><i></i><i></i></div><div class="container hero-grid">
    <div class="hero-copy"><p class="eyebrow reveal">${c.hero.kicker}</p><h1 class="reveal">${c.hero.title}</h1><p class="lede reveal">${c.hero.body}</p><div class="hero-actions reveal"><a class="button primary" href="${pathFor(lang, "features")}">${c.hero.primary}</a><a class="button secondary" href="${pathFor(lang, "architecture")}">${c.hero.secondary}</a></div><ul class="proof-list reveal">${c.hero.proof.map(x => `<li>${x}</li>`).join("")}</ul></div>
    <div class="hero-visual reveal"><div class="hero-mark">${brand(true)}</div><div class="orbit-label orbit-label-a">DEFINE</div><div class="orbit-label orbit-label-b">ORCHESTRATE</div><div class="orbit-label orbit-label-c">OPERATE</div></div>
  </div></section>
  <section class="section problem"><div class="container"><div class="section-heading split"><div><p class="eyebrow">${c.problem.kicker}</p><h2>${c.problem.title}</h2></div><p>${c.problem.body}</p></div><div class="number-grid">${c.problem.stats.map(x => `<article class="number-card reveal"><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></div></section>
  <section class="section surface-section"><div class="container"><div class="section-heading"><p class="eyebrow">${c.blocks.kicker}</p><h2>${c.blocks.title}</h2><p>${c.blocks.body}</p></div><div class="feature-grid">${c.blocks.items.map(x => `<article class="feature-card reveal"><div class="icon-box">${icon(x[0])}</div><h3>${x[1]}</h3><p>${x[2]}</p><span class="card-index">0${c.blocks.items.indexOf(x) + 1}</span></article>`).join("")}</div></div></section>
  <section class="section local-section"><div class="container local-grid"><div class="local-copy"><p class="eyebrow">${c.local.kicker}</p><h2>${c.local.title}</h2><p>${c.local.body}</p></div><div class="local-points">${c.local.points.map((x, i) => `<div class="local-point reveal"><span>${icon(["workplace","provider","flow","extension"][i])}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></div>`).join("")}</div></div></section>
  <section class="section architecture-section"><div class="container architecture-grid"><div><p class="eyebrow">${c.architecture.kicker}</p><h2>${c.architecture.title}</h2><p>${c.architecture.body}</p><a class="arrow-link" href="${pathFor(lang, "architecture")}">${c.architecture.link}<span>→</span></a></div>${architectureGraphic(lang)}</div></section>
  <section class="section extension-section"><div class="container extension-panel"><div class="protocol-mark reveal"><span>A</span><span>E</span><span>P</span><i>beta</i></div><div><p class="eyebrow">${c.extensions.kicker}</p><h2>${c.extensions.title}</h2><p>${c.extensions.body}</p><a class="arrow-link" href="${pathFor(lang, "extensions")}">${c.extensions.link}<span>→</span></a></div></div></section>
  <section class="section preview-section"><div class="container"><div class="section-heading split"><div><p class="eyebrow">${c.preview.kicker}</p><h2>${c.preview.title}</h2></div><p>${c.preview.body}</p></div><div class="preview-grid">${c.preview.cards.map((x, i) => `<article class="preview-card reveal"><div class="preview-window"><div class="window-bar"><i></i><i></i><i></i></div><div class="preview-placeholder"><span>${i === 0 ? icon("control") : icon("workplace")}</span><small>${c.preview.placeholder}</small></div></div><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section>
  ${cta(lang, c)}
  </main>`;
}

function renderFeatures(lang, c) {
  return `<main id="main">${pageHero(c.hero)}<section class="section feature-groups"><div class="container">${c.groups.map((g, gi) => `<article class="feature-group"><div class="group-intro reveal"><span>0${gi + 1} / ${g[0]}</span><h2>${g[1]}</h2><p>${g[2]}</p></div><div class="group-cards">${g[3].map((item, i) => `<div class="mini-card reveal"><div class="icon-box">${icon(["agent","provider","flow","control"][i])}</div><h3>${item[0]}</h3><p>${item[1]}</p></div>`).join("")}</div></article>`).join("")}</div></section><section class="section principles"><div class="container"><p class="eyebrow">${lang === "en" ? "Design principles" : "Principes de conception"}</p><div class="principle-cloud">${c.principles.map(x => `<span>${x}</span>`).join("")}</div></div></section>${cta(lang,c)}</main>`;
}

function renderArchitecture(lang, c) {
  const headings = lang === "en" ? ["Three planes, one platform", "The path of work", "Architectural boundaries"] : ["Trois plans, une plateforme", "Le parcours du travail", "Frontières architecturales"];
  return `<main id="main">${pageHero(c.hero)}<section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">01 / ${headings[0]}</p><h2>${headings[0]}</h2></div><div class="plane-grid">${c.planes.map((x,i) => `<article class="plane-card reveal"><span>0${i+1}</span><p>${x[0]}</p><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></div></section><section class="section surface-section"><div class="container architecture-detail"><div><p class="eyebrow">02 / ${headings[1]}</p><h2>${headings[1]}</h2><p>${lang === "en" ? "A request moves down through increasingly focused platform concepts. Results and operational signals return through the same clear boundaries." : "Une demande traverse des concepts de plateforme de plus en plus ciblés. Résultats et signaux opérationnels reviennent par ces mêmes frontières claires."}</p></div>${architectureGraphic(lang)}</div></section><section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">03 / ${headings[2]}</p><h2>${headings[2]}</h2></div><div class="boundary-grid">${c.boundaries.map((x,i) => `<article class="boundary-card reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section>${cta(lang,c)}</main>`;
}

function renderExtensions(lang, c) {
  const heading = lang === "en" ? ["Why the boundary matters", "A possible interaction", "A deliberate shift"] : ["Pourquoi cette frontière compte", "Une interaction possible", "Une évolution délibérée"];
  return `<main id="main">${pageHero(c.hero)}<section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">01 / AEP</p><h2>${heading[0]}</h2></div><div class="boundary-grid">${c.why.map((x,i) => `<article class="boundary-card reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section><section class="section aep-section"><div class="container aep-grid"><div><p class="eyebrow">02 / Agentstration Extension Protocol</p><h2>${c.aep.title}</h2><p>${c.aep.body}</p></div><div class="aep-stages">${c.aep.stages.map((x,i) => `<div class="aep-stage reveal"><span>${String(i+1).padStart(2,"0")}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></div>`).join("")}</div></div></section><section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">03 / ${heading[2]}</p><h2>${heading[2]}</h2></div><div class="comparison" role="table">${c.compare.map((row,ri) => `<div class="comparison-row" role="row">${row.map((cell,ci) => `<div role="cell" class="${ci === 0 ? "comparison-title" : ""}">${ci === 0 ? `<span>${ri === 0 ? "×" : "→"}</span>` : ""}${cell}</div>`).join("")}</div>`).join("")}</div></div></section>${cta(lang,c)}</main>`;
}

function renderPage(lang, page) {
  const c = getContent(lang, page);
  const body = page === "home" ? renderHome(lang, c) : page === "features" ? renderFeatures(lang, c) : page === "architecture" ? renderArchitecture(lang, c) : renderExtensions(lang, c);
  return `${head(lang, page, c)}${header(lang, page, c)}${body}${footer(lang, c)}`;
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const lang of site.languages) {
  for (const page of site.pages) {
    const output = join(dist, lang, site.paths[page], "index.html");
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, renderPage(lang, page), "utf8");
  }
}
await cp(join(root, "public"), dist, { recursive: true });
await mkdir(join(dist, "assets"), { recursive: true });
await writeFile(join(dist, "assets", "site.css"), await readFile(join(root, "src", "styles", "site.css"), "utf8"));
await writeFile(join(dist, "assets", "site.js"), await readFile(join(root, "src", "scripts", "site.js"), "utf8"));
await writeFile(join(dist, "index.html"), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Agentstration</title><link rel="canonical" href="https://agentstration.io/en/"><meta http-equiv="refresh" content="0;url=/en/"><script>location.replace("/en/"+location.search+location.hash)</script></head><body><a href="/en/">Continue to Agentstration</a></body></html>', "utf8");

const urls = site.languages.flatMap(lang => site.pages.map(page => `  <url><loc>${site.origin}${pathFor(lang,page)}</loc><changefreq>${page === "home" ? "weekly" : "monthly"}</changefreq><priority>${page === "home" ? "1.0" : "0.8"}</priority></url>`)).join("\n");
await writeFile(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, "utf8");
console.log(`Built ${site.languages.length * site.pages.length} localized pages in dist/.`);
