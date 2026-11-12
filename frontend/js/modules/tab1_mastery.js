// js/modules/tab1_mastery.js - NCERT Mastery Engine (Modular Architecture)
(function() {
    let activeSubTab = 0; // 0: Overview/Intuition, 1: Fundamentals/Formulas, 2: Derivations/Proofs, 3: Diagnostics

    function getRegistry() {
        if (window.curriculumBridge) return window.curriculumBridge.getRegistry();
        const subj = (window.store && window.store.state && window.store.state.subject) || 'MATH';
        if (subj === 'SCI' && window.scienceChapterRegistry) return window.scienceChapterRegistry;
        if (subj === 'SST' && window.sstChapterRegistry) return window.sstChapterRegistry;
        return window.mathChapterRegistry || {};
    }

    function getActiveChapterRecord() {
        const reg = getRegistry();
        const activeKey = (window.store && window.store.state && window.store.state.activeChapterKey) || 
                          (window.store && window.store.state && window.store.state.activeChapter 
                              ? `M10_CH${String(window.store.state.activeChapter).padStart(2, '0')}` 
                              : Object.keys(reg)[0]);
        return reg[activeKey] || Object.values(reg)[0];
    }

    window.tab1 = {
        renderSidebar: function() {
            const listEl = document.getElementById('chapterList');
            if (!listEl) return;

            const reg = getRegistry();
            const activeCh = getActiveChapterRecord();
            const keys = Object.keys(reg);

            listEl.innerHTML = keys.map(key => {
                const ch = reg[key];
                const isActive = (ch.code === activeCh.code || ch.name === activeCh.name);
                return `
                    <div data-chapter-key="${key}" class="chapter-item group p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                        isActive 
                        ? 'bg-indigo-950/70 border-indigo-500 text-white shadow-md' 
                        : 'bg-surface border-slate-800 hover:border-slate-700 text-slate-300'
                    }">
                        <div class="flex-1 pr-2 truncate">
                            <div class="text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-indigo-400' : 'text-slate-500'}">
                                ${ch.code || key}
                            </div>
                            <div class="text-xs font-bold truncate mt-0.5">${ch.name}</div>
                        </div>
                        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-semibold whitespace-nowrap">
                            ${ch.weight || ch.weightage || '6'} Marks
                        </span>
                    </div>
                `;
            }).join('');

            // Full unlocked chapter navigation synchronized with global selectChapter & Tab 3/5/6
            listEl.querySelectorAll('.chapter-item').forEach(item => {
                item.addEventListener('click', () => {
                    const chKey = item.getAttribute('data-chapter-key');
                    if (window.store) {
                        window.store.state.activeChapterKey = chKey;
                        const keys = Object.keys(getRegistry());
                        const idx = Math.max(0, keys.indexOf(chKey)) + 1;
                        window.store.state.activeChapter = idx;
                        window.store.state.activeChapterId = idx;
                    }
                    try { window.currentChapter = chKey; currentChapter = chKey; } catch (e) {}
                    if (typeof window.selectChapter === 'function') {
                        window.selectChapter(chKey);
                    }
                    if (typeof window.populateEvalProblems === 'function') window.populateEvalProblems();
                    if (typeof window.renderEvalProblems === 'function') window.renderEvalProblems();
                    if (typeof window.loadTab3Problems === 'function') window.loadTab3Problems();
                    const activeTab = (window.store && window.store.state && window.store.state.activeTab) || 1;
                    if (activeTab === 2 && window.tab2) window.tab2.render();
                    if (activeTab === 3 && window.tab3 && document.getElementById('evalProblemSelect') === null) window.tab3.render();
                    if (activeTab === 5 && window.tab5) window.tab5.render();
                    this.renderSidebar();
                    this.renderContent();
                });
            });
        },

        setSubTab: function(subIdx) {
            activeSubTab = subIdx;
            this.renderContent();
        },

        renderContent: function() {
            const container = document.getElementById('workspace-1');
            if (!container) return;

            const ch = getActiveChapterRecord();
            if (!ch) return;

            const subTabs = [
                { id: 0, icon: '🧭', label: 'Intuition & Concept Map' },
                { id: 1, icon: '🧩', label: 'Fundamentals & Core Formulas' },
                { id: 2, icon: '📄', label: 'Derivations & Worked Proofs' },
                { id: 3, icon: '📋', label: 'Chapter Diagnostics' }
            ];

            const subTabsNav = subTabs.map(t => {
                const isActive = (activeSubTab === t.id);
                return `
                    <button type="button" onclick="window.tab1.setSubTab(${t.id})" class="pb-2.5 px-3 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap border-b-2 ${
                        isActive 
                        ? 'border-indigo-500 text-indigo-400 font-bold' 
                        : 'border-transparent text-slate-400 hover:text-white'
                    }">
                        <span>${t.icon}</span> <span>${t.label}</span>
                    </button>
                `;
            }).join('');

            let subContent = '';
            if (activeSubTab === 0) {
                subContent = ch.overview || `<div class="p-5 rounded-2xl bg-[#121927] border border-slate-800"><p class="text-xs text-slate-300">${ch.desc || ''}</p></div>`;
            } else if (activeSubTab === 1) {
                subContent = ch.exp1 || `<div class="p-5 rounded-2xl bg-[#121927] border border-slate-800"><p class="text-xs text-slate-300">Core formulas and principles loaded.</p></div>`;
            } else if (activeSubTab === 2) {
                subContent = ch.exp2 || `<div class="p-5 rounded-2xl bg-[#121927] border border-slate-800"><p class="text-xs text-slate-300">Standard board derivations loaded.</p></div>`;
            } else if (activeSubTab === 3) {
                const diags = ch.diagnostics || [];
                subContent = `
                    <div class="space-y-4">
                        ${ch.vernacular && ch.vernacular.English ? `
                            <div class="p-4 rounded-xl bg-amber-950/30 border border-amber-900/40 text-xs text-amber-200 flex items-start gap-3">
                                <span class="text-lg">💡</span>
                                <div><strong class="font-bold">CBSE Exam Tip (English): </strong>${ch.vernacular.English}</div>
                            </div>
                        ` : ''}
                        ${diags.length > 0 ? diags.map((d, i) => `
                            <div class="p-5 rounded-xl bg-surface border border-slate-800 space-y-3">
                                <div class="flex items-center justify-between text-xs text-slate-500">
                                    <span class="font-bold text-white">Question ${i + 1}</span>
                                    <span class="px-2 py-0.5 rounded bg-amber-900/50 text-amber-400 font-semibold border border-amber-800">${d.difficulty || 'Board Standard'}</span>
                                </div>
                                <p class="text-xs sm:text-sm font-semibold text-slate-200">${d.q || d.text || ''}</p>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                                    ${(d.options || []).map(opt => `
                                        <div class="p-2.5 rounded-lg border border-slate-700 bg-surfaceLight text-slate-300">${opt}</div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('') : '<p class="text-xs text-slate-500">Diagnostic exercises loaded.</p>'}
                    </div>
                `;
            }

            container.innerHTML = `
                <div class="space-y-6">
                    <!-- Chapter Banner -->
                    <div class="p-6 rounded-2xl bg-surface border border-slate-800 shadow-lg space-y-3 relative overflow-hidden">
                        <div class="flex items-center justify-between flex-wrap gap-2">
                            <span class="px-2.5 py-1 rounded text-xs font-bold bg-indigo-900/50 text-indigo-300 border border-indigo-800/50">
                                ${ch.code || 'NCERT Topic'}
                            </span>
                            <span class="text-xs font-semibold text-emerald-400 px-3 py-1 rounded-full border border-emerald-900/50 bg-emerald-900/20">
                                Board Weightage: ${ch.weight || '6'} Marks
                            </span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">${ch.name}</h2>
                        <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">${ch.desc || ''}</p>
                    </div>

                    <!-- Subtabs Bar -->
                    <div class="flex border-b border-slate-800 gap-2 overflow-x-auto">
                        ${subTabsNav}
                    </div>

                    <!-- Dynamic Subtab Content -->
                    <div class="space-y-6 pt-1">
                        ${subContent}
                    </div>
                </div>
            `;

            if (window.renderMathInElement) {
                renderMathInElement(container, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '$', right: '$', display: false }
                    ]
                });
            }
        },

        render: function() {
            this.renderSidebar();
            this.renderContent();
        }
    };
})();
