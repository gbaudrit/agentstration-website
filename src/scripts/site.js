document.documentElement.classList.add("js");

const root = document.documentElement;
const themeButton = document.querySelector("[data-theme-toggle]");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

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
