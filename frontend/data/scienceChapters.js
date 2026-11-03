// frontend/data/scienceChapters.js
window.scienceChapterRegistry = {
    // =========================================================================
    // SCIENCE 01: CHEMICAL REACTIONS & EQUATIONS
    // =========================================================================
    S10_CH01: {
        code: "Science 01",
        name: "Chemical Reactions & Equations",
        weight: 6,
        desc: "Master chemical balancing via atom conservation, thermodynamic energy classifications, the complete 5-fold reaction taxonomy, experimental diagnostic indicators, and redox half-electron transfers.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Empirical & Mechanistic Architecture</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 01: Chemical Transformations & Conservation of Mass</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Atom-inventory accounting, reaction taxonomy, and electron-transfer redox dynamics</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> The Microscopic Reality: Bond Dissociation & Orbital Reorganization
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        In any chemical change, <strong>no atomic nucleus is created, destroyed, or transmuted into another element</strong>. Macroscopic transformations are strictly electronic and structural: pre-existing bonds break by absorbing activation energy, and atoms reorganize into lower-energy molecular configurations. The Law of Conservation of Mass mandates that the total count of each atomic species on the reactant side must identically balance the product side.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🧪</span> Laboratory Diagnostics of Chemical Change
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            A reaction is confirmed experimentally by:
                            <br>&bull; <strong>Temperature Shift ($\Delta T$):</strong> Exothermic (flask warms) vs. Endothermic (chilling effect).
                            <br>&bull; <strong>Precipitate Formation:</strong> Insoluble solid dropping out ($BaSO_4\downarrow$, $PbI_2\downarrow$).
                            <br>&bull; <strong>Gas Evolution:</strong> Effervescence ($H_2$ popping, $CO_2$ milkiness).
                            <br>&bull; <strong>Color Shift:</strong> Transition-metal oxidation changes (pale green $FeSO_4$ to brown $Fe_2O_3$).
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>⚖️</span> The Redox Dual Concept: Oxygen vs. Electron Shift
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Advanced criteria view redox as <strong>electron transfer</strong>:
                            <br>&bull; <strong>Oxidation:</strong> Loss of electrons / gain of oxygen ($Fe \rightarrow Fe^{2+} + 2e^-$).
                            <br>&bull; <strong>Reduction:</strong> Gain of electrons / loss of oxygen ($Cu^{2+} + 2e^- \rightarrow Cu$).
                            <br>Oxidizing agents accept electrons; reducing agents surrender them.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 The 5 Reaction Categories</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Combination</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">$CaO + H_2O \rightarrow Ca(OH)_2$</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">2. Decomposition</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Thermal, electrolytic, photolytic cleavage.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">3. Displacement</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">$Fe + CuSO_4 \rightarrow FeSO_4 + Cu$</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">4. Double Disp.</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Mutual ionic exchange ($BaSO_4\downarrow$).</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">5. Redox</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Simultaneous oxidation-reduction cycles.</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Experimental Diagnostic Matrix: Observation & Chemical Equations</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Lab Verification</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Reaction Type</th>
                                    <th class="p-2.5 border border-slate-700">Setup & Reactants</th>
                                    <th class="p-2.5 border border-slate-700">Balanced Equation with States</th>
                                    <th class="p-2.5 border border-slate-700">Precise Diagnostic Observations</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Combination (Exothermic)</td>
                                    <td class="p-2.5 border border-slate-700">Adding water slowly to quicklime ($CaO$) in a glass beaker.</td>
                                    <td class="p-2.5 border border-slate-700">$$CaO_{(s)} + H_2O_{(l)} \rightarrow Ca(OH)_{2(aq)} + \text{Heat}$$</td>
                                    <td class="p-2.5 border border-slate-700">• Vigorous hissing sound; beaker turns intensely hot.<br>• Produces clear slaked lime that turns milky with $CO_2$.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-purple-400">Thermal Decomposition</td>
                                    <td class="p-2.5 border border-slate-700">Heating dry green ferrous sulfate crystals ($FeSO_4 \cdot 7H_2O$) in a boiling tube.</td>
                                    <td class="p-2.5 border border-slate-700">$$2FeSO_{4(s)} \\xrightarrow{\Delta} Fe_2O_{3(s)} + SO_{2(g)} + SO_{3(g)}$$</td>
                                    <td class="p-2.5 border border-slate-700">• Green crystals turn white, then reddish-brown ($Fe_2O_3$).<br>• Pungent sulfur odor; gases turn moist blue litmus red.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-cyan-400">Displacement</td>
                                    <td class="p-2.5 border border-slate-700">Clean iron nails immersed in aqueous copper sulfate ($CuSO_4$) solution.</td>
                                    <td class="p-2.5 border border-slate-700">$$Fe_{(s)} + CuSO_{4(aq)} \rightarrow FeSO_{4(aq)} + Cu_{(s)}$$</td>
                                    <td class="p-2.5 border border-slate-700">• Blue solution fades gradually to pale green.<br>• Iron nails become coated with reddish-brown spongy copper.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Double Displacement</td>
                                    <td class="p-2.5 border border-slate-700">Mixing sodium sulfate ($Na_2SO_4$) with barium chloride ($BaCl_2$) solution.</td>
                                    <td class="p-2.5 border border-slate-700">$$Na_2SO_{4(aq)} + BaCl_{2(aq)} \rightarrow BaSO_4\downarrow + 2NaCl_{(aq)}$$</td>
                                    <td class="p-2.5 border border-slate-700">• Immediate formation of an opaque white precipitate ($BaSO_4$).<br>• Precipitate is completely insoluble in dilute hydrochloric acid.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-rose-400">Photolytic Cleavage</td>
                                    <td class="p-2.5 border border-slate-700">Exposing white silver chloride ($AgCl$) to sunlight on a watch glass.</td>
                                    <td class="p-2.5 border border-slate-700">$$2AgCl_{(s)} \\xrightarrow{\text{Sunlight}} 2Ag_{(s)} + Cl_{2(g)}$$</td>
                                    <td class="p-2.5 border border-slate-700">• White crystals turn dark grey metallic silver.<br>• Pungent chlorine gas escapes into air. (Used in B&W photography).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK BALANCED REDOX DERIVATION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Empirical Derivation of Balanced Redox Systems</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <div class="space-y-3 font-sans text-xs">
                        <p><strong>Problem Statement:</strong> Write the balanced chemical equation with physical states for the reaction between manganese dioxide and concentrated hydrochloric acid. Systematically identify the substance oxidized, substance reduced, oxidizing agent, and reducing agent.</p>

                        <div class="p-3.5 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-2 font-mono text-[11px]">
                            <p><strong>Step 1: Skeletal Equation & Atom Inventory:</strong><br>
                            $$\\text{MnO}_2 + \\text{HCl} \\rightarrow \\text{MnCl}_2 + \\text{H}_2\\text{O} + \\text{Cl}_2$$
                            Reactants: $\\text{Mn}=1, \\text{O}=2, \\text{H}=1, \\text{Cl}=1$. Products: $\\text{Mn}=1, \\text{O}=1, \\text{H}=2, \\text{Cl}=4$.</p>

                            <p><strong>Step 2: Systematic Coefficient Balancing:</strong><br>
                            • Balance $\\text{Cl}$ atoms by placing coefficient 4 before $\\text{HCl}$:<br>
                            $$\\text{MnO}_2 + 4\\text{HCl} \\rightarrow \\text{MnCl}_2 + \\text{H}_2\\text{O} + \\text{Cl}_2$$
                            • Balance $\\text{H}$ and $\\text{O}$ by placing coefficient 2 before $\\text{H}_2\\text{O}$:<br>
                            $$\\text{MnO}_{2(s)} + 4\\text{HCl}_{(aq)} \\rightarrow \\text{MnCl}_{2(aq)} + 2\\text{H}_2\\text{O}_{(l)} + \\text{Cl}_{2(g)}$$
                            Total atom inventory: $\\text{Mn}: 1=1, \\text{O}: 2=2, \\text{H}: 4=4, \\text{Cl}: 4=4$. Conservation of mass verified.</p>

                            <p><strong>Step 3: Redox Electron & Oxygen Transfer Analysis:</strong><br>
                            • <strong>Substance Oxidized:</strong> $\\text{HCl}$ is oxidized to $\\text{Cl}_2$ (removal of hydrogen / oxidation number of $\\text{Cl}$ increases from $-1$ to $0$).<br>
                            • <strong>Substance Reduced:</strong> $\\text{MnO}_2$ is reduced to $\\text{MnCl}_2$ (removal of oxygen / oxidation number of $\\text{Mn}$ decreases from $+4$ to $+2$).<br>
                            • <strong>Oxidizing Agent:</strong> $\\text{MnO}_2$ (supplies oxygen and accepts electrons to facilitate oxidation).<br>
                            • <strong>Reducing Agent:</strong> $\\text{HCl}$ (furnishes hydrogen and donates electrons) &emsp; &#9632;</p>
                        </div>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK THERMAL DECOMPOSITION PROOF -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [3 Marks]: Thermal Cleavage of Ferrous Sulphate Crystals</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Diagnostic Experiment</span>
                    </div>

                    <div class="space-y-2 text-xs font-mono text-[11px] leading-relaxed">
                        <p><strong>Reaction Step 1 (Dehydration of Water of Crystallization):</strong><br>
                        $$\\text{FeSO}_4 \\cdot 7\\text{H}_2\\text{O}_{(s)} \\xrightarrow{\\Delta} \\text{FeSO}_{4(s)} \\text{ (anhydrous white)} + 7\\text{H}_2\\text{O}_{(g)}$$
                        Pale green crystals turn white upon gentle heating.</p>

                        <p><strong>Reaction Step 2 (Thermal Decomposition):</strong><br>
                        $$2\\text{FeSO}_{4(s)} \\xrightarrow{\\text{Strong Heat}} \\text{Fe}_2\\text{O}_{3(s)} \\text{ (reddish-brown residue)} + \\text{SO}_{2(g)} + \\text{SO}_{3(g)}$$</p>

                        <p><strong>Observable Diagnostic Evidence:</strong><br>
                        • Solid residue turns reddish-brown ferric oxide ($Fe_2O_3$).<br>
                        • Pungent smell of burning sulfur due to acidic $SO_2$ and $SO_3$ gases.<br>
                        • Moist blue litmus paper held at tube mouth turns red &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK PRECIPITATION PROOF -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: Double Displacement & Lead Iodide Precipitation</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Ionic Exchange</span>
                    </div>

                    <div class="space-y-2 text-xs font-mono text-[11px] leading-relaxed text-slate-300">
                        <p><strong>Balanced Equation:</strong><br>
                        $$\\text{Pb(NO}_3)_{2(aq)} + 2\\text{KI}_{(aq)} \\rightarrow \\text{PbI}_{2(s)}\\downarrow + 2\\text{KNO}_{3(aq)}$$</p>
                        <p>• <strong>Observable Precipitate:</strong> Formation of a dense, bright yellow precipitate of lead iodide ($PbI_2$).<br>
                        • <strong>Classification:</strong> Mutual exchange of ions ($Pb^{2+}$ and $K^+$, $NO_3^-$ and $I^-$) classifies this as a double displacement precipitation reaction &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "Always write physical state symbols (s, l, g, aq) to avoid losing fractional half-marks in CBSE chemical equations."
        },
        diagnostics: [
            { q: "Which gas is evolved when dilute hydrochloric acid is poured over zinc granules?", difficulty: "Foundation Level", options: ["Hydrogen gas, which burns with a characteristic pop sound", "Carbon dioxide, which turns lime water milky", "Oxygen gas, which rekindles a glowing splint", "Chlorine gas with a bleaching action"], correct: 0, solution: "Zinc displaces hydrogen from dilute acids: Zn + 2HCl -> ZnCl2 + H2. Hydrogen gas burns with a characteristic pop sound." },
            { q: "When green crystals of ferrous sulfate are heated strongly in a dry boiling tube, the residue left behind is:", difficulty: "Foundation Level", options: ["Reddish-brown ferric oxide (Fe2O3)", "Black ferrous oxide (FeO)", "Yellow lead oxide (PbO)", "White anhydrous zinc sulfate (ZnSO4)"], correct: 0, solution: "2FeSO4 decomposes on heating into reddish-brown Fe2O3 and releases suffocating SO2 and SO3 gases." },
            { q: "In the reaction: CuO + H2 -> Cu + H2O, the oxidizing agent is:", difficulty: "Application Level", options: ["CuO (Copper oxide)", "H2 (Hydrogen)", "Cu (Copper)", "H2O (Water)"], correct: 0, solution: "CuO loses oxygen to form Cu, meaning CuO is reduced and therefore acts as the oxidizing agent." },
            { q: "Fat-containing food items are flushed with which inert gas to prevent rancidity?", difficulty: "Foundation Level", options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"], correct: 0, solution: "Nitrogen provides an unreactive inert blanket that prevents atmospheric oxygen from oxidizing fats and oils." }
        ]
    },

    // =========================================================================
    // SCIENCE 02: ACIDS, BASES AND SALTS
    // =========================================================================
    S10_CH02: {
        code: "Science 02",
        name: "Acids, Bases and Salts",
        weight: 6,
        desc: "Master logarithmic hydronium ion dynamics, chemical indicator response matrices, biological pH homeostasis, the Chlor-Alkali industrial electrolysis suite, and crystallization waters of commercial salts.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Aqueous Electrolytic Architecture</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 02: Proton Exchange, Hydronium Dynamics & Salt Synthesis</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Ionic dissociation, pH measurement, and industrial Chlor-Alkali manufacturing</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> The Hydronium Ion ($H_3O^+$) as the Active Proton Carrier
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        A bare hydrogen ion ($H^+$) is simply an isolated proton with an enormous charge density of approximately $10^{14}$ times that of an ordinary ion. Consequently, <strong>$H^+$ cannot exist freely in an aqueous solution</strong>. The instant an acid dissociates, the proton bonds with polar water molecules via a coordinate covalent bond to form the stable <strong>Hydronium ion ($H_3O^+$)</strong>:
                        $$HCl + H_2O \rightarrow H_3O^+ + Cl^-$$
                        Without liquid water to solvate and accept the proton, an acid cannot exhibit acidic behavior. This explains why dry $HCl$ gas fails to turn dry blue litmus paper red.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🧪</span> The Logarithmic Mathematics of the pH Scale
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Invented in 1909 by Sørensen, $pH = -\log_{10}[H^+]$. Because the scale is logarithmic, a solution of $pH = 3$ has <strong>ten times</strong> the hydronium ion concentration of a solution at $pH = 4$, and <strong>one hundred times</strong> the concentration of $pH = 5$. Neutralization is fundamentally:
                            $$H^+_{(aq)} + OH^-_{(aq)} \rightarrow H_2O_{(l)} + 57.1\text{ kJ/mol (Exothermic)}$$
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🛡️</span> Biological pH Homeostasis Thresholds
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Life exists within narrow biochemical pH bands:
                            <br>&bull; <strong>Human Blood:</strong> Strictly buffered between $7.35$ and $7.45$.
                            <br>&bull; <strong>Acid Rain:</strong> Precipitation with $pH < 5.6$, which leaches toxic aluminum into rivers.
                            <br>&bull; <strong>Dental Decay:</strong> When oral $pH < 5.5$, tooth enamel ($Ca_5(PO_4)_3OH$) dissolves.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 Industrial Salts Manufacturing Pipeline</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Bleaching Powder</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">$Ca(OH)_2 + Cl_2 \rightarrow CaOCl_2 + H_2O$</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">2. Baking Soda</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">$NaCl + H_2O + CO_2 + NH_3 \rightarrow NaHCO_3$</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">3. Washing Soda</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">$Na_2CO_3 + 10H_2O \rightarrow Na_2CO_3 \cdot 10H_2O$</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">4. Plaster of Paris</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Heating Gypsum at $373\text{ K}$ $\rightarrow CaSO_4 \cdot \frac{1}{2}H_2O$</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Chemical & Olfactory Indicator Color Shift Directory</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Lab Diagnostics</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Indicator</th>
                                    <th class="p-2.5 border border-slate-700">Classification</th>
                                    <th class="p-2.5 border border-slate-700">Acidic Solution ($pH < 7$)</th>
                                    <th class="p-2.5 border border-slate-700">Neutral ($pH = 7$)</th>
                                    <th class="p-2.5 border border-slate-700">Basic Solution ($pH > 7$)</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Blue Litmus</td>
                                    <td class="p-2.5 border border-slate-700">Natural Lichen Dye</td>
                                    <td class="p-2.5 border border-slate-700 text-rose-400 font-bold">Turns Distinct Red</td>
                                    <td class="p-2.5 border border-slate-700">Remains Blue</td>
                                    <td class="p-2.5 border border-slate-700">No Change (Remains Blue)</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-rose-400">Red Litmus</td>
                                    <td class="p-2.5 border border-slate-700">Natural Lichen Dye</td>
                                    <td class="p-2.5 border border-slate-700">No Change (Remains Red)</td>
                                    <td class="p-2.5 border border-slate-700">Remains Red</td>
                                    <td class="p-2.5 border border-slate-700 text-blue-400 font-bold">Turns Distinct Blue</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-purple-400">Phenolphthalein</td>
                                    <td class="p-2.5 border border-slate-700">Synthetic Indicator</td>
                                    <td class="p-2.5 border border-slate-700 text-slate-400">Colorless</td>
                                    <td class="p-2.5 border border-slate-700 text-slate-400">Colorless</td>
                                    <td class="p-2.5 border border-slate-700 text-pink-400 font-bold">Vibrant Magenta Pink</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Methyl Orange</td>
                                    <td class="p-2.5 border border-slate-700">Synthetic Indicator</td>
                                    <td class="p-2.5 border border-slate-700 text-rose-400 font-bold">Turns Red</td>
                                    <td class="p-2.5 border border-slate-700 text-amber-300">Orange</td>
                                    <td class="p-2.5 border border-slate-700 text-yellow-300 font-bold">Turns Yellow</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">Olfactory (Vanilla / Clove)</td>
                                    <td class="p-2.5 border border-slate-700">Olfactory Ester</td>
                                    <td class="p-2.5 border border-slate-700 text-emerald-400">Odor Retained</td>
                                    <td class="p-2.5 border border-slate-700">Odor Retained</td>
                                    <td class="p-2.5 border border-slate-700 text-rose-400 font-bold">Odor Completely Destroyed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK CHLOR-ALKALI DERIVATION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Electrochemical Derivation of the Chlor-Alkali Process</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">Industrial Suite</span>
                    </div>

                    <div class="space-y-3 font-sans text-xs">
                        <p><strong>Process Definition:</strong> When electricity passes through aqueous sodium chloride (brine), it decomposes into sodium hydroxide, chlorine gas, and hydrogen gas.</p>
                        <div class="p-3.5 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-2 font-mono text-[11px]">
                            <p><strong>Step 1: Overall Electrolytic Decomposition Equation:</strong><br>
                            $$2\\text{NaCl}_{(aq)} + 2\\text{H}_2\\text{O}_{(l)} \\xrightarrow{\\text{Electrolysis}} 2\\text{NaOH}_{(aq)} + \\text{Cl}_{2(g)}\\uparrow + \\text{H}_{2(g)}\\uparrow$$</p>

                            <p><strong>Step 2: Half-Cell Electrode Reactions:</strong><br>
                            • <strong>At Anode (+ Electrode):</strong> $2\\text{Cl}^-_{(aq)} \\rightarrow \\text{Cl}_{2(g)} + 2e^-$ (Oxidation)<br>
                            • <strong>At Cathode (- Electrode):</strong> $2\\text{H}^+_{(aq)} + 2e^- \\rightarrow \\text{H}_{2(g)}$ (Reduction)<br>
                            • <strong>Near Cathode:</strong> Residual $Na^+$ and $OH^-$ associate into caustic $NaOH$ solution.</p>

                            <p><strong>Step 3: Industrial Utility Profiles:</strong><br>
                            • $Cl_2$ (Anode): Water disinfectant, PVC, bleaching powder synthesis.<br>
                            • $H_2$ (Cathode): Rocket fuel, industrial hydrogenation of vegetable oils, ammonia for fertilizers.<br>
                            • $NaOH$ (Cathode base): Metal de-greasing, paper manufacture, soap and detergent synthesis &emsp; &#9632;</p>
                        </div>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK PLASTER OF PARIS SYNTHESIS -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [3 Marks]: Plaster of Paris Formulation & Setting Mechanics</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Hydration Thermodynamics</span>
                    </div>

                    <div class="space-y-2 text-xs font-mono text-[11px] leading-relaxed">
                        <p><strong>Step 1: Controlled Thermal Synthesis (373 K):</strong><br>
                        $$\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}_{(s)} \\xrightarrow{373\\text{ K}} \\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}_{(s)} + 1\\frac{1}{2}\\text{H}_2\\text{O}_{(g)}$$
                        <em>Critical Condition:</em> Heating above $373\\text{ K}$ ($100^\\circ\\text{C}$) drives off all water, producing anhydrous 'dead burnt plaster' ($\\text{CaSO}_4$) which loses setting ability.</p>

                        <p><strong>Step 2: Half-Molecule Explanation:</strong><br>
                        Two formula units of $\\text{CaSO}_4$ share a single water molecule: $(2\\text{CaSO}_4) \\cdot \\text{H}_2\\text{O}$.</p>

                        <p><strong>Step 3: Setting Mechanism on Hydration:</strong><br>
                        $$\\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O} + 1\\frac{1}{2}\\text{H}_2\\text{O} \\rightarrow \\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O (Hard Gypsum)}$$
                        Sets into an interlocking crystalline solid in 10-15 minutes with slight volume expansion &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK CARBONATE GAS TEST -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: Gas Evolution from Metal Carbonates with Acids</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Gas Diagnostics</span>
                    </div>

                    <div class="space-y-2 text-xs font-mono text-[11px] leading-relaxed text-slate-300">
                        <p><strong>Step 1: Acid-Carbonate Reaction:</strong><br>
                        $$\\text{Na}_2\\text{CO}_{3(s)} + 2\\text{HCl}_{(aq)} \\rightarrow 2\\text{NaCl}_{(aq)} + \\text{H}_2\\text{O}_{(l)} + \\text{CO}_{2(g)}\\uparrow$$</p>
                        <p><strong>Step 2: Limewater Test (Short Duration):</strong><br>
                        $$\\text{Ca(OH)}_{2(aq)} + \\text{CO}_{2(g)} \\rightarrow \\text{CaCO}_{3(s)}\\downarrow\\text{ (white precipitate / milky)} + \\text{H}_2\\text{O}_{(l)}$$</p>
                        <p><strong>Step 3: Excess Gas Passage (Clearing Effect):</strong><br>
                        $$\\text{CaCO}_{3(s)} + \\text{H}_2\\text{O}_{(l)} + \\text{CO}_{2(g)} \\rightarrow \\text{Ca(HCO}_3)_{2(aq)}\\text{ (soluble, milkiness disappears)}$$ &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "Always dilute acid by adding acid slowly to water with constant stirring; never add water to concentrated acid to prevent explosive steam splattering."
        },
        diagnostics: [
            { q: "Tooth decay starts when the pH inside the oral cavity falls below:", difficulty: "Foundation Level", options: ["5.5", "6.5", "7.0", "7.4"], correct: 0, solution: "Tooth enamel is made of calcium hydroxyapatite, which dissolves when oral bacteria ferment sugars into acids below pH 5.5." },
            { q: "Why does dry hydrogen chloride (HCl) gas not turn dry blue litmus paper red?", difficulty: "Application Level", options: ["Absence of water prevents ionization into H+ and hydronium ions", "Dry HCl is an organic compound", "Litmus requires basic medium to function", "HCl gas evaporates before reacting"], correct: 0, solution: "Acids dissociate to form H+ and H3O+ ions only in the presence of water; dry gas cannot ionize on dry paper." },
            { q: "During the electrolysis of brine in the Chlor-Alkali process, chlorine gas is liberated at the:", difficulty: "Foundation Level", options: ["Anode (positive electrode)", "Cathode (negative electrode)", "Bottom of the cell", "Both electrodes equally"], correct: 0, solution: "Chloride ions (Cl-) migrate to the positive anode, where they lose electrons (oxidation) to form chlorine gas." },
            { q: "What happens when Plaster of Paris is mixed with water?", difficulty: "Foundation Level", options: ["It rehydrates into a hard solid mass of Gypsum", "It releases carbon dioxide gas", "It dissolves completely into clear solution", "It turns into slaked lime"], correct: 0, solution: "CaSO4·1/2H2O reacts with 1.5H2O to reform crystalline gypsum (CaSO4·2H2O), setting into a rigid structure." }
        ]
    },

    // =========================================================================
    // SCIENCE 03: METALS AND NON-METALS
    // =========================================================================
    S10_CH03: {
        code: "Science 03",
        name: "Metals and Non-metals",
        weight: 7,
        desc: "Study the reactivity series, chemical properties of metals, electron-dot ionic structures, extraction metallurgy (roasting, calcination, refining), and corrosion prevention.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Metallurgical & Bond Architecture</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 03: Electrostatic Bonding, The Activity Hierarchy & Metallurgy</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Ionic electron transfer, extraction of ores, and alloy chemistry</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> The Electron Transfer Lock: Ionic Crystal Lattice
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        Metals possess low ionization enthalpies with 1, 2, or 3 valence electrons, which they readily lose to achieve a noble-gas octet. Non-metals have high electron affinities and accept those electrons. The resulting cations ($M^{n+}$) and anions ($X^{m-}$) lock into a three-dimensional crystalline lattice held together by omnidirectional electrostatic attractive forces. Because ions are anchored in rigid lattices, ionic compounds have high melting points and are insulators in the solid state, but conduct electricity when molten or dissolved in water.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🧪</span> The Nitric Acid Paradox in Metal Reactions
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            While metals react with $HCl$ or $H_2SO_4$ to release hydrogen gas, <strong>$HNO_3$ does not evolve $H_2$ gas with most metals</strong>. Nitric acid is a powerful oxidizing agent; it oxidizes the generated $H_2$ into water ($H_2O$) while itself getting reduced to nitrogen oxides ($NO_2, NO, N_2O$). Only <strong>Magnesium ($Mg$)</strong> and <strong>Manganese ($Mn$)</strong> react with very dilute (1%) $HNO_3$ to liberate $H_2$ gas.
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>⛏️</span> Roasting vs. Calcination Thermal Regimes
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Ores are converted into metal oxides prior to carbon reduction:
                            <br>&bull; <strong>Roasting:</strong> Sulfide ores heated strongly in <strong>excess air</strong> below melting point ($2ZnS + 3O_2 \rightarrow 2ZnO + 2SO_2$).
                            <br>&bull; <strong>Calcination:</strong> Carbonate ores heated in <strong>limited or zero air</strong> to drive off $CO_2$ ($ZnCO_3 \rightarrow ZnO + CO_2$).
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 The Reactivity Hierarchy & Extraction Strategies</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-rose-500 font-bold block">Top: K, Na, Ca, Mg, Al</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">High affinity for oxygen. Extracted exclusively by <strong>electrolytic reduction of molten chlorides/oxides</strong>.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-amber-500 font-bold block">Middle: Zn, Fe, Pb, Cu</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Moderate reactivity. Extracted by <strong>roasting/calcination followed by carbon/coke reduction</strong>.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-emerald-500 font-bold block">Bottom: Ag, Au, Pt</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Noble unreactive metals found in free native metallic state. Refined by thermal or cyanide leaching.</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Master Chemical Behavior Matrix: Metals with Water & Reagents</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Reactivity Traps</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Metal Group</th>
                                    <th class="p-2.5 border border-slate-700">Reaction with Water</th>
                                    <th class="p-2.5 border border-slate-700">Equation & Temperature Regimes</th>
                                    <th class="p-2.5 border border-slate-700">Physical Observations & Traps</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-rose-400">Potassium & Sodium ($K, Na$)</td>
                                    <td class="p-2.5 border border-slate-700">Reacts violently with <strong>cold water</strong>.</td>
                                    <td class="p-2.5 border border-slate-700">$$2Na_{(s)} + 2H_2O_{(l)} \rightarrow 2NaOH_{(aq)} + H_{2(g)} + \text{Heat}$$</td>
                                    <td class="p-2.5 border border-slate-700">Exothermic reaction is so violent that evolved $H_2$ gas instantly catches fire with lilac/golden flame. Stored submerged in kerosene.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Calcium & Magnesium ($Ca, Mg$)</td>
                                    <td class="p-2.5 border border-slate-700">$Ca$ reacts with cold water; $Mg$ reacts only with <strong>hot water</strong>.</td>
                                    <td class="p-2.5 border border-slate-700">$$Mg_{(s)} + 2H_2O_{(hot)} \rightarrow Mg(OH)_{2(aq)} + H_{2(g)}$$</td>
                                    <td class="p-2.5 border border-slate-700">Both $Ca$ and $Mg$ <strong>float on water</strong> because bubbles of hydrogen gas adhere to the metal surface.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-cyan-400">Aluminum, Iron & Zinc ($Al, Fe, Zn$)</td>
                                    <td class="p-2.5 border border-slate-700">Do not react with cold or hot water; react only with <strong>steam</strong>.</td>
                                    <td class="p-2.5 border border-slate-700">$$3Fe_{(s)} + 4H_2O_{(g)} \rightarrow Fe_3O_{4(s)} + 4H_{2(g)}$$</td>
                                    <td class="p-2.5 border border-slate-700">Produces metal oxide (not hydroxide) and hydrogen gas. Iron forms magnetic oxide ($Fe_3O_4$).</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-slate-400">Lead, Copper, Silver, Gold</td>
                                    <td class="p-2.5 border border-slate-700">No reaction.</td>
                                    <td class="p-2.5 border border-slate-700">Zero reaction with water or steam at any temperature.</td>
                                    <td class="p-2.5 border border-slate-700">Rank below hydrogen in the electrochemical activity series.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK ELECTRON-DOT & ELECTROLYTIC REFINING -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Electron Transfer Derivation & Electrolytic Refining of Copper</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <div class="space-y-3 font-sans text-xs">
                        <p><strong>Part A: Electron-Dot Transfer Derivation for Magnesium Chloride ($MgCl_2$):</strong></p>
                        <div class="p-3.5 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1.5 font-mono text-[11px]">
                            <p>• Magnesium ($Mg, Z=12$): Electronic configuration $K=2, L=8, M=2$. Loses $2e^-$ to attain Neon octet:<br>
                            $$Mg \rightarrow Mg^{2+} + 2e^-$$</p>
                            <p>• Chlorine ($Cl, Z=17$): Electronic configuration $K=2, L=8, M=7$. Each chlorine gains $1e^-$ to attain Argon octet:<br>
                            $$2Cl + 2e^- \rightarrow 2Cl^-$$</p>
                            <p>• Transfer Representation: $[Mg]^{2+}[ :\ddot{Cl}: ]^-_2$. Electrostatic attraction binds ions into an ionic crystal.</p>
                        </div>

                        <p><strong>Part B: Electrolytic Refining of Blister Copper:</strong></p>
                        <div class="p-3.5 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1.5 font-mono text-[11px]">
                            <p>• <strong>Anode (+ Electrode):</strong> Thick block of impure crude blister copper.<br>
                            • <strong>Cathode (- Electrode):</strong> Thin strip of 100% pure copper metal.<br>
                            • <strong>Electrolyte:</strong> Acidified aqueous copper sulfate solution ($CuSO_4 + \text{dil. } H_2SO_4$).</p>
                            <p>• <strong>Electrode Reactions:</strong><br>
                            At Anode: $Cu_{(impure, s)} \rightarrow Cu^{2+}_{(aq)} + 2e^-$ (Anode dissolves into solution).<br>
                            At Cathode: $Cu^{2+}_{(aq)} + 2e^- \rightarrow Cu_{(pure, s)}$ (Pure copper plates onto cathode).<br>
                            • <strong>Anode Mud:</strong> Insoluble precious metal impurities (Gold, Silver, Platinum) settle below the anode as valuable anode mud &emsp; &#9632;</p>
                        </div>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK ROASTING VS CALCINATION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [3 Marks]: Extraction of Zinc: Roasting vs. Calcination</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Metallurgical Extraction</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-[11px]">
                        <div class="p-3 bg-surfaceLight rounded-lg border border-slate-700">
                            <strong class="text-amber-400 block mb-1">Roasting (Sulfide Ore: Zinc Blende, ZnS)</strong>
                            <p class="text-slate-300">Heating strongly in <strong>excess air</strong> below melting point:<br>
                            $$2ZnS_{(s)} + 3O_{2(g)} \\xrightarrow{\Delta} 2ZnO_{(s)} + 2SO_{2(g)}\\uparrow$$</p>
                        </div>
                        <div class="p-3 bg-surfaceLight rounded-lg border border-slate-700">
                            <strong class="text-emerald-400 block mb-1">Calcination (Carbonate Ore: Calamine, ZnCO3)</strong>
                            <p class="text-slate-300">Heating in <strong>limited / absent air</strong>:<br>
                            $$ZnCO_{3(s)} \\xrightarrow{\Delta} ZnO_{(s)} + CO_{2(g)}\\uparrow$$</p>
                        </div>
                    </div>
                    <p class="text-xs text-slate-300 font-mono"><strong>Carbon Reduction:</strong> $ZnO_{(s)} + C_{(coke)} \\xrightarrow{\Delta} Zn_{(s)} + CO_{(g)}\\uparrow$ &emsp; &#9632;</p>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK THERMITE REACTION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: Thermite Reaction for Joining Railway Tracks</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Thermite Welding</span>
                    </div>
                    <div class="space-y-2 text-xs font-mono text-[11px] leading-relaxed text-slate-300">
                        <p><strong>Chemical Equation:</strong><br>
                        $$\text{Fe}_2\text{O}_{3(s)} + 2\text{Al}_{(s)} \rightarrow 2\text{Fe}_{(l)}\text{ (molten iron)} + \text{Al}_2\text{O}_{3(s)} + \text{Enormous Heat}$$</p>
                        <p>• <strong>Mechanism:</strong> Aluminum is more reactive than iron, displacing it in an extremely exothermic displacement reaction.<br>
                        • <strong>Application:</strong> The heat liberated melts the produced iron, which flows directly into cracked railway joints to weld them permanently &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "Amphoteric oxides like Al2O3 and ZnO react with BOTH acids and bases to yield salt and water—always provide both balanced reactions in exams."
        },
        diagnostics: [
            { q: "Which metal reacts with dilute nitric acid (HNO3) to evolve hydrogen gas?", difficulty: "Foundation Level", options: ["Manganese (Mn) with 1% dilute HNO3", "Copper (Cu)", "Iron (Fe)", "Zinc (Zn)"], correct: 0, solution: "Nitric acid is a strong oxidizing agent; only Magnesium and Manganese react with very dilute (1%) HNO3 to liberate H2." },
            { q: "An electric wire coating is made of PVC (polyvinyl chloride) because:", difficulty: "Foundation Level", options: ["It is an electrical insulator", "It conducts current faster", "It prevents chemical reduction", "It increases melting point"], correct: 0, solution: "PVC is an electrical insulator that prevents current leakage and electric shocks." },
            { q: "In the electrolytic refining of copper, the anode consists of:", difficulty: "Foundation Level", options: ["A thick slab of impure crude copper", "A thin strip of pure copper", "A graphite rod", "A platinum plate"], correct: 0, solution: "The impure copper block is made the anode, which dissolves into the electrolyte as pure copper plates onto the cathode." },
            { q: "Aqua Regia, which dissolves noble metals like gold and platinum, is a mixture of:", difficulty: "Application Level", options: ["Conc. HCl and Conc. HNO3 in a 3:1 ratio", "Conc. HNO3 and Conc. HCl in a 3:1 ratio", "Dilute H2SO4 and Dilute HNO3 in a 1:1 ratio", "Conc. HCl and Conc. H2SO4 in a 2:1 ratio"], correct: 0, solution: "Aqua Regia is freshly prepared by mixing concentrated hydrochloric acid and concentrated nitric acid in a 3:1 ratio." }
        ]
    },

    // =========================================================================
    // SCIENCE 04: CARBON AND ITS COMPOUNDS
    // =========================================================================
    S10_CH04: {
        code: "Science 04",
        name: "Carbon and its Compounds",
        weight: 6,
        desc: "Master covalent bonding, tetravalency and catenation, homologous series, functional group nomenclature, combustion/addition/substitution reactions, ethanol and ethanoic acid chemistry, and micelle cleansing action.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Organic Structural Architecture</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 04: Covalent Geometry, Homologous Series & Functional Groups</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Tetravalency, catenation, esterification cycles, and micelle cleansing mechanics</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> The Quantum Dilemma: Why Carbon Shares Electrons
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        Carbon has atomic number 6 with electron configuration $(2, 4)$. To achieve a noble gas octet, it cannot comfortably gain 4 electrons to form $C^{4-}$ because 6 nuclear protons cannot hold 10 electrons; nor can it lose 4 electrons to form $C^{4+}$ due to the immense ionization energy required to remove 4 successive electrons. Carbon solves this by <strong>sharing electron pairs through covalent bonds</strong>. Combined with its small atomic radius, carbon forms strong, stable covalent chains, branches, and rings (<strong>Catenation</strong>).
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🧪</span> Homologous Series Properties
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            A homologous series is a family of organic compounds sharing the same functional group and general formula. Consecutive members differ by one $-CH_2-$ unit ($14\text{ u}$ in molecular mass). While physical properties (boiling point, melting point, density) show a regular gradation due to increasing van der Waals forces with molecular mass, chemical properties remain identical because the active functional group is unchanged.
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🧼</span> Micelle Cleansing Action Mechanics
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Soap molecules are sodium or potassium salts of long-chain fatty acids ($R-COO^-Na^+$):
                            <br>&bull; <strong>Ionic Hydrophilic Head:</strong> Water-soluble and polar.
                            <br>&bull; <strong>Hydrocarbon Hydrophobic Tail:</strong> Oil-soluble and non-polar.
                            <br>In water, tails cluster together inward around oily dirt droplets while polar heads point outward into water, forming spherical <strong>micelles</strong> that remain suspended until rinsed away.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 The Organic Reaction Suite</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Combustion</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">$CH_4 + 2O_2 \rightarrow CO_2 + 2H_2O + \text{Heat}$. Clean blue flame for saturated hydrocarbons.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">2. Oxidation</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Alkaline $KMnO_4$ or acidified $K_2Cr_2O_7$ oxidizes ethanol to ethanoic acid.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">3. Addition</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Unsaturated vegetable oils hydrogenated across $C=C$ bonds using Nickel catalyst at $473\text{ K}$.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">4. Substitution</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">$CH_4 + Cl_2 \\xrightarrow{\text{Sunlight}} CH_3Cl + HCl$. Free radical chlorine substitution.</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Master IUPAC Functional Group Directory & Nomenclature</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">IUPAC System</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Functional Class</th>
                                    <th class="p-2.5 border border-slate-700">Structural Formula</th>
                                    <th class="p-2.5 border border-slate-700">IUPAC Prefix / Suffix</th>
                                    <th class="p-2.5 border border-slate-700">Representative Example</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Haloalkane</td>
                                    <td class="p-2.5 border border-slate-700">$-Cl, -Br, -I$</td>
                                    <td class="p-2.5 border border-slate-700">Prefix: <em>chloro-, bromo-</em></td>
                                    <td class="p-2.5 border border-slate-700">$CH_3-CH_2-Cl$ (Chloroethane)</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-purple-400">Alcohol</td>
                                    <td class="p-2.5 border border-slate-700">$-OH$</td>
                                    <td class="p-2.5 border border-slate-700">Suffix: <em>-ol</em></td>
                                    <td class="p-2.5 border border-slate-700">$CH_3-CH_2-OH$ (Ethanol)</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-cyan-400">Aldehyde</td>
                                    <td class="p-2.5 border border-slate-700">$-CHO$ ($-\text{C}(=\text{O})\text{H}$)</td>
                                    <td class="p-2.5 border border-slate-700">Suffix: <em>-al</em></td>
                                    <td class="p-2.5 border border-slate-700">$CH_3-CHO$ (Ethanal)</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Ketone</td>
                                    <td class="p-2.5 border border-slate-700">$-C(=O)-$ (Non-terminal)</td>
                                    <td class="p-2.5 border border-slate-700">Suffix: <em>-one</em></td>
                                    <td class="p-2.5 border border-slate-700">$CH_3-CO-CH_3$ (Propanone, min. 3 carbons)</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-rose-400">Carboxylic Acid</td>
                                    <td class="p-2.5 border border-slate-700">$-COOH$</td>
                                    <td class="p-2.5 border border-slate-700">Suffix: <em>-oic acid</em></td>
                                    <td class="p-2.5 border border-slate-700">$CH_3-COOH$ (Ethanoic acid / Acetic acid)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3 font-mono text-xs">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400">2. Diagnostic Tests: Ethanol vs. Ethanoic Acid</h4>
                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Diagnostic Test</th>
                                    <th class="p-2.5 border border-slate-700">Ethanol ($C_2H_5OH$)</th>
                                    <th class="p-2.5 border border-slate-700">Ethanoic Acid ($CH_3COOH$)</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-300">Sodium Hydrogen Carbonate ($NaHCO_3$)</td>
                                    <td class="p-2.5 border border-slate-700 text-slate-400">No reaction; no effervescence observed.</td>
                                    <td class="p-2.5 border border-slate-700 text-emerald-400 font-bold">Brisk effervescence of colorless $CO_2$ gas that turns lime water milky.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-purple-300">Litmus Paper Test</td>
                                    <td class="p-2.5 border border-slate-700 text-slate-400">Neutral: No change on blue or red litmus.</td>
                                    <td class="p-2.5 border border-slate-700 text-rose-400 font-bold">Acidic: Turns blue litmus paper red.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK ESTERIFICATION & MICELLES -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Esterification-Saponification Cycle & Micelle Mechanics</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <div class="space-y-3 font-sans text-xs">
                        <p><strong>Part A: Esterification & Saponification Chemical Cycle:</strong></p>
                        <div class="p-3.5 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1.5 font-mono text-[11px]">
                            <p>• <strong>Esterification:</strong> Heating ethanoic acid with ethanol in the presence of concentrated sulfuric acid catalyst produces a sweet-smelling ester (ethyl ethanoate):<br>
                            $$CH_3COOH_{(l)} + C_2H_5OH_{(l)} \\xrightarrow{\text{Conc. } H_2SO_4} CH_3COOC_2H_{5(l)} + H_2O_{(l)}$$</p>
                            <p>• <strong>Saponification:</strong> Alkaline hydrolysis of an ester yields soap and alcohol:<br>
                            $$CH_3COOC_2H_5 + NaOH \rightarrow CH_3COONa\text{ (Soap)} + C_2H_5OH$$</p>
                        </div>

                        <p><strong>Part B: Micelle Formation and Soap Cleansing Action:</strong></p>
                        <div class="p-3.5 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1.5 font-mono text-[11px]">
                            <p>• <strong>Molecular Structure:</strong> Hydrophilic ionic head ($-COO^-Na^+$) and hydrophobic hydrocarbon tail ($C_{17}H_{35}-$).<br>
                            • <strong>Radial Assembly:</strong> Non-polar tails dissolve into central oil/grease dirt droplets, while ionic heads project radially into water.<br>
                            • <strong>Colloidal Emulsion:</strong> Like charges on the ionic heads repel, preventing coalescence. On agitation and rinsing, micelles carry the dirt away &emsp; &#9632;</p>
                        </div>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK HYDROGENATION OF OILS -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [3 Marks]: Catalytic Hydrogenation of Vegetable Oils</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Addition Reaction</span>
                    </div>

                    <div class="space-y-2 text-xs font-mono text-[11px] leading-relaxed text-slate-300">
                        <p><strong>Chemical Equation:</strong><br>
                        $$\text{R}_2\text{C}=\text{CR}_2\text{ (Unsaturated Liquid Oil)} + \text{H}_{2(g)} \\xrightarrow{\text{Ni Catalyst, } 473\text{ K}} \text{R}_2\text{CH}-\text{CHR}_2\text{ (Saturated Solid Fat)}$$</p>
                        <p>• <strong>Mechanism:</strong> Hydrogen adds across the carbon-carbon double bond ($C=C$) in the presence of finely divided Nickel catalyst.<br>
                        • <strong>Health Note:</strong> Vegetable oils containing unsaturated fatty acids are healthy; hydrogenation produces saturated fats containing trans-fatty acids which increase risk of cardiovascular disease &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK ETHANOL VS ETHANOIC ACID -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: Diagnostic Differentiation: Ethanol vs. Ethanoic Acid</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Chemical Test</span>
                    </div>

                    <div class="space-y-2 text-xs font-mono text-[11px] leading-relaxed text-slate-300">
                        <p><strong>1. Sodium Bicarbonate ($NaHCO_3$) Test:</strong><br>
                        • Ethanoic Acid: Rapid effervescence of colorless $CO_2$ gas: $$CH_3COOH + NaHCO_3 \rightarrow CH_3COONa + H_2O + CO_2\\uparrow$$
                        • Ethanol: No reaction, no effervescence.</p>
                        <p><strong>2. Litmus Paper Test:</strong><br>
                        • Ethanoic Acid turns blue litmus red; Ethanol is neutral and causes no color change &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "Use the sodium hydrogen carbonate test to distinguish ethanoic acid from ethanol in board practicals and theory."
        },
        diagnostics: [
            { q: "Which gas is evolved with brisk effervescence when ethanoic acid reacts with sodium hydrogen carbonate?", difficulty: "Foundation Level", options: ["Carbon dioxide (CO2)", "Hydrogen (H2)", "Carbon monoxide (CO)", "Sulfur dioxide (SO2)"], correct: 0, solution: "CH3COOH + NaHCO3 -> CH3COONa + H2O + CO2. The evolved CO2 turns lime water milky." },
            { q: "The conversion of ethanol to ethanoic acid using alkaline potassium permanganate is an example of:", difficulty: "Foundation Level", options: ["Oxidation reaction", "Addition reaction", "Substitution reaction", "Reduction reaction"], correct: 0, solution: "Alkaline KMnO4 acts as a powerful oxidizing agent that supplies oxygen to convert the alcohol into a carboxylic acid." },
            { q: "Unsaturated hydrocarbons add hydrogen in the presence of nickel catalyst to give saturated hydrocarbons in the:", difficulty: "Foundation Level", options: ["Addition reaction (Hydrogenation)", "Substitution reaction", "Esterification reaction", "Saponification reaction"], correct: 0, solution: "Vegetable oils (unsaturated fats) are hydrogenated across carbon-carbon double bonds into saturated vanaspati ghee using a nickel catalyst." },
            { q: "Why do soaps form an insoluble scum with hard water instead of lather?", difficulty: "Application Level", options: ["Calcium and magnesium ions in hard water react with soap to form insoluble precipitates", "Hard water contains dissolved sodium ions", "Soaps are acidic in nature", "Hard water evaporates soap molecules"], correct: 0, solution: "Soap molecules react with Ca2+ and Mg2+ ions present in hard water to form insoluble curdy precipitates known as scum." }
        ]
    },
