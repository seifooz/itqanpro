const QAL_HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#6c5ce7; color:white; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        💡 Aide : L'Algorithme
    </button>
    <div style="display:none; background:#e8eaf6; border:1px solid #3f51b5; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>1.</strong> Je vois une lettre <strong>Qutb Jad (ق ط ب ج د)</strong>.<br>
        <strong>2.</strong> Elle a un <strong>Soukoun (ْ)</strong> ?<br>
        (Ou je m'arrête dessus ?)<br>
        ✅ <strong>OUI = QALQALA</strong> (Rebond)<br>
        <div style="font-size:0.8rem; color:#d63031; margin-top:5px;">
        👉 Je fais vibrer la lettre pour la faire entendre.
        </div>
    </div>
</div>`;

const QALQALA_DATA = {
    id: "qalqala",
    title: "MASTERCLASS QALQALA",
    type: "Ahkam Spécifiques",
    steps: [
        // --- PARTIE 1 : THÉORIE ---

        // 1. INTRO
        {
            type: "lesson",
            prof: "Le <strong>Qalqala</strong> est l'une des règles les plus célèbres.<br>Elle donne vie à la récitation.",
            html: `
            <div class="concept-card">
                <h3>Définition : Le Rebond 🏀</h3>
                <p style="font-size:1rem; color:#2c3e50; margin-bottom:20px;">
                    C'est une <strong>forte vibration</strong> de la lettre lorsqu'elle est prononcée avec Soukoun, créant un effet d'écho.
                </p>
                
                <div style="background:#e3f2fd; padding:15px; border-radius:10px; margin-bottom:15px;">
                    <div class="ar-med" style="font-size:1.8rem; margin-bottom:10px;">قُلْ هُوَ ٱللَّهُ أَحَدٌ</div>
                    <button class="btn-audio btn-listen" onclick="playAudio('qalqala_intro_qalqala', 5, 8, 'intro_qalqala')" style="width:100%; background:#fff; border:1px solid #90caf9; padding:8px; border-radius:8px; cursor:pointer;">
                        🔊 Écouter l'effet (Ahad)
                    </button>
                </div>
                <p style="font-size:0.85rem; color:#666;">Sans Qalqala, le son serait étouffé et disparaîtrait.</p>
            </div>`
        },

        // 2. CONDITIONS - LETTRES
        {
            type: "lesson",
            prof: "Condition N°1 : La Lettre.<br>Seulement 5 lettres concernées.",
            html: `
            <div class="concept-card">
                <h3>Les 5 Lettres : Qutb Jad</h3>
                <div class="letters-grid" style="grid-template-columns:repeat(5, 1fr); gap:10px; margin-bottom:15px;">
                    <div class="l-card"><div class="l-ar">ق</div></div>
                    <div class="l-card"><div class="l-ar">ط</div></div>
                    <div class="l-card"><div class="l-ar">ب</div></div>
                    <div class="l-card"><div class="l-ar">ج</div></div>
                    <div class="l-card"><div class="l-ar">د</div></div>
                </div>
                <div style="background:#fef9e7; padding:10px; border-radius:8px; border:1px solid #f1c40f; text-align:center;">
                    <strong style="color:#d35400; font-size:1.1rem;">"قُطْبُ جَدٍ"</strong>
                    <div style="font-size:0.8rem; color:#7f8c8d;">(Moyen mnémotechnique)</div>
                </div>
            </div>`
        },

        // 3. CONDITIONS - SOUKOUN
        {
            type: "lesson",
            prof: "Condition N°2 : Le Soukoun.<br>Le blocage du son.",
            html: `
            <div class="concept-card">
                <h3>Le Déclencheur : Le Blocage</h3>
                <div style="display:flex; flex-direction:column; gap:15px; margin-top:15px;">
                    <!-- NON -->
                    <div style="display:flex; align-items:center; gap:15px; background:#fff5f5; border:1px solid #ff7675; border-radius:10px; padding:15px;">
                        <div class="ar-big" style="color:#c0392b; font-size:1.8rem; width:40px; text-align:center;">قَ</div>
                        <div style="flex:1;">
                            <div style="font-weight:bold; color:#c0392b; font-size:0.9rem;">AVEC VOYELLE</div>
                            <div style="font-size:0.85rem; color:#333;">Ex: <strong>خَلَقَ</strong> (Khalaqa)</div>
                            <div style="font-size:0.75rem; color:#d63031; margin-top:3px;">❌ PAS DE QALQALA</div>
                        </div>
                    </div>
                    <!-- OUI -->
                    <div style="display:flex; align-items:center; gap:15px; background:#f0fdf4; border:2px solid #00b894; border-radius:10px; padding:15px;">
                        <div class="ar-big" style="color:#00b894; font-size:1.8rem; width:40px; text-align:center;">قْ</div>
                        <div style="flex:1;">
                            <div style="font-weight:bold; color:#008f72; font-size:0.9rem;">AVEC SOUKOUN</div>
                            <div style="font-size:0.85rem; color:#333;">Ex: <strong>يَقْتُلُونَ</strong> (Yaq...)</div>
                            <div style="font-size:0.75rem; color:#008f72; margin-top:3px;">✅ QALQALA ACTIVE !</div>
                        </div>
                    </div>
                </div>
            </div>`
        },

        // 4. ALGORITHME
        {
            type: "lesson",
            prof: "L'Algorithme Mental.<br>À retenir par cœur.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je vois une lettre <strong>Qutb Jad</strong> ?</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>Elle a un <strong>Soukoun</strong> (ou Arrêt) ?</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">OUI ➡ <strong>QALQALA</strong><br>Rebond du son 🔊</div></div></div>`
        },

        // 5. NIVEAUX (MARATIB)
        {
            type: "lesson",
            prof: "Les 3 Niveaux (Maratib).<br>L'intensité dépend de la position.",
            html: `
            <div class="concept-card">
                <h3>Les 3 Degrés d'Intensité</h3>
                
                <div style="margin-top:20px; text-align:left;">
                    
                    <!-- 1. SUGHRA -->
                    <div style="border-left:4px solid #fab1a0; padding-left:12px; margin-bottom:20px;">
                        <h4 style="color:#e17055; margin:0;">1. Sughra (Petit)</h4>
                        <p style="font-size:0.85rem; margin:5px 0;">Au <strong>milieu</strong> du mot ou de la phrase.</p>
                        <div class="ar-med" style="color:#2d3436;">يَقْتُلُونَ</div>
                        <div style="font-size:0.8rem; color:#636e72;">Rebond rapide et fluide.</div>
                    </div>

                    <!-- 2. KUBRA -->
                    <div style="border-left:4px solid #ff7675; padding-left:12px; margin-bottom:20px;">
                        <h4 style="color:#d63031; margin:0;">2. Kubra (Moyen)</h4>
                        <p style="font-size:0.85rem; margin:5px 0;">À l'<strong>arrêt</strong> sur la lettre.</p>
                        <div class="ar-med" style="color:#2d3436;">ٱلْفَلَقِ ➝ ٱلْفَلَقْ</div>
                        <div style="font-size:0.8rem; color:#636e72;">Rebond clair et fort.</div>
                    </div>

                    <!-- 3. AKBAR -->
                    <div style="border-left:4px solid #c0392b; padding-left:12px;">
                        <h4 style="color:#b33939; margin:0;">3. Akbar (Grand)</h4>
                        <p style="font-size:0.85rem; margin:5px 0;">À l'arrêt sur une <strong>Shaddah</strong>.</p>
                        <div class="ar-med" style="color:#2d3436;">وَتَبَّ ➝ وَتَبْ</div>
                        <div style="font-size:0.8rem; color:#636e72;">Pause avant d'exploser.</div>
                    </div>

                </div>
            </div>`
        },

        // 6. RÈGLE D'ARRÊT
        {
            type: "lesson",
            prof: "Règle Importante : L'Arrêt.<br>Le Soukoun 'Accidentel'.",
            html: `
            <div class="concept-card">
                <h3>Le Soukoun d'Arrêt</h3>
                <p style="font-size:0.9rem; margin-bottom:15px;">
                    En arabe, on ne s'arrête jamais sur une voyelle. Si on s'arrête, la voyelle devient un <strong>Soukoun</strong>.
                </p>
                <div style="background:#f1f2f6; padding:15px; border-radius:10px; text-align:center;">
                    <div class="ar-big" style="margin-bottom:5px;">أَحَدٌ ➝ أَحَدْ</div>
                    <div style="font-size:0.8rem; color:#555;">(Ahadun) devient (Ahad)</div>
                </div>
                <div class="tip-box" style="margin-top:15px;">
                    💡 Si tu t'arrêtes sur une lettre Qutb Jad, tu <strong>DOIS</strong> faire le Qalqala !
                </div>
            </div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Écoutez et ressentez la Qalqala." },

        {
            type: "workshop", prof: `Exemples de <strong>Qalqala</strong> (Sughra & Kubra). ${QAL_HELP_HTML}`, examples: [
                { type: "Qaf (Milieu)", ar: "يَقْتُلُونَ", url: "qalqala_lesson_1", start: 8, end: 10, hint: "Sughra (Rapide)" },
                { type: "Qaf (Fin)", ar: "خَلَقَ", url: "qalqala_qaf_fin__2", start: 0, end: 2, hint: "Kubra (Fort)" },
                { type: "Ta (Milieu)", ar: "يَطْمَعُ", url: "qalqala_ta_milieu__3", start: 0, end: 2, hint: "Sughra" },
                { type: "Ba (Fin)", ar: "وَقَبَ", url: "qalqala_ba_fin__4", start: 2, end: 4, hint: "Kubra" },
                { type: "Dal (Fin+Shadda)", ar: "وَتَبَّ", url: "qalqala_dal_fin_shadda__5", start: 4, end: 6, hint: "Akbar (Explosif)" }
            ]
        },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>Testez votre compréhension." },

        { type: "exam_quiz", prof: `Question 1/9 ${QAL_HELP_HTML}`, opts: [{ ar: "ن م ل ي", good: false }, { ar: "ق ط ب ج د", good: true, reason: "Lettres Qutb Jad" }, { ar: "ء هـ ع ح", good: false }], noun: "Lettres", letter: "Qalqala" },
        { type: "exam_quiz", prof: `Question 2/9 ${QAL_HELP_HTML}`, opts: [{ ar: "خَلَقَ", good: false, reason: "Voyelle Fatha = Pas de Qalqala" }, { ar: "خَلَقْ", good: true, reason: "Soukoun = Qalqala" }], noun: "Qaf", letter: "Voyelle" },
        { type: "exam_quiz", prof: `Question 3/9 ${QAL_HELP_HTML}`, opts: [{ ar: "يَقْتُلُونَ", good: true, reason: "Qaf avec Soukoun" }, { ar: "يَقُولُ", good: false }], noun: "Qaf", letter: "Soukoun" },
        { type: "exam_quiz", prof: "Question 4/9<br>Je m'arrête sur un mot. Que devient la voyelle ?", opts: [{ t: "Elle reste", good: false }, { t: "Elle devient Soukoun", good: true, reason: "Règle de l'arrêt" }], noun: "Arrêt", letter: "Règle" },
        { type: "exam_quiz", prof: "Question 5/9<br>Si je m'arrête sur **أَحَدٌ**, je prononce :", opts: [{ t: "Ahadun", good: false }, { t: "Ahad (Rebond)", good: true }], noun: "Arrêt", letter: "Exemple" },
        { type: "exam_quiz", prof: "Question 6/9<br>Lequel est une Qalqala **Sughra** (Petite) ?", opts: [{ ar: "ٱلْفَلَقِ", good: false }, { ar: "يَدْخُلُونَ", good: true, reason: "Milieu du mot = Sughra" }], noun: "Niveau", letter: "Sughra" },
        { type: "exam_quiz", prof: "Question 7/9<br>Lequel est une Qalqala **Akbar** (Très Grande) ?", opts: [{ ar: "أَحَدٌ", good: false }, { ar: "وَتَبَّ", good: true, reason: "Fin + Shaddah = Akbar" }], noun: "Niveau", letter: "Akbar" },
        { type: "exam_quiz", prof: "Question 8/9<br>La lettre **Te (ت)** est-elle Qalqala ?", opts: [{ t: "OUI", good: false }, { t: "NON (c'est Ta ط)", good: true }], noun: "Lettre", letter: "Piège" },
        { type: "exam_quiz", prof: "Question 9/9<br>Le mot **ٱقْرَأْ** (Lis) a un Qalqala sur :", opts: [{ t: "Hamza", good: false }, { t: "Le Qaf", good: true, reason: "Iq-ra : Qaf Sakina" }], noun: "Analyse", letter: "Mot" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion.<br>Trouvez les Qalqala." },

        {
            type: "immersion",
            prof: `Sourate Al-Ikhlas (112) ${QAL_HELP_HTML}`,
            instruction: "Trouvez les lettres de Qalqala (Attention aux arrêts !)",
            totalIzhar: 5,
            targetName: "un Qalqala",
            words: [
                { t: "قُلْ", ok: false }, { t: "هُوَ", ok: false }, { t: "ٱللَّهُ", ok: false }, { t: "أَحَدٌ", ok: true, noun: "دْ", letter: "Dal (Akbar)", endVerse: true, reason: "Arrêt sur Dal = Qalqala ✅" },
                { t: "ٱللَّهُ", ok: false }, { t: "ٱلصَّمَدُ", ok: true, noun: "دْ", letter: "Dal (Akbar)", endVerse: true, reason: "Arrêt sur Dal = Qalqala ✅" },
                { t: "لَمْ", ok: false }, { t: "يَلِدْ", ok: true, noun: "دْ", letter: "Dal (Sughra)", reason: "Soukoun au milieu = Qalqala ✅" }, { t: "وَلَمْ", ok: false }, { t: "يُولَدْ", ok: true, noun: "دْ", letter: "Dal (Akbar)", endVerse: true, reason: "Arrêt sur Dal = Qalqala ✅" },
                { t: "وَلَمْ", ok: false }, { t: "يَكُن", ok: false }, { t: "لَّهُۥ", ok: false }, { t: "كُفُوًا", ok: false }, { t: "أَحَدٌۢ", ok: true, noun: "دْ", letter: "Dal (Akbar)", endVerse: true, reason: "Arrêt sur Dal = Qalqala ✅" }
            ]
        },
        {
            type: "immersion",
            prof: `Sourate Al-Falaq (113) ${QAL_HELP_HTML}`,
            instruction: "Les Qalqala sont à la fin des versets. Trouve-les.",
            totalIzhar: 5,
            targetName: "un Qalqala",
            words: [
                { t: "قُلْ", ok: false }, { t: "أَعُوذُ", ok: false }, { t: "بِرَبِّ", ok: false }, { t: "ٱلْفَلَقِ", ok: true, noun: "قْ", letter: "Qaf", endVerse: true, reason: "Arrêt sur Qaf = Qalqala ✅" },
                { t: "مِن", ok: false }, { t: "شَرِّ", ok: false }, { t: "مَا", ok: false }, { t: "خَلَقَ", ok: true, noun: "قْ", letter: "Qaf", endVerse: true, reason: "Arrêt sur Qaf = Qalqala ✅" },
                { t: "وَمِن", ok: false }, { t: "شَرِّ", ok: false }, { t: "غَاسِقٍ", ok: false }, { t: "إِذَا", ok: false }, { t: "وَقَبَ", ok: true, noun: "بْ", letter: "Ba", endVerse: true, reason: "Arrêt sur Ba = Qalqala ✅" },
                { t: "وَمِن", ok: false }, { t: "شَرِّ", ok: false }, { t: "ٱلنَّفَّٰثَٰتِ", ok: false }, { t: "فِي", ok: false }, { t: "ٱلْعُقَدِ", ok: true, noun: "دْ", letter: "Dal", endVerse: true, reason: "Arrêt sur Dal = Qalqala ✅" },
                { t: "وَمِن", ok: false }, { t: "شَرِّ", ok: false }, { t: "حَاسِدٍ", ok: false }, { t: "إِذَا", ok: false }, { t: "حَسَدَ", ok: true, noun: "دْ", letter: "Dal", endVerse: true, reason: "Arrêt sur Dal = Qalqala ✅" }
            ]
        }
    ]
};
