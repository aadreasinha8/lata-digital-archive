/* ===================================================
   CHITRALEKHA — Script
   =================================================== */

// ── Song Data ──────────────────────────────────────
const songs = {
  "1940s": [
    {
      title: "Aayega Aanewala",
      film: "Mahal",
      year: 1949,
      composer: "Khemchand Prakash",
      lyricist: "Nakshab Jarchavi",
      language: "Hindi",
      theme: "Mystery · Longing",
      note: "Lata's breakthrough performance, her voice floating through the fog of a haunted haveli. The song became an overnight sensation and catapulted her to national fame. A landmark in Hindi film music's history.",
      youtube: "https://www.youtube.com/results?search_query=Aayega+Aanewala+Mahal+1949+Lata"
    },
    {
      title: "Dil Mera Toda",
      film: "Andaz",
      year: 1949,
      composer: "Naushad",
      lyricist: "Majrooh Sultanpuri",
      language: "Hindi",
      theme: "Heartbreak · Romance",
      note: "A desolate expression of romantic betrayal, sung with characteristic restraint. This early collaboration with Naushad established a partnership that would define Indian film music for two decades.",
      youtube: "https://www.youtube.com/results?search_query=Dil+Mera+Toda+Andaz+1949+Lata"
    },
    {
      title: "Barsaat Mein Humse Mile",
      film: "Barsaat",
      year: 1949,
      composer: "Shankar-Jaikishan",
      lyricist: "Shailendra",
      language: "Hindi",
      theme: "Romance · Monsoon",
      note: "An early collaboration with Shankar-Jaikishan, whose lush orchestrations suited Lata's clear soprano perfectly. The rain as metaphor for romantic renewal is established here with youthful exuberance.",
      youtube: "https://www.youtube.com/results?search_query=Barsaat+1949+Lata+Shankar+Jaikishan"
    }
  ],
  "1950s": [
    {
      title: "Aaja Re Pardesi",
      film: "Madhumati",
      year: 1958,
      composer: "Salil Chaudhary",
      lyricist: "Shailendra",
      language: "Hindi",
      theme: "Viraha · Folk",
      note: "Rooted in the folk traditions of Bengal and Uttar Pradesh, this song is an aching call to the beloved across mountains and seasons. Salil Chaudhary's genius for weaving folk melody into filmic form is evident throughout.",
      youtube: "https://www.youtube.com/results?search_query=Aaja+Re+Pardesi+Madhumati+1958"
    },
    {
      title: "Pyaasa (Jaane Woh Kaise Log The)",
      film: "Pyaasa",
      year: 1957,
      composer: "S.D. Burman",
      lyricist: "Sahir Ludhianvi",
      language: "Hindi",
      theme: "Existential · Loss",
      note: "Set against Guru Dutt's meditation on artistic alienation, Lata's voice conveys a philosophical sorrow beyond mere romantic sadness. S.D. Burman's spare arrangement amplifies the existential weight of Sahir's verse.",
      youtube: "https://www.youtube.com/results?search_query=Jaane+Woh+Kaise+Log+The+Pyaasa+1957"
    },
    {
      title: "Jhanak Jhanak Tori Baaje Payaliya",
      film: "Baiju Bawra",
      year: 1952,
      composer: "Naushad",
      lyricist: "Shakeel Badayuni",
      language: "Hindi",
      theme: "Classical · Devotion",
      note: "One of the finest classical-based songs in Hindi cinema, rendered in Raag Desh. The song showcases Lata's ability to handle the demanding ornamentation of Hindustani classical music within the popular film idiom.",
      youtube: "https://www.youtube.com/results?search_query=Jhanak+Jhanak+Tori+Baaje+Payaliya+Baiju+Bawra"
    },
    {
      title: "Aye Mere Watan Ke Logo",
      film: "Live Performance",
      year: 1963,
      composer: "C. Ramchandra",
      lyricist: "Kavi Pradeep",
      language: "Hindi",
      theme: "Patriotic · Memorial",
      note: "Composed as a tribute to soldiers who fell in the 1962 Sino-Indian war, this song moved Prime Minister Nehru to tears at its live premiere. Considered among the most emotionally consequential songs ever performed in India.",
      youtube: "https://www.youtube.com/results?search_query=Aye+Mere+Watan+Ke+Logo+Lata+Mangeshkar"
    }
  ],
  "1960s": [
    {
      title: "Lag Ja Gale",
      film: "Woh Kaun Thi",
      year: 1964,
      composer: "Madan Mohan",
      lyricist: "Raja Mehdi Ali Khan",
      language: "Hindi",
      theme: "Viraha · Mystery",
      note: "Widely regarded as one of the most perfectly realised songs in Hindi cinema, this collaboration between Lata and Madan Mohan distils viraha into its purest musical form. The opening phrase alone is among the most recognised in Indian music.",
      youtube: "https://www.youtube.com/results?search_query=Lag+Ja+Gale+Woh+Kaun+Thi+1964"
    },
    {
      title: "Pyaar Kiya To Darna Kya",
      film: "Mughal-e-Azam",
      year: 1960,
      composer: "Naushad",
      lyricist: "Shakeel Badayuni",
      language: "Hindi",
      theme: "Defiance · Romance",
      note: "Sung in the mirror-encrusted Sheesh Mahal set, this is one of cinema's supreme declarations of love as resistance. Lata's projection — full, commanding, triumphant — was a deliberate choice to match the grandeur of Naushad's orchestration.",
      youtube: "https://www.youtube.com/results?search_query=Pyaar+Kiya+To+Darna+Kya+Mughal+e+Azam+1960"
    },
    {
      title: "Allah Tero Naam",
      film: "Hum Dono",
      year: 1961,
      composer: "Jaidev",
      lyricist: "Sahir Ludhianvi",
      language: "Hindi",
      theme: "Devotion · Universalism",
      note: "A prayer that transcends religious boundaries, affirming the unity underlying diverse names for the divine. Jaidev's spare composition and Lata's meditative delivery make this one of Hindi cinema's most spiritually resonant songs.",
      youtube: "https://www.youtube.com/results?search_query=Allah+Tero+Naam+Hum+Dono+1961+Lata"
    },
    {
      title: "Tere Bin Soone Nain Hamare",
      film: "Waqt",
      year: 1965,
      composer: "Ravi",
      lyricist: "Sahir Ludhianvi",
      language: "Hindi",
      theme: "Longing · Separation",
      note: "From one of the defining melodramas of Hindi cinema's middle period, this song captures the poignancy of domestic separation with an intimacy rare in the grander productions of the era.",
      youtube: "https://www.youtube.com/results?search_query=Tere+Bin+Soone+Nain+Hamare+Waqt+1965"
    }
  ],
  "1970s": [
    {
      title: "Tere Bina Zindagi Se",
      film: "Aandhi",
      year: 1975,
      composer: "R.D. Burman",
      lyricist: "Gulzar",
      language: "Hindi",
      theme: "Separation · Political",
      note: "From Gulzar's landmark film about a woman politician and her estranged husband, this duet with Kishore Kumar achieves an extraordinary intimacy within a story about public and private life. R.D. Burman's arrangement is characteristically inventive.",
      youtube: "https://www.youtube.com/results?search_query=Tere+Bina+Zindagi+Se+Aandhi+1975+Lata"
    },
    {
      title: "Teri Bindiya Re",
      film: "Abhimaan",
      year: 1973,
      composer: "S.D. Burman",
      lyricist: "Majrooh Sultanpuri",
      language: "Hindi",
      theme: "Romance · Domesticity",
      note: "A gentle, intimate song of conjugal love, suffused with the warmth of small moments. S.D. Burman's late-period work here demonstrates a maturity and economy that rewards close listening.",
      youtube: "https://www.youtube.com/results?search_query=Teri+Bindiya+Re+Abhimaan+1973+Lata"
    },
    {
      title: "Bhooli Re",
      film: "Parichay",
      year: 1972,
      composer: "R.D. Burman",
      lyricist: "Gulzar",
      language: "Hindi",
      theme: "Folk · Memory",
      note: "An evocation of rural memory and the irretrievability of the past, drawn from Gulzar's adaptation of Satyajit Ray's Aranyer Din Ratri. R.D. Burman's use of folk idioms is both scholarly and deeply felt.",
      youtube: "https://www.youtube.com/results?search_query=Bhooli+Re+Parichay+1972+Lata"
    }
  ],
  "1980s": [
    {
      title: "Tujhse Naraz Nahi Zindagi",
      film: "Masoom",
      year: 1983,
      composer: "R.D. Burman",
      lyricist: "Gulzar",
      language: "Hindi",
      theme: "Acceptance · Grief",
      note: "One of the most philosophically complex songs in mainstream Hindi cinema, articulating an acceptance of life's injustices without bitterness. Lata's restraint here — no embellishment, no theatrical climax — is the performance of a consummate artist.",
      youtube: "https://www.youtube.com/results?search_query=Tujhse+Naraz+Nahi+Zindagi+Masoom+1983+Lata"
    },
    {
      title: "Yaara Seeli Seeli",
      film: "Lekin",
      year: 1990,
      composer: "Hridaynath Mangeshkar",
      lyricist: "Gulzar",
      language: "Hindi",
      theme: "Ghost · Longing",
      note: "Composed by her younger brother Hridaynath, this atmospheric song for a ghost-story film is one of Lata's most haunting recordings. The National Award recognised both the composition and performance.",
      youtube: "https://www.youtube.com/results?search_query=Yaara+Seeli+Seeli+Lekin+Lata+Mangeshkar"
    },
    {
      title: "Mera Kuch Saaman",
      film: "Ijaazat",
      year: 1987,
      composer: "R.D. Burman",
      lyricist: "Gulzar",
      language: "Hindi",
      theme: "Memory · Loss",
      note: "Gulzar's extraordinary lyric — cataloguing the detritus of a failed love affair — demands a singer who can hold a long, discursive line with absolute emotional truth. Lata's almost conversational delivery here is among her most technically impressive.",
      youtube: "https://www.youtube.com/results?search_query=Mera+Kuch+Saaman+Ijaazat+1987+Lata"
    }
  ],
  "1990s": [
    {
      title: "Didi Tera Dewar Deewana",
      film: "Hum Aapke Hain Koun",
      year: 1994,
      composer: "Raam Laxman",
      lyricist: "Dev Kohli",
      language: "Hindi",
      theme: "Celebration · Family",
      note: "A playful, exuberant song of domestic festivity that became one of the decade's defining popular recordings. The film's enormous commercial success made this among the most-heard songs of the 1990s.",
      youtube: "https://www.youtube.com/results?search_query=Didi+Tera+Dewar+Deewana+Hum+Aapke+Hain+Koun+Lata"
    },
    {
      title: "Mere Haath Mein",
      film: "Fanaa",
      year: 1997,
      composer: "Jatin-Lalit",
      lyricist: "Majrooh Sultanpuri",
      language: "Hindi",
      theme: "Romance · Tenderness",
      note: "A tender duet from Lata's later period, demonstrating the continued purity and clarity of her voice into her late sixties — a remarkable feat of vocal preservation across a half-century of recording.",
      youtube: "https://www.youtube.com/results?search_query=Lata+Mangeshkar+1990s+romantic+song"
    },
    {
      title: "O Paalanhaare",
      film: "Lagaan",
      year: 2001,
      composer: "A.R. Rahman",
      lyricist: "Javed Akhtar",
      language: "Hindi",
      theme: "Devotion · Courage",
      note: "A late-career recording that demonstrates Lata's enduring ability to inhabit devotional compositions. Her collaboration with A.R. Rahman in the internationally acclaimed Lagaan introduced her voice to a new global audience.",
      youtube: "https://www.youtube.com/results?search_query=O+Paalanhaare+Lagaan+Lata+Mangeshkar"
    }
  ]
};