// =========================================================================
    // SCIENCE 05: LIFE PROCESSES
    // =========================================================================
    S10_CH06: {
        code: "Science 05",
        name: "Life Processes",
        weight: 9,
        desc: "Exhaustive treatment of autotrophic photosynthesis, digestive enzyme cascades, three-pathway cellular respiration, human double circulation, and nephron counter-current ultrafiltration.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/90 to-slate-100 dark:from-slate-900 dark:to-emerald-950/40 border border-emerald-300/60 dark:border-emerald-900/40 space-y-5">
                <div class="border-b border-emerald-200 dark:border-emerald-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-emerald-900 text-emerald-200">Physiological & Metabolic Architecture</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 05: Biochemical Energy Pipelines, Internal Transport & Renal Clearance</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Enzyme catalysis, cellular ATP synthesis pathways, and counter-current renal ultrafiltration</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-emerald-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                        <span>⚡</span> Surface Area Maximization: Nature's Answer to Diffusion Limits
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        In microscopic unicellular organisms like <em>Amoeba</em>, simple passive diffusion across the plasma membrane satisfies all gas and nutrient demands because no cell part is far from the exterior. In multicellular humans, cell-to-surface distances exceed diffusion capabilities by factors of thousands. Biological systems resolve this bottleneck by folding functional membranes into fractal arrays: lungs expand into <strong>300 million micro-alveoli</strong> (yielding $80\\text{ m}^2$ of gas-exchange surface); the small intestine folds into <strong>millions of vascularized villi</strong>; and kidneys filter plasma through <strong>1.2 million microscopic nephron glomeruli</strong>.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🧪</span> Photosynthetic Phasing in Desert Plants
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Standard green plants open stomata during daylight to take in $CO_2$ while simultaneously absorbing photon energy via chlorophyll. <strong>Desert xerophytic plants cannot do this</strong> without rapid dehydration. They adapt by taking up $CO_2$ strictly at night through open stomata, storing it as an intermediate organic acid (malate), and enzymatically converting that stored carbon into glucose the next day when solar energy drives the light reactions.
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>❤️</span> Thermodynamic Pressure in Complete Double Circulation
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Warm-blooded birds and mammals maintain homeothermic body temperatures ($37^\\circ\\text{C}$ in humans), burning substantial metabolic energy. Complete septal separation into four heart chambers guarantees that fully oxygenated pulmonary blood ($pO_2 \\approx 95\\text{ mmHg}$) never blends with systemic venous return ($pO_2 \\approx 40\\text{ mmHg}$), enabling the high arterial pressures needed to oxygenate tissues against gravity.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-emerald-100/60 dark:bg-slate-900 rounded-xl border border-emerald-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-emerald-900 dark:text-emerald-200 uppercase tracking-wide">🔗 The 5 Master Biochemical Pipelines</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-emerald-600 dark:text-emerald-400 font-bold block">1. Photosynthesis</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Photolysis of $H_2O$, $NADPH$ generation, and enzymatic reduction of $CO_2$.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-emerald-600 dark:text-emerald-400 font-bold block">2. Digestion</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Amylase (mouth) &rarr; Pepsin (acidic stomach) &rarr; Trypsin/Lipase (alkaline duodenum).</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-emerald-600 dark:text-emerald-400 font-bold block">3. Glycolysis / Krebs</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Cytoplasmic glucose cleavage ($2\\text{ Pyruvate}$) &rarr; mitochondrial oxidation ($38\\text{ ATP}$).</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-emerald-600 dark:text-emerald-400 font-bold block">4. Circulation</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Pulmonary low-pressure oxygen loop &harr; systemic high-pressure nutrient loop.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-emerald-600 dark:text-emerald-400 font-bold block">5. Excretion</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Glomerular filtration ($180\\text{ L/day}$) &rarr; selective PCT reabsorption &rarr; $1.5\\text{ L}$ urine.</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <!-- PART A: COMPLETE DIGESTIVE ENZYME MATRIX -->
                <div class="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">1. Master Human Digestive Enzyme Cascade: Sites, Activation & Substrates</h4>
                        <span class="text-[10px] font-mono bg-emerald-900/60 text-emerald-200 px-2 py-0.5 rounded border border-emerald-700/60">Biochemical Suite</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Gland / Secretion</th>
                                    <th class="p-2.5 border border-slate-700">Enzymes Secreted</th>
                                    <th class="p-2.5 border border-slate-700">Operating pH & Medium</th>
                                    <th class="p-2.5 border border-slate-700">Substrate Targeted</th>
                                    <th class="p-2.5 border border-slate-700">Biochemical End Products</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">Salivary Glands</td>
                                    <td class="p-2.5 border border-slate-700">Salivary Amylase (Ptyalin)</td>
                                    <td class="p-2.5 border border-slate-700">Slightly acidic (pH 6.8)</td>
                                    <td class="p-2.5 border border-slate-700">Starch (Complex polysaccharide)</td>
                                    <td class="p-2.5 border border-slate-700">Maltose (Disaccharide sugar)</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Gastric Glands (Stomach)</td>
                                    <td class="p-2.5 border border-slate-700">Pepsin (secreted as inactive Pepsinogen), Mucus, $HCl$</td>
                                    <td class="p-2.5 border border-slate-700 text-rose-400 font-bold">Strongly acidic (pH 1.5–2.0)</td>
                                    <td class="p-2.5 border border-slate-700">Complex dietary proteins</td>
                                    <td class="p-2.5 border border-slate-700">Peptones, proteoses, and short peptides</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Liver (Bile Secretion)</td>
                                    <td class="p-2.5 border border-slate-700"><strong>Contains no digestive enzymes</strong>; contains bile salts and bile pigments</td>
                                    <td class="p-2.5 border border-slate-700 text-emerald-400 font-bold">Alkaline (pH 7.8–8.2)</td>
                                    <td class="p-2.5 border border-slate-700">Large insoluble lipid fat globules</td>
                                    <td class="p-2.5 border border-slate-700"><strong>Emulsified fat droplets</strong> (micelles), increasing surface area for lipase</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-cyan-400">Pancreas (Pancreatic Juice)</td>
                                    <td class="p-2.5 border border-slate-700">Trypsin, Chymotrypsin, Pancreatic Amylase, Pancreatic Lipase</td>
                                    <td class="p-2.5 border border-slate-700">Alkaline (pH 8.0 via pancreatic $HCO_3^-$)</td>
                                    <td class="p-2.5 border border-slate-700">Proteins, emulsified fats, residual starch</td>
                                    <td class="p-2.5 border border-slate-700">Dipeptides, mono/diglycerides, free fatty acids</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-purple-400">Small Intestine (Succus Entericus)</td>
                                    <td class="p-2.5 border border-slate-700">Peptidases, Maltase, Sucrase, Lactase, Intestinal Lipases</td>
                                    <td class="p-2.5 border border-slate-700">Alkaline (pH 8.0–8.3)</td>
                                    <td class="p-2.5 border border-slate-700">Intermediate peptones, disaccharides, lipids</td>
                                    <td class="p-2.5 border border-slate-700"><strong>Final monomers:</strong> Amino acids, Glucose, Fructose, Fatty acids & Glycerol</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- PART B: THE THREE PATHWAYS OF GLUCOSE BREAKDOWN -->
                <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                    <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span class="text-amber-400 font-bold uppercase tracking-wider text-xs">2. Complete Chemical Breakdown: The 3 Cellular Fates of Pyruvate</span>
                        <span class="text-[10px] text-slate-400 font-mono">Thermodynamics Suite</span>
                    </div>

                    <p class="text-xs text-slate-300 font-sans leading-relaxed">
                        The universal preliminary phase for all living cells is <strong>Glycolysis</strong> (in the cytoplasm):
                        <br><span class="font-mono text-emerald-400">$$\\text{Glucose (6C)} \\xrightarrow{\\text{Cytoplasm, 10 Enzymatic Steps}} 2\\text{ Pyruvate (3C)} + 2\\text{ ATP}$$</span>
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-[11px]">
                        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1.5">
                            <strong class="text-rose-400 block font-sans text-xs">A. Absence of $O_2$ (Yeast Fermentation)</strong>
                            <p class="text-slate-300">$$2\\text{ Pyruvate} \\rightarrow 2\\text{ Ethanol (2C)} + 2CO_2 + 2\\text{ ATP}$$</p>
                            <p class="text-[10px] text-slate-400 font-sans">Inefficient; high toxic buildup (yeast dies if alcohol $>13\\%$). Basis of industrial brewing and bakery bread rising.</p>
                        </div>
                        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1.5">
                            <strong class="text-amber-400 block font-sans text-xs">B. Lack of $O_2$ (Human Skeletal Muscle)</strong>
                            <p class="text-slate-300">$$2\\text{ Pyruvate} \\rightarrow 2\\text{ Lactic Acid (3C)} + 2\\text{ ATP}$$</p>
                            <p class="text-[10px] text-slate-400 font-sans">Anaerobic sprint metabolism. Lactic acid accumulation alters muscle pH, precipitating calcium phosphate and causing <strong>acute cramps</strong>.</p>
                        </div>
                        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1.5">
                            <strong class="text-emerald-400 block font-sans text-xs">C. Presence of $O_2$ (Mitochondria)</strong>
                            <p class="text-slate-300">$$2\\text{ Pyruvate} \\xrightarrow{+O_2} 6CO_2 + 6H_2O + 38\\text{ ATP}$$</p>
                            <p class="text-[10px] text-slate-400 font-sans">Full aerobic oxidation via Krebs cycle and electron transport chain. Generates 19 times more ATP per mole of glucose than fermentation.</p>
                        </div>
                    </div>
                </div>

                <!-- PART C: ARTERIES VS VEINS ANATOMICAL COMPARISON -->
                <div class="p-5 rounded-xl bg-surface border border-slate-800 space-y-3">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">3. Hemodynamic Comparison: Arteries vs. Veins vs. Capillaries</h4>
                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2 border border-slate-700">Anatomical Metric</th>
                                    <th class="p-2 border border-slate-700">Arteries</th>
                                    <th class="p-2 border border-slate-700">Veins</th>
                                    <th class="p-2 border border-slate-700">Capillaries</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2 border border-slate-700 font-bold text-indigo-400">Direction of Transport</td>
                                    <td class="p-2 border border-slate-700">Away from heart to organs and tissues</td>
                                    <td class="p-2 border border-slate-700">Toward heart from peripheral organs</td>
                                    <td class="p-2 border border-slate-700">Connects arterioles directly to venules</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-slate-700 font-bold text-purple-400">Internal Pressure & Flow</td>
                                    <td class="p-2 border border-slate-700">High hydrostatic pressure ($120/80\\text{ mmHg}$); rapid pulsatile flow</td>
                                    <td class="p-2 border border-slate-700">Low hydrostatic pressure ($5\\text{--}10\\text{ mmHg}$); smooth continuous flow</td>
                                    <td class="p-2 border border-slate-700">Extremely low velocity to maximize diffusion time</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-slate-700 font-bold text-cyan-400">Vascular Wall Morphology</td>
                                    <td class="p-2 border border-slate-700">Thick, elastic muscular walls (Tunica media) with narrow lumen</td>
                                    <td class="p-2 border border-slate-700">Thin muscular walls with wide lumen</td>
                                    <td class="p-2 border border-slate-700">Single layer of flattened endothelial squamous cells (one cell thick)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-slate-700 font-bold text-emerald-400">Internal Valve Architecture</td>
                                    <td class="p-2 border border-slate-700">Absent (high arterial pressure prevents reverse flow)</td>
                                    <td class="p-2 border border-slate-700 text-emerald-400 font-bold">Present (semilunar valves prevent venous backflow/pooling)</td>
                                    <td class="p-2 border border-slate-700">Absent</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK DOUBLE CIRCULATION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 1 [5 Marks]: Hemodynamic Derivation of Human Double Circulation</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <div class="space-y-3 font-sans text-xs">
                        <p><strong>Systemic Definition:</strong> Blood passes through the human heart twice during each complete bodily cycle, maintaining total physical separation of deoxygenated and oxygenated streams.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                            <div class="p-3.5 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs border border-slate-800 space-y-1.5">
                                <strong class="text-cyan-400 block font-sans">Circuit 1: Pulmonary Circulation (Heart &harr; Lungs)</strong>
                                <p>1. Deoxygenated venous blood enters <strong>Right Atrium</strong> via Vena Cava.</p>
                                <p>2. Right Atrial systole opens tricuspid valve, filling <strong>Right Ventricle</strong>.</p>
                                <p>3. Right Ventricular systole pumps blood via <strong>Pulmonary Artery</strong> to pulmonary capillaries for gas exchange ($CO_2$ release, $O_2$ uptake).</p>
                            </div>

                            <div class="p-3.5 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs border border-slate-800 space-y-1.5">
                                <strong class="text-rose-400 block font-sans">Circuit 2: Systemic Circulation (Heart &harr; Body Tissues)</strong>
                                <p>1. Oxygenated blood returns via <strong>Pulmonary Veins</strong> into <strong>Left Atrium</strong>.</p>
                                <p>2. Left Atrial systole opens bicuspid (mitral) valve, filling muscular <strong>Left Ventricle</strong>.</p>
                                <p>3. Left Ventricle contracts forcefully, ejecting oxygenated blood via <strong>Aorta</strong> at 120 mmHg to sustain systemic metabolic demand &emsp; &#9632;</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 5-MARK NEPHRON ULTRAFILTRATION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [5 Marks]: Nephron Physiology & 3-Step Urine Formation</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Renal Clearance</span>
                    </div>

                    <div class="space-y-3 font-mono text-xs text-slate-300">
                        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1">
                            <strong class="text-indigo-400 block font-sans text-xs">1. Glomerular Ultrafiltration:</strong>
                            <p>Wider afferent arteriole vs. narrower efferent arteriole generates high hydrostatic pressure across glomerular fenestrations. $180\\text{ Liters/day}$ of plasma filtrate (water, glucose, amino acids, urea) passes into Bowman's capsule; blood cells and large proteins are retained.</p>
                        </div>
                        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1">
                            <strong class="text-emerald-400 block font-sans text-xs">2. Selective Tubular Reabsorption:</strong>
                            <p>Along Proximal Convoluted Tubule (PCT) and Loop of Henle, 100% of vital glucose, amino acids, and majority of $Na^+$ and water are actively/osmotically reabsorbed back into peritubular capillaries.</p>
                        </div>
                        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1">
                            <strong class="text-amber-400 block font-sans text-xs">3. Tubular Secretion:</strong>
                            <p>Residual wastes ($K^+$, $H^+$, creatinine) are actively secreted from capillaries into DCT, concentrating $180\\text{ L}$ of filtrate into $1.5\\text{ L}$ of final hypertonic urine &emsp; &#9632;</p>
                        </div>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK GLUCOSE BREAKDOWN PATHWAYS -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: The 3 Cellular Fates of Pyruvate</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Bioenergetics</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>Universal Step 1:</strong> Glucose (6C) $\\xrightarrow{\\text{Cytoplasm}}$ 2 Pyruvate (3C) + 2 ATP.</p>
                        <p><strong>Path A (Yeast / Anaerobic):</strong> Pyruvate $\\xrightarrow{\\text{No } O_2}$ Ethanol (2C) + $CO_2$ + 2 ATP.</p>
                        <p><strong>Path B (Muscle / Oxygen Shortage):</strong> Pyruvate $\\xrightarrow{\\text{Lack of } O_2}$ Lactic Acid (3C) + 2 ATP (causes muscle cramps).</p>
                        <p><strong>Path C (Mitochondria / Aerobic):</strong> Pyruvate $\\xrightarrow{+O_2}$ $6CO_2 + 6H_2O + 38\\text{ ATP}$ &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "State all three steps in nephron urine formation: Glomerular Ultrafiltration, Selective Tubular Reabsorption, and Tubular Secretion to earn full marks."
        },
        diagnostics: [
            { q: "Which structural feature prevents the backflow of deoxygenated blood within human veins?", difficulty: "Foundation Level", options: ["Semilunar internal valves", "Thick elastic muscular walls", "Narrow vascular lumen", "High arterial pressure"], correct: 0, solution: "Veins operate under low hydrostatic pressures; semilunar valves prevent venous pooling and backflow." },
            { q: "During intense exercise, accumulation of which chemical causes muscle cramps?", difficulty: "Foundation Level", options: ["Lactic acid", "Ethanol", "Carbonic acid", "Pyruvic acid"], correct: 0, solution: "Anaerobic respiration in human muscle tissue produces lactic acid, which crystallizes and triggers acute muscle fatigue and cramps." },
            { q: "What is the primary function of bile salts in the human digestive system?", difficulty: "Application Level", options: ["Emulsification of large fat globules into tiny droplets", "Hydrolysis of starch into maltose", "Activation of gastric pepsinogen", "Active absorption of amino acids"], correct: 0, solution: "Bile salts break large fat droplets into tiny micelles (emulsification), increasing surface area for lipase action." },
            { q: "Out of 180 Liters of daily glomerular filtrate in a healthy human adult, the volume of urine excreted per day is:", difficulty: "Foundation Level", options: ["1.5 to 2.0 Liters", "18 Liters", "50 Liters", "0.5 Liters"], correct: 0, solution: "Over 99% of primary filtrate is selectively reabsorbed along the nephron tubules, leaving 1.5 to 2.0 L of concentrated urine daily." }
        ]
    },

    // =========================================================================
    // SCIENCE 06: CONTROL AND COORDINATION
    // =========================================================================
    S10_CH07: {
        code: "Science 06",
        name: "Control and Coordination",
        weight: 6,
        desc: "Exhaustive treatment of polarized neuronal impulse transmission, unidirectional synaptic neurotransmitter dynamics, human brain anatomy, reflex arc physiology, phytohormone growth tropisms, and the master endocrine feedback loop.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Electrochemical & Endocrine Signaling</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 06: Synaptic Neurotransmission, Central Nervous Processing & Phytohormones</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Ionic depolarization, involuntary autonomic centers, and hormonal feedback control</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> Fast Point-to-Point Wires vs. Diffuse Endocrine Broadcasts
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        Multicellular coordination uses two complementary communication networks:
                        <br>&bull; <strong>The Nervous System:</strong> High-speed point-to-point electrochemical signals ($100\\text{ m/s}$) carried along axons to target muscle fibers. Because neurons require physical synapsing, they cannot innervate every cell.
                        <br>&bull; <strong>The Endocrine System:</strong> Chemical messengers (hormones) secreted directly into the bloodstream without ducts, circulating through tissues to instruct cells carrying specific surface receptor proteins.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🧠</span> The One-Way Valve of the Synapse
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Electrical impulses move along an axon via sodium-potassium voltage gates. At the terminal bulb, the impulse triggers neurotransmitter vesicles (e.g., acetylcholine) to exocytose into the synaptic cleft (20 nm). Because neurotransmitter vesicles exist exclusively in axonal terminals, and chemical receptor gates reside solely on receiving dendrites, <strong>nerve impulses cannot propagate backward</strong>.
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🌱</span> Turgor Shifts vs. Auxin Growth Tropisms
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Plants exhibit two types of movement:
                            <br>&bull; <strong>Nastic Turgor Movement (Non-directional):</strong> The immediate folding of <em>Mimosa pudica</em> leaves upon touch, driven by rapid potassium efflux and water drainage from pulvini cells.
                            <br>&bull; <strong>Tropic Growth Movement (Directional):</strong> Phototropic bending toward sunlight, driven by auxin diffusing to shaded stem sides and stimulating differential cell elongation.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 The Brain Tripartite Functional Ladder</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Forebrain (Cerebrum)</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Conscious thought, memory, voluntary muscle actions, and sensory integration.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">2. Midbrain</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Coordinates auditory and visual reflexes, including pupillary diameter adjustment.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">3. Hindbrain</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans"><strong>Cerebellum:</strong> Posture and motor balance; <strong>Medulla:</strong> Heartbeat, BP, vomiting; <strong>Pons:</strong> Respiration.</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Master Human Endocrine Gland Directory & Clinical Deficiencies</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Hormonal Suite</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Gland</th>
                                    <th class="p-2.5 border border-slate-700">Hormone Secreted</th>
                                    <th class="p-2.5 border border-slate-700">Physiological Function</th>
                                    <th class="p-2.5 border border-slate-700">Clinical Pathology (Deficiency / Excess)</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Pituitary Gland<br><span class="text-[10px] text-slate-400 font-normal">(Master Gland)</span></td>
                                    <td class="p-2.5 border border-slate-700">Growth Hormone (GH)</td>
                                    <td class="p-2.5 border border-slate-700">Stimulates epiphyseal bone elongation and somatic cellular protein synthesis.</td>
                                    <td class="p-2.5 border border-slate-700">Deficiency in childhood: <strong>Dwarfism</strong>; Hypersecretion in youth: <strong>Gigantism</strong> / Acromegaly.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-purple-400">Thyroid Gland</td>
                                    <td class="p-2.5 border border-slate-700">Thyroxine ($T_4$) & $T_3$ (Requires trace Iodine)</td>
                                    <td class="p-2.5 border border-slate-700">Coordinates basal metabolic rate (BMR) for carbohydrates, fats, and proteins.</td>
                                    <td class="p-2.5 border border-slate-700 text-rose-400 font-bold"><strong>Goitre:</strong> Dietary iodine deficiency causes thyroid enlargement, swelling the neck.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">Pancreas<br><span class="text-[10px] text-slate-400 font-normal">(Islets of Langerhans)</span></td>
                                    <td class="p-2.5 border border-slate-700">Insulin (beta cells) & Glucagon (alpha cells)</td>
                                    <td class="p-2.5 border border-slate-700">Insulin converts excess blood glucose to hepatic glycogen; glucagon elevates blood sugar.</td>
                                    <td class="p-2.5 border border-slate-700 text-rose-400 font-bold"><strong>Diabetes Mellitus:</strong> Inadequate insulin leads to high blood sugar and glucosuria.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Adrenal Gland<br><span class="text-[10px] text-slate-400 font-normal">(Adrenal Medulla)</span></td>
                                    <td class="p-2.5 border border-slate-700">Adrenaline (Epinephrine)</td>
                                    <td class="p-2.5 border border-slate-700">"Fight-or-flight" hormone: elevates heart rate, blood pressure, and breathing while constricting skin arterioles.</td>
                                    <td class="p-2.5 border border-slate-700">Prepares the body for immediate, acute physical response to danger.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-cyan-400">Testes / Ovaries</td>
                                    <td class="p-2.5 border border-slate-700">Testosterone / Estrogen & Progesterone</td>
                                    <td class="p-2.5 border border-slate-700">Drives secondary sexual maturation, gametogenesis, and menstrual cycle regulation.</td>
                                    <td class="p-2.5 border border-slate-700">Incomplete pubertal maturation; fertility impairment.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- PART B: PHYTOHORMONE ACTION MATRIX -->
                <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">2. Phytohormone Behavioral Spectrum: Growth Promoters vs. Inhibitors</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-sans text-xs">
                        <div class="p-3 bg-surface rounded-xl border border-slate-800 space-y-1">
                            <strong class="text-indigo-400 block font-mono">1. Auxins</strong>
                            <p class="text-slate-400 text-[11px] leading-relaxed">Synthesized at shoot tips. Promotes cell elongation, apical dominance, and phototropic bending toward light.</p>
                        </div>
                        <div class="p-3 bg-surface rounded-xl border border-slate-800 space-y-1">
                            <strong class="text-purple-400 block font-mono">2. Gibberellins</strong>
                            <p class="text-slate-400 text-[11px] leading-relaxed">Stimulates internodal stem elongation, breaks seed and bud dormancy, and promotes fruit growth.</p>
                        </div>
                        <div class="p-3 bg-surface rounded-xl border border-slate-800 space-y-1">
                            <strong class="text-emerald-400 block font-mono">3. Cytokinins</strong>
                            <p class="text-slate-400 text-[11px] leading-relaxed">Promotes active cytokinesis (cell division); present in high concentrations in developing fruits and seeds.</p>
                        </div>
                        <div class="p-3 bg-surface rounded-xl border border-slate-800 space-y-1">
                            <strong class="text-rose-400 block font-mono">4. Abscisic Acid (ABA)</strong>
                            <p class="text-slate-400 text-[11px] leading-relaxed">Natural plant growth inhibitor. Induces stomatal closure during drought stress and triggers leaf wilting and falling.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK REFLEX ARC -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Structural Architecture of the Reflex Arc</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <div class="space-y-3 font-sans text-xs">
                        <p><strong>Definition:</strong> A reflex action is an involuntary, rapid motor response to an environmental hazard that bypasses cerebral processing to prevent tissue trauma.</p>
                        <div class="p-4 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs border border-slate-800 space-y-2">
                            <p class="text-indigo-300 font-bold">Step-by-Step Circuit Trajectory:</p>
                            <p>1. <strong>Receptor (Skin thermoreceptors):</strong> Detects acute thermal stimulus from touching a hot vessel.</p>
                            <p>2. <strong>Sensory (Afferent) Neuron:</strong> Converts physical signal into an action potential and conducts it through the dorsal nerve root into the spinal cord.</p>
                            <p>3. <strong>Relay Neuron (Spinal Cord Gray Matter):</strong> Synapses directly with a motor neuron while sending an ascending sensory branch to the brain.</p>
                            <p>4. <strong>Motor (Efferent) Neuron:</strong> Carries outgoing motor command through the ventral root to the arm.</p>
                            <p>5. <strong>Effector (Biceps muscle):</strong> Rapidly contracts, withdrawing the hand before conscious pain is processed &emsp; &#9632;</p>
                        </div>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK AUXIN PHOTOTROPISM -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [3 Marks]: Auxin Diffusion Mechanism in Phototropism</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Plant Tropism</span>
                    </div>

                    <div class="space-y-2 pl-3 border-l-2 border-emerald-500 font-mono text-xs text-slate-300">
                        <p><strong>1. Unilateral Light Exposure:</strong> When light strikes a growing seedling from one side, auxin synthesized at the shoot apex migrates toward the <strong>shaded side</strong>.</p>
                        <p><strong>2. Differential Cell Elongation:</strong> The higher auxin concentration on the shaded side causes those cells to elongate faster than cells on the illuminated side.</p>
                        <p><strong>3. Resultant Curvature:</strong> The uneven growth rate forces the shoot tip to bend toward the light source (Positive Phototropism) &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK SYNAPTIC TRANSMISSION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: Unidirectional Transmission at Chemical Synapses</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Neurophysiology</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>Mechanism:</strong> When an electrical impulse reaches the axon terminal, it causes synaptic vesicles to fuse with the presynaptic membrane and release neurotransmitters (e.g. acetylcholine) into the synaptic cleft.</p>
                        <p><strong>One-Way Valve Rule:</strong> Neurotransmitters bind to specific protein receptors located <em>only on the post-synaptic dendritic membrane</em>, triggering a new electrical impulse. Because dendrites cannot secrete neurotransmitters and axon terminals lack receptors, impulses travel in one direction only &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "Remember the 3 parts of the hindbrain: Cerebellum (body posture & balance), Medulla (involuntary heartbeat/BP/vomiting), and Pons (respiratory rhythm)."
        },
        diagnostics: [
            { q: "Which plant hormone is primarily responsible for the wilting and falling of leaves?", difficulty: "Foundation Level", options: ["Abscisic acid (ABA)", "Auxin", "Gibberellin", "Cytokinin"], correct: 0, solution: "Abscisic acid (ABA) is a natural growth inhibitor that triggers leaf senescence, abscission, and stomatal closure." },
            { q: "In a neuron, conversion of an electrical action potential into a chemical signal occurs at the:", difficulty: "Application Level", options: ["Axonal terminal end bulb", "Dendritic branching tip", "Cell body (Soma)", "Myelin sheath junction"], correct: 0, solution: "Depolarization at the axonal terminal causes neurotransmitter vesicles to release chemical signaling molecules across the synaptic cleft." },
            { q: "Dietary iodine is essential for human health because it is required for the synthesis of:", difficulty: "Foundation Level", options: ["Thyroxine", "Insulin", "Adrenaline", "Growth Hormone"], correct: 0, solution: "The thyroid gland requires trace iodine to synthesize thyroxine, which regulates basal metabolic rate." },
            { q: "Which part of the human brain controls involuntary actions like blood pressure, salivation, and vomiting?", difficulty: "Foundation Level", options: ["Medulla in the hindbrain", "Cerebrum in the forebrain", "Cerebellum in the hindbrain", "Midbrain"], correct: 0, solution: "The medulla oblongata in the hindbrain controls autonomic, involuntary vital functions including respiration, heart rate, and vomiting reflexes." }
        ]
    },

    // =========================================================================
    // SCIENCE 07: HOW DO ORGANISMS REPRODUCE?
    // =========================================================================
    S10_CH08: {
        code: "Science 07",
        name: "How do Organisms Reproduce?",
        weight: 8,
        desc: "Exhaustive treatment of DNA replication, asexual modes, angiosperm double fertilization and triple fusion, human male/female reproductive anatomy, and barrier, chemical, IUCD, and surgical contraception.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Replication & Developmental Biology</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 07: DNA Replication, Angiosperm Syngamy & Human Embryology</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Gametogenesis, double fertilization, placental exchange, and reproductive barrier mechanics</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> DNA Replication: Fidelity vs. Evolutionary Variation
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        Reproduction at the molecular level is built on <strong>DNA replication</strong>. If replication were 100% error-free, all progeny would be identical clones, leaving the population vulnerable to extinction from environmental changes (such as temperature swings or viral outbreaks). Slight biochemical copying errors produce <strong>variations</strong>. These variations provide the genetic diversity that allows populations to adapt to changing niches over time.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🌺</span> Double Fertilization: Angiosperm Nutritional Adaptations
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Angiosperms evolved a specialized reproductive mechanism: two male gamete nuclei enter the embryo sac through the pollen tube. One gamete fertilizes the female egg cell to form the diploid zygote ($2n$). The second male gamete fuses with two central polar nuclei to form the triploid <strong>Primary Endosperm Nucleus ($3n$)</strong>, ensuring nutrient-rich endosperm tissue develops to nourish the growing embryo.
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>👶</span> Placental Hemodynamics: Maternal-Fetal Exchange
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            The human embryo implants into the uterine endometrium, developing a specialized disc-shaped organ called the <strong>Placenta</strong>. Embryonic chorionic villi interdigitate into maternal blood pools without direct vascular mixing, enabling glucose, amino acids, and oxygen to diffuse inward while metabolic urea and $CO_2$ diffuse outward into the maternal bloodstream for excretion.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 The 4 Contraceptive Method Classes</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Barrier Methods</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Condoms and diaphragms. Only method that prevents STIs (HIV, Syphilis, Gonorrhea).</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-purple-600 dark:text-purple-400 font-bold block">2. Chemical (Hormonal)</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Oral hormonal pills alter endocrine balances to prevent ovulation.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-emerald-600 dark:text-emerald-400 font-bold block">3. Intrauterine (IUCD)</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Copper-T inserted into uterus blocks blastocyst implantation.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-rose-600 dark:text-rose-400 font-bold block">4. Surgical Sterilization</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Vasectomy (vas deferens severed in males) vs. Tubectomy (fallopian tubes blocked in females).</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <!-- PART A: ASEXUAL TAXONOMY MATRIX -->
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Master Asexual Reproduction Taxonomy & Morphological Criteria</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Asexual Suite</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Mode</th>
                                    <th class="p-2.5 border border-slate-700">Organism Examples</th>
                                    <th class="p-2.5 border border-slate-700">Cellular Mechanism & Plane of Division</th>
                                    <th class="p-2.5 border border-slate-700">Special Biological Features</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Binary Fission</td>
                                    <td class="p-2.5 border border-slate-700"><em>Amoeba</em> (any plane), <em>Leishmania</em> (longitudinal plane)</td>
                                    <td class="p-2.5 border border-slate-700">Nuclear karyokinesis followed by cytoplasmic cytokinesis divides parent cell into two daughter cells.</td>
                                    <td class="p-2.5 border border-slate-700"><em>Leishmania</em> (kala-azar parasite) features a whip-like flagellum at one end, restricting division strictly to a longitudinal plane.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-purple-400">Multiple Fission</td>
                                    <td class="p-2.5 border border-slate-700"><em>Plasmodium</em> (Malarial parasite)</td>
                                    <td class="p-2.5 border border-slate-700">Parent cell forms a protective cyst. The nucleus undergoes repeated mitotic divisions, producing many daughter nuclei before the cyst ruptures.</td>
                                    <td class="p-2.5 border border-slate-700">Enables rapid population expansion under adverse conditions within host tissues.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-cyan-400">Budding</td>
                                    <td class="p-2.5 border border-slate-700"><em>Hydra</em> (multicellular), <em>Yeast</em> (unicellular)</td>
                                    <td class="p-2.5 border border-slate-700">Repeated mitotic cell divisions at a specific site develop an outgrowth (bud) that detaches upon maturity.</td>
                                    <td class="p-2.5 border border-slate-700">Uses regenerative cells. Detached daughter hydra is genetically identical to the parent.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Spore Formation</td>
                                    <td class="p-2.5 border border-slate-700"><em>Rhizopus</em> (Bread mould fungus)</td>
                                    <td class="p-2.5 border border-slate-700">Hyphae develop bulbous terminal structures called <strong>sporangia</strong>, which contain thick-walled spores.</td>
                                    <td class="p-2.5 border border-slate-700">Thick spore walls resist high heat, desiccation, and adverse environments until contacting moist bread.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">Vegetative Propagation</td>
                                    <td class="p-2.5 border border-slate-700"><em>Bryophyllum</em> (leaf notches), Potato (tubers)</td>
                                    <td class="p-2.5 border border-slate-700">Adventitious buds in leaf margins drop onto moist soil and root into independent plants.</td>
                                    <td class="p-2.5 border border-slate-700">Allows seedless plants (banana, rose, jasmine) to reproduce while preserving parental traits.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK DOUBLE FERTILIZATION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Double Fertilization & Triple Fusion in Angiosperms</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <div class="space-y-3 font-mono text-xs">
                        <div class="p-3.5 bg-slate-900 text-slate-200 rounded-xl border border-slate-800 space-y-1.5">
                            <strong class="text-indigo-400 block font-sans text-xs">Phase 1: Pollen Germination & Chemotropic Tube Growth:</strong>
                            <p>1. Pollen lands on sticky stigma and germinates a pollen tube stimulated by stigmatic secretions.</p>
                            <p>2. Pollen tube grows through the style toward the ovary via positive chemotropism.</p>
                            <p>3. Generative nucleus divides into <strong>two haploid male gametes ($n$)</strong>.</p>
                        </div>

                        <div class="p-3.5 bg-slate-900 text-slate-200 rounded-xl border border-slate-800 space-y-1.5">
                            <strong class="text-emerald-400 block font-sans text-xs">Phase 2: Syngamy and Triple Fusion:</strong>
                            <p>Tube enters embryo sac through micropyle, releasing both male gametes:</p>
                            <p>&bull; <strong>Syngamy:</strong> 1st male gamete ($n$) + egg cell ($n$) &rarr; Diploid <strong>Zygote ($2n$)</strong>, which develops into the future embryo.</p>
                            <p>&bull; <strong>Triple Fusion:</strong> 2nd male gamete ($n$) + 2 polar nuclei ($n+n$) &rarr; Triploid <strong>Primary Endosperm Nucleus ($3n$)</strong>, which forms nutritive endosperm tissue.</p>
                            <p class="text-emerald-300 font-bold pt-1 font-sans">Two distinct fertilizations within the same embryo sac &rArr; <strong>Double Fertilization</strong> &emsp; &#9632;</p>
                        </div>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK PLACENTAL METABOLISM -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [3 Marks]: Hemodynamics of the Placenta in Embryonic Development</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Fetal Physiology</span>
                    </div>

                    <div class="space-y-2 text-xs font-mono text-[11px] leading-relaxed text-slate-300">
                        <p><strong>1. Structural Organization:</strong> The placenta is a specialized disc-like vascular organ embedded in the uterine wall containing chorionic villi on the embryo side surrounded by maternal blood spaces.</p>
                        <p><strong>2. Inward Nutrient Transport:</strong> Provides a massive surface area for diffusion of glucose, amino acids, and oxygen from maternal blood into the developing embryo.</p>
                        <p><strong>3. Outward Waste Elimination:</strong> Carbon dioxide, urea, and other metabolic wastes generated by the embryo diffuse across the placental membrane into maternal blood for excretion &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK CONTRACEPTIVE MATRIX -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: Comparative Classification of Contraceptive Methods</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Reproductive Health</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs font-mono text-[11px]">
                        <div class="p-2.5 bg-surfaceLight rounded-lg border border-slate-700">
                            <strong class="text-indigo-400 block mb-1">Mechanical Barriers (Condoms)</strong>
                            <p class="text-slate-300">Blocks sperm from reaching ovum. <em>Unique benefit:</em> Only method providing dual protection against STIs (HIV, Syphilis).</p>
                        </div>
                        <div class="p-2.5 bg-surfaceLight rounded-lg border border-slate-700">
                            <strong class="text-emerald-400 block mb-1">Chemical Hormonal Pills</strong>
                            <p class="text-slate-300">Alters hormonal balance to prevent ovulation and egg release; does not prevent STIs.</p>
                        </div>
                        <div class="p-2.5 bg-surfaceLight rounded-lg border border-slate-700">
                            <strong class="text-rose-400 block mb-1">Surgical Sterilization</strong>
                            <p class="text-slate-300">Vasectomy (vas deferens cut/tied) or Tubectomy (fallopian tubes blocked); permanent and irreversible &emsp; &#9632;</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "Double fertilization consists of Syngamy (Egg + Sperm = 2n Zygote) and Triple Fusion (2 Polar Nuclei + Sperm = 3n Endosperm)."
        },
        diagnostics: [
            { q: "The site of fertilization in the human female reproductive tract is the:", difficulty: "Foundation Level", options: ["Fallopian tube (Oviduct)", "Uterus", "Ovary", "Cervix"], correct: 0, solution: "Fertilization occurs in the ampullary region of the Fallopian tube (oviduct)." },
            { q: "In flowering plants, the endosperm nucleus formed after triple fusion has a ploidy of:", difficulty: "Application Level", options: ["Triploid (3n)", "Diploid (2n)", "Haploid (n)", "Tetraploid (4n)"], correct: 0, solution: "Triple fusion combines one haploid male gamete (n) with two haploid polar nuclei (n + n), producing a triploid (3n) endosperm nucleus." },
            { q: "Which contraceptive method provides dual protection against pregnancy AND sexually transmitted infections (STIs)?", difficulty: "Foundation Level", options: ["Condoms (Mechanical barrier)", "Oral contraceptive pills", "Copper-T (IUCD)", "Tubectomy"], correct: 0, solution: "Mechanical barrier methods like condoms prevent direct mucosal contact, protecting against STIs such as HIV, Gonorrhea, and Syphilis." },
            { q: "In Bryophyllum, vegetative propagation occurs through buds produced on the:", difficulty: "Foundation Level", options: ["Notches along the leaf margins", "Stem nodes", "Root tubers", "Flower petals"], correct: 0, solution: "Adventitious buds develop in notches along the leaf margins of Bryophyllum and grow into new plantlets when contacting moist soil." }
        ]
    },

    // =========================================================================
    // SCIENCE 08: HEREDITY
    // =========================================================================
    S10_CH09: {
        code: "Science 08",
        name: "Heredity",
        weight: 4,
        desc: "Exhaustive treatment of Mendelian genetics, monohybrid/dihybrid crosses, laws of segregation and independent assortment, and human chromosomal sex determination.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Transmission Genetics</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 08: Particulate Inheritance, Dihybrid Segregation & Sex Chromosomes</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Allelic dominance, independent assortment, and paternal sex determination mechanics</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> Particulate Inheritance vs. Blending Theory
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        Before Gregor Mendel, biologists assumed inheritance worked like blending paint: crossing a tall parent with a dwarf parent would yield permanently medium offspring. Mendel demonstrated that traits are inherited as discrete physical units (which he termed 'factors', now called <strong>genes</strong>). Traits remain distinct and unblended: a recessive dwarf factor ($t$) can be masked by a dominant tall factor ($T$) in the $F_1$ generation, only to re-emerge unaltered in the $F_2$ generation when paired with another recessive allele ($tt$).
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🧬</span> Genotype vs. Phenotype Distinction
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Organisms can look physically identical while carrying different genetic blueprints:
                            <br>&bull; <strong>Phenotype:</strong> Observable morphological trait (e.g., both $TT$ and $Tt$ pea plants are physically Tall).
                            <br>&bull; <strong>Genotype:</strong> Internal genetic composition (Pure homozygous dominant $TT$ vs. Heterozygous hybrid $Tt$).
                            <br>True genotype can be determined only through test crosses and progeny analysis.
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>⚖️</span> Paternal Determination of Biological Sex
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Human somatic cells contain 23 pairs of chromosomes: 22 pairs of autosomes and 1 pair of sex chromosomes ($XX$ in females, $XY$ in males). Because females are homogametic, all mature ova carry a single $X$ chromosome. Males are heterogametic, producing $50\\%$ $X$-bearing sperm and $50\\%$ $Y$-bearing sperm. Consequently, <strong>the paternal sperm determines the biological sex of the child</strong>.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 Mendel's 3 Foundational Laws</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Law of Dominance</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">In a dissimilar allelic pair ($Tt$), the dominant allele expresses while the recessive allele remains unexpressed.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">2. Law of Segregation</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Allele pairs segregate cleanly during meiosis; gametes receive only one copy of each gene.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">3. Independent Assortment</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">During dihybrid crosses ($9:3:3:1$), different trait pairs assort independently during gametogenesis.</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <!-- PART A: DIHYBRID CROSS MATRIX -->
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Mendel's Dihybrid Cross: Round Yellow ($RRYY$) $\\times$ Wrinkled Green ($rryy$)</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Independent Assortment</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Generation</th>
                                    <th class="p-2.5 border border-slate-700">Cross Details</th>
                                    <th class="p-2.5 border border-slate-700">Progeny Phenotypes</th>
                                    <th class="p-2.5 border border-slate-700">Statistical Ratios</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">P Generation</td>
                                    <td class="p-2.5 border border-slate-700">Homozygous Round Yellow ($RRYY$) $\\times$ Homozygous Wrinkled Green ($rryy$)</td>
                                    <td class="p-2.5 border border-slate-700">Gametes: $RY$ and $ry$</td>
                                    <td class="p-2.5 border border-slate-700">Pure breeding parents</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-purple-400">$F_1$ Generation</td>
                                    <td class="p-2.5 border border-slate-700">All progeny heterozygous hybrid ($RrYy$)</td>
                                    <td class="p-2.5 border border-slate-700"><strong>100% Round Yellow seeds</strong> (Dominance of $R$ over $r$ and $Y$ over $y$)</td>
                                    <td class="p-2.5 border border-slate-700">Uniform phenotype</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">$F_2$ Generation<br><span class="text-[10px] text-slate-400 font-normal">($RrYy \\times RrYy$)</span></td>
                                    <td class="p-2.5 border border-slate-700">Self-pollination produces 4 gamete types: $RY, Ry, rY, ry$ in a 16-box Punnett square</td>
                                    <td class="p-2.5 border border-slate-700">
                                        &bull; Round Yellow: 9<br>
                                        &bull; Round Green: 3 (Recombinant)<br>
                                        &bull; Wrinkled Yellow: 3 (Recombinant)<br>
                                        &bull; Wrinkled Green: 1
                                    </td>
                                    <td class="p-2.5 border border-slate-700 text-emerald-400 font-bold">
                                        Phenotypic Ratio:<br>$$\\mathbf{9 : 3 : 3 : 1}$$
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- PART B: ACQUIRED VS INHERITED TRAITS -->
                <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3 font-mono text-xs">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">2. Acquired vs. Inherited Traits</h4>
                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2 border border-slate-700">Feature</th>
                                    <th class="p-2 border border-slate-700">Acquired Traits</th>
                                    <th class="p-2 border border-slate-700">Inherited Traits</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2 border border-slate-700 font-bold text-indigo-400">Tissue Location</td>
                                    <td class="p-2 border border-slate-700">Somatic, non-reproductive body tissues</td>
                                    <td class="p-2 border border-slate-700">Germ-cell DNA within gametes</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-slate-700 font-bold text-purple-400">Heritability</td>
                                    <td class="p-2 border border-slate-700 text-rose-400">Cannot be transmitted to offspring</td>
                                    <td class="p-2 border border-slate-700 text-emerald-400 font-bold">Transmitted to progeny</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-slate-700 font-bold text-cyan-400">Examples</td>
                                    <td class="p-2 border border-slate-700">Muscle bulk, scar tissue, learned languages</td>
                                    <td class="p-2 border border-slate-700">Eye color, earlobe attachment, blood group</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK MONOHYBRID CROSS -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Statistical Derivation of Mendel's Monohybrid Cross</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <div class="p-3.5 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs border border-slate-800 space-y-2">
                        <p class="text-indigo-300 font-bold">1. Parental Generation (P):</p>
                        <p class="pl-4">Pure Tall ($TT$) $\\times$ Pure Dwarf ($tt$). Gametes: $T$ and $t$.</p>
                        <p class="text-indigo-300 font-bold pt-1">2. First Filial Generation ($F_1$):</p>
                        <p class="pl-4">Cross produces genotype $Tt$ &rarr; <strong>100% Phenotypically Tall</strong> due to Law of Dominance.</p>
                        <p class="text-indigo-300 font-bold pt-1">3. Self-Pollination ($Tt \\times Tt$ Punnett Square):</p>
                        <div class="overflow-x-auto py-1">
                            <table class="w-48 border border-slate-700 text-center text-xs">
                                <tr><th class="border border-slate-700 p-1 bg-surfaceLight">&times;</th><th class="border border-slate-700 p-1 bg-surfaceLight">T</th><th class="border border-slate-700 p-1 bg-surfaceLight">t</th></tr>
                                <tr><th class="border border-slate-700 p-1 bg-surfaceLight">T</th><td class="border border-slate-700 p-1 text-emerald-400 font-bold">TT (Tall)</td><td class="border border-slate-700 p-1 text-emerald-400 font-bold">Tt (Tall)</td></tr>
                                <tr><th class="border border-slate-700 p-1 bg-surfaceLight">t</th><td class="border border-slate-700 p-1 text-emerald-400 font-bold">Tt (Tall)</td><td class="border border-slate-700 p-1 text-rose-400 font-bold">tt (Dwarf)</td></tr>
                            </table>
                        </div>
                        <p class="text-emerald-400 font-bold pt-1">4. Statistical Ratios in $F_2$ Generation:</p>
                        <p class="pl-4">&bull; <strong>Phenotypic Ratio:</strong> 3 Tall : 1 Dwarf ($75\\% : 25\\%$)</p>
                        <p class="pl-4">&bull; <strong>Genotypic Ratio:</strong> 1 Pure Tall ($TT$) : 2 Hybrid Tall ($Tt$) : 1 Pure Dwarf ($tt$) $\\implies \\mathbf{1:2:1}$ &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK SEX DETERMINATION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 2 [3 Marks]: Chromosomal Paternal Sex Determination in Humans</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">50% Probability Proof</span>
                    </div>

                    <div class="space-y-2 pl-3 border-l-2 border-indigo-500 font-mono text-xs">
                        <p><strong>1. Karyotype:</strong> Humans carry 23 pairs of chromosomes (22 autosomes + 1 pair sex chromosomes: $XX$ female, $XY$ male).</p>
                        <p><strong>2. Maternal Homogamety:</strong> Females produce identical ova carrying an $X$ chromosome ($22 + X$).</p>
                        <p><strong>3. Paternal Heterogamety:</strong> Males produce two sperm types: $50\\%$ $(22 + X)$ and $50\\%$ $(22 + Y)$.</p>
                        <p><strong>4. Fertilization Outcomes:</strong></p>
                        <p class="pl-4">&bull; Ovum ($X$) + Sperm ($X$) &rarr; $XX \\implies$ <strong>Female Child (50%)</strong></p>
                        <p class="pl-4">&bull; Ovum ($X$) + Sperm ($Y$) &rarr; $XY \\implies$ <strong>Male Child (50%)</strong></p>
                        <p class="text-emerald-400 font-bold pt-1 font-sans">Conclusion: Paternal sperm determines the biological sex of the child with a 1:1 statistical ratio &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "State both phenotypic ratio (3:1) and genotypic ratio (1:2:1) when answering monohybrid cross questions."
        },
        diagnostics: [
            { q: "A cross between a tall pea plant (TT) and short pea plant (tt) resulted in F1 progeny that were all tall because:", difficulty: "Foundation Level", options: ["Tallness is the dominant trait", "Shortness is the dominant trait", "Tallness is recessive", "Height is not governed by genes"], correct: 0, solution: "In the heterozygous F1 condition (Tt), the dominant allele T suppresses expression of recessive allele t." },
            { q: "What is the statistical probability of a human couple having a female child?", difficulty: "Foundation Level", options: ["50%", "25%", "75%", "100%"], correct: 0, solution: "Fathers produce X-bearing and Y-bearing sperm in equal 50:50 proportions, yielding a 1:1 probability for every birth." },
            { q: "In a dihybrid cross between round yellow and wrinkled green pea plants, the phenotypic ratio in the F2 generation is:", difficulty: "Foundation Level", options: ["9:3:3:1", "1:2:1", "3:1", "9:1:1:5"], correct: 0, solution: "Independent assortment of seed shape and seed color produces the standard Mendelian dihybrid ratio: 9 Round Yellow, 3 Round Green, 3 Wrinkled Yellow, 1 Wrinkled Green." },
            { q: "Which of the following is an example of an acquired trait?", difficulty: "Foundation Level", options: ["Loss of weight due to starvation", "Eye color", "Attached earlobes", "Blood group AB"], correct: 0, solution: "Weight loss affects somatic tissues and does not alter germ-cell DNA, meaning it cannot be inherited by offspring." }
        ]
    },
	// =========================================================================
    	// SCIENCE 09: LIGHT – REFLECTION AND REFRACTION
    	// =========================================================================
    S10_CH10: {
        code: "Science 09",
        name: "Light – Reflection and Refraction",
        weight: 7,
        desc: "Exhaustive treatment of spherical mirror optics, Cartesian sign conventions, Snell's law of refraction, absolute and relative refractive indices, thin lens formulas, and optical power combinations.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Electromagnetic Wave Kinematics</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 09: Geometric Wavefronts, Refractive Interfaces & Dioptric Power</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Ray tracing, Snell's law of refraction, and Cartesian optical algebra</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> The Phase Velocity Shift: The Physical Cause of Refraction
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        Light travels at its maximum speed ($c = 3 \\times 10^8\\text{ m/s}$) in a vacuum. When an electromagnetic wavefront enters an optically denser medium (such as crown glass or water), the oscillating electric field interacts with atomic electron clouds, reducing the wave's phase velocity ($v < c$). If the wave strikes the interface at an oblique angle, one edge of the wavefront slows down before the opposite edge, forcing the beam to pivot toward the normal. Refraction is not an intrinsic property of light bending; it is the consequence of <strong>differential wave deceleration across a boundary</strong>.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>📐</span> The Cartesian Origin Principle
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            All optical calculations rely on standard coordinate conventions:
                            <br>&bull; The optical pole ($P$) or optical center ($O$) is placed at the origin $(0, 0)$.
                            <br>&bull; Incident light always travels from left to right.
                            <br>&bull; Distances measured in the direction of incident light (right) are <strong>positive ($+$)</strong>; distances against it (left) are <strong>negative ($-$)</strong>.
                            <br>&bull; Therefore, object distance $u$ is <strong>always negative</strong>.
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🧪</span> Optical Density vs. Mass Density Paradox
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Optical density is not synonymous with mass density (mass per unit volume). Kerosene has a lower mass density than water ($0.8\\text{ g/cm}^3 < 1.0\\text{ g/cm}^3$) and floats on top of it. Yet kerosene has a higher refractive index ($n = 1.44$) than water ($n = 1.33$). Light travels <strong>slower in kerosene than in water</strong>, proving optical density depends on molecular polarizability, not physical weight.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 The Ray-Tracing Trajectory Suite</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Parallel Ray</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">A ray parallel to the principal axis reflects or refracts through the principal focus ($F$).</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">2. Focal Ray</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">A ray passing through the focus emerges parallel to the principal axis after reflection/refraction.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">3. Curvature Center</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">A ray through $C$ or optical center $O$ retraces its path undeviated (incidence angle $i = 0^\\circ$).</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">4. Power Rule</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Diopters: $P = 1/f\\text{ (m)}$. Convex lens: $P > 0$; Concave lens: $P < 0$.</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <!-- PART A: MIRRORS VS LENSES FORMULA DIRECTORY -->
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Comparative Optical Formula Matrix & Cartesian Rules</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Formula Reference</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Parametric Metric</th>
                                    <th class="p-2.5 border border-slate-700">Spherical Mirrors (Reflection)</th>
                                    <th class="p-2.5 border border-slate-700">Spherical Lenses (Refraction)</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Governing Equation</td>
                                    <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">$$\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$$</td>
                                    <td class="p-2.5 border border-slate-700 font-bold text-cyan-400">$$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$$</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-purple-400">Linear Magnification ($m$)</td>
                                    <td class="p-2.5 border border-slate-700">$$m = -\\frac{v}{u} = \\frac{h'}{h}$$</td>
                                    <td class="p-2.5 border border-slate-700">$$m = +\\frac{v}{u} = \\frac{h'}{h}$$</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Focal Length ($f$) Sign</td>
                                    <td class="p-2.5 border border-slate-700">&bull; Concave Mirror: <strong>Negative ($-$)</strong><br>&bull; Convex Mirror: <strong>Positive ($+$)</strong></td>
                                    <td class="p-2.5 border border-slate-700">&bull; Concave (Diverging) Lens: <strong>Negative ($-$)</strong><br>&bull; Convex (Converging) Lens: <strong>Positive ($+$)</strong></td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-rose-400">Magnification Sign Meaning</td>
                                    <td class="p-2.5 border border-slate-700">&bull; $m < 0$: Real & Inverted image<br>&bull; $m > 0$: Virtual & Erect image</td>
                                    <td class="p-2.5 border border-slate-700">&bull; $m < 0$: Real & Inverted image<br>&bull; $m > 0$: Virtual & Erect image</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-cyan-400">Optical Power ($P$)</td>
                                    <td class="p-2.5 border border-slate-700">Not typically defined for mirrors</td>
                                    <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">$$P = \\frac{1}{f\\text{ (in meters)}}\\text{ Dioptres (D)}$$</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- PART B: SNELL'S LAW & REFRACTIVE INDEX SUITE -->
                <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">2. Snell's Law & Refractive Index Mechanics</h4>
                    <div class="space-y-2 text-xs font-sans text-slate-300 leading-relaxed">
                        <p><strong>Snell's Law of Refraction:</strong> For light of a given color and a given pair of media, the ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant:
                        $$\\frac{\\sin i}{\\sin r} = n_{21} = \\frac{n_2}{n_1} = \\frac{v_1}{v_2}$$</p>
                        <p><strong>Lateral Displacement in a Glass Slab:</strong> An incident ray entering a rectangular glass slab bends toward the normal, travels through the medium, and emerges into air bending away from the normal. Because the opposite faces are parallel, the emergent ray is <strong>parallel to the incident ray</strong>, shifted sideways by a perpendicular distance called <em>lateral displacement</em>.</p>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK CONCAVE MIRROR NUMERICAL -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Concave Mirror Image Formation & Screen Distance</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <p><strong>Problem:</strong> An object $4.0\\text{ cm}$ high is placed at $25.0\\text{ cm}$ in front of a concave mirror of focal length $15.0\\text{ cm}$. Find the screen distance, nature, and size of the image formed.</p>

                    <div class="p-4 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs border border-slate-800 space-y-2">
                        <p class="text-indigo-300 font-bold">Step 1: Cartesian Coordinates:</p>
                        <p class="pl-4">Object height $h = +4.0\\text{ cm}$, Object distance $u = -25.0\\text{ cm}$, Focal length $f = -15.0\\text{ cm}$</p>
                        <p class="text-indigo-300 font-bold pt-1">Step 2: Apply Mirror Formula:</p>
                        <p class="pl-4">$$\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{-15.0} - \\frac{1}{-25.0} = -\\frac{1}{15.0} + \\frac{1}{25.0} = -\\frac{2}{75.0}$$</p>
                        <p class="pl-4 font-bold text-amber-300">$$v = -37.5\\text{ cm}$$</p>
                        <p class="text-indigo-300 font-bold pt-1">Step 3: Calculate Magnification and Height:</p>
                        <p class="pl-4">$$m = -\\frac{v}{u} = -\\frac{-37.5}{-25.0} = -1.5 \\implies h' = m \\times h = -1.5 \\times 4.0\\text{ cm} = -6.0\\text{ cm}$$</p>
                        <p class="text-emerald-400 font-bold pt-1 font-sans">Conclusion: Screen must be placed $37.5\\text{ cm}$ in front of mirror. The image is <strong>Real, Inverted, and Magnified</strong> ($-6.0\\text{ cm}$) &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK CONVEX LENS NUMERICAL -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [3 Marks]: Convex Lens Ray Calculation</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Lens Equation</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>Problem:</strong> A convex lens of focal length $f = +10\\text{ cm}$ forms a real image at $v = +20\\text{ cm}$. Find object distance $u$ and magnification $m$.</p>
                        <p>$$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{u} = \\frac{1}{v} - \\frac{1}{f} = \\frac{1}{20} - \\frac{1}{10} = -\\frac{1}{20} \\implies u = -20\\text{ cm}$$</p>
                        <p>$$m = \\frac{v}{u} = \\frac{+20}{-20} = -1.0$$</p>
                        <p class="text-emerald-400 font-sans">Object is located at $2F_1$ ($20\\text{ cm}$ in front), forming a real, inverted image of identical size at $2F_2$ &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK LENS POWER COMBINATION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: Combined Optical Power of Contact Lenses</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Dioptre Calculation</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>Setup:</strong> A convex lens of power $+2.5\\text{ D}$ is in contact with a concave lens of power $-1.0\\text{ D}$.</p>
                        <p>$$P_{\\text{net}} = P_1 + P_2 = +2.5\\text{ D} - 1.0\\text{ D} = +1.5\\text{ D}$$</p>
                        <p>$$f_{\\text{net}} = \\frac{1}{P_{\\text{net}}} = \\frac{1}{+1.5\\text{ D}} = +0.67\\text{ meters} = +66.7\\text{ cm}$$</p>
                        <p class="text-emerald-400 font-sans">Positive net focal length proves the assembly behaves as a converging lens of focal length $+66.7\\text{ cm}$ &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "Always convert focal length into meters before calculating optical power in Dioptres: P = 1 / f (in meters)."
        },
        diagnostics: [
            { q: "Where should an object be placed in front of a convex lens to produce a real, inverted image of the same size?", difficulty: "Foundation Level", options: ["At twice the focal length (2F1)", "At the principal focus (F1)", "Between optical center and focus", "At infinity"], correct: 0, solution: "Placing the object at 2F1 forms a real, inverted image of exactly the same size at 2F2 on the opposite side." },
            { q: "A convex mirror used as a rear-view mirror on an automobile has a radius of curvature of 3.0 m. Its focal length is:", difficulty: "Foundation Level", options: ["+1.5 m", "-1.5 m", "+3.0 m", "-0.75 m"], correct: 0, solution: "For a convex mirror, focal length is positive and equals half the radius of curvature: f = R / 2 = +3.0 / 2 = +1.5 m." },
            { q: "The refractive index of diamond is 2.42. This physical statement means that:", difficulty: "Application Level", options: ["The speed of light in diamond is 1/2.42 times its speed in vacuum", "Light travels 2.42 times faster in diamond than in air", "Diamond absorbs 2.42% of incident photons", "Diamond reflects 100% of light at normal incidence"], correct: 0, solution: "By definition, n = c / v. Therefore, v = c / 2.42, meaning light travels 2.42 times slower in diamond than in vacuum." },
            { q: "A doctor prescribes a corrective lens of power -2.0 D. The focal length and type of the lens are:", difficulty: "Foundation Level", options: ["-0.5 m, Concave lens", "+0.5 m, Convex lens", "-2.0 m, Concave lens", "+0.2 m, Convex lens"], correct: 0, solution: "f = 1 / P = 1 / (-2.0 D) = -0.5 m. The negative sign confirms it is a concave (diverging) lens." }
        ]
    },

    // =========================================================================
    // SCIENCE 10: THE HUMAN EYE AND THE COLOURFUL WORLD
    // =========================================================================
    S10_CH11: {
        code: "Science 10",
        name: "The Human Eye and the Colourful World",
        weight: 5,
        desc: "Exhaustive treatment of ciliary accommodation, refractive defects of vision (Myopia, Hypermetropia, Presbyopia), glass prism dispersion, atmospheric refraction phenomena, and Rayleigh scattering.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Physiological & Atmospheric Optics</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 10: Ciliary Accommodation, Prism Dispersion & Rayleigh Scattering</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Vision defects, corrective optics, and atmospheric light propagation</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> The Biological Autofocus: Power of Accommodation
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        A camera focuses on near versus distant objects by physically moving a rigid lens closer to or further from its digital sensor. The human eye cannot change the distance between its lens and retina inside the skull. Instead, <strong>ciliary muscles</strong> relax or contract to modify the curvature of the flexible crystalline lens:
                        <br>&bull; <strong>Distant Vision:</strong> Ciliary muscles relax &rarr; suspensory ligaments pull tight &rarr; lens becomes thin ($f$ increases) to focus parallel rays on the retina.
                        <br>&bull; <strong>Near Vision:</strong> Ciliary muscles contract &rarr; ligaments slacken &rarr; lens rounds and thickens ($f$ decreases) to focus diverging rays.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🌈</span> Prismatic Dispersion vs. Recombination
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Isaac Newton demonstrated that white sunlight is a composite spectrum of seven colors. In glass, the refractive index varies with wavelength ($n_{\\text{violet}} > n_{\\text{red}}$). Violet light slows down the most and bends through the greatest angle, while red bends the least. Placing an identical inverted prism behind the first recombines the dispersed rays back into pure white light.
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>☀️</span> Rayleigh Scattering: The $\\lambda^4$ Law
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            For particles smaller than the wavelength of light ($d \\ll \\lambda$), scattering intensity varies inversely with the fourth power of wavelength ($I \\propto 1/\\lambda^4$). Short-wavelength blue light (~400 nm) scatters roughly <strong>16 times more</strong> than long-wavelength red light (~700 nm). This explains why the sky appears blue, while hazard lights use red to penetrate fog and smoke.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 Atmospheric Optical Phenomena</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Twinkling of Stars</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Point-like starlight continuously refracts through turbulent, shifting air layers of varying density.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">2. Advanced Sunrise / Sunset</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Atmospheric refraction bends sunlight over the horizon, extending perceived daylight by 4 minutes total.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">3. Rainbow Formation</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Three-stage sequence in raindrops: Refraction & dispersion &rarr; internal reflection &rarr; refraction out.</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Master Comparative Pathology: Refractive Vision Defects</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Clinical Diagnostics</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Defect</th>
                                    <th class="p-2.5 border border-slate-700">Visual Symptom</th>
                                    <th class="p-2.5 border border-slate-700">Underlying Physiological Causes</th>
                                    <th class="p-2.5 border border-slate-700">Image Position & Corrective Prescription</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Myopia<br><span class="text-[10px] text-slate-400 font-normal">(Near-sightedness)</span></td>
                                    <td class="p-2.5 border border-slate-700">Can view near objects clearly; distant objects appear blurry. Far point shifts closer than infinity.</td>
                                    <td class="p-2.5 border border-slate-700">1. Excessive curvature of the crystalline lens (too converging).<br>2. Elongation of the eyeball along the visual axis.</td>
                                    <td class="p-2.5 border border-slate-700">Image forms <strong>in front of the retina</strong>.<br><span class="text-emerald-400 font-bold">Corrected with a Concave (Diverging) Lens</span> of focal length equal to the distance of the far point.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-purple-400">Hypermetropia<br><span class="text-[10px] text-slate-400 font-normal">(Far-sightedness)</span></td>
                                    <td class="p-2.5 border border-slate-700">Can view distant objects clearly; nearby objects appear blurry. Near point recedes further than 25 cm.</td>
                                    <td class="p-2.5 border border-slate-700">1. Focal length of the eye lens is too long.<br>2. Eyeball has become too short.</td>
                                    <td class="p-2.5 border border-slate-700">Image forms <strong>behind the retina</strong>.<br><span class="text-cyan-400 font-bold">Corrected with a Convex (Converging) Lens</span> providing additional converging power.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Presbyopia<br><span class="text-[10px] text-slate-400 font-normal">(Age-related Defect)</span></td>
                                    <td class="p-2.5 border border-slate-700">Near point gradually recedes with age; difficult to read comfortably at 25 cm.</td>
                                    <td class="p-2.5 border border-slate-700">Gradual weakening of the ciliary muscles and diminishing flexibility of the crystalline lens with age.</td>
                                    <td class="p-2.5 border border-slate-700">Corrected using <strong>Bifocal Lenses</strong>: upper concave portion for distant vision, lower convex portion for reading.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK MYOPIA CORRECTION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Corrective Lens Power for Myopic Vision</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <p><strong>Problem:</strong> A person with a myopic eye cannot see objects clearly beyond $1.5\\text{ m}$. Find the nature, focal length, and optical power of the corrective lens required to restore normal distant vision.</p>

                    <div class="p-4 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs border border-slate-800 space-y-2">
                        <p class="text-indigo-300 font-bold">Step 1: Optical Requirements:</p>
                        <p class="pl-4">Distant object at infinity: $u = -\\infty$. Required image at far point: $v = -1.5\\text{ m}$.</p>
                        <p class="text-indigo-300 font-bold pt-1">Step 2: Apply Lens Formula:</p>
                        <p class="pl-4">$$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{-1.5} - \\frac{1}{-\\infty} = \\frac{1}{f} \\implies f = -1.5\\text{ m}$$</p>
                        <p class="text-indigo-300 font-bold pt-1">Step 3: Calculate Power:</p>
                        <p class="pl-4">$$P = \\frac{1}{f\\text{ (m)}} = \\frac{1}{-1.5\\text{ m}} = -0.67\\text{ D}$$</p>
                        <p class="text-emerald-400 font-bold pt-1 font-sans">Conclusion: The patient requires a <strong>Concave (diverging) lens</strong> of power <strong>$-0.67\\text{ D}$</strong> ($f = -1.5\\text{ m}$) &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK HYPERMETROPIA CALCULATION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [3 Marks]: Corrective Lens for Hypermetropic Eye</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Near-Point Shift</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>Problem:</strong> The near point of a hypermetropic eye is $1.0\\text{ m}$ ($100\\text{ cm}$). What is the power of the lens required to read comfortably at normal near point $d = 25\\text{ cm}$?</p>
                        <p>$$u = -25\\text{ cm} = -0.25\\text{ m}, \\quad v = -100\\text{ cm} = -1.0\\text{ m}$$</p>
                        <p>$$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-1.0} - \\frac{1}{-0.25} = -1 + 4 = +3.0\\text{ D}$$</p>
                        <p class="text-emerald-400 font-sans">Patient requires a <strong>Convex (converging) lens</strong> of power <strong>$+3.0\\text{ D}$</strong> ($f = +33.3\\text{ cm}$) &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK RAINBOW DISPERSION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: Sequence of Rainbow Formation in Raindrops</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Atmospheric Sequence</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>1. Refraction & Dispersion:</strong> Sunlight entering spherical raindrops refracts and splits into constituent spectral colors.</p>
                        <p><strong>2. Internal Reflection:</strong> Rays hit back droplet wall at angles exceeding critical angle (~48.6&deg;), reflecting internally.</p>
                        <p><strong>3. Refraction at Exit:</strong> Rays bend out of the droplet into air, emerging at $40^\\circ$ (violet) to $42^\\circ$ (red) relative to incoming beam &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "Remember: Myopia is corrected using a Concave lens (negative power); Hypermetropia is corrected using a Convex lens (positive power)."
        },
        diagnostics: [
            { q: "A person cannot see nearby objects distinctly. The defect is corrected using:", difficulty: "Foundation Level", options: ["A convex lens of suitable power", "A concave lens", "A cylindrical lens", "A bifocal lens with upper convex part"], correct: 0, solution: "Hypermetropia (far-sightedness) causes nearby rays to focus behind the retina and requires a converging convex lens." },
            { q: "The danger lights at the top of tall buildings and traffic signals are red because:", difficulty: "Foundation Level", options: ["Red light is scattered least by smoke and fog", "Red light has the highest velocity in air", "Red light has the shortest wavelength", "The human retina is sensitive only to red"], correct: 0, solution: "By Rayleigh's law, scattering intensity is inversely proportional to the fourth power of wavelength; red light has the longest visible wavelength and scatters the least." },
            { q: "The apparent flattening of the sun's disc at sunrise and sunset is caused by:", difficulty: "Foundation Level", options: ["Atmospheric refraction", "Total internal reflection", "Diffraction of light", "Prismatic dispersion"], correct: 0, solution: "Light rays from the upper and lower edges of the solar disc travel through different densities of air, bending unequally due to atmospheric refraction." },
            { q: "The least distance of distinct vision for a young adult with normal vision is:", difficulty: "Foundation Level", options: ["25 cm", "2.5 cm", "25 m", "Infinity"], correct: 0, solution: "For a normal human eye, the near point for comfortable reading without muscular strain is 25 cm." }
        ]
    },

    // =========================================================================
    // SCIENCE 11: ELECTRICITY
    // =========================================================================
    S10_CH12: {
        code: "Science 11",
        name: "Electricity",
        weight: 7,
        desc: "Exhaustive treatment of drift velocity, potential difference, Ohm's law, microscopic factors governing resistance, resistivity profiles, series and parallel circuits, Joule's law of heating, and commercial electrical energy units.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Electrodynamic Circuit Architecture</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 11: Electron Drift, Ohm's Law & Joule Thermal Dissipation</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Resistivity, circuit equivalents, and commercial power calculations</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> Thermal Chaos vs. Drift Velocity ($v_d$)
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        In an isolated copper wire, free valence electrons move randomly at thermal speeds of around $10^5\\text{ m/s}$, colliding with vibrating lattice ions with an average displacement of zero (producing zero net current). When a battery applies a potential difference ($V$), an electric field sweeps through the conductor at near light speed. This field exerts a net electrostatic force that imparts a slow, directed <strong>drift velocity ($v_d \\approx 10^{-4}\\text{ m/s}$)</strong>. Electric current is the collective flow of billions of charges drifting simultaneously through the circuit.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🧪</span> Factors Governing Resistance & Resistivity
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            The resistance of a uniform metallic conductor depends on four physical variables:
                            <br>&bull; Directly proportional to length ($R \\propto l$).
                            <br>&bull; Inversely proportional to cross-sectional area ($R \\propto 1/A$).
                            <br>&bull; Combining yields: $$R = \\rho \\frac{l}{A}$$
                            <br><strong>Resistivity ($\\rho$)</strong> is an intrinsic property of the material that depends on composition and temperature, measured in $\\Omega\\cdot\\text{m}$.
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🏠</span> Why Domestic Wiring is Wired in Parallel
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            In a series circuit, if one appliance fails, the circuit opens and every device shuts down. Series connections also share voltage across components, reducing current to high-power devices. In <strong>parallel circuits</strong>, each branch connects across the full 220 V line with independent switches, keeping the failure of one appliance from interrupting the others.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 Circuit Equivalents & Power Formulations</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Series Loop</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">$R_s = R_1 + R_2 + R_3$. Current $I$ is identical through all resistors.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">2. Parallel Loop</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">$\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2}$. Voltage $V$ is identical across all branches.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">3. Joule Heating</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">$H = I^2 R t$. Thermal energy dissipated by lattice collisions.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">4. Power Suite</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">$P = VI = I^2 R = \\frac{V^2}{R}$. Commercial: $1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}$.</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Resistivity Spectrum of Materials at 20&deg;C</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Material Physics</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Category</th>
                                    <th class="p-2.5 border border-slate-700">Material Example</th>
                                    <th class="p-2.5 border border-slate-700">Resistivity ($\\Omega\\cdot\\text{m}$)</th>
                                    <th class="p-2.5 border border-slate-700">Engineering Application & Rationale</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Conductors</td>
                                    <td class="p-2.5 border border-slate-700">Silver ($1.60 \\times 10^{-8}$)<br>Copper ($1.62 \\times 10^{-8}$)</td>
                                    <td class="p-2.5 border border-slate-700">$10^{-8} \\text{ to } 10^{-6}$</td>
                                    <td class="p-2.5 border border-slate-700">Used for electrical transmission cables to minimize $I^2 R$ resistive heating losses over long distances.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Alloys</td>
                                    <td class="p-2.5 border border-slate-700">Nichrome ($Ni-Cr-Mn-Fe$)<br>Constantan ($Cu-Ni$)</td>
                                    <td class="p-2.5 border border-slate-700">$10^{-6} \\text{ to } 10^{-4}$</td>
                                    <td class="p-2.5 border border-slate-700">Used in heating elements (toasters, irons). Higher resistivity than component metals and <strong>does not oxidize (burn) easily at red-hot temperatures</strong>.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-rose-400">Insulators</td>
                                    <td class="p-2.5 border border-slate-700">Glass ($10^{10} \\text{ to } 10^{14}$)<br>Hard Rubber ($10^{13} \\text{ to } 10^{16}$)</td>
                                    <td class="p-2.5 border border-slate-700">$10^{12} \\text{ to } 10^{17}$</td>
                                    <td class="p-2.5 border border-slate-700">Used for protective coatings and handles on tools to insulate against electric shocks.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK JOULE HEATING LAW -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Mathematical Derivation of Joule's Law of Heating</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <div class="space-y-2 pl-3 border-l-2 border-indigo-500 font-mono text-xs text-slate-300">
                        <p><strong>Step 1: Work Done by Potential Difference:</strong> $W = V \\times Q$</p>
                        <p><strong>Step 2: Express Charge via Current:</strong> $Q = I \\times t \\implies W = V \\times I \\times t$</p>
                        <p><strong>Step 3: Substitute Ohm's Law ($V = IR$):</strong> $W = (IR) \\times I \\times t = I^2 R t$</p>
                        <p><strong>Step 4: Energy Conservation:</strong> Electrical work dissipates as thermal energy:<br>
                        <span class="text-emerald-400 font-bold text-sm">$$H = I^2 R t \\quad \\blacksquare$$</span></p>
                        <p class="font-sans text-[11px] pt-1">Heat generated is directly proportional to: 1. $I^2$ (square of current), 2. $R$ (resistance), 3. $t$ (duration of flow).</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK EQUIVALENT RESISTANCE COMBINATION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [3 Marks]: Series-Parallel Mixed Circuit Analysis</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Circuit Network</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>Circuit:</strong> Two resistors $R_1 = 6\\,\\Omega$ and $R_2 = 12\\,\\Omega$ are connected in parallel, and this parallel block is connected in series with $R_3 = 4\\,\\Omega$ across a 12 V battery.</p>
                        <p><strong>1. Parallel Block:</strong> $\\frac{1}{R_p} = \\frac{1}{6} + \\frac{1}{12} = \\frac{3}{12} \\implies R_p = 4\\,\\Omega$</p>
                        <p><strong>2. Total Resistance:</strong> $R_{\\text{total}} = R_p + R_3 = 4 + 4 = 8\\,\\Omega$</p>
                        <p><strong>3. Circuit Current:</strong> $I = \\frac{V}{R_{\\text{total}}} = \\frac{12\\text{ V}}{8\\,\\Omega} = 1.5\\text{ A}$ &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK COMMERCIAL ELECTRICITY BILLING -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: Commercial Electric Energy Consumption & Cost</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Billing Units</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>Problem:</strong> A refrigerator rated 400 W operates 8 hours/day. Calculate energy consumed in 30 days and cost at ₹3.00 per kWh.</p>
                        <p><strong>Daily Energy:</strong> $400\\text{ W} \\times 8\\text{ h} = 3200\\text{ Wh} = 3.2\\text{ kWh}$</p>
                        <p><strong>Monthly Energy (30 days):</strong> $3.2\\text{ kWh/day} \\times 30 = 96\\text{ kWh (units)}$</p>
                        <p><strong>Total Cost:</strong> $96\\text{ units} \\times \\text{₹}3.00 = \\text{₹}288.00$ &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "Always convert electrical appliance power into kilowatts and time into hours before computing billing units: Units (kWh) = (Watts × Hours) / 1000."
        },
        diagnostics: [
            { q: "A piece of uniform wire of resistance R is cut into 5 equal parts and connected in parallel. If the equivalent resistance is R', the ratio R/R' is:", difficulty: "HOTS Level", options: ["25", "5", "1/5", "1/25"], correct: 0, solution: "Each piece has resistance r = R / 5. Connected in parallel: 1 / R' = 5 / (R/5) = 25 / R, which gives R / R' = 25." },
            { q: "An electric bulb is rated 220 V and 100 W. When operated on 110 V, the power consumed will be:", difficulty: "Application Level", options: ["25 W", "50 W", "75 W", "100 W"], correct: 0, solution: "Bulb resistance is R = V^2 / P = (220)^2 / 100 = 484 Ohms. At 110 V, new power P' = (110)^2 / 484 = 12,100 / 484 = 25 W." },
            { q: "Why are the heating elements of electric toasters and irons made of an alloy rather than a pure metal?", difficulty: "Foundation Level", options: ["Alloys have higher resistivity and do not oxidize easily at high temperatures", "Alloys have lower melting points", "Alloys conduct electricity without resistance", "Alloys are cheaper than all pure metals"], correct: 0, solution: "Alloys like Nichrome have higher resistivity than pure metals and resist oxidation even when red-hot." },
            { q: "The electrical resistivity of a given metallic wire depends on:", difficulty: "Foundation Level", options: ["Nature of the material and temperature", "Length of the wire", "Thickness of the wire", "Shape of the wire"], correct: 0, solution: "Resistivity is an intrinsic material property that varies with composition and temperature, independent of dimensions." }
        ]
    },

    // =========================================================================
    // SCIENCE 12: MAGNETIC EFFECTS OF ELECTRIC CURRENT
    // =========================================================================
    S10_CH13: {
        code: "Science 12",
        name: "Magnetic Effects of Electric Current",
        weight: 6,
        desc: "Exhaustive treatment of Oersted's discovery, magnetic field lines, Right-Hand Thumb Rule, circular loops and solenoids, Fleming's Left-Hand Rule, and domestic circuit safety wiring.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Electromagnetic Dynamics</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 12: Oersted Coupling, Solenoid Induction & Domestic Circuit Safety</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Field patterns, motor effect forces, and safety earthing</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> Unification of Electricity and Magnetism
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        In 1820, Hans Christian Oersted observed that a compass needle placed near a current-carrying wire deflected immediately. A stationary electric charge creates only an electrostatic field ($E$). The moment charges move (an electric current), they generate an accompanying <strong>magnetic field ($B$)</strong> with concentric circular field lines around the conductor. Conversely, placing that current-carrying conductor inside an external magnetic field causes the two fields to interact, generating a physical mechanical force ($F = B I L \\sin\\theta$) that drives electric motors.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🧲</span> Properties of Magnetic Field Lines
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Field lines trace the path of a hypothetical north pole:
                            <br>&bull; Emerge from the North pole and enter the South pole externally, forming <strong>continuous closed loops</strong> through the magnet interior (South to North).
                            <br>&bull; The relative strength of the field is shown by the closeness of the lines.
                            <br>&bull; <strong>No two field lines ever intersect:</strong> If they crossed, a compass at that point would point in two directions at once.
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🛡️</span> Domestic Safety: Short-Circuiting vs. Overloading
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            &bull; <strong>Short-Circuiting:</strong> Damaged insulation brings the Live wire (220 V) and Neutral wire (0 V) into direct contact. Resistance drops to near zero, causing a current surge that can spark fires.
                            <br>&bull; <strong>Overloading:</strong> Switching on too many high-power appliances simultaneously pulls current beyond the circuit's rated threshold.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 The Conductor Geometry Spectrum</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Straight Conductor</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Concentric circular field lines. Direction given by Right-Hand Thumb Rule ($B \\propto I$, $B \\propto 1/r$).</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">2. Circular Loop ($N$ Turns)</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Fields from all $N$ turns add constructively at the center: $B \\propto N \\cdot I$.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">3. Long Solenoid</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Uniform, parallel internal field lines like a bar magnet. Inserting soft iron creates an electromagnet.</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Domestic Circuit Wiring Architecture & Color Codes</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Safety Engineering</span>
                    </div>

                    <div class="overflow-x-auto text-xs font-mono">
                        <table class="w-full border-collapse border border-slate-700 text-left">
                            <thead>
                                <tr class="bg-surfaceLight text-slate-300">
                                    <th class="p-2.5 border border-slate-700">Conductor Line</th>
                                    <th class="p-2.5 border border-slate-700">Insulation Color Code</th>
                                    <th class="p-2.5 border border-slate-700">Operating Potential (India)</th>
                                    <th class="p-2.5 border border-slate-700">Functional & Safety Purpose</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-300 text-[11px]">
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-rose-400">Live Wire ($L$)</td>
                                    <td class="p-2.5 border border-slate-700">Red (Old) / Brown (New)</td>
                                    <td class="p-2.5 border border-slate-700 font-bold text-amber-300">220 Volts AC</td>
                                    <td class="p-2.5 border border-slate-700">Carries alternating high potential from the sub-station transformer to the consumer.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-slate-300">Neutral Wire ($N$)</td>
                                    <td class="p-2.5 border border-slate-700">Black (Old) / Light Blue (New)</td>
                                    <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">0 Volts (Grounded)</td>
                                    <td class="p-2.5 border border-slate-700">Completes the return circuit path, maintaining a 220 V potential difference across appliances.</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">Earth Wire ($E$)</td>
                                    <td class="p-2.5 border border-slate-700">Green (Old) / Yellow-Green Stripes</td>
                                    <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">0 Volts (Physical Earth)</td>
                                    <td class="p-2.5 border border-slate-700">Connected to the metallic chassis of appliances (refrigerator, toaster) and an underground metal plate. Diverts leakage current to ground, tripping the fuse instead of shocking the user.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK FLEMING'S LEFT-HAND RULE -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Directional Derivation of Fleming's Left-Hand Rule</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <p class="text-xs text-slate-300">Stretch thumb, forefinger, and middle finger of the left hand mutually perpendicular to each other:</p>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                        <div class="p-3 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1">
                            <strong class="text-indigo-400 block font-mono text-xs">Forefinger (Field)</strong>
                            <p class="text-slate-300 font-bold">Magnetic Field ($B$)</p>
                            <p class="text-[11px] text-slate-400 mt-1">Points in the direction of the magnetic field from North to South.</p>
                        </div>
                        <div class="p-3 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1">
                            <strong class="text-purple-400 block font-mono text-xs">Center Finger (Current)</strong>
                            <p class="text-slate-300 font-bold">Electric Current ($I$)</p>
                            <p class="text-[11px] text-slate-400 mt-1">Points in the direction of conventional current ($+ \\rightarrow -$).</p>
                        </div>
                        <div class="p-3 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1">
                            <strong class="text-emerald-400 block font-mono text-xs">Thumb (Thrust/Force)</strong>
                            <p class="text-slate-300 font-bold">Mechanical Force ($F$)</p>
                            <p class="text-[11px] text-slate-400 mt-1">Points in the direction of physical displacement of conductor &emsp; &#9632;</p>
                        </div>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK SOLENOID MAGNETIC FIELD -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [3 Marks]: Magnetic Field Pattern Inside a Solenoid</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Electromagnetics</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>1. Internal Pattern:</strong> Field lines inside a long current-carrying solenoid are straight, parallel, and closely packed.</p>
                        <p><strong>2. Uniformity:</strong> Parallel lines prove the magnetic field strength is uniform at all internal points.</p>
                        <p><strong>3. Electromagnet Synthesis:</strong> Placing a soft iron core inside dramatically strengthens the field due to magnetic induction &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK EARTHING SAFETY -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: Electrical Safety Role of the Earth Wire</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Safety Grounding</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>1. Connection:</strong> Green earth wire connects the metallic outer chassis of appliances to a metal plate buried deep in earth.</p>
                        <p><strong>2. Low-Resistance Path:</strong> If damaged live wire touches the metal casing, current immediately flows through the low-resistance earth wire rather than through a human user.</p>
                        <p><strong>3. Fuse Tripping:</strong> The sudden high current trips the circuit fuse or MCB, cutting power safely &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "Remember: Thumb = Motion/Force, Forefinger = Magnetic Field, Center finger = Current in Fleming's Left-Hand Rule."
        },
        diagnostics: [
            { q: "The magnetic field inside a long straight current-carrying solenoid is:", difficulty: "Foundation Level", options: ["Uniform at all internal points", "Zero", "Decreases toward the ends", "Increases toward the center"], correct: 0, solution: "Field lines inside a solenoid run straight, parallel, and equidistant, confirming the magnetic field is uniform throughout its interior." },
            { q: "The essential safety device based on the heating effect of current to prevent domestic circuit fires is the:", difficulty: "Foundation Level", options: ["Electric fuse", "Electric generator", "Galvanometer", "Ammeter"], correct: 0, solution: "An electric fuse contains a low-melting-point alloy wire that melts to break the circuit during overloads and short circuits." },
            { q: "A positively charged alpha particle projected toward the west is deflected north by a magnetic field. The direction of the field is:", difficulty: "Application Level", options: ["Upward (out of the page)", "Downward (into the page)", "Toward south", "Toward east"], correct: 0, solution: "Using Fleming's Left-Hand Rule: center finger points west (current), thumb points north (force); the forefinger points upward." },
            { q: "What is the function of the earth wire in domestic electrical appliances with metallic casings?", difficulty: "Foundation Level", options: ["Diverts leakage currents to ground to prevent electric shocks", "Increases line voltage", "Decreases electrical billing", "Prevents overloading of appliances"], correct: 0, solution: "The earth wire provides a low-resistance path to the ground for any leakage current, preventing users from receiving electric shocks." }
        ]
    },

    // =========================================================================
    // SCIENCE 13: OUR ENVIRONMENT
    // =========================================================================
    S10_CH15: {
        code: "Science 13",
        name: "Our Environment",
        weight: 5,
        desc: "Exhaustive treatment of ecosystem trophic levels, Lindeman's 10% law of energy dissipation, biological biomagnification of non-biodegradable toxins, stratospheric ozone synthesis and CFC destruction, and solid waste management.",
        overview: `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-300/60 dark:border-indigo-900/40 space-y-5">
                <div class="border-b border-indigo-200 dark:border-indigo-900/50 pb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-900 text-indigo-200">Ecological Thermodynamics</span>
                    <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 13: Unidirectional Energy Cascades, Biomagnification & Ozone Fragility</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Lindeman's 10% law, persistent organic pollutants, and stratospheric photochemistry</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <span>⚡</span> The Unidirectional Energy Cascade
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        Unlike chemical nutrients (carbon, nitrogen, water) which cycle through an ecosystem, <strong>energy does not cycle</strong>. Solar radiation captured by green photosynthetic autotrophs cannot revert to the sun, and energy passed to herbivores cannot return to plants. At each step up the food chain, organisms consume roughly 90% of ingested energy on metabolic maintenance (respiration, digestion, locomotion, heat loss). Only 10% is converted into biomass available to the next consumer, limiting food chains to 3 or 4 trophic levels.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>☠️</span> The Biomagnification Inversion
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            While available energy decreases by 90% at each higher trophic tier, non-biodegradable synthetic chemicals (e.g., organochlorine pesticides like DDT) cannot be metabolized or excreted. They accumulate in adipose fatty tissues and become increasingly concentrated at each successive level, reaching toxic concentrations in apex predators like humans and eagles.
                        </p>
                    </div>

                    <div class="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>🛡️</span> Stratospheric Ozone Dynamics
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Stratospheric ozone ($O_3$) absorbs harmful solar ultraviolet (UV-B) radiation. Chlorofluorocarbons (CFCs) from refrigerants migrate into the stratosphere, where high-energy UV splits off reactive chlorine free radicals ($Cl^\\bullet$). A single chlorine radical can catalytically destroy over 100,000 ozone molecules, a process checked globally by the <strong>1987 Montreal Protocol</strong>.
                        </p>
                    </div>
                </div>

                <div class="p-4 bg-indigo-100/60 dark:bg-slate-900 rounded-xl border border-indigo-300/80 dark:border-slate-800 space-y-2.5">
                    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">🔗 Trophic Energy Step Calculations</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Sun &rarr; Plants</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Terrestrial green plants capture only <strong>1%</strong> of incident solar energy hitting leaves.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">2. T1 &rarr; T2</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Herbivore receives 10% of producer biomass energy. 90% is burned for metabolic maintenance.</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">3. T2 &rarr; T3</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Primary carnivore receives 10% of herbivore energy (1% of initial plant energy).</span>
                        </div>
                        <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                            <span class="text-indigo-600 dark:text-indigo-400 font-bold block">4. T3 &rarr; T4</span>
                            <span class="text-[11px] text-slate-700 dark:text-slate-300 font-sans">Apex predator receives 10% of carnivore energy (0.1% of initial plant energy).</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp1: `
            <div class="space-y-6">
                <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Photochemical Synthesis and Catalytic Depletion of Stratospheric Ozone</h4>
                        <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Atmospheric Chemistry</span>
                    </div>

                    <div class="space-y-3 font-mono text-xs">
                        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1">
                            <strong class="text-indigo-400 block font-sans text-xs">Phase 1: UV-Induced Photolytic Dissociation of Oxygen</strong>
                            <p class="text-slate-300">High-energy ultraviolet radiation splits molecular oxygen into free oxygen atoms:</p>
                            <p class="text-slate-300">$$O_2 \\xrightarrow{\\text{High Energy UV}} O + O\\text{ (Nascent Oxygen)}$$</p>
                        </div>

                        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1">
                            <strong class="text-emerald-400 block font-sans text-xs">Phase 2: Ozone Synthesis</strong>
                            <p class="text-slate-300">Reactive nascent oxygen atoms combine with molecular oxygen to form ozone:</p>
                            <p class="text-slate-300">$$O + O_2 \\rightarrow O_3\\text{ (Ozone)}$$</p>
                        </div>

                        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700/60 space-y-1">
                            <strong class="text-rose-400 block font-sans text-xs">Phase 3: Catalytic Destruction by Chlorofluorocarbons (CFCs)</strong>
                            <p class="text-slate-300">$$CF_2Cl_2 \\xrightarrow{\\text{UV}} \\text{CF}_2\\text{Cl}^\\bullet + Cl^\\bullet$$</p>
                            <p class="text-slate-300">$$Cl^\\bullet + O_3 \\rightarrow ClO^\\bullet + O_2$$</p>
                            <p class="text-slate-300">$$ClO^\\bullet + O \\rightarrow Cl^\\bullet + O_2$$</p>
                            <p class="text-amber-400 font-sans text-[11px] mt-1">The chlorine radical is regenerated at the end of each cycle, allowing a single radical to destroy thousands of ozone molecules.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exp2: `
            <div class="space-y-6">
                <!-- WORKED EXAMPLE 1: 5-MARK LINDEMAN'S 10% CALCULATION -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Worked Example 1 [5 Marks]: Quantitative Ecological Derivation: Lindeman's 10% Law</h4>
                        <span class="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded font-bold">CBSE 5M Master</span>
                    </div>

                    <p><strong>Problem:</strong> If 20,000 Joules of solar energy falls on green plant foliage, calculate the energy available to a hawk at the 4th trophic level: $\\text{Grass} \\rightarrow \\text{Grasshopper} \\rightarrow \\text{Frog} \\rightarrow \\text{Hawk}$.</p>

                    <div class="p-4 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs border border-slate-800 space-y-2">
                        <p class="text-amber-400 font-bold">Step 1: Solar Capture by Primary Producers (T1):</p>
                        <p class="pl-4">Terrestrial green plants capture only <strong>1%</strong> of incident solar energy on leaves:<br>
                        $$\\text{Energy in Grass (T1)} = 1\\% \\text{ of } 20,000\\text{ J} = 200\\text{ Joules}$$</p>

                        <p class="text-indigo-300 font-bold pt-1">Step 2: Apply Lindeman's 10% Transfer Across Successive Levels:</p>
                        <p class="pl-4">&bull; <strong>T2 (Herbivore / Grasshopper):</strong> $10\\% \\text{ of } 200\\text{ J} = 20\\text{ Joules}$</p>
                        <p class="pl-4">&bull; <strong>T3 (Carnivore / Frog):</strong> $10\\% \\text{ of } 20\\text{ J} = 2\\text{ Joules}$</p>
                        <p class="pl-4">&bull; <strong>T4 (Apex Predator / Hawk):</strong> $10\\% \\text{ of } 2\\text{ J} = \\mathbf{0.2\\text{ Joules}} \\quad \\blacksquare$</p>
                        <p class="text-rose-400 font-bold pt-1 font-sans">Ecological Consequence: Only 0.2 J of the initial 20,000 J solar radiation reaches the apex hawk. This rapid dissipation explains why natural food chains rarely exceed 4 to 5 trophic tiers.</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 2: 3-MARK OZONE DEPLETION CYCLE -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example 2 [3 Marks]: Catalytic Cycle of Stratospheric Ozone Depletion</h4>
                        <span class="text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Photochemical Kinetics</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>1. Photolytic Cleavage:</strong> $CF_2Cl_2 \\xrightarrow{\\text{UV}} \\text{CF}_2\\text{Cl}^\\bullet + Cl^\\bullet$</p>
                        <p><strong>2. Catalytic Attack:</strong> $Cl^\\bullet + O_3 \\rightarrow ClO^\\bullet + O_2$</p>
                        <p><strong>3. Radical Regeneration:</strong> $ClO^\\bullet + O \\rightarrow Cl^\\bullet + O_2$</p>
                        <p class="text-emerald-400 font-sans">Chlorine radical ($Cl^\\bullet$) regenerates at the end of each cycle; a single radical catalytically destroys over 100,000 ozone molecules &emsp; &#9632;</p>
                    </div>
                </div>

                <!-- WORKED EXAMPLE 3: 3-MARK BIOMAGNIFICATION ANALYSIS -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Worked Example 3 [3 Marks]: Biological Magnification of Non-Biodegradable Toxins</h4>
                        <span class="text-[10px] font-mono bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">Ecotoxicology</span>
                    </div>

                    <div class="space-y-1.5 text-xs text-slate-300 font-mono text-[11px] leading-relaxed">
                        <p><strong>1. Pesticide Runoff:</strong> Non-biodegradable chemicals like DDT wash into water bodies and are absorbed by phytoplankton.</p>
                        <p><strong>2. Adipose Accumulation:</strong> Because organisms cannot metabolize or excrete synthetic toxins, DDT concentrates in fat tissues.</p>
                        <p><strong>3. Apex Accumulation:</strong> Herbivorous fish consume many phytoplankton, and large fish consume many small fish; apex predators (fish-eating birds and humans) accumulate the highest toxic concentrations &emsp; &#9632;</p>
                    </div>
                </div>
            </div>
        `,
        vernacular: {
            English: "Remember: Plants capture only 1% of incident solar energy; after that, exactly 10% is transferred between consecutive trophic tiers."
        },
        diagnostics: [
            { q: "In a food chain consisting of Grass -> Deer -> Tiger, if 100 J of energy is available to deer, the energy transferred to the tiger is:", difficulty: "Foundation Level", options: ["10 J", "1 J", "0.1 J", "100 J"], correct: 0, solution: "By Lindeman's 10% law, the tiger receives 10% of the energy stored in the deer: 10% of 100 J = 10 J." },
            { q: "The synthetic chemical compound primarily responsible for depleting the stratospheric ozone layer is:", difficulty: "Foundation Level", options: ["Chlorofluorocarbons (CFCs)", "Carbon dioxide", "Methane", "Sulfur dioxide"], correct: 0, solution: "CFCs release reactive chlorine free radicals under solar UV radiation, catalytically breaking down ozone into oxygen." },
            { q: "Biological magnification refers to the phenomenon where:", difficulty: "Application Level", options: ["Non-biodegradable toxic chemicals accumulate in higher concentrations at successive trophic levels", "Energy increases as it moves up a food chain", "Producers multiply in biomass during spring", "Decomposers break down organic matter"], correct: 0, solution: "Because non-biodegradable chemicals like DDT cannot be metabolized or excreted, their concentration increases at each successive trophic tier." },
            { q: "Disposal of municipal solid waste by burning at very high temperatures inside an enclosed furnace is called:", difficulty: "Foundation Level", options: ["Incineration", "Composting", "Landfilling", "Bioremediation"], correct: 0, solution: "Incineration reduces waste volume by burning municipal and hospital waste at high temperatures (over 900°C)." }
        ]
    }
};

