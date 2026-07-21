window.portfolioProjects = [
  {
    id: "rogalique",
    file: "Rogalique.cpp",
    title: "Rogalique Engine",
    status: "Завершённый учебный проект",
    stack: "C++ / SFML / Custom Engine",
    description: "2D roguelike, построенный поверх собственного учебного игрового движка. Проект создавался для практического изучения игрового цикла, компонентной архитектуры и взаимодействия подсистем.",
    features: [
      "GameWorld и компонентная модель объектов",
      "рендеринг, камера и управление ресурсами",
      "коллизии, триггеры и физическое взаимодействие",
      "аудио, UI, здоровье, броня и атаки",
      "поведение противников и построение уровней"
    ],
    learned: "Проект дал практическое понимание границ ответственности модулей, жизненного цикла игровых объектов и архитектуры небольшого движка.",
    tech: ["C++", "SFML", "OOP", "Game Engine", "Components", "Git"],
    url: "https://github.com/Weez9x/Rogalique_Engine"
  },
  {
    id: "opengl",
    file: "ParticleSandbox.cpp",
    title: "OpenGL Particle Sandbox",
    status: "В активной разработке",
    stack: "C++ / OpenGL / Graphics",
    description: "Учебно-исследовательский графический sandbox для последовательного изучения современного OpenGL и проектирования системы частиц.",
    features: [
      "модульная структура графических подсистем",
      "shader, camera, texture и mesh pipeline",
      "базовая система частиц и эмиттеры",
      "планируемое освещение и постобработка"
    ],
    learned: "Текущий фокус — устройство графического pipeline, управление GPU-ресурсами и архитектура рендеринга.",
    tech: ["C++", "OpenGL", "GLSL", "GLFW", "CMake"],
    url: "https://github.com/Weez9x/OpenGl_SandBox_ParticleSystem",
    notice: "Проект находится в активной разработке. Текущая версия пока не является демонстрационной и не отражает конечный результат."
  },
  {
    id: "mystring",
    file: "MyString.hpp",
    title: "MyString",
    status: "Тестовое задание",
    stack: "C++11 / Memory / Rule of Five",
    description: "Собственная реализация динамической строки без использования std::string, контейнеров и умных указателей STL в основе.",
    features: [
      "конструкторы копирования и перемещения",
      "copy и move assignment",
      "глубокое копирование и самоприсваивание",
      "operator+= и внешние operator+",
      "поддержка традиционных C-строк"
    ],
    learned: "Закрепил владение динамической памятью, RAII, move-семантику и Rule of Five.",
    tech: ["C++11", "RAII", "Manual Memory", "Move Semantics"],
    url: "https://github.com/Weez9x/MyString"
  },
  {
    id: "arkanoid",
    file: "Arkanoid.cpp",
    title: "Arkanoid Game",
    status: "Завершённый учебный проект",
    stack: "C++ / SFML / Game Logic",
    description: "Классический Arkanoid, созданный как практический проект по объектно-ориентированному программированию и базовой игровой архитектуре.",
    features: [
      "игровой цикл и управление состояниями",
      "столкновения мяча, платформы и блоков",
      "подсчёт очков и управление жизненным циклом объектов"
    ],
    learned: "Получил практику декомпозиции игровой логики и обработки столкновений в реальном времени.",
    tech: ["C++", "SFML", "OOP", "Collision"],
    url: "https://github.com/Weez9x/ArkanoidGame"
  },
  {
    id: "snake",
    file: "Snake.cpp",
    title: "Snake Game",
    status: "Завершённый учебный проект",
    stack: "C++ / SFML / Fundamentals",
    description: "Игра Snake, с которой началась системная практика разработки небольших игровых приложений на C++.",
    features: [
      "основной игровой цикл",
      "обработка ввода и движения",
      "рост змейки, генерация еды и проверка столкновений"
    ],
    learned: "Закрепил базовую структуру игрового приложения, работу со временем и обновление состояния мира.",
    tech: ["C++", "SFML", "Game Loop"],
    url: "https://github.com/Weez9x/SnakeGame"
  }
];
