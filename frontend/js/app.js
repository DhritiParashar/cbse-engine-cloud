// js/app.js - Main Application Orchestrator
(function() {
    function initTabs() {
        const tabBtns = document.querySelectorAll('.tab-nav-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                switchWorkspaceTab(tabId);
            });
        });
    }

    function switchWorkspaceTab(tabId) {
        if (window.store) window.store.state.activeTab = parseInt(tabId);

        document.querySelectorAll('.tab-nav-btn').forEach(b => {
            const isTarget = b.getAttribute('data-tab') === String(tabId);
            if (isTarget) {
                b.className = "tab-nav-btn main-tab-active flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold transition whitespace-nowrap text-sm shadow-sm cursor-pointer";
            } else {
                b.className = "tab-nav-btn flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-slate-700 text-slate-400 hover:bg-surfaceLight transition whitespace-nowrap text-sm font-medium cursor-pointer";
            }
        });

        for (let i = 1; i <= 6; i++) {
            const panel = document.getElementById(`workspace-${i}`);
            if (panel) {
                if (i === parseInt(tabId)) {
                    panel.classList.remove('hidden');
                    if (i === 1 && window.tab1) window.tab1.renderContent();
                    if (i === 2 && window.tab2) window.tab2.render();
                    if (i === 3 && window.tab3) window.tab3.render();
                    if (i === 4 && window.tab4) window.tab4.render();
                    if (i === 5 && window.tab5) window.tab5.render();
                    if (i === 6 && window.tab6) window.tab6.render();
                } else {
                    panel.classList.add('hidden');
                }
            }
        }
    }

    function initSubjectSelector() {
        const container = document.getElementById('dynamicSubjectPills');
        if (!container) return;

        const subjects = [
            { code: 'MATH', label: '📐 Mathematics (041)' },
            { code: 'SCI', label: '🔬 Science (086)' },
            { code: 'SST', label: '🌍 Social Science (087)' }
        ];

        container.innerHTML = subjects.map(s => {
            const isUnlocked = window.store.permissions.isSubjectUnlocked(s.code);
            const isActive = (window.store.state.subject === s.code);
            let pillStyle = '';

            if (isActive) {
                pillStyle = 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold';
            } else if (!isUnlocked) {
                pillStyle = 'bg-surface/50 border border-slate-800 text-slate-500 hover:text-slate-400 cursor-not-allowed';
            } else {
                pillStyle = 'bg-surface border border-slate-700 text-slate-300 hover:text-white font-semibold cursor-pointer';
            }

            const lockIcon = !isUnlocked ? '<span class="ml-1 text-[10px] text-amber-400">🔒</span>' : '';

            return `
                <button type="button" data-subject="${s.code}" class="subj-pill px-3.5 py-1.5 rounded-lg text-xs transition flex items-center gap-1 ${pillStyle}">
                    ${s.label} ${lockIcon}
                </button>
            `;
        }).join('');

        container.querySelectorAll('.subj-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                const subj = btn.getAttribute('data-subject');
                const isUnlocked = window.store.permissions.isSubjectUnlocked(subj);

                if (!isUnlocked) {
                    alert("Subject restricted on Free Demo tier.\n\nFree accounts are restricted to 1 subject (Mathematics 041). Upgrade to Pro or redeem an Institutional Voucher to unlock Science and Social Science.");
                    if (window.showVoucherModal) window.showVoucherModal();
                    return;
                }

                window.store.state.subject = subj;
                initSubjectSelector();
                if (window.tab1) {
                    window.tab1.renderSidebar();
                    window.tab1.renderContent();
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        initTabs();
        initSubjectSelector();
        if (window.tab1) {
            window.tab1.renderSidebar();
            window.tab1.renderContent();
        }
    });

    window.switchWorkspaceTab = switchWorkspaceTab;
    window.initSubjectSelector = initSubjectSelector;
})();



