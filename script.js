const header = document.querySelector(".site-header");
const toggle = document.querySelector("[data-theme-toggle]");
const pdfLink = document.querySelector("[data-pdf-link]");
const languageSwitcher = document.querySelector("[data-language-switcher]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageMenu = document.querySelector("[data-language-menu]");
const languageCurrent = document.querySelector("[data-language-current]");
const languageOptions = document.querySelectorAll("[data-language-option]");

const translations = {
  en: {
    "aria.backTop": "Back to top",
    "aria.backPortfolio": "Back to portfolio",
    "aria.mainNav": "Main navigation",
    "aria.theme": "Change theme",
    "aria.language": "Change language",
    "aria.mainActions": "Primary actions",
    "aria.skills": "Skills",
    "nav.profile": "Profile",
    "nav.project": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "language.label": "Language:",
    "language.current": "English",
    "home.title": "Gaspard Levchin - Portfolio",
    "home.meta.description": "Portfolio of Gaspard Levchin, a creative profile working across art direction, image, design and fashion.",
    "home.meta.ogDescription": "Art direction, image, design & fashion. Paris.",
    "home.hero.eyebrow": "Creative portfolio / Paris",
    "home.hero.lead": "Art direction, image, design & fashion. A precise eye for building high-end visual experiences, shaped by material, intention and exacting standards.",
    "home.hero.cta": "Discover the projects",
    "home.signature.label": "Signature",
    "home.signature.title": "A profile shaped by visual instinct, material culture and client experience.",
    "home.signature.body": "With a sharp sense of detail and aesthetics, I combine rigor and creativity in service of a high-end client experience. My path connects image-making, retail, visual conception and the progressive development of a design and fashion house.",
    "home.territories.label": "Territories",
    "home.territory.art": "Art direction",
    "home.territory.art.body": "Moodboards, sketches, visual conception.",
    "home.territory.image": "Image",
    "home.territory.image.body": "Analog and digital photography, Sony, Blackmagic and RED cameras.",
    "home.territory.design": "Design & fashion",
    "home.territory.design.body": "Assertive lines, raw materials, fashion and object culture.",
    "home.territory.retail": "High-end retail",
    "home.territory.retail.body": "Client relations, visual merchandising, management and operational precision.",
    "home.selection.label": "Selection",
    "home.selection.title": "Selected projects and experiences.",
    "home.selection.body": "A focused selection of projects across image, brand, retail and visual direction, designed as an immediate reading of my creative territory.",
    "home.project.levchin.kicker": "Business creation / Paris",
    "home.project.levchin.title": "LEVCHIN, design & fashion house",
    "home.project.levchin.body": "Building a brand universe guided by the balance between form, material and intention. Work on identity, narrative, digital presence and the research of pieces at the intersection of design, fashion and object.",
    "home.project.view": "View project",
    "home.project.detail": "Project details",
    "home.project.tvinted.kicker": "Photo exhibition / STAY ARTY",
    "home.project.tvinted.body": "A photographic project exhibited at STAY ARTY, built around a dark, frontal and urban aesthetic. Work on selection, visual coherence and presentation within an exhibition context.",
    "home.date.tvinted": "March / April 2024",
    "home.project.arche.kicker": "Theatre / Compagnie Les Larrons",
    "home.project.arche.body": "Image creation for a theatre project, with close attention to bodies, presences and the reading of the stage. Adapting a photographic eye to a narrative and living universe.",
    "home.date.feb2024": "February 2024",
    "home.project.packshot.kicker": "Commercial packshot",
    "home.project.packshot.body": "Commercial and packshot photography for food products. Clear, legible and reliable image-making, designed for communication and sales use.",
    "home.date.mar2024": "March 2024",
    "home.project.event.kicker": "Event photography",
    "home.project.event.body": "Event photography coverage at the Aero-Club de France. A discreet, responsive and elegant approach to convey an institutional atmosphere without freezing the moment.",
    "home.date.oct2023": "October 2023",
    "home.project.concert.kicker": "Concert / Lyon",
    "home.project.concert.body": "Concert photography at Le Transbordeur, in a context of shifting light and fast-moving energy. A search for images that retain tension, rhythm and stage presence.",
    "home.date.jul2022": "July 2022",
    "home.experience.label": "Experience",
    "home.time.april2024": "April 2024 to present",
    "home.exp.levchin.title": "Business Creation — Design & Fashion",
    "home.exp.levchin.body": "Development of the LEVCHIN house in Paris. Building a brand territory, researching art direction, writing a visual universe and preparing an initial digital presence.",
    "home.time.oct2022": "October 2022 to 2024",
    "home.exp.ideco.title": "Sales Associate — Ideco Store",
    "home.exp.ideco.body": "Retail experience in Paris 10th arrondissement: client relations, advice, shop-floor presentation, visual merchandising and stock management. Development of a concrete sense of service, detail and the rhythm of a boutique.",
    "home.time.sept2023": "September 2023",
    "home.exp.commercial.title": "Sales Representative — Quycup & Blogo",
    "home.exp.commercial.body": "Commercial assignment at Maison & Objet in Villepinte. Product presentation, exchanges with professional visitors and fast reading of needs in a demanding trade-show context.",
    "home.time.2020": "2020 to 2022",
    "home.exp.bts.title": "BTS Audiovisual — Image Specialization",
    "home.exp.bts.body": "Image training at EFCAM, in Riom. Framing culture, lighting, photography, camera equipment and postproduction. A solid technical base for building images with method.",
    "home.tools.label": "Tools",
    "home.tools.title": "Visual culture.",
    "home.note.arch": "<strong>Architecture</strong> Bianca Censori, Zaha Hadid.",
    "home.note.fashion": "<strong>Fashion</strong> YSL, Courreges, Balmain, Rick Owens.",
    "home.note.design": "<strong>Design</strong> modern, organic, art deco.",
    "home.note.photo": "<strong>Photography</strong> Greig Fraser, David LaChapelle.",
    "home.tools.ai": "AI applied to creative workflows",
    "home.tools.english": "English C1",
    "home.pdf.kicker": "Printable version",
    "home.pdf.title": "View the PDF version of the portfolio.",
    "home.pdf.cta": "Open the PDF",
    "home.contact.title": "Build an image, a piece, an experience.",
    "project.label": "Project",
    "project.back": "Back to selection",
    "project.levchin.title": "LEVCHIN - Project",
    "project.levchin.kicker": "Business creation / Paris",
    "project.levchin.lead": "A design and fashion house in development. The project lays the foundations for a brand universe shaped by assertive lines, raw materials, visual intention and a desire for object-making.",
    "project.levchin.card1.title": "Direction",
    "project.levchin.card1.body": "Building an identity, a formal vocabulary and a coherent digital presence.",
    "project.levchin.card2.title": "Research",
    "project.levchin.card2.body": "Balancing design, fashion, material, narrative and manufacturing standards.",
    "project.tvinted.title": "TVINTED DVRK - Project",
    "project.tvinted.kicker": "Photo exhibition / STAY ARTY",
    "project.tvinted.lead": "A photographic exhibition conceived as a coherent series: image selection, visual tension, hanging rhythm and graphic presence.",
    "project.tvinted.card1.title": "Image",
    "project.tvinted.card1.body": "Work built around a dark, urban and direct aesthetic.",
    "project.tvinted.card2.title": "Presentation",
    "project.tvinted.card2.body": "Selection and sequencing within an agency and exhibition context.",
    "project.arche.title": "L'Arche et le Château - Project",
    "project.arche.kicker": "Theatre / Compagnie Les Larrons",
    "project.arche.lead": "An image project connected to a theatrical creation, focused on presences, gestures, stage relationships and narrative atmosphere.",
    "project.arche.card1.title": "Eye",
    "project.arche.card1.body": "Composing with bodies, the stage and the tensions of performance.",
    "project.arche.card2.title": "Use",
    "project.arche.card2.body": "Creating images that serve memory, communication and the narrative of the project.",
    "project.packshot.title": "Des Fermes, Un Quartier - Project",
    "project.packshot.kicker": "Commercial packshot",
    "project.packshot.lead": "Commercial and packshot photography designed to make products legible, desirable and usable within a communication strategy.",
    "project.packshot.card1.title": "Precision",
    "project.packshot.card1.body": "A clear, frontal and clean rendering that enhances the product.",
    "project.packshot.card2.title": "Communication",
    "project.packshot.card2.body": "Images designed for concrete use: sales, presentation and digital materials.",
    "project.rcf.title": "Dîner du RCF - Project",
    "project.rcf.kicker": "Event photography",
    "project.rcf.lead": "Event coverage at the Aero-Club de France, with a discreet, elegant approach attentive to interactions.",
    "project.rcf.card1.title": "Context",
    "project.rcf.card1.body": "An institutional event, real-time rhythm, available light and moments that cannot be replayed.",
    "project.rcf.card2.title": "Approach",
    "project.rcf.card2.body": "Responsiveness, discretion and images capable of conveying the atmosphere of the dinner.",
    "project.sausages.title": "The Sausages - Project",
    "project.sausages.kicker": "Concert / Lyon",
    "project.sausages.lead": "Concert photography at Le Transbordeur, between shifting light, fast gestures and stage energy.",
    "project.sausages.card1.title": "Live image",
    "project.sausages.card1.body": "Composing quickly with light, movement and the constraints of a concert.",
    "project.sausages.card2.title": "Intention",
    "project.sausages.card2.body": "Preserving the energy of the moment without losing image legibility."
  }
};

const originalTranslations = new Map();
const originalContent = new Map();
const originalAriaLabels = new Map();

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

const getTranslation = (key, language, fallback) => {
  if (language === "fr") {
    return fallback;
  }
  return translations[language]?.[key] || fallback;
};

const applyLanguage = (language) => {
  const nextLanguage = language === "en" ? "en" : "fr";
  document.documentElement.lang = nextLanguage;
  document.body.dataset.language = nextLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (!originalTranslations.has(element)) {
      originalTranslations.set(element, element.innerHTML);
    }
    element.innerHTML = getTranslation(
      element.dataset.i18n,
      nextLanguage,
      originalTranslations.get(element)
    );
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    if (!originalContent.has(element)) {
      originalContent.set(element, element.getAttribute("content") || "");
    }
    element.setAttribute(
      "content",
      getTranslation(element.dataset.i18nContent, nextLanguage, originalContent.get(element))
    );
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    if (!originalAriaLabels.has(element)) {
      originalAriaLabels.set(element, element.getAttribute("aria-label") || "");
    }
    element.setAttribute(
      "aria-label",
      getTranslation(element.dataset.i18nAriaLabel, nextLanguage, originalAriaLabels.get(element))
    );
  });

  if (languageCurrent) {
    languageCurrent.textContent = nextLanguage === "en" ? "English" : "Français";
  }

  languageOptions.forEach((option) => {
    const isActive = option.dataset.languageOption === nextLanguage;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
  });

  languageSwitcher?.classList.remove("is-open");
  languageToggle?.setAttribute("aria-expanded", "false");

  try {
    localStorage.setItem("portfolio-language", nextLanguage);
  } catch (error) {
    // Language persistence is optional.
  }
};

let savedTheme = "dark";
try {
  savedTheme = localStorage.getItem("portfolio-theme") || "dark";
} catch (error) {
  savedTheme = "dark";
}

applyTheme(savedTheme);

let savedLanguage = "fr";
try {
  savedLanguage = localStorage.getItem("portfolio-language") || "fr";
} catch (error) {
  savedLanguage = "fr";
}

applyLanguage(savedLanguage);

toggle?.addEventListener("click", () => {
  applyTheme(document.body.dataset.theme === "light" ? "dark" : "light");
});

languageToggle?.addEventListener("click", () => {
  const isOpen = languageSwitcher?.classList.toggle("is-open");
  languageToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyLanguage(option.dataset.languageOption);
  });
});

document.addEventListener("click", (event) => {
  if (languageSwitcher && !languageSwitcher.contains(event.target)) {
    languageSwitcher.classList.remove("is-open");
    languageToggle?.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    languageSwitcher?.classList.remove("is-open");
    languageToggle?.setAttribute("aria-expanded", "false");
  }
});

updateHeader();
window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
