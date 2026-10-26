# Ilya Vagin | Portfolio

Personal portfolio website built with HTML, CSS and JavaScript.

The website showcases my projects, technical skills, resume links and certificates, with a focus on C++, AI infrastructure and game engine architecture.

![GitHub last commit](https://img.shields.io/github/last-commit/Weez9x/Weez9x.github.io)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## Live Demo

https://weez9x.github.io/

## Features

- Responsive design
- Smooth page transitions
- Terminal/IDE inspired interface
- Project showcase
- Downloadable resume
- Certificate links
- Contact page
- Dark theme

## Technologies

- HTML5
- CSS3
- JavaScript (ES6)
- GitHub Pages

## Projects

- TensorForge
- Rogalique Engine
- MyString (C++11)
- Snake
- Arkanoid
- Steam Workshop game assets (7 published works, grouped as one project)

## TensorForge

TensorForge is an actively developed C++ computing library and an engineering project for exploring CPU performance and the foundations of AI infrastructure. [GitHub repository](https://github.com/Weez9x/TensorForge).

Implemented work includes:

- contiguous row-major `Matrix` storage with overflow checks
- IJK, IKJ, and blocked matrix multiplication
- parallel IKJ multiplication with rows distributed across threads
- correctness tests and a CMake Release benchmark

One author-run benchmark for `1024 × 1024` matrices measured about 54.8 ms for IKJ with eight threads and about 9.7 seconds for IJK. These are machine- and run-specific results, not universal performance guarantees.

Next steps include studying compiler auto-vectorization and SIMD, then developing tensor operations. CUDA and a possible separate inference runtime remain longer-term ideas and are not implemented.

## Certificates

- XYZ School: C++ для разработки игр, 98 академических часов (`assets/2025-1466.pdf`)

## Structure

- `index.html` - page markup
- `css/` - layout and component styles
- `js/app.js` - page rendering and navigation
- `js/data/projects.js` - project data
- `assets/` - resume, certificates and media assets

## Local запуск

Clone the repository:

```bash
git clone https://github.com/Weez9x/Weez9x.github.io.git
```

Open:

```text
index.html
```

or run any local web server.

## AI Assistance

This portfolio was designed and developed by **Ilya Vagin**.

Modern AI tools were used during development to assist with layout, design ideas and text refinement. All engineering decisions, implementation and project content were created and reviewed by the author.

## License

MIT License
