// Full-Depth Exhaustive Chapter Builder for CBSE Class 11 & 12 Chemistry, Biology, Math & Physics
window.buildExhaustiveScienceChapter = function(cfg) {
  return {
    code: cfg.code,
    name: cfg.name,
    weight: cfg.weight,
    desc: cfg.desc,
    overview: `<div class="space-y-6">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles NCERT Intuition</span>
        <h3 class="text-xl font-black text-white">${cfg.intuitionTitle}</h3>
        <p class="text-xs text-slate-300 leading-relaxed">${cfg.intuitionBody}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        ${(cfg.concepts || []).map(([title, body]) => `
          <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
            <span class="text-indigo-400 font-bold block text-sm">${title}</span>
            <p class="text-slate-300 leading-relaxed">${body}</p>
          </div>`).join('')}
      </div>
    </div>`,
    exp1: `<div class="space-y-6 text-xs text-slate-300">
      <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">${cfg.name} — Core NCERT Laws, Equations &amp; Matrices</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-white text-[11px] pt-1">
          ${(cfg.formulas || []).map(([head, body]) => `
            <div class="p-3.5 bg-surface rounded-lg border border-slate-800 space-y-1">
              <span class="text-indigo-300 font-sans font-bold block text-xs">${head}:</span>
              <div>${body}</div>
            </div>`).join('')}
        </div>
      </div>
      ${(cfg.numericals || []).map((num, idx) => `
        <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-indigo-400 font-bold text-sm">WORKED BOARD PROBLEM ${idx + 1}: ${num.title}</span>
            <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px]">${num.marks} Marks CBSE Standard</span>
          </div>
          <p class="text-slate-200"><strong>Problem:</strong> ${num.problem}</p>
          <div class="p-4 bg-background rounded-lg border border-slate-800 space-y-2 text-slate-300 leading-relaxed">
            ${(num.steps || []).map((st, sIdx) => `<p><strong class="text-emerald-400">Step ${sIdx + 1}:</strong> ${st}</p>`).join('')}
          </div>
        </div>`).join('')}
    </div>`,
    exp2: `<div class="space-y-6 text-xs text-slate-300">
      ${(cfg.derivations || []).map((der, idx) => `
        <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-4">
          <div class="border-b border-slate-700 pb-2.5 flex items-center justify-between">
            <h3 class="font-black text-white text-sm">MECHANISM / DERIVATION ${idx + 1}: ${der.title}</h3>
            <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px]">${der.tag}</span>
          </div>
          <p class="text-slate-300"><strong>Principle &amp; Context:</strong> ${der.setup}</p>
          <div class="space-y-2 leading-relaxed font-mono text-[11px] bg-background p-4 rounded-lg border border-slate-800">
            ${(der.steps || []).map((st, sIdx) => `<p>${sIdx + 1}. ${st}</p>`).join('')}
            <p class="text-emerald-400 font-bold font-sans pt-1">${der.conclusion}</p>
          </div>
        </div>`).join('')}
    </div>`,
    vernacular: { English: cfg.examTip || '' },
    errorFinder: {
      traps: (cfg.traps || []).map(([tTitle, tSev, tExp]) => ({ title: tTitle, severity: tSev, explanation: tExp })),
      challenges: cfg.challenges || []
    },
    diagnostics: cfg.diagnostics || [],
    boardProblems: (cfg.numericals || []).map((num) => ({
      title: `${cfg.name}: ${num.title}`,
      marks: num.marks,
      text: num.problem,
      idealAnswer: (num.steps || []).map((s, i) => `Step ${i + 1}: ${s.replace(/<[^>]+>/g, '')}`).join('\n'),
      flawedAnswer: "Step 1: Applied direct formula without checking stoichiometry/units or NCERT preconditions.\nStep 2: Omitted intermediate justification.",
      rubric: (num.steps || []).map((s) => ({ step: s.replace(/<[^>]+>/g, ''), marks: Number((num.marks / Math.max(1, num.steps.length)).toFixed(2)) }))
    }))
  };
};

// Shared Rich Chapter Constructor for CBSE Class 11 & 12 Registries
window.buildCbseChapterEntry = function(c) {
  return {
    code: c[0], name: c[1], weight: c[2], desc: c[3],
    overview: `<div class="space-y-5">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-2.5">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Intuition</span>
        <h3 class="text-xl font-black text-white">${c[4]}</h3>
        <p class="text-xs text-slate-300 leading-relaxed">${c[5]}</p>
      </div>
    </div>`,
    exp1: `<div class="space-y-5 text-xs text-slate-300">
      <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">${c[1]} — Core Laws, Formulas &amp; Equations</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[11px] text-white">
          <div class="p-3 bg-surface rounded-lg border border-slate-800"><span class="text-indigo-300 font-sans font-bold block mb-1">Key Relation 1:</span>${c[6]}</div>
          <div class="p-3 bg-surface rounded-lg border border-slate-800"><span class="text-indigo-300 font-sans font-bold block mb-1">Key Relation 2:</span>${c[7]}</div>
        </div>
      </div>
      <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-2">
        <span class="text-indigo-400 font-bold text-sm">WORKED BOARD PROBLEM: ${c[8]}</span>
        <div class="p-3.5 bg-background rounded-lg border border-slate-800 text-slate-300 leading-relaxed">${c[9]}</div>
      </div>
    </div>`,
    exp2: `<div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-2 text-xs text-slate-300">
      <h4 class="text-emerald-400 font-bold text-sm uppercase">BOARD DERIVATION / MECHANISM: ${c[10]}</h4>
      <div class="font-mono text-[11px] bg-background p-4 rounded-lg border border-slate-800 leading-relaxed">${c[11]}</div>
    </div>`,
    vernacular: { English: c[12] },
    errorFinder: {
      traps: [{ title: `${c[1]}: Board Exam Trap`, severity: "High (1-2 Marks)", explanation: c[12] }],
      challenges: [{
        title: `${c[1]}: Step Verification Challenge`,
        steps: [
          { stepNo: 1, text: `Problem Setup: ${c[8]}` },
          { stepNo: 2, text: `Flawed step omitting key condition: ${c[12]}` },
          { stepNo: 3, text: `Final result stated.` }
        ],
        faultyStep: 2,
        deductionReason: `In Step 2: ${c[12]}`
      }]
    },
    diagnostics: [{
      q: c[13], difficulty: "Board Standard (1M)", options: c[14], correct: c[15], solution: c[16]
    }]
  };
};


