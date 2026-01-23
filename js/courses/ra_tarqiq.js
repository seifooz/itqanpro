const RA_TAR_HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#0984e3; color:white; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        💡 Aide : L'Algorithme du Prof
    </button>
    <div style="display:none; background:#e3f2fd; border:1px solid #0984e3; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>1. Le Sourire 🙂</strong> : Le Ra a une <strong>Kasra</strong> ? ➡ <strong>FIN</strong><br>
        <strong>2. Le Miroir 🪞</strong> : Le Ra est <strong>Muet</strong> ?<br>
        &nbsp;&nbsp;👉 Avant = Kasra ? ➡ <strong>FIN</strong><br>
        <strong>3. Le Joker 🃏</strong> : Arrêt avec <strong>Ya Sakina</strong> avant ? ➡ <strong>FIN</strong> (Gagne tout !)<br>
        <div style="margin-top:5px; font-size:0.75rem; color:#c0392b;">
        ⚠️ Attention : Si une "Lettre Mur" suit, ça redevient Lourd !
        </div>
    </div>
</div>`;

const RA_TARQIQ_DATA = {
    id: "ra_tarqiq",
    title: "RA TARQIQ (MODE FIN)",
    type: "Ahkam Ar-Ra",
    steps: [
        // --- INTRO ---
        {
            type: "lesson",
            prof: "Partie 2 : <strong>Le Tarqiq</strong> (Finesse).<br>Ici, le Ra est doux, léger, comme un sourire.",
            html: `
            <div class="concept-card">
                <h3 style="color:#0984e3;">Le Sourire 🙂</h3>
                <p style="font-size:1rem; color:#2c3e50; margin-bottom:15px;">
                    Pour faire le son "Fin" (Tarqiq), il faut abaisser la langue et étirer les lèvres comme pour sourire.
                </p>
                <div style="background:#e3f2fd; padding:15px; border-radius:10px; text-align:center;">
                    <div style="font-weight:bold; color:#0984e3; margin-bottom:5px;">La Technique :</div>
                    <div style="font-size:0.9rem;">
                        Le son doit être <strong>AIGU</strong> et <strong>CRISTALLIN</strong>.<br>
                        "Riiiii"
                    </div>
                </div>
            </div>`
        },

        // --- RÈGLE 1 : LA KASRA (LE SOURIRE) ---
        {
            type: "lesson",
            prof: "Règle N°1 : La Kasra.<br>C'est la cause principale de l'amincissement.",
            html: `
            <div class="concept-card">
                <h3>1. La Puissance du 'i'</h3>
                <p>La Kasra tire le son vers le bas. Le Ra devient immédiatement <strong>Fin</strong>.</p>
                
                <!-- VISUAL KASRA -->
                <div class="mz-container" style="margin-bottom:15px;">
                    <div class="mz-phrase">رِحْلَةَ</div>
                    <div class="mz-analysis">
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#0984e3; color:#0984e3;">ِ</div>
                            <div class="mz-label" style="color:#0984e3;">Kasra</div>
                        </div>
                        <div class="mz-icon">+</div>
                        <div class="mz-group">
                            <div class="mz-box mz-blue">ر</div>
                            <div class="mz-label blue">Ra</div>
                        </div>
                    </div>
                    <div class="ex-logic">Le Ra a une <strong>Kasra</strong> ➡ <strong>FIN</strong></div>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    <button class="btn-audio btn-listen" onclick="playAudio('106002', 2, 4, 'rihla')">🔊 Rihla</button>
                    <button class="btn-audio btn-listen" onclick="playAudio('004034', 0, 2, 'rijal')">🔊 Rijal</button>
                </div>
            </div>`
        },

        // --- RÈGLE 2 : LE MIROIR (SOUKOUN) ---
        {
            type: "lesson",
            prof: "Règle N°2 : Le Miroir (Soukoun).<br>Si le Ra est muet, regardez qui est derrière !",
            html: `
            <div class="concept-card">
                <h3>Il copie la Kasra d'avant ! ⬅️</h3>
                
                <div class="mz-container">
                    <div class="mz-phrase">فِرْعَوْنَ</div>
                    <div class="mz-analysis">
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#0984e3; color:#0984e3;">ِ</div>
                            <div class="mz-label" style="color:#0984e3;">Kasra Avant</div>
                        </div>
                        <div class="mz-icon">⮕</div>
                        <div class="mz-group">
                            <div class="mz-box mz-blue">رْ</div>
                            <div class="mz-label blue">Ra Muet</div>
                        </div>
                    </div>
                    <div class="ex-logic">Avant le Ra, il y a une Kasra.<br>Le Ra devient <strong>FIN</strong>. ("Fir'awn")</div>
                </div>

                <div class="tip-box" style="margin-top:15px;">
                    ⚠️ La Kasra doit être dans le <strong>MÊME MOT</strong> et être <strong>ORIGINALE</strong> (pas de Hamza Wasl).
                </div>
            </div>`
        },

        // --- RÈGLE 3 : LE JOKER (YA SAKINA) ---
        {
            type: "lesson",
            prof: "Règle N°3 (L'Arrêt) : <strong>Le Ya Magique</strong>.<br>C'est le Joker qui gagne tout.",
            html: `
            <div class="concept-card">
                <h3 style="color:#0984e3;">Le Ya annule la lourdeur ✨</h3>
                <p>Si tu t'arrêtes sur un mot et qu'il y a un <strong>Ya (ي)</strong> avant le Ra : C'est <strong>FIN</strong> (Tarqiq).</p>
                <p style="font-size:0.9rem;">Peu importe la voyelle d'avant ! Le Ya est plus fort.</p>

                <div class="mz-container">
                    <div class="mz-phrase">خَيْرٌ</div>
                    <div class="mz-analysis">
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#f1c40f;">يْ</div>
                            <div class="mz-label" style="color:#f39c12;">Ya Joker</div>
                        </div>
                        <div class="mz-icon">⮕</div>
                        <div class="mz-group">
                            <div class="mz-box mz-blue">ر</div>
                            <div class="mz-label blue">Ra (Arrêt)</div>
                        </div>
                    </div>
                    <div class="ex-logic">Le Ya force le Ra à devenir <strong>TRES FIN</strong>.<br>"Khayr"</div>
                </div>
            </div>`
        },

        // --- ALGORITHME RECAP ---
        {
            type: "lesson",
            prof: "Récapitulons.<br>L'Algorithme du Prof (Version Fine).",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Ra a une <strong>Kasra</strong> ?</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div><strong>OUI</strong> ➡ C'est <strong>FIN</strong> 🙂<br><strong>NON</strong> (Soukoun) ➡ Regarde <strong>AVANT</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">3</div><div>Avant a Kasra ? ➡ <strong>FIN</strong> 🙂<br>Arrêt après Ya ? ➡ <strong>FIN</strong> 🙂</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">⚠️ (Sauf si Piège Hamza Wasl ou Mur)</div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Assez parlé ! À toi de jouer.<br>Fais-moi un beau sourire." },

        {
            type: "workshop", prof: `Entraînement <strong>Ra Tarqiq</strong>. ${RA_TAR_HELP_HTML}`, examples: [
                { type: "Le Sourire (Kasra)", ar: "رِحْلَةَ", url: "106002", start: 2, end: 4, hint: "Bouche étirée 🙂" },
                { type: "Le Sourire (Kasra)", ar: "ٱلرِّجَالُ", url: "004034", start: 0, end: 2, hint: "Ra Fin" },
                { type: "Le Miroir (Fir'awn)", ar: "فِرْعَوْنَ", url: "073015", start: 4, end: 6, hint: "Kasra Avant ➡ Fin" },
                { type: "Le Miroir (Mirya)", ar: "مِرْيَةٍ", url: "011017", start: 4, end: 6, hint: "Kasra Avant ➡ Fin" },
                { type: "Le Joker (Khayr)", ar: "خَيْرٌ", url: "097003", start: 4, end: 6, hint: "Ya avant l'arrêt ➡ Fin" },
                { type: "Le Joker (Qadeer)", ar: "قَدِيرٌ", url: "035001", start: 10, end: 12, hint: "Ya avant l'arrêt ➡ Fin" }
            ]
        },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Contrôle Surprise (10 Questions) ! 📝<br>Sélection des Meilleurs Cas." },

        // SELECTION BEST OF 10
        { type: "exam_quiz", prof: `Q1/10 - Dans **رِزْقًا**, le Ra a une Kasra. Comment le lire ? ${RA_TAR_HELP_HTML}`, opts: [{ ar: "Lourd", good: false }, { ar: "Fin", good: true, reason: "Kasra = Sourire = Fin !" }], noun: "Règle 1", letter: "Kasra" },
        { type: "quiz_theory", prof: `Q2/20 - La règle du Tarqiq demande :`, opts: [{ t: "D'arrondir la bouche", good: false }, { t: "De sourire (abaisser la langue)", good: true, reason: "Position basse" }], exp: "Sourire aide à faire le son aigu." },
        { type: "quiz_theory", prof: `Q3/10 - **فِرْعَوْنَ** (Fir'awn). Le Ra est muet. Avant j'ai une Kasra.`, opts: [{ t: "Lourd", good: false }, { t: "Fin (Tarqiq)", good: true, reason: "Miroir sur Kasra = Fin" }], exp: "Ra Muet + Kasra avant = Fin." },

        { type: "quiz_theory", prof: `Q4/10 - **بِٱلْبِرِّ** (Bil-birr) à l'arrêt. Le Ra a une Shadda et une Kasra.`, opts: [{ t: "Lourd", good: false }, { t: "Fin", good: true, reason: "Kasra = Fin (même doublé)" }], exp: "Précédé de Kasra = Fin (même doublé)." },

        { type: "quiz_theory", prof: `Q5/10 - **خَيْر** (Khayr). Je m'arrête. Il y a un Ya Sakina avant.`, opts: [{ t: "Fin (Joker)", good: true, reason: "Le Ya gagne" }, { t: "Lourd (car Fatha avant)", good: false }], exp: "Le Ya Sakina impose la finesse même si avant il y a une Fatha." },
        { type: "quiz_theory", prof: `Q6/10 - **نَذِير**. Arrêt sur le Ra. Ya (prolongation) avant.`, opts: [{ t: "Fin", good: true, reason: "Ya Long = Fin" }, { t: "Lourd", good: false }], exp: "Que ce soit Ya Sakina ou Ya Madd, c'est Fin." },

        // PIÈGES
        { type: "quiz_theory", prof: "Q7/10 - **ٱرْجِعِي**. Ra Muet. Avant j'ai 'i' (Kasra). C'est FIN ?", opts: [{ t: "NON, C'est Lourd !", good: true, reason: "Piège Hamza Wasl" }, { t: "OUI, Fin", good: false }], exp: "C'est le Hamza Wasl ! Donc LOURD." },
        { type: "quiz_theory", prof: "Q8/10 - **مِرْصَادًا**. Ra Muet. Avant 'i'. Après 'Sad' (Gros).", opts: [{ t: "Fin", good: false }, { t: "Lourd", good: true, reason: "Mur Emphatique" }], exp: "Le Sad bloque la finesse. LOURD." },

        { type: "quiz_theory", prof: "Q9/10 - Je m'arrête sur **مُسْتَمِرّ**. Avant la Shadda, Kasra.", opts: [{ t: "Fin", good: true, reason: "Arrêt sur Kasra" }, { t: "Lourd", good: false }], exp: "A l'arrêt, le Ra doublé devient Muet. On regarde avant -> Kasra -> Fin." },

        { type: "quiz_theory", prof: "Q10/10 - **ٱللَّهُ**. Le Lam est Lourd. Mais le Ra dans **رَسُول** est :", opts: [{ t: "Lourd (Tafkhim)", good: true, reason: "Fatha = Lourd" }, { t: "Fin", good: false }], exp: "Ra Fatha = Lourd." },


        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Mission Spéciale 🕵️‍♂️<br>Trouve les Ra FINS dans Sourate At-Takwir." },

        {
            type: "immersion",
            prof: `Sourate At-Takwir (81) ${RA_TAR_HELP_HTML}`,
            instruction: "Touche les Ra **FINS** (Tarqiq).",
            totalIzhar: 2,
            targetName: "un Ra Fin",
            words: [
                { t: "إِذَا", ok: false }, { t: "ٱلشَّمْسُ", ok: false }, { t: "كُوِّرَتْ", ok: false, noun: "رَ", letter: "Lourd (Fatha)", reason: "Fatha = Lourd ❌" },
                { t: "١", endVerse: true },
                { t: "وَإِذَا", ok: false }, { t: "ٱلنُّجُومُ", ok: false }, { t: "ٱنكَدَرَتْ", ok: false, noun: "رَ", letter: "Lourd (Fatha)", reason: "Fatha = Lourd ❌" },
                { t: "٢", endVerse: true },
                { t: "وَإِذَا", ok: false }, { t: "ٱلْجِبَالُ", ok: false }, { t: "سُيِّرَتْ", ok: false, noun: "رَ", letter: "Lourd", reason: "Fatha = Lourd ❌" },
                { t: "٣", endVerse: true },
                { t: "...", ok: false },
                { t: "عَلِمَتْ", ok: false }, { t: "نَفْسٌ", ok: false }, { t: "مَّآ", ok: false }, { t: "أَحْضَرَتْ", ok: false, noun: "رَ", letter: "Lourd", reason: "Lourd ❌" },
                { t: "١٤", endVerse: true },
                { t: "فَلَآ", ok: false }, { t: "أُقْسِمُ", ok: false }, { t: "بِٱلْخُنَّسِ", ok: false }, { t: "١٥", endVerse: true },
                { t: "ٱلْجَوَارِ", ok: true, noun: "رِ", letter: "FIN (Kasra)", reason: "Kasra = FIN ✅" }, // Jawari - Fin
                { t: "ٱلْكُنَّسِ", ok: false }, { t: "١٦", endVerse: true },
                { t: "وَٱلَّيْلِ", ok: false }, { t: "إِذَا", ok: false }, { t: "عَسْعَسَ", ok: false }, { t: "١٧", endVerse: true },
                { t: "وَٱلصُّبْحِ", ok: false }, { t: "إِذَا", ok: false }, { t: "تَنَفَّسَ", ok: false }, { t: "١٨", endVerse: true },
                { t: "إِنَّهُۥ", ok: false }, { t: "لَقَوْلُ", ok: false }, { t: "رَسُولٍ", ok: false, noun: "رَ", letter: "Lourd", reason: "Lourd ❌" },
                { t: "كَرِيمٍ", ok: true, noun: "رِ", letter: "FIN (Kasra)", reason: "Kasra = FIN ✅" } // Kareem - Fin
            ]
        }
    ]
};
