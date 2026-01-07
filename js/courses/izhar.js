const IZHAR_DATA = {
    title: "IZHAR MASTERCLASS",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---
        {
            type: "lesson",
            prof: "Bienvenue. <br>Commençons par identifier les signes graphiques de la règle Izhar.",
            html: `<div class="concept-card"><h3>Les Signes à repérer</h3><p style="font-size:0.9rem; color:#666; margin-bottom:20px;">La règle s'applique uniquement en présence de :</p><div class="recap-grid"><div class="recap-item"><div class="ar-big">نْ</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Noun Sakina (نْ)</div></div><div class="recap-item"><div class="ar-big">ــً</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Tanween (ــً)</div></div></div></div>`
        },
        {
            type: "lesson",
            prof: "Définition de l'Izhar (Clarté).<br>Il s'agit de prononcer le Noun Sakina distinctement, sans nasalisation prolongée.",
            html: `<div class="concept-card"><h3>Caractéristiques</h3><div class="simple-list"><div class="simple-item"><span class="check-icon">OK</span><span>Son <strong>CLAIR</strong> : Le 'N' est audible.</span></div><div class="simple-item"><span class="check-icon">OK</span><span>Son <strong>SEC</strong> : Pas d'étirement du son.</span></div><div class="simple-item"><span class="check-icon bad">NON</span><span><strong>Zéro Ghunnah</strong> (Pas de nasalisation ajoutée).</span></div></div>
            <div class="def-audio-row">
                <button class="def-audio-btn" id="play-def-1" onclick="playAudio('izhar_def_noun', 0, 100, 'def-1')">🔊 Noun Sakina</button>
                <button class="def-audio-btn" id="play-def-2" onclick="playAudio('izhar_def_tanween', 0, 100, 'def-2')">🔊 Tanween</button>
            </div>
            <p style="font-size:0.8rem; margin-top:20px; color:#888;">Écoutez les exemples ci-dessus pour comprendre la clarté du son.</p></div>`
        },
        {
            type: "lesson",
            prof: "La condition d'application.<br>L'Izhar s'applique lorsque le Noun est suivi d'une <strong>Lettre de la Gorge</strong>.",
            html: `<div class="concept-card"><div style="color:#d63031; font-weight:700; margin-bottom:15px; text-transform:uppercase; font-size:0.8rem;">À mémoriser</div><div class="letters-grid"><div class="l-card"><div class="l-ar">ء</div></div><div class="l-card"><div class="l-ar">هـ</div></div><div class="l-card"><div class="l-ar">ع</div></div><div class="l-card"><div class="l-ar">ح</div></div><div class="l-card"><div class="l-ar">غ</div></div><div class="l-card"><div class="l-ar">خ</div></div></div><div class="tip-box"><div style="font-size:0.8rem; color:#555; margin-bottom:10px; font-weight:bold;">Moyen mnémotechnique :</div><div class="tip-chars"><span>ءَ</span><span>هَـ</span><span>عَ</span><span>حَ</span><span>غَ</span><span>خَ</span></div><di style="font-size:0.9rem; margin-top:10px; line-height:1.6; color:#444;">Ces 6 lettres proviennent de la gorge. Aucune action de la langue n'est requise.</di></div></div>`
        },

        // Exemples Visuels
        {
            type: "lesson",
            prof: "Exemple 1 : Noun Sakina + Hamza.<br>Observez la structure.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">مَنْ ءَامَنَ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ء</div><div class="mz-label green">Lettre</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div><div class="ex-logic">Le <strong>Noun Sakina (نْ)</strong> est suivi du <strong>Hamza (ء)</strong>.<br>C'est une lettre de gorge ➡ Règle <strong>IZHAR</strong>.<span class="ex-def">Prononciation nette du 'N', sans arrêt prolongé.</span></div></div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2 : Tanween + Ha.<br>Le principe reste identique avec le Tanween.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">عَلِيمٌ حَكِيمٌ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ح</div><div class="mz-label green">Lettre</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">ــٌ</div><div class="mz-label blue">Tanween</div></div></div></div><div class="ex-logic">Le son 'N' du <strong>Tanween</strong> rencontre le <strong>Ha (ح)</strong>.<br>C'est une lettre de gorge ➡ Règle <strong>IZHAR</strong>.<span class="ex-def">Prononciation claire de la terminaison 'un'.</span></div></div>`
        },
        {
            type: "lesson",
            prof: "Cas particulier : Dans un seul mot.<br>Le Noun et la lettre de gorge peuvent être attachés.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">أَنْعَمْتَ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ع</div><div class="mz-label green">Lettre</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div><div class="ex-logic">Le <strong>Noun Sakina</strong> est immédiatement suivi du <strong>'Ain (ع)</strong>.<br>Même règle : <strong>IZHAR</strong>.</div></div>`
        },
        // Quiz Théorie
        {
            type: "quiz_theory",
            prof: "Vérification des connaissances.<br>Quel élément détermine l'application de la règle ?",
            opts: [
                { t: "La lettre située AVANT le Noun", good: false },
                { t: "La lettre située APRÈS le Noun", good: true }
            ],
            exp: "Correct. C'est toujours la lettre qui SUIT le Noun Sakina (ou Tanween) qui détermine la règle à appliquer."
        },
        // Equation
        {
            type: "lesson",
            prof: "Résumé de la règle.<br>Formule à retenir.",
            html: `<div class="eq-container"><div class="eq-card"><div style="font-size:0.9rem; color:#888; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;">Formule Izhar</div><div class="eq-formula"><div class="eq-tag tag-blue">Noun / Tanween</div><div class="eq-plus">+</div><div class="eq-tag tag-green">Lettre Gorge</div><div class="eq-plus">=</div><div class="res-text">IZHAR</div></div><div style="font-size:0.9rem; color:#555; margin-top:15px;">Si le Noun est <strong>SUIVI</strong> d'une lettre de gorge, on clarifie le son.</div></div></div>`
        },
        // Algorithme
        {
            type: "lesson",
            prof: "Méthodologie de lecture.<br>Schéma logique à appliquer durant la récitation.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je repère un <strong>Noun Sakina</strong> ou un <strong>Tanween</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>J'identifie la lettre qui suit immédiatement.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">3</div><div>Est-ce une lettre de Gorge ? (ء هـ ع ح غ خ)</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">OUI ➡ J'applique l'IZHAR</div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Écoutez les exemples, enregistrez votre prononciation et comparez." },

        // WORKSHOP
        { type: "workshop", prof: "Lettre 1 : <strong>Hamza (ء)</strong>.<br>Point d'articulation : Fond de la gorge.", examples: [{ type: "Noun Sakina", ar: "مَنْ ءَامَنَ", url: "izhar_man_aamana", hint: "Noun Sakina + Hamza" }, { type: "Tanween", ar: "كُلٌّ ءَامَنَ", url: "izhar_kullun_aamana", hint: "Tanween + Hamza" }] },
        { type: "workshop", prof: "Lettre 2 : <strong>Ha (هـ)</strong>.<br>Point d'articulation : Fond de la gorge.", examples: [{ type: "Noun Sakina", ar: "مِنْ هَادٍ", url: "izhar_min_hadin", hint: "Noun Sakina + Ha" }, { type: "Tanween", ar: "جُرُفٍ هَارٍ", url: "izhar_jurufin_harin", hint: "Tanween + Ha" }] },
        { type: "workshop", prof: "Lettre 3 : <strong>'Ain (ع)</strong>.<br>Point d'articulation : Milieu de la gorge.", examples: [{ type: "Noun Sakina", ar: "مِنْ عِلْمٍ", url: "izhar_min_ilmin", hint: "Noun Sakina + 'Ain" }, { type: "Tanween", ar: "سَمِيعٌ عَلِيمٌ", url: "izhar_samiun_alim", hint: "Tanween + 'Ain" }] },
        { type: "workshop", prof: "Lettre 4 : <strong>Ha (ح)</strong>.<br>Point d'articulation : Milieu de la gorge.", examples: [{ type: "Noun Sakina", ar: "وَٱنْحَرْ", url: "izhar_wanhar", hint: "Noun Sakina + Ha" }, { type: "Tanween", ar: "عَلِيمٌ حَكِيمٌ", url: "izhar_alimun_hakim", hint: "Tanween + Ha" }] },
        { type: "workshop", prof: "Lettre 5 : <strong>Ghain (غ)</strong>.<br>Point d'articulation : Haut de la gorge.", examples: [{ type: "Noun Sakina", ar: "مِنْ غِلٍّ", url: "izhar_min_ghillin", hint: "Noun Sakina + Ghain" }, { type: "Tanween", ar: "قَوْلًا غَيْرَ", url: "izhar_qawlan_ghayra", hint: "Tanween + Ghain" }] },
        { type: "workshop", prof: "Lettre 6 : <strong>Kha (خ)</strong>.<br>Point d'articulation : Haut de la gorge.", examples: [{ type: "Noun Sakina", ar: "مِنْ خَوْفٍ", url: "izhar_min_khawfin", hint: "Noun Sakina + Kha" }, { type: "Tanween", ar: "يَوْمَئِذٍ خَٰشِعَةٌ", url: "izhar_yawmaidhin_khashiah", hint: "Tanween + Kha" }] },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>12 questions pour valider la compétence." },
        { type: "exam_quiz", prof: "Question 1/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "مِن دُونِ", good: false }, { ar: "مَنْ أَعْطَىٰ", good: true }, { ar: "مِن بَعْدِ", good: false }], noun: "Noun Sakina", letter: "Hamza (ء)" },
        { type: "exam_quiz", prof: "Question 2/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "كُلٌّ ءَامَنَ", good: true }, { ar: "غَفُورٌ رَّحِيمٌ", good: false }, { ar: "شَيْءٍ قَدِيرٌ", good: false }], noun: "Tanween", letter: "Hamza (ء)" },
        { type: "exam_quiz", prof: "Question 3/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "أَنفُسَهُمْ", good: false }, { ar: "مِن وَالٍ", good: false }, { ar: "مِنْ هَادٍ", good: true }], noun: "Noun Sakina", letter: "Ha (هـ)" },
        { type: "exam_quiz", prof: "Question 4/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "خَيْرًا يَرَهُ", good: false }, { ar: "جُرُفٍ هَارٍ", good: true }, { ar: "قَوْمًا لُّوطًا", good: false }], noun: "Tanween", letter: "Ha (هـ)" },
        { type: "exam_quiz", prof: "Question 5/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "أَنعَمْتَ", good: true }, { ar: "يَنقَلِبُ", good: false }, { ar: "يَنبَغِي", good: false }], noun: "Noun Sakina", letter: "'Ain (ع)" },
        { type: "exam_quiz", prof: "Question 6/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "كُتُبٌ قَيِّمَةٌ", good: false }, { ar: "غَفُورًا رَّحِيمًا", good: false }, { ar: "سَمِيعٌ عَلِيمٌ", good: true }], noun: "Tanween", letter: "'Ain (ع)" },
        { type: "exam_quiz", prof: "Question 7/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "مِن شَرِّ", good: false }, { ar: "وَٱنْحَرْ", good: true }, { ar: "مَن يَقُولُ", good: false }], noun: "Noun Sakina", letter: "Ha (ح)" },
        { type: "exam_quiz", prof: "Question 8/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "عَلِيمٌ حَكِيمٌ", good: true }, { ar: "سَمِيعٌۢ بَصِيرٌ", good: false }, { ar: "عَمَلًا صَٰلِحًا", good: false }], noun: "Tanween", letter: "Ha (ح)" },
        { type: "exam_quiz", prof: "Question 9/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "مِن لَّدُنْهُ", good: false }, { ar: "أَنكَالًا", good: false }, { ar: "مِنْ غِلٍّ", good: true }], noun: "Noun Sakina", letter: "Ghain (غ)" },
        { type: "exam_quiz", prof: "Question 10/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "وُجُوهٌ يَوْمَئِذٍ", good: false }, { ar: "أَجْرٌ غَيْرُ", good: true }, { ar: "نَارًا تَلَظَّىٰ", good: false }], noun: "Tanween", letter: "Ghain (غ)" },
        { type: "exam_quiz", prof: "Question 11/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "مِنْ خَوْفٍ", good: true }, { ar: "مِن طِينٍ", good: false }, { ar: "مِن مَّسَدٍ", good: false }], noun: "Noun Sakina", letter: "Kha (خ)" },
        { type: "exam_quiz", prof: "Question 12/12<br>Parmi ces propositions, où se trouve la règle <strong>Izhar</strong> ?", opts: [{ ar: "كِرَامٍ بَرَرَةٍ", good: false }, { ar: "عَذَابٌ مُّهِينٌ", good: false }, { ar: "لَطِيفٌ خَبِيرٌ", good: true }], noun: "Tanween", letter: "Kha (خ)" },

        // --- PARTIE 4 : IMMERSION ---
        {
            type: "intro",
            prof: "Immersion Coranique.<br>Analyse de versets réels."
        },
        {
            type: "immersion",
            prof: "Sourate Al-Ghashiyah (2-4)",
            instruction: "Ce passage contient <strong>2 cas d'Izhar</strong>.<br>Veuillez sélectionner les mots correspondants.",
            totalIzhar: 2,
            words: [
                { t: "وُجُوهٌ", ok: false }, { t: "يَوْمَئِذٍ", ok: true, noun: "Tanween", letter: "Kha (خ)", endVerse: false },
                { t: "خَٰشِعَةٌ", ok: true, noun: "Tanween", letter: "'Ain (ع)", endVerse: true },
                { t: "عَامِلَةٌ", ok: false }, { t: "نَّاصِبَةٌ", ok: false, endVerse: true },
                { t: "تَصْلَىٰ", ok: false }, { t: "نَارًا", ok: true, noun: "Tanween", letter: "Ha (ح)", endVerse: false },
                { t: "حَامِيَةً", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: "Sourate Al-Masad (1-3)",
            instruction: "Ce passage contient <strong>1 cas d'Izhar</strong>.<br>Veuillez sélectionner le mot correspondant.",
            totalIzhar: 1,
            words: [
                { t: "تَبَّتْ", ok: false }, { t: "يَدَا", ok: false }, { t: "أَبِي", ok: false }, { t: "لَهَبٍ", ok: false }, { t: "وَتَبَّ", ok: false, endVerse: true },
                { t: "مَا", ok: false }, { t: "أَغْنَىٰ", ok: false }, { t: "عَنْهُ", ok: true, noun: "Noun Sakina", letter: "Ha (هـ)", endVerse: false },
                { t: "مَالُهُۥ", ok: false }, { t: "وَمَا", ok: false }, { t: "كَسَبَ", ok: false, endVerse: true },
                { t: "سَيَصْلَىٰ", ok: false }, { t: "نَارًا", ok: false }, { t: "ذَاتَ", ok: false }, { t: "لَهَبٍ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: "Sourate Quraysh (3-4)",
            instruction: "Ce passage contient <strong>1 cas d'Izhar</strong>.<br>Veuillez sélectionner le mot correspondant.",
            totalIzhar: 1,
            words: [
                { t: "فَلْيَعْبُدُوا۟", ok: false }, { t: "رَبَّ", ok: false }, { t: "هَٰذَا", ok: false }, { t: "ٱلْبَيْتِ", ok: false, endVerse: true },
                { t: "ٱلَّذِي", ok: false }, { t: "أَطْعَمَهُم", ok: false }, { t: "مِّن", ok: false }, { t: "جُوعٍ", ok: false },
                { t: "وَءَامَنَهُم", ok: false },
                { t: "مِّنْ", ok: true, noun: "Noun Sakina", letter: "Kha (خ)", endVerse: false },
                { t: "خَوْفٍ", ok: false, endVerse: true }
            ]
        }
    ]
};
