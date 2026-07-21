const projects = window.portfolioProjects;
const projectNavigation = document.getElementById("projectNavigation");
const navigation = document.getElementById("navigation");
const tabs = document.getElementById("tabs");
const editor = document.getElementById("editor");

const pages = {
  home: {
    file: "Portfolio.cpp",
    render: renderHome
  },
  about: {
    file: "About.hpp",
    render: renderAbout
  },
  skills: {
    file: "Skills.hpp",
    render: renderSkills
  },
  contacts: {
    file: "Contacts.hpp",
    render: renderContacts
  }
};

let activePage = "home";
let openTabs = ["home"];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildNavigation() {
  const homeButton = document.createElement("button");
  homeButton.className = "tree-item active";
  homeButton.dataset.page = "home";
  homeButton.textContent = "◇ Portfolio.cpp";
  projectNavigation.before(homeButton);

  projects.forEach(project => {
    const button = document.createElement("button");
    button.className = "tree-item";
    button.dataset.page = project.id;
    button.textContent = `◇ ${project.file}`;
    projectNavigation.appendChild(button);
  });
}

function openPage(pageId) {
  if (!openTabs.includes(pageId)) {
    openTabs.push(pageId);
  }

  activePage = pageId;
  renderTabs();
  renderActivePage();
  updateNavigation();
}

function getPageFile(pageId) {
  const staticPage = pages[pageId];
  if (staticPage) {
    return staticPage.file;
  }

  return projects.find(project => project.id === pageId)?.file ?? "Unknown.cpp";
}

function renderTabs() {
  tabs.innerHTML = "";

  openTabs.forEach(pageId => {
    const button = document.createElement("button");
    button.className = `tab${pageId === activePage ? " active" : ""}`;
    button.textContent = getPageFile(pageId);
    button.addEventListener("click", () => openPage(pageId));
    tabs.appendChild(button);
  });
}

function renderActivePage() {
  const staticPage = pages[activePage];

  if (staticPage) {
    editor.innerHTML = staticPage.render();
    return;
  }

  const project = projects.find(item => item.id === activePage);
  editor.innerHTML = renderProject(project);
}

function updateNavigation() {
  navigation.querySelectorAll(".tree-item").forEach(item => {
    item.classList.toggle("active", item.dataset.page === activePage);
  });
}

function renderHome() {
  return `
    <section class="code-page">
      <p class="code-comment">// C++ developer portfolio</p>
      <h1 class="hero-name">Илья Вагин</h1>
      <p class="hero-role">C++ Developer</p>
      <p class="lead">
        Разрабатываю игровые приложения, системные утилиты и учебные проекты на C++.
        Основной интерес — архитектура игровых движков, компьютерная графика,
        управление памятью и внутреннее устройство программных систем.
      </p>

      <div class="code-card">
<pre><span class="code-keyword">class</span> <span class="code-type">Developer</span>
{
<span class="code-keyword">public</span>:
    <span class="code-property">Name</span> = <span class="code-string">"Илья Вагин"</span>;
    <span class="code-property">Position</span> = <span class="code-string">"C++ Developer"</span>;
    <span class="code-property">Focus</span> = { <span class="code-string">"Game Engine"</span>, <span class="code-string">"Graphics"</span>, <span class="code-string">"Systems"</span> };
    <span class="code-property">Current</span> = { <span class="code-string">"OpenGL"</span>, <span class="code-string">"CMake"</span>, <span class="code-string">"Interview preparation"</span> };
};</pre>
      </div>

      <div class="actions">
        <a class="button-link" href="https://github.com/Weez9x" target="_blank" rel="noreferrer">GitHub</a>
        <button class="button-link" type="button" data-open-page="rogalique">Открыть основной проект</button>
      </div>
    </section>
  `;
}

function renderProjectMedia(project) {
  if (!project.media?.length) {
    return "";
  }

  const items = project.media.map(media => `
    <figure class="project-media-item">
      <img src="${media.src}" alt="${escapeHtml(media.alt)}" loading="lazy">
    </figure>
  `).join("");

  return `
    <section class="project-media" aria-label="Демонстрация проекта">
      <div class="project-media-header">
        <span class="code-comment">// gameplay preview</span>
        <span>${project.media.length === 1 ? "GIF из README" : `${project.media.length} GIF из README`}</span>
      </div>
      <div class="project-media-grid${project.media.length === 1 ? " single" : ""}">
        ${items}
      </div>
    </section>
  `;
}

