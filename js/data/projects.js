window.portfolioProjects = [
  {
    id: "tensorforge",
    file: "TensorForge",
    title: "TensorForge",
    status: "В активной разработке",
    stack: "C++ / CMake / Multithreading",
    description: "Вычислительная библиотека и инженерная площадка для изучения производительности CPU и основ AI-инфраструктуры. Сейчас проект сосредоточен на матрицах, корректности вычислений и сравнении алгоритмов; тензорные операции запланированы как следующий этап.",
    features: [
      "Matrix с непрерывным построчным хранением и проверкой переполнения размера",
      "алгоритмы умножения матриц IJK, IKJ и блочный",
      "параллельный IKJ с распределением строк результата между потоками",
      "тесты результатов, несовместимых размеров, единичной матрицы и сравнения алгоритмов",
      "CMake-сборка и Release-бенчмарк"
    ],
    learned: "Исследую влияние порядка циклов, расположения данных в памяти, кэш-локальности и многопоточности на производительность вычислительных ядер.",
    tech: ["C++", "CMake", "Matrix Algorithms", "Multithreading", "Testing", "Benchmarking"],
    url: "https://github.com/Weez9x/TensorForge",
    notice: "В одном из замеров на матрицах 1024×1024 IKJ с 8 потоками занял около 54,8 мс, а IJK — около 9,7 с. Это результат конкретной машины и запуска, а не универсальная гарантия.",
    roadmap: [
      "Изучить автовекторизацию компилятором и сравнить её с SIMD-реализацией",
      "Добавить N-мерные тензоры и базовые операции над ними",
      "Позже исследовать CUDA; отдельный runtime для инференса пока остаётся концепцией"
    ]
  },
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
  },
  {
    id: "steam-workshop",
    file: "SteamWorkshop.art",
    title: "Игровые ассеты для Steam Workshop",
    status: "7 опубликованных работ",
    stack: "CS:GO / Rust / Substance 3D",
    description: "Подборка созданных игровых предметов и материалов для CS:GO и Rust. Работы объединены в один проект и показывают опыт создания контента для Steam Workshop.",
    features: [
      "создание PBR-материалов и текстур",
      "процедурная работа с материалами",
      "подготовка и запекание текстур для игровых ассетов",
      "публикация работ в Steam Workshop"
    ],
    learned: "Практика помогла разобраться в пайплайне игрового контента: от подготовки материалов и текстур до готового ассета в игре.",
    tech: ["Substance 3D Painter", "Substance 3D Designer", "Photoshop", "PBR", "Texture Baking"],
    url: "https://steamcommunity.com/id/forester2k18/myworkshopfiles/",
    media: [
      {
        src: "assets/workshop/1830841700.webp",
        alt: "P250 — BANG, работа для CS:GO"
      },
      {
        src: "assets/workshop/2629702868.webp",
        alt: "Sawed-Off — Scary Friend, работа для CS:GO"
      },
      {
        src: "assets/workshop/2504367354.webp",
        alt: "Ancient Glacier, работа для Rust"
      }
    ]
  }
];
