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
  entry: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 8h10M7 12h6M7 16h4"/><path d="m15 15 2 2 3-4"/>',
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
  <meta property="og:image" content="${site.origin}/og.png">
  <meta property="og:image:width" content="1792">
  <meta property="og:image:height" content="896">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${c.title}">
  <meta name="twitter:description" content="${c.description}">
  <meta name="twitter:image" content="${site.origin}/og.png">
  <link rel="icon" href="/favicon/favicon.ico" sizes="any">
  <link rel="icon" href="/favicon/favicon-32.png" type="image/png" sizes="32x32">
  <link rel="apple-touch-icon" href="/favicon/favicon-180.png" sizes="180x180">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/assets/site.css">
  <script>try{const t=localStorage.getItem('agentstration-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
  <script src="/assets/site.js" defer></script>
</head>`;
}

function brand(markOnly = false) {
  return `<svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true"><path class="brand-orbit" d="M24 2.5a21.5 21.5 0 1 1 0 43 21.5 21.5 0 0 1 0-43Z"/><path class="brand-orbit brand-orbit-inner" d="M24 8a16 16 0 1 1 0 32 16 16 0 0 1 0-32Z"/><circle cx="24" cy="2.5" r="2.2"/><circle cx="42.7" cy="13.3" r="2.2"/><circle cx="5.3" cy="34.7" r="2.2"/><path class="brand-a" d="M12.8 34.5 22.1 15c.8-1.7 3.1-1.7 4 0l9.2 19.5-7.9-6.2-3.3-7.4-3.5 7.4-7.8 6.2Z"/><path class="brand-a brand-a-tail" d="m16.8 36.2 7.2-6 7.2 6-7.2-3.1-7.2 3.1Z"/></svg>${markOnly ? "" : '<span class="wordmark">AGENTSTRATION</span>'}`;
}

function headerBrand() {
  return `<img class="header-lockup" src="/logos/agentstration-header-lockup.png" width="1224" height="222" alt="Agentstration">`;
}

function footerBrand() {
  return `<img class="footer-lockup" src="/logos/agentstration-header-lockup.png" width="1224" height="222" alt="Agentstration">`;
}

function header(lang, page, c) {
  const other = lang === "en" ? "fr" : "en";
  return `<body>
<a class="skip-link" href="#main">${c.skip}</a>
<header class="site-header" data-header>
  <div class="container nav-shell">
    <a class="brand header-brand" href="${pathFor(lang, "home")}" aria-label="Agentstration — ${c.nav.home}">${headerBrand()}</a>
    <nav class="desktop-nav" aria-label="${c.navLabel}">
      ${site.pages.map(key => `<a href="${pathFor(lang, key)}"${key === page ? ' aria-current="page"' : ""}>${c.nav[key]}</a>`).join("")}
    </nav>
    <div class="nav-actions">
      <a class="icon-button header-github-link" href="${site.externalLinks.github}" target="_blank" rel="noreferrer" aria-label="${lang === "fr" ? "Voir Agentstration sur GitHub" : "View Agentstration on GitHub"}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C14.8 5 15.8 5.3 15.8 5.3c.6 1.5.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.8 5.4-5.5 5.7.4.4.8 1.1.8 2.2v3.1c0 .4.2.7.8.6A11.5 11.5 0 0 0 12 .7Z"/></svg>
      </a>
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
    <div><a class="footer-brand" href="${pathFor(lang, "home")}" aria-label="Agentstration — ${c.nav.home}">${footerBrand()}</a><p>${c.footer.statement}</p></div>
    <div><h2>${c.footer.product}</h2>${site.pages.slice(1).map(key => `<a href="${pathFor(lang, key)}">${c.nav[key]}</a>`).join("")}</div>
    <div><h2>${c.footer.resources}</h2>${linkOrDisabled(site.externalLinks.docs, c.footer.documentation, c.footer.comingSoon, "footer-link")}${linkOrDisabled(site.externalLinks.github, c.footer.github, c.footer.comingSoon, "footer-link")}${linkOrDisabled(site.externalLinks.packs, c.footer.packs, c.footer.comingSoon, "footer-link")}</div>
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

function productPreview(lang, index) {
  const isFr = lang === "fr";
  if (index === 0) {
    return `<div class="product-shot console-shot" aria-label="${isFr ? "Aperçu de la Console d’opérations" : "Operations Console preview"}" role="img">
      <div class="shot-sidebar"><span class="shot-logo">A</span><i></i><i></i><i></i><i></i></div>
      <div class="shot-content"><div class="shot-topline"><span>${isFr ? "Plan de contrôle" : "Control plane"}</span><b>● ${isFr ? "Opérationnel" : "Operational"}</b></div>
      <div class="shot-title">${isFr ? "Agents & exécutions" : "Agents & runs"}</div>
      <div class="shot-metrics"><span><b>12</b>${isFr ? "Ressources" : "Resources"}</span><span><b>04</b>Flows</span><span><b>08</b>${isFr ? "Exécutions" : "Runs"}</span></div>
      <div class="shot-rows"><span><i></i>sql-expert <b>Ready</b></span><span><i></i>content-analyst <b>Ready</b></span><span><i></i>support-router <b>Draft</b></span></div></div>
    </div>`;
  }
  return `<div class="product-shot workplace-shot" aria-label="${isFr ? "Aperçu du Workplace utilisateur" : "End-user Workplace preview"}" role="img">
    <div class="workplace-head"><span class="shot-logo">A</span><span>Workplace</span><i></i></div>
    <div class="workplace-body"><p>${isFr ? "Que voulez-vous accomplir ?" : "What do you want to accomplish?"}</p>
    <div class="workplace-prompt">${isFr ? "Analyse les risques de ce changement et prépare une synthèse." : "Review this change for risks and prepare a concise brief."}<span>↑</span></div>
    <div class="workplace-flow"><span>01 ${isFr ? "Demande reçue" : "Request received"}</span><span>02 Flow</span><span>03 ${isFr ? "Résultat durable" : "Durable result"}</span></div></div>
  </div>`;
}

function workplaceProductFrame(lang, c) {
  const isFr = lang === "fr";
  return `<div class="workplace-product-frame reveal" role="img" aria-label="${isFr ? "Aperçu de l’expérience utilisateur Agentstration Workplace" : "Agentstration Workplace end-user experience preview"}">
    <div class="workplace-product-sidebar"><span class="workplace-product-logo">A</span><i class="is-active">${icon("workplace")}</i><i>${icon("flow")}</i><i>${icon("control")}</i></div>
    <div class="workplace-product-main"><div class="workplace-product-top"><span>WORKPLACE</span><b>${isFr ? "Espace équipe" : "Team workspace"}</b><i></i></div>
      <div class="workplace-product-content"><div class="workplace-product-primary"><span>${c.overview.primary}</span><h3>${c.overview.prompt}</h3><div class="workplace-product-composer"><p>${c.overview.request}</p><b>↑</b></div><div class="workplace-product-suggestions"><i>${isFr ? "Préparer une synthèse" : "Prepare a brief"}</i><i>${isFr ? "Analyser un document" : "Review a document"}</i></div></div>
      <div class="workplace-product-shortcuts"><small>${c.overview.shortcuts}</small><div><span>${icon("entry")}<b>${isFr ? "Réponse rapide" : "Quick answer"}</b></span><span>${icon("control")}<b>${isFr ? "Demande guidée" : "Guided request"}</b></span></div></div></div>
    </div>
    <aside class="workplace-product-rail"><div class="workplace-product-notice"><i></i><span>${c.overview.notice}</span></div><small>${c.overview.tasks}</small><div class="workplace-product-task"><span>${icon("flow")}</span><div><b>${c.overview.taskName}</b><small>${c.overview.taskState}</small></div><i>✓</i></div></aside>
  </div>`;
}

function renderHome(lang, c) {
  return `<main id="main">
  <section class="hero section-grid"><div class="container hero-grid">
    <div class="hero-copy"><p class="eyebrow reveal">${c.hero.kicker}</p><h1 class="reveal">${c.hero.title}</h1><p class="lede reveal">${c.hero.body}</p><div class="hero-actions reveal"><a class="button primary" href="${pathFor(lang, "features")}">${c.hero.primary}</a><a class="button secondary github-button" href="${site.externalLinks.github}" target="_blank" rel="noreferrer">${c.hero.secondary}<span aria-hidden="true">↗</span></a></div><ul class="proof-list reveal">${c.hero.proof.map(x => `<li>${x}</li>`).join("")}</ul></div>
    <div class="hero-visual reveal"><div class="hero-image-shell"><img src="/media/agentstration-orbit.png" width="516" height="503" alt="${lang === "fr" ? "Emblème orbital Agentstration" : "Agentstration orbital emblem"}"></div></div>
  </div></section>
  <section class="signal-strip" aria-label="${lang === "fr" ? "Fondations produit" : "Product foundations"}"><div class="container signal-grid"><span>${lang === "fr" ? "Ressources déclaratives" : "Declarative resources"}</span><span>${lang === "fr" ? "Flows versionnés" : "Versioned flows"}</span><span>${lang === "fr" ? "Exécutions durables" : "Durable runs"}</span><span class="runtime-signal">${lang === "fr" ? "Runtime d’agents · MAF" : "Agent runtime · MAF"}</span></div></section>
  <section class="section problem"><div class="container"><div class="section-heading split"><div><p class="eyebrow">${c.problem.kicker}</p><h2>${c.problem.title}</h2></div><p>${c.problem.body}</p></div><div class="number-grid">${c.problem.stats.map(x => `<article class="number-card reveal"><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></div></section>
  <section class="section experience-section"><div class="container"><div class="section-heading split"><div><p class="eyebrow">${c.experience.kicker}</p><h2>${c.experience.title}</h2></div><p>${c.experience.body}</p></div><div class="experience-grid"><article class="entry-card reveal"><div class="entry-card-head"><span class="icon-box">${icon("entry")}</span><small>${c.experience.entryLabel}</small></div><h3>${c.experience.entryTitle}</h3><p>${c.experience.entryBody}</p><div class="entry-presentations">${c.experience.presentations.map(x => `<span>${x}</span>`).join("")}</div><a class="arrow-link entry-workplace-link" href="${pathFor(lang, "workplace")}">${c.experience.link}<span>→</span></a></article><div class="user-journey"><p class="journey-label">${c.experience.journeyLabel}</p>${c.experience.stages.map((stage, index) => `<article class="journey-stage reveal"><span class="icon-box">${icon(stage[0])}</span><div><h3>${stage[1]}</h3><p>${stage[2]}</p></div></article>${index < c.experience.stages.length - 1 ? '<div class="journey-connector" aria-hidden="true"><i></i><span>↓</span></div>' : ""}`).join("")}</div></div></div></section>
  <section class="section runtime-section"><div class="container runtime-grid"><div class="runtime-copy"><p class="eyebrow">${c.runtime.kicker}</p><h2>${c.runtime.title}</h2><p>${c.runtime.body}</p><div class="runtime-current"><span>${c.runtime.label}</span><a class="runtime-doc-link" href="${site.externalLinks.maf}" target="_blank" rel="noreferrer"><strong>${c.runtime.name}</strong><span>${lang === "fr" ? "Documentation officielle" : "Official documentation"} <i aria-hidden="true">↗</i></span></a><small>MAF</small></div></div><div class="runtime-diagram reveal" role="img" aria-label="Agentstration Runtime Plane connected to Microsoft Agent Framework"><div class="runtime-plane-card"><span>AGENTSTRATION</span><strong>Runtime Plane</strong><small>${lang === "fr" ? "Résolution · cycle de vie · observabilité" : "Resolution · lifecycle · observability"}</small></div><div class="runtime-bridge"><i></i><span>${lang === "fr" ? "ADAPTATEUR RUNTIME" : "RUNTIME ADAPTER"}</span><i></i></div><div class="maf-card"><span>MICROSOFT</span><strong>Agent Framework</strong><small>${lang === "fr" ? "Runtime d’agents intégré actuellement" : "Currently integrated agent runtime"}</small></div><div class="runtime-points">${c.runtime.points.map(x => `<div><p><strong>${x[0]}</strong>${x[1]}</p></div>`).join("")}</div></div></div></section>
  <section class="section provider-section"><div class="container provider-grid"><div class="provider-copy"><p class="eyebrow">${c.providers.kicker}</p><h2>${c.providers.title}</h2><p>${c.providers.body}</p><div class="provider-list">${c.providers.items.map(provider => `<article class="provider-card reveal"><div><h3>${provider[0]}</h3><p>${provider[1]}</p></div><small>AEP</small></article>`).join("")}</div><p class="provider-future">${c.providers.future}</p></div><div class="provider-path reveal" role="img" aria-label="${lang === "fr" ? "Chemin d’un fournisseur de modèles vers une définition d’agent" : "Model provider path to an agent definition"}">${c.providers.stages.map((stage, index) => `<div class="provider-stage"><strong>${stage[0]}</strong><small>${stage[1]}</small></div>${index < c.providers.stages.length - 1 ? '<div class="provider-connector"><i></i><b>→</b></div>' : ""}`).join("")}</div></div></section>
  <section class="section governance-section"><div class="container"><div class="section-heading split"><div><p class="eyebrow">${c.governance.kicker}</p><h2>${c.governance.title}</h2></div><p>${c.governance.body}</p></div><div class="governance-grid">${c.governance.items.map(item => `<article class="governance-card reveal"><span class="icon-box">${icon(item[0])}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join("")}</div></div></section>
  <section class="section surface-section"><div class="container"><div class="section-heading"><p class="eyebrow">${c.blocks.kicker}</p><h2>${c.blocks.title}</h2><p>${c.blocks.body}</p></div><div class="feature-grid">${c.blocks.items.map(x => `<article class="feature-card reveal"><div class="icon-box">${icon(x[0])}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></div></section>
  <section class="section ecosystem-section"><div class="container ecosystem-grid"><div class="ecosystem-copy"><p class="eyebrow">${lang === "fr" ? "Un plan de contrôle, tout l’écosystème" : "One control plane, the whole ecosystem"}</p><h2>${lang === "fr" ? "Donnez une architecture au travail agentique." : "Give agentic work an architecture."}</h2><p>${lang === "fr" ? "Agentstration relie agents, fournisseurs de modèles, outils, extensions et surfaces utilisateurs sans les enfermer dans un même processus ni dans un cloud imposé." : "Agentstration connects agents, model providers, tools, extensions and user surfaces without locking them into one process or a mandatory cloud."}</p><div class="ecosystem-tags"><span>Agents</span><span>Flows</span><span>Tools</span><span>Models</span><span>Work</span><span>AEP</span></div></div><figure class="ecosystem-visual reveal"><img src="/media/agentstration-ecosystem.png" width="1280" height="1280" loading="lazy" alt="${lang === "fr" ? "Agentstration au centre d’un écosystème de capacités connectées" : "Agentstration at the center of a connected capability ecosystem"}"></figure></div></section>
  <section class="section local-section"><div class="container local-grid"><div class="local-copy"><p class="eyebrow">${c.local.kicker}</p><h2>${c.local.title}</h2><p>${c.local.body}</p></div><div class="local-points">${c.local.points.map((x, i) => `<div class="local-point reveal"><span>${icon(["workplace","provider","flow","extension"][i])}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></div>`).join("")}</div></div></section>
  <section class="section architecture-section"><div class="container architecture-grid"><div><p class="eyebrow">${c.architecture.kicker}</p><h2>${c.architecture.title}</h2><p>${c.architecture.body}</p><a class="arrow-link" href="${pathFor(lang, "architecture")}">${c.architecture.link}<span>→</span></a></div>${architectureGraphic(lang)}</div></section>
  <section class="section extension-section"><div class="container extension-panel"><figure class="protocol-mark reveal"><img class="aep-logo-image" src="/logos/agentstration-aep.png" width="1280" height="1280" loading="lazy" alt="AEP — Agentstration Extension Protocol"></figure><div><p class="eyebrow">${c.extensions.kicker}</p><h2>${c.extensions.title}</h2><p>${c.extensions.body}</p><a class="arrow-link" href="${pathFor(lang, "extensions")}">${c.extensions.link}<span>→</span></a></div></div></section>
  <section class="section preview-section"><div class="container"><div class="section-heading split"><div><p class="eyebrow">${c.preview.kicker}</p><h2>${c.preview.title}</h2></div><p>${c.preview.body}</p></div><div class="preview-grid">${c.preview.cards.map((x, i) => `<article class="preview-card reveal"><div class="preview-window"><div class="window-bar"><i></i><i></i><i></i><small>${i === 0 ? "console.agentstration" : "workplace.agentstration"}</small></div>${productPreview(lang, i)}</div><div class="preview-card-copy"><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div></div></section>
  ${cta(lang, c)}
  </main>`;
}

function renderFeatures(lang, c) {
  return `<main id="main">${pageHero(c.hero)}<section class="section feature-groups"><div class="container">${c.groups.map(g => `<article class="feature-group"><div class="group-intro reveal"><span>${g[0]}</span><h2>${g[1]}</h2><p>${g[2]}</p></div><div class="group-cards">${g[3].map((item, i) => `<div class="mini-card reveal"><div class="icon-box">${icon(["agent","provider","flow","control"][i])}</div><h3>${item[0]}</h3><p>${item[1]}</p></div>`).join("")}</div></article>`).join("")}</div></section><section class="section principles"><div class="container"><p class="eyebrow">${lang === "en" ? "Design principles" : "Principes de conception"}</p><div class="principle-cloud">${c.principles.map(x => `<span>${x}</span>`).join("")}</div></div></section>${cta(lang,c)}</main>`;
}

function renderWorkplace(lang, c) {
  return `<main id="main">${pageHero(c.hero)}
  <section class="section workplace-overview"><div class="container workplace-overview-grid"><div class="workplace-overview-copy"><p class="eyebrow">${c.overview.kicker}</p><h2>${c.overview.title}</h2><p>${c.overview.body}</p></div>${workplaceProductFrame(lang, c)}</div></section>
  <section class="section workplace-entry-section"><div class="container"><div class="section-heading split"><div><p class="eyebrow">${c.entries.kicker}</p><h2>${c.entries.title}</h2></div><p>${c.entries.body}</p></div><div class="workplace-entry-layout"><div class="workplace-entry-types">${c.entries.types.map(x => `<article class="workplace-entry-type reveal"><span class="icon-box">${icon(x[0])}</span><div><h3>${x[1]}</h3><p>${x[2]}</p></div></article>`).join("")}</div><aside class="workplace-role-panel reveal"><small>${c.entries.rolesLabel}</small><div>${c.entries.roles.map((role, index) => `<span${index === 0 ? ' class="is-primary"' : ""}>${role}</span>`).join("")}</div><p>${lang === "fr" ? "Le rôle appartient à la présentation du Workspace : il organise la visibilité sans créer un nouveau type d’Entry." : "The role belongs to Workspace presentation: it organizes visibility without creating a new Entry type."}</p></aside></div></div></section>
  <section class="section workplace-dashboard-section"><div class="container"><div class="section-heading split"><div><p class="eyebrow">${c.dashboards.kicker}</p><h2>${c.dashboards.title}</h2></div><p>${c.dashboards.body}</p></div><div class="workplace-dashboard-grid">${c.dashboards.items.map(item => `<article class="workplace-dashboard-card reveal"><span class="icon-box">${icon(item[0])}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join("")}</div></div></section>
  <section class="section workplace-journey-section"><div class="container"><div class="section-heading split"><div><p class="eyebrow">${c.journey.kicker}</p><h2>${c.journey.title}</h2></div><p>${c.journey.body}</p></div><div class="workplace-journey-grid">${c.journey.stages.map(x => `<article class="workplace-journey-card reveal"><span class="icon-box">${icon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></div></section>
  <section class="section workplace-conversation-section"><div class="container workplace-conversation-grid"><div class="workplace-conversation-window reveal"><div class="conversation-window-head"><span>${lang === "fr" ? "Conversation active" : "Active conversation"}</span><i>${lang === "fr" ? "Task terminée" : "Task completed"}</i></div><div class="conversation-messages"><p class="message-user">${c.conversation.messages[0][1]}</p><p class="message-agent"><b>Agentstration</b>${c.conversation.messages[1][1]}</p><div class="message-result"><span>${icon("extension")}</span><div><b>${c.conversation.messages[2][1]}</b><small>${c.conversation.messages[2][2]}</small></div><i>↓</i></div></div><div class="conversation-composer"><span>${lang === "fr" ? "Poursuivre cette demande…" : "Continue this request…"}</span><b>↑</b></div></div><div class="workplace-conversation-copy"><p class="eyebrow">${c.conversation.kicker}</p><h2>${c.conversation.title}</h2><p>${c.conversation.body}</p><div class="conversation-points">${c.conversation.points.map(x => `<div><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join("")}</div></div></div></section>
  <section class="section workplace-capabilities-section"><div class="container"><div class="section-heading"><p class="eyebrow">${c.capabilities.kicker}</p><h2>${c.capabilities.title}</h2></div><div class="workplace-capability-grid">${c.capabilities.items.map(x => `<article class="workplace-capability-card reveal"><span class="icon-box">${icon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></div></section>
  ${cta(lang, c)}</main>`;
}

function renderArchitecture(lang, c) {
  const headings = lang === "en" ? ["Four boundaries, one platform", "The path of work", "Architectural boundaries"] : ["Quatre frontières, une plateforme", "Le parcours du travail", "Frontières architecturales"];
  return `<main id="main">${pageHero(c.hero)}<section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">01 / ${headings[0]}</p><h2>${headings[0]}</h2></div><div class="plane-grid">${c.planes.map(x => `<article class="plane-card reveal"><p>${x[0]}</p><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></div></section><section class="section surface-section"><div class="container architecture-detail"><div><p class="eyebrow">02 / ${headings[1]}</p><h2>${headings[1]}</h2><p>${lang === "en" ? "A request moves down through increasingly focused platform concepts. Results and operational signals return through the same clear boundaries." : "Une demande traverse des concepts de plateforme de plus en plus ciblés. Résultats et signaux opérationnels reviennent par ces mêmes frontières claires."}</p></div>${architectureGraphic(lang)}</div></section><section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">03 / ${headings[2]}</p><h2>${headings[2]}</h2></div><div class="boundary-grid">${c.boundaries.map(x => `<article class="boundary-card reveal"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section>${cta(lang,c)}</main>`;
}

function renderExtensions(lang, c) {
  const heading = lang === "en" ? "What extensions can add" : "Ce que les extensions permettent d’ajouter";
  return `<main id="main">${pageHero(c.hero)}<section class="section aep-section"><div class="container extension-aep-intro"><figure class="page-aep-mark reveal"><img src="/logos/agentstration-aep.png" width="1280" height="1280" alt="AEP — Agentstration Extension Protocol"></figure><div class="page-aep-content"><p class="eyebrow">Agentstration Extension Protocol</p><h2>${c.aep.title}</h2><p>${c.aep.body}</p><div class="aep-stages">${c.aep.stages.map(x => `<div class="aep-stage reveal"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join("")}</div></div></div></section><section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">${heading}</p><h2>${heading}</h2></div><div class="boundary-grid">${c.capabilities.map(x => `<article class="boundary-card reveal"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section>${cta(lang,c)}</main>`;
}

function packStrategy(lang, strategy) {
  const labels = {
    sequential: { en: "Sequential", fr: "Séquentiel" },
    concurrent: { en: "Concurrent", fr: "Concurrent" },
    handoff: { en: "Handoff", fr: "Transfert" },
    "group-chat": { en: "Group chat", fr: "Discussion de groupe" },
    magentic: { en: "Magentic", fr: "Magentic" }
  };
  return labels[strategy]?.[lang] ?? strategy;
}

function packCard(lang, c, pack) {
  const source = `${site.externalLinks.packs}/tree/main/packs/samples/${pack.audience}/${pack.name}`;
  return `<article class="pack-card reveal" data-pack-card data-audience="${pack.audience}">
    <div class="pack-card-top"><span class="pack-audience ${pack.audience}">${c.gallery[pack.audience]}</span></div>
    <h2>${pack.displayName}</h2><p>${pack.description}</p>
    <div class="pack-detail-row"><div class="pack-meta"><span>${packStrategy(lang, pack.strategy)}</span><span>v0.1.0</span><span>${pack.resources} ${c.gallery.resources}</span></div><div class="pack-topology ${pack.strategy}" aria-hidden="true"><i></i><i></i><i></i><i></i><b></b><b></b><b></b><b></b><b></b></div></div>
    <a class="pack-link" href="${source}" target="_blank" rel="noreferrer">${c.gallery.view}<span aria-hidden="true">↗</span></a>
  </article>`;
}

function renderPacks(lang, c) {
  return `<main id="main">${pageHero(c.hero)}
  <section class="section pack-gallery-section"><div class="container">
    <div class="pack-gallery-heading"><div><p class="eyebrow">${c.gallery.kicker}</p><h2>${c.gallery.title}</h2></div><div><p>${c.gallery.body}</p><span class="catalog-source"><i></i>${c.gallery.source}</span></div></div>
    <div class="pack-toolbar" role="group" aria-label="${lang === "fr" ? "Filtrer les packs par audience" : "Filter packs by audience"}">
      <button type="button" data-pack-filter="all" aria-pressed="true">${c.gallery.all}<span>${c.items.length}</span></button>
      <button type="button" data-pack-filter="personal" aria-pressed="false">${c.gallery.personal}<span>${c.items.filter(x => x.audience === "personal").length}</span></button>
      <button type="button" data-pack-filter="professional" aria-pressed="false">${c.gallery.professional}<span>${c.items.filter(x => x.audience === "professional").length}</span></button>
    </div>
    <div class="pack-grid" aria-live="polite">${c.items.map(pack => packCard(lang, c, pack)).join("")}</div>
    <div class="pack-repository"><div><span>GITHUB / AGENTSTRATION</span><strong>gbaudrit/agentstration-packs</strong></div><a class="button secondary github-button" href="${site.externalLinks.packs}" target="_blank" rel="noreferrer">${c.gallery.repository}<span aria-hidden="true">↗</span></a></div>
  </div></section><section class="section pack-authoring-section"><div class="container"><div class="section-heading split"><div><p class="eyebrow">${c.authoring.kicker}</p><h2>${c.authoring.title}</h2></div><p>${c.authoring.body}</p></div><div class="pack-authoring-grid">${c.authoring.items.map(item => `<article class="pack-authoring-card reveal"><span class="icon-box">${icon(item[0])}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join("")}</div></div></section>${cta(lang, c)}</main>`;
}

function renderPage(lang, page) {
  const c = getContent(lang, page);
  const body = page === "home" ? renderHome(lang, c) : page === "features" ? renderFeatures(lang, c) : page === "workplace" ? renderWorkplace(lang, c) : page === "architecture" ? renderArchitecture(lang, c) : page === "extensions" ? renderExtensions(lang, c) : renderPacks(lang, c);
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
await writeFile(join(dist, "index.html"), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Agentstration</title><link rel="canonical" href="https://www.agentstrations.io/en/"><meta http-equiv="refresh" content="0;url=/en/"><script>location.replace("/en/"+location.search+location.hash)</script></head><body><a href="/en/">Continue to Agentstration</a></body></html>', "utf8");

const urls = site.languages.flatMap(lang => site.pages.map(page => `  <url><loc>${site.origin}${pathFor(lang,page)}</loc><changefreq>${page === "home" ? "weekly" : "monthly"}</changefreq><priority>${page === "home" ? "1.0" : "0.8"}</priority></url>`)).join("\n");
await writeFile(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, "utf8");
console.log(`Built ${site.languages.length * site.pages.length} localized pages in dist/.`);