// Dynamic Manifest-Driven Class Switcher (Zero hardcoding in index.html)
const _loadedRegistryScripts = new Set();

function loadRegistryScript(src) {
    if (!src) return Promise.resolve();
    const versionedSrc = src.includes('?') ? src : `${src}?v=20261112_c12_standalone_v4`;
    if (_loadedRegistryScripts.has(src) || document.querySelector(`script[src="${versionedSrc}"]`)) {
        _loadedRegistryScripts.add(src);
        return Promise.resolve();
    }
    return new Promise((resolve) => {
        const s = document.createElement('script');
        s.src = versionedSrc;
        s.onload = () => { _loadedRegistryScripts.add(src); resolve(); };
        s.onerror = () => { console.warn('Registry script failed to load:', src); resolve(); };
        document.body.appendChild(s);
    });
}

function onRegClassChanged(clsVal) {
    const trackSel = document.getElementById('regMathTrack');
    const trackLbl = document.getElementById('regTrackLabel');
    if (!trackSel) return;
    if (String(clsVal) === '10') {
        if (trackLbl) trackLbl.innerText = 'Math Track';
        trackSel.innerHTML = '<option value="Standard">Standard (041)</option><option value="Basic">Basic (241)</option>';
    } else {
        if (trackLbl) trackLbl.innerText = 'Stream';
        trackSel.innerHTML = '<option value="Science-PCM">Science (PCM)</option><option value="Science-PCB">Science (PCB)</option><option value="Commerce-Math">Commerce + Math</option>';
    }
}

function ensureBioSubjectButton() {
    let bioBtn = document.getElementById('subjTab_BIO');
    if (!bioBtn) {
        const sstBtn = document.getElementById('subjTab_SST');
        if (sstBtn && sstBtn.parentElement) {
            bioBtn = document.createElement('button');
            bioBtn.type = 'button';
            bioBtn.id = 'subjTab_BIO';
            bioBtn.className = 'hidden px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-surface border border-slate-700 text-slate-300 hover:text-white transition cursor-pointer';
            bioBtn.onclick = function() { switchSubject('BIO'); };
            sstBtn.parentElement.appendChild(bioBtn);
        }
    }
    if (typeof subjectsRegistry !== 'undefined' && !subjectsRegistry.BIO) {
        subjectsRegistry.BIO = { name: "Biology", freeChapters: [], defaultChapter: "", chapters: {} };
    }
}


