// frontend/data/class12ChemistryChapters.js
window.class12ChemistryChapterRegistry = {
  C12_CH01: {
    code: "Chapter 01",
    name: "Solutions",
    weight: 7,
    desc: "Types of solutions, Raoult law, colligative properties, van 't Hoff factor.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Colligative Properties & Raoult Law</h3><p class="text-xs text-slate-300">Vapor pressure lowering obeys Raoult law $P_A = x_A P_A^0$. Colligative properties depend on solute particle number: $\\Delta T_b = i K_b m$, $\\Delta T_f = i K_f m$, and $\\Pi = iCRT$.</p></div>'
  },
  C12_CH02: {
    code: "Chapter 02",
    name: "Electrochemistry",
    weight: 9,
    desc: "Nernst equation, conductance, Kohlrausch law, galvanic and electrolytic cells.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Nernst Equation & Gibbs Free Energy</h3><p class="text-xs text-slate-300">Cell potential reflects reaction quotient: $E_{\\text{cell}} = E^0_{\\text{cell}} - \\frac{0.0591}{n}\\log Q$. Equilibrium constant relates via $\\Delta G^0 = -nFE^0_{\\text{cell}} = -RT \\ln K_c$.</p></div>'
  },
  C12_CH03: {
    code: "Chapter 03",
    name: "Chemical Kinetics",
    weight: 7,
    desc: "Reaction rates, rate law, integrated rate equations, Arrhenius equation.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Integrated Rate Laws & Activation Energy</h3><p class="text-xs text-slate-300">First-order integrated rate: $k = \\frac{2.303}{t}\\log\\frac{[R]_0}{[R]}$ with half-life $t_{1/2} = \\frac{0.693}{k}$. Temperature dependence obeys Arrhenius: $k = A e^{-E_a/RT}$.</p></div>'
  },
  C12_CH04: {
    code: "Chapter 04",
    name: "d and f Block Elements",
    weight: 7,
    desc: "Transition elements, variable oxidation states, lanthanoid and actinoid contraction.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Transition Metals & Contraction</h3><p class="text-xs text-slate-300">Incomplete $d$-subshells confer variable valency, catalytic activity, and colored complexes via $d-d$ transitions. Poor $4f$ shielding yields lanthanoid contraction.</p></div>'
  },
  C12_CH05: {
    code: "Chapter 05",
    name: "Coordination Compounds",
    weight: 7,
    desc: "Werner theory, IUPAC nomenclature, isomerism, Valence Bond and Crystal Field theories.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Crystal Field Splitting</h3><p class="text-xs text-slate-300">Octahedral crystal fields split $d$-orbitals into $t_{2g}$ and $e_g$ subsets ($\\Delta_o$). Strong-field ligands induce low-spin electron pairing; weak fields favor high-spin.</p></div>'
  },
  C12_CH06: {
    code: "Chapter 06",
    name: "Haloalkanes and Haloarenes",
    weight: 6,
    desc: "Nomenclature, SN1 and SN2 reaction mechanisms, stereochemistry, optical activity.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Nucleophilic Substitution Mechanisms</h3><p class="text-xs text-slate-300">SN2 proceeds through a single concerted transition state with Walden inversion ($1^0 > 2^0 > 3^0$). SN1 occurs via carbocation intermediate yielding racemization ($3^0 > 2^0 > 1^0$).</p></div>'
  },
  C12_CH07: {
    code: "Chapter 07",
    name: "Alcohols, Phenols and Ethers",
    weight: 6,
    desc: "Preparation, acidity of phenols, Lucas test, Reimer-Tiemann, Williamson synthesis.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Phenol Resonance & Ether Cleavage</h3><p class="text-xs text-slate-300">Resonance stabilization of the phenoxide ion makes phenol more acidic than alcohols. Williamson synthesis involves $S_N2$ attack of alkoxide on primary alkyl halides.</p></div>'
  },
  C12_CH08: {
    code: "Chapter 08",
    name: "Aldehydes, Ketones and Carboxylic Acids",
    weight: 8,
    desc: "Nucleophilic addition, Aldol condensation, Cannizzaro reaction, acidic strength.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Carbonyl Reactivity</h3><p class="text-xs text-slate-300">Carbonyl carbons are electrophilic centers prone to nucleophilic additions. Alpha-hydrogens enable Aldol condensations; compounds without $\\alpha$-H undergo Cannizzaro disproportionation.</p></div>'
  },
  C12_CH09: {
    code: "Chapter 09",
    name: "Amines",
    weight: 6,
    desc: "Basicity of amines, Gabriel phthalimide synthesis, Hoffmann bromamide, diazotization.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Amine Basicity & Diazonium Salts</h3><p class="text-xs text-slate-300">Aqueous basicity balances inductive, steric, and solvation factors: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$. Arenediazonium salts undergo versatile Sandmeyer substitutions.</p></div>'
  },
  C12_CH10: {
    code: "Chapter 10",
    name: "Biomolecules",
    weight: 7,
    desc: "Carbohydrates, glucose structure, amino acids, peptide bonds, protein structure, nucleic acids.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Proteins & Nucleic Acid Helices</h3><p class="text-xs text-slate-300">Peptide bonds link zwitterionic amino acids. Protein folding produces primary, secondary (alpha-helix, beta-sheet), tertiary, and quaternary structures. DNA pairs via Watson-Crick H-bonds.</p></div>'
  }
};
