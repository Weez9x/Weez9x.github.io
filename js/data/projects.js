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
    url: "https://github.com/Weez9x/Rogalique_Engine",
    media: [
      {
        src: "https://raw.githubusercontent.com/Weez9x/Rogalique_Engine/main/Docks/gameplay_1.gif",
        alt: "Игровой процесс Rogalique — исследование уровня"
      },
      {
        src: "https://raw.githubusercontent.com/Weez9x/Rogalique_Engine/main/Docks/gameplay_2.gif",
        alt: "Игровой процесс Rogalique — взаимодействие с противниками"
      },
      {
        src: "https://raw.githubusercontent.com/Weez9x/Rogalique_Engine/main/Docks/gameplay_3.gif",
        alt: "Игровой процесс Rogalique — механики собственного движка"
      }
    ]
  },
  {
    id: "opengl",
    file: "ParticleSandbox.cpp",
    title: "OpenGL Particle Sandbox",
    status: "В активной разработке",
    stack: "C++ / OpenGL 3.3 / GLSL",
    description: "Учебная физическая и графическая песочница на C++ и OpenGL без использования игровых движков. Проект развивается как основа для экспериментов с рендерингом и симуляцией частиц.",
    features: [
      "OpenGL 3.3 Core через GLFW и GLAD",
      "GLSL shader pipeline",
      "perspective camera и управление камерой",
      "перевод координат курсора из screen space в world space",
      "собственные Vector3 и Matrix4",
      "генератор частиц и burst-спавн мышью",
      "semi-implicit Euler integration",
      "gravity, damping и restitution bounce",
      "GPU point-sprite rendering",
      "динамическое обновление данных в VBO"
    ],
    learned: "Проект закрепляет устройство shader pipeline, работу с GPU-буферами, камерами, координатными преобразованиями и базовой физической интеграцией частиц.",
    tech: ["C++", "OpenGL 3.3", "GLSL", "GLFW", "GLAD"],
    url: "https://github.com/Weez9x/OpenGl_SandBox_ParticleSystem/tree/test",
    notice: "Проект находится в активной разработке. Описание относится к текущей ветке test и не заявляет полноценный игровой движок."
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
    url: "https://github.com/Weez9x/ArkanoidGame",
    media: [
      {
        src: "https://raw.githubusercontent.com/Weez9x/ArkanoidGame/master/Docks/gameplay.gif",
        alt: "Игровой процесс Arkanoid"
      }
    ]
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
    url: "https://github.com/Weez9x/SnakeGame",
    media: [
      {
        src: "https://raw.githubusercontent.com/Weez9x/SnakeGame/master/Docks/gameplay.gif",
        alt: "Игровой процесс Snake"
      }
    ]
  }
];
