const RA_LAM_REVIEW_DATA = {
    id: "ra_lam_review",
    title: "Révision Ra & Lam",
    type: "Révision",
    steps: [
        {
            type: "lesson",
            prof: "Révision des Lettres Spéciales.<br>Ra et Lam ont des personnalités changeantes.",
            html: `
            <div class="concept-card">
                <h3>Carte Mémoire : Le Lam (Allah)</h3>
                <p>Le Lam du Nom d'Allah (ٱللَّهِ) change selon la voyelle <strong>précédente</strong>.</p>
                
                <div style="display:flex; gap:15px; text-align:center;">
                    <div style="flex:1; background:#fff3e0; padding:10px; border-radius:10px; border-top:4px solid #f57c00;">
                        <div style="font-weight:bold; color:#e65100;">TAFKHIM (Lourd)</div>
                        <div style="font-size:2rem;">َ ُ</div>
                        <div style="font-size:0.8rem;">Si Fatha ou Damma avant.</div>
                        <div class="ar-inline">نَصْرُ ٱللَّهِ</div>
                    </div>
                    <div style="flex:1; background:#e3f2fd; padding:10px; border-radius:10px; border-top:4px solid #1976d2;">
                        <div style="font-weight:bold; color:#0d47a1;">TARQIQ (Léger)</div>
                        <div style="font-size:2rem;">ِ</div>
                        <div style="font-size:0.8rem;">Si Kasra avant.</div>
                        <div class="ar-inline">بِسْمِ ٱللَّهِ</div>
                    </div>
                </div>
            </div>
            
            <div class="concept-card" style="margin-top:20px;">
                <h3>Carte Mémoire : Le Ra (ر)</h3>
                <p>Le Ra dépend de sa propre voyelle, ou de celle d'avant s'il est Sakin.</p>
                
                <div style="text-align:left; font-size:0.9rem;">
                    <div style="margin-bottom:10px;">
                        <span style="background:#f57c00; color:white; padding:2px 6px; border-radius:4px; font-size:0.8rem; font-weight:bold;">TAFKHIM (Gras)</span>
                        <ul>
                            <li>Si Ra a <strong>Fatha</strong> ou <strong>Damma</strong> (رَ رُ).</li>
                            <li>Si Ra est <strong>Sakin</strong> et précédé de Fatha/Damma.</li>
                        </ul>
                    </div>
                    <div>
                        <span style="background:#1976d2; color:white; padding:2px 6px; border-radius:4px; font-size:0.8rem; font-weight:bold;">TARQIQ (Fin)</span>
                        <ul>
                            <li>Si Ra a une <strong>Kasra</strong> (رِ).</li>
                            <li>Si Ra est <strong>Sakin</strong> et précédé de Kasra.</li>
                            <li>Si Ra est Sakin précédé d'un <strong>Ya Sakin</strong> (ex: Qadeer).</li>
                        </ul>
                    </div>
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "L'Algorithme du Ra.<br>Suivez les flèches.",
            html: `
            <div class="concept-card">
                <h3>Algorithme Décisionnel : Ra (ر)</h3>
                <div class="flow-chart">
                    <div class="flow-step">
                        <div class="flow-num">1</div>
                        <div>Regarde la voyelle du <strong>Ra</strong></div>
                    </div>
                    <div class="flow-arrow">▼</div>
                    
                    <div style="display:flex; justify-content:center; gap:5px;">
                        <div style="flex:1;">
                            <div class="flow-arrow">Fatha/Damma</div>
                            <div class="flow-step flow-final" style="background:#fff3e0; border-color:#f57c00;">
                                <strong>TAFKHIM</strong><br>(Lourd)
                            </div>
                        </div>
                        <div style="flex:1;">
                            <div class="flow-arrow">Kasra</div>
                            <div class="flow-step flow-final" style="background:#e3f2fd; border-color:#1976d2;">
                                <strong>TARQIQ</strong><br>(Léger)
                            </div>
                        </div>
                        <div style="flex:1;">
                            <div class="flow-arrow">Sukun (Stop)</div>
                            <div class="flow-step">
                                <div>Regarde <strong>avant</strong></div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top:10px; font-size:0.8rem; color:#666;">
                        * Si Ra est Sakin, la voyelle précédente décide (Fatha/Damma = Lourd, Kasra/Ya = Léger).
                    </div>
                </div>
            </div>`
        },
        {
            type: "immersion",
            prof: "Testez vos connaissances.",
            instruction: "Analysez le Ra ou le Lam.",
            surah: 110,
            words: [
                { t: "إِذَا", ok: false }, { t: "جَآءَ", ok: false },
                { t: "نَصْرُ", ok: true, rules: [{ label: "رُ", optIdx: 0 }], reason: "Ra Damma = Tafkhim." },
                { t: "ٱللَّهِ", ok: true, rules: [{ label: "ل", optIdx: 2 }], reason: "Précédé de Damma (Nasru) = Tafkhim." },
                { t: "وَٱلْفَتْحُ", ok: false }
            ],
            options: ["Ra Tafkhim", "Ra Tarqiq", "Lam Allah Tafkhim", "Lam Allah Tarqiq"]
        },
        {
            type: "immersion",
            prof: "Attention au Ra Sakin.",
            instruction: "Analysez.",
            surah: 108,
            words: [
                { t: "فَصَلِّ", ok: false }, { t: "لِرَبِّكَ", ok: true, rules: [{ label: "رَ", optIdx: 0 }], reason: "Ra Fatha = Tafkhim." },
                { t: "وَٱنْحَرْ", ok: true, rules: [{ label: "رْ", optIdx: 0 }], reason: "Ra Sakin précédé de Fatha (Ha) = Tafkhim." }
            ],
            options: ["Ra Tafkhim", "Ra Tarqiq", "Lam Allah Tafkhim"]
        },
        {
            type: "immersion",
            prof: "Le cas du Tarqiq.",
            instruction: "Analysez.",
            surah: 1,
            words: [
                { t: "بِسْمِ", ok: false },
                { t: "ٱللَّهِ", ok: true, rules: [{ label: "ل", optIdx: 1 }], reason: "Précédé de Kasra (Bismi) = Tarqiq." },
                { t: "ٱلرَّحْمَٰنِ", ok: true, rules: [{ label: "ر", optIdx: 0 }], reason: "Ra Fatha = Tafkhim (Toujours, même si Shadda)." },
                { t: "ٱلرَّحِيمِ", ok: true, rules: [{ label: "ر", optIdx: 0 }], reason: "Ra Fatha = Tafkhim." }
            ],
            options: ["Ra Tafkhim", "Lam Allah Tarqiq", "Lam Allah Tafkhim"]
        }
    ]
};
