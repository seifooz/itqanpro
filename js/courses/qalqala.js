const QALQALA_DATA = {
    id: "qalqala",
    title: "MASTERCLASS QALQALA",
    type: "Ahkam Spécifiques",
    steps: [
        {
            type: "lesson",
            prof: "Le <strong>Qalqala</strong> est l'une des règles les plus célèbres du Tajweed.<br>Elle donne vie à la récitation.",
            html: `
            <div class="concept-card">
                <h3>Définition : Le Rebond 🏀</h3>
                <p>C'est une forte vibration de la lettre lorsqu'elle est prononcée, créant un effet d'écho ou de rebond.</p>
                <div style="margin-top:20px; text-align:center;">
                    <button class="play-btn" onclick="playAudio('112001', 5, 8, 'intro_qalqala')">🔊 Écouter l'effet (Ahad)</button>
                </div>
                <p style="margin-top:10px; font-size:0.9rem; color:#666;">Sans Qalqala, le son serait étouffé et disparaîtrait.</p>
            </div>`
        },
        {
            type: "intro",
            prof: "Pour appliquer le Qalqala, il faut respecter <strong>2 Conditions</strong> obligatoires.<br>Voyons la première.",
        },
        {
            type: "lesson",
            prof: "<strong>Condition N°1 :</strong> La Lettre.<br>Le Qalqala ne s'applique QUE sur 5 lettres spécifiques.",
            html: `
            <div class="concept-card">
                <h3>Les 5 Lettres : Qutb Jad</h3>
                <div class="letters-grid">
                    <div class="letter-card">ق</div>
                    <div class="letter-card">ط</div>
                    <div class="letter-card">ب</div>
                    <div class="letter-card">ج</div>
                    <div class="letter-card">د</div>
                </div>
                <div style="margin-top:15px; text-align:center; font-weight:bold; color:#d63031; font-size:1.2rem;">
                    "قُطْبُ جَدٍ"
                </div>
                <p style="text-align:center; margin-top:5px;">(Moyen mnémotechnique)</p>
            </div>`
        },

        // DRILL 1: LETTERS
        {
            type: "quiz_theory",
            prof: "Quiz Rapide ⚡️<br>Laquelle de ces phrases rassemble les lettres du Qalqala ?",
            opts: [{ t: "يَرْمَلُونَ", good: false }, { t: "قُطْبُ جَدٍ", good: true }],
            exp: "Exactement ! Qutb Jad (ق ط ب ج د)."
        },
        {
            type: "quiz_theory",
            prof: "La lettre **ك** (Kaf) fait-elle partie du Qalqala ?",
            opts: [{ t: "Oui, comme le **ق**", good: false }, { t: "Non, jamais", good: true }],
            exp: "Le Kaf ne rebondit jamais, il a du Hams (souffle) mais pas de Qalqala."
        },

        {
            type: "lesson",
            prof: "<strong>Condition N°2 :</strong> Le Soukoun.<br>C'est l'absence de mouvement qui oblige la lettre à rebondir.",
            html: `
            <div class="concept-card">
                <h3>Condition : Blocage (Soukoun)</h3>
                <div style="display:flex; flex-direction:column; gap:20px; margin-top:15px;">
                    <div style="display:flex; align-items:center; gap:15px; background:#fff5f5; border:1px solid #ff7675; border-radius:10px; padding:15px;">
                        <div class="ar-big" style="color:#c0392b; font-size:2rem; width:50px; text-align:center;">قَ</div>
                        <div style="flex:1;">
                            <div style="font-weight:bold; color:#c0392b; margin-bottom:5px;">AVEC VOYELLE (Harakat)</div>
                            <div style="font-size:0.9rem; color:#333;">Exemple: <strong>خَلَقَ</strong> (Khalaqa)</div>
                            <div style="font-size:0.8rem; color:#d63031; margin-top:5px;">❌ Le son sort. <strong>PAS DE QALQALA</strong>.</div>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:15px; background:#f0fdf4; border:2px solid #00b894; border-radius:10px; padding:15px;">
                        <div class="ar-big" style="color:#00b894; font-size:2rem; width:50px; text-align:center;">قْ</div>
                        <div style="flex:1;">
                            <div style="font-weight:bold; color:#008f72; margin-bottom:5px;">AVEC SOUKOUN</div>
                            <div style="font-size:0.9rem; color:#333;">Exemple: <strong>يَقْتُلُونَ</strong> (Yaq...)</div>
                            <div style="font-size:0.8rem; color:#008f72; margin-top:5px;">✅ Le son est bloqué. <strong>ON APPLIQUE !</strong></div>
                        </div>
                    </div>
                </div>
            </div>`
        },

        // DRILL 2: CONDITIONS
        {
            type: "quiz_theory",
            prof: "Quiz Rapide ⚡️<br>Dans le mot **قَالَ**, le **ق** a une Fatha. Je fais le Qalqala ?",
            opts: [{ t: "Oui, car c'est **ق**", good: false }, { t: "Non, car il n'y a pas de Soukoun", good: true }],
            exp: "Bravo. Pas de Soukoun = Pas de Qalqala."
        },

        {
            type: "lesson",
            prof: "Voici comment le son change pour chaque lettre. Écoute bien la différence entre le milieu et la fin.",
            html: `
            <div class="concept-card">
                <h3>Exemples par Lettre</h3>
                <div style="display:grid; grid-template-columns:1fr; gap:10px;">
                    
                    <!-- QAF -->
                    <div class="audio-row-item">
                        <div class="ar-xs" style="color:#0984e3;">ق</div>
                        <div style="flex:1;">
                            <div class="ar-word">يَقْتُلُونَ</div>
                            <div style="font-size:0.7rem; color:#666;">Milieu (Yaq-tuluna)</div>
                        </div>
                        <div style="flex:1;">
                            <div class="ar-word">خَلَقَ</div>
                            <div style="font-size:0.7rem; color:#666;">Fin (Khalaq)</div>
                        </div>
                        <button class="mini-play" onclick="playAudio('2-Qaf', 0, 0, 'ex_q')">▶</button>
                    </div>

                    <!-- TA -->
                    <div class="audio-row-item">
                        <div class="ar-xs" style="color:#0984e3;">ط</div>
                        <div style="flex:1;">
                            <div class="ar-word">يَطْمَعُ</div>
                            <div style="font-size:0.7rem; color:#666;">Milieu (Yat-ma'u)</div>
                        </div>
                        <div style="flex:1;">
                            <div class="ar-word">مُحِيطٌ</div>
                            <div style="font-size:0.7rem; color:#666;">Fin (Muheet)</div>
                        </div>
                        <button class="mini-play" onclick="playAudio('2-Ta', 0, 0, 'ex_t')">▶</button>
                    </div>

                    <!-- BA -->
                    <div class="audio-row-item">
                        <div class="ar-xs" style="color:#0984e3;">ب</div>
                        <div style="flex:1;">
                            <div class="ar-word">يُبْصِرُونَ</div>
                            <div style="font-size:0.7rem; color:#666;">Milieu (Yub-sirun)</div>
                        </div>
                        <div style="flex:1;">
                            <div class="ar-word">كَسَبَ</div>
                            <div style="font-size:0.7rem; color:#666;">Fin (Kasab)</div>
                        </div>
                        <button class="mini-play" onclick="playAudio('2-Ba', 0, 0, 'ex_b')">▶</button>
                    </div>

                    <!-- JIM -->
                    <div class="audio-row-item">
                        <div class="ar-xs" style="color:#0984e3;">ج</div>
                        <div style="flex:1;">
                            <div class="ar-word">يَجْعَلُونَ</div>
                            <div style="font-size:0.7rem; color:#666;">Milieu (Yaj-'alun)</div>
                        </div>
                        <div style="flex:1;">
                            <div class="ar-word">ٱلْبُرُوجِ</div>
                            <div style="font-size:0.7rem; color:#666;">Fin (Al-Buruj)</div>
                        </div>
                        <button class="mini-play" onclick="playAudio('2-Jim', 0, 0, 'ex_j')">▶</button>
                    </div>

                    <!-- DAL -->
                    <div class="audio-row-item">
                        <div class="ar-xs" style="color:#0984e3;">د</div>
                        <div style="flex:1;">
                            <div class="ar-word">يَدْخُلُونَ</div>
                            <div style="font-size:0.7rem; color:#666;">Milieu (Yad-khulun)</div>
                        </div>
                        <div style="flex:1;">
                            <div class="ar-word">أَحَدٌ</div>
                            <div style="font-size:0.7rem; color:#666;">Fin (Ahad)</div>
                        </div>
                        <button class="mini-play" onclick="playAudio('2-Dal', 0, 0, 'ex_d')">▶</button>
                    </div>

                </div>
            </div>`
        },

        // 3 LEVELS
        {
            type: "lesson",
            prof: "Il existe <strong>3 Niveaux</strong> d'intensité pour le Qalqala selon la position du mot.",
            html: `
            <div class="concept-card">
                <h3>Les 3 Degrés (Maratib)</h3>
                
                <div style="border-left:4px solid #fab1a0; padding-left:10px; margin-bottom:15px;">
                    <strong style="color:#d63031;">1. Sughra (Petit/Milieu)</strong><br>
                    Au milieu d'un mot ou d'une phrase.<br>
                    <span class="ar-word">يَقْتُلُونَ</span><br>
                    <em>Le rebond est rapide et fluide.</em>
                </div>

                <div style="border-left:4px solid #ff7675; padding-left:10px; margin-bottom:15px;">
                    <strong style="color:#d63031;">2. Kubra (Moyen/Fin)</strong><br>
                    À l'arrêt sur la lettre.<br>
                    <span class="ar-word">الْفَلَقِ</span> ➝ <span class="ar-word">الْفَلَقْ</span><br>
                    <em>Le rebond est clair et fort.</em>
                </div>

                <div style="border-left:4px solid #c0392b; padding-left:10px;">
                    <strong style="color:#c0392b;">3. Akbar (Grand/Shadda)</strong><br>
                    À l'arrêt sur une lettre AVEC SHADDA.<br>
                    <span class="ar-word">وَتَبَّ</span> ➝ <span class="ar-word">وَتَبْ</span><br>
                    <em>On marque une pause avant d'exploser le rebond.</em>
                </div>
            </div>`
        },

        // STOPPING RULE
        {
            type: "lesson",
            prof: "<strong>Règle Importante :</strong> L'Arrêt (Al-Waqf).<br>Quand on s'arrête, la dernière voyelle meurt et devient Soukoun.",
            html: `
            <div class="concept-card">
                <h3>Le Soukoun "Accidentel"</h3>
                <p>C'est ce qui crée le Qalqala à la fin des versets.</p>
                <div style="font-size:1.5rem; text-align:center; margin-top:15px;" class="ar-word">
                    أَحَدٌ ➝ أَحَدْ
                </div>
                <div style="text-align:center; color:#666;">
                    (Ahadun) devient (Ahad)
                </div>
                <div class="tip-box">
                    Si tu t'arrêtes, tu DOIS faire le Qalqala.
                </div>
            </div>`
        },

        // DRILL 3: STOPPING
        {
            type: "quiz_theory",
            prof: "Quiz Rapide ⚡️<br>Je m'arrête sur le mot **ٱلصَّمَدُ**. Que se passe-t-il ?",
            opts: [{ t: "Je prononce le 'u'", good: false }, { t: "Le 'u' devient Soukoun -> je fais Qalqala", good: true }],
            exp: "C'est la règle de l'arrêt. La voyelle tombe, le Soukoun apparaît, le Qalqala s'active."
        },

        // VISUAL EQUATION
        {
            type: "lesson",
            prof: "En résumé, voici l'équation du Qalqala.",
            html: `
            <div class="concept-card">
                <h3>L'Équation Magique ✨</h3>
                <div style="display:flex; align-items:center; justify-content:center; gap:10px; background:#f1f2f6; padding:15px; border-radius:30px; margin-top:10px;">
                    <div style="text-align:center;">
                        <div class="ar-big" style="color:#2d3436; font-size:1.5rem;">[ ق ط ب ج د ]</div>
                        <div style="font-size:0.7rem; font-weight:bold;">LETTRES</div>
                    </div>
                    <div style="font-size:1.5rem; color:#0984e3;">+</div>
                    <div style="text-align:center;">
                        <div class="ar-big" style="color:#2d3436; font-size:1.5rem;">[ ْ ]</div>
                        <div style="font-size:0.7rem; font-weight:bold;">SOUKOUN</div>
                    </div>
                    <div style="font-size:1.5rem; color:#0984e3;">=</div>
                    <div style="font-size:2rem;">🔊</div>
                </div>
            </div>`
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Vocal</strong><br>C'est le moment de pratiquer ! Répète après le modèle."
        },
        {
            type: "workshop",
            prof: "Entraîne-toi sur ces mots. N'oublie pas : Lâche la pression d'un coup !",
            examples: [
                { type: "Milieu (Qaf)", ar: "يَقْتُلُونَ", url: "004092", start: 8, end: 10, id: "q1" },
                { type: "Fin (Qaf)", ar: "خَلَقَ", url: "113002", start: 0, end: 2, id: "q2" },
                { type: "Milieu (Ta)", ar: "يَطْمَعُ", url: "070038", start: 0, end: 2, id: "t1" },
                { type: "Fin (Ta)", ar: "مُحِيطٌ", url: "085020", start: 3, end: 5, id: "t2" },
                { type: "Milieu (Ba)", ar: "حَبْلٌ", url: "111005", start: 2, end: 4, id: "b1" },
                { type: "Fin (Ba)", ar: "وَقَبَ", url: "113003", start: 2, end: 4, id: "b2" },
                { type: "Milieu (Jim)", ar: "وَٱلْفَجْرِ", url: "089001", start: 0, end: 2, id: "j1" },
                { type: "Fin (Jim)", ar: "ٱلْبُرُوجِ", url: "085001", start: 3, end: 5, id: "j2" },
                { type: "Milieu (Dal)", ar: "يَدْخُلُونَ", url: "110002", start: 2, end: 4, id: "d1" },
                { type: "Fin (Dal)", ar: "أَحَدٌ", url: "112001", start: 5, end: 7, id: "d2" }
            ]
        },

        // IMMERSION
        {
            type: "intro",
            prof: "📖 <strong>Immersion Totale</strong><br>Sourates Al-Falaq (113) et Al-Ikhlas (112)."
        },
        {
            type: "immersion",
            prof: "Surah Al-Ikhlas (112)",
            instruction: "Trouve les lettres de Qalqala (Attention aux arrêts !)",
            surah: 112,
            words: [
                { t: "قُلْ", ok: false }, { t: "هُوَ", ok: false }, { t: "ٱللَّهُ", ok: false }, { t: "أَحَدٌ", ok: true, noun: "دْ", letter: "Dal (Akbar)" }, { t: "١", endVerse: true },
                { t: "ٱللَّهُ", ok: false }, { t: "ٱلصَّمَدُ", ok: true, noun: "دْ", letter: "Dal (Akbar)" }, { t: "٢", endVerse: true },
                { t: "لَمْ", ok: false }, { t: "يَلِدْ", ok: true, noun: "دْ", letter: "Dal (Sughra)" }, { t: "وَلَمْ", ok: false }, { t: "يُولَدْ", ok: true, noun: "دْ", letter: "Dal (Akbar)" }, { t: "٣", endVerse: true },
                { t: "وَلَمْ", ok: false }, { t: "يَكُن", ok: false }, { t: "لَّهُۥ", ok: false }, { t: "كُفُوًا", ok: false }, { t: "أَحَدٌۢ", ok: true, noun: "دْ", letter: "Dal (Akbar)" }, { t: "٤", endVerse: true }
                // Using Akbar for End of Verse stops generally, Sughra for middle
            ]
        },
        {
            type: "immersion",
            prof: "Surah Al-Falaq (113)",
            instruction: "Les Qalqala sont à la fin des versets. Trouve-les.",
            surah: 113,
            words: [
                { t: "قُلْ", ok: false }, { t: "أَعُوذُ", ok: false }, { t: "بِرَبِّ", ok: false }, { t: "ٱلْفَلَقِ", ok: true, noun: "قْ", letter: "Qaf" }, { t: "١", endVerse: true },
                { t: "مِن", ok: false }, { t: "شَرِّ", ok: false }, { t: "مَا", ok: false }, { t: "خَلَقَ", ok: true, noun: "قْ", letter: "Qaf" }, { t: "٢", endVerse: true },
                { t: "وَمِن", ok: false }, { t: "شَرِّ", ok: false }, { t: "غَاسِقٍ", ok: false }, { t: "إِذَا", ok: false }, { t: "وَقَبَ", ok: true, noun: "بْ", letter: "Ba" }, { t: "٣", endVerse: true },
                { t: "وَمِن", ok: false }, { t: "شَرِّ", ok: false }, { t: "ٱلنَّفَّٰثَٰتِ", ok: false }, { t: "فِي", ok: false }, { t: "ٱلْعُقَدِ", ok: true, noun: "دْ", letter: "Dal" }, { t: "٤", endVerse: true },
                { t: "وَمِن", ok: false }, { t: "شَرِّ", ok: false }, { t: "حَاسِدٍ", ok: false }, { t: "إِذَا", ok: false }, { t: "حَسَدَ", ok: true, noun: "دْ", letter: "Dal" }, { t: "٥", endVerse: true }
            ]
        },

        // EXAMEN
        { type: "intro", prof: "🧐 <strong>Examen Final</strong><br>Vérifions tes connaissances." },

        {
            type: "quiz_theory",
            prof: "1/9 - Lequel de ces groupes contient les lettres de Qalqala ?",
            opts: [{ t: "ن م ل ي", good: false }, { t: "ق ط ب ج د", good: true }, { t: "ء هـ ع ح", good: false }],
            exp: "C'est Qutb Jad."
        },
        {
            type: "quiz_theory",
            prof: "2/9 - Dans **خَلَقَ**, le **ق** a une Fatha. Qalqala ?",
            opts: [{ t: "OUI", good: false }, { t: "NON", good: true }],
            exp: "Non, car il a une voyelle."
        },
        {
            type: "quiz_theory",
            prof: "3/9 - Dans **يَقْتُلُونَ**, le **ق** a un Soukoun. Qalqala ?",
            opts: [{ t: "OUI", good: true }, { t: "NON", good: false }],
            exp: "Oui, Soukoun = Qalqala."
        },
        {
            type: "quiz_theory",
            prof: "4/9 - Je m'arrête sur un mot. Que devient la dernière voyelle ?",
            opts: [{ t: "Elle reste", good: false }, { t: "Elle devient Soukoun", good: true }],
            exp: "C'est la règle d'Arrêt : tout devient Soukoun."
        },
        {
            type: "quiz_theory",
            prof: "5/9 - Donc si je m'arrête sur **أَحَدٌ**, je prononce :",
            opts: [{ t: "أَحَدٌ (Ahadun)", good: false }, { t: "أَحَدْ (Ahad)", good: true }],
            exp: "Exact. Le Dal devient Sakina."
        },
        {
            type: "quiz_theory",
            prof: "6/9 - Lequel est une Qalqala Sughra (Petite) ?",
            opts: [{ t: "ٱلْفَلَقِ (Fin)", good: false }, { t: "يَدْخُلُونَ (Milieu)", good: true }],
            exp: "Au milieu, c'est Sughra."
        },
        {
            type: "quiz_theory",
            prof: "7/9 - Lequel est une Qalqala Akbar (La plus grande) ?",
            opts: [{ t: "أَحَدٌ (Fin simple)", good: false }, { t: "وَتَبَّ (Fin + Shadda)", good: true }],
            exp: "La Shadda indique le niveau Akbar."
        },
        {
            type: "quiz_theory",
            prof: "8/9 - La lettre **ت** fait-elle partie de Qutb Jad ?",
            opts: [{ t: "OUI", good: false }, { t: "NON, c'est le **ط**", good: true }],
            exp: "Non, c'est le Ta emphatique (ط)."
        },
        {
            type: "quiz_theory",
            prof: "9/9 - Le mot **ٱقْرَأْ** (Lis) contient un Qalqala sur :",
            opts: [{ t: "Le Hamza final", good: false }, { t: "Le **ق**", good: true }],
            exp: "Iq-ra. Le Qaf a un Soukoun."
        }
    ]
};
