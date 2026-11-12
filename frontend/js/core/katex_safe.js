window.safeRenderMath = function(elem) {
    if (!window.renderMathInElement || !elem) return;
    try {
        window.renderMathInElement(elem, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false },
                { left: "\\(", right: "\\)", display: false },
                { left: "\\[", right: "\\]", display: true }
            ],
            throwOnError: false,
            errorColor: '#f43f5e',
            strict: false
        });
    } catch (err) {
        console.warn("KaTeX suppressed error:", err.message);
    }
};
