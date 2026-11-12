// data/class11BiologyChapters.js - Exhaustive NCERT Class 11 Biology (044) All 19 Chapters
(function() {
  function buildFullBioChapter(cfg) {
    const nums12 = Array.from({ length: 12 }, (_, i) => i === 0 ? cfg.prob1 : [
      `${cfg.name}: Board Case / Problem #${i + 1}`, (i % 3 === 0 ? 5 : (i % 2 === 0 ? 3 : 2)),
      `Apply ${cfg.matrices[i % 2][0]} in ${cfg.name} (Case ${i + 1}) to analyze biological structure, pathway, or physiological outcome under NCERT guidelines.`,
      [`Identify core NCERT principle: ${cfg.matrices[i % 2][1].replace(/<br>/g, '; ')}.`, `Enforce critical CBSE distinction: ${cfg.tip}`, `Conclude with exact NCERT terminology and diagram/pathway labels.`]
    ]);

    const ders12 = Array.from({ length: 12 }, (_, i) => i === 0 ? cfg.mech1 : [
      `${cfg.name}: Board Mechanism / Pathway #${i + 1}`, (i % 2 === 0 ? "5-Mark Pathway & Diagram" : "3-Mark Reasoning"),
      `Explain the complete physiological/cellular mechanism #${i + 1} in ${cfg.name}.`,
      [`Define anatomical site, enzymes/hormones, and cellular components in ${cfg.name}.`, `Trace step-by-step sequence: ${cfg.matrices[i % 2][1].replace(/<br>/g, '; ')}.`, `State biological significance and NCERT board exam keywords.`],
      `Verified NCERT mechanism for ${cfg.name}.`
    ]);

    const chals12 = Array.from({ length: 12 }, (_, i) => ({
      title: `${cfg.name}: Step-Fault Challenge #${i + 1}`,
      steps: [
        { stepNo: 1, text: `Analyze ${cfg.name} scenario #${i + 1} using NCERT reference standards.` },
        { stepNo: 2, text: `Applied rule while ignoring key NCERT distinction: ${cfg.tip}` },
        { stepNo: 3, text: `State final biological conclusion.` }
      ],
      faultyStep: 2,
      deductionReason: `In Step 2: ${cfg.tip}`
    }));

    const diags = cfg.diagnostics || [];
    const m1 = Array.from({ length: 5 }, (_, i) => {
      const d = diags[i % Math.max(1, diags.length)];
      const opts = d.options || [];
      const optStr = opts.length >= 4 ? `\n(A) ${opts[0]}  (B) ${opts[1]}  (C) ${opts[2]}  (D) ${opts[3]}` : '';
      const ans = `Correct Option: (${String.fromCharCode(65 + (d.correct || 0))}) ${opts[d.correct || 0]}\n${d.solution || ''}`;
      return { marks: 1, title: `${cfg.name} MCQ #${i + 1}`, text: `${d.q}${optStr}`, idealAnswer: ans, flawedAnswer: "Selected distractor without verifying NCERT classification/pathway rule.", rubric: [{ step: ans, marks: 1.0 }] };
    });
    const m2 = Array.from({ length: 5 }, (_, i) => {
      const ex = nums12[i % nums12.length];
      return { marks: 2, title: `${ex[0]} (Short Answer)`, text: ex[2], idealAnswer: ex[3].join('\n'), flawedAnswer: "Omitted key NCERT scientific terms.", rubric: [{ step: "State NCERT definition/principle", marks: 1.0 }, { step: ex[3].join(' '), marks: 1.0 }] };
    });
    const m3 = Array.from({ length: 5 }, (_, i) => {
      const ex = nums12[(i + 5) % nums12.length];
      return { marks: 3, title: ex[0], text: ex[2], idealAnswer: ex[3].join('\n'), flawedAnswer: "Incomplete stepwise pathway.", rubric: ex[3].map(s => ({ step: s, marks: Number((3 / ex[3].length).toFixed(2)) })) };
    });
    const m5 = Array.from({ length: 5 }, (_, i) => {
      const der = ders12[i % ders12.length];
      return { marks: 5, title: `${der[0]} (5M Long Answer)`, text: `Explain in detail: ${der[0]}. Context: ${der[2]}`, idealAnswer: `${der[3].join('\n')}\n${der[4]}`, flawedAnswer: "Wrote summary without stepwise mechanism and NCERT terms.", rubric: [{ step: der[2], marks: 1.5 }, { step: der[3].join(' '), marks: 2.5 }, { step: der[4], marks: 1.0 }] };
    });

    return {
      code: cfg.code, name: cfg.name, weight: cfg.weight, desc: cfg.desc,
      overview: `<div class="space-y-6">
        <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
          <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Biology Intuition</span>
          <h3 class="text-xl font-black text-white">${cfg.iTitle}</h3>
          <p class="text-xs text-slate-300 leading-relaxed">${cfg.iBody}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          ${cfg.concepts.map(([title, body]) => `
            <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
              <span class="text-indigo-400 font-bold block text-sm">${title}</span>
              <p class="text-slate-300 leading-relaxed">${body}</p>
            </div>`).join('')}
        </div>
      </div>`,
      exp1: `<div class="space-y-5 text-xs text-slate-300">
        <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
          <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">${cfg.name} — Core NCERT Matrices, Pathways &amp; Ratios</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-white text-[11px] pt-1">
            ${cfg.matrices.map(([head, body]) => `
              <div class="p-3.5 bg-surface rounded-lg border border-slate-800 space-y-1">
                <span class="text-indigo-300 font-sans font-bold block text-xs">${head}:</span>
                <div>${body}</div>
              </div>`).join('')}
          </div>
        </div>
        ${nums12.map((ex, idx) => `
          <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-2.5">
            <div class="flex items-center justify-between gap-2">
              <span class="text-indigo-400 font-bold text-sm">WORKED PROBLEM ${idx + 1}: ${ex[0]}</span>
              <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px] shrink-0">${ex[1]} Marks</span>
            </div>
            <p class="text-slate-200"><strong>Problem:</strong> ${ex[2]}</p>
            <div class="p-3.5 bg-background rounded-lg border border-slate-800 space-y-1.5 text-slate-300 leading-relaxed">
              ${ex[3].map((st, sIdx) => `<p><strong class="text-emerald-400">Step ${sIdx + 1}:</strong> ${st}</p>`).join('')}
            </div>
          </div>`).join('')}
      </div>`,
      exp2: `<div class="space-y-5 text-xs text-slate-300">` + ders12.map((pf, idx) => `
        <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
          <div class="border-b border-slate-700 pb-2.5 flex items-center justify-between gap-2">
            <h3 class="font-black text-white text-sm">MECHANISM / PATHWAY ${idx + 1}: ${pf[0]}</h3>
            <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px] shrink-0">${pf[1]}</span>
          </div>
          <p class="text-slate-300"><strong>Biological Context:</strong> ${pf[2]}</p>
          <div class="space-y-1.5 leading-relaxed font-mono text-[11px] bg-background p-4 rounded-lg border border-slate-800">
            ${pf[3].map((st, sIdx) => `<p>${sIdx + 1}. ${st}</p>`).join('')}
            <p class="text-emerald-400 font-bold font-sans pt-1">${pf[4]}</p>
          </div>
        </div>`).join('') + `</div>`,
      vernacular: { English: cfg.tip },
      errorFinder: {
        traps: [{ title: `${cfg.name}: CBSE Examiner Trap`, severity: "High (1-2 Marks Lost)", explanation: cfg.tip }],
        challenges: chals12
      },
      diagnostics: diags,
      marksBank: [...m1, ...m2, ...m3, ...m5]
    };
  }

  const chaptersData = [
    { key: "B11_CH01", code: "Chapter 01", name: "The Living World", weight: 2,
      desc: "Characteristics of living organisms, biodiversity, ICBN/ICZN binomial nomenclature rules, and taxonomic hierarchy.",
      iTitle: "Binomial Nomenclature & Nested Taxonomic Hierarchy",
      iBody: "Carolus Linnaeus standardized universal scientific naming (Genus + specific epithet) while nesting organisms into 7 obligate ranks from Kingdom down to Species.",
      concepts: [
        ["1. Defining Features of Life", "Metabolism and cellular organization are defining features without exception; growth and reproduction have exceptions (mules, worker bees)."],
        ["2. ICBN / ICZN Binomial Rules", "Genus capitalized, species lowercase; italicized in print or underlined separately when handwritten (e.g., <i>Mangifera indica</i> Linn.)."],
        ["3. Taxonomic Hierarchy", "Kingdom → Phylum/Division → Class → Order → Family → Genus → Species (shared characters increase going down)."]
      ],
      matrices: [
        ["Taxonomic Rank Suffixes (Plants)", "Division: -phyta | Class: -opsida | Order: -ales | Family: -aceae"],
        ["Human vs Mango Classification", "Human: <i>Homo sapiens</i> (Hominidae, Primata)<br>Mango: <i>Mangifera indica</i> (Anacardiaceae, Sapindales)"]
      ],
      prob1: ["Correcting Scientific Name Formatting Errors", 2, "Identify and correct three formatting errors in 'mangifera Indica linn.'.", ["1. Capitalize Genus initial: <i>Mangifera</i>; 2. Lowercase specific epithet: <i>indica</i>; 3. Italicize both Latinized words (or underline separately) while keeping author abbreviation 'Linn.' in Roman script."]],
      mech1: ["Why Metabolism Is a Defining Property of Living Systems", "3-Mark Reasoning", "Compare metabolic reactions in living cells vs cell-free in-vitro systems.", ["Sum total of all anabolic and catabolic chemical reactions inside cells is exclusive to living organisms; isolated in-vitro reactions are living reactions, not living things."], "Cellular organization + metabolism define life unambiguously."],
      tip: "In handwritten binomial names, underline Genus and species SEPARATELY (not a single continuous line), and never italicize the author's abbreviated name (Linn.)!",
      diagnostics: [
        { q: "Which pair represents defining properties of all living organisms without exception?", difficulty: "Board Standard (1M)", options: ["Metabolism and cellular organization", "Growth and reproduction", "Reproduction and locomotion", "Consciousness and growth"], correct: 0, solution: "Sterile mules and worker bees do not reproduce, whereas metabolism and cellular structure have zero exceptions." },
        { q: "As we go higher from Species to Kingdom in taxonomic hierarchy, the number of common characteristics:", difficulty: "Hierarchy Rule (1M)", options: ["Decreases", "Increases", "Remains constant", "First increases then decreases"], correct: 0, solution: "Species shares maximum specific traits; Kingdom shares fewest broad traits." }
      ]
    },
    { key: "B11_CH02", code: "Chapter 02", name: "Biological Classification", weight: 3,
      desc: "Whittaker's Five-Kingdom classification, Monera (archaebacteria & eubacteria), Protista, Fungi classes, viruses, viroids & lichens.",
      iTitle: "Five-Kingdom Cellular Organization & Fungal Dikaryophase",
      iBody: "R.H. Whittaker classified organisms by cell structure (prokaryote vs eukaryote), thallus organization, nutrition mode, and phylogeny into Monera, Protista, Fungi, Plantae, and Animalia.",
      concepts: [
        ["1. Kingdom Monera & Archaebacteria", "Prokaryotic, non-cellulosic peptidoglycan wall; methanogens live in ruminant guts producing biogas; cyanobacteria (<i>Nostoc</i>) fix $N_2$ in heterocysts."],
        ["2. Kingdom Protista", "Single-celled eukaryotes: Diatoms (indestructible silica shells forming diatomaceous earth), Dinoflagellates (red tides), Euglenoids (mixotrophic)."],
        ["3. Kingdom Fungi Classes", "Phycomycetes (coenocytic aseptate), Ascomycetes (sac fungi, dikaryon), Basidiomycetes (club fungi, dikaryon), Deuteromycetes (imperfect fungi)."]
      ],
      matrices: [
        ["Five-Kingdom Cell Wall & Nutrition", "Monera: Peptidoglycan | Fungi: Chitin | Plantae: Cellulose | Animalia: Absent"],
        ["Acellular Infectious Agents", "Viruses: Nucleoprotein (TMV: ssRNA)<br>Viroids (Diener): Free low-MW RNA without protein coat<br>Prions: Misfolded infectious proteins (BSE)"]
      ],
      prob1: ["Distinguishing Viruses, Viroids, Prions & Lichens", 3, "Compare viruses, viroids, prions, and lichens on structural composition.", ["Viruses have nucleic acid + protein capsid; Viroids have free infectious RNA without capsid; Prions are abnormally folded proteins; Lichens are symbiotic phycobiont (algae) + mycobiont (fungus)."]],
      mech1: ["Sexual Cycle in Ascomycetes & Basidiomycetes (Dikaryophase)", "3-Mark Cycle", "Plasmogamy $\\to$ Dikaryon ($n + n$) $\\to$ Karyogamy ($2n$) $\\to$ Meiosis ($n$).", ["Unlike immediate nuclear fusion in lower fungi, Ascomycetes and Basidiomycetes exhibit an intervening dikaryotic stage ($n + n$ two nuclei per cell) before karyogamy."], "Produces endogenous ascospores (8) or exogenous basidiospores (4)."],
      tip: "Viroids (discovered by T.O. Diener) consist ONLY of free low-molecular-weight RNA with NO protein coat!",
      diagnostics: [
        { q: "Infectious agents smaller than viruses that consist solely of free RNA without a protein coat are:", difficulty: "Board Standard (1M)", options: ["Viroids", "Prions", "Bacteriophages", "Mycoplasma"], correct: 0, solution: "T.O. Diener discovered viroids causing potato spindle tuber disease." },
        { q: "Which group of fungi lacks sexual reproduction and is known as 'fungi imperfecti'?", difficulty: "Fungi Class (1M)", options: ["Deuteromycetes", "Ascomycetes", "Basidiomycetes", "Phycomycetes"], correct: 0, solution: "Only asexual/vegetative phases are known in Deuteromycetes (<i>Alternaria, Colletotrichum, Trichoderma</i>)." }
      ]
    },
    { key: "B11_CH03", code: "Chapter 03", name: "Plant Kingdom", weight: 3,
      desc: "Algae (Chlorophyceae, Phaeophyceae, Rhodophyceae), Bryophytes, Pteridophytes, Gymnosperms, and haplontic/diplontic life cycles.",
      iTitle: "Evolution of Plant Vascular Tissue & Dominant Generation Shift",
      iBody: "Across plant evolution, the dominant photosynthetic body shifts from haploid gametophyte (Algae, Bryophytes) to independent diploid sporophyte (Pteridophytes, Gymnosperms, Angiosperms).",
      concepts: [
        ["1. Three Algal Classes", "Chlorophyceae (chl a,b; starch), Phaeophyceae (chl a,c + fucoxanthin; mannitol/laminarin), Rhodophyceae (chl a,d + phycoerythrin; floridean starch; no flagella)."],
        ["2. Bryophytes (Amphibians of Plant Kingdom)", "Lack true roots/stems/leaves and vascular xylem/phloem; require water for antherozoid swimming; dominant haploid gametophyte."],
        ["3. Heterospory & Seed Habit Precursor", "<i>Selaginella</i> and <i>Salvinia</i> produce microspores and megaspores; female gametophyte retained on parent sporophyte foreshadows seed habit."]
      ],
      matrices: [
        ["Algal Pigments & Stored Food", "Green: Chl a,b (Starch) | Brown: Chl a,c, Fucoxanthin (Laminarin) | Red: Chl a,d, Phycoerythrin (Floridean starch)"],
        ["Dominant Plant Generation", "Bryophytes: Gametophyte ($n$)<br>Pteridophytes &amp; Gymnosperms: Sporophyte ($2n$)"]
      ],
      prob1: ["Comparing Bryophytes vs Pteridophytes", 3, "State three key structural differences between Bryophytes and Pteridophytes.", ["1. Dominant phase: gametophyte ($n$) in bryophytes vs sporophyte ($2n$) in pteridophytes; 2. Vascular tissues (xylem/phloem) absent in bryophytes, present in pteridophytes; 3. True roots/stems/leaves absent in bryophytes, present in pteridophytes."]],
      mech1: ["Heterospory in Pteridophytes as Precursor to Seed Habit", "3-Mark Evolution", "Analyze <i>Selaginella</i> and <i>Salvinia</i> spore differentiation.", ["Production of two spore sizes (small microspores $\\to$ male gametophyte; large megaspores $\\to$ female gametophyte) with retention of female gametophyte on parent sporophyte for zygote development led to seed evolution."], "Key evolutionary milestone toward gymnosperms."],
      tip: "Rhodophyceae (Red Algae) completely lack flagellated motile stages in their entire life cycle!",
      diagnostics: [
        { q: "Which algal class stores food as floridean starch and completely lacks flagellated motile gametes?", difficulty: "Board Standard (1M)", options: ["Rhodophyceae", "Chlorophyceae", "Phaeophyceae", "Cyanophyceae"], correct: 0, solution: "Red algae (Rhodophyceae) store floridean starch and lack flagella." },
        { q: "Heterospory is exhibited by which pair of pteridophytes?", difficulty: "NCERT Example (1M)", options: ["<i>Selaginella</i> and <i>Salvinia</i>", "<i>Equisetum</i> and <i>Dryopteris</i>", "<i>Psilotum</i> and <i>Lycopodium</i>", "<i>Funaria</i> and <i>Marchantia</i>"], correct: 0, solution: "<i>Selaginella</i> and <i>Salvinia</i> are heterosporous pteridophytes." }
      ]
    },
    { key: "B11_CH04", code: "Chapter 04", name: "Animal Kingdom", weight: 4,
      desc: "Levels of organization, symmetry, coelom types, non-chordate phyla (Porifera to Hemichordata), and Chordata classes.",
      iTitle: "Body Plan Symmetry, Coelom Cavities & Chordate Diagnostic Triad",
      iBody: "Animal phyla build complexity through tissue/organ grades, bilateral symmetry, true mesoderm-lined coelom, segmentation, and the chordate triad (notochord, dorsal hollow nerve cord, pharyngeal gill slits).",
      concepts: [
        ["1. Coelom Classification", "Acoelomate (Platyhelminthes), Pseudocoelomate (Aschelminthes — scattered mesoderm pouches), Eucoelomate (Annelida to Chordata)."],
        ["2. Unique Phylum Hallmarks", "Porifera (choanocytes & water canal system), Cnidaria (cnidoblasts & metagenesis in <i>Obelia</i>), Echinodermata (water vascular system, adult radial symmetry), Arthropoda (chitinous exoskeleton, jointed appendages)."],
        ["3. Chordata vs Non-Chordata", "Chordates have notochord, dorsal hollow single CNS, ventral heart, and post-anal tail."]
      ],
      matrices: [
        ["Phylum Diagnostic Structures", "Porifera: Choanocytes | Ctenophora: Comb plates | Platyhelminthes: Flame cells | Annelida: Nephridia | Arthropoda: Malpighian tubules"],
        ["Cyclostomata, Chondrichthyes & Osteichthyes", "Chondrichthyes: Cartilaginous, placoid scales, no operculum/air bladder<br>Osteichthyes: Bony, cycloid scales, operculum + air bladder"]
      ],
      prob1: ["Distinguishing Chondrichthyes (Cartilaginous) vs Osteichthyes (Bony Fishes)", 3, "Compare Chondrichthyes and Osteichthyes across four anatomical features.", ["1. Endoskeleton: cartilaginous vs bony; 2. Gill slits: uncovered (no operculum) vs 4 pairs covered by operculum; 3. Scales: placoid vs cycloid/ctenoid; 4. Air bladder: absent (must swim continuously) vs present for buoyancy."]],
      mech1: ["Three Fundamental Chordate Characters & Subphyla Fate", "3-Mark Classification", "Trace notochord across Urochordata, Cephalochordata, and Vertebrata.", ["Urochordata (<i>Ascidia</i>): notochord only in larval tail; Cephalochordata (<i>Branchiostoma</i>): head-to-tail persistent throughout life; Vertebrata: replaced by cartilaginous/bony vertebral column in adults."], "All vertebrates are chordates, but not all chordates are vertebrates."],
      tip: "Echinoderms (e.g., Starfish) have BILATERAL symmetry as larvae, but RADIAL symmetry as adults!",
      diagnostics: [
        { q: "Pseudocoelom (body cavity not lined by mesoderm, occurring as scattered pouches) is characteristic of:", difficulty: "Board Standard (1M)", options: ["Aschelminthes", "Platyhelminthes", "Annelida", "Mollusca"], correct: 0, solution: "Roundworms (Aschelminthes) are pseudocoelomates." },
        { q: "Water vascular system aiding locomotion, capture of food, and respiration is found in:", difficulty: "Phylum Hallmark (1M)", options: ["Echinodermata", "Porifera", "Cnidaria", "Mollusca"], correct: 0, solution: "Echinoderms possess water vascular system; sponges (Porifera) have water canal system." }
      ]
    },
    { key: "B11_CH05", code: "Chapter 05", name: "Morphology of Flowering Plants", weight: 3,
      desc: "Root/stem/leaf modifications, phyllotaxy, racemose vs cymose inflorescence, floral symmetry, aestivation, placentation, and Solanaceae.",
      iTitle: "Floral Symmetry, Ovary Position & Placentation Architecture",
      iBody: "Angiosperm flowers are modified shoots organized into four whorls (calyx, corolla, androecium, gynoecium) encoded concisely in floral formulas and floral diagrams.",
      concepts: [
        ["1. Hypogynous, Perigynous & Epigynous Flowers", "Hypogynous (superior ovary: mustard, brinjal), Perigynous (half-inferior: plum, rose, peach), Epigynous (inferior ovary: guava, cucumber, ray florets of sunflower)."],
        ["2. Four Aestivation Patterns", "Valvate (<i>Calotropis</i>), Twisted (china rose, lady's finger, cotton), Imbricate (<i>Cassia</i>, gulmohar), Vexillary/Papilionaceous (pea, bean — standard + 2 wings + 2 keels)."],
        ["3. Five Placentation Types", "Marginal (pea), Axile (china rose, tomato, lemon), Parietal (mustard, <i>Argemone</i>), Free central (<i>Dianthus</i>, primrose), Basal (sunflower, marigold)."]
      ],
      matrices: [
        ["Ovary Position Examples", "Superior: Mustard, China rose, Brinjal<br>Half-inferior: Plum, Rose, Peach<br>Inferior: Guava, Cucumber, Sunflower ray florets"],
        ["Placentation Examples", "Marginal: Pea | Axile: Tomato, Lemon | Parietal: Mustard | Free Central: Dianthus | Basal: Sunflower"]
      ],
      prob1: ["Decoding Floral Formula of Family Solanaceae", 3, "Write and interpret the floral formula of Family Solanaceae (e.g., Petunia / Makoi).", ["$\\oplus \\; \\text{bisexual} \\; K_{(5)} \\; \\widehat{C_{(5)} A_5} \\; \\underline{G}_{(2)}$: Actinomorphic, bisexual, 5 fused sepals, 5 fused petals epipetalous with 5 stamens, bicarpellary syncarpous superior ovary with oblique septum and axile placentation."]],
      mech1: ["Racemose vs Cymose Inflorescence Growth Pattern", "3-Mark Morphology", "Compare floral axis termination and flower opening order.", ["Racemose: main axis grows indefinitely, flowers borne laterally in **acropetal** succession (oldest at base, youngest at apex). Cymose: main axis terminates in a flower (definite growth), flowers in **basipetal** order."], "Determines architectural arrangement of blossoms."],
      tip: "In Vexillary aestivation (pea/bean), 1 large posterior Standard overlaps 2 lateral Wings, which overlap 2 fused anterior Keel petals!",
      diagnostics: [
        { q: "An inferior ovary (epigynous flower) is found in:", difficulty: "Board Standard (1M)", options: ["Guava and cucumber", "Mustard and brinjal", "Plum and rose", "China rose and pea"], correct: 0, solution: "In guava, cucumber, and ray florets of sunflower, thalamus encloses the ovary completely." },
        { q: "Free-central placentation (ovules borne on central axis without septa) occurs in:", difficulty: "Placentation Match (1M)", options: ["<i>Dianthus</i> and Primrose", "Pea and Bean", "Mustard and <i>Argemone</i>", "Sunflower and Marigold"], correct: 0, solution: "<i>Dianthus</i> and Primrose exhibit free-central placentation." }
      ]
    },
    { key: "B11_CH06", code: "Chapter 06", name: "Anatomy of Flowering Plants", weight: 3,
      desc: "Tissue systems (epidermal, ground, vascular), conjoint/radial bundles, dicot vs monocot root, stem, and dorsiventral vs isobilateral leaf.",
      iTitle: "Vascular Bundle Architecture & Dicot vs Monocot Internal Anatomy",
      iBody: "Plant organs organize into epidermal, ground, and vascular systems; presence of intrafascicular cambium ('open' vascular bundles) enables secondary growth in dicot stems and roots.",
      concepts: [
        ["1. Vascular Bundle Types", "Radial (xylem & phloem on alternate radii — roots); Conjoint Closed (no cambium — monocot stem); Conjoint Open (cambium present — dicot stem)."],
        ["2. Dicot vs Monocot Root", "Dicot root: 2–4 xylem patches (diarch to tetrarch), small pith, secondary growth present. Monocot root: polyarch ($> 6$ xylem bundles), large well-developed pith, no secondary growth."],
        ["3. Dicot vs Monocot Leaf", "Dorsiventral (dicot): differentiated palisade & spongy mesophyll, stomata mainly abaxial. Isobilateral (monocot): undifferentiated mesophyll, equal stomata both sides, bulliform cells curl leaf to reduce transpiration."]
      ],
      matrices: [
        ["Dicot Stem vs Monocot Stem", "Dicot Stem: Ring of open conjoint bundles, cortex/pith distinct<br>Monocot Stem: Scattered closed bundles, sclerenchymatous bundle sheath, water-containing cavities"],
        ["Endarch vs Exarch Protoxylem", "Stems: Endarch (protoxylem toward center/pith)<br>Roots: Exarch (protoxylem toward periphery/pericycle)"]
      ],
      prob1: ["Identifying Transverse Sections of Dicot vs Monocot Stem", 3, "List four anatomical features to distinguish a dicot stem TS from a monocot stem TS.", ["1. Bundles arranged in a ring vs scattered; 2. Open bundles (cambium present) vs closed bundles (cambium absent); 3. Parenchymatous ground tissue differentiated into cortex/pericycle/pith vs undifferentiated ground tissue; 4. Water-containing cavities absent vs present."]],
      mech1: ["Role of Casparian Strips in Root Endodermis", "3-Mark Physiology-Anatomy", "Suberin deposition on tangential and radial walls of endodermal cells.", ["Blocks apoplastic water movement across endodermis, forcing water and minerals through selective symplastic plasma membranes into vascular stele."], "Acts as biological checkpoint regulating mineral entry."],
      tip: "Protoxylem is ENDARCH (toward center) in stems, whereas it is EXARCH (toward periphery) in roots!",
      diagnostics: [
        { q: "Conjoint, collateral, and closed vascular bundles scattered in ground tissue characterize:", difficulty: "Board Standard (1M)", options: ["Monocot stem", "Dicot stem", "Dicot root", "Monocot root"], correct: 0, solution: "Monocot stems lack cambium (closed) and have scattered vascular bundles." },
        { q: "Large, empty, colorless adaxial epidermal cells in grasses that curl leaves inward during water stress are:", difficulty: "Leaf Anatomy (1M)", options: ["Bulliform cells", "Guard cells", "Subsidiary cells", "Companion cells"], correct: 0, solution: "Bulliform cells lose turgor during water stress to curl leaves and minimize transpiration." }
      ]
    },
    { key: "B11_CH07", code: "Chapter 07", name: "Structural Organisation in Animals", weight: 2,
      desc: "Animal tissues (epithelial, connective, muscular, neural) and detailed morphology & anatomy of Frog (Rana tigrina).",
      iTitle: "Four Animal Tissue Types & Amphibian Organ Systems (Frog)",
      iBody: "Specialized epithelial, connective, muscular, and neural tissues integrate into organ systems; <i>Rana tigrina</i> exemplifies poikilothermic amphibian adaptations including cutaneous/pulmonary respiration and 3-chambered heart.",
      concepts: [
        ["1. Epithelial & Connective Tissues", "Squamous (diffusion — alveoli/capillaries), Ciliated (bronchioles/fallopian tubes), Dense regular connective (tendons: muscle-to-bone; ligaments: bone-to-bone)."],
        ["2. Frog Respiration & Circulation", "Cutaneous respiration in water & hibernation; buccal + pulmonary respiration on land; 3-chambered heart (2 atria + 1 ventricle) with sinus venosus and conus arteriosus."],
        ["3. Frog Digestive & Reproductive Anatomy", "Alimentary canal is short (carnivorous); hepatic and renal portal systems present; male frog has vocal sacs, copulatory pad on 1st digit of forelimb, and vasa efferentia opening into Bidder's canal."]
      ],
      matrices: [
        ["Frog Male vs Female External Dimorphism", "Male: Vocal sacs + copulatory (nuptial) pad on 1st digit of forelimb<br>Female: Both vocal sacs and copulatory pads absent"],
        ["Frog Heart & Portal Systems", "Heart: 3-chambered (mixed oxygenated + deoxygenated blood in ventricle)<br>RBCs: Nucleated, oval, biconvex with haemoglobin"]
      ],
      prob1: ["Tracing Sperm Pathway in Male Frog Reproductive System", 3, "Trace the path of spermatozoa from testes to cloaca in male <i>Rana tigrina</i>.", ["Testes $\\to$ Vasa efferentia ($10\\text{–}12$) $\\to$ Kidneys $\\to$ Bidder's canal $\\to$ Urinogenital duct $\\to$ Cloaca $\\to$ Cloacal aperture."]],
      mech1: ["Three Modes of Respiration in Frog", "3-Mark Physiology", "Compare aquatic, hibernation, and terrestrial gas exchange.", ["In water and during aestivation/hibernation: dissolved $O_2$ diffuses across moist vascular skin (**cutaneous respiration**). On land: buccal cavity lining and lungs (**pulmonary respiration**) operate via positive-pressure buccal pumping."], "Skin stays moist via mucous glands."],
      tip: "In male frogs, the urinogenital duct carries BOTH urine and sperms, whereas in female frogs the ureters and oviducts open SEPARATELY into the cloaca!",
      diagnostics: [
        { q: "In male frogs, sperms travel from the testes through vasa efferentia directly into:", difficulty: "Frog Anatomy (1M)", options: ["Bidder's canal inside the kidney", "Cloaca directly", "Urinary bladder", "Oviduct"], correct: 0, solution: "Vasa efferentia enter kidneys and open into Bidder's canal, which communicates with the urinogenital duct." },
        { q: "Which connective tissue joins skeletal muscle to bone?", difficulty: "Tissue Check (1M)", options: ["Tendon (dense regular connective tissue)", "Ligament", "Areolar tissue", "Adipose tissue"], correct: 0, solution: "Tendons attach muscle to bone; ligaments attach bone to bone." }
      ]
    },
    { key: "B11_CH08", code: "Chapter 08", name: "Cell: The Unit of Life", weight: 5,
      desc: "Prokaryotic vs eukaryotic cells, fluid mosaic plasma membrane, endomembrane system (ER, Golgi, lysosomes, vacuoles), mitochondria, plastids, and chromosomes.",
      iTitle: "Fluid Mosaic Membrane & Endomembrane Organelle Trafficking",
      iBody: "Singer and Nicolson's Fluid Mosaic Model describes a phospholipid bilayer with lateral protein mobility; ER, Golgi, lysosomes, and vacuoles coordinate intracellular synthesis and packaging.",
      concepts: [
        ["1. Endomembrane System (4 Organelles)", "ER, Golgi apparatus, Lysosomes, and Vacuoles function together; Mitochondria, Chloroplasts, and Peroxisomes are NOT part of the endomembrane system."],
        ["2. Semi-Autonomous Organelles", "Mitochondria and Chloroplasts possess their own circular dsDNA, 70S ribosomes, and divide by fission (endosymbiotic origin)."],
        ["3. Chromosome Centromere Positions", "Metacentric (middle, equal arms), Sub-metacentric (slightly off-center), Acrocentric (close to one end), Telocentric (terminal centromere)."]
      ],
      matrices: [
        ["Ribosome Subunits (Prokaryote vs Eukaryote)", "Prokaryotes / Mitochondria / Chloroplasts: 70S (50S + 30S)<br>Eukaryotic Cytoplasm: 80S (60S + 40S)"],
        ["Plastid Types & Functions", "Chloroplast: Photosynthesis | Chromoplast: Carotenoids (color) | Leucoplast: Amyloplast (starch), Elaioplast (oils), Aleuroplast (proteins)"]
      ],
      prob1: ["Comparing Prokaryotic vs Eukaryotic Cell Organization", 3, "Compare prokaryotic and eukaryotic cells across nuclear membrane, ribosomes, and membrane-bound organelles.", ["Prokaryotes lack nuclear envelope (nucleoid), have 70S ribosomes and mesosomes, and lack membrane-bound organelles; Eukaryotes have double-membrane nucleus, 80S cytoplasmic ribosomes, and compartmentalized organelles."]],
      mech1: ["Protein Glycosylation & Packaging Through ER and Golgi Apparatus", "3-Mark Cell Biology", "Trace secretory protein flow from RER to plasma membrane.", ["Proteins synthesized on RER ribosomes enter ER lumen, bud off in transitional vesicles to fuse with *cis*-face of Golgi, undergo modification/glycosylation across cisternae, and exit from *trans*-face secretory vesicles."], "Golgi is the primary site of glycoprotein and glycolipid formation."],
      tip: "Mitochondria, Chloroplasts, and Peroxisomes are NOT part of the endomembrane system because their functions are not coordinated with ER/Golgi!",
      diagnostics: [
        { q: "Which organelle is NOT part of the eukaryotic endomembrane system?", difficulty: "Board Standard (1M)", options: ["Mitochondrion", "Endoplasmic reticulum", "Golgi complex", "Lysosome"], correct: 0, solution: "Endomembrane system comprises ER, Golgi, lysosomes, and vacuoles only." },
        { q: "A chromosome with its centromere situated close to one end, forming one extremely short and one very long arm, is:", difficulty: "Chromosome Type (1M)", options: ["Acrocentric", "Metacentric", "Sub-metacentric", "Telocentric"], correct: 0, solution: "Acrocentric chromosomes have a sub-terminal centromere." }
      ]
    },
    { key: "B11_CH09", code: "Chapter 09", name: "Biomolecules", weight: 5,
      desc: "Amino acids, zwitterions, protein structure (1° to 4°), polysaccharides, nucleic acids, enzyme activation energy, and Michaelis-Menten Km.",
      iTitle: "Macromolecular Linkages & Enzyme Activation Energy Lowering",
      iBody: "Proteins (peptide bonds), polysaccharides (glycosidic bonds), and nucleic acids (phosphodiester bonds) build cellular architecture; enzymes accelerate reactions by lowering activation energy $E_a$ without altering $\\Delta G$.",
      concepts: [
        ["1. Four Levels of Protein Structure", "1° (linear peptide sequence), 2° ($\\alpha$-helix & $\\beta$-pleated sheet via H-bonds), 3° (3D globular folding — essential for enzyme active site), 4° (multi-subunit e.g. Haemoglobin $2\\alpha + 2\\beta$)."],
        ["2. Polysaccharide Architecture", "Starch (helical amylose traps $I_2$ turning blue; amylopectin branched), Glycogen (highly branched animal store), Cellulose (linear $\\beta$-glucose, no helices, no $I_2$ color)."],
        ["3. Enzyme Kinetics ($V_{\\max}$ & $K_m$)", "$K_m$ is substrate concentration at $\\frac{1}{2}V_{\\max}$ (lower $K_m$ = higher enzyme affinity); competitive inhibitors (malonate on succinate dehydrogenase) raise apparent $K_m$ without changing $V_{\\max}$."]
      ],
      matrices: [
        ["Macromolecular Covalent Bonds", "Proteins: Peptide (-CO-NH-) | Polysaccharides: Glycosidic | Nucleic Acids: $3'\\text{–}5'$ Phosphodiester"],
        ["Six IUBMB Enzyme Classes", "1. Oxidoreductases 2. Transferases 3. Hydrolases 4. Lyases 5. Isomerases 6. Ligases"]
      ],
      prob1: ["Competitive Inhibition of Succinate Dehydrogenase by Malonate", 3, "Explain how malonate inhibits succinate dehydrogenase and its effect on $V_{\\max}$ and $K_m$.", ["Malonate closely resembles substrate succinate structurally and binds reversibly to the active site, raising apparent $K_m$; adding excess succinate outcompetes malonate, restoring original $V_{\\max}$."]],
      mech1: ["How Enzymes Accelerate Biochemical Reactions (Activation Energy Profile)", "3-Mark Catalysis", "Compare transition-state energy barrier with and without enzyme.", ["Enzyme forms transient ES complex that stabilizes the transition state and lowers activation energy $E_a$, allowing far more reactant molecules to cross the barrier per second while leaving net $\\Delta G$ unchanged."], "Enzymes alter rate, never equilibrium position."],
      tip: "Cellulose cannot trap iodine molecules (no blue color with I₂) because it consists of linear unbranched β-glucose chains without complex helices!",
      diagnostics: [
        { q: "Which polysaccharide does NOT give a blue color with iodine because it lacks complex helices?", difficulty: "Board Standard (1M)", options: ["Cellulose", "Amylose", "Starch", "Dextrin"], correct: 0, solution: "Cellulose is a linear polymer of $\\beta$-D-glucose without helical coils." },
        { q: "The Michaelis constant $K_m$ of an enzyme is defined as the substrate concentration at which reaction velocity reaches:", difficulty: "Enzyme Kinetics (1M)", options: ["$\\frac{1}{2} V_{\\max}$", "$V_{\\max}$", "$2 V_{\\max}$", "$\\frac{1}{4} V_{\\max}$"], correct: 0, solution: "$K_m = [S]$ when $v = V_{\\max}/2$." }
      ]
    },
    { key: "B11_CH10", code: "Chapter 10", name: "Cell Cycle and Cell Division", weight: 5,
      desc: "Interphase (G1, S, G2, G0), mitosis stages, meiosis I (prophase I substages, crossing over, reductional separation), and meiosis II.",
      iTitle: "DNA Replication (2C → 4C) & Meiotic Prophase I Recombination",
      iBody: "In S-phase, DNA amount doubles ($2C \\to 4C$) while chromosome number stays $2n$; Meiosis I halves chromosome number ($2n \\to n$) via homologous pairing and pachytene crossing over.",
      concepts: [
        ["1. Cell Cycle DNA (C) vs Chromosome (N) Accounting", "G1: $2n, 2C$; S-phase: $2n, 4C$ (centrioles also duplicate in animal cytoplasm); G2: $2n, 4C$; Mitotic daughter: $2n, 2C$; Meiosis I daughter: $n, 2C$; Meiosis II gamete: $n, 1C$."],
        ["2. Five Substages of Prophase I", "Leptotene (condensation) $\\to$ Zygotene (synapsis, synaptonemal complex, bivalents) $\\to$ Pachytene (crossing over via **recombinase**) $\\to$ Diplotene (desynapsis, X-shaped **chiasmata**) $\\to$ Diakinesis (terminalization)."],
        ["3. Anaphase I vs Anaphase II", "Anaphase I separates **homologous chromosomes** (centromeres do NOT split); Anaphase II splits centromeres and separates **sister chromatids**."]
      ],
      matrices: [
        ["Chromosome (N) & DNA (C) Tracker", "G1: $2n, 2C$ | G2: $2n, 4C$ | End of Meiosis I: $n, 2C$ | End of Meiosis II: $n, 1C$"],
        ["Prophase I Milestones", "Zygotene: Bivalent/Tetrad | Pachytene: Crossing over (Recombinase) | Diplotene: Chiasmata"]
      ],
      prob1: ["Tracking Chromosome Number and DNA Content Through Cell Cycle", 3, "A diploid cell has $2n = 16$ chromosomes and $2C = 20\\text{ pg}$ DNA in G1. State chromosome number and DNA content at (a) G2, (b) after Meiosis I, and (c) after Meiosis II.", ["(a) G2: $\\mathbf{16}$ chromosomes, $\\mathbf{40\\text{ pg}}$ DNA; (b) After Meiosis I: $\\mathbf{8}$ chromosomes, $\\mathbf{20\\text{ pg}}$ DNA; (c) After Meiosis II: $\\mathbf{8}$ chromosomes, $\\mathbf{10\\text{ pg}}$ DNA."]],
      mech1: ["Significance of Meiosis in Sexual Reproduction & Genetic Variation", "3-Mark Genetics Link", "Analyze chromosome number conservation and recombination.", ["1. Halves chromosome number ($2n \\to n$) so fertilization restores $2n$ across generations; 2. Pachytene crossing over + independent assortment generate novel genetic combinations driving evolution."], "Essential for sexually reproducing eukaryotes."],
      tip: "During S-phase, DNA content doubles (2C → 4C) while chromosome number stays CONSTANT (2n); centromeres split ONLY in Mitotic Anaphase and Meiotic Anaphase II (NOT Anaphase I)!",
      diagnostics: [
        { q: "Crossing over between non-sister chromatids of homologous chromosomes occurs during:", difficulty: "Board Standard (1M)", options: ["Pachytene", "Zygotene", "Diplotene", "Leptotene"], correct: 0, solution: "Pachytene features recombination nodules and enzyme recombinase." },
        { q: "If a meiocyte has $2n = 24$ chromosomes and $2C$ DNA in G1, the chromosome number and DNA content after Meiosis I will be:", difficulty: "Ploidy Tracker (1M)", options: ["$12$ chromosomes and $2C$ DNA", "$24$ chromosomes and $2C$ DNA", "$12$ chromosomes and $1C$ DNA", "$24$ chromosomes and $4C$ DNA"], correct: 0, solution: "Meiosis I reduces chromosome number ($24 \\to 12$) while sister chromatids remain joined ($4C \\to 2C$)." }
      ]
    },
    { key: "B11_CH11", code: "Chapter 11", name: "Photosynthesis in Higher Plants", weight: 4,
      desc: "Light reactions (Z-scheme, photolysis, cyclic vs non-cyclic photophosphorylation, chemiosmosis), Calvin cycle, C4 Hatch-Slack pathway, and photorespiration.",
      iTitle: "Z-Scheme Chemiosmotic ATP Synthesis & C4 Kranz RuBisCO Concentrator",
      iBody: "Light energy drives electron flow from $H_2O$ through PS II and PS I to $NADP^+$, building a thylakoid lumen proton gradient for ATP synthase; C4 plants use Kranz anatomy to prevent RuBisCO oxygenation.",
      concepts: [
        ["1. Non-Cyclic vs Cyclic Photophosphorylation", "Non-cyclic (grana thylakoids): involves PS II (P680) + PS I (P700), splits $H_2O$ (evolves $O_2$), produces **ATP + NADPH**. Cyclic (stroma lamellae): PS I only, produces **ATP only** (no $O_2$, no NADPH)."],
        ["2. Calvin Cycle ($C_3$) Stoichiometry", "Fixing $1\\text{ CO}_2$ takes **3 ATP + 2 NADPH**; fixing $1\\text{ glucose}$ ($6\\text{ CO}_2$) takes **18 ATP + 12 NADPH**."],
        ["3. $C_4$ Hatch-Slack Kranz Anatomy", "Mesophyll PEPcase fixes $CO_2$ into 4C OAA $\\to$ malate $\\to$ bundle sheath cells decarboxylate malate to concentrate $CO_2$ around RuBisCO, eliminating wasteful photorespiration."]
      ],
      matrices: [
        ["ATP & NADPH Cost per Glucose ($6\\text{ CO}_2$)", "$C_3$ Plants: $18\\text{ ATP} + 12\\text{ NADPH}$<br>$C_4$ Plants: $30\\text{ ATP} + 12\\text{ NADPH}$ (extra 12 ATP for PEP regeneration)"],
        ["$C_3$ vs $C_4$ Pathway Comparison", "Primary Acceptor: RuBP (5C) in $C_3$ vs PEP (3C) in $C_4$<br>Photorespiration: High in $C_3$ vs Negligible in $C_4$"]
      ],
      prob1: ["Calculating ATP & NADPH Required for 1 Glucose in C3 vs C4 Plants", 3, "Compare total ATP and NADPH consumed to synthesize 1 molecule of glucose in $C_3$ vs $C_4$ plants.", ["$C_3$: $6 \\times (3\\text{ ATP} + 2\\text{ NADPH}) = \\mathbf{18\\text{ ATP} + 12\\text{ NADPH}}$. $C_4$: requires 2 extra ATP per $CO_2$ to regenerate PEP $= \\mathbf{30\\text{ ATP} + 12\\text{ NADPH}}$."]],
      mech1: ["Chemiosmotic Hypothesis of ATP Synthesis in Chloroplasts", "5-Mark Core Mechanism", "Explain proton accumulation inside thylakoid lumen.", ["1. Water splitting on inner lumen side releases $H^+$; 2. Plastoquinone transfers $H^+$ from stroma into lumen; 3. NADP reductase removes stroma $H^+$. High lumen $[H^+]$ drives protons through $CF_0\\text{–}CF_1$ ATP synthase into stroma, synthesizing ATP."], "Driven by proton motive force across thylakoid membrane."],
      tip: "Stroma lamellae lack BOTH PS II and NADP reductase, so they perform ONLY cyclic photophosphorylation (producing ATP without O₂ or NADPH)!",
      diagnostics: [
        { q: "The primary $CO_2$ acceptor in $C_4$ plants (such as maize and sorghum) is:", difficulty: "Board Standard (1M)", options: ["Phosphoenolpyruvate (PEP, 3C)", "Ribulose-1,5-bisphosphate (RuBP, 5C)", "Oxaloacetic acid (OAA, 4C)", "3-Phosphoglyceric acid (3-PGA)"], correct: 0, solution: "PEP carboxylase in mesophyll cells fixes $CO_2$ with 3-carbon PEP to form 4-carbon OAA." },
        { q: "Synthesis of one molecule of glucose via the Calvin cycle in a $C_3$ plant requires:", difficulty: "Stoichiometry Check (1M)", options: ["18 ATP and 12 NADPH", "12 ATP and 18 NADPH", "30 ATP and 12 NADPH", "6 ATP and 6 NADPH"], correct: 0, solution: "3 ATP and 2 NADPH per $CO_2 \\times 6\\text{ CO}_2 = 18\\text{ ATP} + 12\\text{ NADPH}$." }
      ]
    },
    { key: "B11_CH12", code: "Chapter 12", name: "Respiration in Plants", weight: 4,
      desc: "Glycolysis (EMP pathway), pyruvate oxidative decarboxylation, Krebs TCA cycle, mitochondrial ETS, oxidative phosphorylation, and RQ.",
      iTitle: "Amphibolic Krebs Cycle & Mitochondrial Oxidative Phosphorylation",
      iBody: "Glucose oxidizes via cytoplasmic glycolysis to pyruvate, enters mitochondrial matrix for complete TCA decarboxylation, and passes NADH/FADH₂ electrons through ETS complexes I–IV to $O_2$ to generate 38 ATP.",
      concepts: [
        ["1. Glycolysis Net Yield (Cytoplasm)", "1 Glucose (6C) $\\to$ 2 Pyruvate (3C) + **2 ATP (net)** + **2 NADH** (common to both aerobic and anaerobic organisms; requires no $O_2$)."],
        ["2. Krebs Cycle Key Steps & Substrate Phosphorylation", "Acetyl-CoA (2C) + OAA (4C) $\\to$ Citrate (6C); per turn yields **3 NADH + 1 FADH₂ + 1 GTP/ATP** (succinyl-CoA $\\to$ succinate) + $2\\text{ CO}_2$."],
        ["3. Respiratory Quotient ($RQ = \\text{CO}_2\\text{ evolved} / \\text{O}_2\\text{ consumed}$)", "Carbohydrates: $RQ = 1.0$; Fats (tripalmitin): $RQ \\approx 0.7$; Proteins: $RQ \\approx 0.9$; Organic acids: $RQ > 1.0$."]
      ],
      matrices: [
        ["Aerobic ATP Balance Sheet (1 Glucose)", "Glycolysis: $2\\text{ ATP} + 2\\text{ NADH} (6) = 8$<br>Link Reaction: $2\\text{ NADH} = 6$<br>Krebs Cycle (2 turns): $2\\text{ GTP} + 6\\text{ NADH} (18) + 2\\text{ FADH}_2 (4) = 24 \\implies \\mathbf{38\\text{ ATP}}$"],
        ["ETS Complexes I to V", "I: NADH dehydrogenase | II: Succinate dehydrogenase | III: Cytochrome $bc_1$ | IV: Cytochrome $c$ oxidase ($Cu_A, Cu_B, a, a_3$) | V: ATP synthase"]
      ],
      prob1: ["Calculating Respiratory Quotient (RQ) of Tripalmitin Fat", 3, "Calculate RQ for complete oxidation of tripalmitin: $2(C_{51}H_{98}O_6) + 145O_2 \\to 102CO_2 + 98H_2O$.", ["$RQ = \\frac{\\text{Volume of } CO_2\\text{ evolved}}{\\text{Volume of } O_2\\text{ consumed}} = \\frac{102}{145} = \\mathbf{0.70}$ ($< 1$ because fats are $O_2$-poor and require more external $O_2$)."]],
      mech1: ["Why Krebs Cycle Is Called an Amphibolic Pathway", "3-Mark Metabolism", "Show both catabolic breakdown and anabolic withdrawal of intermediates.", ["While oxidizing acetyl-CoA to $CO_2$ (catabolism), intermediates are withdrawn for biosynthesis: $\\alpha$-ketoglutarate forms glutamate/amino acids, and succinyl-CoA forms chlorophyll/haem (anabolism)."], "Integrates catabolism and anabolism."],
      tip: "In mitochondrial ETS, oxidation of 1 NADH yields 3 ATP, whereas 1 FADH₂ (entering at Complex II, bypassing Complex I) yields 2 ATP; O₂ is the final electron acceptor!",
      diagnostics: [
        { q: "The terminal electron acceptor at Complex IV of the mitochondrial electron transport system is:", difficulty: "Board Standard (1M)", options: ["Molecular oxygen ($O_2$)", "Cytochrome $c$", "$NAD^+$", "Ubiquinone"], correct: 0, solution: "$O_2$ accepts electrons and protons to form metabolic water." },
        { q: "The Respiratory Quotient (RQ) of tripalmitin (a fat) during aerobic respiration is:", difficulty: "RQ Calculation (1M)", options: ["$0.7$", "$1.0$", "$0.9$", "$1.33$"], correct: 0, solution: "$102\\text{ CO}_2 / 145\\text{ O}_2 = 0.70$." }
      ]
    },
    { key: "B11_CH13", code: "Chapter 13", name: "Plant Growth and Development", weight: 4,
      desc: "Arithmetic vs geometric growth curves, differentiation/dedifferentiation/redifferentiation, and five PGRs (Auxin, Gibberellin, Cytokinin, Ethylene, ABA).",
      iTitle: "Growth Kinetics & Antagonistic/Synergistic Phytohormone Action",
      iBody: "Plant cells retain totipotency through differentiation, dedifferentiation (interfascicular cambium), and redifferentiation; five phytohormones orchestrate apical dominance, bolting, senescence delay, ripening, and stomatal closure.",
      concepts: [
        ["1. Arithmetic vs Geometric Growth Equations", "Arithmetic (root tip): $L_t = L_0 + rt$ (linear). Geometric (exponential): $W_1 = W_0 e^{rt}$ (sigmoid S-curve: lag $\\to$ log $\\to$ stationary)."],
        ["2. Growth Promoters vs Inhibitors", "Auxin (apical dominance, root initiation, 2,4-D dicot weedicide), Gibberellin ($GA_3$ bolting in rosette plants, malting), Cytokinin (Richmond-Lang delay of senescence, lateral shoot growth)."],
        ["3. Ethylene & Abscisic Acid (ABA)", "Ethylene (gaseous, fruit ripening, triple response, ethephon); ABA (stress hormone, closes stomata, induces seed dormancy, antagonizes GA)."]
      ],
      matrices: [
        ["Five Plant Growth Regulators (PGRs)", "Auxin: Apical dominance | GA: Bolting &amp; internode elongation | Cytokinin: Cell division &amp; anti-aging | Ethylene: Ripening | ABA: Stomatal closure &amp; dormancy"],
        ["Differentiation Triad", "Differentiation (meristem $\\to$ mature) $\\to$ Dedifferentiation (regains division: interfascicular cambium) $\\to$ Redifferentiation (secondary xylem/phloem)"]
      ],
      prob1: ["Matching Five Phytohormones to Agricultural Applications", 3, "Identify the PGR responsible for: (a) bolting in cabbages, (b) killing dicot weeds without harming cereals, (c) delaying leaf senescence, and (d) closing stomata during drought.", ["(a) **Gibberellins**; (b) **Auxin (2,4-D)**; (c) **Cytokinins**; (d) **Abscisic Acid (ABA)**."]],
      mech1: ["Apical Dominance & How Decapitation Promotes Bushy Hedges", "3-Mark Hormone Action", "Auxin produced by apical shoot tip inhibits lateral axillary bud outgrowth.", ["Removing the apical shoot tip eliminates apical auxin inhibition, allowing cytokinins to stimulate axillary bud growth into dense lateral branches (used in tea plantations and hedge making)."], "Classic auxin-cytokinin antagonism."],
      tip: "Abscisic Acid (ABA) acts as an antagonist to Gibberellic Acid (GA) in seed dormancy and germination!",
      diagnostics: [
        { q: "Which plant hormone is known as the 'stress hormone' because it stimulates stomatal closure during water deficit?", difficulty: "Board Standard (1M)", options: ["Abscisic acid (ABA)", "Gibberellin", "Cytokinin", "Auxin"], correct: 0, solution: "ABA increases plant tolerance to drought stress by triggering stomatal closure." },
        { q: "Internode elongation just prior to flowering (bolting) in beet and cabbage is promoted by:", difficulty: "PGR Function (1M)", options: ["Gibberellins", "Ethylene", "Abscisic acid", "Cytokinins"], correct: 0, solution: "Gibberellins induce bolting in rosette plants." }
      ]
    },
    { key: "B11_CH14", code: "Chapter 14", name: "Breathing and Exchange of Gases", weight: 4,
      desc: "Mechanism of breathing, pulmonary volumes & capacities (TV, IRV, ERV, RV, VC, TLC), oxygen dissociation curve, and CO2 transport.",
      iTitle: "Negative-Pressure Thoracic Ventilation & Sigmoid Haemoglobin Cooperativity",
      iBody: "Inspiration contracts the diaphragm and external intercostals to lower intrapulmonary pressure below atmospheric pressure; cooperative binding of 4 $O_2$ to haemoglobin produces a sigmoid dissociation curve shifted right by high $pCO_2$, $H^+$, and temperature (Bohr effect).",
      concepts: [
        ["1. Respiratory Volumes & Capacities", "$TV = 500\\text{ mL}$, $IRV = 2500\\text{–}3000\\text{ mL}$, $ERV = 1000\\text{–}1100\\text{ mL}$, $RV = 1100\\text{–}1200\\text{ mL}$. Vital Capacity $VC = TV + IRV + ERV$ ($\\approx 4.0\\text{–}4.6\\text{ L}$); $TLC = VC + RV$."],
        ["2. Oxygen Dissociation Curve (Bohr Shift)", "In alveoli (high $pO_2$, low $pCO_2$, low $H^+$, low temp) $\\to$ curve shifts LEFT (oxyhaemoglobin formation). In tissues (low $pO_2$, high $pCO_2$, high $H^+$, high temp) $\\to$ curve shifts RIGHT (dissociation)."],
        ["3. Three Modes of $CO_2$ Transport", "**70% as bicarbonate ($HCO_3^-$)** via RBC carbonic anhydrase, **20–25% as carbaminohaemoglobin**, and **7% dissolved in plasma**."]
      ],
      matrices: [
        ["Partial Pressures ($pO_2$ / $pCO_2$ in mmHg)", "Alveoli: $104 / 40$ | Oxygenated blood: $95 / 40$ | Deoxygenated blood: $40 / 45$ | Tissues: $40 / 45$"],
        ["Transport Percentages ($O_2$ vs $CO_2$)", "$O_2$: $97\\%$ Hb + $3\\%$ plasma<br>$CO_2$: $70\\%$ $HCO_3^-$ + $20\\text{–}25\\%$ carbamino-Hb + $7\\%$ plasma"]
      ],
      prob1: ["Calculating Vital Capacity & Total Lung Capacity from Respiratory Volumes", 3, "Given $TV = 500\\text{ mL}$, $IRV = 2800\\text{ mL}$, $ERV = 1100\\text{ mL}$, and $RV = 1200\\text{ mL}$, calculate Inspiratory Capacity (IC), Vital Capacity (VC), and Total Lung Capacity (TLC).", ["$IC = TV + IRV = 500 + 2800 = \\mathbf{3300\\text{ mL}}$; $VC = TV + IRV + ERV = \\mathbf{4400\\text{ mL}}$; $TLC = VC + RV = \\mathbf{5600\\text{ mL}}$."]],
      mech1: ["Chloride Shift (Hamburger Phenomenon) & Bicarbonate Transport of $CO_2$", "5-Mark Physiology Mechanism", "RBCs contain high concentration of zinc-enzyme Carbonic Anhydrase.", ["In tissues, $CO_2 + H_2O \\xrightarrow{\\text{CA}} H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-$. $HCO_3^-$ diffuses out into plasma while $Cl^-$ enters RBCs to maintain electrical neutrality; at alveoli, the reaction reverses to release $CO_2$."], "Accounts for 70% of systemic $CO_2$ transport."],
      tip: "Residual Volume (RV = 1100–1200 mL) remains in lungs even after maximal forceful expiration and CANNOT be measured by a simple spirometer!",
      diagnostics: [
        { q: "Approximately $70\\%$ of carbon dioxide produced by metabolizing tissues is transported in blood as:", difficulty: "Board Standard (1M)", options: ["Bicarbonate ions ($HCO_3^-$)", "Carbaminohaemoglobin", "Dissolved $CO_2$ in plasma", "Carboxyhaemoglobin"], correct: 0, solution: "Carbonic anhydrase inside RBCs converts $70\\%$ of $CO_2$ into $HCO_3^-$." },
        { q: "Which factor shifts the oxyhaemoglobin dissociation curve to the RIGHT (promoting $O_2$ unloading in tissues)?", difficulty: "Bohr Effect (1M)", options: ["High $pCO_2$ and high $H^+$ (low pH)", "High $pO_2$ and low $pCO_2$", "Low temperature and high pH", "Decreased 2,3-BPG"], correct: 0, solution: "Elevated $pCO_2$, acidity, and temperature lower Hb affinity for $O_2$." }
      ]
    },
    { key: "B11_CH15", code: "Chapter 15", name: "Body Fluids and Circulation", weight: 4,
      desc: "Blood groups (ABO & Rh erythroblastosis foetalis), coagulation cascade, human heart double circulation, cardiac cycle (0.8 s), and ECG waves.",
      iTitle: "Myogenic Cardiac Cycle (0.8 s) & Double Circulation Hemodynamics",
      iBody: "The SA node pacemaker initiates autorhythmic beats at $72\\text{ min}^{-1}$ ($0.8\\text{ s}$ cardiac cycle: $0.1\\text{ s}$ atrial systole, $0.3\\text{ s}$ ventricular systole, $0.4\\text{ s}$ joint diastole), driving $5\\text{ L/min}$ cardiac output through separated pulmonary and systemic circuits.",
      concepts: [
        ["1. Cardiac Cycle & Heart Sounds ($0.8\\text{ s}$)", "Stroke Volume $= 70\\text{ mL}$, Cardiac Output $= 70 \\times 72 \\approx 5040\\text{ mL/min}$. First sound **'Lub'** = closure of tricuspid/bicuspid valves (start of ventricular systole); Second sound **'Dub'** = closure of semilunar valves (start of ventricular diastole)."],
        ["2. Standard ECG Wave Interpretation", "**P-wave**: atrial depolarization (systole); **QRS complex**: ventricular depolarization; **T-wave**: ventricular repolarization (end of systole)."],
        ["3. Erythroblastosis Foetalis (Rh Incompatibility)", "Occurs when $Rh^-$ mother carries second $Rh^+$ fetus after sensitization during first delivery; prevented by injecting anti-Rh antibodies (RhoGAM) immediately after first birth."]
      ],
      matrices: [
        ["ABO Blood Group Compatibility", "O-negative: Universal Donor (no A, B, Rh antigens)<br>AB-positive: Universal Recipient (no anti-A, anti-B antibodies)"],
        ["Cardiac Cycle Phases ($0.8\\text{ s}$)", "Atrial Systole: $0.1\\text{ s}$ | Ventricular Systole: $0.3\\text{ s}$ | Joint Diastole: $0.4\\text{ s}$"]
      ],
      prob1: ["Calculating Cardiac Output from Stroke Volume & Heart Rate", 2, "If an athlete has heart rate $60\\text{ beats/min}$ and stroke volume $85\\text{ mL}$, calculate cardiac output in $\\text{L/min}$.", ["$\\text{Cardiac Output} = \\text{Stroke Volume} \\times \\text{Heart Rate} = 85\\text{ mL} \\times 60\\text{ min}^{-1} = 5100\\text{ mL/min} = \\mathbf{5.1\\text{ L/min}}$."]],
      mech1: ["Enzymatic Cascade of Blood Coagulation", "3-Mark Physiology", "Triggered by tissue thromboplastin and platelet factors in presence of $Ca^{2+}$.", ["Prothrombin $\\xrightarrow{\\text{Thrombokinase},\\,Ca^{2+}}$ Thrombin; soluble Fibrinogen $\\xrightarrow{\\text{Thrombin}}$ insoluble Fibrin network that traps dead/damaged blood cells to form a clot."], "$Ca^{2+}$ ions play an essential cofactor role."],
      tip: "The 'Lub' sound marks closure of AV (tricuspid & bicuspid) valves at the start of ventricular systole, while 'Dub' marks closure of semilunar valves at the start of ventricular diastole!",
      diagnostics: [
        { q: "In a standard electrocardiogram (ECG), the QRS complex represents:", difficulty: "Board Standard (1M)", options: ["Depolarization of the ventricles", "Depolarization of the atria", "Repolarization of the ventricles", "Joint diastole"], correct: 0, solution: "QRS complex initiates ventricular contraction (systole)." },
        { q: "The second heart sound ('Dub') is produced by the closure of:", difficulty: "Cardiac Cycle (1M)", options: ["Semilunar valves", "Tricuspid and bicuspid valves", "SA node", "Coronary sinus"], correct: 0, solution: "Semilunar valves close at the beginning of ventricular diastole." }
      ]
    },
    { key: "B11_CH16", code: "Chapter 16", name: "Excretory Products and their Elimination", weight: 4,
      desc: "Ammonotelism/ureotelism/uricotelism, nephron structure, GFR & JGA autoregulation, counter-current multiplier, and RAAS/ADH hormonal control.",
      iTitle: "Counter-Current Medullary Multiplier & Hormonal Osmoregulation",
      iBody: "Juxtamedullary nephrons create a $300 \\to 1200\\text{ mOsmol/L}$ corticomedullary osmotic gradient using the Henle loop counter-current multiplier and vasa recta exchanger, enabling ADH to concentrate urine $4\\times$.",
      concepts: [
        ["1. Nitrogenous Waste Toxicity & Water Cost", "Ammonia (most toxic, aquatic bony fishes), Urea (ureotelic — mammals, adult amphibians), Uric acid (least toxic paste — birds, reptiles, insects)."],
        ["2. Nephron Segmental Transport", "PCT (70–80% electrolytes & $H_2O$ reabsorbed, brush border); Descending Henle limb (permeable to $H_2O$, impermeable to salts); Ascending Henle limb (impermeable to $H_2O$, actively pumps $NaCl$ out)."],
        ["3. RAAS vs ANF Antagonism", "Low GFR activates JGA $\\to$ Renin $\\to$ Angiotensin II $\\to$ Aldosterone (raises BP & GFR); high atrial stretch releases **ANF** (vasodilator, opposes RAAS)."]
      ],
      matrices: [
        ["Loop of Henle Permeability Rule", "Descending Limb: Water permeable (concentrates filtrate)<br>Ascending Limb: Water IMPERMEABLE, Salt permeable (dilutes filtrate)"],
        ["Hormonal Regulation of Kidney", "ADH (Vasopressin): Collecting duct water reabsorption<br>Aldosterone: DCT $Na^+$ &amp; $H_2O$ reabsorption<br>ANF: Vasodilation &amp; inhibits renin"]
      ],
      prob1: ["Explaining Why Descending Loop Concentrates While Ascending Loop Dilutes Filtrate", 3, "Account for the opposite osmolarity changes in the descending vs ascending limbs of the Loop of Henle.", ["Descending limb is permeable to water but impermeable to electrolytes, so water exits into hyperosmotic medulla (concentrating filtrate to $1200\\text{ mOsmol/L}$). Ascending limb is impermeable to water and actively transports $NaCl$ out (diluting filtrate to $100\\text{ mOsmol/L}$)."]],
      mech1: ["Juxtaglomerular Apparatus (JGA) & Renin-Angiotensin-Aldosterone System (RAAS)", "5-Mark Homeostasis", "Activated by fall in glomerular blood flow / GFR.", ["JG cells release **Renin**, converting liver angiotensinogen $\\to$ Angiotensin I $\\to$ Angiotensin II (vasoconstrictor that raises glomerular pressure and stimulates adrenal cortex to secrete **Aldosterone** for DCT $Na^+$ reabsorption)."], "Restores normal GFR and blood pressure."],
      tip: "Ascending limb of Loop of Henle is IMPERMEABLE to water, whereas Descending limb is PERMEABLE to water!",
      diagnostics: [
        { q: "Which segment of the nephron is impermeable to water but actively transports electrolytes into the medullary interstitium?", difficulty: "Board Standard (1M)", options: ["Ascending limb of Loop of Henle", "Descending limb of Loop of Henle", "Proximal convoluted tubule (PCT)", "Collecting duct in presence of ADH"], correct: 0, solution: "Thick ascending limb pumps out $NaCl$ while blocking water exit." },
        { q: "Atrial Natriuretic Factor (ANF) acts as a natural check on the RAAS mechanism by causing:", difficulty: "Hormone Check (1M)", options: ["Vasodilation and decrease in blood pressure", "Vasoconstriction and rise in GFR", "Increased renin secretion", "Increased ADH release"], correct: 0, solution: "ANF opposes Angiotensin II by dilating blood vessels." }
      ]
    },
    { key: "B11_CH17", code: "Chapter 17", name: "Locomotion and Movement", weight: 4,
      desc: "Sarcomere ultrastructure (A-band, I-band, H-zone, Z-line), sliding filament theory, ATP cross-bridge cycle, and axial/appendicular joints.",
      iTitle: "Actin-Myosin Cross-Bridge Ratchet & Sarcomere Band Dynamics",
      iBody: "During muscle contraction, $Ca^{2+}$ binds Troponin-C to unmask myosin-binding sites on actin; myosin heads hydrolyze ATP to pull actin filaments inward, shortening the I-band and H-zone while A-band length stays constant.",
      concepts: [
        ["1. Sarcomere Band Changes During Contraction", "**I-band** shortens, **H-zone** narrows/disappears, **Z-lines** move closer (sarcomere shortens), while **A-band** (myosin length) stays **UNCHANGED**."],
        ["2. Calcium-Troponin Trigger & ATP Role", "Action potential releases $Ca^{2+}$ from sarcoplasmic reticulum $\\to$ binds Troponin $\\to$ moves Tropomyosin; ATP binding detaches myosin head, ATP hydrolysis re-cocks myosin head."],
        ["3. Synovial Joint Types", "Ball & socket (shoulder/hip), Hinge (knee/elbow), Pivot (atlas-axis), Gliding (carpals), Saddle (carpal-metacarpal of thumb)."]
      ],
      matrices: [
        ["Sarcomere Contraction Summary", "Shortens: Sarcomere, I-band, H-zone<br>Constant: A-band (thick myosin filament length)"],
        ["Human Rib Cage ($12$ Pairs)", "True ribs ($1\\text{–}7$, vertebrosternal) | False ribs ($8\\text{–}10$, vertebrochondral) | Floating ribs ($11\\text{–}12$, vertebral)"]
      ],
      prob1: ["Predicting Changes in A-Band, I-Band, H-Zone & Z-Lines During Contraction", 3, "State what happens to the length of the A-band, I-band, H-zone, and distance between Z-lines during maximal skeletal muscle contraction.", ["Distance between Z-lines (sarcomere) decreases, I-band shortens, H-zone disappears as actin overlaps myosin completely, while **A-band length remains unchanged**."]],
      mech1: ["Sliding Filament Theory & Cross-Bridge Cycle", "5-Mark Core Mechanism", "Neuromuscular junction ACh release depolarizes sarcolemma.", ["1. SR releases $Ca^{2+}$ which binds Troponin-C, exposing active sites on actin; 2. Myosin head (with ADP + Pi) binds actin forming cross-bridge and executes power stroke; 3. New ATP binds myosin to break cross-bridge; 4. ATP hydrolysis resets myosin head."], "Repeats as long as cytosolic $Ca^{2+}$ and ATP remain available."],
      tip: "During muscle contraction, the A-band NEVER changes its length—only the I-band and H-zone shorten!",
      diagnostics: [
        { q: "During skeletal muscle contraction, which region of the sarcomere remains completely unchanged in length?", difficulty: "Board Standard (1M)", options: ["A-band", "I-band", "H-zone", "Sarcomere"], correct: 0, solution: "A-band equals the fixed length of thick myosin filaments." },
        { q: "The joint between the atlas and axis vertebrae is an example of a:", difficulty: "Joint Classification (1M)", options: ["Pivot joint", "Hinge joint", "Saddle joint", "Gliding joint"], correct: 0, solution: "Odontoid process of axis forms a rotational pivot joint with atlas." }
      ]
    },
    { key: "B11_CH18", code: "Chapter 18", name: "Neural Control and Coordination", weight: 4,
      desc: "Resting membrane potential (-70 mV), Na+/K+ pump, action potential depolarization/repolarization, saltatory conduction, synaptic transmission, and human brain.",
      iTitle: "Electrochemical Action Potential & Chemical Synaptic Transmission",
      iBody: "Resting neurons maintain $-70\\text{ mV}$ polarization via the $3Na^+/2K^+$ ATPase pump; threshold stimulus opens voltage-gated $Na^+$ channels for rapid depolarization, triggering $Ca^{2+}$-mediated neurotransmitter exocytosis at synapses.",
      concepts: [
        ["1. Resting Potential vs Action Potential", "Resting ($-70\\text{ mV}$, outer $+$, inner $-$): maintained by $3Na^+$ out / $2K^+$ in pump. Depolarization: rapid $Na^+$ influx reverses polarity ($+30\\text{ mV}$). Repolarization: $K^+$ efflux restores negativity."],
        ["2. Saltatory Conduction in Myelinated Axons", "Schwann cells form insulating myelin sheaths interrupted at Nodes of Ranvier; action potentials jump node-to-node for high conduction speed."],
        ["3. Forebrain, Midbrain & Hindbrain", "Cerebrum (memory, intelligence, sensory/motor), Hypothalamus (thermoregulation, hunger/thirst, pituitary control), Cerebellum (posture & balance), Medulla (respiration, cardiovascular reflexes)."]
      ],
      matrices: [
        ["Ion Fluxes in Nerve Impulse", "Resting: $3Na^+$ out / $2K^+$ in (ATPase)<br>Depolarization: Voltage-gated $Na^+$ influx<br>Repolarization: Voltage-gated $K^+$ efflux"],
        ["Synaptic Neurotransmitter Release", "Arrival of impulse opens voltage-gated $Ca^{2+}$ channels at axon terminal $\\to$ vesicles fuse and release ACh into synaptic cleft"]
      ],
      prob1: ["Stepwise Mechanism of Chemical Synaptic Transmission", 3, "Trace the sequence of events when an action potential reaches a cholinergic axon terminal.", ["1. Depolarization opens voltage-gated $Ca^{2+}$ channels; 2. $Ca^{2+}$ influx causes synaptic vesicles to fuse with pre-synaptic membrane and release acetylcholine (ACh) into synaptic cleft; 3. ACh binds post-synaptic receptors, opening ion channels to generate a new potential."]],
      mech1: ["Generation & Conduction of Nerve Impulse Along an Axon", "5-Mark Core Mechanism", "Polarized axonal membrane at resting potential $-70\\text{ mV}$.", ["Threshold stimulus makes membrane freely permeable to $Na^+$, causing rapid $Na^+$ influx and local polarity reversal (depolarization). Local current circuits depolarize adjacent membrane ahead while $K^+$ efflux restores resting potential behind."], "Unidirectional propagation ensured by refractory period."],
      tip: "In chemical synapses, Calcium ions (Ca²⁺) trigger vesicle fusion to release neurotransmitter, whereas Sodium (Na⁺) drives axonal depolarization!",
      diagnostics: [
        { q: "The resting membrane potential of a neuron is actively maintained by the $Na^+/K^+$ pump transporting:", difficulty: "Board Standard (1M)", options: ["$3\\,Na^+$ outward for every $2\\,K^+$ inward", "$2\\,Na^+$ outward for every $3\\,K^+$ inward", "$3\\,K^+$ outward for every $2\\,Na^+$ inward", "Equal $Na^+$ and $K^+$"], correct: 0, solution: "Electrogenic $3Na^+/2K^+$ ATPase maintains negative interior ($-70\\text{ mV}$)." },
        { q: "Body temperature, urge for eating and drinking, and neurosecretory hormones are controlled by the:", difficulty: "Brain Function (1M)", options: ["Hypothalamus", "Cerebellum", "Medulla oblongata", "Corpus callosum"], correct: 0, solution: "Hypothalamus is the homeostatic and neuroendocrine hub of the forebrain." }
      ]
    },
    { key: "B11_CH19", code: "Chapter 19", name: "Chemical Coordination and Integration", weight: 4,
      desc: "Hypothalamus-pituitary axis, thyroid/parathyroid calcitonin-PTH antagonism, adrenal cortex/medulla, pancreas insulin-glucagon, and steroid vs peptide hormone mechanisms.",
      iTitle: "Endocrine Feedback Loops & Membrane vs Nuclear Hormone Receptors",
      iBody: "Water-soluble peptide/catecholamine hormones bind membrane receptors to generate second messengers ($cAMP, IP_3, Ca^{2+}$), whereas lipid-soluble steroid/thyroid hormones enter cells to regulate nuclear gene transcription directly.",
      concepts: [
        ["1. Peptide vs Steroid Hormone Mechanisms", "Peptide/Protein (Insulin, FSH, Glucagon): membrane-bound receptor $\\to$ second messenger ($cAMP, Ca^{2+}$), never enters target cell. Steroid/Thyroid (Cortisol, Estrogen, $T_3/T_4$): intracellular nuclear receptor $\\to$ hormone-receptor complex alters mRNA transcription."],
        ["2. Calcium & Glucose Antagonistic Pairs", "Blood $Ca^{2+}$: Thyroid **Calcitonin** lowers $Ca^{2+}$ vs Parathyroid **PTH** raises $Ca^{2+}$. Blood Glucose: $\\beta$-cell **Insulin** lowers glucose (glycogenesis) vs $\\alpha$-cell **Glucagon** raises glucose (glycogenolysis)."],
        ["3. Pituitary & Adrenal Disorders", "GH excess in adults $\\to$ Acromegaly; ADH deficiency $\\to$ Diabetes insipidus (dilute urine without glycosuria); Adrenal cortex hyposecretion $\\to$ Addison's disease."]
      ],
      matrices: [
        ["Second Messengers vs Nuclear Receptors", "Membrane Receptor (cAMP, $IP_3, Ca^{2+}$): FSH, LH, Insulin, Epinephrine<br>Intracellular Receptor (Gene expression): Cortisol, Testosterone, Estradiol, Thyroxine"],
        ["Diabetes Mellitus vs Diabetes Insipidus", "Diabetes Mellitus: Insulin deficiency/resistance $\\to$ hyperglycemia + glycosuria<br>Diabetes Insipidus: ADH deficiency $\\to$ excessive dilute urine (no glucose)"]
      ],
      prob1: ["Comparing Mechanism of Action of FSH (Peptide) vs Estrogen (Steroid)", 3, "Contrast how FSH and Estrogen act on ovarian target cells.", ["FSH (water-soluble glycoprotein) binds membrane-bound receptors and generates second messengers ($cAMP, Ca^{2+}$) without entering the cell; Estrogen (lipid-soluble steroid) crosses the lipid bilayer, binds intracellular nuclear receptors, and regulates gene transcription."]],
      mech1: ["Antagonistic Regulation of Blood Glucose by Insulin and Glucagon", "3-Mark Homeostasis", "Islets of Langerhans $\\alpha$-cells (glucagon) and $\\beta$-cells (insulin).", ["Hyperglycemia stimulates $\\beta$-cells to secrete **Insulin** (enhances hepatocyte/adipocyte glucose uptake and glycogenesis). Hypoglycemia stimulates $\\alpha$-cells to secrete **Glucagon** (stimulates glycogenolysis and gluconeogenesis)."], "Maintains fasting blood glucose tightly around $80\\text{–}100\\text{ mg/dL}$."],
      tip: "Diabetes insipidus is caused by ADH (vasopressin) deficiency and involves NO glucose in urine, whereas Diabetes mellitus involves insulin deficiency and glycosuria!",
      diagnostics: [
        { q: "Which hormone binds to an intracellular nuclear receptor and directly regulates gene expression?", difficulty: "Board Standard (1M)", options: ["Cortisol (steroid hormone)", "Insulin", "Follicle-stimulating hormone (FSH)", "Epinephrine"], correct: 0, solution: "Steroid and iodothyronine hormones cross plasma membranes to bind nuclear receptors." },
        { q: "Hypercalcemic hormone that increases blood $Ca^{2+}$ levels by stimulating bone resorption and renal $Ca^{2+}$ reabsorption is:", difficulty: "Calcium Homeostasis (1M)", options: ["Parathyroid hormone (PTH)", "Thyrocalcitonin (TCT)", "Aldosterone", "Melatonin"], correct: 0, solution: "PTH raises blood $Ca^{2+}$, antagonizing thyrocalcitonin." }
      ]
    }
  ];

  const reg = {};
  chaptersData.forEach((c) => { reg[c.key] = buildFullBioChapter(c); });
  window.class11BiologyChapterRegistry = reg;
})();
