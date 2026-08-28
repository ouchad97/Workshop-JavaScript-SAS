const lessons = [
  { id: "01", title: "Variables & types", description: "Les premières briques : déclarer, nommer et comprendre les valeurs.", file: "01-Fondamentaux/01-Variables-et-Types.md", tag: "Fondamentaux" },
  { id: "02", title: "Opérateurs", description: "Calculer, comparer et combiner des expressions avec précision.", file: "02-Operateurs/02-Operateurs.md", tag: "Logique" },
  { id: "03", title: "Conditions", description: "Faire les bons choix avec if, else if, else et switch.", file: "03-Conditions/03-Conditions.md", tag: "Décisions" },
  { id: "04", title: "Conditions avancées", description: "Résoudre des situations concrètes avec plusieurs règles.", file: "03-Conditions/04-Conditions-Avancees.md", tag: "Challenges" },
  { id: "05", title: "Boucles", description: "Répéter une action et parcourir des séquences sans se perdre.", file: "04-Boucles/05-Boucles.md", tag: "Répétition" },
  { id: "06", title: "Boucles avancées", description: "Imbrications, recherches et challenges pour aller plus loin.", file: "04-Boucles/06-Boucles-Avancees.md", tag: "Challenges" },
  { id: "07", title: "Chaînes", description: "Lire, parcourir et transformer du texte en JavaScript.", file: "05-Chaines/07-Chaines.md", tag: "Texte" },
  { id: "08", title: "Tableaux", description: "Organiser plusieurs valeurs, les parcourir et les transformer.", file: "06-Tableaux/08-Tableaux.md", tag: "Données" },
  { id: "09", title: "Objets", description: "Modéliser des données réelles avec des propriétés claires.", file: "07-Objets/09-Objets.md", tag: "Modélisation" },
  { id: "10", title: "Fonctions", description: "Découper un problème en actions réutilisables et lisibles.", file: "08-Fonctions/10-Fonctions.md", tag: "Réutilisation" },
  { id: "11", title: "Recherche & tri", description: "Comparer les stratégies pour trouver et ordonner efficacement.", file: "09-Recherche-et-Tri/11-Recherche-et-Tri.md", tag: "Algorithmes" },
  { id: "P1", title: "Mini-projet stock", description: "Mettre les tableaux et les objets au service d'un vrai besoin.", file: "06-Tableaux/mini-projet-stock.md", tag: "Projet" },
  { id: "P2", title: "Mini-projet contacts", description: "Construire un carnet de contacts avec des opérations utiles.", file: "07-Objets/mini-projet-contacts.md", tag: "Projet" }
];

const nav = document.querySelector("#lesson-nav");
const hero = document.querySelector("#hero");
const lessonView = document.querySelector("#lesson-view");
const readerBody = document.querySelector("#reader-body");
const readerTitle = document.querySelector("#reader-title");
const readerStep = document.querySelector("#reader-step");
const readerDescription = document.querySelector("#reader-description");

/* ── Modal Elements ── */
const modal = document.querySelector("#solution-modal");
const modalBody = document.querySelector("#modal-body");
const closeModal = document.querySelector("#close-modal");

/* ── Theme Elements ── */
const themeToggle = document.querySelector("#theme-toggle");

// Initialize theme from localStorage (defaults to light mode)
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  }
});

/* ── Sidebar navigation ── */
function renderNav() {
  nav.innerHTML = lessons.map((lesson, index) => `
    <button class="lesson-link" type="button" data-id="${lesson.id}">
      <span class="lesson-number">${lesson.id.startsWith("P") ? "⚑" : String(index + 1).padStart(2, "0")}</span>
      <span class="lesson-name">${lesson.title}</span>
    </button>`).join("");
}

