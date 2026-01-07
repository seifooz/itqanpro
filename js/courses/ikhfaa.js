const IKHFAA_DATA = {
    title: "AL-IKHFAA MASTERCLASS",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---
        {
            type: "lesson",
            prof: "Bienvenue. <br>L'Ikhfaa est la règle la plus fréquente (15 lettres).",
            html: `<div class="concept-card"><h3>Le Concept</h3><p style="font-size:0.9rem; color:#666; margin-bottom:20px;">C'est un état intermédiaire. Le 'N' n'est pas prononcé clairement (Izhar), ni fusionné (Idgham). Il est <strong>Caché</strong>.</p><div class="recap-grid"><div class="recap-item"><div class="ar-big">١٥</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Quinze Lettres</div></div></div></div>`
        },
        {
            type: "lesson",
            prof: "Définition : Dissimulation.<br>La langue s'éloigne du palais.",
            html: `<div class="concept-card"><h3>Mécanisme</h3><div class="simple-list"><div class="simple-item"><span class="check-icon">OK</span><span>La langue <strong>ne touche pas</strong> le palais.</span></div><div class="simple-item"><span class="check-icon">OK</span><span>On prépare la bouche pour la <strong>lettre suivante</strong>.</span></div><div class="simple-item"><span class="check-icon">OK</span><span><strong>GHUNNAH</strong> : 2 temps obligatoires.</span></div></div>
            <div class="def-audio-row">
                <button class="def-audio-btn" id="play-def-ik-1" onclick="playAudio('ikhfaa_def_noun', 0, 100, 'def-ik-1')">🔊 Noun Sakina</button>
                <button class="def-audio-btn" id="play-def-ik-2" onclick="playAudio('ikhfaa_def_tanween', 0, 100, 'def-ik-2')">🔊 Tanween</button>
            </div>
            <p style="font-size:0.8rem; margin-top:20px; color:#888;">Le son sort principalement du nez (Khashyum).</p></div>`
        },
        // EXCLUSION LOGIC
        {
            type: "lesson",
            prof: "Comment retenir les 15 lettres ?<br>Par élimination.",
            html: `<div class="concept-card"><h3>La Méthode d'Exclusion</h3>
            <div style="text-align:left; margin-top:15px;">
                <div style="margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
                    <span style="color:#d63031; font-weight:bold;">1. PAS la Gorge (Izhar) :</span>
                    <div style="font-family:var(--font-ar); font-size:1.4rem; color:#333; margin-top:5px;">ء هـ ع ح غ خ</div>
                </div>
                <div style="margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
                    <span style="color:#0984e3; font-weight:bold;">2. PAS Yanmu/LR (Idgham) :</span>
                    <div style="font-family:var(--font-ar); font-size:1.4rem; color:#333; margin-top:5px;">ي ر م ل و ن</div>
                </div>
                <div style="margin-bottom:10px;">
                    <span style="color:#e17055; font-weight:bold;">3. PAS le Ba (Iqlab) :</span>
                    <div style="font-family:var(--font-ar); font-size:1.4rem; color:#333; margin-top:5px;">ب</div>
                </div>
            </div>
            <div style="margin-top:15px; background:#f0fff4; padding:10px; border-radius:8px; font-weight:bold; color:#00b894;">TOUT LE RESTE = IKHFAA</div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Les 15 Lettres (Le Reste).<br>Elles sont nombreuses !",
            html: `<div class="concept-card"><div class="letters-grid" style="grid-template-columns:repeat(5, 1fr); gap:10px;">
            <div class="l-card"><div class="l-ar">ص</div></div><div class="l-card"><div class="l-ar">ذ</div></div><div class="l-card"><div class="l-ar">ث</div></div><div class="l-card"><div class="l-ar">ج</div></div><div class="l-card"><div class="l-ar">ش</div></div>
            <div class="l-card"><div class="l-ar">ق</div></div><div class="l-card"><div class="l-ar">س</div></div><div class="l-card"><div class="l-ar">ك</div></div><div class="l-card"><div class="l-ar">ض</div></div><div class="l-card"><div class="l-ar">ظ</div></div>
            <div class="l-card"><div class="l-ar">ز</div></div><div class="l-card"><div class="l-ar">ت</div></div><div class="l-card"><div class="l-ar">د</div></div><div class="l-card"><div class="l-ar">ط</div></div><div class="l-card"><div class="l-ar">ف</div></div>
            </div></div>`
        },

        // Exemples Visuels / Types de Ghunnah
        {
            type: "lesson",
            prof: "Nuance Importante : L'Épaisseur.<br>La Ghunnah s'adapte à la lettre suivante.",
            html: `<div class="concept-card"><h3>Ghunnah Légère vs Lourde</h3>
            <div class="two-col-grid">
                <div class="col-item">
                    <div style="font-weight:bold; color:var(--primary); margin-bottom:5px;">Ghunnah FINE</div>
                    <div style="font-size:0.8rem; color:#666;">Si suivi d'une lettre fine (ex: Sine, Fa, Kaf..).<br>La bouche est en sourire.</div>
                    <div class="ar-ex">أَنفُسَهُمْ</div>
                </div>
                <div class="col-item">
                    <div style="font-weight:bold; color:var(--secondary); margin-bottom:5px;">Ghunnah EMPHATIQUE</div>
                    <div style="font-size:0.8rem; color:#666;">Si suivi d'une lettre emphatique (Sad, Dad, Ta, Dha, Qaf).<br>La bouche est arrondie.</div>
                    <div class="ar-ex">مِن قَبْلِ</div>
                </div>
            </div></div>`
        },

        // Equation
        {
            type: "lesson",
            prof: "Résumé de la règle.<br>Formule à retenir.",
            html: `<div class="eq-container"><div class="eq-card"><div style="font-size:0.9rem; color:#888; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;">Formule Ikhfaa</div><div class="eq-formula"><div class="eq-tag tag-blue">Noun / Tanween</div><div class="eq-plus">+</div><div class="eq-tag tag-green">15 Lettres</div><div class="eq-plus">=</div><div class="res-text">DISSIMULATION + GHUNNAH</div></div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>6 Exemples (Fins et Emphatiques)." },

        // WORKSHOP - 6 Examples
        {
            type: "workshop", prof: "Groupe 1 : <strong>Ghunnah Fine</strong>.<br>Gardez le sourire, son léger.", examples: [
                { type: "Noun (Fa)", ar: "أَنفُسَهُمْ", url: "ikhfaa_anfusahum", hint: "An-fusahum" },
                { type: "Noun (Sin)", ar: "إِنسَٰن", url: "ikhfaa_insan", hint: "In-san" },
                { type: "Noun (Shin)", ar: "مِن شَرِّ", url: "ikhfaa_min_sharri", hint: "Min-sharri" }
            ]
        },

        {
            type: "workshop", prof: "Groupe 2 : <strong>Ghunnah Emphatique</strong>.<br>Gonflez le son (Lettres Lourdes).", examples: [
                { type: "Noun (Qaf)", ar: "مِن قَبْلِ", url: "ikhfaa_min_qabli", hint: "Min-qabli" },
                { type: "Tanween (Sad)", ar: "قَوْمًا صَٰلِحًا", url: "ikhfaa_qawman_saliha", hint: "Qawman-saliha" },
                { type: "Noun (Ta)", ar: "عَن طَبَقٍ", url: "ikhfaa_an_tabaq", hint: "'An-tabaq" }
            ]
        },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>15 questions pour valider." },

        // 15 Questions
        { type: "exam_quiz", prof: "Question 1/15<br>Trouvez l'Ikhfaa :", opts: [{ ar: "مِن مَّالٍ", good: false }, { ar: "مِن شَرِّ", good: true }, { ar: "مِنْ خَوْفٍ", good: false }], noun: "Noun Sakina", letter: "Shin (ش)" },
        { type: "exam_quiz", prof: "Question 2/15<br>Trouvez l'Ikhfaa :", opts: [{ ar: "يَنْهَوْنَ", good: false }, { ar: "إِنسَٰن", good: true }, { ar: "نَارٌ حَامِيَةٌ", good: false }], noun: "Noun Sakina", letter: "Sin (س)" },
        { type: "exam_quiz", prof: "Question 3/15<br>Trouvez l'Ikhfaa (Emphatique) :", opts: [{ ar: "أَنعَمْتَ", good: false }, { ar: "مَنصُورًا", good: true }, { ar: "قَوْلًا مَّعْرُوفًا", good: false }], noun: "Noun Sakina", letter: "Sad (ص)" },
        { type: "exam_quiz", prof: "Question 4/15<br>Trouvez l'Ikhfaa (Emphatique) :", opts: [{ ar: "مِن قَبْلِ", good: true }, { ar: "غَفُورٌ حَلِيمٌ", good: false }, { ar: "رَحِيمٌ وَدُودٌ", good: false }], noun: "Noun Sakina", letter: "Qaf (ق)" },
        { type: "exam_quiz", prof: "Question 5/15<br>Trouvez l'Ikhfaa :", opts: [{ ar: "لَيُنۢبَذَنَّ", good: false }, { ar: "كُنتُمْ", good: true }, { ar: "مِنْ عِلْمٍ", good: false }], noun: "Noun Sakina", letter: "Ta (ت)" },
        { type: "exam_quiz", prof: "Question 6/15<br>Trouvez l'Ikhfaa :", opts: [{ ar: "وَيْلٌ لِّكُلِّ", good: false }, { ar: "جَنَّٰتٍ تَجْرِي", good: true }, { ar: "سَلَٰمٌ هِيَ", good: false }], noun: "Tanween", letter: "Ta (ت)" },
        { type: "exam_quiz", prof: "Question 7/15<br>Trouvez l'Ikhfaa :", opts: [{ ar: "مِن وَالٍ", good: false }, { ar: "أَنزَلْنَٰهُ", good: true }, { ar: "مَن يَشَاءُ", good: false }], noun: "Noun Sakina", letter: "Zay (ز)" },
        { type: "exam_quiz", prof: "Question 8/15<br>Trouvez l'Ikhfaa :", opts: [{ ar: "خَيْرًا يَرَهُ", good: false }, { ar: "يَتِيمًا فَـَٔاوَىٰ", good: true }, { ar: "كُفُوًا أَحَدٌ", good: false }], noun: "Tanween", letter: "Fa (ف)" },
        { type: "exam_quiz", prof: "Question 9/15<br>Trouvez l'Ikhfaa :", opts: [{ ar: "مِن نُّورٍ", good: false }, { ar: "مِن ذِكْرِ", good: true }, { ar: "مَن يَقُولُ", good: false }], noun: "Noun Sakina", letter: "Dhal (ذ)" },

        { type: "exam_quiz", prof: "Question 10/15<br>Trouvez l'Ikhfaa :", opts: [{ ar: "فَصَلِّ لِرَبِّكَ", good: false }, { ar: "وَأَنتُمْ", good: true }, { ar: "أَنَّهُمْ", good: false }], noun: "Noun Sakina", letter: "Ta (ت)" },
        { type: "exam_quiz", prof: "Question 11/15<br>Trouvez l'Ikhfaa (Emphatique) :", opts: [{ ar: "عَذَابٌ أَلِيمٌ", good: false }, { ar: "رِيحًا صَرْصَرًا", good: true }, { ar: "هُدًى لِّلْمُتَّقِينَ", good: false }], noun: "Tanween", letter: "Sad (ص)" },
        { type: "exam_quiz", prof: "Question 12/15<br>Trouvez l'Ikhfaa :", opts: [{ ar: "يَوْمَئِذٍ نَّاعِمَةٌ", good: false }, { ar: "مِن ثَمَرَٰتٍ", good: true }, { ar: "خَلَقَكُم مِّن", good: false }], noun: "Noun Sakina", letter: "Tha (ث)" },
        { type: "exam_quiz", prof: "Question 13/15<br>Trouvez l'Ikhfaa :", opts: [{ ar: "وَجِىٓءَ يَوْمَئِذٍۭ", good: false }, { ar: "فِي جِيدِهَا", good: false }, { ar: "قَوْمًا جَبَّارِينَ", good: true }], noun: "Tanween", letter: "Jim (ج)" },
        { type: "exam_quiz", prof: "Question 14/15<br>Trouvez l'Ikhfaa (Attention aux pièges) :", opts: [{ ar: "كِرَامٍ بَرَرَةٍ", good: false }, { ar: "عَن طَبَقٍ", good: true }, { ar: "مُّطَهَّرَةٍ", good: false }], noun: "Noun Sakina", letter: "Ta (ط)" },
        { type: "exam_quiz", prof: "Question 15/15<br>Trouvez l'Ikhfaa (Attention aux pièges) :", opts: [{ ar: "مِنْ خَوْفٍ", good: false }, { ar: "مِن تَحْتِهَا", good: true }, { ar: "مِن مَّسَدٍۢ", good: false }], noun: "Noun Sakina", letter: "Ta (ت)" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion Coranique.<br>5 Sourates (Analyse réelle)." },

        {
            type: "immersion",
            prof: "Sourate Al-Inshiqaq (1)",
            instruction: "Trouvez le cas d'<strong>Ikhfaa</strong>.",
            totalIzhar: 1,
            words: [
                { t: "إِذَا", ok: false }, { t: "ٱلسَّمَآءُ", ok: false },
                { t: "ٱنشَقَّتْ", ok: true, noun: "Noun Sakina", letter: "Shin (ش)", endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: "Sourate Al-Masad (3)",
            instruction: "Trouvez le cas d'<strong>Ikhfaa</strong>.",
            totalIzhar: 1,
            words: [
                { t: "سَيَصْلَىٰ", ok: false },
                { t: "نَارًا", ok: true, noun: "Tanween", letter: "Dhal (ذ)", endVerse: false }, // Naran dhata
                { t: "ذَاتَ", ok: false },
                { t: "لَهَبٍ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: "Sourate Al-Falaq (2)",
            instruction: "Trouvez le cas d'<strong>Ikhfaa</strong>.",
            totalIzhar: 1,
            words: [
                { t: "مِن", ok: true, noun: "Noun Sakina", letter: "Shin (ش)", endVerse: false }, // Min sharri
                { t: "شَرِّ", ok: false },
                { t: "مَا", ok: false }, { t: "خَلَقَ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: "Sourate Al-Kafirun (3)",
            instruction: "Trouvez le cas d'<strong>Ikhfaa</strong>.",
            totalIzhar: 1,
            words: [
                { t: "وَلَآ", ok: false }, { t: "أَنتُمْ", ok: true, noun: "Noun Sakina", letter: "Ta (ت)", endVerse: false }, // Wa la Antum
                { t: "عَٰبِدُونَ", ok: false }, { t: "مَآ", ok: false }, { t: "أَعْبُدُ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: "Sourate Al-Fil (4)",
            instruction: "Trouvez le cas d'<strong>Ikhfaa</strong>.",
            totalIzhar: 1,
            words: [
                { t: "تَرْمِيهِم", ok: false }, { t: "بِحِجَارَةٍ", ok: false }, { t: "مِّن", ok: true, noun: "Noun Sakina", letter: "Sin (س)", endVerse: false }, // Min sijjil
                { t: "سِجِّيلٍ", ok: false, endVerse: true }
            ]
        }
    ]
};
