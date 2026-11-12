window.scienceChapterRegistry = {
    "S10_CH01": {
        "code": "Science 01",
        "class": 10,
        "name": "Chemical Reactions & Equations",
        "weight": 6,
        "desc": "Balancing chemical equations, types of reactions, redox half-reactions, and corrosion.",
        "vernacular": { "English": "Always write physical state symbols (s, l, g, aq) and verify atom count equality on both sides of the reaction." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 01: Chemical Reactions &amp; Conservation of Mass</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>The LEGO Set of the Universe</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">When wood burns, it seems to vanish into smoke. But matter never disappears—atoms are simply cosmic LEGO blocks being detached and reassembled. Balancing equations is the strict accounting ledger proving nothing was lost.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
        <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-2">
            <div class="flex items-center gap-2 text-indigo-400 font-bold text-xs"><span>🏛️</span><span>Why This Was Discovered</span></div>
            <p class="text-[11px] text-slate-300 leading-relaxed font-sans">Antoine Lavoisier placed mercury and air in sealed flasks in 1789, proving mass remains constant before and after reactions. This shattered the medieval phlogiston myth and established quantitative chemistry.</p>
        </div>
        <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-2">
            <div class="flex items-center gap-2 text-emerald-400 font-bold text-xs"><span>✨</span><span>The "Aha!" Moment</span></div>
            <p class="text-[11px] text-slate-300 leading-relaxed font-sans">Reactions occur because atoms seek lower energy: bonds break (absorbing energy) and new, stronger lattice or molecular bonds form (releasing energy). In redox, electrons flow like currency from electropositive metals to greedy non-metals.</p>
        </div>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Experimental Diagnostic Matrix: Observation &amp; Chemical Equations</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Lab Verification</span>
        </div>
        <div class="overflow-x-auto text-xs font-mono">
            <table class="w-full border-collapse border border-slate-700 text-left">
                <thead>
                    <tr class="bg-slate-900/80 text-slate-300">
                        <th class="p-2.5 border border-slate-700">Reaction Type</th>
                        <th class="p-2.5 border border-slate-700">Setup &amp; Reactants</th>
                        <th class="p-2.5 border border-slate-700">Balanced Equation with States</th>
                        <th class="p-2.5 border border-slate-700">Diagnostic Observations</th>
                    </tr>
                </thead>
                <tbody class="text-slate-300 text-[11px]">
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Combination</td>
                        <td class="p-2.5 border border-slate-700">Adding water slowly to quicklime ($CaO$) in a beaker.</td>
                        <td class="p-2.5 border border-slate-700">$CaO_{(s)} + H_2O_{(l)} \rightarrow Ca(OH)_{2(aq)} + \text{Heat}$</td>
                        <td class="p-2.5 border border-slate-700">• Vigorous hissing sound; beaker turns intensely hot.<br>• Produces slaked lime which turns lime water milky with $CO_2$.</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-purple-400">Thermal Decomposition</td>
                        <td class="p-2.5 border border-slate-700">Heating dry green ferrous sulfate crystals ($FeSO_4 \cdot 7H_2O$) in a boiling tube.</td>
                        <td class="p-2.5 border border-slate-700">$2FeSO_{4(s)} \\xrightarrow{\Delta} Fe_2O_{3(s)} + SO_{2(g)} + SO_{3(g)}$</td>
                        <td class="p-2.5 border border-slate-700">• Green crystals turn white, then reddish-brown ($Fe_2O_3$).<br>• Pungent sulfur odor; gases turn moist blue litmus red.</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-cyan-400">Displacement</td>
                        <td class="p-2.5 border border-slate-700">Clean iron nails immersed in aqueous copper sulfate ($CuSO_4$) solution.</td>
                        <td class="p-2.5 border border-slate-700">$Fe_{(s)} + CuSO_{4(aq)} \rightarrow FeSO_{4(aq)} + Cu_{(s)}$</td>
                        <td class="p-2.5 border border-slate-700">• Blue solution fades gradually to pale light green ($FeSO_4$).<br>• Iron nails become coated with reddish-brown spongy copper layer.</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Double Displacement</td>
                        <td class="p-2.5 border border-slate-700">Mixing sodium sulfate ($Na_2SO_4$) with barium chloride ($BaCl_2$) solution.</td>
                        <td class="p-2.5 border border-slate-700">$Na_2SO_{4(aq)} + BaCl_{2(aq)} \rightarrow BaSO_{4(s)}\downarrow + 2NaCl_{(aq)}$</td>
                        <td class="p-2.5 border border-slate-700">• Immediate formation of an opaque white precipitate of $BaSO_4$.<br>• Precipitate is completely insoluble in dilute hydrochloric acid.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400">Worked Derivation [5 Marks]: Empirical Balanced Redox Systems</h4>
            <span class="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded font-bold border border-indigo-800">CBSE 5M Master</span>
        </div>
        <div class="space-y-3 font-sans text-xs">
            <p><strong>Problem Statement:</strong> Write the balanced chemical equation with physical states for the reaction between manganese dioxide and concentrated hydrochloric acid. Systematically identify the substance oxidized, substance reduced, oxidizing agent, and reducing agent.</p>
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-2 font-mono text-[11px] text-slate-300">
                <p><strong>Step 1: Skeletal Equation &amp; Atom Inventory:</strong><br>
                $$MnO_{2(s)} + 4HCl_{(aq)} \rightarrow MnCl_{2(aq)} + 2H_2O_{(l)} + Cl_{2(g)}$$<br>
                Reactant inventory: $Mn=1, O=2, H=4, Cl=4$. Product inventory: $Mn=1, O=2, H=4, Cl=4$. Conservation of mass verified.</p>
                <p><strong>Step 2: Redox Half-Reaction Analysis:</strong><br>
                • <strong>Substance Oxidized:</strong> $HCl$ is oxidized to $Cl_2$ (removal of hydrogen / oxidation number of $Cl$ increases from $-1$ to $0$).<br>
                • <strong>Substance Reduced:</strong> $MnO_2$ is reduced to $MnCl_2$ (loss of oxygen / oxidation state of $Mn$ decreases from $+4$ to $+2$).<br>
                • <strong>Oxidizing Agent:</strong> $MnO_2$ (furnishes oxygen and accepts electrons).<br>
                • <strong>Reducing Agent:</strong> $HCl$ (supplies hydrogen and donates electrons). ■</p>
            </div>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Foundation Level",
                "q": "Which gas is evolved when dilute hydrochloric acid is poured over zinc granules?",
                "options": [
                    "Hydrogen gas, which burns with a characteristic pop sound",
                    "Carbon dioxide, which turns lime water milky",
                    "Oxygen gas, which rekindles a glowing splint",
                    "Chlorine gas with a bleaching action"
                ],
                "correct": 0,
                "solution": "Zinc displaces hydrogen from dilute acids: Zn + 2HCl -> ZnCl2 + H2(g). Hydrogen gas burns with a characteristic pop sound."
            },
            {
                "difficulty": "Application Level",
                "q": "In the reaction: CuO + H2 -> Cu + H2O, the oxidizing agent is:",
                "options": [
                    "CuO (Copper oxide)",
                    "H2 (Hydrogen)",
                    "Cu (Copper)",
                    "H2O (Water)"
                ],
                "correct": 0,
                "solution": "CuO loses oxygen to form Cu, meaning CuO is reduced and therefore acts as the oxidizing agent."
            }
        ],
        "doubts": [
            { "chip": "Balancing Fe + H2O with states", "q": "Balance the chemical equation: Fe(s) + H2O(g) -> Fe3O4(s) + H2(g) and verify state symbols." },
            { "chip": "Redox in MnO2 + HCl", "q": "Identify substance oxidized, reduced, oxidizing agent, and reducing agent in MnO2 + 4HCl -> MnCl2 + 2H2O + Cl2." },
            { "chip": "Exothermic Respiration", "q": "Explain with chemical equation why cellular respiration is classified as an exothermic reaction." },
            { "chip": "Precipitation of BaSO4", "q": "Write the ionic and molecular equation for mixing barium chloride with sodium sulfate, stating precipitate color." },
            { "chip": "Thermal Cleavage of FeSO4", "q": "What two gases are evolved during thermal decomposition of green ferrous sulfate crystals?" },
            { "chip": "Photolytic AgCl Cleavage", "q": "Why does white silver chloride turn grey in sunlight? State its application in black and white photography." },
            { "chip": "Rancidity & Nitrogen Flush", "q": "Explain why potato chips manufacturers flush bags with nitrogen gas to prevent rancidity." },
            { "chip": "Corrosion vs Rusting", "q": "Differentiate between corrosion and rusting, and state the chemical formula of rust." }
        ]
    },

    "S10_CH02": {
        "code": "Science 02",
        "class": 10,
        "name": "Acids, Bases and Salts",
        "weight": 6,
        "desc": "pH scale, neutralization, chlor-alkali process, plaster of Paris, and washing soda.",
        "vernacular": { "English": "Remember that dry acid gas does not show acidic properties without water; hydronium ions (H3O+) are mandatory for indicator changes." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 02: Proton Mobility &amp; Ionic Equilibrium (Acids, Bases &amp; Salts)</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>The Battle for Free Protons ($H^+$ vs $OH^-$)</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Acids and bases are proton donors and proton acceptors. A bare hydrogen ion ($H^+$) is an unshielded proton with enormous charge density; it instantly binds to water to form hydronium ($H_3O^+$). Neutralization is the universe's most efficient pairing: an energetic proton collapsing into a hydroxide ion to form stable water and an ionic crystalline salt.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
        <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-2">
            <div class="flex items-center gap-2 text-indigo-400 font-bold text-xs"><span>🏛️</span><span>Why This Was Discovered</span></div>
            <p class="text-[11px] text-slate-300 leading-relaxed font-sans">Svante Arrhenius (1887) proved electrolytic dissociation: aqueous conductivity is governed entirely by mobile solvated ions. Søren Sørensen invented the pH scale in 1909 to standardize enzyme kinetics and brewing consistency.</p>
        </div>
        <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-2">
            <div class="flex items-center gap-2 text-emerald-400 font-bold text-xs"><span>✨</span><span>The "Aha!" Moment</span></div>
            <p class="text-[11px] text-slate-300 leading-relaxed font-sans">The pH scale is logarithmic: pH 3 has 10× more free protons than pH 4, and 10,000× more than pure water! Common indicators change color because protonation twists their molecular rings, shifting the light wavelengths they absorb.</p>
        </div>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Core Reactions &amp; Chemical Manufacturing Matrix</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Lab &amp; Industry</span>
        </div>
        <div class="overflow-x-auto text-xs font-mono">
            <table class="w-full border-collapse border border-slate-700 text-left">
                <thead>
                    <tr class="bg-slate-900/80 text-slate-300">
                        <th class="p-2.5 border border-slate-700">Process / Reaction</th>
                        <th class="p-2.5 border border-slate-700">Setup &amp; Reactants</th>
                        <th class="p-2.5 border border-slate-700">Balanced Equation with States</th>
                        <th class="p-2.5 border border-slate-700">Diagnostic Observations &amp; Rules</th>
                    </tr>
                </thead>
                <tbody class="text-slate-300 text-[11px]">
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Acid + Metal Carbonate</td>
                        <td class="p-2.5 border border-slate-700">Dilute $HCl$ added to $Na_2CO_3$ or $NaHCO_3$ powder.</td>
                        <td class="p-2.5 border border-slate-700">$Na_2CO_{3(s)} + 2HCl_{(aq)} \rightarrow 2NaCl_{(aq)} + H_2O_{(l)} + CO_{2(g)}$</td>
                        <td class="p-2.5 border border-slate-700">• Brisk effervescence of colorless, odorless $CO_2$ gas.<br>• Gas turns clear lime water milky ($CaCO_3\downarrow$); excess turns it clear again.</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">Chlor-Alkali Process</td>
                        <td class="p-2.5 border border-slate-700">Electrolysis of concentrated aqueous sodium chloride (Brine).</td>
                        <td class="p-2.5 border border-slate-700">$2NaCl_{(aq)} + 2H_2O_{(l)} \rightarrow 2NaOH_{(aq)} + Cl_{2(g)} + H_{2(g)}$</td>
                        <td class="p-2.5 border border-slate-700">• Anode (+): $Cl_2$ gas released (disinfectant/PVC).<br>• Cathode (-): $H_2$ gas released (fuel/ammonia).<br>• Near cathode: $NaOH$ alkaline solution forms.</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Bleaching Powder Synthesis</td>
                        <td class="p-2.5 border border-slate-700">Dry slaked lime treated with chlorine gas.</td>
                        <td class="p-2.5 border border-slate-700">$Ca(OH)_{2(s)} + Cl_{2(g)} \rightarrow CaOCl_{2(s)} + H_2O_{(l)}$</td>
                        <td class="p-2.5 border border-slate-700">• Yellowish-white powder giving strong smell of chlorine.<br>• Used as bleaching agent in textile/paper industry and water disinfectant.</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-rose-400">Baking Soda &amp; Washing Soda</td>
                        <td class="p-2.5 border border-slate-700">Thermal decomposition of $NaHCO_3$ followed by recrystallization.</td>
                        <td class="p-2.5 border border-slate-700">$2NaHCO_{3(s)} \\xrightarrow{\Delta} Na_2CO_{3(s)} + H_2O + CO_2$<br>$Na_2CO_3 + 10H_2O \rightarrow Na_2CO_3 \cdot 10H_2O$</td>
                        <td class="p-2.5 border border-slate-700">• $NaHCO_3$ mild non-corrosive base used in baking powder and antacids.<br>• Washing soda contains 10 molecules of water of crystallization.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Worked Derivation [5 Marks]: Plaster of Paris &amp; Water of Crystallization</h4>
            <span class="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-800">CBSE 5M Master</span>
        </div>
        <div class="space-y-3 font-sans text-xs">
            <p><strong>Problem Statement:</strong> Write the preparation equation for Plaster of Paris from Gypsum. Explain why temperature control is critical at 373 K and why it is written with half a molecule of water ($CaSO_4 \cdot \frac{1}{2}H_2O$).</p>
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-2 font-mono text-[11px] text-slate-300">
                <p><strong>Step 1: Controlled Thermal Dehydration Equation:</strong><br>
                $$CaSO_4 \cdot 2H_2O_{(s)} \\xrightarrow{373\text{ K } (100^\circ\text{C})} CaSO_4 \cdot \frac{1}{2}H_2O_{(s)} + 1\frac{1}{2}H_2O_{(g)}$$</p>
                <p><strong>Step 2: Why Half a Molecule of Water is Written:</strong><br>
                Two formula units of Calcium Sulfate ($CaSO_4$) share ONE molecule of water of crystallization: $[2CaSO_4 \cdot H_2O]$, which simplifies to $CaSO_4 \cdot \frac{1}{2}H_2O$ per formula unit.</p>
                <p><strong>Step 3: Temperature Sensitivity Trap:</strong><br>
                If heated above 373 K, all water of crystallization is lost, yielding anhydrous calcium sulfate ($CaSO_4$), commonly termed <em>'dead burnt plaster'</em>, which completely loses the property of setting hard with water. ■</p>
            </div>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Foundation Level",
                "q": "Why does dry HCl gas not change the color of dry blue litmus paper?",
                "options": [
                    "Litmus requires acidic gas at temperatures > 100°C",
                    "Acids dissociate into H⁺ ions exclusively in the presence of water",
                    "Dry litmus paper contains basic alkaline coatings",
                    "HCl is only an acid when combined with oxygen"
                ],
                "correct": 1,
                "solution": "Separation of H+ from HCl molecules occurs exclusively in aqueous solution to form H3O+ ions. In absence of moisture, no hydronium ions exist to alter indicator dye structure."
            },
            {
                "difficulty": "Application Level",
                "q": "During dilution of concentrated acid, why must acid always be added to water slowly with constant stirring?",
                "options": [
                    "Water is less dense than acid and floats on top",
                    "The reaction is violently endothermic and freezes glass",
                    "Large exothermic heat can turn water into steam instantly, causing explosive acid splashing",
                    "Acid evaporates immediately if exposed to open air"
                ],
                "correct": 2,
                "solution": "Dilution is strongly exothermic. Adding water to concentrated acid causes localized boiling at the interface and explosive splashing of concentrated acid, risking severe chemical burns."
            }
        ],
        "doubts": [
            { "chip": "Dry HCl vs Moist Litmus", "q": "Why does dry HCl gas not change the color of dry blue litmus paper, but dilute HCl does?" },
            { "chip": "Chlor-Alkali Electrode Products", "q": "What products form at the anode and cathode during electrolysis of concentrated brine? Write balanced reactions." },
            { "chip": "POP Half Water Rationale", "q": "Explain why Plaster of Paris is written with half a molecule of water of crystallization (CaSO4·1/2H2O)." },
            { "chip": "Dead Burnt Plaster Risk", "q": "What happens if gypsum is heated above 373 K? Define dead burnt plaster and its properties." },
            { "chip": "Acid-to-Water Dilution Rule", "q": "Why is it always recommended that acid should be added to water, not water to acid?" },
            { "chip": "Tooth Decay pH Threshold", "q": "At what pH does tooth enamel (calcium hydroxyapatite) begin to corrode and how does toothpaste help?" },
            { "chip": "Bleaching Powder Formula & Uses", "q": "Give the chemical formula, preparation equation, and two commercial uses of Bleaching Powder." },
            { "chip": "Washing Soda Preparation", "q": "How is washing soda prepared from baking soda? Write the two-step balanced chemical equations." }
        ]
    },

    "S10_CH03": {
        "code": "Science 03",
        "class": 10,
        "name": "Metals and Non-metals",
        "weight": 7,
        "desc": "Reactivity series, ionic bond formation, roasting, calcination, and electrolytic refining.",
        "vernacular": { "English": "Remember: Amphoteric oxides (Al2O3 and ZnO) react with BOTH acids and strong bases to produce salt and water." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 03: Electrostatic Lattices &amp; Metallurgy</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>The Battle for Octet Stability</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Metals have 1 to 3 valence electrons that they shed easily to achieve noble gas configurations, becoming positively charged cations. Non-metals greedily capture those electrons to form anions. The resulting electrostatic attraction creates rigid crystal lattices (ionic compounds) with remarkably high melting points.</p>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Reactivity Series &amp; Extraction Metallurgy Rules</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Core Principles</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Reactivity Series Ladder</span>
                <p class="font-mono text-emerald-400 text-xs">$K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au$</p>
                <p class="text-slate-400 text-[11px]">Metals above Hydrogen liberate $H_2$ gas with dilute $HCl/H_2SO_4$. Highly reactive metals ($K, Na, Al$) are extracted via electrolysis of molten chlorides/oxides.</p>
            </div>
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Amphoteric Nature of Oxides</span>
                <p class="font-mono text-amber-300 text-xs">$Al_2O_3 + 6HCl \rightarrow 2AlCl_3 + 3H_2O$<br>$Al_2O_3 + 2NaOH \rightarrow 2NaAlO_2 + H_2O$</p>
                <p class="text-slate-400 text-[11px]">$Al_2O_3$ and $ZnO$ react with acids and strong alkalis alike, forming Sodium Aluminate ($NaAlO_2$) or Sodium Zincate ($Na_2ZnO_2$).</p>
            </div>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400">Worked Derivation [5 Marks]: Roasting, Calcination &amp; Electrolytic Refining</h4>
            <span class="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded font-bold border border-indigo-800">Metallurgy Protocol</span>
        </div>
        <div class="space-y-2.5 font-mono text-[11px] text-slate-300">
            <p><strong>1. Roasting (Sulphide Ores):</strong> Heated strongly in EXCESS of air.<br>
            $$2ZnS_{(s)} + 3O_{2(g)} \\xrightarrow{\Delta} 2ZnO_{(s)} + 2SO_{2(g)}$$</p>
            <p><strong>2. Calcination (Carbonate Ores):</strong> Heated strongly in LIMITED/ABSENCE of air.<br>
            $$ZnCO_{3(s)} \\xrightarrow{\Delta} ZnO_{(s)} + CO_{2(g)}$$</p>
            <p><strong>3. Carbon Reduction:</strong> $ZnO_{(s)} + C_{(s)} \rightarrow Zn_{(s)} + CO_{(g)}$</p>
            <p><strong>4. Electrolytic Refining of Copper:</strong><br>
            • Anode (Positive): Impure Copper block ($Cu \rightarrow Cu^{2+} + 2e^-$)<br>
            • Cathode (Negative): Pure Copper strip ($Cu^{2+} + 2e^- \rightarrow Cu$)<br>
            • Electrolyte: Acidified aqueous $CuSO_4$. Insoluble impurities collect as <em>anode mud</em> ($Au, Ag$). ■</p>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Trap Level",
                "q": "Why does Nitric acid (HNO3) generally not evolve Hydrogen gas when reacting with metals?",
                "options": [
                    "HNO3 is a strong oxidizing agent that oxidizes H2 to H2O and is reduced to nitrogen oxides; only Mg and Mn react with very dilute HNO3",
                    "No metal reacts with HNO3 because passivation permanently stops all reactions",
                    "All metals react with HNO3 identically as with HCl",
                    "Only noble metals (Au, Pt) react with concentrated HNO3"
                ],
                "correct": 0,
                "solution": "Nitric acid (HNO3) oxidizes H2 produced directly to water (H2O) and is itself reduced to nitrogen oxides (NO2, N2O, NO). Only Magnesium (Mg) and Manganese (Mn) evolve H2 gas with extremely dilute (~1%) HNO3."
            }
        ],
        "doubts": [
            { "chip": "Amphoteric Oxides Equations", "q": "Show with balanced chemical equations that aluminum oxide is an amphoteric oxide." },
            { "chip": "Why HNO3 Doesn't Give H2", "q": "Why is hydrogen gas not evolved when most metals react with nitric acid? Which two metals are exceptions?" },
            { "chip": "Thermite Welding Reaction", "q": "Write the balanced chemical equation for the thermite process used to join railway tracks." },
            { "chip": "Roasting vs Calcination", "q": "Differentiate between roasting and calcination with balanced equations for zinc sulphide and zinc carbonate." },
            { "chip": "Electrolytic Refining & Anode Mud", "q": "Explain the electrolytic refining of blister copper with electrode reactions and define anode mud." },
            { "chip": "Aqua Regia Composition", "q": "What is Aqua Regia? Give its exact ratio of concentrated acids and explain its dissolving action on gold." },
            { "chip": "Ionic Lattices Solid vs Molten", "q": "Why do ionic compounds not conduct electricity in the solid state but conduct in molten or aqueous state?" },
            { "chip": "Corrosion Prevention (Galvanization)", "q": "What is galvanization and why does a galvanized iron sheet not rust even if the zinc coating is scratched?" }
        ]
    },

    "S10_CH04": {
        "code": "Science 04",
        "class": 10,
        "name": "Carbon and its Compounds",
        "weight": 6,
        "desc": "Covalent bonding, tetravalency, catenation, homologous series, and functional groups.",
        "vernacular": { "English": "Never confuse esterification (acid + alcohol = sweet ester) with saponification (ester + alkali = soap + alcohol)." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 04: Covalent Versatility &amp; Functional Architecture</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>Why Carbon Cannot Form $C^{4+}$ or $C^{4-}$ Ions</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Gaining 4 electrons to form $C^{4-}$ would require a nucleus with only 6 protons to hold 10 electrons, which is electrostatically unstable. Stripping 4 electrons to form $C^{4+}$ requires immense ionization energy. Carbon resolves this by sharing electrons via covalent bonding.</p>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Organic Functional Groups &amp; Reaction Matrix</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Functional Chemistry</span>
        </div>
        <div class="overflow-x-auto text-xs font-mono">
            <table class="w-full border-collapse border border-slate-700 text-left">
                <thead>
                    <tr class="bg-slate-900/80 text-slate-300">
                        <th class="p-2.5 border border-slate-700">Reaction</th>
                        <th class="p-2.5 border border-slate-700">Catalyst / Reagents</th>
                        <th class="p-2.5 border border-slate-700">Chemical Equation</th>
                        <th class="p-2.5 border border-slate-700">CBSE Diagnostic Significance</th>
                    </tr>
                </thead>
                <tbody class="text-slate-300 text-[11px]">
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Ethanol Oxidation</td>
                        <td class="p-2.5 border border-slate-700">Alkaline $KMnO_4 + \Delta$ or Acidified $K_2Cr_2O_7$</td>
                        <td class="p-2.5 border border-slate-700">$CH_3CH_2OH \\xrightarrow{[O]} CH_3COOH$</td>
                        <td class="p-2.5 border border-slate-700">Color change: Purple $KMnO_4$ decolorizes; orange dichromate turns green.</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Esterification</td>
                        <td class="p-2.5 border border-slate-700">Concentrated $H_2SO_4$ (Dehydrating agent)</td>
                        <td class="p-2.5 border border-slate-700">$CH_3COOH + C_2H_5OH \\xrightleftharpoons{H^+} CH_3COOC_2H_5 + H_2O$</td>
                        <td class="p-2.5 border border-slate-700">Produces fruity sweet-smelling Ethyl Ethanoate ester (perfumes/flavoring).</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">Saponification</td>
                        <td class="p-2.5 border border-slate-700">Aqueous Sodium Hydroxide ($NaOH$)</td>
                        <td class="p-2.5 border border-slate-700">$CH_3COOC_2H_5 + NaOH \rightarrow CH_3COONa + C_2H_5OH$</td>
                        <td class="p-2.5 border border-slate-700">Alkaline hydrolysis of ester yields sodium ethanoate (soap precursor).</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-cyan-400">Addition (Hydrogenation)</td>
                        <td class="p-2.5 border border-slate-700">Nickel ($Ni$) or Palladium ($Pd$) catalyst</td>
                        <td class="p-2.5 border border-slate-700">$R_2C=CR_2 + H_2 \\xrightarrow{Ni} R_2CH-CHR_2$</td>
                        <td class="p-2.5 border border-slate-700">Conversion of unsaturated liquid vegetable oils into solid saturated vanaspati ghee.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400">Worked Derivation [5 Marks]: Soap Micelle Dynamics &amp; Scum Formation</h4>
            <span class="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded font-bold border border-indigo-800">Cleansing Mechanism</span>
        </div>
        <div class="space-y-2.5 font-mono text-[11px] text-slate-300">
            <p><strong>1. Dual Molecular Structure of Soap ($C_{17}H_{35}COO^-Na^+$):</strong><br>
            • Hydrophobic Tail: Non-polar long hydrocarbon chain; soluble in oil/grease.<br>
            • Hydrophilic Head: Ionic carboxylate end ($-COO^-Na^+$); soluble in water.</p>
            <p><strong>2. Micelle Formation:</strong><br>
            In water, hydrocarbon tails cluster inwards trapping the oily dirt droplet, while ionic heads project outwards into water, creating a colloidal emulsion that rinses away easily.</p>
            <p><strong>3. Hard Water Scum Incompatibility:</strong><br>
            Hard water contains dissolved $Ca^{2+}$ and $Mg^{2+}$ ions which precipitate soap molecules:<br>
            $$2C_{17}H_{35}COO^-Na^+ + Ca^{2+} \rightarrow (C_{17}H_{35}COO)_2Ca\downarrow + 2Na^+$$<br>
            Forms an insoluble curdy precipitate (scum) that wastes soap. Synthetic detergents avoid scum because their sulfonate groups do not precipitate with $Ca^{2+}/Mg^{2+}$. ■</p>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Board Favorite",
                "q": "A compound 'X' reacts with sodium to produce gas 'Y' (burns with pop sound). 'X' on warming with ethanoic acid and conc. H2SO4 forms sweet-smelling 'Z'. Identify X, Y, and Z:",
                "options": [
                    "X = Ethanol (C2H5OH), Y = Hydrogen (H2), Z = Ethyl Ethanoate (CH3COOC2H5)",
                    "X = Ethanoic acid, Y = Carbon dioxide, Z = Ethyl acetate",
                    "X = Methane, Y = Water vapor, Z = Methanoic acid",
                    "X = Ethene, Y = Oxygen, Z = Diethyl ether"
                ],
                "correct": 0,
                "solution": "Alcohols react with active metals like Na to evolve H2 gas (pop sound): 2C2H5OH + 2Na -> 2C2H5ONa + H2. Alcohols react with ethanoic acid in the presence of conc. H2SO4 to form esters."
            }
        ],
        "doubts": [
            { "chip": "Why Carbon Can't Form C4+/C4-", "q": "Explain why carbon cannot form C4+ cation or C4- anion to attain a noble gas electronic configuration." },
            { "chip": "Esterification vs Saponification", "q": "Write balanced chemical equations for esterification and saponification, and state their commercial uses." },
            { "chip": "Soap Micelle Action", "q": "Explain the mechanism of cleansing action of soap with a neat labelled diagram of a micelle." },
            { "chip": "Hard Water Scum Formation", "q": "Why does soap form scum with hard water while synthetic detergents work equally well in hard water?" },
            { "chip": "Addition / Hydrogenation", "q": "What is an addition reaction? Write the chemical equation for the industrial hydrogenation of vegetable oils." },
            { "chip": "Ethanol Oxidation Pathways", "q": "How is ethanol oxidized to ethanoic acid using alkaline KMnO4 or acidified K2Cr2O7? Write the equation." },
            { "chip": "Structural Isomerism of Butane", "q": "What are structural isomers? Draw the electron dot structures and names of the two isomers of butane (C4H10)." },
            { "chip": "Bromine Water Unsaturation Test", "q": "How can you distinguish experimentally between cooking oil (unsaturated) and butter (saturated)?" }
        ]
    },

    "S10_CH05": {
        "code": "Science 05",
        "class": 10,
        "name": "Life Processes",
        "weight": 9,
        "desc": "Autotrophic nutrition, cellular respiration, human double circulation, and nephron excretion.",
        "vernacular": { "English": "In heart circulation diagrams, remember that the right side handles deoxygenated blood and the left side pumps oxygenated blood." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 05: Metabolic Flux &amp; Thermodynamic Maintenance</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>Preventing Entropy in Biological Systems</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Living organisms are organized structures under constant thermodynamic decay. Life processes—Nutrition, Respiration, Transportation, and Excretion—are the continuous molecular maintenance engines that intake energy and clear metabolic poisons to sustain homeostatic order.</p>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Essential Biological Breakdown Matrices</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Bioenergetics</span>
        </div>
        <div class="space-y-3 text-xs font-mono">
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-2">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Three Glucose Breakdown Pathways:</span>
                <p class="text-slate-300 leading-relaxed">$$\text{Glucose (6C)} \\xrightarrow{\text{Cytoplasm}} \text{Pyruvate (3C)} + \text{Energy}$$</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] text-slate-300 pt-1">
                    <div class="p-2.5 bg-surfaceLight rounded-lg border border-slate-700"><strong>1. Absence of $O_2$ (Yeast):</strong><br>Ethanol (2C) + $CO_2$ + 2 ATP</div>
                    <div class="p-2.5 bg-surfaceLight rounded-lg border border-slate-700"><strong>2. Lack of $O_2$ (Muscle):</strong><br>Lactic Acid (3C) + 2 ATP (causes cramps)</div>
                    <div class="p-2.5 bg-surfaceLight rounded-lg border border-slate-700"><strong>3. Presence of $O_2$ (Mitochondria):</strong><br>$CO_2 + H_2O$ + 36–38 ATP (Aerobic)</div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Worked Derivation [5 Marks]: Nephron Filtration &amp; Double Circulation</h4>
            <span class="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-800">Physiology Proof</span>
        </div>
        <div class="space-y-3 font-sans text-xs text-slate-300">
            <p><strong>Nephron Excretory Mechanism:</strong><br>
            • <em>Ultrafiltration:</em> Blood enters glomerulus under high pressure via afferent arteriole; Bowman's capsule collects 180 L of primary filtrate daily.<br>
            • <em>Selective Reabsorption:</em> As filtrate passes through the tubular nephron, essential substances ($glucose, \text{ amino acids, } Na^+, \text{ water}$) are actively reclaimed back into peritubular capillaries.<br>
            • <em>Urine Excretion:</em> Concentrated nitrogenous waste (urea, uric acid) and excess ions drain into collecting ducts (1–2 L/day). ■</p>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Board Classical",
                "q": "What prevents the backflow of blood inside the human heart during ventricular contraction?",
                "options": [
                    "Valves situated between atria and ventricles (Tricuspid and Bicuspid/Mitral)",
                    "Thick muscular walls of the ventricles",
                    "Low pressure inside the pulmonary artery",
                    "Pericardial fluid surrounding the heart"
                ],
                "correct": 0,
                "solution": "Valves ensure unidirectional blood flow. During ventricular systole, atrioventricular valves snap shut, preventing backflow into the atria."
            }
        ],
        "doubts": [
            { "chip": "3 Pathways of Glucose Breakdown", "q": "Compare the 3 pathways of glucose breakdown: in yeast (fermentation), muscle cells (cramps), and mitochondria (aerobic)." },
            { "chip": "Double Circulation in Heart", "q": "Why is double circulation necessary in human beings? Trace pulmonary vs systemic circulation pathways." },
            { "chip": "Nephron Urine Formation Stages", "q": "Describe the three stages of urine formation in a nephron: ultrafiltration, selective reabsorption, and secretion." },
            { "chip": "Bile Salt Fat Emulsification", "q": "Why does the liver secrete bile juice if it contains no digestive enzymes? Explain fat emulsification." },
            { "chip": "Stomatal Guard Cell Mechanism", "q": "How do guard cells regulate the opening and closing of stomata? Explain the role of water turgidity." },
            { "chip": "Role of Gastric HCl & Mucus", "q": "What are the three components of gastric juice in the stomach and what is the role of hydrochloric acid?" },
            { "chip": "Aquatic vs Terrestrial Respiration", "q": "Why is the breathing rate in aquatic organisms much faster than in terrestrial organisms?" },
            { "chip": "Xylem vs Phloem Transport", "q": "Differentiate between transport of water in xylem (transpiration pull) and food translocation in phloem (ATP-driven)." }
        ]
    },

    "S10_CH06": {
        "code": "Science 06",
        "class": 10,
        "name": "Control and Coordination",
        "weight": 6,
        "desc": "Neuron anatomy, reflex arcs, brain morphology, and phytohormones.",
        "vernacular": { "English": "Remember that Auxin promotes cell elongation on the shaded side of stems, causing the shoot to bend towards light." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 06: Signal Transduction &amp; Neuro-Endocrine Homeostasis</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>Why Multicellular Life Needs Both Nerves &amp; Hormones</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Electrical impulses travel rapidly along axons (~100 m/s), but cannot reach cells lacking direct synapses. Hormones (chemical messengers) bridge this gap by diffusing through the bloodstream to regulate sustained metabolic and growth processes.</p>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Neuro-Endocrine Coordination Matrices</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Synapse &amp; Tropism</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Plant Phytohormone Roles</span>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                • <strong>Auxin:</strong> Synthesized at shoot tips; promotes cell elongation in phototropism.<br>
                • <strong>Gibberellins:</strong> Stimulate stem elongation and seed germination.<br>
                • <strong>Cytokinins:</strong> Promote rapid cell division; concentrated in fruits and seeds.<br>
                • <strong>Abscisic Acid (ABA):</strong> Growth inhibitor; causes stomatal closure and leaf wilting.
                </p>
            </div>
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Reflex Arc Sequence</span>
                <p class="font-mono text-cyan-300 text-[11px]">Receptor $\rightarrow$ Sensory Neuron $\rightarrow$ Spinal Relay $\rightarrow$ Motor Neuron $\rightarrow$ Effector Muscle</p>
                <p class="text-slate-400 text-[11px]">The spinal reflex bypasses conscious thought in the brain, allowing millisecond withdrawal from noxious stimuli.</p>
            </div>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400">Worked Derivation [5 Marks]: Endocrine Feedback &amp; Pancreatic Insulin Regulation</h4>
            <span class="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded font-bold border border-indigo-800">Homeostatic Control</span>
        </div>
        <div class="space-y-2.5 font-mono text-[11px] text-slate-300">
            <p><strong>1. Negative Feedback Loop:</strong><br>
            Blood glucose level rises $\rightarrow$ Detected by Beta cells in Islets of Langerhans (Pancreas) $\rightarrow$ Insulin secreted $\rightarrow$ Promotes cellular uptake of glucose and conversion into liver glycogen $\rightarrow$ Blood glucose drops to normal baseline $\rightarrow$ Insulin secretion shuts down.</p>
            <p><strong>2. Thyroid Regulation &amp; Goitre:</strong><br>
            Thyroid requires dietary Iodine to synthesize Thyroxin. Thyroxin regulates carbohydrate, protein, and fat metabolism for optimal growth balance. Deficiency leads to neck thyroid gland enlargement (Goitre). ■</p>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Foundation Level",
                "q": "Which part of the brain coordinates voluntary muscle movements like balance and riding a bicycle?",
                "options": [
                    "Cerebellum in the hindbrain",
                    "Cerebrum in the forebrain",
                    "Medulla in the hindbrain",
                    "Hypothalamus in the midbrain"
                ],
                "correct": 0,
                "solution": "Cerebellum coordinates voluntary muscular actions and maintains posture, equilibrium, and body balance."
            }
        ],
        "doubts": [
            { "chip": "Reflex Arc Step Sequence", "q": "Trace the step-by-step route of a reflex arc when a finger touches a hot object. Why is it routed through the spinal cord?" },
            { "chip": "Electrical-to-Chemical Synapse", "q": "How does an electrical impulse travel across a microscopic synaptic gap between two adjacent neurons?" },
            { "chip": "Auxin & Phototropism Bending", "q": "How does auxin hormone cause the directional bending of a plant shoot toward sunlight?" },
            { "chip": "Cerebellum vs Medulla Oblongata", "q": "Differentiate between the functions of the cerebellum (voluntary balance) and medulla (involuntary breathing, BP)." },
            { "chip": "Adrenaline Fight/Flight Response", "q": "What physiological changes occur in the human body when adrenaline hormone is released into the blood?" },
            { "chip": "Pancreatic Insulin Feedback Loop", "q": "Explain the negative feedback mechanism that controls the timing and amount of insulin released by the pancreas." },
            { "chip": "Why Iodized Salt is Mandatory", "q": "Why is the use of iodized salt advised? Name the hormone synthesized by iodine and the deficiency disease." },
            { "chip": "Tropic vs Nastic Movement", "q": "Differentiate between directional tropic movements in plants and non-directional thigmonastic drooping in Mimosa pudica." }
        ]
    },

    "S10_CH07": {
        "code": "Science 07",
        "class": 10,
        "name": "How do Organisms Reproduce?",
        "weight": 6,
        "desc": "Asexual fission/budding, flower anatomy, pollination, and human reproductive cycles.",
        "vernacular": { "English": "Remember that pollination is pollen transfer from anther to stigma, whereas fertilization is fusion of male and female gametes inside the ovule." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 07: Gametogenesis &amp; Generational Continuity</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>DNA Replication: The Precision Engine</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Reproduction at its core is the creation of a DNA copy alongside cellular apparatus. Subtle biochemical variations during DNA copying provide the variations necessary for species adaptation and natural selection under shifting environmental niches.</p>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Modes of Reproduction &amp; Morphological Comparison</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Asexual vs Sexual</span>
        </div>
        <div class="overflow-x-auto text-xs font-mono">
            <table class="w-full border-collapse border border-slate-700 text-left">
                <thead>
                    <tr class="bg-slate-900/80 text-slate-300">
                        <th class="p-2.5 border border-slate-700">Mode</th>
                        <th class="p-2.5 border border-slate-700">Organism Example</th>
                        <th class="p-2.5 border border-slate-700">Key Mechanism</th>
                        <th class="p-2.5 border border-slate-700">Diagnostic Feature</th>
                    </tr>
                </thead>
                <tbody class="text-slate-300 text-[11px]">
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Binary Fission</td>
                        <td class="p-2.5 border border-slate-700">Amoeba, Leishmania</td>
                        <td class="p-2.5 border border-slate-700">Karyokinesis followed by cytokinesis into 2 equal halves.</td>
                        <td class="p-2.5 border border-slate-700">In Leishmania, fission occurs longitudinally along a fixed whip-like flagellum.</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">Regeneration &amp; Budding</td>
                        <td class="p-2.5 border border-slate-700">Planaria, Hydra</td>
                        <td class="p-2.5 border border-slate-700">Specialized regenerative cells proliferate into entire organisms.</td>
                        <td class="p-2.5 border border-slate-700">Bud develops as an outgrowth from repeated cell division at one specific site.</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Vegetative Propagation</td>
                        <td class="p-2.5 border border-slate-700">Bryophyllum (leaves), Rose (grafting)</td>
                        <td class="p-2.5 border border-slate-700">Adventitious buds in leaf notches or stems produce identical clones.</td>
                        <td class="p-2.5 border border-slate-700">Enables seedless varieties (banana, orange) to propagate uniformly.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Worked Derivation [5 Marks]: Angiosperm Double Fertilization &amp; Placenta Function</h4>
            <span class="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-800">Embryology Proof</span>
        </div>
        <div class="space-y-2.5 font-mono text-[11px] text-slate-300">
            <p><strong>1. Double Fertilization in Flowering Plants:</strong><br>
            • Pollen grain germinates on stigma $\rightarrow$ Pollen tube grows through style to ovary.<br>
            • Syngamy: 1st male gamete ($n$) + Female egg cell ($n$) $\rightarrow$ Diploid Zygote ($2n$).<br>
            • Triple Fusion: 2nd male gamete ($n$) + 2 Polar nuclei ($2n$) $\rightarrow$ Triploid Endosperm ($3n$).<br>
            • Ovule transforms into seed; ovary ripens into the fruit.</p>
            <p><strong>2. Placental Physiological Exchange:</strong><br>
            Placenta is a specialized disc-like vascular tissue embedded in the uterine wall containing chorionic villi on the embryo side surrounded by maternal blood spaces. Provides massive surface area for glucose and $O_2$ transfer from mother to fetus, and collects fetal urea and $CO_2$ for maternal excretion. ■</p>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Foundation Level",
                "q": "Which part of the flower develops into a fruit after fertilization?",
                "options": [
                    "Ovary",
                    "Ovule",
                    "Stigma",
                    "Anther"
                ],
                "correct": 0,
                "solution": "After double fertilization, the fertilized ovule develops into a protective seed containing the embryo, while the ovary ripens to form the surrounding fruit."
            }
        ],
        "doubts": [
            { "chip": "Double Fertilization Steps", "q": "Explain syngamy and triple fusion in flowering plants with their end products (zygote and endosperm)." },
            { "chip": "Placenta Structure & Function", "q": "Describe the structure and functions of the placenta in human embryonic nutrition and waste removal." },
            { "chip": "Binary Fission in Leishmania", "q": "How does binary fission in Leishmania differ from that in Amoeba? Explain its definite orientation." },
            { "chip": "Regeneration vs Reproduction", "q": "Why is regeneration in Planaria not considered the same as reproduction? State the role of specialized cells." },
            { "chip": "Self vs Cross Pollination", "q": "Differentiate between self-pollination and cross-pollination. How do plants prevent self-pollination?" },
            { "chip": "Menstrual Cycle Phases", "q": "Explain what happens when an egg is not fertilized in the female reproductive system." },
            { "chip": "Contraception Methods (3 Types)", "q": "Classify contraceptive methods into barrier, hormonal, and surgical categories with one example each." },
            { "chip": "Vegetative Propagation Merits", "q": "State three advantages of practicing vegetative propagation in commercial horticulture (e.g. seedless fruits)." }
        ]
    },

    "S10_CH08": {
        "code": "Science 08",
        "class": 10,
        "name": "Heredity",
        "weight": 5,
        "desc": "Mendelian monohybrid/dihybrid crosses, dominant/recessive alleles, and sex determination.",
        "vernacular": { "English": "Remember: The phenotypic ratio for a dihybrid cross is 9:3:3:1, but the monohybrid F2 ratio is 3:1." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 08: Mendelian Allelic Segregation &amp; Genetics</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>Allelic Dominance &amp; Chromosomal Shuffling</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Gregor Mendel proved traits do not blend into a muddy intermediate; they are inherited as discrete particulate units (genes) occurring in pairs. Dominant alleles express even in heterozygous condition ($Tt$), while recessive traits emerge only in homozygous pairing ($tt$).</p>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Mendelian Crosses &amp; Genetic Ratios</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Punnett Squares</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Monohybrid Cross ($TT \times tt$)</span>
                <p class="text-slate-300 text-[11px]">• $F_1$ Generation: All $Tt$ (Tall plants)<br>• $F_2$ Phenotypic Ratio: <strong>3 Tall : 1 Dwarf</strong><br>• $F_2$ Genotypic Ratio: <strong>1 TT : 2 Tt : 1 tt (1:2:1)</strong></p>
            </div>
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Dihybrid Cross ($RRYY \times rryy$)</span>
                <p class="text-slate-300 text-[11px]">• $F_1$: All Round Yellow ($RrYy$)<br>• $F_2$ Phenotypic Ratio: <strong>9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9:3:3:1)</strong></p>
            </div>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400">Worked Derivation [5 Marks]: Genetic Mechanism of Sex Determination in Humans</h4>
            <span class="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded font-bold border border-indigo-800">Cytogenetics</span>
        </div>
        <div class="space-y-2.5 font-mono text-[11px] text-slate-300">
            <p><strong>1. Karyotype Constitution:</strong><br>
            Humans possess 23 pairs of chromosomes: 22 pairs of autosomes + 1 pair of sex chromosomes.<br>
            • Female: Homogametic $XX$ (produces only $X$-bearing ova).<br>
            • Male: Heterogametic $XY$ (produces 50% $X$-bearing and 50% $Y$-bearing sperms).</p>
            <p><strong>2. Punnett Determination Matrix:</strong><br>
            • Sperm ($X$) + Ovum ($X$) $\rightarrow XX$ (Female Child - 50% probability)<br>
            • Sperm ($Y$) + Ovum ($X$) $\rightarrow XY$ (Male Child - 50% probability)<br>
            <strong>Conclusion:</strong> The sex of a child is determined entirely by the paternal sperm, refuting social biases. ■</p>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Foundation Level",
                "q": "A cross between a tall pea plant (TT) and a short pea plant (tt) resulted in progeny that were all tall because:",
                "options": [
                    "Tallness is the dominant trait",
                    "Shortness is the dominant trait",
                    "Tallness is recessive to dwarfness",
                    "Height in plants is not governed by genes"
                ],
                "correct": 0,
                "solution": "In heterozygous condition (Tt), only the dominant allele (T) expresses phenotypically, rendering all F1 progeny tall."
            }
        ],
        "doubts": [
            { "chip": "Mendel's Monohybrid Cross 3:1", "q": "Explain Mendel's law of segregation with a monohybrid cross between pure tall (TT) and dwarf (tt) pea plants." },
            { "chip": "Dihybrid Cross 9:3:3:1 Proof", "q": "Show the Punnett square for the F2 generation of a dihybrid cross involving seed shape and color (RrYy x RrYy)." },
            { "chip": "Human Sex Determination (XY)", "q": "Prove with a genetic cross diagram that human male sperms determine the sex of the child, not the mother." },
            { "chip": "Dominant vs Recessive Alleles", "q": "Differentiate between dominant and recessive traits with examples from Mendel's experiments on Pisum sativum." },
            { "chip": "Acquired vs Inherited Traits", "q": "Why are acquired traits (e.g. muscle buildup or lost tail) not passed on to subsequent generations?" },
            { "chip": "Law of Independent Assortment", "q": "State Mendel's Law of Independent Assortment. How was it derived from dihybrid crosses?" },
            { "chip": "Phenotypic vs Genotypic Ratio", "q": "What is the difference between phenotypic ratio (3:1) and genotypic ratio (1:2:1) in a monohybrid F2 generation?" },
            { "chip": "Speciation & Genetic Drift", "q": "How do genetic drift and geographical isolation lead to the formation of a new species?" }
        ]
    },

    "S10_CH09": {
        "code": "Science 09",
        "class": 10,
        "name": "Light - Reflection and Refraction",
        "weight": 8,
        "desc": "Mirror formula, Snell law, lens formula, and optical magnification.",
        "vernacular": { "English": "Strictly follow Cartesian sign conventions: focal length of concave mirror/lens is ALWAYS negative; convex mirror/lens focal length is ALWAYS positive." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 09: Geometric Optics &amp; Wave Boundaries</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>Fermat's Principle of Least Time</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Light always selects the path that minimizes travel time. When light enters a denser optical medium, its velocity decreases, causing wavefronts to pivot toward the normal (Snell's Law: $n = \frac{c}{v}$).</p>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Mathematical Sign Conventions &amp; Optical Formulae</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Cartesian Rules</span>
        </div>
        <div class="overflow-x-auto text-xs font-mono">
            <table class="w-full border-collapse border border-slate-700 text-left">
                <thead>
                    <tr class="bg-slate-900/80 text-slate-300">
                        <th class="p-2.5 border border-slate-700">Parameter</th>
                        <th class="p-2.5 border border-slate-700">Spherical Mirrors</th>
                        <th class="p-2.5 border border-slate-700">Spherical Lenses</th>
                    </tr>
                </thead>
                <tbody class="text-slate-300 text-[11px]">
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Fundamental Equation</td>
                        <td class="p-2.5 border border-slate-700">$$\frac{1}{f} = \frac{1}{v} + \frac{1}{u}$$</td>
                        <td class="p-2.5 border border-slate-700">$$\frac{1}{f} = \frac{1}{v} - \frac{1}{u}$$</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Linear Magnification</td>
                        <td class="p-2.5 border border-slate-700">$$m = \frac{h'}{h} = -\frac{v}{u}$$</td>
                        <td class="p-2.5 border border-slate-700">$$m = \frac{h'}{h} = +\frac{v}{u}$$</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">Focal Length ($f$) Sign</td>
                        <td class="p-2.5 border border-slate-700">Concave: $f < 0$ ($-$) | Convex: $f > 0$ ($+$)</td>
                        <td class="p-2.5 border border-slate-700">Concave: $f < 0$ ($-$) | Convex: $f > 0$ ($+$)</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-cyan-400">Lens Power</td>
                        <td class="p-2.5 border border-slate-700">Not Applicable</td>
                        <td class="p-2.5 border border-slate-700">$$P = \frac{1}{f\text{ (in meters)}}\text{ Dioptres (D)}$$</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Worked Numerical [5 Marks]: Convex Lens Derivation &amp; Ray Tracing</h4>
            <span class="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-800">Numerical Protocol</span>
        </div>
        <div class="space-y-2.5 font-mono text-[11px] text-slate-300">
            <p><strong>Problem:</strong> An object 4 cm tall is placed 25 cm in front of a convex lens of focal length 15 cm. Calculate image distance, size, and nature.</p>
            <p><strong>Step 1: Sign Declarations:</strong><br>
            $h = +4\text{ cm}, \quad u = -25\text{ cm}, \quad f = +15\text{ cm}$</p>
            <p><strong>Step 2: Lens Formula:</strong><br>
            $$\frac{1}{v} - \frac{1}{u} = \frac{1}{f} \implies \frac{1}{v} = \frac{1}{15} + \frac{1}{-25} = \frac{5 - 3}{75} = \frac{2}{75} \implies v = +37.5\text{ cm}$$</p>
            <p><strong>Step 3: Size &amp; Nature:</strong><br>
            $$m = \frac{v}{u} = \frac{+37.5}{-25} = -1.5$$<br>
            $$h' = m \times h = -1.5 \times 4 = -6.0\text{ cm}$$<br>
            <strong>Verdict:</strong> The image is formed at 37.5 cm on the opposite side, is Real, Inverted ($h' < 0$), and Magnified. ■</p>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Numerical Trap",
                "q": "A convex lens has a focal length of 50 cm. Its optical power is:",
                "options": [
                    "+2.0 Dioptres",
                    "-2.0 Dioptres",
                    "+0.02 Dioptres",
                    "+5.0 Dioptres"
                ],
                "correct": 0,
                "solution": "P = 1 / f(in meters). Here f = +50 cm = +0.5 m. Power P = 1 / 0.5 = +2.0 D."
            }
        ],
        "doubts": [
            { "chip": "Cartesian Sign Convention", "q": "State the Cartesian sign conventions for object distance, image distance, and focal length for spherical mirrors and lenses." },
            { "chip": "Concave Mirror Virtual Image", "q": "Draw a ray diagram for an object placed between pole (P) and focus (F) of a concave mirror. State magnification sign." },
            { "chip": "Mirror vs Lens Formula Difference", "q": "Differentiate between the mirror formula (1/f = 1/v + 1/u) and lens formula (1/f = 1/v - 1/u) with magnification signs." },
            { "chip": "Power of Combined Lenses", "q": "A convex lens of focal length 25 cm is placed in contact with a concave lens of focal length 20 cm. Find the power of combination." },
            { "chip": "Snell's Law & Refractive Index", "q": "State Snell's Law of refraction and calculate the speed of light in diamond if its refractive index is 2.42." },
            { "chip": "Lateral Displacement in Glass Slab", "q": "Draw the ray diagram showing lateral displacement through a rectangular glass slab. Why is emergent ray parallel to incident ray?" },
            { "chip": "Rear-View Convex Mirror Merits", "q": "Why are convex mirrors preferred as rear-view mirrors in vehicles over plane and concave mirrors?" },
            { "chip": "Significance of Magnification m = -1", "q": "What is the physical significance if linear magnification m = -1 for a spherical mirror? State object position." }
        ]
    },

    "S10_CH10": {
        "code": "Science 10",
        "class": 10,
        "name": "The Human Eye and the Colourful World",
        "weight": 5,
        "desc": "Accommodation, myopia/hypermetropia correction, atmospheric refraction, and Rayleigh scattering.",
        "vernacular": { "English": "Remember: Myopia is corrected using a Concave lens (diverging), while Hypermetropia is corrected using a Convex lens (converging)." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 10: Wave Optics &amp; Atmospheric Dispersion</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>Wavelength-Dependent Scattering ($I \propto 1/\lambda^4$)</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Rayleigh scattering dictates that shorter wavelengths (blue light) scatter nearly 16 times more intensely than longer wavelengths (red light). This fundamental optical law explains why daytime skies appear blue, while setting suns shine deep red through thick atmospheric horizons.</p>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Defects of Vision &amp; Corrective Lenses</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Vision Diagnostic</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Myopia (Short-sightedness)</span>
                <p class="text-slate-300 text-[11px]">• Cause: Excessive curvature of the eye lens or elongation of the eyeball.<br>• Defect: Image forms <em>in front of</em> the retina.<br>• Correction: <strong>Concave Lens</strong> ($f < 0$) diverges incident rays to retina.</p>
            </div>
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Hypermetropia (Far-sightedness)</span>
                <p class="text-slate-300 text-[11px]">• Cause: Focal length of eye lens too long or eyeball too small.<br>• Defect: Image forms <em>behind</em> the retina.<br>• Correction: <strong>Convex Lens</strong> ($f > 0$) provides initial convergence.</p>
            </div>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400">Worked Derivation [5 Marks]: Atmospheric Refraction &amp; Rainbow Physics</h4>
            <span class="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded font-bold border border-indigo-800">Atmospheric Phenomena</span>
        </div>
        <div class="space-y-2.5 font-mono text-[11px] text-slate-300">
            <p><strong>1. Three-Stage Rainbow Formation in Raindrops:</strong><br>
            • Refraction &amp; Dispersion: Sunlight entering spherical raindrop splits into spectral colors (VIBGYOR).<br>
            • Internal Reflection: Light reflects off the back interior surface of the droplet.<br>
            • Refraction out of Droplet: Light bends back into observer's eyes with violet at 40° and red at 42°.</p>
            <p><strong>2. Advanced Sunrise &amp; Delayed Sunset:</strong><br>
            Due to atmospheric refraction bending sunlight over the curved horizon, the sun appears visible ~2 minutes before actual horizon crossing and remains visible ~2 minutes after sunset, extending apparent daylight by 4 minutes. ■</p>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Foundation Level",
                "q": "The twinkling of stars at night is caused by:",
                "options": [
                    "Atmospheric refraction through changing refractive index layers of air",
                    "Periodic fluctuations in light emission by the star",
                    "Total internal reflection inside cloud crystals",
                    "Rayleigh scattering of starlight"
                ],
                "correct": 0,
                "solution": "Starlight enters Earth's atmosphere through continuously fluctuating temperature and density gradients, altering refractive indices and making apparent positions waver."
            }
        ],
        "doubts": [
            { "chip": "Myopia Causes & Concave Lens Ray Diagram", "q": "Explain the causes of myopia (nearsightedness) and show how a concave lens corrects the defect with a ray diagram." },
            { "chip": "Hypermetropia & Convex Lens", "q": "What is hypermetropia? Explain its two causes and show with ray diagrams how a convex lens corrects it." },
            { "chip": "Presbyopia & Bifocal Lens", "q": "What is presbyopia? Why does it occur in old age and why are bifocal lenses required?" },
            { "chip": "Why Sky is Blue (Rayleigh Law)", "q": "Explain why the clear sky appears blue in daytime using Rayleigh scattering formula (I proportional to 1/lambda^4)." },
            { "chip": "3 Stages of Rainbow Formation", "q": "Describe the three optical stages (refraction, dispersion, internal reflection) occurring inside a raindrop to form a rainbow." },
            { "chip": "Advanced Sunrise & Delayed Sunset", "q": "Why is the sun visible about 2 minutes before actual sunrise and 2 minutes after sunset? Explain atmospheric refraction." },
            { "chip": "Why Planets Don't Twinkle", "q": "Why do stars twinkle at night while planets do not twinkle? Explain point source vs extended source optics." },
            { "chip": "Red Light for Danger Signals", "q": "Why are danger signal lights always red in color? Explain in terms of wavelength and atmospheric smoke scattering." }
        ]
    },

    "S10_CH11": {
        "code": "Science 11",
        "class": 10,
        "name": "Electricity",
        "weight": 7,
        "desc": "Ohm law, resistivity, series/parallel combinations, Joule heating, and electric power.",
        "vernacular": { "English": "In parallel resistor networks, voltage remains constant while currents divide ($I = I_1 + I_2$). In series, current is constant while voltages divide." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 11: Drift Dynamics &amp; Resistive Networks</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>Electric Potential as Hydraulic Pressure</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Electric potential ($V = W/Q$) is the electrical pump pressure forcing electrons through a conductor. Resistance ($R = \rho \frac{l}{A}$) represents frictional collisions with metallic crystal lattice ions, which converts electrical drift energy into thermal Joule heating ($H = I^2 R t$).</p>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Core Circuit Formulae &amp; Resistor Networks</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Formula Matrix</span>
        </div>
        <div class="overflow-x-auto text-xs font-mono">
            <table class="w-full border-collapse border border-slate-700 text-left">
                <thead>
                    <tr class="bg-slate-900/80 text-slate-300">
                        <th class="p-2.5 border border-slate-700">Physical Law</th>
                        <th class="p-2.5 border border-slate-700">Governing Formula</th>
                        <th class="p-2.5 border border-slate-700">SI Units</th>
                        <th class="p-2.5 border border-slate-700">Circuit Behavior</th>
                    </tr>
                </thead>
                <tbody class="text-slate-300 text-[11px]">
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-indigo-400">Ohm's Law</td>
                        <td class="p-2.5 border border-slate-700">$$V = I R$$</td>
                        <td class="p-2.5 border border-slate-700">Volts ($V$), Ohms ($\Omega$)</td>
                        <td class="p-2.5 border border-slate-700">Linear slope of $V-I$ graph gives conductor resistance.</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-emerald-400">Resistivity Formula</td>
                        <td class="p-2.5 border border-slate-700">$$R = \rho \frac{l}{A}$$</td>
                        <td class="p-2.5 border border-slate-700">Resistivity: $\Omega \cdot \text{m}$</td>
                        <td class="p-2.5 border border-slate-700">Doubling length doubles $R$; doubling wire radius cuts $R$ by factor of 4!</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-amber-400">Series vs Parallel</td>
                        <td class="p-2.5 border border-slate-700">$$R_s = R_1 + R_2$$<br>$$\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2}$$</td>
                        <td class="p-2.5 border border-slate-700">Ohms ($\Omega$)</td>
                        <td class="p-2.5 border border-slate-700">Parallel arrangement lowers effective resistance and ensures independent appliance control.</td>
                    </tr>
                    <tr>
                        <td class="p-2.5 border border-slate-700 font-bold text-rose-400">Joule's Law of Heating</td>
                        <td class="p-2.5 border border-slate-700">$$H = I^2 R t = V I t = \frac{V^2}{R} t$$</td>
                        <td class="p-2.5 border border-slate-700">Joules ($J$), Watts ($W$)</td>
                        <td class="p-2.5 border border-slate-700">Explains electric fuses, toasters, and nichrome heating elements.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Worked Numerical [5 Marks]: Equivalent Resistance &amp; Commercial Power Billing</h4>
            <span class="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-800">CBSE Numerical</span>
        </div>
        <div class="space-y-2.5 font-mono text-[11px] text-slate-300">
            <p><strong>Problem:</strong> Three resistors of $5\,\Omega, 10\,\Omega,$ and $30\,\Omega$ are connected in parallel to a $12\,\text{V}$ battery. Calculate total circuit resistance, total current, and commercial energy consumed in 2 hours in kWh.</p>
            <p><strong>Step 1: Equivalent Parallel Resistance:</strong><br>
            $$\frac{1}{R_p} = \frac{1}{5} + \frac{1}{10} + \frac{1}{30} = \frac{6 + 3 + 1}{30} = \frac{10}{30} = \frac{1}{3} \implies R_p = 3\,\Omega$$</p>
            <p><strong>Step 2: Total Circuit Current:</strong><br>
            $$I = \frac{V}{R_p} = \frac{12\text{ V}}{3\,\Omega} = 4.0\text{ A}$$</p>
            <p><strong>Step 3: Power &amp; Commercial Energy Units:</strong><br>
            $$P = V \times I = 12\text{ V} \times 4\text{ A} = 48\text{ W} = 0.048\text{ kW}$$<br>
            $$E = P \times t = 0.048\text{ kW} \times 2\text{ h} = 0.096\text{ kWh (Units)} \quad \blacksquare$$</p>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Numerical Trap",
                "q": "If a wire of resistance R is melted and stretched to twice its original length, its new resistance becomes:",
                "options": [
                    "4R",
                    "2R",
                    "R/2",
                    "R/4"
                ],
                "correct": 0,
                "solution": "When length doubles (l' = 2l), volume remains constant so area halves (A' = A/2). New resistance R' = ρ(2l)/(A/2) = 4 [ρl/A] = 4R."
            }
        ],
        "doubts": [
            { "chip": "Ohm's Law & V-I Graph Slope", "q": "State Ohm's Law and explain what the slope of a V-I graph represents. What are ohmic vs non-ohmic conductors?" },
            { "chip": "Wire Stretched 2x -> 4R Proof", "q": "A cylindrical wire of resistance R is stretched to twice its length. Prove mathematically that its new resistance is 4R." },
            { "chip": "Parallel vs Series Domestic Merits", "q": "Why is household wiring always arranged in parallel rather than series? State three distinct advantages." },
            { "chip": "Joule's Law & Electric Fuse Rating", "q": "State Joule's Law of Heating. How does an electric fuse wire function to protect home appliances from overloading?" },
            { "chip": "Resistivity vs Resistance Factors", "q": "Differentiate between resistance (R) and electrical resistivity (rho). How does temperature affect resistivity of metals vs alloys?" },
            { "chip": "Commercial Unit of Energy (kWh)", "q": "Define 1 kilowatt-hour (kWh) and convert it into Joules. Calculate electricity cost for 200 units at Rs 6.50/unit." },
            { "chip": "Electric Power Formulas Comparison", "q": "Explain when to use P = I^2 R (series) versus P = V^2 / R (parallel) when analyzing bulb brightness." },
            { "chip": "Why Tungsten for Bulb Filaments", "q": "Why is tungsten exclusively used for filament of incandescent lamps, and why are bulbs filled with argon/nitrogen gas?" }
        ]
    },

    "S10_CH12": {
        "code": "Science 12",
        "class": 10,
        "name": "Magnetic Effects of Electric Current",
        "weight": 5,
        "desc": "Magnetic field lines, right-hand thumb rule, Fleming left-hand rule, and electromagnetic induction.",
        "vernacular": { "English": "Remember: Fleming's Left-Hand Rule is for electric motors (thrust/motion), while the Right-Hand Thumb Rule determines magnetic field direction." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 12: Electromagnetism &amp; Lorentz Force</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>Moving Charges Create Magnetic Vector Fields</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Hans Christian Oersted (1820) noticed a compass needle twitch beside a current-carrying wire. Electricity and magnetism are not independent forces, but two aspects of electromagnetism: moving charges create magnetic vortex loops.</p>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Electromagnetic Hand Rules &amp; Field Principles</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Field Vectors</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Right-Hand Thumb Rule (Maxwell)</span>
                <p class="text-slate-300 text-[11px]">Grasp current-carrying conductor with right hand: Thumb points in direction of current ($I$), curled fingers give direction of circular concentric magnetic field lines ($B$).</p>
            </div>
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Fleming's Left-Hand Rule (Motor)</span>
                <p class="text-slate-300 text-[11px]">Stretch Thumb, Forefinger, and Middle finger mutually perpendicular:<br>• <strong>F</strong>orefinger = Magnetic <strong>F</strong>ield ($B$)<br>• <strong>C</strong>entre finger = <strong>C</strong>urrent ($I$)<br>• <strong>Th</strong>umb = Direction of <strong>Th</strong>rust / Force ($F$)</p>
            </div>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400">Worked Derivation [5 Marks]: Solenoid Field Properties &amp; Domestic Safety Earthing</h4>
            <span class="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded font-bold border border-indigo-800">Apparatus Principles</span>
        </div>
        <div class="space-y-2.5 font-mono text-[11px] text-slate-300">
            <p><strong>1. Magnetic Field of a Current-Carrying Solenoid:</strong><br>
            • Inside the core, magnetic field lines are parallel straight lines, proving the magnetic field is <em>uniform</em> throughout the interior.<br>
            • External field resembles a bar magnet with North and South poles.<br>
            • Inserting a soft iron core creates a high-power temporary Electromagnet.</p>
            <p><strong>2. Domestic Grounding / Earthing Wire:</strong><br>
            The green earth wire connects metallic casings of high-power appliances (heaters, irons, refrigerators) directly to a deep metal plate underground. In case of insulation breakdown, current flows through the low-resistance earth wire rather than through the human body, tripping the fuse safely. ■</p>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Foundation Level",
                "q": "The magnetic field inside a long straight solenoid carrying current is:",
                "options": [
                    "The same at all points (Uniform)",
                    "Zero at the center",
                    "Decreases as we move towards its ends",
                    "Increases as we move towards its ends"
                ],
                "correct": 0,
                "solution": "The field lines inside a solenoid are parallel straight lines, indicating that the magnetic field strength is uniform at all internal points."
            }
        ],
        "doubts": [
            { "chip": "Solenoid Field Uniformity Proof", "q": "Describe the pattern of magnetic field lines inside and outside a current-carrying solenoid. Why is the core field uniform?" },
            { "chip": "Fleming's Left-Hand Rule (FBI)", "q": "State Fleming's Left-Hand Rule and show how it determines the direction of mechanical force acting on a conductor." },
            { "chip": "Domestic Earthing Wire Role", "q": "What is the function of the earth wire in domestic circuits? Why is it connected to metal-cased appliances like refrigerators?" },
            { "chip": "Right-Hand Thumb Rule", "q": "State Maxwell's Right-Hand Thumb Rule to determine the direction of concentric magnetic field lines around a straight wire." },
            { "chip": "Why Field Lines Never Intersect", "q": "Why can two magnetic field lines never intersect each other at any point? Explain compass needle direction." },
            { "chip": "Short-Circuit vs Overloading", "q": "Differentiate between short-circuiting (zero resistance direct contact) and overloading in domestic electrical systems." },
            { "chip": "Electromagnet vs Permanent Magnet", "q": "Differentiate between an electromagnet (soft iron core) and a permanent steel magnet in terms of field control." },
            { "chip": "Domestic AC Frequency (50 Hz)", "q": "What is meant by an alternating current frequency of 50 Hz in India? How many times does it reverse direction per second?" }
        ]
    },

    "S10_CH13": {
        "code": "Science 13",
        "class": 10,
        "name": "Our Environment",
        "weight": 4,
        "desc": "Ecosystem structure, food chains, 10% energy transfer rule, biomagnification, ozone depletion.",
        "vernacular": { "English": "Remember that energy flow through an ecosystem is strictly UNIDIRECTIONAL and obeys Lindeman's 10% law." },
        "overview": `<div class="space-y-4">
    <div class="inline-block"><span class="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50">FIRST-PRINCIPLES INTUITION</span></div>
    <h3 class="text-base font-bold text-white tracking-wide">Chapter 13: Trophic Thermodynamics &amp; Ecological Balance</h3>
    <div class="p-4 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-1.5">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs"><span>💡</span><span>Lindeman's 10% Thermodynamic Law</span></div>
        <p class="text-xs text-slate-300 leading-relaxed font-sans">Only ~10% of chemical energy stored in food is converted into new biomass at the next trophic level; the remaining 90% is dissipated as metabolic respiration and entropy heat. This explains why natural food chains rarely exceed 4 or 5 trophic levels.</p>
    </div>
</div>`,
        "exp1": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4">
        <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300">1. Ecological Energy Dynamics &amp; Environmental Issues</h4>
            <span class="text-[10px] font-mono bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/60">Trophic Principles</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Biological Magnification</span>
                <p class="text-slate-300 text-[11px]">Non-biodegradable chemicals (pesticides, heavy metals, DDT) cannot be metabolized and accumulate in progressively higher concentrations at each successive trophic level, reaching maximum toxicity in apex predators and humans.</p>
            </div>
            <div class="p-3.5 bg-background rounded-xl border border-slate-800 space-y-1.5">
                <span class="text-indigo-400 font-bold text-[11px] uppercase block">Ozone ($O_3$) Stratospheric Shield</span>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                $$O_2 \\xrightarrow{\text{UV}} O + O \implies O + O_2 \rightarrow O_3$$<br>
                Chlorofluorocarbons (CFCs) release chlorine radicals that catalytically break down $O_3$, exposing Earth to harmful carcinogenic UV rays.
                </p>
            </div>
        </div>
    </div>
</div>`,
        "exp2": `<div class="space-y-6">
    <div class="p-5 rounded-xl bg-surfaceLight border border-slate-700/70 space-y-4 text-xs shadow-sm leading-relaxed">
        <div class="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Worked Problem [3 Marks]: 10% Trophic Energy Calculation</h4>
            <span class="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-800">Energy Audit</span>
        </div>
        <div class="space-y-2.5 font-mono text-[11px] text-slate-300">
            <p><strong>Problem:</strong> If 20,000 J of solar radiant energy falls on green producers, calculate the energy available to lions in the food chain: $\text{Plants} \rightarrow \text{Deer} \rightarrow \text{Lion}$.</p>
            <p><strong>Step 1: Solar to Producer Capture (1% Rule):</strong><br>
            Terrestrial green plants capture only ~1% of incident sunlight energy:<br>
            $$E_{\text{Plants}} = 1\% \times 20,000\text{ J} = 200\text{ J}$$</p>
            <p><strong>Step 2: Primary Consumer (10% Rule):</strong><br>
            $$E_{\text{Deer}} = 10\% \times 200\text{ J} = 20\text{ J}$$</p>
            <p><strong>Step 3: Secondary Consumer (Lion):</strong><br>
            $$E_{\text{Lion}} = 10\% \times 20\text{ J} = 2\text{ Joules} \quad \blacksquare$$</p>
        </div>
    </div>
</div>`,
        "diagnostics": [
            {
                "difficulty": "Foundation Level",
                "q": "In a food chain consisting of Grass -> Deer -> Tiger, if the amount of energy at the producer level is 10,000 J, the energy available to the Tiger is:",
                "options": [
                    "100 J",
                    "1,000 J",
                    "10 J",
                    "10,000 J"
                ],
                "correct": 0,
                "solution": "Applying Lindeman's 10% law: Producers = 10,000 J -> Deer (Herbivore) = 1,000 J -> Tiger (Carnivore) = 100 J."
            }
        ],
        "doubts": [
            { "chip": "Lindeman's 10% Energy Law", "q": "State Lindeman's 10% Law of energy transfer. Calculate the energy reaching the top carnivore if producers synthesize 20,000 J." },
            { "chip": "Why Food Chains are 3-4 Steps", "q": "Why do natural food chains rarely exceed 3 to 4 trophic levels? Explain in terms of energy dissipation." },
            { "chip": "Biomagnification in Apex Predators", "q": "What is biological magnification? Explain why non-biodegradable pesticides like DDT reach maximum concentration in humans." },
            { "chip": "Ozone (O3) Formation & CFCs", "q": "How is ozone formed in the upper stratosphere? Write the chemical equations and explain how CFCs deplete it." },
            { "chip": "Biodegradable vs Non-Bio Waste", "q": "Differentiate between biodegradable and non-biodegradable substances. Why do non-biodegradable wastes persist indefinitely?" },
            { "chip": "Role of Decomposers in Ecosystem", "q": "What will happen if all decomposers (bacteria and fungi) are eliminated from an ecosystem?" },
            { "chip": "UNEP 1987 Montreal Protocol", "q": "What was the significance of the 1987 UNEP agreement on freezing Chlorofluorocarbon (CFC) production?" },
            { "chip": "Food Web vs Food Chain", "q": "Differentiate between a linear food chain and a branched ecological food web in terms of ecosystem resilience." }
        ]
    }
};

// Automatic backward-compatible bridge:
// Populates window.chapterDoubtBank so index.html's Tab 5 works immediately without any edits to index.html
if (typeof window !== 'undefined' && window.scienceChapterRegistry) {
    window.chapterDoubtBank = window.chapterDoubtBank || {};
    Object.keys(window.scienceChapterRegistry).forEach(function(k) {
        var ch = window.scienceChapterRegistry[k];
        if (ch && ch.doubts) {
            window.chapterDoubtBank[k] = ch.doubts;
        }
    });
}
