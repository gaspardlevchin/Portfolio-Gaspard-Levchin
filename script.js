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
    "aria.prevImage": "Previous image",
    "aria.nextImage": "Next image",
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
    "project.sausages.card2.body": "Preserving the energy of the moment without losing image legibility.",
    "project.meta.context": "Context",
    "project.meta.role": "Role",
    "project.meta.output": "Output",
    "project.section.intent": "Intent",
    "project.section.gallery": "Visual sequence",
    "project.tvinted.meta.context": "STAY ARTY, Paris",
    "project.tvinted.meta.role": "Photography, selection and exhibition rhythm",
    "project.tvinted.meta.output": "Exhibited series and communication materials",
    "project.tvinted.intent.title": "A nocturnal, frontal urban language.",
    "project.tvinted.intent.body1": "TVINTED DVRK works like a cold, mineral sequence. The images lean into glass, concrete, reflection and urban verticality to create a tense visual field between architecture and inner landscape.",
    "project.tvinted.intent.body2": "The page keeps that atmosphere: darker surfaces, cooler halos and a tighter editorial rhythm, while preserving the portfolio’s overall precision and restraint.",
    "project.tvinted.caption.hero": "Exhibition communication material, designed as a visual threshold.",
    "project.tvinted.caption.block": "Vertical architecture, cold rhythm and illuminated fragments.",
    "project.tvinted.caption.line": "Lines, density and urban repetition.",
    "project.tvinted.caption.edge": "Edge effects, reflection and nocturnal tension.",
    "project.tvinted.caption.known": "A broader reading of the city as a graphic surface.",
    "project.tvinted.caption.story": "Story format used to extend the exhibition identity.",
    "project.tvinted.alt.hero": "TVINTED DVRK exhibition banner",
    "project.tvinted.alt.block": "Nocturnal architectural facade with illuminated windows",
    "project.tvinted.alt.line": "Urban architectural lines at night",
    "project.tvinted.alt.edge": "Dark facade detail with blue reflections",
    "project.tvinted.alt.known": "Urban architecture photographed at night",
    "project.tvinted.alt.story": "TVINTED DVRK vertical exhibition story",
    "project.arche.meta.context": "Compagnie Les Larrons",
    "project.arche.meta.role": "Stage photography and narrative image",
    "project.arche.meta.output": "Communication images and visual memory",
    "project.arche.intent.title": "A living scene, between gesture and silence.",
    "project.arche.intent.body1": "For L'Arche et le Château, the work is less about documenting a performance than catching the density of a presence: the gesture before it becomes action, the gaze before it becomes text, the object before it becomes a symbol.",
    "project.arche.intent.body2": "The page borrows from theatre codes through deeper blacks, a muted red accent and a rhythm that alternates stage-wide breathing space with close, human detail.",
    "project.arche.caption.hero": "Red curtain as a threshold into the theatrical world.",
    "project.arche.caption.portrait": "Character, object and stage presence in a single frame.",
    "project.arche.caption.scene": "Objects and light as narrative clues.",
    "project.arche.caption.geste": "Gesture caught before the scene fully unfolds.",
    "project.arche.caption.duo": "Relationship, distance and stage tension.",
    "project.arche.caption.silence": "A quiet detail that lets the set breathe.",
    "project.arche.alt.hero": "Closed red theatre curtain",
    "project.arche.alt.portrait": "Actor holding a teddy bear on stage",
    "project.arche.alt.scene": "Stage object lit against a dark background",
    "project.arche.alt.geste": "Theatre scene with actors in motion",
    "project.arche.alt.duo": "Two actors on stage",
    "project.arche.alt.silence": "Minimal stage detail with warm light",
    "project.packshot.meta.context": "Local food retail",
    "project.packshot.meta.role": "Product photography and commercial images",
    "project.packshot.meta.output": "Readable visuals for sales and communication",
    "project.packshot.intent.title": "Simple, honest and directly useful images.",
    "project.packshot.intent.body1": "Des Fermes, Un Quartier required a clear visual language: products, labels, shelves and materials had to remain immediately understandable while still feeling warm and desirable.",
    "project.packshot.intent.body2": "The page uses a more grounded palette, warmer panels and a steady grid to echo proximity, food, wood, handwritten labels and the practical clarity of a neighborhood shop.",
    "project.packshot.caption.hero": "Shelf rhythm, labels and product readability.",
    "project.packshot.caption.rue": "A market-stall signal inside the store.",
    "project.packshot.caption.vitrine": "Produce, signage and direct visual information.",
    "project.packshot.caption.produits": "Commercial framing for shelf and product identity.",
    "project.packshot.caption.detail": "Texture, material and retail proximity.",
    "project.packshot.caption.lineaire": "A wider reading of the product display.",
    "project.packshot.alt.hero": "Wine bottles displayed on a wooden shelf",
    "project.packshot.alt.rue": "Rue des Primeurs sign",
    "project.packshot.alt.vitrine": "Fruit and vegetable display in a shop",
    "project.packshot.alt.produits": "Food products arranged on shelves",
    "project.packshot.alt.detail": "Retail product detail",
    "project.packshot.alt.lineaire": "Wide product shelf in a food shop",
    "project.rcf.meta.context": "Aero-Club de France",
    "project.rcf.meta.role": "Event coverage and live image selection",
    "project.rcf.meta.output": "Institutional images for memory and communication",
    "project.rcf.intent.title": "Discretion, clarity and institutional atmosphere.",
    "project.rcf.intent.body1": "The RCF dinner called for a photographic approach that stays elegant and unobtrusive: readable group moments, public speaking, room atmosphere and interactions captured without interrupting the event.",
    "project.rcf.intent.body2": "The page follows that balance with a cooler, more formal tone, subtle lavender light and a layout that alternates wide context with more human, punctual moments.",
    "project.rcf.caption.hero": "Speech moment and collective attention.",
    "project.rcf.caption.salle": "Room scale, institutional rhythm and audience.",
    "project.rcf.caption.groupe": "Group image, formal memory and recognition.",
    "project.rcf.caption.table": "Table detail and event atmosphere.",
    "project.rcf.caption.interaction": "A live exchange, captured without staging.",
    "project.rcf.caption.portrait": "Vertical moment, gesture and presence.",
    "project.rcf.alt.hero": "Speaker addressing guests during the RCF dinner",
    "project.rcf.alt.salle": "Wide view of the RCF dinner room",
    "project.rcf.alt.groupe": "Group photo during the RCF dinner",
    "project.rcf.alt.table": "Dinner table detail",
    "project.rcf.alt.interaction": "Guests interacting during the event",
    "project.rcf.alt.portrait": "Vertical event photograph",
    "project.sausages.meta.context": "Le Transbordeur, Lyon",
    "project.sausages.meta.role": "Live photography and atmosphere capture",
    "project.sausages.meta.output": "Concert images, stage energy and crowd fragments",
    "project.sausages.intent.title": "Movement, light and live tension.",
    "project.sausages.intent.body1": "The Sausages series works with unstable light, fast gestures and a crowd rhythm that cannot be repeated. The goal is to preserve the energy without losing composition.",
    "project.sausages.intent.body2": "The page keeps the portfolio structure but lets the series breathe through cooler greens, sharper contrast and more dynamic image blocks.",
    "project.sausages.caption.hero": "Gesture, decks and live light in motion.",
    "project.sausages.caption.backstage": "Backstage pause before the next impulse.",
    "project.sausages.caption.crowd": "Crowd fragment and daylight spill.",
    "project.sausages.caption.stage": "Stage atmosphere and spatial tension.",
    "project.sausages.caption.live": "Performance detail, speed and concentration.",
    "project.sausages.caption.energy": "Energy, bodies and live rhythm.",
    "project.sausages.alt.hero": "DJ performing at Le Transbordeur",
    "project.sausages.alt.backstage": "Two performers near DJ equipment",
    "project.sausages.alt.crowd": "Concert crowd portrait",
    "project.sausages.alt.stage": "Stage and live concert atmosphere",
    "project.sausages.alt.live": "Performer captured during a concert",
    "project.sausages.alt.energy": "Concert energy and movement",
    "home.project.tvinted.body": "A photographic series exhibited at STAY ARTY: nocturnal architecture, cold verticals, image selection, catalogue logic and communication formats developed around the exhibition.",
    "home.project.arche.body": "A theatre image project for Compagnie Les Larrons, focused on the threshold of the stage: curtain, bodies, objects, gestures and narrative fragments that extend the identity of the performance.",
    "home.project.packshot.kicker": "Local retail / product image",
    "home.project.packshot.body": "Photography for a neighborhood food retailer, balancing product clarity, shelf readability, material warmth and discreet retouching for usable commercial images.",
    "home.project.event.kicker": "Institutional event",
    "home.project.event.body": "Event photography at the Aero-Club de France, with a discreet documentary approach: speeches, group moments, room atmosphere and interactions captured without interrupting the evening.",
    "home.project.perfume.kicker": "BTS study / advertising film",
    "home.project.perfume.title": "Perfume film",
    "home.project.perfume.body": "A short advertising film for an imagined perfume, created with two former classmates. I worked as director of photography on an intimate trajectory: love, betrayal, disappointment, nightlife and returning memory.",
    "home.date.study": "Study project",
    "home.project.concert.body": "Live photography at Le Transbordeur, built around unstable light, fast movement and stage energy. The series keeps the speed of the moment while preserving image structure.",
    "project.tvinted.lead": "A photographic series exhibited at STAY ARTY, built as a cold urban passage: glass facades, vertical lines, fragments of light and architectural silence.",
    "project.tvinted.meta.context": "Exhibition at STAY ARTY, Paris",
    "project.tvinted.meta.role": "Photography, selection, hanging rhythm and graphic adaptations",
    "project.tvinted.meta.output": "Exhibited works, catalogue and communication formats",
    "project.tvinted.intent.title": "A mental city, almost silent.",
    "project.tvinted.intent.body1": "TVINTED DVRK begins with contemporary architecture treated as emotional material. Buildings become masses, planes and reflections; the city is not shown as a backdrop, but as a cold and inward presence.",
    "project.tvinted.intent.body2": "The layout deliberately leaves space between the works to recover the feeling of an exhibition: each image must be able to stand alone, then be read again as part of the full series.",
    "project.tvinted.exhibition.title": "Hanging rhythm and series reading",
    "project.tvinted.exhibition.body": "The selection work focuses on rhythm: alternating vertical images, more horizontal views and graphic pauses to create a progression. The short titles strengthen the feeling of urban signals, almost like markers inside an abstract city.",
    "project.tvinted.communication.title": "Communication",
    "project.tvinted.communication.body": "The communication materials are kept together separately: they extend the exhibition identity without being confused with the works themselves. The banner establishes the atmosphere, while the story format adapts the series to a mobile reading.",
    "project.arche.lead": "An image series around a theatre creation, moving between curtain, objects, bodies in performance and threshold moments where the stage starts building its own world.",
    "project.arche.meta.role": "Stage photography, narrative reading and communication images",
    "project.arche.meta.output": "Visual sequence for memory, promotion and performance identity",
    "project.arche.intent.title": "Entering the stage through the threshold.",
    "project.arche.intent.body1": "The opening image, separated in the source folder, works like a curtain: it sets the entrance into the universe before the bodies and objects appear. The rest of the series follows presences, suspended gestures and details that tell the play without reducing it.",
    "project.arche.intent.body2": "The page direction stays dark, red and theatrical, but without framing the images: they appear as fragments of the stage.",
    "project.arche.carousel.title": "Opening and stage",
    "project.arche.carousel.body": "The first image keeps its role as a threshold, then the carousel unfolds fragments of performance: objects, gazes, distances, bodies in motion and quieter moments.",
    "project.packshot.kicker": "Local retail / product image",
    "project.packshot.lead": "Photography for a neighborhood food retailer: making products, labels, materials and the atmosphere of the place readable without losing the feeling of proximity.",
    "project.packshot.meta.role": "Product photography, shelf framing and light retouching",
    "project.packshot.meta.output": "Usable visuals for presentation, sales and digital materials",
    "project.packshot.intent.title": "Showing the product without separating it from the place.",
    "project.packshot.intent.body1": "The goal was not to create a cold studio image, but to give the products a clear commercial reading while preserving the wood, shelving, handwritten labels and warmth of a neighborhood shop.",
    "project.packshot.intent.body2": "Some images also required discreet visual cleaning: reducing reflections, calming distracting marks and keeping the image clean without erasing the real character of the place.",
    "project.packshot.carousel.title": "Shelves, products, signage",
    "project.packshot.carousel.body": "The carousel keeps the images together to show continuity between packshot, shelf display and atmosphere: the product is photographed as a sales object, but also as part of the commercial setting.",
    "project.rcf.kicker": "Institutional event",
    "project.rcf.lead": "Photographic coverage of a dinner at the Aero-Club de France, designed to preserve the character of the venue, the clarity of speeches and the warmth of the exchanges.",
    "project.rcf.meta.role": "Event photography, key-moment tracking and image selection",
    "project.rcf.meta.output": "Photo reportage for internal memory and communication",
    "project.rcf.intent.title": "Staying discreet without losing the story.",
    "project.rcf.intent.body1": "For an institutional event, images need to be useful without becoming intrusive. The work consists in following the evening, anticipating speeches, capturing groups and preserving an accurate atmosphere despite available light.",
    "project.rcf.intent.body2": "The series favors restrained framing, readable expressions and natural transitions: photography of presence rather than staged moments.",
    "project.rcf.carousel.title": "Evening sequence",
    "project.rcf.carousel.body": "The images are kept in a single carousel to respect the rhythm of a reportage: room views, speeches, tables, exchanges and group moments remain in one continuous reading.",
    "project.sausages.lead": "Live photography at Le Transbordeur, in unstable light where composition has to happen quickly with gestures, faces, stage and crowd.",
    "project.sausages.meta.role": "Live photography, light adaptation and energy capture",
    "project.sausages.meta.output": "Concert series, stage fragments and atmosphere images",
    "project.sausages.intent.title": "Keeping the speed without losing the form.",
    "project.sausages.intent.body1": "Concert photography requires a short reaction time: lights change, bodies move, and the stage keeps opening and closing. The work is to preserve a constructed image inside a situation that will not repeat.",
    "project.sausages.intent.body2": "The carousel gives the series a reading close to a live set: one image appears, disappears and gives way to another energy.",
    "project.sausages.carousel.title": "Stage, movement, crowd",
    "project.sausages.carousel.body": "All images remain in one sequence to preserve the continuity of the concert: stage views, pauses, fast gestures and crowd fragments respond to one another as variations of the same live tension.",
    "project.perfume.title": "Perfume film - BTS study",
    "project.perfume.kicker": "BTS study / advertising film",
    "project.perfume.heading": "Perfume film",
    "project.perfume.lead": "A short film around an imagined perfume, created with two former classmates. I worked as director of photography on a sensitive narrative between love, betrayal, nightlife and disillusion.",
    "project.perfume.meta.context": "BTS Audiovisual study project",
    "project.perfume.meta.role": "Director of photography",
    "project.perfume.meta.output": "Advertising film of roughly 45 seconds",
    "project.perfume.intent.title": "Making an inner state felt before selling an object.",
    "project.perfume.intent.body1": "The working document defined a precise emotional trajectory: love, betrayal, disappointment, celebration, then a return to love. The perfume becomes less a simple product than a trigger for memory, tied to a fragmented Parisian life.",
    "project.perfume.intent.body2": "The point of view mixed internal perception, third-person observation and a wider reading of the character, with the idea of placing the viewer inside her perception rather than staying in illustrative advertising.",
    "project.perfume.visual.title": "Image direction",
    "project.perfume.visual.body": "The visual preparation relied on contrasting Paris locations: the metro, La Défense at blue hour and in the rain, Buttes-Chaumont during golden hour, a club, Pigalle at night and Rue du Panthéon by day. Each place had to carry a different emotional step.",
    "project.perfume.method.title": "Method",
    "project.perfume.method.body": "The cinematography work consisted in making those transitions coherent within a short format: choosing atmospheres, preserving character continuity and building an image expressive enough for a compact film."
  }
};

const originalTranslations = new Map();
const originalContent = new Map();
const originalAriaLabels = new Map();
const originalAltText = new Map();

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

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    if (!originalAltText.has(element)) {
      originalAltText.set(element, element.getAttribute("alt") || "");
    }
    element.setAttribute(
      "alt",
      getTranslation(element.dataset.i18nAlt, nextLanguage, originalAltText.get(element))
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

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const previous = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  const counter = carousel.querySelector("[data-carousel-counter]");
  let activeIndex = 0;

  const updateCarousel = () => {
    if (!track || slides.length === 0) {
      return;
    }

    track.style.transform = `translate3d(${-activeIndex * 100}%, 0, 0)`;

    if (counter) {
      const current = String(activeIndex + 1).padStart(2, "0");
      const total = String(slides.length).padStart(2, "0");
      counter.textContent = `${current} / ${total}`;
    }
  };

  const goToSlide = (direction) => {
    if (slides.length === 0) {
      return;
    }

    activeIndex = (activeIndex + direction + slides.length) % slides.length;
    updateCarousel();
  };

  previous?.addEventListener("click", () => goToSlide(-1));
  next?.addEventListener("click", () => goToSlide(1));
  updateCarousel();
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
