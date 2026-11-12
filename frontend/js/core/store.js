// js/core/store.js - Central State & Tier Permission Engine
(function() {
    window.store = {
        state: {
            grade: 10,
            subject: 'MATH',
            activeChapterId: 1,
            activeTab: 1,
            authToken: localStorage.getItem('goalisb_token') || null,
            user: null
        },

        // Helper to supply chapter arrays safely across subjects
        getSubjectRegistry: function() {
            const subj = this.state.subject;
            if (subj === 'MATH' && window.MATH_CHAPTERS) return window.MATH_CHAPTERS;
            if (subj === 'SCI' && window.SCIENCE_CHAPTERS) return window.SCIENCE_CHAPTERS;
            if (subj === 'SST' && window.SST_CHAPTERS) return window.SST_CHAPTERS;
            return window.MATH_CHAPTERS || [];
        },

        getEffectiveTier: function() {
            const user = this.state.user || (localStorage.getItem('goalisb_user') ? JSON.parse(localStorage.getItem('goalisb_user')) : null);
            if (user && user.plan_tier) {
                return user.plan_tier.toUpperCase();
            }
            return 'FREE';
        },

        // Tier Permission Rules
        permissions: {
            // Free Tier: strictly 1 subject only (MATH)
            isSubjectUnlocked: function(subjectCode) {
                const tier = window.store.getEffectiveTier();
                if (tier === 'PRO' || tier === 'ENTERPRISE' || tier === 'INSTITUTIONAL') {
                    return true;
                }
                return subjectCode === 'MATH';
            },

            // Free Tier: strictly Chapter 1 only
            isChapterUnlocked: function(chapterId) {
                const tier = window.store.getEffectiveTier();
                if (tier === 'PRO' || tier === 'ENTERPRISE' || tier === 'INSTITUTIONAL') {
                    return true;
                }
                return Number(chapterId) === 1;
            },

            canAccessFullMocks: function() {
                const tier = window.store.getEffectiveTier();
                return tier === 'ENTERPRISE' || tier === 'INSTITUTIONAL';
            }
        }
    };
})();
