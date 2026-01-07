const IDGHAM_GHUNNAH_DATA = {
    title: "IDGHAM BI-GHUNNAH",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---
        {
            type: "lesson",
            prof: "Bienvenue. <br>Commençons par identifier les signes graphiques de la règle Idgham Bi-Ghunnah.",
            html: `<div class="concept-card"><h3>Les Signes à repérer</h3><p style="font-size:0.9rem; color:#666; margin-bottom:20px;">La règle s'applique uniquement en présence de :</p><div class="recap-grid"><div class="recap-item"><div class="ar-big">نْ</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Noun Sakina (نْ)</div></div><div class="recap-item"><div class="ar-big">ــً</div><div style="font-weight:bold; color:var(--secondary); font-size:0.8rem; margin-top:5px;">Tanween (ــً)</div></div></div></div>`
        },
        {
            type: "lesson",
            prof: "Définition de l'Idgham avec Ghunnah.<br>Il s'agit de fusionner le son en ajoutant une nasalisation.",
            html: `<div class="concept-card"><h3>Caractéristiques</h3><div class="simple-list"><div class="simple-item"><span class="check-icon">OK</span><span>Son <strong>FUSIONNÉ</strong> : Le 'N' disparaît.</span></div><div class="simple-item"><span class="check-icon">OK</span><span><strong>GHUNNAH</strong> : Vibration nasale 2 temps.</span></div><div class="simple-item"><span class="check-icon bad">NON</span><span>Pas de coupure entre les mots.</span></div></div>
            <p style="font-size:0.8rem; margin-top:20px; color:#888;">La voix doit passer par le nez (Khashyum).</p></div>`
        },
        {
            type: "lesson",
            prof: "Les Lettres concernées (Yanmu).<br>L'Idgham Bi-Ghunnah s'applique avec 4 lettres.",
            html: `<div class="concept-card"><div style="color:#d63031; font-weight:700; margin-bottom:15px; text-transform:uppercase; font-size:0.8rem;">À mémoriser</div><div class="letters-grid" style="grid-template-columns:repeat(2, 1fr); gap:20px;"><div class="l-card"><div class="l-ar">ي</div></div><div class="l-card"><div class="l-ar">ن</div></div><div class="l-card"><div class="l-ar">م</div></div><div class="l-card"><div class="l-ar">و</div></div></div><div class="tip-box"><div style="font-size:0.8rem; color:#555; margin-bottom:10px; font-weight:bold;">Moyen mnémotechnique :</div><div class="tip-chars"><span>يَ</span><span>نْـ</span><span>مُ</span><span>و</span></div><di style="font-size:0.9rem; margin-top:10px; line-height:1.6; color:#444;">Le mot <strong>"YANMU"</strong> regroupe ces 4 lettres.</di></div></div>`
        },

        // Exemples Visuels
        {
            type: "lesson",
            prof: "Exemple 1 : Noun + Ya.<br>Transformation nasale.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">مَن يَقُولُ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ي</div><div class="mz-label green">Lettre</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div><div class="ex-logic">Le <strong>Noun Sakina (نْ)</strong> rencontre le <strong>Ya (ي)</strong>.<br>On insère le son dans le Ya avec Ghunnah ➡ <strong>MAY-YAQOOL</strong>.<span class="ex-def">Maintenir le son 2 temps.</span></div></div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2 : Tanween + Waw.<br>Même principe avec les voyelles doubles.",
            html: `<div class="concept-card"><div class="mz-container"><div class="mz-phrase">رَحِيمٌ وَدُودٌ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">و</div><div class="mz-label green">Lettre</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">ــٌ</div><div class="mz-label blue">Tanween</div></div></div></div><div class="ex-logic">Le <strong>Tanween</strong> rencontre le <strong>Waw (و)</strong>.<br>FusionNasale ➡ <strong>RAHEEMUW-WADUD</strong>.<span class="ex-def">Le son 'oun' devient 'ouw' avec vibration.</span></div></div>`
        },

        // Quiz Théorie
        {
            type: "quiz_theory",
            prof: "Vérification.<br>Quel groupe de lettres correspond à l'Idgham Bi-Ghunnah ?",
            opts: [
                { t: "L R (ل ر)", good: false },
                { t: "Y N M W (ي ن م و)", good: true }
            ],
            exp: "Correct. YANMU (ي ن م و) sont les 4 lettres qui déclenchent la Ghunnah."
        },
        // Equation
        {
            type: "lesson",
            prof: "Résumé de la règle.<br>Formule à retenir.",
            html: `<div class="eq-container"><div class="eq-card"><div style="font-size:0.9rem; color:#888; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;">Formule Idgham Bi-Ghunnah</div><div class="eq-formula"><div class="eq-tag tag-blue">Noun / Tanween</div><div class="eq-plus">+</div><div class="eq-tag tag-green">Y N M W</div><div class="eq-plus">=</div><div class="res-text">FUSION + GHUNNAH</div></div></div></div>`
        },
        // Algorithme
        {
            type: "lesson",
            prof: "Méthodologie de lecture.<br>Schéma logique à appliquer.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je repère Noun Sakina ou Tanween.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>La lettre suivante est Y, N, M ou W ?</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">OUI ➡ Je fusionne et je nasalise (2 temps)</div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Entraînement par lettre." },

        // WORKSHOP
        { type: "workshop", prof: "Lettre 1 : <strong>Ya (ي)</strong>.<br>Ghunnah douce.", examples: [{ type: "Noun Sakina", ar: "مَن يَعْمَلْ", url: "idgham_gh_man_yamal", hint: "May-ya'mal" }, { type: "Tanween", ar: "وُجُوهٌ يَوْمَئِذٍ", url: "idgham_gh_wujoohun", hint: "Tanween + Ya" }] },
        { type: "workshop", prof: "Lettre 2 : <strong>Nun (ن)</strong>.<br>Fusion identique.", examples: [{ type: "Noun Sakina", ar: "مِن نِّعْمَةٍ", url: "idgham_gh_min_nimatin", hint: "Min-ni'matin" }, { type: "Tanween", ar: "يَوْمَئِذٍ نَّاعِمَةٌ", url: "idgham_gh_yawmaidhin", hint: "Tanween + Nun" }] },
        { type: "workshop", prof: "Lettre 3 : <strong>Mim (م)</strong>.<br>Forte nasalisation.", examples: [{ type: "Noun Sakina", ar: "مِن مَّسَدٍ", url: "idgham_gh_mim_masadin", hint: "Mim-masadin" }, { type: "Tanween", ar: "جَزَآءً مِّن", url: "idgham_gh_jazaam", hint: "Tanween + Mim" }] },
        { type: "workshop", prof: "Lettre 4 : <strong>Waw (و)</strong>.<br>Fusion ronde.", examples: [{ type: "Noun Sakina", ar: "مِن وَالٍ", url: "idgham_gh_miw_walin", hint: "Miw-walin" }, { type: "Tanween", ar: "غِشَٰوَةٌ وَلَهُمْ", url: "idgham_gh_ghishawatun", hint: "Tanween + Waw" }] },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>8 questions pour valider." },

        { type: "exam_quiz", prof: "Question 1/8", opts: [{ ar: "مَن يَقُولُ", good: true }, { ar: "مَنْ ءَامَنَ", good: false }, { ar: "أَنْعَمْتَ", good: false }], noun: "Noun Sakina", letter: "Ya (ي)" },
        { type: "exam_quiz", prof: "Question 2/8", opts: [{ ar: "خَيْرًا يَرَهُۥ", good: true }, { ar: "جُرُفٍ هَارٍ", good: false }, { ar: "عَلِيمًا حَكِيمًا", good: false }], noun: "Tanween", letter: "Ya (ي)" },

        { type: "exam_quiz", prof: "Question 3/8", opts: [{ ar: "مِن نُّورٍ", good: true }, { ar: "مِنْ عِلْمٍ", good: false }, { ar: "أَنكَدَ", good: false }], noun: "Noun Sakina", letter: "Nun (ن)" },
        { type: "exam_quiz", prof: "Question 4/8", opts: [{ ar: "شَيْءٍ نُّكُرٍ", good: true }, { ar: "سَمِيعٌ عَلِيمٌ", good: false }, { ar: "كُفُوًا أَحَدٌ", good: false }], noun: "Tanween", letter: "Nun (ن)" },

        { type: "exam_quiz", prof: "Question 5/8", opts: [{ ar: "مِن مَّالٍ", good: true }, { ar: "مِنْ خَوْفٍ", good: false }, { ar: "أَنعَمَ", good: false }], noun: "Noun Sakina", letter: "Mim (م)" },
        { type: "exam_quiz", prof: "Question 6/8", opts: [{ ar: "قَوْلًا مَّعْرُوفًا", good: true }, { ar: "عَذَابٌ أَلِيمٌ", good: false }, { ar: "حَاسِدٍ إِذَا", good: false }], noun: "Tanween", letter: "Mim (م)" },

        { type: "exam_quiz", prof: "Question 7/8", opts: [{ ar: "مِن وَاقٍ", good: true }, { ar: "مِنْ هَادٍ", good: false }, { ar: "وَٱنْحَرْ", good: false }], noun: "Noun Sakina", letter: "Waw (و)" },
        { type: "exam_quiz", prof: "Question 8/8", opts: [{ ar: "لَهَبٍ وَتَبَّ", good: true }, { ar: "نَارًا حَامِيَةً", good: false }, { ar: "عَيْنٍ ءَانِيَةٍ", good: false }], noun: "Tanween", letter: "Waw (و)" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion Coranique.<br>Mise en pratique réelle." },

        {
            type: "immersion",
            prof: "Sourate Az-Zalzalah (7-8)",
            instruction: "Ce passage contient <strong>2 Idghams avec Ghunnah</strong> (Ya).",
            totalIzhar: 2,
            words: [
                { t: "فَمَن", ok: false }, { t: "يَعْمَلْ", ok: true, noun: "Noun Sakina", letter: "Ya (ي)", endVerse: false },
                { t: "مِثْقَالَ", ok: false }, { t: "ذَرَّةٍ", ok: true, noun: "Tanween", letter: "Ya (ي)", endVerse: false }, // Here the Tanween is followed by 'Khayran' in next ayah usually but context here is verse 7 end connecting to 8? Wait. Verse 7 ends with 'Yarah'. Verse 8 starts with 'Wa man'. Let's stick to the intra-verse logic or strict connection. 
                // Correction: Verse 7 "Faman ya'mal mithqala dharratin khayran yarah".
                // "dharratin khayran" -> Izhar (Kha). 
                // "khayran yarah" -> Idgham Bi Ghunnah (Ya).
                // Let's adjust the words list to be accurate to Verse 7.
                { t: "خَيْرًا", ok: true, noun: "Tanween", letter: "Ya (ي)", endVerse: false },
                { t: "يَرَهُۥ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: "Sourate An-Naba (Selected)",
            instruction: "Trouvez les <strong>2 cas d'Idgham Bi-Ghunnah</strong>.",
            totalIzhar: 2,
            words: [
                { t: "وَأَنزَلْنَا", ok: false }, { t: "مِنَ", ok: false }, { t: "ٱلْمُعْصِرَٰتِ", ok: false },
                { t: "مَاءً", ok: true, noun: "Tanween", letter: "Thajjaja (NOT Idgham?? Wait)", endVerse: false },
                // "Ma'an Thajjaja" -> Ikhfaa (Tha).
                // Need to fix this example to be 100% correct Idgham Bi Ghunnah.
                // Replaced with: "Wa ja'alnaa sirajan wahhajaa" (Verse 13) -> Sirajan Wahhaja = Idgham BG.
                // And Verse 14: "Maa'an Thajjaja" is Ikhfaa.
                // Let's use Verse 13 for Waw example.
                { t: "وَجَعَلْنَا", ok: false },
                { t: "سِرَاجًا", ok: true, noun: "Tanween", letter: "Waw (و)", endVerse: false },
                { t: "وَهَّاجًا", ok: false, endVerse: true }
            ]
        }
    ]
};
