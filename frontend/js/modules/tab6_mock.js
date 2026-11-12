// js/modules/tab6_mock.js - CBSE Timed Mock Exam Engine
(function() {
    let activeExamType = 80;
    let timerInterval = null;
    let timeRemainingSeconds = 180 * 60;
    let isRunning = false;

    const mockQuestionSets = {
        MATH: [
            { id: "SEC-A-01", sec: "A", marks: 1, type: "MCQ", q: "If two positive integers a and b are written as a = x³y² and b = xy³, where x, y are prime numbers, then HCF(a, b) is:", options: ["xy", "xy²", "x³y³", "x²y²"], correct: 1 },
            { id: "SEC-A-02", sec: "A", marks: 1, type: "MCQ", q: "If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is:", options: ["10", "-10", "-7", "-2"], correct: 1 },
            { id: "SEC-B-01", sec: "B", marks: 2, type: "VSA", q: "Prove that 3 + 2√5 is irrational, given that √5 is irrational.", solution: "Assume 3 + 2√5 = a/b (coprime integers, b ≠ 0).\nRearrange: 2√5 = a/b - 3 => √5 = (a - 3b)/(2b).\nSince a, b are integers, RHS is rational, which contradicts that √5 is irrational.\nHence, 3 + 2√5 is irrational." },
            { id: "SEC-C-01", sec: "C", marks: 3, type: "SA", q: "Find the zeroes of 4s² - 4s + 1 and verify the relationship between zeroes and coefficients.", solution: "Factorize: (2s - 1)² = 0 => zeroes are α = 1/2, β = 1/2.\nSum: α + β = 1/2 + 1/2 = 1. Formula: -b/a = -(-4)/4 = 1. (Verified)\nProduct: αβ = 1/4. Formula: c/a = 1/4. (Verified)" },
            { id: "SEC-D-01", sec: "D", marks: 5, type: "LA", q: "State and prove Basic Proportionality Theorem (Thales's Theorem).", solution: "1. Statement (1M)\n2. Diagram, Given & Construction (Join BE, CD; draw DM ⊥ AC, EN ⊥ AB) (1M)\n3. Area ratio derivations for both triangles (2M)\n4. Equating areas using common base between parallels DE || BC (1M)." },
            { id: "SEC-E-01", sec: "E", marks: 4, type: "Case Study", q: "Case Study on Coordinate Geometry: In a sports day sprint grid, markers are placed at unit intervals on a Cartesian plane...", solution: "Part (i): Position coordinates identification (1M)\nPart (ii): Shortest distance by distance formula d = √[(x₂-x₁)² + (y₂-y₁)²] (1M)\nPart (iii): Section formula midpoint / internal division ratio (2M)." }
        ]
    };

    window.tab6 = {
        formatTime: function(secs) {
            const h = Math.floor(secs / 3600);
            const m = Math.floor((secs % 3600) / 60);
            const s = secs % 60;
            return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        },

        render: function() {
            const container = document.getElementById('workspace-6');
            if (!container) return;

            const subj = (window.store && window.store.state.subject) || 'MATH';
            const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
            let qList = (cls === 10 && mockQuestionSets[subj]) ? mockQuestionSets[subj] : [];
            if (qList.length === 0 && window.curriculumBridge) {
                const reg = window.curriculumBridge.getRegistry(subj);
                const keys = Object.keys(reg);
                const pool = [];
                keys.forEach((k) => {
                    window.curriculumBridge.extractChapterItems(reg[k], k).forEach((it) => pool.push({ ...it, chName: reg[k].name }));
                });
                const mcqs = pool.filter(p => p.options && p.options.length >= 2).slice(0, 2);
                const subjs = pool.filter(p => !p.options || p.options.length === 0).slice(0, 4);
                const sections = [
                    { sec: "B", marks: 2, type: "VSA" },
                    { sec: "C", marks: 3, type: "SA" },
                    { sec: "D", marks: 5, type: "LA" },
                    { sec: "E", marks: 4, type: "Case Study" }
                ];
                qList = [
                    ...mcqs.map((m, i) => ({
                        id: `SEC-A-0${i + 1}`, sec: "A", marks: 1, type: `MCQ (${m.chName})`,
                        q: m.prompt, options: m.options, correct: m.correct
                    })),
                    ...subjs.map((s, i) => ({
                        id: `SEC-${sections[i]?.sec || 'C'}-01`, sec: sections[i]?.sec || 'C',
                        marks: sections[i]?.marks || 3, type: `${sections[i]?.type || 'SA'} (${s.chName})`,
                        q: s.prompt, solution: s.sampleAnswer
                    }))
                ];
            }
            if (qList.length === 0) qList = mockQuestionSets.MATH;

            container.innerHTML = `
                <div class="space-y-6 max-w-6xl mx-auto">
                    <div class="p-6 rounded-2xl bg-[#121927] border border-slate-800 shadow-xl flex items-center justify-between">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xl">⏱️</span>
                                <h2 class="text-lg font-black text-white">CBSE 2026 Board Exam Simulation</h2>
                                <span class="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 text-[10px] font-bold">Standard 041 Blueprint</span>
                            </div>
                            <p class="text-xs text-slate-400">
                                Official 5-section layout with standard CBSE board weightage and negative penalty markers.
                            </p>
                        </div>

                        <div class="flex items-center gap-4">
                            <div class="text-right">
                                <div id="timerDisplay" class="text-2xl font-black font-mono ${isRunning ? 'text-amber-400 animate-pulse' : 'text-slate-300'}">
                                    ${this.formatTime(timeRemainingSeconds)}
                                </div>
                                <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Time Left</span>
                            </div>
                            <button type="button" onclick="window.tab6.toggleTimer()" class="px-4 py-2 rounded-xl font-bold text-xs shadow-lg transition cursor-pointer ${isRunning ? 'bg-rose-600 hover:bg-rose-500 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white'}">
                                ${isRunning ? '⏸ Pause Timer' : '▶ Start Examination'}
                            </button>
                        </div>
                    </div>

                    <div class="flex items-center gap-3">
                        <button type="button" onclick="window.tab6.setMode(80)" class="px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${activeExamType === 80 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-[#121927] border border-slate-800 text-slate-400 hover:text-white'}">
                            🎯 80-Mark Full Board Paper (3 Hours)
                        </button>
                        <button type="button" onclick="window.tab6.setMode(40)" class="px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${activeExamType === 40 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-[#121927] border border-slate-800 text-slate-400 hover:text-white'}">
                            ⚡ 40-Mark Mid-Term Sprint (90 Mins)
                        </button>
                    </div>

                    <div class="space-y-4">
                        ${qList.map((q, idx) => `
                            <div class="p-5 rounded-2xl bg-[#121927] border border-slate-800 space-y-3 shadow-lg">
                                <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                                    <div class="flex items-center gap-2">
                                        <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px] font-bold">Section ${q.sec}</span>
                                        <span class="text-xs font-bold text-white">${q.type} • Question ${idx + 1}</span>
                                    </div>
                                    <span class="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-2 py-0.5 rounded font-bold">${q.marks} Mark${q.marks > 1 ? 's' : ''}</span>
                                </div>

                                <p class="text-xs text-slate-200 leading-relaxed font-mono">${q.q}</p>

                                ${q.options ? `
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                        ${q.options.map((opt, optIdx) => `
                                            <button type="button" onclick="window.tab6.selectMcq(${idx}, ${optIdx}, ${q.correct})" id="mcq-btn-${idx}-${optIdx}" class="p-2.5 rounded-xl bg-[#0B0F19] border border-slate-800 hover:border-indigo-500 text-xs text-slate-300 font-mono text-left transition cursor-pointer flex items-center gap-2">
                                                <span class="w-5 h-5 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center text-[10px] font-bold">${String.fromCharCode(65 + optIdx)}</span>
                                                <span>${opt}</span>
                                            </button>
                                        `).join('')}
                                    </div>
                                ` : `
                                    <div class="pt-2 flex items-center justify-between">
                                        <span class="text-[11px] text-slate-400 italic">Self-Written Step Derivation</span>
                                        <button type="button" onclick="window.tab6.toggleSolution('sol-${idx}')" class="text-xs text-indigo-400 hover:text-indigo-300 font-bold cursor-pointer">
                                            🔍 Reveal CBSE Model Solution & Rubric
                                        </button>
                                    </div>
                                    <div id="sol-${idx}" class="hidden p-3.5 rounded-xl bg-[#0B0F19] border border-emerald-900/60 text-xs text-slate-300 space-y-1.5 font-mono">
                                        <div class="font-bold text-emerald-400 text-[11px]">Official CBSE Marking Scheme Solution:</div>
                                        <p class="leading-relaxed text-slate-300 whitespace-pre-line">${q.solution}</p>
                                    </div>
                                `}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        },

        setMode: function(marks) {
            activeExamType = marks;
            timeRemainingSeconds = (marks === 80 ? 180 : 90) * 60;
            if (isRunning) this.toggleTimer();
            this.render();
        },

        toggleTimer: function() {
            isRunning = !isRunning;
            if (isRunning) {
                timerInterval = setInterval(() => {
                    if (timeRemainingSeconds > 0) {
                        timeRemainingSeconds--;
                        const el = document.getElementById('timerDisplay');
                        if (el) el.innerText = this.formatTime(timeRemainingSeconds);
                    } else {
                        clearInterval(timerInterval);
                        isRunning = false;
                        alert("Time's Up! Board Examination Simulation Concluded.");
                    }
                }, 1000);
            } else {
                clearInterval(timerInterval);
            }
            this.render();
        },

        selectMcq: function(qIdx, optIdx, correctIdx) {
            const isCorrect = (optIdx === correctIdx);
            const btn = document.getElementById(`mcq-btn-${qIdx}-${optIdx}`);
            if (btn) {
                if (isCorrect) {
                    btn.className = "p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-600 text-xs text-emerald-200 font-mono text-left transition flex items-center gap-2";
                } else {
                    btn.className = "p-2.5 rounded-xl bg-rose-950/80 border border-rose-600 text-xs text-rose-200 font-mono text-left transition flex items-center gap-2";
                }
            }
        },

        toggleSolution: function(id) {
            const el = document.getElementById(id);
            if (el) el.classList.toggle('hidden');
        }
    };
})();