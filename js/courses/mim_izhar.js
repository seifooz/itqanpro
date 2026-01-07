const MIM_IZHAR_DATA = {
    title: "IZHAR SHAFAWI",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---
        {
            type: "lesson",
            prof: "Bienvenue sur les Règles du Mim Sakina.<br>Règle 3 : Izhar Shafawi (La plus fréquente).",
            html: `<div class="concept-card"><h3>Le Concept</h3><p style="font-size:0.9rem; color:#666; margin-bottom:20px;">Si le <strong>Mim Sakina (مْ)</strong> est suivi de n'importe quelle lettre (sauf Mim et Ba), on le prononce <strong>Clairement</strong>.</p><div class="recap-grid"><div class="recap-item"><div class="ar-big">٢٦</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Lettres</div></div></div></div>`
        },
        {
            type: "lesson",
            prof: "Définition : Clarté Orale.<br>Pas de Ghunnah, pas d'arrêt.",
            html: `<div class="concept-card"><h3>Mécanisme</h3><div class="simple-list"><div class="simple-item"><span class="check-icon">OK</span><span>Son <strong>CLAIR</strong> et bref.</span></div><div class="simple-item"><span class="check-icon bad">NON</span><span>Pas de vibration prolongée (Ghunnah normale).</span></div><div class="simple-item"><span class="check-icon bad">ATTENTION</span><span>Ne pas faire d'Ikhfaa avec <strong>Waw (و)</strong> et <strong>Fa (ف)</strong>.</span></div></div>
            <div class="def-audio-row">
                <button class="def-audio-btn" id="play-def-mim-izhar" onclick="playAudio('mim_izhar_def_noun', 0, 100, 'def-mim-3')">🔊 Exemple (Hum-Fiha)</button>
            </div>
            <p style="font-size:0.8rem; margin-top:20px; color:#888;">C'est la règle par défaut.</p></div>`
        },

        // EXCLUSION LOGIC
        {
            type: "lesson",
            prof: "Comment le reconnaître rapidement ?<br>Méthode d'Exclusion.",
            html: `<div class="concept-card"><h3>La Logique est Simple</h3>
            <div style="text-align:left; margin-top:15px; font-size:1rem;">
                Si ce n'est <span style="color:#d63031; font-weight:bold;">PAS un Mim (Idgham)</span>...<br>
                Et si ce n'est <span style="color:#0984e3; font-weight:bold;">PAS un Ba (Ikhfaa)</span>...<br>
            </div>
            <div style="margin-top:20px; background:#f0fff4; padding:15px; border-radius:8px; font-weight:bold; color:#00b894; text-align:center; font-size:1.1rem;">
                C'est forcément un IZHAR !<br>(Prononcez clairement)
            </div>
            </div>`
        },

        // Equation
        {
            type: "lesson",
            prof: "Résumé de la règle.<br>Formule à retenir.",
            html: `<div class="eq-container"><div class="eq-card"><div style="font-size:0.9rem; color:#888; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;">Formule Mim Sakina</div><div class="eq-formula"><div class="eq-tag tag-blue">Mim Sakina</div><div class="eq-plus">+</div><div class="eq-tag tag-green">Autre</div><div class="eq-plus">=</div><div class="res-text">CLARTÉ (IZHAR)</div></div></div></div>`
        },

        // Exemples Visuels
        {
            type: "lesson",
            prof: "Exemple Visuel.<br>Fermeture rapide des lèvres.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">هُمْ فِيهَا</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ف</div><div class="mz-label green">Fa</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">مْ</div><div class="mz-label blue">Mim Sakina</div></div></div></div><div class="ex-logic">Le Mim est suivi d'un Fa.<br>Attention à ne pas le cacher ! <strong>HUM-FIHA</strong>.</div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Attention aux pièges (Waw/Fa)." },

        {
            type: "workshop", prof: "Lettres Standard.<br>Prononciation nette.", examples: [
                { type: "Ta (ت)", ar: "أَنْعَمْتَ", url: "mim_izhar_an'amta", hint: "An'amta" },
                { type: "Ra (ر)", ar: "أَمْ لَمْ", url: "mim_izhar_am_lam", hint: "Am-Lam" },
                { type: "Hamza", ar: "أَمْ أَنَا۠", url: "mim_izhar_am_ana", hint: "Am-Ana" }
            ]
        },
        {
            type: "workshop", prof: "Lettres 'Danger' (Lèvres).<br>Ne prolongez pas !", examples: [
                { type: "Fa (ف)", ar: "هُمْ فِيهَا", url: "mim_izhar_hum_fiha", hint: "Hum-Fiha" },
                { type: "Waw (و)", ar: "عَلَيْهِمْ وَلَا", url: "mim_izhar_alayhim_wala", hint: "Alayhim-Wala" }
            ]
        },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>8 questions." },

        { type: "exam_quiz", prof: "Question 1/8<br>Trouvez l'Izhar Shafawi (Attention Waw !) :", opts: [{ ar: "عَلَيْهِم مُّؤْصَدَةٌ", good: false }, { ar: "عَلَيْهِمْ وَلَا", good: true }, { ar: "يَعْتَصِم بِٱللَّهِ", good: false }], noun: "Mim Sakina", letter: "و" },
        { type: "exam_quiz", prof: "Question 2/8<br>Trouvez l'Izhar Shafawi :", opts: [{ ar: "لَكُم مَّا", good: false }, { ar: "لَكُمْ دِينُكُمْ", good: true }, { ar: "كُنتُم مَّرْضَىٰ", good: false }], noun: "Mim Sakina", letter: "د" },
        { type: "exam_quiz", prof: "Question 3/8<br>Trouvez l'Izhar Shafawi (Attention Fa !) :", opts: [{ ar: "هُم بَارِزُونَ", good: false }, { ar: "لَهُم مَّا", good: false }, { ar: "هُمْ فِيهَا", good: true }], noun: "Mim Sakina", letter: "ف" },
        { type: "exam_quiz", prof: "Question 4/8<br>Trouvez l'Izhar Shafawi :", opts: [{ ar: "تَرْمِيهِم بِحِجَارَةٍ", good: false }, { ar: "إِنَّهُم مُّلَٰقُوا۟", good: false }, { ar: "أَمْ لَمْ", good: true }], noun: "Mim Sakina", letter: "ل" },
        { type: "exam_quiz", prof: "Question 5/8<br>Trouvez l'Izhar Shafawi :", opts: [{ ar: "أَلَمْ يَعْلَم بِأَنَّ", good: false }, { ar: "أَلَمْ تَكُن", good: true }, { ar: "أَطْعَمَهُم مِّن", good: false }], noun: "Mim Sakina", letter: "ت" },
        { type: "exam_quiz", prof: "Question 6/8<br>Trouvez l'Izhar Shafawi :", opts: [{ ar: "مِّن", good: false }, { ar: "تُمْسُونَ", good: true }, { ar: "مِمَّنْ", good: false }], noun: "Mim Sakina", letter: "س" },
        { type: "exam_quiz", prof: "Question 7/8<br>Trouvez l'Izhar Shafawi :", opts: [{ ar: "أَنْعَمْتَ", good: true }, { ar: "أَنبِئْهُم", good: false }, { ar: "أَنَّهُمْ", good: false }], noun: "Mim Sakina", letter: "ت" }, // Keep Q7 first if you want variety, or shuffle.
        { type: "exam_quiz", prof: "Question 8/8<br>Trouvez l'Izhar Shafawi :", opts: [{ ar: "ذُلِّلَتْ", good: false }, { ar: "أَمْوَٰتًا", good: true }, { ar: "مَا", good: false }], noun: "Mim Sakina", letter: "و" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion Coranique.<br>Analyse réelle." },

        {
            type: "immersion",
            prof: "Sourate Al-Fatiha (7)",
            instruction: "Il y a <strong>2 cas d'Izhar Shafawi</strong> ici (Mim+Lettre).",
            totalIzhar: 2,
            words: [
                { t: "أَنْعَمْتَ", ok: true, noun: "Mim Sakina", letter: "ت", endVerse: false }, // An'amta
                { t: "عَلَيْهِمْ", ok: true, noun: "Mim Sakina", letter: "غ", endVerse: false }, // Alayhim Ghayri
                { t: "غَيْرِ", ok: false },
                { t: "ٱلْمَغْضُوبِ", ok: false },
                { t: "عَلَيْهِمْ", ok: false, endVerse: false } // Alayhim Waladdallin. Technically 3rd one? But usually reciting Fatiha stops or connects? "Alayhim wala" -> Izhar.
            ]
        },
        {
            type: "immersion",
            prof: "Sourate Al-Qari'ah (8)",
            instruction: "Trouvez le cas d'<strong>Izhar Shafawi</strong>.",
            totalIzhar: 1,
            words: [
                { t: "وَأَمَّا", ok: false },
                { t: "مَنْ", ok: false },
                { t: "خَفَّتْ", ok: false },
                { t: "مَوَٰزِينُهُۥ", ok: false, endVerse: true }
            ]
        }
    ]
};