/* ── Markdown → HTML ── */
function markdownToHtml(markdown) {
  let escaped = markdown.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
  // Custom parser for <solution>...</solution>
  escaped = escaped
    .replace(/&lt;solution&gt;/g, '\n<div class="solution-data" hidden>\n')
    .replace(/&lt;\/solution&gt;/g, '\n</div>\n<button class="solution-btn" type="button">💡 Voir la solution guidée</button>\n');

  const blocks = escaped.split(/```[a-z]*\n?/i);
  return blocks.map((block, index) => {
    if (index % 2 === 1) return `<pre><code>${block.replace(/^\n+|\n+$/g, '')}</code></pre>`;
    return block
      .replace(/^### (.*)$/gm, "<h3>$1</h3>")
      .replace(/^## (.*)$/gm, "<h2>$1</h2>")
      .replace(/^# (.*)$/gm, "<h1>$1</h1>")
      .replace(/^\s*[-*] (.*)$/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>\n?)+/g, value => `<ul>${value}</ul>`)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .split(/\n\s*\n/).map(part => {
        // Prevent wrapping block HTML elements in <p> tags
        if (/^<(h[1-3]|ul|pre|div|button|\/div)/.test(part.trim())) return part;
        return part.trim() ? `<p>${part.replace(/\n/g, " ")}</p>` : "";
      }).join("");
  }).join("");
}

/* ── Show home (hero) ── */
function showHome() {
  hero.hidden = false;
  lessonView.hidden = true;
  document.querySelectorAll(".lesson-link").forEach(el => el.classList.remove("active"));
  history.pushState({}, "", window.location.pathname);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ── Open a lesson ── */
async function openLesson(id) {
  const lesson = lessons.find(item => item.id === id);
  if (!lesson) return;

  // Update header
  readerTitle.textContent = lesson.title;
  readerStep.textContent = lesson.id.startsWith("P") ? "Mini-projet" : `Étape ${lesson.id}`;
  readerDescription.textContent = lesson.description;
  readerBody.innerHTML = '<div class="loader">Chargement de la fiche<span>...</span></div>';

  // Toggle views
  hero.hidden = true;
  lessonView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.pushState({ lesson: id }, "", `#lesson-${id}`);

  // Mark active in sidebar
  document.querySelectorAll(".lesson-link").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(`[data-id="${id}"]`).forEach(el => el.classList.add("active"));

  // Close mobile sidebar
  document.querySelector("#sidebar").classList.remove("open");

  // Fetch content
  try {
    const response = await fetch(lesson.file);
    if (!response.ok) throw new Error("Fiche introuvable");
    readerBody.innerHTML = markdownToHtml(await response.text());
  } catch (error) {
    readerBody.innerHTML = `<p>La fiche existe, mais le navigateur bloque son chargement lorsque la page est ouverte directement avec <code>file://</code>.</p><p>Lance l'interface depuis le dossier du projet avec :</p><pre><code>npx serve .</code></pre><p>Puis ouvre l'adresse indiquée dans le terminal. Sur Vercel, les fiches se chargeront automatiquement.</p>`;
  }
}

/* ── Init ── */
renderNav();

// Sidebar click → open lesson
nav.addEventListener("click", event => {
  const target = event.target.closest("[data-id]");
  if (target) openLesson(target.dataset.id);
});

// "Commencer le parcours" → open first lesson
document.querySelector("#start-button").addEventListener("click", () => openLesson("01"));

// "Retour au parcours" → show home
document.querySelector("#close-reader").addEventListener("click", () => showHome());

// Brand logo → show home
document.querySelector(".brand").addEventListener("click", (e) => {
  e.preventDefault();
  showHome();
});

// Mobile menu toggle
document.querySelector("#menu-toggle").addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("open");
});

// Browser back/forward
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.lesson) {
    openLesson(event.state.lesson);
  } else {
    showHome();
  }
});

// Handle initial hash on page load (e.g. #lesson-03)
(function handleInitialHash() {
  const hash = window.location.hash;
  if (hash.startsWith("#lesson-")) {
    const id = hash.replace("#lesson-", "");
    openLesson(id);
  }
})();

/* ── Modal (Solutions) Logic ── */
closeModal.addEventListener("click", () => {
  modal.hidden = true;
  modalBody.innerHTML = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.hidden = true;
    modalBody.innerHTML = "";
  }
});

readerBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("solution-btn")) {
    const dataDiv = e.target.previousElementSibling;
    if (dataDiv && dataDiv.classList.contains("solution-data")) {
      modalBody.innerHTML = dataDiv.innerHTML;
      modal.hidden = false;
    }
  }
});

