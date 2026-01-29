const MIM_REVIEW_DATA = {
    id: "mim_review",
    title: "Révision Mim Sakina",
    type: "Révision",
    steps: [
        {
            type: "lesson",
            prof: "Révision Complète du Mim Sakina.<br>Résumons les 3 règles avant l'examen.",
            html: `
            <div class="concept-card">
                <h3>Carte Mémoire : Mim Sakina</h3>
                <p>Le Mim Sakina (مْ) a 3 situations possibles selon la lettre qui suit.</p>
                
                <div style="display:grid; grid-template-columns:1fr; gap:15px; text-align:left;">
                    
                    <!-- IDGHAM -->
                    <div style="background:#e3f2fd; padding:15px; border-radius:10px; border-left:5px solid #2196f3;">
                        <div style="font-weight:bold; color:#1565c0; margin-bottom:5px;">1. IDGHAM SHAFAWI (Fusion)</div>
                        <div style="font-size:0.9rem; color:#555;">Si suivi d'un <strong style="color:#2196f3;">Mim (م)</strong>.</div>
                        <div class="ar-inline" style="display:block; margin-top:5px;">لَهُم مَّا</div>
                        <div style="font-size:0.8rem; margin-top:5px;">🎤 On fusionne avec Ghunna (2 temps).</div>
                    </div>

                    <!-- IKHFAA -->
                    <div style="background:#fff3e0; padding:15px; border-radius:10px; border-left:5px solid #ff9800;">
                        <div style="font-weight:bold; color:#e65100; margin-bottom:5px;">2. IKHFAA SHAFAWI (Dissimulation)</div>
                        <div style="font-size:0.9rem; color:#555;">Si suivi d'un <strong style="color:#ff9800;">Ba (ب)</strong>.</div>
                        <div class="ar-inline" style="display:block; margin-top:5px;">تَرْمِيهِم بِحِجَارَةٍ</div>
                        <div style="font-size:0.8rem; margin-top:5px;">🎤 Lèvres entre-ouvertes (ou effleurement) + Ghunna.</div>
                    </div>

                    <!-- IZHAR -->
                    <div style="background:#e8f5e9; padding:15px; border-radius:10px; border-left:5px solid #4caf50;">
                        <div style="font-weight:bold; color:#2e7d32; margin-bottom:5px;">3. IZHAR SHAFAWI (Clarté)</div>
                        <div style="font-size:0.9rem; color:#555;">Toutes les <strong style="color:#4caf50;">autres lettres</strong>.</div>
                        <div class="ar-inline" style="display:block; margin-top:5px;">هُمْ فِيهَا</div>
                        <div style="font-size:0.8rem; margin-top:5px;">🎤 Son clair, lèvres fermées, sans Ghunna longue.</div>
                    </div>
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "L'Algorithme Mental.<br>Comment décider en une fraction de seconde ?",
            html: `
            <div class="concept-card">
                <h3>Algorithme du Mim Sakina</h3>
                <div class="flow-chart">
                    <div class="flow-step">
                        <div class="flow-num">1</div>
                        <div>Je vois un <strong>Mim Sakina (مْ)</strong></div>
                    </div>
                    <div class="flow-arrow">▼</div>
                    <div class="flow-step">
                        <div class="flow-num">2</div>
                        <div>Je regarde la <strong>lettre suivante</strong></div>
                    </div>
                    <div class="flow-arrow">▼</div>
                    
                    <div style="display:flex; justify-content:center; gap:10px;">
                        <div style="flex:1;">
                            <div class="flow-arrow">C'est un<br><strong>MIM (م)</strong></div>
                            <div class="flow-step flow-final" style="background:#e3f2fd; border-color:#2196f3;">
                                <strong>IDGHAM</strong><br>Fusion + Ghunna
                            </div>
                        </div>
                        <div style="flex:1;">
                            <div class="flow-arrow">C'est un<br><strong>BA (ب)</strong></div>
                            <div class="flow-step flow-final" style="background:#fff3e0; border-color:#ff9800;">
                                <strong>IKHFAA</strong><br>Cache + Ghunna
                            </div>
                        </div>
                        <div style="flex:1;">
                            <div class="flow-arrow">Autre<br>Lettre</div>
                            <div class="flow-step flow-final" style="background:#e8f5e9; border-color:#4caf50;">
                                <strong>IZHAR</strong><br>Clair (Attention au F et W)
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        },
        {
            type: "immersion",
            prof: "A vous de jouer !<br>Identifiez la règle du Mim.",
            instruction: "Quel est ce cas ?",
            surah: 105,
            words: [
                { t: "أَلَمْ", ok: true, rules: [{ label: "مْ", optIdx: 2 }], reason: "Mim + Ya (Autre) = Izhar." },
                { t: "يَجْعَلْ", ok: false }, { t: "كَيْدَهُمْ", ok: true, rules: [{ label: "مْ", optIdx: 2 }], reason: "Mim + Fi (Autre) = Izhar." },
                { t: "فِى", ok: false }, { t: "تَضْلِيلٍ", ok: false }
            ],
            options: ["Idgham Shafawi", "Ikhfaa Shafawi", "Izhar Shafawi"]
        },
        {
            type: "immersion",
            prof: "Exemple suivant...",
            instruction: "Cherchez un Mim Sakina.",
            surah: 106,
            words: [
                { t: "ٱلَّذِى", ok: false }, { t: "أَطْعَمَهُم", ok: true, rules: [{ label: "م", optIdx: 0 }], reason: "Mim + Mim = Idgham Shafawi." },
                { t: "مِّن", ok: false }, { t: "جُوعٍ", ok: false },
                { t: "وَءَامَنَهُم", ok: true, rules: [{ label: "م", optIdx: 0 }], reason: "Mim + Mim = Idgham Shafawi (Ici c'est un piège visuel, le mot suivant commence par Mim)." },
                { t: "مِّنْ", ok: false }
            ],
            options: ["Idgham Shafawi", "Ikhfaa Shafawi", "Izhar Shafawi"]
        },
        {
            type: "immersion",
            prof: "Attention au Ba.",
            instruction: "Identifiez la règle.",
            surah: 105,
            words: [
                { t: "تَرْمِيهِم", ok: true, rules: [{ label: "م", optIdx: 1 }], reason: "Mim + Ba = Ikhfaa Shafawi." },
                { t: "بِحِجَارَةٍ", ok: false }, { t: "مِّن", ok: false }, { t: "سِجِّيلٍ", ok: false }
            ],
            options: ["Idgham Shafawi", "Ikhfaa Shafawi", "Izhar Shafawi"]
        }
    ]
};
