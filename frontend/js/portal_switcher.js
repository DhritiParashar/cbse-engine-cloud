// ==============================================================================
// GOALisB UNIFIED 7-ENGINE ECOSYSTEM SWITCHER (CAT, GMAT, GRE, CBSE, IPM, JEE, NEET)
// ==============================================================================
(function () {
  const ENGINES = [
    { key: "CAT",  label: "CAT",  sub: "IIM MBA",    url: "https://cat-engine-cloud.onrender.com",  match: ["cat-engine", "cat_engine"] },
    { key: "GMAT", label: "GMAT", sub: "Focus Ed.",  url: "https://gmat-engine-cloud.onrender.com", match: ["gmat-engine", "gmat_engine"] },
    { key: "GRE",  label: "GRE",  sub: "340 Scale",  url: "https://gre-engine-cloud.onrender.com",  match: ["gre-engine", "gre_engine"] },
    { key: "CBSE", label: "CBSE", sub: "Class 9-12", url: "https://cbse-math-engine.onrender.com",  match: ["cbse"] },
    { key: "IPM",  label: "IPM",  sub: "IIM Indore", url: "https://ipm-engine-cloud.onrender.com",  match: ["ipm-engine", "ipm_engine"] },
    { key: "JEE",  label: "JEE",  sub: "Main & Adv", url: "https://jee-engine-cloud.onrender.com",  match: ["jee-engine", "jee_engine"] },
    { key: "NEET", label: "NEET", sub: "UG Medical", url: "https://neet-engine-cloud.onrender.com", match: ["neet-engine", "neet_engine"] }
  ];

  function detectActiveKey() {
    const host = (window.location.host || "").toLowerCase();
    const title = (document.title || "").toUpperCase();
    for (const eng of ENGINES) {
      if (eng.match.some(m => host.includes(m))) return eng.key;
    }
    for (const eng of ENGINES) {
      if (title.includes(eng.key)) return eng.key;
    }
    return "";
  }

  function mountPortalBar() {
    if (document.getElementById("goalisb-7engine-bar")) return;
    const header = document.querySelector("header");
    if (!header) return;

    const activeKey = detectActiveKey();
    const bar = document.createElement("div");
    bar.id = "goalisb-7engine-bar";
    bar.className = "bg-slate-900 text-slate-200 border-b border-slate-800 px-4 py-1.5 text-[11px]";
    bar.innerHTML = `
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center gap-1.5 font-extrabold tracking-wide text-slate-300">
          <span class="px-2 py-0.5 rounded bg-indigo-600 text-white text-[10px]">GOALisB</span>
          <span>7-Engine Cloud Suite:</span>
        </div>
        <div class="flex flex-wrap items-center gap-1.5">
          ${ENGINES.map(e => {
            const isCurrent = (e.key === activeKey);
            return `<a href="${e.url}" ${isCurrent ? 'aria-current="page"' : ''}
              class="px-2.5 py-0.5 rounded-full font-bold transition inline-flex items-center gap-1 ${
                isCurrent
                  ? "bg-emerald-500 text-slate-950 shadow-sm"
                  : "bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-700"
              }">
              <span>${e.label}</span>
              <span class="opacity-75 font-normal text-[10px] hidden sm:inline">(${e.sub})</span>
            </a>`;
          }).join("")}
        </div>
      </div>
    `;
    header.insertBefore(bar, header.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountPortalBar);
  } else {
    mountPortalBar();
  }
})();
