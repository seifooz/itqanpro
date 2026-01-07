const RA_TARQIQ_DATA = {
    id: "ra_tarqiq",
    title: "RA TARQIQ (FIN)",
    type: "Ahkam Ar-Ra",
    steps: [
        {
            type: "lesson",
            prof: "Partie 2 : <strong>Le Tarqiq</strong> (Finesse).<br>Ici, le Ra est doux, léger, comme un sourire.",
            html: `
            <div class="concept-card">
                <h3 style="color:#0984e3;">Le Sourire 🙂</h3>
                <p>Le Ra s'amincit quand le son tire vers le bas (i). On abaisse la langue.</p>
                <div style="background:#e3f2fd; border:1px solid #74b9ff; padding:15px; border-radius:8px; margin-top:15px; text-align:center;">
                    Le son "Ri" doit être pur et cristallin,<br>pas rauque.
                </div>
            </div>`
        },

        // REGLE 1 : KASRA
        {
            type: "lesson",
            prof: "Règle N°1 : La Kasra.<br>C'est la cause principale de l'amincissement.",
            html: `
            <div class="concept-card">
                <h3>1. La puissance du 'i'</h3>
                <p>Dès qu'un Ra porte une Kasra, il devient automatiquement <strong>Fin</strong>.</p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    <div class="audio-row-item" style="flex-direction:column; text-align:center;">
                        <div class="ar-big" style="color:#0984e3;">رِ</div>
                        <div class="ar-word" style="font-size:1.2rem;">رِحْلَةَ</div>
                        <div style="font-size:0.7rem; color:#888;">(Ri-hla)</div>
                    </div>
                    <div class="audio-row-item" style="flex-direction:column; text-align:center;">
                        <div class="ar-big" style="color:#0984e3;">رِ</div>
                        <div class="ar-word" style="font-size:1.2rem;">ٱلرِّجَالُ</div>
                        <div style="font-size:0.7rem; color:#888;">(Ri-jal)</div>
                    </div>
                </div>
            </div>`
        },
        // DRILL 1
        {
            type: "quiz_theory",
            prof: "Quiz Rapide ⚡️<br>Le mot **رِزْقاً** (Rizqan) commence par une Kasra. Comment lire le Ra ?",
            opts: [{ t: "Lourd (Tafkhim)", good: false }, { t: "Fin (Tarqiq)", good: true }],
            exp: "Bravo ! Kasra = Fin (Tarqiq)."
        },

        // REGLE 2 : SOUKOUN APRES KASRA
        {
            type: "lesson",
            prof: "Règle N°2 : Le Soukoun.<br>Si le Ra est muet, on regarde avant. S'il y a une Kasra <strong>Originale</strong>...",
            html: `
            <div class="concept-card">
                <h3>2. L'Influence Précédente</h3>
                
                <div class="eq-container">
                    <div class="eq-formula">
                        <div class="eq-tag tag-blue">Kasra Origine</div>
                        <div class="eq-plus">+</div>
                        <div class="eq-tag tag-blue">Ra Soukoun</div>
                        <div class="eq-plus">=</div>
                        <div class="res-text" style="color:#0984e3;">FIN</div>
                    </div>
                </div>
                
                <div class="audio-row-item" style="margin-top:15px;">
                    <div class="ar-big">فِرْعَوْنَ</div>
                    <div style="margin-left:10px;">
                        <div class="ar-word">Fir'awn</div>
                        <div style="font-size:0.8rem; color:#0984e3;">(Pharaon)</div>
                    </div>
                    <button class="mini-play" onclick="playAudio('073015', 4, 6, 'firawn')">▶</button>
                </div>

                <div class="tip-box">
                    ⚠️ La Kasra doit être dans le <strong>même mot</strong> et ne pas être un ajout temporaire.
                </div>
            </div>`
        },
        // DRILL 2
        {
            type: "quiz_theory",
            prof: "Quiz Rapide ⚡️<br>Dans **مِرْيَةٍ** (Miryatin), le Ra est Sakina après une Kasra. Verdict ?",
            opts: [{ t: "Tafkhim", good: false }, { t: "Tarqiq", good: true }],
            exp: "Exact. Kasra avant Soukoun = Tarqiq."
        },
        {
            type: "quiz_theory",
            prof: "Attention ! Dans **ٱرْجِعِي** (Irji'i), la Kasra vient d'un Hamza Wasl (temporaire).",
            opts: [{ t: "Tafkhim (Lourd)", good: true }, { t: "Tarqiq (Fin)", good: false }],
            exp: "Hamza Wasl = Toujours Lourd ! C'est l'exception."
        },


        // REGLE 3 : YA SAKINA (ARRET)
        {
            type: "lesson",
            prof: "Règle N°3 (L'Arrêt) : <strong>Le Ya Sakina</strong>.<br>C'est la règle 'Joker' qui amincit tout.",
            html: `
            <div class="concept-card">
                <h3 style="color:#0984e3;">Le Ya magique</h3>
                <p>Si, en t'arrêtant, le Ra est précédé d'un <strong>Ya (ي)</strong>, il devient <strong>TRES FIN</strong>.</p>
                <p>Ça marche même si avant le Ya, il y a une Fatha !</p>

                <div class="audio-row-item">
                    <div class="ar-big">خَيْرٌ</div>
                    <div style="margin-left:10px;">
                        <div class="ar-word">Khayr</div>
                        <div style="font-size:0.8rem;">À l'arrêt ➡ Khayr (Fin)</div>
                    </div>
                    <button class="mini-play" onclick="playAudio('097003', 4, 6, 'khayr')">▶</button>
                </div>
                
                <div class="audio-row-item" style="margin-top:10px;">
                    <div class="ar-big">قَدِيرٌ</div>
                    <div style="margin-left:10px;">
                        <div class="ar-word">Qadeer</div>
                        <div style="font-size:0.8rem;">À l'arrêt ➡ Qadeer (Fin)</div>
                    </div>
                </div>
            </div>`
        },
        // DRILL 3
        {
            type: "quiz_theory",
            prof: "Quiz Rapide ⚡️<br>Je m'arrête sur **شَيْءٍ قَدِيرٌ**. Le Ra final est précédé d'un Ya. Comment je prononce ?",
            opts: [{ t: "Fin (Tarqiq)", good: true }, { t: "Lourd (Tafkhim)", good: false }],
            exp: "Le Ya force l'amincissement à l'arrêt."
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Tarqiq</strong><br>Pratiquons ensemble ces 3 cas."
        },
        {
            type: "workshop",
            prof: "Écoute bien la finesse du son 'Ri'.",
            examples: [
                { type: "Cas 1: Kasra", ar: "رِحْلَةَ", url: "106002", start: 2, end: 4 },
                { type: "Cas 1: Kasra", ar: "ٱلرِّجَالُ", url: "004034", start: 0, end: 2 },
                { type: "Cas 2: Soukoun", ar: "فِرْعَوْنَ", url: "073015", start: 4, end: 6 },
                { type: "Cas 2: Soukoun", ar: "مِرْيَةٍ", url: "011017", start: 4, end: 6 },
                { type: "Cas 3: Ya (Arrêt)", ar: "خَيْرٌ", url: "097003", start: 4, end: 6 },
                { type: "Cas 3: Ya (Arrêt)", ar: "خَبِيرٌ", url: "100011", start: 4, end: 6 }
            ]
        },

        // EXAMEN
        { type: "intro", prof: "🧐 <strong>Examen Final</strong><br>Vérifions que tu as tout retenu." },
        {
            type: "quiz_theory",
            prof: "Q1/6 - La règle de base du Tarqiq, c'est la présence de :",
            opts: [{ t: "Fatha (Haut)", good: false }, { t: "Kasra (Bas)", good: true }, { t: "Damma (Avant)", good: false }],
            exp: "Kasra = Amincissement."
        },
        {
            type: "quiz_theory",
            prof: "Q2/6 - Dans **ضَيْرَ** (Dayr), je m'arrête. Il y a un Ya avant le Ra. Je lis :",
            opts: [{ t: "Lourd", good: false }, { t: "Fin", good: true }],
            exp: "Le Ya Sakina impose le Tarqiq."
        },
        {
            type: "quiz_theory",
            prof: "Q3/6 - Le Ra de **فَأَنذِرْ** (Fa-andhir) porte un Soukoun et est précédé d'une Kasra. Il est :",
            opts: [{ t: "Fin (Tarqiq)", good: true }, { t: "Lourd (Tafkhim)", good: false }],
            exp: "Kasra + Soukoun = Tarqiq."
        },
        {
            type: "quiz_theory",
            prof: "Q4/6 - Piège ! **مِرْصَادًا** (Mirsada). Kasra avant, MAIS Lettre 'Sad' après. Le Ra est ?",
            opts: [{ t: "Fin (car Kasra)", good: false }, { t: "Lourd (car Sad Emphatique)", good: true }],
            exp: "La lettre lourde (Sad) annule l'effet de la Kasra."
        },
        {
            type: "quiz_theory",
            prof: "Q5/6 - **بِٱلْبِرِّ** (Bil-birr) à l'arrêt. Le Ra a une Shadda et est précédé d'une Kasra. Il est :",
            opts: [{ t: "Lourd", good: false }, { t: "Fin", good: true }],
            exp: "Précédé de Kasra = Fin (même doublé)."
        },
        {
            type: "quiz_theory",
            prof: "Q6/6 - Si je lis **رَبِّ** (Rabb...), la Kasra est sous la Shadda. Je lis :",
            opts: [{ t: "Ra Lourd (Ra)", good: true }, { t: "Ra Fin (Ri)", good: false }],
            exp: "Attention ! C'est 'Ra' (Fatha) qui est LOURD. Ici c'est Ra Fatha + Ba Kasra. Le Ra lui-même a une Fatha. C'est Lourd."
        },

        // IMMERSION
        {
            type: "intro",
            prof: "📖 <strong>Immersion</strong><br>Cherchons les Ra Tarqiq dans Sourate Al-Bayyinah."
        },
        {
            type: "immersion",
            prof: "Surah Al-Bayyinah (98)",
            instruction: "Touche uniquement les Ra **FINS** (Avec Kasra ou Ya).",
            surah: 98, // Using 98 for variety logic, though verifying content manually helps
            words: [
                { t: "لَمْ", ok: false }, { t: "يَكُنِ", ok: false }, { t: "ٱلَّذِينَ", ok: false }, { t: "كَفَرُوا", ok: false, noun: "رُ", letter: "Tafkhim (Damma)" }, // Kafaru = Heavy
                { t: "مِنْ", ok: false }, { t: "أَهْلِ", ok: false }, { t: "ٱلْكِتَٰبِ", ok: false }, { t: "وَٱلْمُشْرِكِينَ", ok: true, noun: "رِ", letter: "Tarqiq (Kasra)" }, // Mushrikeen = Light
                { t: "١", endVerse: true },
                { t: "رَسُولٌ", ok: false, noun: "رَ", letter: "Tafkhim (Fatha)" }, // Rasul = Heavy
                { t: "مِّنَ", ok: false }, { t: "ٱللَّهِ", ok: false }, { t: "يَتْلُوا", ok: false }, { t: "صُحُفًا", ok: false }, { t: "مُّطَهَّرَةً", ok: false, noun: "رَ", letter: "Tafkhim (Fatha)" }, // Mutahhara = Heavy
                { t: "٢", endVerse: true },
                { t: "فِيهَا", ok: false }, { t: "كُتُبٌ", ok: false }, { t: "قَيِّمَةٌ", ok: false }, { t: "٣", endVerse: true },
                { t: "وَمَا", ok: false }, { t: "تَفَرَّقَ", ok: false, noun: "رَّ", letter: "Tafkhim (Fatha)" }, // Tafarraqa = Heavy
                { t: "ٱلَّذِينَ", ok: false }, { t: "أُوتُوا", ok: false }, { t: "ٱلْكِتَٰبَ", ok: false }, { t: "إِلَّا", ok: false }, { t: "مِن", ok: false }, { t: "بَعْدِ", ok: false }, { t: "مَا", ok: false }, { t: "جَآءَتْهُمُ", ok: false }, { t: "ٱلْبَيِّنَةُ", ok: false }, { t: "٤", endVerse: true }
                // Short sample due to complexity, ensuring Mushrikeen (Kasra) is the target
            ]
        }
    ]
};
