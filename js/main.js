/* =====================================================================
   SITE CONFIG — edit this block to make the page yours.
   Everything below is generated from GAMES. Icons are simple inline SVGs.

   SCREENSHOTS: each game has a `screenshots` array. Leave `src: null`
   to show a styled placeholder panel (fine for launch), or set
   `src: "images/your-screenshot.jpg"` once you have real captures —
   the modal will use the real image automatically.
===================================================================== */
const ICONS = {
  gem: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 6-3 12M15 3l-3 6 3 12"/></svg>',
  sword: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M14.5 2.5 21 9l-2 2-6.5-6.5zM12.5 6.5 4 15v3.5H7.5L16 10"/><path d="M3 21l2.5-2.5"/></svg>',
  cube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-1 4h-8s-1-2-1-4c0-4 2-8 5-10z"/><circle cx="12" cy="10" r="1.6"/><path d="M9 16l-3 5M15 16l3 5M10 21h4"/></svg>',
  puzzle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M9 3h4v3.2a2 2 0 0 0 3 1.7A2 2 0 0 1 19 9.6V13h-3.2a2 2 0 0 0-1.7 3 2 2 0 0 1-1.7 3H9v-4a2 2 0 0 0-2-2H3V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2z"/></svg>',
  signal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 12a9 9 0 0 1 18 0"/><path d="M6.5 12a5.5 5.5 0 0 1 11 0"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><path d="M4 20l16-16" stroke-dasharray="2 2"/></svg>'
};

