const MIM_IKHFAA_DATA = {
    title: "IKHFAA SHAFAWI",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---
        {
            type: "lesson",
            prof: "Bienvenue sur les Règles du Mim Sakina.<br>Règle 2 : Ikhfaa Shafawi.",
            html: `<div class="concept-card"><h3>Le Concept</h3><p style="font-size:0.9rem; color:#666; margin-bottom:20px;">Si un <strong>Mim Sakina (مْ)</strong> est suivi de la lettre <strong>Ba (ب)</strong>, on le cache.</p><div class="recap-grid"><div class="recap-item"><div class="ar-big">مْ</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Mim Sakina</div></div><div class="recap-item"><div class="ar-big">+</div></div><div class="recap-item"><div class="ar-big">ب</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Lettre Ba</div></div></div></div>`
        },
        {
            type: "lesson",
            prof: "Définition : Dissimulation Orale.<br>Les lèvres sont entrouvertes (Ba).",
            html: `<div class="concept-card"><h3>Mécanisme</h3><div class="simple-list"><div class="simple-item"><span class="check-icon">OK</span><span>Lèvres <strong>effleurées</strong> (ou fermées sans pression).</span></div><div class="simple-item"><span class="check-icon">OK</span><span><strong>GHUNNAH</strong> : Vibration nasale 2 temps.</span></div></div>
            <div class="def-audio-row">
                <button class="def-audio-btn" id="play-def-mim-ikhfaa" onclick="playAudio('mim_ikhfaa_def_noun', 0, 100, 'def-mim-2')">🔊 Exemple (Tarmīhim-Bi)</button>
            </div>
            <p style="font-size:0.8rem; margin-top:20px; color:#888;">C'est la seule lettre : Le Ba (ب).</p></div>`
        },

        // Equation
        {
            type: "lesson",
            prof: "Résumé de la règle.<br>Formule à retenir.",
            html: `<div class="eq-container"><div class="eq-card"><div style="font-size:0.9rem; color:#888; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;">Formule Mim Sakina</div><div class="eq-formula"><div class="eq-tag tag-blue">Mim Sakina</div><div class="eq-plus">+</div><div class="eq-tag tag-green">ب</div><div class="eq-plus">=</div><div class="res-text">DISSIMULATION + GHUNNAH</div></div></div></div>`
        },

        // Exemples Visuels
        {
            type: "lesson",
            prof: "Exemple Visuel.<br>Observez la transition.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">تَرْمِيهِم بِحِجَارَةٍ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ب</div><div class="mz-label green">Ba</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">مْ</div><div class="mz-label blue">Mim Sakina</div></div></div></div><div class="ex-logic">Le Mim est suivi d'un Ba.<br>On cache le Mim avec une Ghunnah longue.</div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Entraînez-vous avec le Ba." },

        {
            type: "workshop", prof: "Unique Lettre : <strong>Ba (ب)</strong>.<br>Douceur dans la prononciation.", examples: [
                { type: "Ba", ar: "تَرْمِيهِم بِحِجَارَةٍ", url: "mim_ikhfaa_tarmihim_bihijara", hint: "Tarmihim-bihijara" },
                { type: "Ba", ar: "وَمَا هُم بِمُؤْمِنِينَ", url: "mim_ikhfaa_wama_hum_bimuminin", hint: "Wama-hum-bim'minin" },
                { type: "Ba", ar: "أَلَمْ يَعْلَم بِأَنَّ", url: "mim_ikhfaa_alam_ya'lam_bi'anna", hint: "Alam-ya'lam-bi'anna" }
            ]
        },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>8 questions." },

        { type: "exam_quiz", prof: "Question 1/8<br>Trouvez l'Ikhfaa Shafawi :", opts: [{ ar: "أَلَمْ تَكُن", good: false }, { ar: "تَرْمِيهِم بِحِجَارَةٍ", good: true }, { ar: "هُمْ فِيهَا", good: false }], noun: "Mim Sakina", letter: "ب" },
        { type: "exam_quiz", prof: "Question 2/8<br>Trouvez l'Ikhfaa Shafawi :", opts: [{ ar: "أَنفُسَهُمْ", good: false }, { ar: "لَهُم مَّا", good: false }, { ar: "يَعْتَصِم بِٱللَّهِ", good: true }], noun: "Mim Sakina", letter: "ب" }, // "Lahum ma" is Idgham Shafawi.
        { type: "exam_quiz", prof: "Question 3/8<br>Trouvez l'Ikhfaa Shafawi :", opts: [{ ar: "وَمَا هُم بِمُؤْمِنِينَ", good: true }, { ar: "هُمْ يُوقِنُونَ", good: false }, { ar: "لَكُم مَّا", good: false }], noun: "Mim Sakina", letter: "ب" },
        { type: "exam_quiz", prof: "Question 4/8<br>Trouvez l'Ikhfaa Shafawi :", opts: [{ ar: "أَلَمْ نَشْرَحْ", good: false }, { ar: "أَمْ لَمْ", good: false }, { ar: "أَلَمْ يَعْلَم بِأَنَّ", good: true }], noun: "Mim Sakina", letter: "ب" },
        { type: "exam_quiz", prof: "Question 5/8<br>Trouvez l'Ikhfaa Shafawi :", opts: [{ ar: "بَيْنَهُم مَّا", good: false }, { ar: "فَاحْكُم بَيْنَهُم", good: true }, { ar: "أَنْذَرْتَهُمْ", good: false }], noun: "Mim Sakina", letter: "ب" },
        { type: "exam_quiz", prof: "Question 6/8<br>Trouvez l'Ikhfaa Shafawi :", opts: [{ ar: "عَلَيْهِمْ وَلَا", good: false }, { ar: "إِنَّ رَبَّهُم بِهِمْ", good: true }, { ar: "فَلَهُمْ أَجْرُهُمْ", good: false }], noun: "Mim Sakina", letter: "ب" },
        { type: "exam_quiz", prof: "Question 7/8<br>Trouvez l'Ikhfaa Shafawi :", opts: [{ ar: "كَلْبُهُمْ", good: false }, { ar: "أَمْوَاتٌ", good: false }, { ar: "وَكَلْبُهُم بَاسِطٌ", good: true }], noun: "Mim Sakina", letter: "ب" },
        { type: "exam_quiz", prof: "Question 8/8<br>Trouvez l'Ikhfaa Shafawi :", opts: [{ ar: "هُمْ فِيهَا", good: false }, { ar: "يَوْمَ هُم بَارِزُونَ", good: true }, { ar: "هُمْ خَالِدُونَ", good: false }], noun: "Mim Sakina", letter: "ب" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion Coranique.<br>Analyse réelle." },

        {
            type: "immersion",
            prof: "Sourate Al-Fil (4)",
            instruction: "Trouvez le cas d'<strong>Ikhfaa Shafawi</strong>.",
            totalIzhar: 1,
            words: [
                { t: "تَرْمِيهِم", ok: true, noun: "Mim Sakina", letter: "ب", endVerse: false }, // Tarmihim-bihijara
                { t: "بِحِجَارَةٍ", ok: false }, // Bi-hijara
                { t: "مِّن", ok: false },
                { t: "سِجِّيلٍ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: "Sourate Al-Adiyat (11)",
            instruction: "Trouvez le cas d'<strong>Ikhfaa Shafawi</strong>.",
            totalIzhar: 1,
            words: [
                { t: "إِنَّ", ok: false },
                { t: "رَبَّهُم", ok: true, noun: "Mim Sakina", letter: "ب", endVerse: false }, // Rabbahum-bihim
                { t: "بِهِمْ", ok: false }, // Bihim
                { t: "يَوْمَئِذٍ", ok: false },
                { t: "لَّخَبِيرٌ", ok: false, endVerse: true }
            ]
        }
    ]
};
