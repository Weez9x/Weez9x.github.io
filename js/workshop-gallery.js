const workshopGalleryItems = [
  { id: "1830841700", title: "CS20 | P250 - BANG", game: "CS:GO", image: "assets/workshop/1830841700.webp" },
  { id: "1929989345", title: "Mint Ice | MP5-SD", game: "CS:GO", image: "assets/workshop/1929989345.webp" },
  { id: "2629702868", title: "Sawed-Off | Scary Friend", game: "CS:GO", image: "assets/workshop/2629702868.webp" },
  { id: "2504367354", title: "Ancient Glacier", game: "Rust", image: "assets/workshop/2504367354.webp" },
  { id: "2511812162", title: "Ancient Glacier Armored Double Door", game: "Rust", image: "assets/workshop/2511812162.webp" },
  { id: "2535624496", title: "AK47 | Knockout Blow", game: "Rust", image: "assets/workshop/2535624496.webp" },
  { id: "2537797791", title: "Custom SMG | Medical Injector", game: "Rust", image: "assets/workshop/2537797791.webp" }
];

function renderWorkshopGroup(title, game) {
  const groupItems = workshopGalleryItems.filter(item => item.game === game);
  const cards = groupItems.map(item => `
    <article class="workshop-card">
      <a class="workshop-preview" href="https://steamcommunity.com/sharedfiles/filedetails/?id=${item.id}" target="_blank" rel="noreferrer">
        <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
      </a>
      <div class="workshop-card-body">
        <span class="workshop-game">${escapeHtml(item.game)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <a class="workshop-open" href="https://steamcommunity.com/sharedfiles/filedetails/?id=${item.id}" target="_blank" rel="noreferrer">Open Workshop ↗</a>
      </div>
    </article>
  `).join("");

  return `
    <section class="workshop-group">
      <div class="workshop-group-heading">
        <h2>${title}</h2>
        <span>${groupItems.length} works</span>
      </div>
      <div class="workshop-grid">${cards}</div>
    </section>
  `;
}

function renderWorkshopGallery() {
  return `
    <section class="code-page">
      <p class="code-comment">// game art & content pipeline</p>
      <h1 class="page-title">Steam Workshop</h1>
      <div class="page-meta">Rust · Counter-Strike · Game assets</div>
      <p class="lead">
        До перехода в C++ я создавал игровые скины и материалы для Steam Workshop.
        Этот опыт дал мне практическое понимание PBR-пайплайна, процедурных материалов,
        текстурирования и подготовки игрового контента.
      </p>

      <div class="project-grid">
        <section class="info-block">
          <h2>Инструменты</h2>
          <div class="badges"><span class="badge">Substance 3D Painter</span><span class="badge">Substance 3D Designer</span><span class="badge">Photoshop</span></div>
        </section>
        <section class="info-block">
          <h2>Навыки</h2>
          <div class="badges"><span class="badge">PBR Workflow</span><span class="badge">Material Authoring</span><span class="badge">Texture Baking</span><span class="badge">UV Mapping</span><span class="badge">Procedural Materials</span></div>
        </section>
      </div>

      ${renderWorkshopGroup("Counter-Strike", "CS:GO")}
      ${renderWorkshopGroup("Rust", "Rust")}

      <div class="actions">
        <a class="button-link" href="${workshopUrl}" target="_blank" rel="noreferrer">Открыть всю мастерскую</a>
      </div>
    </section>
  `;
}

pages.workshop.render = renderWorkshopGallery;