// Aliases for alternate naming schemes
window.scienceChapterRegistry.SCI_CH01 = window.scienceChapterRegistry.S10_CH01;
window.scienceChapterRegistry.SCI_CH02 = window.scienceChapterRegistry.S10_CH02;
window.scienceChapterRegistry.SCI_CH03 = window.scienceChapterRegistry.S10_CH03;
window.scienceChapterRegistry.SCI_CH04 = window.scienceChapterRegistry.S10_CH04;
window.scienceChapterRegistry.SCI_CH06 = window.scienceChapterRegistry.S10_CH06;
window.scienceChapterRegistry.SCI_CH07 = window.scienceChapterRegistry.S10_CH07;
window.scienceChapterRegistry.SCI_CH08 = window.scienceChapterRegistry.S10_CH08;
window.scienceChapterRegistry.SCI_CH09 = window.scienceChapterRegistry.S10_CH09;
window.scienceChapterRegistry.SCI_CH10 = window.scienceChapterRegistry.S10_CH10;
window.scienceChapterRegistry.SCI_CH11 = window.scienceChapterRegistry.S10_CH11;
window.scienceChapterRegistry.SCI_CH12 = window.scienceChapterRegistry.S10_CH12;
window.scienceChapterRegistry.SCI_CH13 = window.scienceChapterRegistry.S10_CH13;
window.scienceChapterRegistry.SCI_CH15 = window.scienceChapterRegistry.S10_CH15;