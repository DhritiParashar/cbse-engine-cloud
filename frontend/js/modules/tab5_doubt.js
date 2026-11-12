// js/modules/tab5_doubt.js - CBSE AI Socratic Doubt Engine
(function() {
    const cannedResponses = {
        irrational: {
            title: "Proof of Irrationality (Theorem 1.2)",
            steps: [
                "1. State the hypothesis: Assume to the contrary that √5 is rational (a/b where a, b are coprime integers and b ≠ 0).",
                "2. Algebraic square: 5 = a²/b² => 5b² = a², showing that 5 divides a² and therefore 5 divides a.",
                "3. Substitution: Let a = 5c. Then 5b² = 25c² => b² = 5c², which proves 5 divides b.",
                "4. Board Consequence: Since 5 divides both a and b, gcd(a,b) ≥ 5, which directly contradicts the coprime assumption. Hence, √5 is irrational."
            ],
            pitfall: "Never conclude merely that 'a and b are odd'. The contradiction must target the coprime assumption gcd(a,b) = 1."
        },
        bpt: {
            title: "Basic Proportionality Theorem (Thales's Theorem)",
            steps: [
                "1. Statement: If a line is drawn parallel to one side of a triangle intersecting the other two sides, then it divides the two sides in the same ratio.",
                "2. Given: Triangle ABC with DE || BC.",
                "3. Construction: Join BE, CD and draw perpendiculars DM ⊥ AC and EN ⊥ AB.",
                "4. Ratio of Areas: Area(ADE)/Area(BDE) = AD/DB and Area(ADE)/Area(CDE) = AE/EC.",
                "5. Common Base Theorem: Area(BDE) = Area(CDE) because they lie on the same base DE between the same parallels DE and BC. Therefore AD/DB = AE/EC."
            ],
            pitfall: "CBSE examiners deduct 1 full mark if you omit the justification: 'Triangles on the same base and between the same parallel lines are equal in area'."
        },
        default: {
            title: "CBSE Socratic Step Guidance",
            steps: [
                "1. Identify the given values and state the target formula before inserting numerical values.",
                "2. Show every intermediate algebraic transformation step clearly.",
                "3. State the final answer boxed with appropriate physical or geometric units (e.g., cm², m/s, mol)."
            ],
            pitfall: "Direct one-line answers without intermediate steps receive 0 marks in Section C & D (3M & 5M questions)."
        }
    };

    window.tab5 = {
        render: function() {
            const container = document.getElementById('workspace-5');
            if (!container) return;

            const subj = (window.store && window.store.state.subject) || 'MATH';

            container.innerHTML = `
                <div class="space-y-6 max-w-5xl mx-auto">
                    <!-- Top Doubt Header -->
                    <div class="p-6 rounded-2xl bg-[#121927] border border-slate-800 shadow-xl flex items-center justify-between">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xl">🎧</span>
                                <h2 class="text-lg font-black text-white">AI Doubt Solver & Socratic Tutor</h2>
                                <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 text-[10px] font-bold">24/7 Board Assistant</span>
                            </div>
                            <p class="text-xs text-slate-400">
                                Ask any concept question, theorem derivation, or step difficulty. The tutor replies strictly according to CBSE marking criteria.
                            </p>
                        </div>
                        <span class="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-2.5 py-1 rounded-lg">
                            Subject: ${subj}
                        </span>
                    </div>

                    <!-- Preset Quick Doubt Chips -->
                    ${(() => {
                        const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
                        const ch = window.curriculumBridge ? window.curriculumBridge.getActiveChapter(subj) : null;
                        if (cls !== 10 && ch) {
                            const cName = ch.name.replace(/'/g, '');
                            return `
                            <div class="flex items-center gap-2 overflow-x-auto pb-1">
                                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">Class ${cls} Suggested:</span>
                                <button type="button" onclick="window.tab5.askQuick('Explain key theorems and domain traps in ${cName}')" class="px-3 py-1 rounded-xl bg-[#0B0F19] border border-slate-800 hover:border-indigo-500 text-slate-300 text-xs font-medium whitespace-nowrap transition cursor-pointer">
                                    🔍 ${cName}: Key Theorems & Traps
                                </button>
                                <button type="button" onclick="window.tab5.askQuick('Give a 5-mark board derivation pattern for ${cName}')" class="px-3 py-1 rounded-xl bg-[#0B0F19] border border-slate-800 hover:border-indigo-500 text-slate-300 text-xs font-medium whitespace-nowrap transition cursor-pointer">
                                    📐 5M Board Derivation Pattern
                                </button>
                                <button type="button" onclick="window.tab5.askQuick('What common step errors deduct marks in ${cName}?')" class="px-3 py-1 rounded-xl bg-[#0B0F19] border border-slate-800 hover:border-indigo-500 text-slate-300 text-xs font-medium whitespace-nowrap transition cursor-pointer">
                                    ⚠️ Step Deduction Checklist
                                </button>
                            </div>`;
                        }
                        return `
                        <div class="flex items-center gap-2 overflow-x-auto pb-1">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">Suggested:</span>
                            <button type="button" onclick="window.tab5.askQuick('How do I write the root 5 irrationality proof without losing marks?')" class="px-3 py-1 rounded-xl bg-[#0B0F19] border border-slate-800 hover:border-indigo-500 text-slate-300 text-xs font-medium whitespace-nowrap transition cursor-pointer">
                                🔍 Root 5 Irrationality Steps
                            </button>
                            <button type="button" onclick="window.tab5.askQuick('What is the mandatory construction step for BPT theorem?')" class="px-3 py-1 rounded-xl bg-[#0B0F19] border border-slate-800 hover:border-indigo-500 text-slate-300 text-xs font-medium whitespace-nowrap transition cursor-pointer">
                                📐 BPT Construction Rule
                            </button>
                            <button type="button" onclick="window.tab5.askQuick('Why do examiners deduct marks in redox reactions?')" class="px-3 py-1 rounded-xl bg-[#0B0F19] border border-slate-800 hover:border-indigo-500 text-slate-300 text-xs font-medium whitespace-nowrap transition cursor-pointer">
                                🧪 Redox Physical State Traps
                            </button>
                        </div>`;
                    })()}

                    <!-- Chat Message Thread -->
                    <div id="doubtChatThread" class="p-5 rounded-2xl bg-[#121927] border border-slate-800 shadow-xl min-h-[340px] max-h-[500px] overflow-y-auto space-y-4">
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-sm font-bold text-white shrink-0">🤖</div>
                            <div class="p-4 rounded-2xl bg-[#0B0F19] border border-slate-800 text-xs text-slate-300 max-w-2xl space-y-1.5">
                                <div class="font-bold text-indigo-400">CBSE Socratic Tutor</div>
                                <p>Greetings! I am trained on official CBSE question banks and marking rubrics from 2019 to 2026. Ask me any conceptual question, proof step, or deduction trap.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Input Bar -->
                    <div class="p-3 rounded-2xl bg-[#121927] border border-slate-800 shadow-xl flex items-center gap-3">
                        <input id="doubtInput" type="text" placeholder="Type your CBSE doubt or theorem question here..." class="flex-1 bg-[#0B0F19] border border-slate-700 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-indigo-500" onkeydown="if(event.key === 'Enter') window.tab5.sendDoubt()">
                        <button type="button" onclick="window.tab5.sendDoubt()" class="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer shadow-lg shadow-indigo-600/30 flex items-center gap-1.5">
                            <span>Send</span> <span>➤</span>
                        </button>
                    </div>
                </div>
            `;
        },

        askQuick: function(text) {
            const inp = document.getElementById('doubtInput');
            if (inp) {
                inp.value = text;
                this.sendDoubt();
            }
        },

        sendDoubt: function() {
            const inp = document.getElementById('doubtInput');
            const thread = document.getElementById('doubtChatThread');
            if (!inp || !thread) return;

            const q = inp.value.trim();
            if (!q) return;

            const userBubble = `
                <div class="flex items-start gap-3 justify-end">
                    <div class="p-3.5 rounded-2xl bg-indigo-600 text-xs text-white max-w-xl font-medium shadow-md">
                        ${q}
                    </div>
                    <div class="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-300 shrink-0">👤</div>
                </div>
            `;
            thread.insertAdjacentHTML('beforeend', userBubble);
            inp.value = '';
            thread.scrollTop = thread.scrollHeight;

            const typingId = 'typing-' + Date.now();
            const typingHtml = `
                <div id="${typingId}" class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-sm font-bold text-white shrink-0">🤖</div>
                    <div class="p-3 rounded-2xl bg-[#0B0F19] border border-slate-800 text-xs text-slate-400 italic">
                        Cross-referencing CBSE Marking Rubric...
                    </div>
                </div>
            `;
            thread.insertAdjacentHTML('beforeend', typingHtml);
            thread.scrollTop = thread.scrollHeight;

            setTimeout(() => {
                const typingEl = document.getElementById(typingId);
                if (typingEl) typingEl.remove();

                const qLower = q.toLowerCase();
                const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
                const ch = window.curriculumBridge ? window.curriculumBridge.getActiveChapter() : null;
                let ans = cannedResponses.default;
                if (cls === 10 && (qLower.includes('root') || qLower.includes('irrational'))) {
                    ans = cannedResponses.irrational;
                } else if (cls === 10 && (qLower.includes('bpt') || qLower.includes('thales') || qLower.includes('triangle'))) {
                    ans = cannedResponses.bpt;
                } else if (cls !== 10 && ch) {
                    const tip = (ch.vernacular && ch.vernacular.English) || "Always state domain restrictions, standard identities, and SI units explicitly.";
                    const exList = window.curriculumBridge.extractChapterItems(ch, ch.code || 'CH').slice(0, 2);
                    ans = {
                        title: `Class ${cls} ${ch.name} — CBSE Socratic Guidance`,
                        steps: [
                            `1. Chapter Scope (${ch.code || 'NCERT'}): ${ch.desc || ch.name}`,
                            exList[0] ? `2. Board Blueprint Problem: ${exList[0].prompt}` : "2. State the governing NCERT theorem/identity before substituting values.",
                            exList[0] ? `3. Official Model Steps: ${exList[0].sampleAnswer}` : "3. Show all intermediate algebraic/calculus simplifications clearly."
                        ],
                        pitfall: tip
                    };
                }

                const aiBubble = `
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-sm font-bold text-white shrink-0">🤖</div>
                        <div class="p-5 rounded-2xl bg-[#0B0F19] border border-slate-800 text-xs text-slate-200 max-w-2xl space-y-3 shadow-lg">
                            <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                                <span class="font-bold text-indigo-400 text-xs">${ans.title}</span>
                                <span class="text-[10px] bg-emerald-950 border border-emerald-800 text-emerald-300 px-2 py-0.5 rounded font-bold">CBSE 2026 Aligned</span>
                            </div>

                            <div class="space-y-1.5 font-sans leading-relaxed text-slate-300">
                                ${ans.steps.map(s => `<div class="p-2 rounded-lg bg-[#121927] border border-slate-800/60">${s}</div>`).join('')}
                            </div>

                            <div class="p-3 rounded-xl bg-rose-950/40 border border-rose-900/60 text-rose-300 text-[11px] leading-relaxed">
                                <strong class="text-rose-400 block mb-0.5">⚠️ Examiner Deduction Trap:</strong>
                                ${ans.pitfall}
                            </div>
                        </div>
                    </div>
                `;
                thread.insertAdjacentHTML('beforeend', aiBubble);
                thread.scrollTop = thread.scrollHeight;
            }, 500);
        }
    };
})();
