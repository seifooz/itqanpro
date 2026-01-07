const IDGHAM_BILA_GHUNNAH_DATA = {
    title: "IDGHAM BILA-GHUNNAH",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---
        {
            type: "lesson",
            prof: "Bienvenue. <br>Ici, nous abordons l'Idgham Complet (Kamil) sans nasalisation.",
            html: `<div class="concept-card"><h3>Les Signes</h3><p style="font-size:0.9rem; color:#666; margin-bottom:20px;">Repérez le Noun Sakina ou le Tanween, suivi d'une <strong>Shaddah ( ّ )</strong> sur la lettre suivante.</p><div class="recap-grid"><div class="recap-item"><div class="ar-big">لّ</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Lam Shaddah</div></div><div class="recap-item"><div class="ar-big">رّ</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Ra Shaddah</div></div></div></div>`
        },
        {
            type: "lesson",
            prof: "Définition : Bila Ghunnah.<br>La fusion est totale, le son N disparaît complètement.",
            html: `<div class="concept-card"><h3>Caractéristiques</h3><div class="simple-list"><div class="simple-item"><span class="check-icon">OK</span><span>Son <strong>SEC</strong> : Pas de vibration.</span></div><div class="simple-item"><span class="check-icon">OK</span><span>Fusion <strong>TOTALE</strong> : On saute le N.</span></div><div class="simple-item"><span class="check-icon bad">NON</span><span>Pas de Ghunnah (0 temps).</span></div></div>
            <div class="def-audio-row">
                <button class="def-audio-btn" id="play-def-bg-1" onclick="playAudio('idgham_bg_def_noun', 0, 100, 'def-bg-1')">🔊 Noun Sakina</button>
                <button class="def-audio-btn" id="play-def-bg-2" onclick="playAudio('idgham_bg_def_tanween', 0, 100, 'def-bg-2')">🔊 Tanween</button>
            </div>
            <p style="font-size:0.8rem; margin-top:20px; color:#888;">Le passage est direct et rapide.</p></div>`
        },
        {
            type: "lesson",
            prof: "Les 2 Lettres.<br>Uniquement Lam (ل) et Ra (ر).",
            html: `<div class="concept-card"><div style="color:#d63031; font-weight:700; margin-bottom:15px; text-transform:uppercase; font-size:0.8rem;">À mémoriser</div><div class="letters-grid" style="grid-template-columns:repeat(2, 1fr); gap:20px;"><div class="l-card"><div class="l-ar">ل</div></div><div class="l-card"><div class="l-ar">ر</div></div></div><div class="tip-box"><div style="font-size:0.8rem; color:#555; margin-bottom:10px; font-weight:bold;">Astuce :</div><di style="font-size:0.9rem; margin-top:10px; line-height:1.6; color:#444;">Ces lettres sont proches de la sortie de la langue, permettant une fusion facile sans passer par le nez.</di></div></div>`
        },

        // Exemples Visuels
        {
            type: "lesson",
            prof: "Exemple 1 : Noun + Lam.<br>Disparition totale.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">مِن لَّدُنْهُ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ل</div><div class="mz-label green">Lettre</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div><div class="ex-logic">Le <strong>Noun Sakina</strong> rencontre le <strong>Lam (ل)</strong>.<br>On ignore le N ➡ <strong>MIL-LADUNHU</strong>.<span class="ex-def">Prononciation immédiate du Lam.</span></div></div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2 : Tanween + Ra.<br>Fusion sèche.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">غَفُورٌ رَّحِيمٌ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ر</div><div class="mz-label green">Lettre</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">ــٌ</div><div class="mz-label blue">Tanween</div></div></div></div><div class="ex-logic">Le <strong>Tanween</strong> rencontre le <strong>Ra (ر)</strong>.<br>FusionTotale ➡ <strong>GHAFOORUR-RAHEEM</strong>.<span class="ex-def">Le son 'oun' devient 'our' directement.</span></div></div>`
        },

        // Quiz Théorie
        {
            type: "quiz_theory",
            prof: "Vérification.<br>Quelle est la particularité de cet Idgham ?",
            opts: [
                { t: "Avec Nasalisation (Ghunnah)", good: false },
                { t: "Sans Nasalisation (Bila Ghunnah)", good: true }
            ],
            exp: "Correct. C'est la seule règle d'Idgham où la vibration nasale est strictement interdite."
        },
        // Equation
        {
            type: "lesson",
            prof: "Résumé de la règle.<br>Formule à retenir.",
            html: `<div class="eq-container"><div class="eq-card"><div style="font-size:0.9rem; color:#888; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;">Formule Bila Ghunnah</div><div class="eq-formula"><div class="eq-tag tag-blue">Noun / Tanween</div><div class="eq-plus">+</div><div class="eq-tag tag-green">ل ر</div><div class="eq-plus">=</div><div class="res-text">FUSION TOTALE (0s)</div></div></div></div>`
        },
        // Algorithme
        {
            type: "lesson",
            prof: "Méthodologie de lecture.<br>Schéma logique.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je repère Noun Sakina ou Tanween.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>La lettre suivante est L ou R ?</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">OUI ➡ Je fusionne SANS m'arrêter.</div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Entraînement Lam et Ra." },

        // WORKSHOP
        { type: "workshop", prof: "Lettre 1 : <strong>Lam (ل)</strong>.<br>Attaque franche.", examples: [{ type: "Noun Sakina", ar: "مِن لَّدُنْهُ", url: "idgham_bg_min_ladunhu", hint: "Mil-ladunhu" }, { type: "Tanween", ar: "وَيْلٌ لِّكُلِّ", url: "idgham_bg_waylul_likulli", hint: "Waylul-likulli" }] },
        { type: "workshop", prof: "Lettre 2 : <strong>Ra (ر)</strong>.<br>Roulement léger.", examples: [{ type: "Noun Sakina", ar: "مِن رَّبِّهِمْ", url: "idgham_bg_min_rabbihim", hint: "Mir-rabbihim" }, { type: "Tanween", ar: "رَءُوفٌ رَّحِيمٌ", url: "idgham_bg_raoofur_raheem", hint: "Ra'ufur-raheem" }] },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>8 questions pour valider." },

        { type: "exam_quiz", prof: "Question 1/8<br>Trouvez l'Idgham sans Ghunnah :", opts: [{ ar: "مِن نُّورٍ", good: false }, { ar: "أَن لَّوْ", good: true }, { ar: "مَن يَقُولُ", good: false }], noun: "Noun Sakina", letter: "Lam (ل)" },
        { type: "exam_quiz", prof: "Question 2/8<br>Trouvez l'Idgham sans Ghunnah :", opts: [{ ar: "قَوْلًا مَّعْرُوفًا", good: false }, { ar: "هُدًى لِّلْمُتَّقِينَ", good: true }, { ar: "عَلِيمٌ حَكِيمٌ", good: false }], noun: "Tanween", letter: "Lam (ل)" },
        { type: "exam_quiz", prof: "Question 3/8<br>Trouvez l'Idgham sans Ghunnah :", opts: [{ ar: "مِن وَالٍ", good: false }, { ar: "مِن رَّبِّكَ", good: true }, { ar: "أَنعَمْتَ", good: false }], noun: "Noun Sakina", letter: "Ra (ر)" },
        { type: "exam_quiz", prof: "Question 4/8<br>Trouvez l'Idgham sans Ghunnah :", opts: [{ ar: "وَجَعَلْنَا سِرَاجًا", good: false }, { ar: "غَفُورٌ رَّحِيمٌ", good: true }, { ar: "كُفُوًا أَحَدٌ", good: false }], noun: "Tanween", letter: "Ra (ر)" },
        { type: "exam_quiz", prof: "Question 5/8<br>Trouvez l'Idgham sans Ghunnah :", opts: [{ ar: "قُلْ نَعَمْ", good: false }, { ar: "فَسَلَّمَ", good: false }, { ar: "مِن لَّدُنْك", good: true }], noun: "Noun Sakina", letter: "Lam (ل)" },
        { type: "exam_quiz", prof: "Question 6/8<br>Trouvez l'Idgham sans Ghunnah :", opts: [{ ar: "رَسُولٌ مِّنَ", good: false }, { ar: "مُحَمَّدٌ رَّسُولُ", good: true }, { ar: "نَذِيرٌ مُّبِينٌ", good: false }], noun: "Tanween", letter: "Ra (ر)" },
        { type: "exam_quiz", prof: "Question 7/8<br>Trouvez l'Idgham sans Ghunnah :", opts: [{ ar: "أَن يُؤْمِنُوا۟", good: false }, { ar: "أَنفُسَهُمْ", good: false }, { ar: "وَلَٰكِن لَّا", good: true }], noun: "Noun Sakina", letter: "Lam (ل)" },
        { type: "exam_quiz", prof: "Question 8/8<br>Trouvez l'Idgham sans Ghunnah :", opts: [{ ar: "عَيْنٍ ءَانِيَةٍ", good: false }, { ar: "فِي عِيشَةٍ رَّاضِيَةٍ", good: true }, { ar: "يَوْمَئِذٍ خَٰشِعَةٌ", good: false }], noun: "Tanween", letter: "Ra (ر)" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion Coranique.<br>Analyse réelle." },

        {
            type: "immersion",
            prof: "Sourate Al-Humazah (1)",
            instruction: "Ce verset contient <strong>2 cas d'Idgham Bila-Ghunnah</strong>.",
            totalIzhar: 2,
            words: [
                { t: "وَيْلٌ", ok: true, noun: "Tanween", letter: "Lam (ل)", endVerse: false }, { t: "لِّكُلِّ", ok: false }, // Waylul-likulli
                { t: "هُمَزَةٍ", ok: true, noun: "Tanween", letter: "Lam (ل)", endVerse: false }, { t: "لُّمَزَةٍ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: "Sourate Al-Qari'ah (6-7)",
            instruction: "Trouvez le cas d'<strong>Idgham Bila-Ghunnah</strong>.",
            totalIzhar: 1,
            words: [
                { t: "فَأَمَّا", ok: false }, { t: "مَن", ok: false }, { t: "ثَقُلَتْ", ok: false }, { t: "مَوَٰزِينُهُۥ", ok: false, endVerse: true },
                { t: "فَهُوَ", ok: false }, { t: "فِي", ok: false },
                { t: "عِيشَةٍ", ok: true, noun: "Tanween", letter: "Ra (ر)", endVerse: false },
                { t: "رَّاضِيَةٍ", ok: false, endVerse: true }
            ]
        }
    ]
};
