document.documentElement.classList.add("js");

const root = document.documentElement;
const themeButton = document.querySelector("[data-theme-toggle]");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

const analyticsId = root.dataset.analyticsId;
const consentKey = "agentstration-analytics-consent";
const consentLifetime = 180 * 24 * 60 * 60 * 1000;
const consentBanner = document.querySelector("[data-consent-banner]");
const consentAccept = document.querySelector("[data-consent-accept]");
const consentReject = document.querySelector("[data-consent-reject]");
const consentManage = document.querySelector("[data-consent-manage]");

function readConsent() {
  try {
    const stored = JSON.parse(localStorage.getItem(consentKey));
    if (!stored || !["accepted", "rejected"].includes(stored.value) || !Number.isFinite(stored.savedAt) || Date.now() - stored.savedAt > consentLifetime) {
      localStorage.removeItem(consentKey);
      return null;
    }
    return stored.value;
  } catch { return null; }
}

function writeConsent(value) {
  try { localStorage.setItem(consentKey, JSON.stringify({ value, savedAt: Date.now() })); } catch {}
}

function showConsent(focusAction = false) {
  if (!consentBanner) return;
  consentBanner.hidden = false;
  if (focusAction) consentAccept?.focus();
}

function hideConsent() {
  if (consentBanner) consentBanner.hidden = true;
}

function removeAnalyticsCookies() {
  const domain = location.hostname;
  document.cookie.split(";").forEach(cookie => {
    const name = cookie.split("=")[0].trim();
    if (name !== "_ga" && !name.startsWith("_ga_")) return;
    const expired = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = expired;
    document.cookie = `${expired}; domain=${domain}`;
    document.cookie = `${expired}; domain=.${domain}`;
  });
}

function enableAnalytics() {
  if (!analyticsId || document.querySelector("script[data-google-analytics]")) return;
  window[`ga-disable-${analyticsId}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", analyticsId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const script = document.createElement("script");
  script.async = true;
  script.dataset.googleAnalytics = "true";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`;
  document.head.append(script);
}

function disableAnalytics() {
  if (analyticsId) window[`ga-disable-${analyticsId}`] = true;
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  removeAnalyticsCookies();
}

consentAccept?.addEventListener("click", () => {
  writeConsent("accepted");
  hideConsent();
  enableAnalytics();
});
consentReject?.addEventListener("click", () => {
  writeConsent("rejected");
  hideConsent();
  disableAnalytics();
});
consentManage?.addEventListener("click", () => showConsent(true));

if (readConsent() === "accepted") enableAnalytics();
else if (readConsent() === "rejected") disableAnalytics();
else showConsent();

function effectiveTheme() {
  const selected = root.dataset.theme;
  return selected === "system" ? (systemDark.matches ? "dark" : "light") : selected;
}

function updateThemeLabel() {
  if (!themeButton) return;
  const labels = root.lang === "fr"
    ? { light: "Thème clair. Activer le thème sombre", dark: "Thème sombre. Suivre le système" }
    : { light: "Light theme. Switch to dark", dark: "Dark theme. Follow system theme" };
  themeButton.setAttribute("aria-label", labels[effectiveTheme()]);
}

themeButton?.addEventListener("click", () => {
  const current = root.dataset.theme;
  const next = current === "system" ? (systemDark.matches ? "light" : "dark") : current === "light" ? "dark" : "system";
  root.dataset.theme = next;
  try { localStorage.setItem("agentstration-theme", next); } catch {}
  updateThemeLabel();
});
systemDark.addEventListener?.("change", updateThemeLabel);
updateThemeLabel();

const menuButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileMenu.hidden = open;
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 780 && mobileMenu && !mobileMenu.hidden) {
    mobileMenu.hidden = true;
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

const header = document.querySelector("[data-header]");
const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08, rootMargin: "0px 0px -30px" });
  reveals.forEach(element => observer.observe(element));
} else {
  reveals.forEach(element => element.classList.add("is-visible"));
}

const packFilters = document.querySelectorAll("[data-pack-filter]");
const packCards = document.querySelectorAll("[data-pack-card]");
packFilters.forEach(button => button.addEventListener("click", () => {
  const audience = button.dataset.packFilter;
  packFilters.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
  packCards.forEach(card => {
    card.hidden = audience !== "all" && card.dataset.audience !== audience;
  });
}));
