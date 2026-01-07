const MIM_IDGHAM_DATA = {
    title: "IDGHAM SHAFAWI",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---
        {
            type: "lesson",
            prof: "Bienvenue sur les Règles du Mim Sakina.<br>Règle 1 : Idgham Shafawi.",
            html: `<div class="concept-card"><h3>Le Concept</h3><p style="font-size:0.9rem; color:#666; margin-bottom:20px;">Si un <strong>Mim Sakina (مْ)</strong> rencontre un autre <strong>Mim (م)</strong>, ils fusionnent.</p><div class="recap-grid"><div class="recap-item"><div class="ar-big">مْ</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Mim Sakina</div></div><div class="recap-item"><div class="ar-big">+</div></div><div class="recap-item"><div class="ar-big">م</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Mim Voyelle</div></div></div></div>`
        },
        {
            type: "lesson",
            prof: "Définition : Fusion Orale.<br>Cela devient un seul Mim renforcé (Shaddah).",
            html: `<div class="concept-card"><h3>Mécanisme</h3><div class="simple-list"><div class="simple-item"><span class="check-icon">OK</span><span>Fusion <strong>COMPLETE</strong>.</span></div><div class="simple-item"><span class="check-icon">OK</span><span><strong>GHUNNAH</strong> : Vibration nasale 2 temps.</span></div><div class="simple-item"><span class="check-icon">OK</span><span>Lèvres fermées.</span></div></div>
            <div class="def-audio-row">
                <button class="def-audio-btn" id="play-def-mim-idgham" onclick="playAudio('mim_idgham_def_noun', 0, 100, 'def-mim-1')">🔊 Exemple (Lahum-Ma)</button>
            </div>
            <p style="font-size:0.8rem; margin-top:20px; color:#888;">C'est un "Idgham Mutamathilayn" (Identiques).</p></div>`
        },

        // Equation
        {
            type: "lesson",
            prof: "Résumé de la règle.<br>Formule à retenir.",
            html: `<div class="eq-container"><div class="eq-card"><div style="font-size:0.9rem; color:#888; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;">Formule Mim Sakina</div><div class="eq-formula"><div class="eq-tag tag-blue">Mim Sakina</div><div class="eq-plus">+</div><div class="eq-tag tag-green">م</div><div class="eq-plus">=</div><div class="res-text">MIM SHADDAH + GHUNNAH</div></div></div></div>`
        },

        // Exemples Visuels
        {
            type: "lesson",
            prof: "Exemple Visuel.<br>Observez la fusion.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">لَهُم مَّا</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">م</div><div class="mz-label green">Mim</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">مْ</div><div class="mz-label blue">Mim Sakina</div></div></div></div><div class="ex-logic">Le Mim Sakina entre dans le Mim suivant.<br>On prononce <strong>LAHUM-MA</strong> avec Ghunnah.</div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Écoutez la Ghunnah." },

        {
            type: "workshop", prof: "Unique Lettre : <strong>Mim (م)</strong>.<br>Vibration nasale obligatoire.", examples: [
                { type: "Mim", ar: "لَهُم مَّا", url: "mim_idgham_lahum_ma", hint: "Lahum-ma" },
                { type: "Mim", ar: "أَطْعَمَهُم مِّن", url: "mim_idgham_at'amahum_min", hint: "At'amahum-min" },
                { type: "Mim", ar: "عَلَيْهِم مُّؤْصَدَةٌ", url: "mim_idgham_alayhim_mu'sadah", hint: "Alayhim-mu'sadah" }
            ]
        },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>8 questions." },

        { type: "exam_quiz", prof: "Question 1/8<br>Trouvez l'Idgham Shafawi :", opts: [{ ar: "لَكُمْ دِينُكُمْ", good: false }, { ar: "لَهُم مَّا", good: true }, { ar: "أَنَّهُمْ", good: false }], noun: "Mim Sakina", letter: "م" },
        { type: "exam_quiz", prof: "Question 2/8<br>Trouvez l'Idgham Shafawi :", opts: [{ ar: "أَلَمْ نَشْرَحْ", good: false }, { ar: "هُمْ فِيهَا", good: false }, { ar: "أَطْعَمَهُم مِّن", good: true }], noun: "Mim Sakina", letter: "م" },
        { type: "exam_quiz", prof: "Question 3/8<br>Trouvez l'Idgham Shafawi :", opts: [{ ar: "عَلَيْهِم مُّؤْصَدَةٌ", good: true }, { ar: "عَلَيْهِمْ وَلَا", good: false }, { ar: "أَلَمْ تَرَ", good: false }], noun: "Mim Sakina", letter: "م" },
        { type: "exam_quiz", prof: "Question 4/8<br>Trouvez l'Idgham Shafawi :", opts: [{ ar: "كُنتُمْ خَيْرَ", good: false }, { ar: "كُنتُم مَّرْضَىٰ", good: true }, { ar: "أَمْ لَمْ", good: false }], noun: "Mim Sakina", letter: "م" },
        { type: "exam_quiz", prof: "Question 5/8<br>Trouvez l'Idgham Shafawi :", opts: [{ ar: "مِنْهُمْ", good: false }, { ar: "وَمِنْهُم مَّن", good: true }, { ar: "عَنْهُمْ", good: false }], noun: "Mim Sakina", letter: "م" },
        { type: "exam_quiz", prof: "Question 6/8<br>Trouvez l'Idgham Shafawi :", opts: [{ ar: "إِنَّهُمْ كَانُوا۟", good: false }, { ar: "فَإِنَّهُمْ", good: false }, { ar: "إِنَّهُم مُّلَٰقُوا۟", good: true }], noun: "Mim Sakina", letter: "م" },
        { type: "exam_quiz", prof: "Question 7/8<br>Trouvez l'Idgham Shafawi :", opts: [{ ar: "أَمْ مَنْ", good: true }, { ar: "أَمْ لَمْ", good: false }, { ar: "أَمْ حَسِبْتُمْ", good: false }], noun: "Mim Sakina", letter: "م" },
        { type: "exam_quiz", prof: "Question 8/8<br>Trouvez l'Idgham Shafawi :", opts: [{ ar: "كَمْ أَهْلَكْنَا", good: false }, { ar: "لَكُمْ دِينُكُمْ", good: false }, { ar: "كَم مِّن فِئَةٍ", good: true }], noun: "Mim Sakina", letter: "م" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion Coranique.<br>Analyse réelle." },

        {
            type: "immersion",
            prof: "Sourate Al-Humazah (8)",
            instruction: "Trouvez le cas d'<strong>Idgham Shafawi</strong>.",
            totalIzhar: 1,
            words: [
                { t: "إِنَّهَا", ok: false },
                { t: "عَلَيْهِم", ok: true, noun: "Mim Sakina", letter: "م", endVerse: false }, // Alayhim-Mu'sadah
                { t: "مُّؤْصَدَةٌ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: "Sourate Quraish (4)",
            instruction: "Trouvez le cas d'<strong>Idgham Shafawi</strong>.",
            totalIzhar: 1,
            words: [
                { t: "ٱلَّذِيٓ", ok: false },
                { t: "أَطْعَمَهُم", ok: true, noun: "Mim Sakina", letter: "م", endVerse: false }, // At'amahum-min
                { t: "مِّن", ok: false }, { t: "جُوعٍ", ok: false, endVerse: true }
            ]
        }
    ]
};