// Official CBSE Marks & Prescribed Blueprint Synchronizer (Math = 80M / 38Q; Physics/Chem/Bio = 70M / 33Q)
const CBSE_PRESCRIBED_BLUEPRINTS = {
    MATH: {
        totalMarks: 80, totalQuestions: 38, durationMins: 180,
        chapterWeights: [6, 6, 8, 5, 4, 6, 5, 7, 6, 7, 6, 4, 5, 5], // Sum = 80
        c12Weights:     [4, 4, 5, 5, 8, 9, 9, 4, 5, 5, 9, 5, 8],    // Sum = 80
        sections: [
            { code: "SECTION A", spec: "20 × 1M", label: "MCQ & Assertion-Reason", count: 20, marks: 1 },
            { code: "SECTION B", spec: "5 × 2M",  label: "Very Short Answer",      count: 5,  marks: 2 },
            { code: "SECTION C", spec: "6 × 3M",  label: "Short Answer",           count: 6,  marks: 3 },
            { code: "SECTION D", spec: "4 × 5M",  label: "Long Answer Proofs",     count: 4,  marks: 5 },
            { code: "SECTION E", spec: "3 × 4M",  label: "Case-Based Studies",     count: 3,  marks: 4 }
        ],
        halfSections: [
            { code: "SECTION A", spec: "10 × 1M", label: "MCQ & A-R",       count: 10, marks: 1 },
            { code: "SECTION B", spec: "2 × 2M",  label: "Very Short",      count: 2,  marks: 2 },
            { code: "SECTION C", spec: "3 × 3M",  label: "Short Answer",    count: 3,  marks: 3 },
            { code: "SECTION D", spec: "1 × 5M",  label: "Long Proof",      count: 1,  marks: 5 },
            { code: "SECTION E", spec: "3 × 4M",  label: "Case-Based",      count: 3,  marks: 4 }
        ],
        papers: [
            { id: "CBSE_2025_SQP", title: "CBSE 2025 Official Sample Question Paper (041) • 38 Questions • 80 Marks" },
            { id: "CBSE_2025_DEL", title: "CBSE 2025 Board Paper (Delhi Set 1) • 38 Questions • 80 Marks" },
            { id: "CBSE_2024_AI",  title: "CBSE 2024 Board Paper (All India Set 1) • 38 Questions • 80 Marks" },
            { id: "CBSE_2024_DEL", title: "CBSE 2024 Board Paper (Delhi Set 1) • 38 Questions • 80 Marks" },
            { id: "CBSE_2023_AI",  title: "CBSE 2023 Board Paper (All India Set 1) • 38 Questions • 80 Marks" },
            { id: "CBSE_2022_T2",  title: "CBSE 2022 Board Paper (Term 2 • Calculus, Vectors & 3D) • 19 Questions • 40 Marks", qCount: 19, totalM: 40 },
            { id: "CBSE_2020_DEL", title: "CBSE 2020 Board Paper (Delhi Set 1) • 38 Questions • 80 Marks" },
            { id: "CBSE_2019_AI",  title: "CBSE 2019 Board Paper (All India Set 1) • 38 Questions • 80 Marks" }
        ]
    },
    SCI: {
        totalMarks: 70, totalQuestions: 33, durationMins: 180,
        chapterWeights: [3, 4, 6, 7, 5, 6, 5, 4, 5, 5, 6, 4, 5, 5], // Sum = 70
        c12Weights:     [4, 4, 7, 5, 4, 4, 5, 3, 7, 5, 5, 4, 5, 8], // Sum = 70
        sections: [
            { code: "SECTION A", spec: "16 × 1M", label: "12 MCQ + 4 A-R",    count: 16, marks: 1 },
            { code: "SECTION B", spec: "5 × 2M",  label: "Short Answer I",    count: 5,  marks: 2 },
            { code: "SECTION C", spec: "7 × 3M",  label: "Short Answer II",   count: 7,  marks: 3 },
            { code: "SECTION D", spec: "2 × 4M",  label: "Case-Based Study",  count: 2,  marks: 4 },
            { code: "SECTION E", spec: "3 × 5M",  label: "Long Derivations",  count: 3,  marks: 5 }
        ],
        halfSections: [
            { code: "SECTION A", spec: "8 × 1M", label: "6 MCQ + 2 A-R",   count: 8, marks: 1 },
            { code: "SECTION B", spec: "2 × 2M", label: "Short Answer I",  count: 2, marks: 2 },
            { code: "SECTION C", spec: "3 × 3M", label: "Short Answer II", count: 3, marks: 3 },
            { code: "SECTION D", spec: "1 × 4M", label: "Case-Based",      count: 1, marks: 4 },
            { code: "SECTION E", spec: "2 × 5M", label: "Long Answer",     count: 2, marks: 5 }
        ],
        papers: [
            { id: "CBSE_2025_SQP", title: "CBSE 2025 Official Sample Question Paper (042) • 33 Questions • 70 Marks" },
            { id: "CBSE_2025_DEL", title: "CBSE 2025 Board Paper (Delhi Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2024_AI",  title: "CBSE 2024 Board Paper (All India Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2024_DEL", title: "CBSE 2024 Board Paper (Delhi Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2023_AI",  title: "CBSE 2023 Board Paper (All India Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2022_T2",  title: "CBSE 2022 Board Paper (Term 2 • Electrostatics, Optics & Modern Physics) • 16 Questions • 35 Marks", qCount: 16, totalM: 35 },
            { id: "CBSE_2020_DEL", title: "CBSE 2020 Board Paper (Delhi Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2019_AI",  title: "CBSE 2019 Board Paper (All India Set 1) • 33 Questions • 70 Marks" }
        ]
    },
    SST: {
        totalMarks: 70, totalQuestions: 33, durationMins: 180,
        chapterWeights: [7, 9, 6, 7, 9, 7, 4, 11, 10], // Sum = 70
        c12Weights:     [7, 9, 7, 7, 7, 6, 6, 8, 6, 7], // Sum = 70
        sections: [
            { code: "SECTION A", spec: "16 × 1M", label: "12 MCQ + 4 A-R",     count: 16, marks: 1 },
            { code: "SECTION B", spec: "5 × 2M",  label: "Very Short Answer",  count: 5,  marks: 2 },
            { code: "SECTION C", spec: "7 × 3M",  label: "Short Answer",       count: 7,  marks: 3 },
            { code: "SECTION D", spec: "2 × 4M",  label: "Case-Based Passage", count: 2,  marks: 4 },
            { code: "SECTION E", spec: "3 × 5M",  label: "Long Answer",        count: 3,  marks: 5 }
        ],
        halfSections: [
            { code: "SECTION A", spec: "8 × 1M", label: "6 MCQ + 2 A-R",   count: 8, marks: 1 },
            { code: "SECTION B", spec: "2 × 2M", label: "Short Answer I",  count: 2, marks: 2 },
            { code: "SECTION C", spec: "3 × 3M", label: "Short Answer II", count: 3, marks: 3 },
            { code: "SECTION D", spec: "1 × 4M", label: "Case-Based",      count: 1, marks: 4 },
            { code: "SECTION E", spec: "2 × 5M", label: "Long Answer",     count: 2, marks: 5 }
        ],
        papers: [
            { id: "CBSE_2025_SQP", title: "CBSE 2025 Official Sample Question Paper (043) • 33 Questions • 70 Marks" },
            { id: "CBSE_2025_DEL", title: "CBSE 2025 Board Paper (Delhi Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2024_AI",  title: "CBSE 2024 Board Paper (All India Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2024_DEL", title: "CBSE 2024 Board Paper (Delhi Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2023_AI",  title: "CBSE 2023 Board Paper (All India Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2022_T2",  title: "CBSE 2022 Board Paper (Term 2 • Electrochemistry, Kinetics & Organic) • 16 Questions • 35 Marks", qCount: 16, totalM: 35 },
            { id: "CBSE_2020_DEL", title: "CBSE 2020 Board Paper (Delhi Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2019_AI",  title: "CBSE 2019 Board Paper (All India Set 1) • 33 Questions • 70 Marks" }
        ]
    },
    BIO: {
        totalMarks: 70, totalQuestions: 33, durationMins: 180,
        chapterWeights: [2, 3, 3, 4, 3, 3, 2, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 19 chapters, Sum = 70
        c12Weights:     [5, 6, 4, 7, 7, 6, 6, 4, 6, 6, 4, 5, 4], // Sum = 70
        sections: [
            { code: "SECTION A", spec: "16 × 1M", label: "12 MCQ + 4 A-R",     count: 16, marks: 1 },
            { code: "SECTION B", spec: "5 × 2M",  label: "Very Short Answer",  count: 5,  marks: 2 },
            { code: "SECTION C", spec: "7 × 3M",  label: "Short Answer",       count: 7,  marks: 3 },
            { code: "SECTION D", spec: "2 × 4M",  label: "Case-Based Passage", count: 2,  marks: 4 },
            { code: "SECTION E", spec: "3 × 5M",  label: "Long Diagram Answer",count: 3,  marks: 5 }
        ],
        halfSections: [
            { code: "SECTION A", spec: "8 × 1M", label: "6 MCQ + 2 A-R",   count: 8, marks: 1 },
            { code: "SECTION B", spec: "2 × 2M", label: "Short Answer I",  count: 2, marks: 2 },
            { code: "SECTION C", spec: "3 × 3M", label: "Short Answer II", count: 3, marks: 3 },
            { code: "SECTION D", spec: "1 × 4M", label: "Case-Based",      count: 1, marks: 4 },
            { code: "SECTION E", spec: "2 × 5M", label: "Long Answer",     count: 2, marks: 5 }
        ],
        papers: [
            { id: "CBSE_2025_SQP", title: "CBSE 2025 Official Sample Question Paper (044) • 33 Questions • 70 Marks" },
            { id: "CBSE_2025_DEL", title: "CBSE 2025 Board Paper (Delhi Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2024_AI",  title: "CBSE 2024 Board Paper (All India Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2024_DEL", title: "CBSE 2024 Board Paper (Delhi Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2023_AI",  title: "CBSE 2023 Board Paper (All India Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2022_T2",  title: "CBSE 2022 Board Paper (Term 2 • Genetics, Biotech & Ecology) • 16 Questions • 35 Marks", qCount: 16, totalM: 35 },
            { id: "CBSE_2020_DEL", title: "CBSE 2020 Board Paper (Delhi Set 1) • 33 Questions • 70 Marks" },
            { id: "CBSE_2019_AI",  title: "CBSE 2019 Board Paper (All India Set 1) • 33 Questions • 70 Marks" }
        ]
    }
};


// Real Neon PostgreSQL PYQ Extractor for Class 11 & Class 12 (MATH, PHYS, CHEM, BIOL)
window.getNeonPastPapersForClassSubject = function(cls, subjCode) {
    const bank = window.dbQuestionBank || {};
    const prefix = `C${cls}_`;
    const dbSubjMap = { MATH: 'MATH', SCI: 'PHYS', SST: 'CHEM', BIO: 'BIOL' };
    const targetSubj = dbSubjMap[subjCode] || subjCode;
    const papers = {};

    Object.keys(bank).forEach((chId) => {
        if (!chId.startsWith(prefix)) return;
        (bank[chId] || []).forEach((q) => {
            if (q.subject_code && q.subject_code !== targetSubj) return;
            if (!q.pyq_year) return;
            const yr = String(q.pyq_year).trim();
            const st = (q.pyq_set || 'Board Paper').trim();
            const key = `${yr}___${st}`;
            if (!papers[key]) {
                papers[key] = { id: key, year: yr, set: st, count: 0, totalM: 0, questions: [] };
            }
            papers[key].count += 1;
            papers[key].totalM += Number(q.marks || 1);
            papers[key].questions.push(q);
        });
    });

    return Object.values(papers).sort((a, b) => Number(b.year) - Number(a.year) || a.set.localeCompare(b.set));
};

function syncPrescribedMarksAndExamUI(subjCode) {
    if (typeof window.syncEnrichedBiology12ToRegistry === 'function') window.syncEnrichedBiology12ToRegistry();
    const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
    const activeSubj = subjCode || (window.curriculumBridge ? window.curriculumBridge.getActiveSubject() : 'MATH');
    const bp = CBSE_PRESCRIBED_BLUEPRINTS[activeSubj] || CBSE_PRESCRIBED_BLUEPRINTS.MATH;

    // 1. Calibrate individual chapter weights
    let chCount = 14;
    if (typeof subjectsRegistry !== 'undefined' && subjectsRegistry[activeSubj]) {
        const chMap = subjectsRegistry[activeSubj].chapters || {};
        const keys = Object.keys(chMap);
        chCount = keys.length || chCount;
        if (cls !== 10) {
            const wArr = (cls === 12) ? bp.c12Weights : bp.chapterWeights;
            keys.forEach((k, idx) => {
                if (wArr && wArr[idx] !== undefined) chMap[k].weight = wArr[idx];
            });
            // preserve active chapter selection
        }
    }

    // Update "NCERT CHAPTERS (1-N)" header
    document.querySelectorAll('span, div, h2, h3').forEach((el) => {
        if (el.children.length === 0 && /^NCERT CHAPTERS\s*\(\d+\s*-\s*\d+\)$/i.test(el.textContent.trim())) {
            el.textContent = `NCERT CHAPTERS (1-${chCount})`;
        }
    });

    // 2. Update ONLY the Sidebar Total Marks Badge ("70 MARKS TOTAL" / "80 MARKS TOTAL")
    const targetTotalText = (cls === 10) ? "80 MARKS TOTAL" : `${bp.totalMarks} MARKS TOTAL`;
    document.querySelectorAll('span, div').forEach((el) => {
        if (el.children.length === 0 && /^\d+\s*MARKS TOTAL$/i.test(el.textContent.trim())) {
            el.textContent = targetTotalText;
        }
    });

    // 3. Update Top Tab 6 Button Label cleanly (index.html uses id="mainTab6")
    const tab6Btn = document.getElementById('mainTab6') || document.getElementById('tabBtn_6');
    if (tab6Btn && cls !== 10) {
        tab6Btn.innerHTML = `<span>📄</span> 6. ${bp.totalMarks}-Mark Timed Mock`;
    }

    if (cls === 10) return;

    // 4. Precision-target ONLY the 3 Dynamic Blueprint cards
    const halfM = Math.round(bp.totalMarks / 2);
    const halfQ = (bp.halfSections || []).reduce((s, x) => s + x.count, 0) || Math.round(bp.totalQuestions / 2);

    // Card 1: Single-Chapter Drill (restore 20 Marks pill)
    const chDrillCard = Array.from(document.querySelectorAll('div')).find(d =>
        d.querySelector('h4, h3, span, div') &&
        d.textContent.includes('Selected Chapter • 45 Mins') &&
        !d.textContent.includes('Quick Board Drill')
    );
    if (chDrillCard) {
        chDrillCard.querySelectorAll('span').forEach(sp => {
            if (sp.children.length === 0 && /^\d+\s*Marks$/i.test(sp.textContent.trim())) {
                sp.textContent = '20 Marks';
            }
        });
    }

    // Card 2: Quick Board Drill (#mockModeQuickBtn)
    const quickCard = document.getElementById('mockModeQuickBtn');
    if (quickCard) {
        quickCard.querySelectorAll('span, p, div').forEach(el => {
            if (el.children.length !== 0) return;
            const t = el.textContent.trim();
            if (/^\d+\s*Marks$/i.test(t)) el.textContent = `${halfM} Marks`;
            if (/^All \d+ (Units|Chapters)/i.test(t)) el.textContent = `All ${chCount} Chapters • 90 Mins`;
            if (/\d+\s*Questions/i.test(t)) el.textContent = `${halfQ} Questions (Sec A–E) for speed & accuracy`;
        });
    }

    // Card 3: Comprehensive Board Mock (#mockModeFull80Btn)
    const fullCard = document.getElementById('mockModeFull80Btn');
    if (fullCard) {
        fullCard.querySelectorAll('span, p, div').forEach(el => {
            if (el.children.length !== 0) return;
            const t = el.textContent.trim();
            if (/^\d+\s*Marks$/i.test(t)) el.textContent = `${bp.totalMarks} Marks`;
            if (/^All \d+ (Units|Chapters)/i.test(t)) el.textContent = `All ${chCount} Chapters • 180 Mins (3 Hours)`;
            if (/\d+\s*Questions/i.test(t)) el.textContent = `Complete ${bp.totalQuestions} Questions (Sec A–E) official CBSE simulation`;
        });
    }

    // 5. Populate Official Past Board Papers <select> directly from Neon PostgreSQL C11/C12 PYQs
    const selectEl = document.getElementById('pastPaperSelect') || Array.from(document.querySelectorAll('select')).find(s =>
        Array.from(s.options).some(o => o.text.includes('CBSE 20') || o.text.includes('Sample Question Paper') || o.text.includes('Mid-Term'))
    );
    let isHalfPaper = false;
    if (selectEl) {
        const neonPapers = window.getNeonPastPapersForClassSubject(cls, activeSubj);
        const expectedSignature = `${cls}_${activeSubj}`;
        if (neonPapers.length > 0 && selectEl.dataset.loadedFor !== expectedSignature) {
            selectEl.innerHTML = neonPapers.map(p =>
                `<option value="${p.id}">CBSE ${p.year} (${p.set}) • ${p.count} Questions • ${Math.round(p.totalM)} Marks</option>`
            ).join('');
            selectEl.dataset.loadedFor = expectedSignature;
            selectEl.onchange = () => syncPrescribedMarksAndExamUI(activeSubj);
        } else if (neonPapers.length === 0 && selectEl.dataset.loadedFor !== expectedSignature) {
            selectEl.innerHTML = bp.papers.map(p => `<option value="${p.id}">${p.title}</option>`).join('');
            selectEl.dataset.loadedFor = expectedSignature;
            selectEl.onchange = () => syncPrescribedMarksAndExamUI(activeSubj);
        }

        const matchedNeon = neonPapers.find(p => p.id === selectEl.value) || neonPapers[0];
        if (matchedNeon) {
            isHalfPaper = matchedNeon.totalM <= 45;
            const metaTag = document.getElementById('pyqMetaTag');
            if (metaTag) metaTag.textContent = `${matchedNeon.count} Questions • ${Math.round(matchedNeon.totalM)} Marks`;
        } else {
            const activePaper = bp.papers.find(p => p.id === selectEl.value) || bp.papers[0];
            isHalfPaper = Boolean(activePaper.qCount);
            const metaTag = document.getElementById('pyqMetaTag');
            if (metaTag) metaTag.textContent = `${activePaper.qCount || bp.totalQuestions} Questions • ${activePaper.totalM || bp.totalMarks} Marks`;
        }
    }

    // Sync Card 1 title with currently active sidebar chapter name
    const activeChObj = window.curriculumBridge ? window.curriculumBridge.getActiveChapter(activeSubj) : null;
    const chDrillTitle = document.getElementById('chapterMockBtnLabel');
    if (chDrillTitle && activeChObj && activeChObj.name) {
        chDrillTitle.textContent = `${activeChObj.name} Drill`;
    }

    // 6. Update Section A–E Breakdown Grid dynamically for the active mode ('chapter' 20M, 'quick' 40M/35M, or 'full_80' 80M/70M)
    const activeMode = (typeof mockMode !== 'undefined') ? mockMode : (window._activeMockBlueprintMode || 'quick');
    const isPyqView = (typeof examSourceMode !== 'undefined' && examSourceMode === 'pyq');
    const secGrid = Array.from(document.querySelectorAll('div.grid')).find(g => g.textContent.includes('SECTION A'));
    if (secGrid) {
        if (!isPyqView && activeMode === 'chapter') {
            const chSections = [
                { code: "SECTION A", spec: "2 × 1M", label: "Objective MCQ" },
                { code: "SECTION B", spec: "2 × 2M", label: "Short Answer" },
                { code: "SECTION C", spec: "3 × 3M", label: "Core Proofs" },
                { code: "SECTION D", spec: "1 × 5M", label: "Long Application" }
            ];
            secGrid.className = "grid grid-cols-2 sm:grid-cols-4 gap-3 text-left py-1 font-mono text-xs";
            secGrid.innerHTML = chSections.map(sec => `
                <div class="p-3 bg-surface rounded-xl border border-slate-800 space-y-1">
                    <span class="text-[10px] font-mono uppercase text-slate-400 block">${sec.code}</span>
                    <span class="text-sm font-black text-white block">${sec.spec}</span>
                    <span class="text-[10px] text-slate-400 block">${sec.label}</span>
                </div>`).join('');
        } else {
            const useHalf = isPyqView ? isHalfPaper : (activeMode === 'quick');
            const activeSecs = (useHalf && bp.halfSections) ? bp.halfSections : bp.sections;
            secGrid.className = "grid grid-cols-2 md:grid-cols-5 gap-2.5 text-left";
            secGrid.innerHTML = activeSecs.map(sec => `
                <div class="p-3 bg-surface rounded-xl border border-slate-800 space-y-1">
                    <span class="text-[10px] font-mono uppercase text-slate-400 block">${sec.code}</span>
                    <span class="text-sm font-black text-white block">${sec.count} × ${sec.marks}M</span>
                    <span class="text-[10px] text-slate-400 block">${sec.label}</span>
                </div>`).join('');
        }
    }
}

// Re-apply prescribed blueprint lock whenever Tab 6 or sidebar re-renders
(function installTab6BlueprintObserver() {
    let lockTimer = null;
    const obs = new MutationObserver(() => {
        const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
        if (cls === 10) return;
        const bodyTxt = document.body ? document.body.textContent : '';
        const needsSync =
            bodyTxt.includes('CBSE 2019 (All India Set 1)') ||
            bodyTxt.includes('CBSE 2017 (All India Set 1)') ||
            bodyTxt.includes('All 14 Units') ||
            (bodyTxt.includes('70 MARKS TOTAL') && bodyTxt.includes('20 × 1M')) ||
            (document.getElementById('tabBtn_6') && document.getElementById('tabBtn_6').textContent.includes('40-'));
        if (needsSync) {
            clearTimeout(lockTimer);
            lockTimer = setTimeout(() => syncPrescribedMarksAndExamUI(), 30);
        }
    });
    if (document.body) {
        obs.observe(document.body, { childList: true, subtree: true });
    } else {
        document.addEventListener('DOMContentLoaded', () => obs.observe(document.body, { childList: true, subtree: true }));
    }
})();

function installCurriculumHooks() {

    if (typeof window.switchMainTab === 'function' && !window.switchMainTab._c11ExamHooked) {
        const origSwitchTab = window.switchMainTab;
        window.switchMainTab = function(tabIdx) {
            origSwitchTab.apply(this, arguments);
            if (typeof window.refreshAnswerWriterToolbar === 'function') setTimeout(window.refreshAnswerWriterToolbar, 80);
            if (Number(tabIdx) === 6 && window.curriculumBridge) {
                setTimeout(() => syncPrescribedMarksAndExamUI(window.curriculumBridge.getActiveSubject()), 50);
            }
        };
        window.switchMainTab._c11ExamHooked = true;
    }


    if (typeof window.setMockMode === 'function' && !window.setMockMode._c11ModeHooked) {
        const origSetMockMode = window.setMockMode;
        window.setMockMode = function(mode) {
            window._activeMockBlueprintMode = mode;
            origSetMockMode.apply(this, arguments);
            const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
            if (cls !== 10) {
                syncPrescribedMarksAndExamUI(window.curriculumBridge.getActiveSubject());
            }
        };
        window.setMockMode._c11ModeHooked = true;
    }


    if (typeof window.buildPastPaperQuestions === 'function' && !window.buildPastPaperQuestions._c11PyqHooked) {
        const origBuildPyq = window.buildPastPaperQuestions;
        window.buildPastPaperQuestions = function(year, set) {
            const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
            if (cls !== 10 && window.curriculumBridge) {
                const subj = window.curriculumBridge.getActiveSubject();
                const sel = document.getElementById('pastPaperSelect');
                const neonPapers = window.getNeonPastPapersForClassSubject(cls, subj);
                const chosen = (sel && neonPapers.find(p => p.id === sel.value)) || neonPapers[0];
                if (chosen && chosen.questions.length > 0) {
                    return chosen.questions.map((q, idx) => ({
                        id: q.question_id || `PYQ_${cls}_${idx + 1}`,
                        marks: Number(q.marks || 1),
                        text: q.text,
                        section: Number(q.marks) === 1 ? "Section A (1M)" : (Number(q.marks) === 2 ? "Section B (2M)" : (Number(q.marks) === 3 ? "Section C (3M)" : (Number(q.marks) === 4 ? "Section E (4M)" : "Section D (5M)"))),
                        model: q.ideal_solution || q.idealAnswer || '',
                        rubric: q.rubric || null,
                        sourceTag: `CBSE ${chosen.year} • ${chosen.set}`,
                        lossCategory: "Step / Conceptual Omission",
                        remedy: "Revise chapter concepts in Tab 1"
                    }));
                }
            }
            return origBuildPyq.apply(this, arguments);
        };
        window.buildPastPaperQuestions._c11PyqHooked = true;
    }

    ensureBioSubjectButton();

    if (typeof window.switchSubject === 'function' && !window.switchSubject._c11Hooked) {
        const origSwitchSubject = window.switchSubject;
        window.switchSubject = function(subjCode) {
            ensureBioSubjectButton();
            const reg = (typeof subjectsRegistry !== 'undefined' && subjectsRegistry[subjCode]) ? subjectsRegistry[subjCode].chapters : {};
            const firstKey = (subjectsRegistry[subjCode] && subjectsRegistry[subjCode].defaultChapter && reg[subjectsRegistry[subjCode].defaultChapter])
                ? subjectsRegistry[subjCode].defaultChapter
                : (Object.keys(reg)[0] || '');
            window._activeClassChapterKey = firstKey;
            origSwitchSubject.apply(this, arguments);
            syncPrescribedMarksAndExamUI(subjCode);
            if (typeof window.refreshAnswerWriterToolbar === 'function') setTimeout(window.refreshAnswerWriterToolbar, 80);
            ['MATH', 'SCI', 'SST', 'BIO'].forEach(code => {
                const b = document.getElementById(`subjTab_${code}`);
                if (b && !b.classList.contains('hidden')) {
                    b.className = (code === subjCode)
                        ? "px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-md shadow-indigo-600/30 transition cursor-pointer"
                        : "px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-surface border border-slate-700 text-slate-300 hover:text-white transition cursor-pointer";
                }
            });
        };
        window.switchSubject._c11Hooked = true;
    }

    if (typeof window.selectChapter === 'function' && !window.selectChapter._c11Hooked) {
        const origSelectChapter = window.selectChapter;
        window.selectChapter = function(key) {
            window._activeClassChapterKey = key;
            if (typeof currentChapterKey !== 'undefined') currentChapterKey = key;
            origSelectChapter.apply(this, arguments);
            if (window.curriculumBridge && window.curriculumBridge.getActiveClass() !== 10) syncPrescribedMarksAndExamUI();
        };
        window.selectChapter._c11Hooked = true;
    }

    if (typeof window.resolveProblemsForChapter === 'function' && !window.resolveProblemsForChapter._c11Hooked) {
        const origResolve = window.resolveProblemsForChapter;
        window.resolveProblemsForChapter = function(bank, chapterKey, subject) {
            const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
            const targetKey = (cls !== 10 && window._activeClassChapterKey && (!chapterKey || String(chapterKey).startsWith('M10_')))
                ? window._activeClassChapterKey
                : (chapterKey || window._activeClassChapterKey);

            if (cls !== 10 && window.curriculumBridge) {
                const subj = subject || window.curriculumBridge.getActiveSubject();
                const reg = window.curriculumBridge.getRegistry(subj);
                const ch = (reg && reg[targetKey]) || window.curriculumBridge.getActiveChapter(subj);
                const resolvedKey = (reg && reg[targetKey]) ? targetKey : window.curriculumBridge.getActiveChapterKey(subj);
                const items = window.curriculumBridge.buildBankProblemsForChapter(ch, resolvedKey, subj);
                if (items && items.length > 0) return items;
            }
            return origResolve.apply(this, arguments);
        };
        window.resolveProblemsForChapter._c11Hooked = true;
    }

    if (typeof window.getFullQuestionBankArray === 'function' && !window.getFullQuestionBankArray._c11Hooked) {
        const origGetFullBank = window.getFullQuestionBankArray;
        window.getFullQuestionBankArray = function(subj) {
            const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
            if (cls !== 10 && window.curriculumBridge) {
                const targetSubj = subj || window.curriculumBridge.getActiveSubject();
                const reg = window.curriculumBridge.getRegistry(targetSubj);
                let all = [];
                Object.keys(reg).forEach((k) => {
                    all = all.concat(window.curriculumBridge.buildBankProblemsForChapter(reg[k], k, targetSubj));
                });
                if (all.length > 0) return all;
            }
            return origGetFullBank.apply(this, arguments);
        };
        window.getFullQuestionBankArray._c11Hooked = true;
    }
}

async function applyActiveStudentClass(clsNum) {
    const cls = parseInt(clsNum || '10', 10);
    const classEl = document.getElementById('studentClassBadge');
    if (classEl) classEl.innerText = `CLASS ${cls}`;
    document.title = `CBSE Class ${cls} Master Engine`;

    await loadRegistryScript('js/core/curriculumBridge.js');
    installCurriculumHooks();

    const manifest = (window.curriculumManifest && window.curriculumManifest[cls]) || window.curriculumManifest?.[10];
    if (!manifest) return;

    await Promise.all(Object.values(manifest.subjects).map((cfg) => loadRegistryScript(cfg.script)));

    ensureBioSubjectButton();
    ['MATH', 'SCI', 'SST', 'BIO'].forEach((subjKey) => {
        const tabBtn = document.getElementById(`subjTab_${subjKey}`);
        const cfg = manifest.subjects[subjKey];
        if (!cfg || !subjectsRegistry[subjKey]) {
            if (tabBtn) {
                tabBtn.classList.add('hidden');
                tabBtn.style.display = 'none';
            }
            return;
        }
        const regData = window[cfg.globalKey] || {};
        const keys = Object.keys(regData);
        subjectsRegistry[subjKey].name = cfg.name;
        subjectsRegistry[subjKey].chapters = regData;
        subjectsRegistry[subjKey].freeChapters = cfg.freeChapters || keys.slice(0, cfg.freeCount || 2);
        subjectsRegistry[subjKey].defaultChapter = cfg.defaultChapter || keys[0] || '';
        if (tabBtn) {
            tabBtn.classList.remove('hidden');
            tabBtn.style.removeProperty('display');
            tabBtn.innerHTML = cfg.label;
        }
    });

    const firstKey = subjectsRegistry.MATH?.defaultChapter || '';
    window._activeClassChapterKey = firstKey;

    if (typeof switchSubject === 'function') {
        switchSubject('MATH');
        setTimeout(() => syncPrescribedMarksAndExamUI('MATH'), 100);
    }
}

installCurriculumHooks();
loadRegistryScript('js/core/curriculumBridge.js');


// Load Subject-Aware Answer Writer Toolbar (Math, Physics, Chemistry, Biology)
(function() {
    const s = document.createElement('script');
    s.src = 'js/core/answerWriterHelper.js?v=20261112';
    s.onload = () => { if (typeof window.refreshAnswerWriterToolbar === 'function') window.refreshAnswerWriterToolbar(); };
    document.head.appendChild(s);
})();


// Prescribed CBSE Mock Exam Assembler (Generates real 38Q/80M Math & 33Q/70M Phy/Chem/Bio papers)
window.buildPrescribedCbseMockPaper = function(subjCode, isHalfPaper) {
    const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
    const activeSubj = subjCode || (window.curriculumBridge ? window.curriculumBridge.getActiveSubject() : 'MATH');
    const bp = CBSE_PRESCRIBED_BLUEPRINTS[activeSubj] || CBSE_PRESCRIBED_BLUEPRINTS.MATH;
    const reg = window.curriculumBridge ? window.curriculumBridge.getRegistry(activeSubj) : {};
    const chKeys = Object.keys(reg);

    // Collect all enriched questions grouped by mark value (1M, 2M, 3M, 4M, 5M) across all chapters
    const pools = { 1: [], 2: [], 3: [], 4: [], 5: [] };
    chKeys.forEach((k) => {
        const bank = window.curriculumBridge.buildBankProblemsForChapter(reg[k], k, activeSubj);
        bank.forEach((q) => {
            const m = Number(q.marks) || 1;
            if (pools[m]) pools[m].push(q);
            if (m === 3 || m === 5) {
                // Also supply 4M Case-Based Study items from 3M/5M analytical problems
                pools[4].push(Object.assign({}, q, {
                    question_id: `${q.question_id}_CS4M`,
                    marks: 4,
                    title: `[4M Case-Based] ${q.title.replace(/^\[\dM\]\s*/, '')}`,
                    text: `Case Study (${reg[k].name}): Read the scenario and answer the sub-questions.\n${q.text}`
                }));
            }
        });
    });

    const paperQuestions = [];
    const paperSecs = (isHalfPaper && bp.halfSections) ? bp.halfSections : bp.sections;
    paperSecs.forEach((sec) => {
        const targetCount = sec.count;
        const pool = pools[sec.marks] && pools[sec.marks].length > 0 ? pools[sec.marks] : pools[1];
        for (let i = 0; i < targetCount && pool.length > 0; i++) {
            const picked = pool[(i * 7 + sec.marks) % pool.length];
            paperQuestions.push(Object.assign({}, picked, {
                section: sec.code,
                marks: sec.marks,
                qNumber: paperQuestions.length + 1
            }));
        }
    });

    return {
        subject: activeSubj,
        classLevel: cls,
        totalQuestions: paperQuestions.length,
        totalMarks: paperQuestions.reduce((acc, q) => acc + q.marks, 0),
        durationMins: isHalfPaper ? 90 : bp.durationMins,
        questions: paperQuestions
    };
};

