// Declarative CBSE Curriculum Manifest (Classes 10, 11, 12)
window.curriculumManifest = {
    10: {
        label: "Class 10",
        subjects: {
            MATH: { label: "📐 Mathematics (041)",    name: "Mathematics",    script: "data/mathChapters.js",    globalKey: "mathChapterRegistry",    freeChapters: ["M10_CH01", "M10_CH02"], defaultChapter: "M10_CH04" },
            SCI:  { label: "🔬 Science (086)",        name: "Science",        script: "data/scienceChapters.js", globalKey: "scienceChapterRegistry", freeChapters: ["S10_CH01", "S10_CH02"], defaultChapter: "S10_CH01" },
            SST:  { label: "🌍 Social Science (087)", name: "Social Science", script: "data/sstChapters.js",     globalKey: "sstChapterRegistry",     freeChapters: ["SST10_H01", "SST10_G01"], defaultChapter: "SST10_H01" }
        }
    },
    11: {
        label: "Class 11",
        subjects: {
            MATH: { label: "📐 Class 11 Math (041)",      name: "Mathematics", script: "data/class11MathChapters.js",      globalKey: "class11MathChapterRegistry",      freeCount: 2 },
            SCI:  { label: "⚛️ Class 11 Physics (042)",   name: "Physics",     script: "data/class11PhysicsChapters.js",   globalKey: "class11PhysicsChapterRegistry",   freeCount: 2 },
            SST:  { label: "🧪 Class 11 Chemistry (043)", name: "Chemistry",   script: "data/class11ChemistryChapters.js", globalKey: "class11ChemistryChapterRegistry", freeCount: 2 },
            BIO:  { label: "🧬 Class 11 Biology (044)",   name: "Biology",     script: "data/class11BiologyChapters.js",   globalKey: "class11BiologyChapterRegistry",   freeCount: 2 }
        }
    },
    12: {
        label: "Class 12",
        subjects: {
            MATH: { label: "📐 Class 12 Math (041)",      name: "Mathematics", script: "data/class12MathChapters.js",      globalKey: "class12MathChapterRegistry",      freeCount: 2 },
            SCI:  { label: "⚛️ Class 12 Physics (042)",   name: "Physics",     script: "data/class12PhysicsChapters.js",   globalKey: "class12PhysicsChapterRegistry",   freeCount: 2 },
            SST:  { label: "🧪 Class 12 Chemistry (043)", name: "Chemistry",   script: "data/class12ChemistryChapters.js", globalKey: "class12ChemistryChapterRegistry", freeCount: 2 },
            BIO:  { label: "🧬 Class 12 Biology (044)",   name: "Biology",     script: "data/class12BiologyChapters.js",   globalKey: "class12BiologyChapterRegistry",   freeCount: 2 }
        }
    }
};
