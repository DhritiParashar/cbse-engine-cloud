// js/core/voice_tutor.js
(function() {
    let isSpeaking = false;

    function cleanTextForSpeech(text) {
        if (!text) return "";
        return text
            .replace(/\\\((.*?)\\\)/g, "$1")
            .replace(/\\\[(.*?)\\\]/g, "$1")
            .replace(/\sqrt\{([^}]+)\}/g, "square root of $1")
            .replace(/\sqrt/g, "square root")
            .replace(/\frac\{([^}]+)\}\{([^}]+)\}/g, "$1 divided by $2")
            .replace(/\pm/g, "plus or minus")
            .replace(/\times/g, "multiplied by")
            .replace(/\div/g, "divided by")
            .replace(/\pi/g, "pi")
            .replace(/\theta/g, "theta")
            .replace(/\Delta/g, "delta")
            .replace(/x\^2|x²/g, "x squared")
            .replace(/x\^3|x³/g, "x cubed")
            .replace(/b\^2/g, "b squared")
            .replace(/4ac/g, "4 a c")
            .replace(/->|→/g, " yields ")
            .replace(/[\$\*#_`]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    window.toggleVoiceTutor = function() {
        if (!('speechSynthesis' in window)) {
            alert("Text-to-speech is not supported in this browser.");
            return;
        }

        const icon = document.getElementById('voiceTutorIcon');
        const text = document.getElementById('voiceTutorText');

        if (isSpeaking) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            if (icon) icon.innerText = "🔇";
            if (text) text.innerText = "Voice Tutor: Off";
            return;
        }

        const activeCh = window.store.getActiveChapter();
        let speechScript = activeCh 
            ? `Chapter: ${activeCh.name}. Weightage: ${activeCh.weight || 6} Marks. ${activeCh.desc || ''}`
            : "GOALisB CBSE Master Tutor Voice Engine active.";

        const cleanText = cleanTextForSpeech(speechScript);
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = 0.95;
        utterance.lang = 'en-US';

        utterance.onstart = () => {
            isSpeaking = true;
            if (icon) icon.innerText = "🔊";
            if (text) text.innerText = "Voice Tutor: Speaking";
        };
        utterance.onend = utterance.onerror = () => {
            isSpeaking = false;
            if (icon) icon.innerText = "🔇";
            if (text) text.innerText = "Voice Tutor: Off";
        };

        window.speechSynthesis.speak(utterance);
    };
})();