const GAMES = [
  {
    title: "Ultimate Ludo 3D",
    img:'https://img.youtube.com/vi/2Uh_ydM6mU0/maxresdefault.jpg',
    type: "personal",
    genre: "Board Game / 3D Strategy",
    engine: "Unity",
    platform: "iOS / Android",
    role: "Solo Developer",
    year: "2024",
    icon: "dice",
    accent: "#00e5ff",
    desc: "A fully 3D reimagining of the classic Ludo board game, packed with deep customization options and modern gameplay improvements.",
    screenshots: [
      { src: 'https://play-lh.googleusercontent.com/tfnX_M0TkXdKcWMu68Yw9E8W4tda_kq_b9o39wAD7iCPb8GdQfHiv67njYe_2-53GsXtj662bJNFYQrcCDfcvg=w2560-h1440-rw' }, 
      { src: 'https://play-lh.googleusercontent.com/26aQLq2fU-rcklpJEkrKlkUvwzC37JQmykhY2wOGt36ZxAfHyYW8UTr_SYWvU_70uUVhNQdcgbTTapoCCYCFCUI=w2560-h1440-rw' }, 
      { src: 'https://play-lh.googleusercontent.com/vAkKphkrNpZRiK0n-2Is1ZY3MYrPdXkqUBADeYGZcRPv2229eOwa_0NyH8j5lW36w3N30BreIgrEuyrUxzxIkQ=w2560-h1440-rw' }
    ],
    link:'https://sylphbox.com/games/ludo'
  },
  {
    title: "Tiny Games",
    img:'https://img.youtube.com/vi/gFCXwWHLE-M/maxresdefault.jpg',
    type: "personal",
    genre: "Mini-Game Collection",
    engine: "Unity",
    platform: "iOS / Android",
    role: "Solo Developer",
    year: "2025",
    icon: "cube",
    accent: "#c6ff3c",
    desc: "A collection of small, bite-sized games designed for quick, casual play sessions on mobile.",
    screenshots: [
      { src: 'https://play-lh.googleusercontent.com/WxEigqybcgsdZQylPqLjwK3TVaxQZnvt0Ol3E_r1MObmZfu_G2B3kmzCmZciCX7_d3BpUUGpPziyNO9Hio_B0iw=w2560-h1440-rw' },
      { src: 'https://play-lh.googleusercontent.com/pn5ZIP4zSTLKGGtD8evlUDmEwJ72hKRANOvv9W2llM8tXkBPFu0iLLfIYfXNjZcvzEP4eV73svIkuq2MpuxAvw=w2560-h1440-rw' }, 
      { src: 'https://play-lh.googleusercontent.com/_RFWuPZeU0LUGIh9xJS3AODXNv9rSKxpBVkM53qYODfgjgKikjDobMe5ea9wYh_XbJJ16S9DHe-hcCIe5ESmoA=w2560-h1440-rw' }
    ],
    link:'https://tinygames.sylphbox.com/'
  },
  {
    title: "The Perfect Choice",
    img:'https://gamedva.com/wp-content/uploads/2023/08/The-Perfect-Choice-mod-free.jpg',
    type: "client",
    genre: "Interactive Stories",
    engine: "Unity",
    platform: "iOS / Android",
    role: "Developer",
    year: "2022",
    icon: "book",
    accent: "#ff2fd0",
    desc: "An interactive stories app built in Unity with a custom PHP-based backend, developed for a client.",
    screenshots: [
      { src: 'https://d1nxzqpcg2bym0.cloudfront.net/google_play/com.Zvoid.MSA/8571d0c2-d1ec-11ec-9445-39cd6a4845d7/640' }
    ],
    link:null
  },
  {
    title: "Snake Classic",
    img:'https://img.youtube.com/vi/TYU_33izA34/maxresdefault.jpg',
    type: "personal",
    genre: "Arcade",
    engine: "Unity",
    platform: "iOS / Android",
    role: "Solo Developer",
    year: "2020",
    icon: "signal",
    accent: "#c6ff3c",
    desc: "A modern remake of the classic Snake game, featuring a full level-based progression system.",
    screenshots: [
      { src: 'https://play-lh.googleusercontent.com/hUywJ3CzSXoiFANfbv9_k6f_naD7ESUXdA_w9jqTONpeJaV3yHIyGhSgCPpTXQZ21RGge81P48WRLxkBfyzspnA=w2560-h1440-rw' }, 
      { src: 'https://play-lh.googleusercontent.com/9CMBsgxQuG8D-jSoAtFckQVxzQDSE9-N1qiA6NpjmFmzseTPReG3isKoAnw5Ym7WXnAn579U8sEAGGtPZowB=w2560-h1440-rw' },
      { src: 'https://play-lh.googleusercontent.com/wpVIFDMVtZicbgqk-Gz5d7gDCRjMoYmoNOp5Y8ob4huyly4GjcacgFJY7Ksh5pNuTDG5P8C31cMcyUseKclvbcU=w2560-h1440-rw' }
    ],
    link:'http://sylphbox.com/dl/snake'
  },
  {
    title: "Hexa Puzzle",
    img:'https://play-lh.googleusercontent.com/Xz48BBClL2VkipzReoFl5w0BPRlRA16rz9HnLmwwvkDs27jC_6O3Drhfb6nYVbasc-vG2p7rXJq7cw5kvXOt=w2560-h1440-rw',
    type: "personal",
    genre: "Number Sorting Puzzle",
    engine: "Unity",
    platform: "iOS / Android",
    role: "Solo Developer",
    year: "2019",
    icon: "gem",
    accent: "#ff2fd0",
    desc: "A number-sorting puzzle game set on hexagon-shaped tiles, featuring more than 50 handcrafted levels.",
    screenshots: [
      { src: 'https://play-lh.googleusercontent.com/qpETy2sU0eMqXfYD9grPvYYh7xgn8_xM7ab8lHSvX7FcX__W2xNUc-hfEuPrXPfbXaeG8myMMcjDmJ_IARZ_Xi4=w2560-h1440-rw' }, 
      { src: 'https://play-lh.googleusercontent.com/s7l1ZGtBcea-iHmA_ZNJ6FcR7JjwLC9CStkIm3sdGS4YYB_VUY_cvPN82R1mNyUP3IbJ3o-u9HAWbphNUEm9rBo=w2560-h1440-rw' }, 
      { src: 'https://play-lh.googleusercontent.com/s5aN2SHwnW9xRI_u7p2lEDBl4E1VurBmPtxm9a7x3FkLaHl9JiPp-bEwlGy1q5jnlbF6FQzfR9JOIonUTtKWiw=w2560-h1440-rw' }
    ],
    link:'http://sylphbox.com/dl/hex'
  },
  {
    title: "Ring Wireloop",
    img:'https://img.youtube.com/vi/r58CeAoGhcU/maxresdefault.jpg',
    type: "personal",
    genre: "Endless Arcade",
    engine: "Unity",
    platform: "iOS / Android",
    role: "Solo Developer",
    year: "2018",
    icon: "rocket",
    accent: "#00e5ff",
    desc: "A neon-themed endless wireloop game testing reflexes and precision timing.",
    screenshots: [
      { src: 'https://play-lh.googleusercontent.com/xcRPkvS9XHPXvOMk68lKbJkIY_FZ_2v8zrK7ZZ3dpjgia2dBOw7n5_GWXTSOmVsX_g3PeMeqoNE-N7WZ7ElDnWw=w2560-h1440-rw' }, 
      { src: 'https://play-lh.googleusercontent.com/btauBMvy_peXD5MumjSQv_731UkjVHGvoApVQ7-6h3AM2SwCgvgOYOf-lAN4hgotkgGNhsCZrv4l-Kx7lnJ0OS0=w2560-h1440-rw' },
      { src: 'https://play-lh.googleusercontent.com/phAJrN0KzyNa9WHVvYIdmKwoElvgKAjmssZtuROX1SNQ9yk1VgfrVZmW2bf6NWbiCRMdHCLyMTLDX-aGOGQ=w2560-h1440-rw' }
    ],
    link:'http://sylphbox.com/dl/ring'
  },
  {
    title: "Tower Jump",
    img:'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8b/a8/57/8ba8570d-8e92-b50d-4fa7-7b21f131b4b2/Placeholder.mill/400x400bb-75.webp',
    type: "personal",
    genre: "Endless Arcade",
    engine: "Unity",
    platform: "iOS / Android",
    role: "Solo Developer",
    year: "2018",
    icon: "cube",
    accent: "#c6ff3c",
    desc: "An endless jumping game where a ball climbs ever higher up a procedurally generated tower.",
    screenshots: [
      { src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/27/cf/e0/27cfe0cd-ed5d-a731-51c7-56c1bbd1644b/pr_source.png/230x498bb.webp' }, 
      { src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/28/ee/7d/28ee7daf-4719-9d4b-573a-db58e223a22b/pr_source.png/230x498bb.webp' }
    ],
    link:'https://apps.apple.com/app/tower-jump-helix-climbing/id1476926399'
  },
  {
    title: "Infinity Bridge",
    img: 'https://play-lh.googleusercontent.com/vMyO8KOzXd9a3JPtcQoe9vy6AL7X7_LJYBN9oCGKgQMh3jImrl1UIt7IN5dfTZcHuRd_BxodfrQ0eejeFES0Tw=w512-h512-rw',
    type: "personal",
    genre: "Endless Runner",
    engine: "Unity",
    platform: "iOS / Android",
    role: "Solo Developer",
    year: "2023",
    icon: "sword",
    accent: "#ff2fd0",
    desc: "An endless car runner game set on a never-ending bridge, testing speed and reaction time.",
    screenshots: [
      { src: 'https://play-lh.googleusercontent.com/0nLnrx7pg96ONB5bH58TK8vMYge1JiidvAdiAaCgBKJ7OSHTGr7o9doxqAxfeWOKbtG51YyY-4SECgqwR4kW4g=w2560-h1440-rw' }, 
    ],
    link:'https://play.google.com/store/apps/details?id=com.sylphbox.infinity.bridgerace'
  }
];

/* =====================================================================
   RENDER GAME CARDS (bootstrap column grid)
===================================================================== */
const gamesGrid = document.getElementById('gamesGrid');

function renderGames(filter) {
  gamesGrid.innerHTML = '';
  const items = filter === 'all' ? GAMES : GAMES.filter((g) => g.type === filter);

  items.forEach((g) => {
    const idx = GAMES.indexOf(g);
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
      <article class="card game-card h-100" style="--card-accent:${g.accent};">
        <div class="game-art" data-open-shots="${idx}" style="color:${g.accent};">
          <div class="art-grid"></div>
          <div class="art-glow"></div>
          <span class="game-tag ${g.type}">${g.type === 'personal' ? 'Personal' : 'Client Work'}</span>
          <img src="${g.img}" />
          <span class="art-hint">View screenshots</span>
        </div>
        <div class="game-body">
          <h3 class="game-title">${g.title}</h3>
          <p class="game-desc">${g.desc}</p>
          <div class="game-meta">
            <div><span class="k">Genre</span><span class="v">${g.genre}</span></div>
            <div><span class="k">Year</span><span class="v">${g.year}</span></div>
            <div><span class="k">Engine</span><span class="v">${g.engine}</span></div>
            <div><span class="k">Platform</span><span class="v">${g.platform}</span></div>
          </div>
          <div class="game-links">
            <button class="shots-btn" data-open-shots="${idx}">🖼 Screenshots</button>
            ${g.link == null ? '' : '<a href="'+g.link+'" target="_blank">Play / Store →</a>'}
          </div>
        </div>
      </article>
    `;
    gamesGrid.appendChild(col);
  });
}
renderGames('all');

document.getElementById('filterRow').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  renderGames(btn.dataset.filter);
});

/* =====================================================================
   SCREENSHOT MODAL (Bootstrap modal shell + custom gallery inside)
===================================================================== */
const modalEl = document.getElementById('shotsModal');
const bsModal = new bootstrap.Modal(modalEl);
const modalTitle = document.getElementById('modalTitle');
const modalTag = document.getElementById('modalTag');
const modalShot = document.getElementById('modalShot');
const modalDots = document.getElementById('modalDots');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const modalCard = document.getElementById('modalCard');

let activeGame = null;
let activeIndex = 0;

function openModal(gameIndex) {
  activeGame = GAMES[gameIndex];
  activeIndex = 0;
  modalTitle.textContent = activeGame.title;
  modalTag.textContent = activeGame.type === 'personal' ? 'Personal' : 'Client Work';
  modalTag.className = 'modal-tag ' + activeGame.type;
  modalCard.style.setProperty('--modal-accent', activeGame.accent);

  modalDots.innerHTML = '';
  activeGame.screenshots.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Go to screenshot ' + (i + 1));
    dot.addEventListener('click', () => { activeIndex = i; renderShot(); });
    modalDots.appendChild(dot);
  });

  renderShot();
  bsModal.show();
}

function renderShot() {
  const shot = activeGame.screenshots[activeIndex];
  if (shot && shot.src) {
    modalShot.innerHTML = `<img src="${shot.src}" alt="${activeGame.title} screenshot ${activeIndex + 1}">`;
  } else {
    modalShot.innerHTML = `
      <div class="placeholder">
        <div class="grid-lines"></div>
        ${ICONS[activeGame.icon]}
        <span>${activeGame.title} — screenshot ${activeIndex + 1} of ${activeGame.screenshots.length}</span>
      </div>`;
  }
  [...modalDots.children].forEach((d, i) => d.classList.toggle('active', i === activeIndex));
}

function stepShot(dir) {
  if (!activeGame) return;
  const n = activeGame.screenshots.length;
  activeIndex = (activeIndex + dir + n) % n;
  renderShot();
}

gamesGrid.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-open-shots]');
  if (!trigger) return;
  openModal(Number(trigger.dataset.openShots));
});

modalPrev.addEventListener('click', () => stepShot(-1));
modalNext.addEventListener('click', () => stepShot(1));
modalEl.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') stepShot(-1);
  if (e.key === 'ArrowRight') stepShot(1);
});

/* =====================================================================
   MISC
===================================================================== */
document.getElementById('year').textContent = new Date().getFullYear();