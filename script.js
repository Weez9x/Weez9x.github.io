const projects = [
  {
    id: "rogalique",
    title: "Rogalique Engine",
    type: "engine",
    status: "Core portfolio project",
    stack: "C++ / SFML / Custom Engine",
    problem: "Сделать учебный 2D game engine и игру на его основе, чтобы понять архитектуру игрового цикла, систем и компонентов.",
    solution: "Реализован движок с GameWorld, компонентами, рендерингом, коллизиями, камерой, аудио, UI и поведением врагов.",
    tech: ["C++", "SFML", "OOP", "Component System", "Collision", "Resource Management"],
    learned: "Глубже понял разделение ответственности модулей, работу игровых объектов, обновление состояния, рендеринг и структуру движка.",
    links: [
      { label: "GitHub", url: "https://github.com/Weez9x/Rogalique" }
    ]
  },
  {
    id: "sleepblocker",
    title: "SleepBlocker",
    type: "system",
    status: "Utility",
    stack: "C++ / WinAPI / Tray App",
    problem: "Нужна небольшая Windows-утилита, которая не дает системе уходить в сон и управляется из трея.",
    solution: "Приложение с режимами Off / Always / Timer, tray-меню, уведомлениями, автозапуском и защитой от второго запуска.",
    tech: ["C++", "WinAPI", "System Tray", "Timers", "Autostart", "Mutex"],
    learned: "Получил практику работы с Windows API, событиями, состоянием приложения, ресурсами и UX маленькой системной утилиты.",
    links: [
      { label: "GitHub", url: "https://github.com/Weez9x" }
    ]
  },
  {
    id: "string",
    title: "Custom String",
    type: "memory",
    status: "C++ fundamentals",
    stack: "C++11 / Memory / Rule of Five",
    problem: "Понять, как динамические строки устроены под капотом без std::string и контейнеров STL в основе.",
    solution: "Реализован класс String с динамической памятью, copy/move semantics, operator=, operator+= и внешним operator+.",
    tech: ["C++11", "RAII", "Manual Memory", "Move Semantics", "Copy Constructor"],
    learned: "Закрепил владение памятью, глубокое копирование, move-семантику, самоприсваивание и исключительную аккуратность с ресурсами.",
    links: [
      { label: "GitHub", url: "https://github.com/Weez9x" }
    ]
  },
  {
    id: "trading-simulator",
    title: "Trading Simulator",
    type: "simulation",
    status: "Work in progress",
    stack: "C++ / Simulation / Agents",
    problem: "Создать визуальный симулятор рынка, где агенты открывают и закрывают сделки на исторических данных.",
    solution: "Планируется ядро симуляции, визуализация сделок, учет TP/SL, спредов и поведения торговых агентов.",
    tech: ["C++", "Simulation", "Agents", "Market Data", "Visualization"],
    learned: "Проект развивает мышление в сторону системного моделирования, архитектуры симуляции и анализа поведения алгоритмов.",
    links: [
      { label: "GitHub", url: "https://github.com/Weez9x" }
    ]
  }
];

const projectList = document.getElementById("projectList");
const projectDetails = document.getElementById("projectDetails");
const detailsTitle = document.getElementById("detailsTitle");
const detailsTag = document.getElementById("detailsTag");
const filters = document.getElementById("filters");

let activeProjectId = projects[0].id;
let activeFilter = "all";

function renderProjects() {
  const visibleProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.type === activeFilter);

  projectList.innerHTML = "";

  visibleProjects.forEach(project => {
    const button = document.createElement("button");
    button.className = "project-button";
    if (project.id === activeProjectId) {
      button.classList.add("active");
    }

    button.innerHTML = `
      <div class="project-button-title">
        <strong>${project.title}</strong>
        <span class="badge">${project.type}</span>
      </div>
      <small>${project.stack}</small>
    `;

    button.addEventListener("click", () => {
      activeProjectId = project.id;
      renderProjects();
      renderDetails();
    });

    projectList.appendChild(button);
  });

  if (!visibleProjects.some(project => project.id === activeProjectId) && visibleProjects.length > 0) {
    activeProjectId = visibleProjects[0].id;
    renderProjects();
    renderDetails();
  }
}

function renderDetails() {
  const project = projects.find(item => item.id === activeProjectId);

  detailsTitle.textContent = project.title;
  detailsTag.textContent = project.status;

  const techList = project.tech.map(item => `<li>${item}</li>`).join("");
  const links = project.links.map(link => {
    return `<a class="action-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`;
  }).join("");

  projectDetails.innerHTML = `
    <h2>${project.title}</h2>
    <div class="project-meta">${project.stack}</div>

    <div class="details-grid">
      <div class="info-block">
        <h3>Problem</h3>
        <p>${project.problem}</p>
      </div>

      <div class="info-block">
        <h3>Solution</h3>
        <p>${project.solution}</p>
      </div>

      <div class="info-block">
        <h3>Tech</h3>
        <ul>${techList}</ul>
      </div>

      <div class="info-block">
        <h3>What I learned</h3>
        <p>${project.learned}</p>
      </div>
    </div>

    <div class="actions">${links}</div>
  `;
}

filters.addEventListener("click", event => {
  if (!event.target.matches(".filter-button")) {
    return;
  }

  document.querySelectorAll(".filter-button").forEach(button => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");
  activeFilter = event.target.dataset.filter;
  renderProjects();
  renderDetails();
});

renderProjects();
renderDetails();
