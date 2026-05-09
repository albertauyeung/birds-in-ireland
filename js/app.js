/* "Birds in Ireland" — main app logic.
 * Handles language switching, navigation, gallery, detail, quiz and spots.
 * Photos and language-specific Wikipedia titles are fetched lazily from
 * the Wikipedia REST/Action API (Wikimedia Commons, CC-licensed).
 */
(function () {
  "use strict";

  const SUPPORTED_LANGS = ["en", "zh-Hant", "zh-Hans", "yue", "fr", "es"];
  const DEFAULT_LANG = "en";
  const STORAGE_LANG = "birdsIE.lang";
  const PHOTO_CACHE_KEY = "birdsIE.photoCache.v1";
  const LANGTITLE_CACHE_KEY = "birdsIE.langTitleCache.v1";
  const RELATED_LIMIT = 6;

  // Latin genus → "related birds" group key. Birds in the same group are
  // shown as related on the detail page. Genera not in this map have no
  // related-birds list.
  const GENUS_GROUP = {
    Fratercula: "auks", Alca: "auks", Uria: "auks", Cepphus: "auks",
    Morus: "seabirds", Phalacrocorax: "seabirds", Puffinus: "seabirds",
    Larus: "gulls", Chroicocephalus: "gulls", Ichthyaetus: "gulls", Rissa: "gulls",
    Sterna: "terns", Thalasseus: "terns",
    Cyanistes: "tits", Parus: "tits", Periparus: "tits", Aegithalos: "tits",
    Turdus: "thrushes", Erithacus: "thrushes", Saxicola: "thrushes",
    Oenanthe: "thrushes", Phoenicurus: "thrushes",
    Pica: "crows", Corvus: "crows", Garrulus: "crows", Coloeus: "crows",
    Pyrrhocorax: "crows",
    Carduelis: "finches", Fringilla: "finches", Pyrrhula: "finches",
    Chloris: "finches", Linaria: "finches", Loxia: "finches",
    Emberiza: "buntings",
    Phylloscopus: "warblers", Sylvia: "warblers", Acrocephalus: "warblers",
    Regulus: "crests",
    Motacilla: "wagtails",
    Hirundo: "swallows", Delichon: "swallows", Riparia: "swallows",
    Tyto: "owls", Asio: "owls",
    Buteo: "raptors", Accipiter: "raptors", Falco: "raptors",
    Haliaeetus: "raptors", Circus: "raptors", Milvus: "raptors",
    Cygnus: "swans-geese", Branta: "swans-geese", Anser: "swans-geese",
    Anas: "ducks", Aythya: "ducks", Mergus: "ducks",
    Ardea: "herons", Egretta: "herons",
    Columba: "pigeons", Streptopelia: "pigeons",
    Numenius: "waders", Vanellus: "waders", Haematopus: "waders",
    Tringa: "waders", Actitis: "waders", Gallinago: "waders",
    Fulica: "rails", Rallus: "rails", Gallinula: "rails",
    Podiceps: "grebes", Tachybaptus: "grebes"
  };

  // ---------- State ----------
  const state = {
    lang: loadLang(),
    view: "gallery",
    selectedBirdId: null,
    sizeFilter: "all",
    search: "",
    photoCache: loadJsonCache(PHOTO_CACHE_KEY),
    langTitleCache: loadJsonCache(LANGTITLE_CACHE_KEY),
    quiz: null
  };

  // ---------- Language ----------
  function loadLang() {
    const saved = localStorage.getItem(STORAGE_LANG);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("zh")) {
      if (nav.includes("hant") || nav.includes("tw") || nav.includes("hk")) return "zh-Hant";
      return "zh-Hans";
    }
    if (nav.startsWith("yue")) return "yue";
    if (nav.startsWith("fr")) return "fr";
    if (nav.startsWith("es")) return "es";
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
    state.lang = lang;
    localStorage.setItem(STORAGE_LANG, lang);
    document.documentElement.lang = lang === "yue" ? "zh-HK" : lang;
    applyTranslations();
    rerenderCurrentView();
  }

  function t(key) {
    const dict = window.I18N[state.lang] || window.I18N[DEFAULT_LANG];
    return dict[key] || window.I18N[DEFAULT_LANG][key] || key;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
    updateTitle();
  }

  function updateTitle() {
    if (state.view === "detail" && state.selectedBirdId) {
      const bird = BIRDS.find((b) => b.id === state.selectedBirdId);
      if (bird) {
        document.title = localName(bird) + " — " + t("appTitle");
        return;
      }
    }
    document.title = t("appTitle") + " — " + t("galleryTitle");
  }

  // ---------- Caches ----------
  function loadJsonCache(key) {
    try { return JSON.parse(localStorage.getItem(key) || "{}"); }
    catch (e) { return {}; }
  }
  function saveJsonCache(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  // ---------- Wikipedia fetches ----------
  /**
   * Returns photo info from Wikipedia REST API summary endpoint.
   * Returns { thumb, original, source } or null on failure.
   */
  async function fetchBirdPhoto(wikiSlug) {
    if (state.photoCache[wikiSlug]) return state.photoCache[wikiSlug];
    try {
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiSlug)}`;
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      const photo = {
        thumb: data.thumbnail && data.thumbnail.source,
        original: data.originalimage && data.originalimage.source,
        source: data.content_urls && data.content_urls.desktop && data.content_urls.desktop.page,
      };
      if (!photo.thumb && !photo.original) throw new Error("No image");
      state.photoCache[wikiSlug] = photo;
      saveJsonCache(PHOTO_CACHE_KEY, state.photoCache);
      return photo;
    } catch (e) {
      return null;
    }
  }

  // Maps app language → Wikipedia language code(s) to try (in order)
  const WIKI_LANG_PRIORITY = {
    "en":      ["en"],
    "zh-Hant": ["zh"],
    "zh-Hans": ["zh"],
    "yue":     ["yue", "zh"],
    "fr":      ["fr"],
    "es":      ["es"]
  };

  // Variant param to pass on zh.wikipedia for character set / dialect conversion
  const WIKI_VARIANT = {
    "zh-Hant": "zh-hant",
    "zh-Hans": "zh-hans",
    "yue":     "zh-yue"
  };

  /**
   * Resolves the Wikipedia article URL for a given English wiki slug in
   * the user's language. Uses the langlinks API. Caches results
   * (including negatives) in localStorage. Returns the URL string, or
   * null if no language-specific article exists.
   */
  async function fetchLangArticleUrl(wikiSlug, targetLang) {
    if (targetLang === "en") return null;
    const cacheKey = `${wikiSlug}::${targetLang}`;
    if (cacheKey in state.langTitleCache) {
      return state.langTitleCache[cacheKey];
    }

    const tries = WIKI_LANG_PRIORITY[targetLang] || ["en"];
    for (const wpLang of tries) {
      try {
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=langlinks&lllang=${wpLang}&lllimit=1&titles=${encodeURIComponent(wikiSlug)}`;
        const res = await fetch(apiUrl);
        if (!res.ok) continue;
        const data = await res.json();
        const pages = data && data.query && data.query.pages;
        if (!pages) continue;
        const firstKey = Object.keys(pages)[0];
        const links = pages[firstKey] && pages[firstKey].langlinks;
        if (!links || links.length === 0) continue;
        const title = links[0]["*"] || links[0].title;
        if (!title) continue;
        let url = `https://${wpLang}.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`;
        const variant = WIKI_VARIANT[targetLang];
        // Apply variant only when actually using zh.wikipedia
        if (variant && wpLang === "zh") url += `?variant=${variant}`;
        state.langTitleCache[cacheKey] = url;
        saveJsonCache(LANGTITLE_CACHE_KEY, state.langTitleCache);
        return url;
      } catch (e) { /* try next */ }
    }

    state.langTitleCache[cacheKey] = null;
    saveJsonCache(LANGTITLE_CACHE_KEY, state.langTitleCache);
    return null;
  }

  function englishWikiUrl(wikiSlug) {
    return `https://en.wikipedia.org/wiki/${encodeURIComponent(wikiSlug)}`;
  }

  // ---------- Navigation ----------
  // Routes:
  //   path /birds/<id>.html    bird detail (static crawlable page)
  //   #/                       gallery (home)
  //   #/bird/<id>              bird detail (legacy hash route, still supported)
  //   #/quiz #/spots #/about

  function isStaticBirdPage() {
    return /\/birds\/[^/]+\.html$/.test(window.location.pathname);
  }

  function birdHref(birdId) {
    const enc = encodeURIComponent(birdId);
    return isStaticBirdPage() ? enc + ".html" : "birds/" + enc + ".html";
  }

  function parseRoute() {
    const m = window.location.pathname.match(/\/birds\/([^/]+)\.html$/);
    if (m) {
      const id = decodeURIComponent(m[1]);
      if (BIRDS.find((b) => b.id === id)) return { view: "detail", birdId: id };
    }
    const h = window.location.hash || "";
    const hm = h.match(/^#\/(.*)$/);
    if (!hm) return { view: "gallery" };
    const path = decodeURIComponent(hm[1]);
    if (!path || path === "gallery") return { view: "gallery" };
    if (path.startsWith("bird/")) {
      const id = path.slice(5);
      if (BIRDS.find((b) => b.id === id)) return { view: "detail", birdId: id };
      return { view: "gallery" };
    }
    if (["quiz", "spots", "about"].includes(path)) return { view: path };
    return { view: "gallery" };
  }

  function pathForRoute(view, birdId) {
    if (view === "detail" && birdId) return `#/bird/${encodeURIComponent(birdId)}`;
    if (view === "gallery" || !view) return "#/";
    return `#/${view}`;
  }

  function applyRoute() {
    const route = parseRoute();
    state.view = route.view;
    if (route.birdId) state.selectedBirdId = route.birdId;

    document.querySelectorAll("[data-view]").forEach((el) => {
      el.hidden = el.dataset.view !== state.view;
    });
    document.querySelectorAll(".main-nav [data-nav]").forEach((el) => {
      el.classList.toggle("active", el.dataset.nav === state.view);
    });

    rerenderCurrentView();
  }

  // Public navigate: sets the hash, which fires hashchange → applyRoute.
  // If we're already on this route, just re-render (e.g. after a filter change).
  // On a static bird page, navigation always does a full page load so the
  // URL bar / canonical / OG tags reflect the current bird.
  function navigate(view, opts = {}) {
    if (isStaticBirdPage()) {
      if (view === "detail" && opts.birdId) {
        window.location.href = birdHref(opts.birdId);
      } else if (view === "gallery") {
        window.location.href = "../";
      } else {
        window.location.href = "../#/" + view;
      }
      return;
    }
    const newHash = pathForRoute(view, opts.birdId);
    const currentHash = window.location.hash || "#/";
    if (currentHash === newHash) {
      if (opts.birdId) state.selectedBirdId = opts.birdId;
      rerenderCurrentView();
      return;
    }
    window.location.hash = newHash;
  }

  function rerenderCurrentView() {
    switch (state.view) {
      case "gallery": renderGallery(); break;
      case "detail": renderDetail(); break;
      case "quiz": renderQuiz(); break;
      case "spots": renderSpots(); break;
      case "about": /* static */ break;
    }
  }

  // ---------- Helpers for displaying names/pronunciations ----------
  function pronunciationFor(bird) {
    if (!bird.pronunciation) return null;
    if (state.lang === "zh-Hant" || state.lang === "zh-Hans") {
      return bird.pronunciation.pinyin || null;
    }
    if (state.lang === "yue") {
      return bird.pronunciation.jyutping || null;
    }
    return null;
  }

  function localName(bird) {
    return bird.names[state.lang] || bird.names.en;
  }

  // ---------- Gallery ----------
  function renderGallery() {
    const grid = document.getElementById("gallery-grid");
    const total = BIRDS.length;
    const filtered = BIRDS.filter((b) => {
      if (state.sizeFilter !== "all" && b.sizeCategory !== state.sizeFilter) return false;
      if (state.search) {
        const q = state.search.toLowerCase();
        const names = Object.values(b.names).join(" ").toLowerCase();
        if (!names.includes(q) && !b.latin.toLowerCase().includes(q)) return false;
      }
      return true;
    });
    renderBirdGrid(grid, filtered);

    document.querySelectorAll("#size-filter .chip").forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.size === state.sizeFilter);
    });

    // Stats and filter status
    const statBirds = document.getElementById("stat-birds");
    const statSpots = document.getElementById("stat-spots");
    if (statBirds) statBirds.textContent = total;
    if (statSpots) statSpots.textContent = SPOTS.length;
    const status = document.getElementById("filter-status");
    if (status) {
      const isFiltered = state.sizeFilter !== "all" || state.search;
      if (isFiltered && filtered.length !== total) {
        status.textContent = t("showingFiltered")
          .replace("{n}", filtered.length)
          .replace("{total}", total);
        status.hidden = false;
      } else {
        status.textContent = "";
        status.hidden = true;
      }
    }
  }

  function renderBirdGrid(container, birds) {
    container.innerHTML = "";
    birds.forEach((bird) => {
      const name = localName(bird);
      const pron = pronunciationFor(bird);
      const showEnglish = state.lang !== "en";
      const card = document.createElement("a");
      card.className = "bird-card";
      card.href = birdHref(bird.id);
      card.setAttribute("aria-label", name);
      const introduced = bird.nativeStatus === "introduced";
      const tag = introduced
        ? `<span class="bird-tag bird-tag--introduced" title="${escapeHtml(t("statusIntroduced"))}">${escapeHtml(t("statusIntroducedShort"))}</span>`
        : "";
      card.innerHTML = `
        <div class="photo skeleton"><img alt="" loading="lazy" decoding="async">${tag}</div>
        <p class="name">${escapeHtml(name)}</p>
        ${pron ? `<p class="pronunciation">${escapeHtml(pron)}</p>` : ""}
        ${showEnglish ? `<p class="english-name">${escapeHtml(bird.names.en)}</p>` : ""}
        <p class="latin">${escapeHtml(bird.latin)}</p>
      `;
      card.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        navigate("detail", { birdId: bird.id });
      });
      container.appendChild(card);

      observePhoto(card.querySelector(".photo"), card.querySelector("img"), bird);
    });
    if (birds.length === 0) {
      container.innerHTML = `<p class="lead" style="grid-column: 1/-1; text-align:center;">—</p>`;
    }
  }

  // IntersectionObserver to load photos only when visible
  const photoObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const wrapper = entry.target;
      const img = wrapper.querySelector("img");
      const wiki = wrapper.dataset.wiki;
      const altText = wrapper.dataset.alt;
      const color = wrapper.dataset.color || "#ffd18a";
      fetchBirdPhoto(wiki).then((p) => {
        if (p && (p.thumb || p.original)) {
          img.src = p.thumb || p.original;
          img.alt = altText;
          wrapper.classList.remove("skeleton");
        } else {
          showPhotoFallback(wrapper, color);
        }
      });
      obs.unobserve(wrapper);
    });
  }, { rootMargin: "100px" });

  function showPhotoFallback(wrapper, color) {
    wrapper.classList.remove("skeleton");
    wrapper.classList.add("photo-fallback");
    wrapper.style.background = `linear-gradient(135deg, ${color}33, ${color}66)`;
    if (!wrapper.querySelector(".fallback-emoji")) {
      const span = document.createElement("span");
      span.className = "fallback-emoji";
      span.textContent = "🐦";
      span.setAttribute("aria-hidden", "true");
      wrapper.appendChild(span);
    }
  }

  function observePhoto(wrapper, img, bird) {
    wrapper.dataset.wiki = bird.wiki;
    wrapper.dataset.alt = localName(bird);
    wrapper.dataset.color = bird.color;
    photoObserver.observe(wrapper);
  }

  // ---------- Detail ----------
  function birdGroup(bird) {
    const genus = (bird.latin || "").split(" ")[0];
    return GENUS_GROUP[genus] || null;
  }

  function relatedBirdsFor(bird) {
    const group = birdGroup(bird);
    if (!group) return [];
    return BIRDS.filter((b) => b.id !== bird.id && birdGroup(b) === group)
      .slice(0, RELATED_LIMIT);
  }

  function renderDetail() {
    const bird = BIRDS.find((b) => b.id === state.selectedBirdId);
    const detailEl = document.getElementById("bird-detail");
    if (!bird) {
      detailEl.innerHTML = "<p>Not found.</p>";
      return;
    }

    const sizeLabel = {
      "small": t("sizeSmallLabel"),
      "medium": t("sizeMediumLabel"),
      "large": t("sizeLargeLabel")
    }[bird.sizeCategory];

    const name = localName(bird);
    const pron = pronunciationFor(bird);
    const showEnglish = state.lang !== "en";

    detailEl.innerHTML = `
      <div>
        <div class="photo skeleton"><img alt="" decoding="async" fetchpriority="high"></div>
        <p class="photo-credit">${escapeHtml(t("photoBy"))} <a href="#" target="_blank" rel="noopener" class="src-link">Wikipedia</a> · ${escapeHtml(t("photoSource"))}</p>
      </div>
      <div>
        <h1 style="border-bottom: 4px solid ${bird.color}; padding-bottom: 0.3rem; display:inline-block;">
          ${escapeHtml(name)}
        </h1>
        ${pron ? `<p class="pronunciation big">${escapeHtml(pron)}</p>` : ""}
        ${showEnglish ? `<p class="english-name big">${escapeHtml(bird.names.en)}</p>` : ""}
        <p class="latin">${escapeHtml(bird.latin)}</p>
        <p class="description">${escapeHtml(bird.description[state.lang] || bird.description.en)}</p>
        <div class="facts">
          <div class="fact">
            <div class="fact-label">${escapeHtml(t("factSize"))}</div>
            <div>${sizeLabel} · ${bird.sizeCm} cm</div>
          </div>
          <div class="fact">
            <div class="fact-label">${escapeHtml(t("factLatin"))}</div>
            <div><em>${escapeHtml(bird.latin)}</em></div>
          </div>
          <div class="fact">
            <div class="fact-label">${escapeHtml(t("factStatus"))}</div>
            <div>${escapeHtml(bird.nativeStatus === "introduced" ? t("statusIntroduced") : t("statusNative"))}</div>
          </div>
        </div>
        <div class="where">
          <div class="fact-label" style="color:#b35a00;font-weight:800;font-size:0.8rem;text-transform:uppercase;">${escapeHtml(t("factWhere"))}</div>
          <ul>
            ${bird.where.map((w) => `<li>${escapeHtml(w)}</li>`).join("")}
          </ul>
        </div>
        <div class="actions">
          <a class="learn-more" href="${englishWikiUrl(bird.wiki)}" target="_blank" rel="noopener">${escapeHtml(state.lang === "en" ? t("learnMore") : t("learnMoreEnglish"))} →</a>
        </div>
      </div>
      ${relatedBirdsFor(bird).length ? `
        <div class="related-birds">
          <div class="birds-here-label">${escapeHtml(t("relatedBirds"))}</div>
          <div class="birds-thumbs"></div>
        </div>
      ` : ""}
    `;

    const relatedThumbsEl = detailEl.querySelector(".related-birds .birds-thumbs");
    if (relatedThumbsEl) {
      relatedBirdsFor(bird).forEach((rb) => {
        const thumb = document.createElement("a");
        thumb.className = "bird-thumb";
        thumb.href = birdHref(rb.id);
        thumb.setAttribute("aria-label", localName(rb));
        const rPron = pronunciationFor(rb);
        thumb.innerHTML = `
          <div class="photo skeleton"><img alt="" loading="lazy" decoding="async"></div>
          <span class="thumb-name">${escapeHtml(localName(rb))}</span>
          ${rPron ? `<span class="thumb-pron">${escapeHtml(rPron)}</span>` : ""}
        `;
        thumb.addEventListener("click", (e) => {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
          e.preventDefault();
          navigate("detail", { birdId: rb.id });
        });
        relatedThumbsEl.appendChild(thumb);
        observePhoto(thumb.querySelector(".photo"), thumb.querySelector("img"), rb);
      });
    }

    // Photo
    fetchBirdPhoto(bird.wiki).then((p) => {
      const wrap = detailEl.querySelector(".photo");
      if (p && (p.thumb || p.original)) {
        const img = detailEl.querySelector("img");
        img.src = p.original || p.thumb;
        img.alt = name;
        wrap.classList.remove("skeleton");
        const link = detailEl.querySelector(".src-link");
        if (p.source) link.href = p.source;
      } else {
        showPhotoFallback(wrap, bird.color);
      }
    });

    // Localized "Learn more" link (resolves langlinks)
    if (state.lang !== "en") {
      const linkEl = detailEl.querySelector(".learn-more");
      const requestLang = state.lang;
      fetchLangArticleUrl(bird.wiki, state.lang).then((url) => {
        // Only update if the user hasn't switched language since
        if (state.lang !== requestLang) return;
        if (url) {
          linkEl.href = url;
          linkEl.textContent = t("learnMore") + " →";
        }
      });
    }
  }

  // ---------- Quiz ----------
  function startQuiz() {
    const totalQuestions = 5;
    const optionCount = 4;
    const pool = shuffle(BIRDS.slice()).slice(0, totalQuestions);
    state.quiz = {
      questions: pool.map((bird) => {
        const wrongs = shuffle(BIRDS.filter((b) => b.id !== bird.id))
          .slice(0, optionCount - 1);
        const options = shuffle([bird, ...wrongs]);
        return { bird, options, answer: null };
      }),
      index: 0,
      score: 0,
      done: false
    };
  }

  function renderQuiz() {
    if (!state.quiz || state.quiz.done) {
      if (!state.quiz) startQuiz();
    }
    const area = document.getElementById("quiz-area");

    if (state.quiz.done) {
      const score = state.quiz.score;
      const total = state.quiz.questions.length;
      let msg;
      if (score === total) msg = t("quizGreat");
      else if (score >= Math.ceil(total / 2)) msg = t("quizGood");
      else msg = t("quizKeepGoing");
      area.innerHTML = `
        <div class="quiz-final">
          <div>${escapeHtml(t("quizYourScore"))}</div>
          <div class="score-badge">${score} / ${total}</div>
          <div>${escapeHtml(msg)}</div>
          <button class="btn btn-primary" id="quiz-replay">${escapeHtml(t("quizPlayAgain"))}</button>
        </div>
      `;
      document.getElementById("quiz-replay").addEventListener("click", () => {
        startQuiz();
        renderQuiz();
      });
      return;
    }

    const q = state.quiz.questions[state.quiz.index];
    const total = state.quiz.questions.length;
    area.innerHTML = `
      <div class="quiz-status">${escapeHtml(t("quizQuestionOf").replace("{n}", state.quiz.index + 1).replace("{total}", total))}</div>
      <div class="quiz-photo skeleton"><img alt="" decoding="async" fetchpriority="high"></div>
      <p class="lead" style="margin:0 0 0.6rem;">${escapeHtml(t("quizQuestion"))}</p>
      <div class="quiz-feedback" aria-live="polite"></div>
      <div class="quiz-options">
        ${q.options.map((opt) => {
          const optName = localName(opt);
          const optPron = pronunciationFor(opt);
          const optEn = state.lang !== "en" ? `<small>${escapeHtml(opt.names.en)}</small>` : "";
          return `<button data-id="${opt.id}">
            <span class="opt-name">${escapeHtml(optName)}</span>
            ${optPron ? `<small class="opt-pron">${escapeHtml(optPron)}</small>` : ""}
            ${optEn}
          </button>`;
        }).join("")}
      </div>
    `;

    fetchBirdPhoto(q.bird.wiki).then((p) => {
      const wrap = area.querySelector(".quiz-photo");
      if (p && (p.thumb || p.original)) {
        const img = wrap.querySelector("img");
        img.src = p.original || p.thumb;
        img.alt = "";
        wrap.classList.remove("skeleton");
      } else {
        showPhotoFallback(wrap, q.bird.color);
      }
    });

    const feedback = area.querySelector(".quiz-feedback");
    const buttons = area.querySelectorAll(".quiz-options button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (q.answer) return;
        const isRight = btn.dataset.id === q.bird.id;
        q.answer = btn.dataset.id;
        if (isRight) state.quiz.score++;
        buttons.forEach((b) => {
          b.disabled = true;
          if (b.dataset.id === q.bird.id) b.classList.add("right");
          else if (b === btn) b.classList.add("wrong");
        });
        feedback.textContent = isRight ? t("quizCorrect") : t("quizWrong");
        feedback.className = "quiz-feedback " + (isRight ? "correct" : "wrong");

        const nextBtn = document.createElement("button");
        nextBtn.className = "btn btn-primary";
        nextBtn.style.marginTop = "1rem";
        nextBtn.textContent = t("quizNext") + " →";
        nextBtn.addEventListener("click", () => {
          state.quiz.index++;
          if (state.quiz.index >= state.quiz.questions.length) {
            state.quiz.done = true;
          }
          renderQuiz();
        });
        area.appendChild(nextBtn);
      });
    });
  }

  // ---------- Spots ----------
  function renderSpots() {
    const list = document.getElementById("spots-list");
    list.innerHTML = "";
    SPOTS.forEach((spot) => {
      const card = document.createElement("div");
      card.className = "spot-card";
      const birdsForSpot = spot.birds
        .map((id) => BIRDS.find((b) => b.id === id))
        .filter(Boolean);

      const mapsQuery = encodeURIComponent(`${spot.name}, ${spot.region}, Ireland`);
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
      card.innerHTML = `
        <h3>
          <a class="spot-title-link" href="${mapsUrl}" target="_blank" rel="noopener" aria-label="${escapeHtml(spot.name)} — open in Google Maps">
            ${escapeHtml(spot.name)} <span class="map-pin" aria-hidden="true">📍</span>
          </a>
        </h3>
        <div class="region">${escapeHtml(spot.region)}</div>
        <p>${escapeHtml(spot.description[state.lang] || spot.description.en)}</p>
        ${birdsForSpot.length ? `
          <div class="birds-here-label">${escapeHtml(t("birdsHere"))}</div>
          <div class="birds-thumbs"></div>
        ` : ""}
      `;
      list.appendChild(card);

      const thumbsEl = card.querySelector(".birds-thumbs");
      if (!thumbsEl) return;
      birdsForSpot.forEach((bird) => {
        const thumb = document.createElement("a");
        thumb.className = "bird-thumb";
        thumb.href = birdHref(bird.id);
        thumb.setAttribute("aria-label", localName(bird));
        const pron = pronunciationFor(bird);
        thumb.innerHTML = `
          <div class="photo skeleton"><img alt="" loading="lazy" decoding="async"></div>
          <span class="thumb-name">${escapeHtml(localName(bird))}</span>
          ${pron ? `<span class="thumb-pron">${escapeHtml(pron)}</span>` : ""}
        `;
        thumb.addEventListener("click", (e) => {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
          e.preventDefault();
          navigate("detail", { birdId: bird.id });
        });
        thumbsEl.appendChild(thumb);
        observePhoto(thumb.querySelector(".photo"), thumb.querySelector("img"), bird);
      });
    });
  }

  // ---------- Helpers ----------
  function escapeHtml(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- Feedback form ----------
  function initFeedback() {
    const section = document.getElementById("feedback-section");
    const form = document.getElementById("feedback-form");
    if (!section || !form) return;
    const cfg = (window.FEEDBACK_CONFIG || {});
    if (!cfg.workerUrl) return; // not configured → keep section hidden

    section.hidden = false;

    if (cfg.turnstileSiteKey) {
      const mount = document.getElementById("feedback-turnstile");
      if (mount && !mount.classList.contains("cf-turnstile")) {
        mount.classList.add("cf-turnstile");
        mount.setAttribute("data-sitekey", cfg.turnstileSiteKey);
      }
      if (!document.querySelector("script[data-turnstile-loader]")) {
        const s = document.createElement("script");
        s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        s.async = true;
        s.defer = true;
        s.setAttribute("data-turnstile-loader", "1");
        document.head.appendChild(s);
      }
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = document.getElementById("feedback-status");
      const submitBtn = form.querySelector('button[type="submit"]');
      const data = new FormData(form);
      const text = String(data.get("feedback") || "").trim();
      if (text.length < 5) {
        if (status) {
          status.textContent = t("feedbackTooShort");
          status.className = "feedback-status err";
        }
        return;
      }
      const payload = {
        feedback: text,
        website: String(data.get("website") || ""),
        lang: state.lang,
        page: window.location.href.slice(0, 200),
      };
      if (cfg.turnstileSiteKey) {
        payload.turnstileToken = String(data.get("cf-turnstile-response") || "");
      }

      submitBtn.disabled = true;
      if (status) {
        status.textContent = t("feedbackSending");
        status.className = "feedback-status";
      }

      try {
        const resp = await fetch(cfg.workerUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (resp.ok) {
          if (status) {
            status.textContent = t("feedbackThanks");
            status.className = "feedback-status ok";
          }
          form.reset();
          if (window.turnstile && cfg.turnstileSiteKey) {
            try { window.turnstile.reset(); } catch (e) { /* ignore */ }
          }
        } else {
          if (status) {
            status.textContent = t("feedbackError");
            status.className = "feedback-status err";
          }
        }
      } catch (err) {
        if (status) {
          status.textContent = t("feedbackError");
          status.className = "feedback-status err";
        }
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  // ---------- Init ----------
  let hadInAppNavigation = false;

  function init() {
    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
      langSelect.value = state.lang;
      langSelect.addEventListener("change", (e) => setLang(e.target.value));
    }
    document.documentElement.lang = state.lang === "yue" ? "zh-HK" : state.lang;

    // Buttons trigger SPA hash routing; anchors with href navigate naturally
    // (used on static bird pages so the URL bar reflects the current bird).
    document.querySelectorAll("[data-nav]").forEach((el) => {
      if (el.tagName === "A") return;
      el.addEventListener("click", () => navigate(el.dataset.nav));
    });

    document.querySelectorAll('[data-action="back"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        if (hadInAppNavigation) {
          e.preventDefault();
          window.history.back();
          return;
        }
        if (el.tagName !== "A") navigate("gallery");
      });
    });

    initFeedback();

    const sizeFilter = document.getElementById("size-filter");
    if (sizeFilter) {
      sizeFilter.addEventListener("click", (e) => {
        const chip = e.target.closest(".chip");
        if (!chip) return;
        state.sizeFilter = chip.dataset.size;
        renderGallery();
      });
    }
    const searchEl = document.getElementById("bird-search");
    if (searchEl) {
      searchEl.addEventListener("input", (e) => {
        state.search = e.target.value.trim();
        renderGallery();
      });
    }

    window.addEventListener("hashchange", () => {
      hadInAppNavigation = true;
      applyRoute();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    applyRoute();
    applyTranslations();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
