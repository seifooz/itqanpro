const HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#6c5ce7; color:white; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        💡 Aide : L'Algorithme
    </button>
    <div style="display:none; background:#fef9e7; border:1px solid #f1c40f; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>1.</strong> Je vois <strong>Noun (نْ) / Tanween (ــً)</strong> 🚨<br>
        <strong>2.</strong> Je regarde <strong>la lettre d'après</strong> 👀<br>
        <strong>3.</strong> C'est une <strong>Lettre de Gorge</strong> ? (ء هـ ع ح غ خ)<br>
        ✅ <strong>OUI = IZHAR</strong> (Son Clair)
    </div>
</div>`;

const IZHAR_DATA = {
    title: "IZHAR MASTERCLASS",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---

        // 1. SCOPE : À QUI ÇA S'ADRESSE ?
        {
            type: "lesson",
            prof: "Introduction.<br>Sur quoi porte cette règle ?",
            html: `
            <div class="concept-card">
                <h3>Champ d'Application</h3>
                <p style="font-size:1rem; color:#2c3e50; margin-bottom:20px;">
                    La règle de l'Izhar s'applique spécifiquement à deux choses :
                </p>
                
                <div style="display:flex; justify-content:center; gap:20px; text-align:center;">
                    <div style="background:#e3f2fd; padding:15px 25px; border-radius:10px; border:1px solid #bbdefb;">
                        <div class="ar-big" style="color:#2196f3;">نْ</div>
                        <div style="font-weight:bold; font-size:0.9rem; margin-top:5px;">Le Noun Sakina</div>
                    </div>
                    <div style="background:#fff3e0; padding:15px 25px; border-radius:10px; border:1px solid #ffe0b2;">
                        <div class="ar-big" style="color:#ff9800;">ــً</div>
                        <div style="font-weight:bold; font-size:0.9rem; margin-top:5px;">Le Tanween</div>
                    </div>
                </div>
                <div style="margin-top:20px; font-size:0.9rem; color:#555;">
                    À chaque fois que vous rencontrez l'un de ces deux signes, vous devez vérifier s'il faut appliquer l'Izhar.
                </div>
            </div>`
        },

        // 2. DÉFINITION (LINGUISTIQUE & TECHNIQUE)
        {
            type: "lesson",
            prof: "Définition de l'Izhar.<br>Sens Linguistique et Technique.",
            html: `
            <div class="concept-card">
                
                <!-- SENS LINGUISTIQUE -->
                <div style="margin-bottom:25px;">
                    <h4 style="color:#6c5ce7; margin-bottom:10px;">1. Sens Linguistique (La Langue)</h4>
                    <div style="font-size:1.1rem; font-weight:bold; color:#2d3436; margin-bottom:5px;">"Al-Bayan" (البيان)</div>
                    <p style="font-size:0.95rem; color:#666; margin:0;">
                        Cela signifie : <strong>La Clarté</strong> (quelque chose de clair et d'évident).
                    </p>
                </div>

                <!-- SENS TECHNIQUE -->
                <div style="background:#f9fbe7; padding:20px; border-radius:12px; border-left:5px solid #8bc34a; text-align:left;">
                    <h4 style="color:#2e7d32; margin-top:0; margin-bottom:10px;">2. Sens Technique (Tajweed)</h4>
                    <p style="font-size:1.1rem; line-height:1.6; color:#2c3e50; font-weight:600;">
                        "C'est sortir la lettre de son Makhraj sans faire de Ghunna."
                    </p>
                    <p style="font-size:0.85rem; color:#555; margin-top:10px; font-style:italic;">
                        Note : On prononce le 'N' distinctement, sans le faire vibrer dans le nez plus que nécessaire.
                    </p>
                </div>

                <h3 style="margin-top:25px;">Écoutez la différence (Comparaison) :</h3>
                
                <div style="display:flex; flex-direction:column; gap:15px;">
                    
                    <!-- Ex 1 : Noun Sakina -->
                    <div style="background:#fff; border:1px solid #eee; padding:15px; border-radius:10px;">
                        <div style="font-size:0.9rem; color:#666; margin-bottom:5px;">Exemple 1 : Noun Sakina (نْ)</div>
                        <div class="ar-med" style="font-size:1.6rem; margin-bottom:10px;">مَنْ ءَامَنَ</div>
                        
                        <div style="display:flex; gap:10px;">
                            <div class="btn-audio btn-listen" onclick="playAudio('izhar_man_amana', 0, 100, 'ex-def-1-ok')" style="flex:1; background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ✅</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#2e7d32;">Correct</div>
                                <div style="font-size:0.65rem; color:#555;">(Clair)</div>
                            </div>
                            <div class="btn-audio btn-listen" onclick="playAudio('izhar_man_amana_wrong', 0, 100, 'ex-def-1-ko')" style="flex:1; background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ❌</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#c62828;">Incorrect</div>
                                <div style="font-size:0.65rem; color:#555;">(Ghunna ajoutée)</div>
                            </div>
                        </div>
                    </div>

                    <!-- Ex 2 : Tanween -->
                    <div style="background:#fff; border:1px solid #eee; padding:15px; border-radius:10px;">
                        <div style="font-size:0.9rem; color:#666; margin-bottom:5px;">Exemple 2 : Tanween (ــً)</div>
                        <div class="ar-med" style="font-size:1.6rem; margin-bottom:10px;">عَلِيمٌ حَكِيمٌ</div>
                        
                        <div style="display:flex; gap:10px;">
                            <div class="btn-audio btn-listen" onclick="playAudio('izhar_alimun_hakim', 0, 100, 'ex-def-2-ok')" style="flex:1; background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ✅</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#2e7d32;">Correct</div>
                                <div style="font-size:0.65rem; color:#555;">(Clair)</div>
                            </div>
                            <div class="btn-audio btn-listen" onclick="playAudio('izhar_alimun_hakim_wrong', 0, 100, 'ex-def-2-ko')" style="flex:1; background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ❌</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#c62828;">Incorrect</div>
                                <div style="font-size:0.65rem; color:#555;">(Ghunna ajoutée)</div>
                            </div>
                        </div>
                    </div>

                    <!-- Ex 3 : Dans 1 seul mot (Spécial) -->
                    <div style="background:#fff; border:1px solid #eee; padding:15px; border-radius:10px;">
                        <div style="font-size:0.9rem; color:#666; margin-bottom:5px;">Exemple 3 : Dans 1 seul mot (Exceptionnel)</div>
                        <div class="ar-med" style="font-size:1.6rem; margin-bottom:10px;">أَنْعَمْتَ</div>
                        
                        <div style="display:flex; gap:10px;">
                            <div class="btn-audio btn-listen" onclick="playAudio('izhar_anamta', 0, 100, 'ex-def-3-ok')" style="flex:1; background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ✅</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#2e7d32;">Correct</div>
                                <div style="font-size:0.65rem; color:#555;">(Clair)</div>
                            </div>
                            <div class="btn-audio btn-listen" onclick="playAudio('izhar_anamta_wrong', 0, 100, 'ex-def-3-ko')" style="flex:1; background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ❌</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#c62828;">Incorrect</div>
                                <div style="font-size:0.65rem; color:#555;">(Ghunna ajoutée)</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`
        },

        {
            type: "lesson",
            prof: "La Condition Unique.<br>Quand applique-t-on cette clarté ?",
            html: `<div class="concept-card">
                <div style="background:#ffebee; padding:15px; border-radius:10px; border-left:5px solid #d63031; margin-bottom:20px;">
                    <h4 style="margin:0; color:#d63031;">La Règle :</h4>
                    <p style="font-weight:bold; font-size:1.1rem; margin-top:5px;">
                        Si le Noun Sakina ou le Tanween est suivi d'une<br>
                        <span style="color:#d63031; text-decoration:underline;">Lettre de Gorge</span>.
                    </p>
                </div>
                
                <div style="color:#555; font-size:0.9rem; margin-bottom:10px;">Il y a 6 Lettres de Gorge (Al-Halq) :</div>
                <div class="letters-grid">
                    <div class="l-card"><div class="l-ar">ء</div></div>
                    <div class="l-card"><div class="l-ar">هـ</div></div>
                    <div class="l-card"><div class="l-ar">ع</div></div>
                    <div class="l-card"><div class="l-ar">ح</div></div>
                    <div class="l-card"><div class="l-ar">غ</div></div>
                    <div class="l-card"><div class="l-ar">خ</div></div>
                </div>
            </div>`
        },

        // Exemples Visuels
        {
            type: "lesson",
            prof: "Exemple 1 : Noun Sakina + Hamza.<br>Observez et écoutez.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">مَنْ ءَامَنَ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ء</div><div class="mz-label green">Gorge</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div>
                ${HELP_HTML}
                <div class="ex-logic">Le <strong>Noun Sakina (نْ)</strong> est suivi du <strong>Hamza (ء)</strong> (Lettre de Gorge).<br>Donc : <strong>Izhar</strong> (On prononce clairement).</div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2 : Tanween + Ha.<br>Même logique.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">عَلِيمٌ حَكِيمٌ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ح</div><div class="mz-label green">Gorge</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">ــٌ</div><div class="mz-label blue">Tanween</div></div></div></div>
                ${HELP_HTML}
                <div class="ex-logic">Le Tanween est suivi du <strong>Ha (ح)</strong> (Lettre de Gorge).<br>Donc : <strong>Izhar</strong>.</div>
            </div>`
        },
        // Quiz Théorie
        {
            type: "quiz_theory",
            prof: "Vérification.<br>Quel signe déclenche la recherche de la règle ?",
            opts: [
                { t: "La voyelle Fatha", good: false },
                { t: "Le Noun Sakina ou le Tanween", good: true }
            ],
            exp: "Exactement. C'est la présence d'un Noun Sakina ou d'un Tanween qui nous indique qu'il y a une règle à appliquer."
        },
        // Algorithme Global
        {
            type: "lesson",
            prof: "L'Algorithme Mental.<br>Voici comment réfléchir pendant la lecture.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je vois un <strong>Noun Sakina</strong> ou <strong>Tanween</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>Je regarde la <strong>lettre suivante</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">3</div><div>C'est une lettre de <strong>Gorge</strong> ?</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">OUI ➡ <strong>IZHAR</strong> (Je prononce le N clair)</div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Entraînez-vous à prononcer." },

        // WORKSHOP
        { type: "workshop", prof: `Lettre 1 : <strong>Hamza (ء)</strong>. ${HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مَنْ ءَامَنَ", url: "izhar_man_aamana", hint: "Expl: Noun Sakina + Hamza (Gorge) -> Izhar" }, { type: "Tanween", ar: "كُلٌّ ءَامَنَ", url: "izhar_kullun_aamana", hint: "Expl: Tanween + Hamza (Gorge) -> Izhar" }] },
        { type: "workshop", prof: `Lettre 2 : <strong>Ha (هـ)</strong>. ${HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مِنْ هَادٍ", url: "izhar_min_hadin", hint: "Expl: Noun Sakina + Ha (Gorge) -> Izhar" }, { type: "Tanween", ar: "جُرُفٍ هَارٍ", url: "izhar_jurufin_harin", hint: "Expl: Tanween + Ha (Gorge) -> Izhar" }] },
        { type: "workshop", prof: `Lettre 3 : <strong>'Ain (ع)</strong>. ${HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مِنْ عِلْمٍ", url: "izhar_min_ilmin", hint: "Expl: Noun Sakina + 'Ain (Gorge) -> Izhar" }, { type: "Tanween", ar: "سَمِيعٌ عَلِيمٌ", url: "izhar_samiun_alim", hint: "Expl: Tanween + 'Ain (Gorge) -> Izhar" }] },
        { type: "workshop", prof: `Lettre 4 : <strong>Ha (ح)</strong>. ${HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "وَٱنْحَرْ", url: "izhar_wanhar", hint: "Expl: Noun Sakina + Ha (Gorge) -> Izhar" }, { type: "Tanween", ar: "عَلِيمٌ حَكِيمٌ", url: "izhar_alimun_hakim", hint: "Expl: Tanween + Ha (Gorge) -> Izhar" }] },
        { type: "workshop", prof: `Lettre 5 : <strong>Ghain (غ)</strong>. ${HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مِنْ غِلٍّ", url: "izhar_min_ghillin", hint: "Expl: Noun Sakina + Ghain (Gorge) -> Izhar" }, { type: "Tanween", ar: "قَوْلًا غَيْرَ", url: "izhar_qawlan_ghayra", hint: "Expl: Tanween + Ghain (Gorge) -> Izhar" }] },
        { type: "workshop", prof: `Lettre 6 : <strong>Kha (خ)</strong>. ${HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مِنْ خَوْفٍ", url: "izhar_min_khawfin", hint: "Expl: Noun Sakina + Kha (Gorge) -> Izhar" }, { type: "Tanween", ar: "يَوْمَئِذٍ خَٰشِعَةٌ", url: "izhar_yawmaidhin_khashiah", hint: "Expl: Tanween + Kha (Gorge) -> Izhar" }] },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>Identifiez les règles dans le texte." },

        { type: "exam_quiz", prof: `Question 1/12 ${HELP_HTML}`, opts: [{ ar: "مِن دُونِ", good: false }, { ar: "مَنْ أَعْطَىٰ", good: true, reason: "Izhar : Noun + Hamza (Gorge)" }, { ar: "مِن بَعْدِ", good: false }], noun: "Noun Sakina", letter: "Hamza (ء)" },
        { type: "exam_quiz", prof: `Question 2/12 ${HELP_HTML}`, opts: [{ ar: "كُلٌّ ءَامَنَ", good: true, reason: "Izhar : Tanween + Hamza (Gorge)" }, { ar: "غَفُورٌ رَّحِيمٌ", good: false }, { ar: "شَيْءٍ قَدِيرٌ", good: false }], noun: "Tanween", letter: "Hamza (ء)" },
        { type: "exam_quiz", prof: `Question 3/12 ${HELP_HTML}`, opts: [{ ar: "أَنفُسَهُمْ", good: false }, { ar: "مِن وَالٍ", good: false }, { ar: "مِنْ هَادٍ", good: true, reason: "Izhar : Noun + Ha (Gorge)" }], noun: "Noun Sakina", letter: "Ha (هـ)" },
        { type: "exam_quiz", prof: `Question 4/12 ${HELP_HTML}`, opts: [{ ar: "خَيْرًا يَرَهُ", good: false }, { ar: "جُرُفٍ هَارٍ", good: true, reason: "Izhar : Tanween + Ha (Gorge)" }, { ar: "غَفُورًا رَّحِيمًا", good: false }], noun: "Tanween", letter: "Ha (هـ)" },
        { type: "exam_quiz", prof: `Question 5/12 ${HELP_HTML}`, opts: [{ ar: "أَنعَمْتَ", good: true, reason: "Izhar : Noun + 'Ain (Gorge)" }, { ar: "يَنقَلِبُ", good: false }, { ar: "يَنبَغِي", good: false }], noun: "Noun Sakina", letter: "'Ain (ع)" },
        { type: "exam_quiz", prof: `Question 6/12 ${HELP_HTML}`, opts: [{ ar: "كُتُبٌ قَيِّمَةٌ", good: false }, { ar: "غَفُورًا رَّحِيمًا", good: false }, { ar: "سَمِيعٌ عَلِيمٌ", good: true, reason: "Izhar : Tanween + 'Ain (Gorge)" }], noun: "Tanween", letter: "'Ain (ع)" },
        { type: "exam_quiz", prof: `Question 7/12 ${HELP_HTML}`, opts: [{ ar: "مِن شَرِّ", good: false }, { ar: "وَٱنْحَرْ", good: true, reason: "Izhar : Noun + Ha (Gorge)" }, { ar: "مَن يَقُولُ", good: false }], noun: "Noun Sakina", letter: "Ha (ح)" },
        { type: "exam_quiz", prof: `Question 8/12 ${HELP_HTML}`, opts: [{ ar: "عَلِيمٌ حَكِيمٌ", good: true, reason: "Izhar : Tanween + Ha (Gorge)" }, { ar: "سَمِيعٌۢ بَصِيرٌ", good: false }, { ar: "عَمَلًا صَٰلِحًا", good: false }], noun: "Tanween", letter: "Ha (ح)" },
        { type: "exam_quiz", prof: `Question 9/12 ${HELP_HTML}`, opts: [{ ar: "مِن لَّدُنْهُ", good: false }, { ar: "أَنكَالًا", good: false }, { ar: "مِنْ غِلٍّ", good: true, reason: "Izhar : Noun + Ghain (Gorge)" }], noun: "Noun Sakina", letter: "Ghain (غ)" },
        { type: "exam_quiz", prof: `Question 10/12 ${HELP_HTML}`, opts: [{ ar: "وُجُوهٌ يَوْمَئِذٍ", good: false }, { ar: "أَجْرٌ غَيْرُ", good: true, reason: "Izhar : Tanween + Ghain (Gorge)" }, { ar: "نَارًا تَلَظَّىٰ", good: false }], noun: "Tanween", letter: "Ghain (غ)" },
        { type: "exam_quiz", prof: `Question 11/12 ${HELP_HTML}`, opts: [{ ar: "مِنْ خَوْفٍ", good: true, reason: "Izhar : Noun + Kha (Gorge)" }, { ar: "مِن طِينٍ", good: false }, { ar: "مِن مَّسَدٍ", good: false }], noun: "Noun Sakina", letter: "Kha (خ)" },
        { type: "exam_quiz", prof: `Question 12/12 ${HELP_HTML}`, opts: [{ ar: "كِرَامٍ بَرَرَةٍ", good: false }, { ar: "عَذَابٌ مُّهِينٌ", good: false }, { ar: "لَطِيفٌ خَبِيرٌ", good: true, reason: "Izhar : Tanween + Kha (Gorge)" }], noun: "Tanween", letter: "Kha (خ)" },

        // --- PARTIE 4 : IMMERSION ---
        {
            type: "intro",
            prof: "Immersion.<br>Analysez les versets."
        },
        {
            type: "immersion",
            prof: `Sourate Al-Ghashiyah (2-4) ${HELP_HTML}`,
            instruction: "Trouvez les <strong>2 cas d'Izhar</strong>.",
            totalIzhar: 2,
            words: [
                { t: "وُجُوهٌ", ok: false }, { t: "يَوْمَئِذٍ", ok: true, noun: "Tanween", letter: "Kha (خ)", endVerse: false, reason: "Izhar : Tanween + Kha" },
                { t: "خَٰشِعَةٌ", ok: true, noun: "Tanween", letter: "'Ain (ع)", endVerse: true, reason: "Izhar : Tanween + 'Ain" },
                { t: "عَامِلَةٌ", ok: false }, { t: "نَّاصِبَةٌ", ok: false, endVerse: true },
                { t: "تَصْلَىٰ", ok: false }, { t: "نَارًا", ok: true, noun: "Tanween", letter: "Ha (ح)", endVerse: false, reason: "Izhar : Tanween + Ha" },
                { t: "حَامِيَةً", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: `Sourate Al-Masad (1-3) ${HELP_HTML}`,
            instruction: "Trouvez le <strong>cas d'Izhar</strong>.",
            totalIzhar: 1,
            words: [
                { t: "تَبَّتْ", ok: false }, { t: "يَدَا", ok: false }, { t: "أَبِي", ok: false }, { t: "لَهَبٍ", ok: false }, { t: "وَتَبَّ", ok: false, endVerse: true },
                { t: "مَا", ok: false }, { t: "أَغْنَىٰ", ok: false }, { t: "عَنْهُ", ok: true, noun: "Noun Sakina", letter: "Ha (هـ)", endVerse: false, reason: "Izhar : Noun + Ha" },
                { t: "مَالُهُۥ", ok: false }, { t: "وَمَا", ok: false }, { t: "كَسَبَ", ok: false, endVerse: true },
                { t: "سَيَصْلَىٰ", ok: false }, { t: "نَارًا", ok: false }, { t: "ذَاتَ", ok: false }, { t: "لَهَبٍ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: `Sourate Quraysh (3-4) ${HELP_HTML}`,
            instruction: "Trouvez le <strong>cas d'Izhar</strong>.",
            totalIzhar: 1,
            words: [
                { t: "فَلْيَعْبُدُوا۟", ok: false }, { t: "رَبَّ", ok: false }, { t: "هَٰذَا", ok: false }, { t: "ٱلْبَيْتِ", ok: false, endVerse: true },
                { t: "ٱلَّذِي", ok: false }, { t: "أَطْعَمَهُم", ok: false }, { t: "مِّن", ok: false }, { t: "جُوعٍ", ok: false },
                { t: "وَءَامَنَهُم", ok: false },
                { t: "مِّنْ", ok: true, noun: "Noun Sakina", letter: "Kha (خ)", endVerse: false, reason: "Izhar : Noun + Kha" },
                { t: "خَوْفٍ", ok: false, endVerse: true }
            ]
        }
    ]
};
