// js/core/answerWriterHelper.js - Interactive Step-by-Step & Symbol Writer Toolbar for Math, Physics, Chemistry & Biology
(function() {
  const TOOL_PALETTES = {
    MATH: {
      badge: "Math Step & Symbol Writer",
      scaffolds: [
        { label: "+ Step", insert: "\nStep : " },
        { label: "Given / To Prove", insert: "Given: \nTo Prove / Find: \nFormula / Identity: \nStep 1: \nTherefore, [Q.E.D.]" }
      ],
      symbols: [
        ["a/b", "\\frac{a}{b}"], ["x²", "x^2"], ["√x", "\\sqrt{x}"], ["∑", "\\sum"],
        ["∫", "\\int"], ["lim", "\\lim_{x \\to 0}"], ["π", "\\pi"], ["θ", "\\theta"],
        ["≤", "\\le"], ["≥", "\\ge"], ["≠", "\\ne"], ["∈", "\\in"],
        ["∪", "\\cup"], ["∩", "\\cap"], ["⇒", "\\implies"], ["∴", "\\therefore"]
      ]
    },
    SCI: {
      badge: "Physics Formula & Derivation Writer",
      scaffolds: [
        { label: "+ Step", insert: "\nStep : " },
        { label: "Numerical Format", insert: "Given (in SI units): \nFormula: \nSubstitution: \nCalculation: \nFinal Answer (with SI unit): " }
      ],
      symbols: [
        ["a/b", "\\frac{a}{b}"], ["v²", "v^2"], ["√", "\\sqrt{}"], ["Δ", "\\Delta"],
        ["θ", "\\theta"], ["ω", "\\omega"], ["λ", "\\lambda"], ["μ", "\\mu"],
        ["ρ", "\\rho"], ["ε₀", "\\varepsilon_0"], ["vec", "\\vec{F}"], ["×", "\\times"],
        ["∫", "\\int"], ["d/dt", "\\frac{d}{dt}"], ["⇒", "\\implies"], ["∴", "\\therefore"]
      ]
    },
    SST: {
      badge: "Chemistry Equation & Mechanism Writer",
      scaffolds: [
        { label: "+ Step", insert: "\nStep : " },
        { label: "Reaction / Numerical", insert: "Balanced Equation / Law: \nGiven Data: \nCalculation / Mechanism: \nConclusion: " }
      ],
      symbols: [
        ["→", " \\rightarrow "], ["⇌", " \\rightleftharpoons "], ["ΔH", "\\Delta H"], ["ΔG°", "\\Delta G^\\circ"],
        ["ΔS", "\\Delta S"], ["H₂O", "H_2O"], ["H⁺", "H^+"], ["OH⁻", "OH^-"],
        ["e⁻", "e^-"], ["α", "\\alpha"], ["λ", "\\lambda"], ["ν̄", "\\bar{\\nu}"],
        ["°C→K", " + 273.15\\text{ K}"], ["log₁₀", "\\log_{10}"], ["⇒", "\\implies"], ["∴", "\\therefore"]
      ]
    },
    BIO: {
      badge: "Biology Flowchart & Keyword Writer",
      scaffolds: [
        { label: "+ Point", insert: "\n• " },
        { label: "5M Board Format", insert: "1. Principle / Definition: \n2. Stepwise Pathway / Mechanism: \n   Step A → Step B → Step C\n3. Key NCERT Terms & Significance: " }
      ],
      symbols: [
        ["→", " → "], ["⇌", " ⇌ "], ["2n", "2n"], ["n", "n"],
        ["3n (PEN)", "3n"], ["5'→3'", "5' → 3'"], ["3'→5'", "3' → 5'"], ["CO₂", "CO₂"],
        ["O₂", "O₂"], ["ATP", "ATP"], ["NADPH", "NADPH"], ["°C", "°C"],
        ["↑", "↑"], ["↓", "↓"], ["+", "+"], ["−", "−"]
      ]
    }
  };

  function insertAtCursor(textarea, snippet) {
    if (!textarea) return;
    textarea.focus();
    const start = textarea.selectionStart ?? textarea.value.length;
    const end = textarea.selectionEnd ?? textarea.value.length;
    const before = textarea.value.substring(0, start);
    const after = textarea.value.substring(end);
    textarea.value = before + snippet + after;
    const newPos = start + snippet.length;
    textarea.selectionStart = textarea.selectionEnd = newPos;
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function renderWriterToolbar() {
    const targetTextarea =
      document.getElementById('studentSolutionInput') ||
      document.getElementById('studentAnswerInput') ||
      document.getElementById('studentAnswer') ||
      document.querySelector('#tabContent_3 textarea, textarea[placeholder*="step"], textarea[placeholder*="Step"], textarea');

    if (!targetTextarea) return;

    const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
    const subj = window.curriculumBridge ? window.curriculumBridge.getActiveSubject() : 'MATH';
    // In Class 10, SST is Social Science (use BIO/structured point writer); in Class 11/12, SST is Chemistry
    const paletteKey = (cls === 10 && subj === 'SST') ? 'BIO' : (TOOL_PALETTES[subj] ? subj : 'MATH');
    const pal = TOOL_PALETTES[paletteKey];

    let bar = document.getElementById('cbseSmartWriterToolbar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'cbseSmartWriterToolbar';
      bar.className = 'mb-2.5 p-3 rounded-xl bg-slate-900/90 border border-indigo-800/50 space-y-2';
      targetTextarea.parentNode.insertBefore(bar, targetTextarea);
    }

    bar.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-bold">✍️ ${pal.badge} (Click to Insert)</span>
        <div class="flex flex-wrap gap-1.5">
          ${pal.scaffolds.map((sc, i) => `
            <button type="button" data-sc-idx="${i}"
              class="px-2.5 py-1 rounded-md bg-emerald-950/80 hover:bg-emerald-800/80 border border-emerald-700/60 text-emerald-300 font-mono text-[10px] font-bold transition">
              ${sc.label}
            </button>`).join('')}
        </div>
      </div>
      <div class="flex flex-wrap gap-1.5">
        ${pal.symbols.map(([label, snip], i) => `
          <button type="button" data-sym-idx="${i}" title="Insert ${snip}"
            class="px-2 py-1 rounded bg-surfaceLight hover:bg-indigo-600 border border-slate-700 text-slate-200 hover:text-white font-mono text-[11px] transition">
            ${label}
          </button>`).join('')}
      </div>
    `;

    bar.querySelectorAll('[data-sc-idx]').forEach((btn) => {
      btn.onclick = () => insertAtCursor(targetTextarea, pal.scaffolds[Number(btn.dataset.scIdx)].insert);
    });
    bar.querySelectorAll('[data-sym-idx]').forEach((btn) => {
      btn.onclick = () => insertAtCursor(targetTextarea, pal.symbols[Number(btn.dataset.symIdx)][1]);
    });
  }

  window.refreshAnswerWriterToolbar = renderWriterToolbar;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(renderWriterToolbar, 250));
  } else {
    setTimeout(renderWriterToolbar, 250);
  }
})();
