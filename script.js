const header = document.querySelector(".site-header");
const toggle = document.querySelector("[data-theme-toggle]");
const pdfLink = document.querySelector("[data-pdf-link]");

let headerTicking = false;

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 28);
  headerTicking = false;
};

const requestHeaderUpdate = () => {
  if (!headerTicking) {
    window.requestAnimationFrame(updateHeader);
    headerTicking = true;
  }
};

const applyTheme = (theme) => {
  document.body.dataset.theme = theme;
  if (pdfLink) {
    pdfLink.href = theme === "light"
      ? "assets/portfolio-gaspard-levchin-v2.pdf"
      : "assets/portfolio-gaspard-levchin.pdf";
  }
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch (error) {
    // Theme persistence is optional.
  }
};

let savedTheme = "dark";
try {
  savedTheme = localStorage.getItem("portfolio-theme") || "dark";
} catch (error) {
  savedTheme = "dark";
}

applyTheme(savedTheme);

toggle?.addEventListener("click", () => {
  applyTheme(document.body.dataset.theme === "light" ? "dark" : "light");
});

updateHeader();
window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
