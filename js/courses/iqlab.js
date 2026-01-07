const IQLAB_DATA = {
    title: "AL-IQLAB MASTERCLASS",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---
        {
            type: "lesson",
            prof: "Bienvenue. <br>Ici, nous transformons le son.",
            html: `<div class="concept-card"><h3>Le Signe</h3><p style="font-size:0.9rem; color:#666; margin-bottom:20px;">Le signe distinctif est un petit <strong>Mim (ۢ)</strong> qui remplace la voyelle ou le Soukoun.</p><div class="recap-grid"><div class="recap-item"><div class="ar-big">ب</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Lettre Ba</div></div><div class="recap-item"><div class="ar-big">نۢ</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Petit Mim</div></div></div></div>`
        },
        {
            type: "lesson",
            prof: "Définition : Al-Iqlab.<br>Le Noun Sakina ou Tanween devient un Mim.",
            html: `<div class="concept-card"><h3>Caractéristiques</h3><div class="simple-list"><div class="simple-item"><span class="check-icon">OK</span><span>Transformation en <strong>MIM (م)</strong>.</span></div><div class="simple-item"><span class="check-icon">OK</span><span><strong>GHUNNAH</strong> : Vibration nasale 2 temps.</span></div><div class="simple-item"><span class="check-icon">OK</span><span>Lèvres entrouvertes (sans forcer).</span></div></div>
            <div class="def-audio-row">
                <button class="def-audio-btn" id="play-def-iq-1" onclick="playAudio('iqlab_def_noun', 0, 100, 'def-iq-1')">🔊 Noun Sakina</button>
                <button class="def-audio-btn" id="play-def-iq-2" onclick="playAudio('iqlab_def_tanween', 0, 100, 'def-iq-2')">🔊 Tanween</button>
            </div>
            <p style="font-size:0.8rem; margin-top:20px; color:#888;">Le son 'N' est totalement remplacé par 'M'.</p></div>`
        },
        // Equation
        {
            type: "lesson",
            prof: "Résumé de la règle.<br>Formule à retenir.",
            html: `<div class="eq-container"><div class="eq-card"><div style="font-size:0.9rem; color:#888; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;">Formule Iqlab</div><div class="eq-formula"><div class="eq-tag tag-blue">Noun / Tanween</div><div class="eq-plus">+</div><div class="eq-tag tag-green">ب</div><div class="eq-plus">=</div><div class="res-text">MIM (م) + GHUNNAH</div></div></div></div>`
        },

        // Exemples Visuels
        {
            type: "lesson",
            prof: "Exemple 1 : Noun + Ba.<br>Transformation interne ou externe.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">مِنۢ بَعْدِ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ب</div><div class="mz-label green">Lettre</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نۢ</div><div class="mz-label blue">Noun</div></div></div></div><div class="ex-logic">Le <strong>Noun Sakina</strong> rencontre le <strong>Ba (ب)</strong>.<br>Il devient Mim ➡ <strong>MIM-BA'DI</strong>.<span class="ex-def">Prononcez avec une vibration nasale.</span></div></div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2 : Tanween + Ba.<br>Le son 'oun' devient 'oum'.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">سَمِيعٌۢ بَصِيرٌ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ب</div><div class="mz-label green">Lettre</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">ــٌۢ</div><div class="mz-label blue">Tanween</div></div></div></div><div class="ex-logic">Le <strong>Tanween</strong> rencontre le <strong>Ba (ب)</strong>.<br>Transformation ➡ <strong>SAMI'UM-BASEER</strong>.<span class="ex-def">La finale 'N' mute en 'M'.</span></div></div>`
        },

        // Quiz Théorie
        {
            type: "quiz_theory",
            prof: "Vérification.<br>Quelle est la seule lettre de l'Iqlab ?",
            opts: [
                { t: "Mim (م)", good: false },
                { t: "Ba (ب)", good: true }
            ],
            exp: "Correct. Le Ba (ب) est l'unique lettre qui déclenche l'Iqlab lorsqu'elle suit un Noun Sakina ou un Tanween."
        },
        // Algorithme
        {
            type: "lesson",
            prof: "Méthodologie de lecture.<br>Schéma logique.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je repère Noun Sakina ou Tanween.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>La lettre suivante est un Ba (ب) ?</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">OUI ➡ Je transforme en 'M' + Ghunnah.</div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Entraînement Lettre Ba." },

        // WORKSHOP
        { type: "workshop", prof: "Lettre Unique : <strong>Ba (ب)</strong>.<br>Observez le petit Mim.", examples: [{ type: "Noun Sakina", ar: "مِنۢ بَعْدِ", url: "iqlab_min_ba'di", hint: "Mim-ba'di" }, { type: "Tanween", ar: "سَمِيعٌۢ بَصِيرٌ", url: "iqlab_samiun_baseer", hint: "Sami'um-baseer" }] },
        { type: "workshop", prof: "Plus d'exemples.", examples: [{ type: "Noun Sakina", ar: "أَنبِئْهُم", url: "iqlab_ambi'hum", hint: "Am-bi'hum" }, { type: "Tanween", ar: "كِرَامٍ بَرَرَةٍ", url: "iqlab_kiramin_bararah", hint: "Kiramim-bararah" }] },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>8 questions pour valider." },

        { type: "exam_quiz", prof: "Question 1/8<br>Trouvez l'Iqlab :", opts: [{ ar: "أَن تَبَرُّوا۟", good: false }, { ar: "أَنبِئْهُم", good: true }, { ar: "أَنْعَمْتَ", good: false }], noun: "Noun Sakina", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: "Question 2/8<br>Trouvez l'Iqlab :", opts: [{ ar: "عَيْنٍ ءَانِيَةٍ", good: false }, { ar: "كِرَامٍ بَرَرَةٍ", good: true }, { ar: "رَسُولٌ مِّنَ", good: false }], noun: "Tanween", letter: "Ba (ب)" },

        { type: "exam_quiz", prof: "Question 3/8<br>Trouvez l'Iqlab :", opts: [{ ar: "مِن رَّبِّهِمْ", good: false }, { ar: "مِنۢ بَعْدِ", good: true }, { ar: "مِمَّنْ", good: false }], noun: "Noun Sakina", letter: "Ba (ب)" },

        { type: "exam_quiz", prof: "Question 4/8<br>Trouvez l'Iqlab :", opts: [{ ar: "عَلِيمٌ حَكِيمٌ", good: false }, { ar: "غَفُورٌ رَّحِيمٌ", good: false }, { ar: "عَلِيمٌۢ بِذَاتِ", good: true }], noun: "Tanween", letter: "Ba (ب)" },

        { type: "exam_quiz", prof: "Question 5/8<br>Trouvez l'Iqlab :", opts: [{ ar: "فَمَن يَعْمَلْ", good: false }, { ar: "لَيُنۢبَذَنَّ", good: true }, { ar: "يَنْهَوْنَ", good: false }], noun: "Noun Sakina (Interne)", letter: "Ba (ب)" },

        { type: "exam_quiz", prof: "Question 6/8<br>Trouvez l'Iqlab :", opts: [{ ar: "أَفْوَاجًا", good: false }, { ar: "حَبًّا وَنَبَاتًا", good: false }, { ar: "زَوْجٍۭ بَهِيجٍ", good: true }], noun: "Tanween", letter: "Ba (ب)" },

        { type: "exam_quiz", prof: "Question 7/8<br>Trouvez l'Iqlab :", opts: [{ ar: "يَنظُرُونَ", good: false }, { ar: "يَنقَلِبُ", good: false }, { ar: "يَنۢبُوعًا", good: true }], noun: "Noun Sakina", letter: "Ba (ب)" },

        { type: "exam_quiz", prof: "Question 8/8<br>Trouvez l'Iqlab :", opts: [{ ar: "رَجْعٌۢ بَعِيدٌ", good: true }, { ar: "شَيْءٍ شَهِيدٌ", good: false }, { ar: "نَارٌ حَامِيَةٌ", good: false }], noun: "Tanween", letter: "Ba (ب)" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion Coranique.<br>Analyse réelle." },

        {
            type: "immersion",
            prof: "Sourate Al-Humazah (4)",
            instruction: "Trouvez le cas d'<strong>Iqlab</strong> (Mot contenant Noun+Ba).",
            totalIzhar: 1,
            words: [
                { t: "كَلَّا", ok: false },
                { t: "لَيُنۢبَذَنَّ", ok: true, noun: "Noun Sakina", letter: "Ba (ب)", endVerse: false }, // Layumbazanna. Small Mim above Nun.
                { t: "fī", ok: false }, // Simplified for display if needed, but sticking to Arabic usually. Wait, Verse is "Kalla layumbadhanna fi al-hutama".
                // Let's stick to Arabic text
                { t: "فِي", ok: false },
                { t: "ٱلْحُطَمَةِ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: "Sourate Al-Mulk (13)",
            instruction: "Trouvez le cas d'<strong>Iqlab</strong>.",
            totalIzhar: 1,
            words: [
                { t: "إِنَّهُۥ", ok: false },
                { t: "عَلِيمٌۢ", ok: true, noun: "Tanween", letter: "Ba (ب)", endVerse: false },
                { t: "بِذَاتِ", ok: false },
                { t: "ٱلصُّدُورِ", ok: false, endVerse: true }
            ]
        }
    ]
};