// ── Navigation ─────────────────────────────────────
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) page.classList.add('active');
  const link = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (link) link.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeNav();
}

function closeNav() {
  document.getElementById('mainNav').classList.remove('open');
}

// ── Nav links ──────────────────────────────────────
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

// ── Site title ──────────────────────────────────────
document.querySelector('.site-title').addEventListener('click', e => {
  e.preventDefault();
  showPage('home');
});

// ── Mobile nav toggle ─────────────────────────────
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('open');
});

// ── Home decade cards → archive page ──────────────
document.querySelectorAll('.decade-card').forEach(card => {
  card.addEventListener('click', () => {
    const decade = card.dataset.decade;
    showPage('archive');
    setTimeout(() => activateDecade(decade), 50);
  });
});

// ── Decade tabs ────────────────────────────────────
function activateDecade(decade) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.decade === decade);
  });
  renderSongs(decade);
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => activateDecade(btn.dataset.decade));
});

// ── Render song cards ─────────────────────────────
function renderSongs(decade) {
  const grid = document.getElementById('songsGrid');
  const list = songs[decade] || [];
  if (!list.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;color:var(--ink-muted);font-style:italic;">No entries yet for this decade. Coming soon.</p>';
    return;
  }
  grid.innerHTML = list.map(song => `
    <article class="song-card">
      <div>
        <div class="song-film">${song.film} · ${song.year}</div>
        <h3 class="song-title">${song.title}</h3>
      </div>
      <div class="song-meta">
        <span><span class="meta-label">Composer</span><span class="meta-value">${song.composer}</span></span>
        <span><span class="meta-label">Lyricist</span><span class="meta-value">${song.lyricist}</span></span>
        <span><span class="meta-label">Language</span><span class="meta-value">${song.language}</span></span>
        <span><span class="meta-label">Decade</span><span class="meta-value">${decade}</span></span>
      </div>
      <span class="song-theme">${song.theme}</span>
      <p class="song-note">${song.note}</p>
      <a class="song-link" href="${song.youtube}" target="_blank" rel="noopener">Listen on YouTube</a>
    </article>
  `).join('');
}

// ── Initial load ───────────────────────────────────
renderSongs('1940s');
