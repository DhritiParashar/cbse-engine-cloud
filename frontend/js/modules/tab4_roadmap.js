// js/modules/tab4_roadmap.js - Strategy Roadmap & Self-Discrimination Index
(function() {
    const chaptersMeta = {
        MATH: [
            { id: 1, title: "Real Numbers", weight: 6 },
            { id: 2, title: "Polynomials", weight: 5 },
            { id: 3, title: "Pair of Linear Equations in Two Variables", weight: 6 },
            { id: 4, title: "Quadratic Equations", weight: 6 },
            { id: 5, title: "Arithmetic Progressions", weight: 5 },
            { id: 6, title: "Triangles", weight: 6 },
            { id: 7, title: "Coordinate Geometry", weight: 6 },
            { id: 8, title: "Introduction to Trigonometry", weight: 8 },
            { id: 9, title: "Some Applications of Trigonometry", weight: 4 },
            { id: 10, title: "Circles", weight: 6 },
            { id: 11, title: "Areas Related to Circles", weight: 4 },
            { id: 12, title: "Surface Areas and Volumes", weight: 6 },
            { id: 13, title: "Statistics", weight: 6 },
            { id: 14, title: "Probability", weight: 6 }
        ],
        SCI: [
            { id: 1, title: "Chemical Reactions and Equations", weight: 6 },
            { id: 2, title: "Acids, Bases and Salts", weight: 6 },
            { id: 3, title: "Metals and Non-metals", weight: 7 },
            { id: 4, title: "Carbon and its Compounds", weight: 6 },
            { id: 5, title: "Life Processes", weight: 9 },
            { id: 6, title: "Control and Coordination", weight: 6 },
            { id: 7, title: "How do Organisms Reproduce?", weight: 6 },
            { id: 8, title: "Heredity and Evolution", weight: 4 },
            { id: 9, title: "Light - Reflection and Refraction", weight: 7 },
            { id: 10, title: "The Human Eye and Colourful World", weight: 5 },
            { id: 11, title: "Electricity", weight: 7 },
            { id: 12, title: "Magnetic Effects of Electric Current", weight: 6 },
            { id: 13, title: "Our Environment", weight: 5 }
        ],
        SST: [
            { id: 1, title: "Rise of Nationalism in Europe", weight: 8 },
            { id: 2, title: "Nationalism in India", weight: 7 },
            { id: 3, title: "Resources and Development", weight: 5 },
            { id: 4, title: "Agriculture", weight: 6 },
            { id: 5, title: "Power Sharing", weight: 5 },
            { id: 6, title: "Federalism", weight: 5 },
            { id: 7, title: "Development", weight: 5 },
            { id: 8, title: "Sectors of the Indian Economy", weight: 7 }
        ]
    };

    window.tab4 = {
        getStorageKey: function() {
            const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
            const subj = (window.store && window.store.state.subject) || 'MATH';
            return `cbse_ratings_c${cls}_${subj}`;
        },

        getRatings: function() {
            try {
                return JSON.parse(localStorage.getItem(this.getStorageKey())) || {};
            } catch(e) {
                return {};
            }
        },

        saveRating: function(chId, stateVal) {
            const ratings = this.getRatings();
            ratings[chId] = stateVal; // 'red' (0.40) | 'amber' (0.70) | 'green' (0.95)
            localStorage.setItem(this.getStorageKey(), JSON.stringify(ratings));
            this.render();
        },

        render: function() {
            const container = document.getElementById('workspace-4');
            if (!container) return;

            const subj = (window.store && window.store.state.subject) || 'MATH';
            const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
            const reg = window.curriculumBridge ? window.curriculumBridge.getRegistry(subj) : {};
            const regKeys = Object.keys(reg);
            const list = (cls !== 10 && regKeys.length > 0)
                ? regKeys.map((k, idx) => ({ id: idx + 1, title: reg[k].name || k, weight: parseInt(reg[k].weight || reg[k].weightage || 6, 10) || 6 }))
                : (chaptersMeta[subj] || chaptersMeta.MATH);
            const ratings = this.getRatings();

            // Calculate Metrics
            let totalWeightedScore = 0;
            let masteredCount = 0;
            let highestLeakageChapter = null;
            let maxLeakageWeight = -1;

            list.forEach(ch => {
                const r = ratings[ch.id] || 'amber'; // Default: developing (70%)
                let factor = 0.70;
                if (r === 'red') factor = 0.40;
                if (r === 'green') {
                    factor = 0.95;
                    masteredCount++;
                }

                totalWeightedScore += (ch.weight * factor);

                // Identify primary leakage
                if (r === 'red' && ch.weight > maxLeakageWeight) {
                    maxLeakageWeight = ch.weight;
                    highestLeakageChapter = ch.title;
                }
            });

            // Fallback leakage if none marked red
            if (!highestLeakageChapter) {
                const firstAmber = list.find(c => (ratings[c.id] || 'amber') === 'amber');
                highestLeakageChapter = firstAmber ? firstAmber.title : "None (All Ready)";
            }

            const projectedScore = Math.round(totalWeightedScore);
            const percentage = Math.round((projectedScore / 80) * 100);

            // Render Chapter Grid
            const cardsHtml = list.map(ch => {
                const cur = ratings[ch.id] || 'amber';

                const isRed = (cur === 'red');
                const isAmber = (cur === 'amber');
                const isGreen = (cur === 'green');

                return `
                    <div class="p-3.5 rounded-2xl bg-[#121927] border border-slate-800/80 hover:border-slate-700 transition flex items-center justify-between shadow-sm">
                        <div class="flex-1 pr-3">
                            <span class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Chapter ${String(ch.id).padStart(2, '0')} • ${ch.weight}M</span>
                            <div class="text-xs font-bold text-white truncate mt-0.5">${ch.title}</div>
                        </div>

                        <!-- 3-State Toggle Pill -->
                        <div class="flex items-center gap-1.5 p-1 rounded-xl bg-[#090D16] border border-slate-800">
                            <!-- RED: Needs Focus (40%) -->
                            <button type="button" onclick="window.tab4.saveRating(${ch.id}, 'red')" 
                                    class="w-5 h-5 rounded-lg flex items-center justify-center transition cursor-pointer ${isRed ? 'bg-rose-500 shadow-md shadow-rose-500/40' : 'bg-transparent hover:bg-slate-800/60'}" 
                                    title="Needs Focus (40%)">
                                <span class="w-2.5 h-2.5 rounded-full bg-rose-400 block ${isRed ? 'ring-2 ring-white scale-110' : 'opacity-40'}"></span>
                            </button>

                            <!-- AMBER: Developing (70%) -->
                            <button type="button" onclick="window.tab4.saveRating(${ch.id}, 'amber')" 
                                    class="w-5 h-5 rounded-lg flex items-center justify-center transition cursor-pointer ${isAmber ? 'bg-amber-500 shadow-md shadow-amber-500/40' : 'bg-transparent hover:bg-slate-800/60'}" 
                                    title="Developing (70%)">
                                <span class="w-2.5 h-2.5 rounded-full bg-amber-400 block ${isAmber ? 'ring-2 ring-white scale-110' : 'opacity-40'}"></span>
                            </button>

                            <!-- GREEN: Exam Ready (95%) -->
                            <button type="button" onclick="window.tab4.saveRating(${ch.id}, 'green')" 
                                    class="w-5 h-5 rounded-lg flex items-center justify-center transition cursor-pointer ${isGreen ? 'bg-emerald-500 shadow-md shadow-emerald-500/40' : 'bg-transparent hover:bg-slate-800/60'}" 
                                    title="Exam Ready (95%)">
                                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 block ${isGreen ? 'ring-2 ring-white scale-110' : 'opacity-40'}"></span>
                            </button>
                        </div>
                    </div>
                `;
            }).join('');

            container.innerHTML = `
                <div class="space-y-6">
                    <!-- Top Strategic Header -->
                    <div class="p-6 rounded-2xl bg-[#121927] border border-slate-800 shadow-xl space-y-2">
                        <div class="flex items-center gap-2">
                            <h2 class="text-xl font-black text-white tracking-tight">Strategy Roadmap & Self-Discrimination Index</h2>
                        </div>
                        <p class="text-xs text-slate-400 max-w-4xl leading-relaxed">
                            Rate your individual chapter confidence below ( <span class="text-rose-400">🔴 Focus Area</span>, <span class="text-amber-400">🟡 Developing</span>, <span class="text-emerald-400">🟢 Exam Ready</span>). The engine dynamically calculates your real-time CBSE score projection, updates unit mastery bars, and shifts priorities into the action matrix.
                        </p>
                    </div>

                    <!-- 4 Live Dynamic Metrics Cards -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <!-- 1. Dynamic Board Score -->
                        <div class="p-5 rounded-2xl bg-[#121927] border border-slate-800 shadow-lg space-y-1">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Dynamic Board Score</span>
                            <div class="text-2xl font-black text-cyan-400 font-mono">${projectedScore} / 80</div>
                            <div class="text-[11px] text-slate-400">${percentage}% Projected Board Score</div>
                        </div>

                        <!-- 2. Mastered Chapters -->
                        <div class="p-5 rounded-2xl bg-[#121927] border border-slate-800 shadow-lg space-y-1">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Mastered Chapters</span>
                            <div class="text-2xl font-black text-emerald-400 font-mono">${masteredCount} / ${list.length}</div>
                            <div class="text-[11px] text-slate-400">Marked as Exam Ready ( 🟢 )</div>
                        </div>

                        <!-- 3. Primary Mark Leakage -->
                        <div class="p-5 rounded-2xl bg-[#121927] border border-slate-800 shadow-lg space-y-1">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Primary Mark Leakage</span>
                            <div class="text-lg font-black text-rose-400 truncate">${highestLeakageChapter}</div>
                            <div class="text-[11px] text-slate-400">Highest-weightage weak area</div>
                        </div>

                        <!-- 4. Recommended Next Step -->
                        <div class="p-5 rounded-2xl bg-[#121927] border border-slate-800 shadow-lg space-y-1">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Recommended Next Step</span>
                            <div class="text-lg font-black text-indigo-400">Fix Step Deductions</div>
                            <div class="text-[11px] text-slate-400">Inspect ${highestLeakageChapter.split(' ')[0]} in Tab 3</div>
                        </div>
                    </div>

                    <!-- Chapter Rating Section -->
                    <div class="p-6 rounded-2xl bg-[#121927] border border-slate-800 shadow-xl space-y-4">
                        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                            <div class="flex items-center gap-2">
                                <span class="text-base">🎯</span>
                                <h3 class="text-xs font-black uppercase tracking-wider text-white">Student Self-Assessment: Rate Your Chapter Mastery</h3>
                            </div>
                            <div class="flex items-center gap-4 text-xs font-bold">
                                <span class="flex items-center gap-1.5 text-rose-400"><span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span> Needs Focus (40%)</span>
                                <span class="flex items-center gap-1.5 text-amber-400"><span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span> Developing (70%)</span>
                                <span class="flex items-center gap-1.5 text-emerald-400"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Exam Ready (95%)</span>
                            </div>
                        </div>

                        <!-- 3-Column Chapter Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            ${cardsHtml}
                        </div>
                    </div>
                </div>
            `;
        }
    };
})();