function renderProject(project) {
  const features = project.features.map(item => `<li>${escapeHtml(item)}</li>`).join("");
  const badges = project.tech.map(item => `<span class="badge">${escapeHtml(item)}</span>`).join("");
  const notice = project.notice ? `<div class="notice">${escapeHtml(project.notice)}</div>` : "";
  const media = renderProjectMedia(project);

  return `
    <section class="code-page">
      <p class="code-comment">// project file</p>
      <h1 class="page-title">${escapeHtml(project.title)}</h1>
      <div class="page-meta">${escapeHtml(project.status)} · ${escapeHtml(project.stack)}</div>
      <p class="lead">${escapeHtml(project.description)}</p>
      ${notice}
      ${media}

      <div class="project-grid">
        <section class="info-block">
          <h2>Что реализовано</h2>
          <ul>${features}</ul>
        </section>
        <section class="info-block">
          <h2>Что изучено</h2>
          <p>${escapeHtml(project.learned)}</p>
        </section>
      </div>

      <section class="content-card">
        <h2>Технологии</h2>
        <div class="badges">${badges}</div>
      </section>

      <div class="actions">
        <a class="button-link" href="${project.url}" target="_blank" rel="noreferrer">Открыть GitHub</a>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="code-page">
      <p class="code-comment">// engineering profile</p>
      <h1 class="page-title">Обо мне</h1>
      <p class="lead">
        Я изучаю C++ через реальные проекты: игры, собственный движок, системные утилиты
        и низкоуровневые реализации. Мне важно не только использовать готовые инструменты,
        но и понимать их устройство: память, игровой цикл, ресурсы, рендеринг,
        состояние объектов и границы ответственности модулей.
      </p>
      <div class="content-card">
        <p class="code-comment">// current mission</p>
        <p>Развивать портфолио, углубляться в OpenGL и архитектуру игровых движков, готовиться к работе C++ разработчиком.</p>
      </div>
    </section>
  `;
}

function renderSkills() {
  return `
    <section class="code-page">
      <p class="code-comment">// technologies without fake percentages</p>
      <h1 class="page-title">Навыки</h1>
      <div class="skills-grid">
        <section class="info-block"><h3>Языки</h3><div class="badges"><span class="badge">C++</span><span class="badge">GLSL</span></div></section>
        <section class="info-block"><h3>Библиотеки и API</h3><div class="badges"><span class="badge">SFML</span><span class="badge">OpenGL</span><span class="badge">GLFW</span><span class="badge">WinAPI</span></div></section>
        <section class="info-block"><h3>Инструменты</h3><div class="badges"><span class="badge">Git</span><span class="badge">CMake</span><span class="badge">Visual Studio</span><span class="badge">Linux</span></div></section>
        <section class="info-block"><h3>Практика</h3><div class="badges"><span class="badge">OOP</span><span class="badge">RAII</span><span class="badge">Move Semantics</span><span class="badge">Game Architecture</span></div></section>
      </div>
    </section>
  `;
}

function renderContacts() {
  return `
    <section class="code-page">
      <p class="code-comment">// let's build something useful</p>
      <h1 class="page-title">Контакты</h1>
      <p class="lead">Открыт к стажировкам, junior-позициям и задачам, связанным с C++, gamedev и графикой.</p>
      <div class="contact-list">
        <a href="https://github.com/Weez9x" target="_blank" rel="noreferrer">github.com/Weez9x</a>
        <a href="mailto:weezex2k18@gmail.com">weezex2k18@gmail.com</a>
        <a href="https://t.me/weezex2k18" target="_blank" rel="noreferrer">@weezex2k18</a>
      </div>
    </section>
  `;
}

navigation.addEventListener("click", event => {
  const item = event.target.closest(".tree-item");
  if (item) {
    openPage(item.dataset.page);
  }
});

editor.addEventListener("click", event => {
  const button = event.target.closest("[data-open-page]");
  if (button) {
    openPage(button.dataset.openPage);
  }
});

buildNavigation();
renderTabs();
renderActivePage();