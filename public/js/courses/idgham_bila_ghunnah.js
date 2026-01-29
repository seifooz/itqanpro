const IBG_HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#6c5ce7; color:white; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        💡 Aide : L'Algorithme
    </button>
    <div style="display:none; background:#fef9e7; border:1px solid #f1c40f; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>1.</strong> Je vois <strong>Noun (نْ) / Tanween (ــً)</strong> 🚨<br>
        <strong>2.</strong> Je regarde <strong>la lettre d'après</strong> 👀<br>
        <strong>3.</strong> C'est <strong>L ou R</strong> (ل ر) ?<br>
        ✅ <strong>OUI = IDGHAM BILA GHUNNAH</strong><br>
        (Fusion TOTALE, SANS nasalisation)
    </div>
</div>`;

const IDGHAM_BILA_GHUNNAH_DATA = {
    title: "IDGHAM BILA-GHUNNAH",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---

        // 1. SCOPE
        {
            type: "lesson",
            prof: "Introduction.<br>Sur quoi porte cette règle ?",
            html: `
            <div class="concept-card">
                <h3>Champ d'Application</h3>
                <p style="font-size:1rem; color:#2c3e50; margin-bottom:20px;">
                    Comme les autres règles du Noun, celle-ci s'applique au :
                </p>
                
                <div style="display:flex; justify-content:center; gap:20px; text-align:center;">
                    <div style="background:#e3f2fd; padding:15px 25px; border-radius:10px; border:1px solid #bbdefb;">
                        <div class="ar-big" style="color:#2196f3;">نْ</div>
                        <div style="font-weight:bold; font-size:0.9rem; margin-top:5px;">Noun Sakina</div>
                    </div>
                    <div style="background:#fff3e0; padding:15px 25px; border-radius:10px; border:1px solid #ffe0b2;">
                        <div class="ar-big" style="color:#ff9800;">ــً</div>
                        <div style="font-weight:bold; font-size:0.9rem; margin-top:5px;">Tanween</div>
                    </div>
                </div>
            </div>`
        },

        // 2. DÉFINITION
        {
            type: "lesson",
            prof: "Définition de l'Idgham Bila Ghunnah.<br>Sens Linguistique et Technique.",
            html: `
            <div class="concept-card">
                
                <!-- SENS LINGUISTIQUE -->
                <div style="margin-bottom:25px;">
                    <h4 style="color:#6c5ce7; margin-bottom:10px;">1. Sens Linguistique</h4>
                    <div style="font-size:1.1rem; font-weight:bold; color:#2d3436; margin-bottom:5px;">"Al-Idkhal" (الإِدْخَال)</div>
                    <p style="font-size:0.95rem; color:#666; margin:0;">
                        Cela signifie : <strong>L'Insertion</strong> (Faire entrer une chose dans une autre).
                    </p>
                </div>

                <!-- SENS TECHNIQUE -->
                <div style="background:#ffebee; padding:20px; border-radius:12px; border-left:5px solid #e53935; text-align:left;">
                    <h4 style="color:#c62828; margin-top:0; margin-bottom:10px;">2. Sens Technique</h4>
                    <p style="font-size:1.1rem; line-height:1.6; color:#2c3e50; font-weight:600;">
                        "C'est la fusion <strong>TOTALE</strong> du Noun dans la lettre suivante, <strong>SANS Ghunnah</strong> (0 temps)."
                    </p>
                    <p style="font-size:0.85rem; color:#555; margin-top:10px; font-style:italic;">
                        Le 'N' disparaît COMPLÈTEMENT. On passe directement à la lettre suivante.
                    </p>
                </div>

                <h3 style="margin-top:25px;">Écoutez la différence :</h3>
                
                <div style="display:flex; flex-direction:column; gap:15px;">
                    
                    <!-- Ex 1 : Noun + Lam -->
                    <div style="background:#fff; border:1px solid #eee; padding:15px; border-radius:10px;">
                        <div style="font-size:0.9rem; color:#666; margin-bottom:5px;">Exemple 1 : Noun + Lam (ل)</div>
                        <div class="ar-med" style="font-size:1.6rem; margin-bottom:10px;">مِن لَّدُنْهُ</div>
                        
                        <div style="display:flex; gap:10px;">
                            <div class="btn-audio btn-listen" onclick="playAudio('idgham_bg_min_ladunhu', 0, 100, 'ex-def-1-ok')" style="flex:1; background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ✅</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#2e7d32;">Correct</div>
                                <div style="font-size:0.65rem; color:#555;">(Mil-ladunhu)</div>
                            </div>
                            <div class="btn-audio btn-listen" onclick="playAudio('idgham_bg_min_ladunhu_wrong', 0, 100, 'ex-def-1-ko')" style="flex:1; background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ❌</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#c62828;">Incorrect</div>
                                <div style="font-size:0.65rem; color:#555;">(Min Ladunhu - avec N)</div>
                            </div>
                        </div>
                    </div>

                    <!-- Ex 2 : Tanween + Ra -->
                    <div style="background:#fff; border:1px solid #eee; padding:15px; border-radius:10px;">
                        <div style="font-size:0.9rem; color:#666; margin-bottom:5px;">Exemple 2 : Tanween + Ra (ر)</div>
                        <div class="ar-med" style="font-size:1.6rem; margin-bottom:10px;">غَفُورٌ رَّحِيمٌ</div>
                        
                        <div style="display:flex; gap:10px;">
                            <div class="btn-audio btn-listen" onclick="playAudio('idgham_bg_raoofur_raheem', 0, 100, 'ex-def-2-ok')" style="flex:1; background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ✅</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#2e7d32;">Correct</div>
                                <div style="font-size:0.65rem; color:#555;">(Ghafurur-rahim)</div>
                            </div>
                            <div class="btn-audio btn-listen" onclick="playAudio('idgham_bg_raoofur_raheem_wrong', 0, 100, 'ex-def-2-ko')" style="flex:1; background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ❌</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#c62828;">Incorrect</div>
                                <div style="font-size:0.65rem; color:#555;">(Avec Ghunnah)</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`
        },

        // 3. LETTERS (L R)
        {
            type: "lesson",
            prof: "La Condition.<br>Quand applique-t-on l'Idgham Bila Ghunnah ?",
            html: `<div class="concept-card">
                <div style="background:#ffebee; padding:15px; border-radius:10px; border-left:5px solid #d63031; margin-bottom:20px;">
                    <h4 style="margin:0; color:#d63031;">La Règle :</h4>
                    <p style="font-weight:bold; font-size:1.1rem; margin-top:5px;">
                        Noun Sakina / Tanween<br>+<br>Lam (ل) ou Ra (ر)
                    </p>
                </div>
                
                <div style="color:#555; font-size:0.9rem; margin-bottom:10px;">Seulement 2 Lettres :</div>
                <div class="letters-grid" style="grid-template-columns:repeat(2, 1fr);">
                    <div class="l-card"><div class="l-ar">ل</div><div style="font-size:0.8rem; margin-top:5px;">Lam</div></div>
                    <div class="l-card"><div class="l-ar">ر</div><div style="font-size:0.8rem; margin-top:5px;">Ra</div></div>
                </div>
                <div style="margin-top:15px; font-size:0.85rem; color:#666; background:#f5f5f5; padding:10px; border-radius:8px;">
                    <strong>Pourquoi pas de Ghunnah ?</strong><br>
                    Ces lettres (L et R) sont proches du point de sortie de la langue, ce qui permet une fusion directe sans passer par le nez.
                </div>
            </div>`
        },

        // Exemples Visuels
        {
            type: "lesson",
            prof: "Exemple 1 : Noun + Lam.<br>Disparition totale.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">مِن لَّدُنْهُ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ل</div><div class="mz-label green">L/R</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div>
                ${IBG_HELP_HTML}
                <div class="ex-logic">Le <strong>Noun (نْ)</strong> rencontre le <strong>Lam (ل)</strong>.<br>Fusion TOTALE : <strong>"Mil-ladunhu"</strong></div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2 : Tanween + Ra.<br>Fusion sèche.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">غَفُورٌ رَّحِيمٌ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ر</div><div class="mz-label green">L/R</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">ــٌ</div><div class="mz-label blue">Tanween</div></div></div></div>
                ${IBG_HELP_HTML}
                <div class="ex-logic">Le <strong>Tanween (ــٌ)</strong> rencontre le <strong>Ra (ر)</strong>.<br>Fusion TOTALE : <strong>"Ghafurur-rahim"</strong></div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 3 : Noun + Ra.<br>Autre cas.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">مِن رَّبِّهِمْ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ر</div><div class="mz-label green">L/R</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div>
                ${IBG_HELP_HTML}
                <div class="ex-logic">Le <strong>Noun (نْ)</strong> rencontre le <strong>Ra (ر)</strong>.<br>Fusion TOTALE : <strong>"Mir-rabbihim"</strong></div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 4 : Tanween + Lam.<br>Cas typique.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">وَيْلٌ لِّكُلِّ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ل</div><div class="mz-label green">L/R</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">ــٌ</div><div class="mz-label blue">Tanween</div></div></div></div>
                ${IBG_HELP_HTML}
                <div class="ex-logic">Le <strong>Tanween (ــٌ)</strong> rencontre le <strong>Lam (ل)</strong>.<br>Fusion TOTALE : <strong>"Waylul-likulli"</strong></div>
            </div>`
        },

        // Algorithme Global
        {
            type: "lesson",
            prof: "L'Algorithme Mental.<br>À retenir par cœur.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je vois <strong>Noun</strong> ou <strong>Tanween</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>Je regarde la lettre suivante.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">3</div><div>C'est <strong>L ou R</strong> ?</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">OUI ➡ <strong>IDGHAM BILA GHUNNAH</strong> (Fusion totale)</div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Entraînez-vous avec les 2 lettres." },

        // WORKSHOP
        { type: "workshop", prof: `Lettre 1 : <strong>Lam (ل)</strong>. ${IBG_HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مِن لَّدُنْهُ", url: "idgham_bg_min_ladunhu", hint: "Expl: Noun + Lam -> Idgham BG (Mil-ladunhu)" }, { type: "Tanween", ar: "وَيْلٌ لِّكُلِّ", url: "idgham_bg_waylul_likulli", hint: "Expl: Tanween + Lam -> Idgham BG (Waylul-likulli)" }] },
        { type: "workshop", prof: `Lettre 2 : <strong>Ra (ر)</strong>. ${IBG_HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مِن رَّبِّهِمْ", url: "idgham_bg_min_rabbihim", hint: "Expl: Noun + Ra -> Idgham BG (Mir-rabbihim)" }, { type: "Tanween", ar: "غَفُورٌ رَّحِيمٌ", url: "idgham_bg_raoofur_raheem", hint: "Expl: Tanween + Ra -> Idgham BG (Ghafurur-rahim)" }] },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>Identifiez les règles Idgham Bila Ghunnah." },

        { type: "exam_quiz", prof: `Question 1/8 ${IBG_HELP_HTML}`, opts: [{ ar: "مِن نُّورٍ", good: false }, { ar: "أَن لَّوْ", good: true, reason: "Idgham BG : Noun + Lam" }, { ar: "مَن يَقُولُ", good: false }], noun: "Noun Sakina", letter: "Lam (ل)" },
        { type: "exam_quiz", prof: `Question 2/8 ${IBG_HELP_HTML}`, opts: [{ ar: "قَوْلًا مَّعْرُوفًا", good: false }, { ar: "هُدًى لِّلْمُتَّقِينَ", good: true, reason: "Idgham BG : Tanween + Lam" }, { ar: "عَلِيمٌ حَكِيمٌ", good: false }], noun: "Tanween", letter: "Lam (ل)" },

        { type: "exam_quiz", prof: `Question 3/8 ${IBG_HELP_HTML}`, opts: [{ ar: "مِن وَالٍ", good: false }, { ar: "مِن رَّبِّكَ", good: true, reason: "Idgham BG : Noun + Ra" }, { ar: "أَنعَمْتَ", good: false }], noun: "Noun Sakina", letter: "Ra (ر)" },
        { type: "exam_quiz", prof: `Question 4/8 ${IBG_HELP_HTML}`, opts: [{ ar: "وَجَعَلْنَا سِرَاجًا", good: false }, { ar: "غَفُورٌ رَّحِيمٌ", good: true, reason: "Idgham BG : Tanween + Ra" }, { ar: "كُفُوًا أَحَدٌ", good: false }], noun: "Tanween", letter: "Ra (ر)" },

        { type: "exam_quiz", prof: `Question 5/8 ${IBG_HELP_HTML}`, opts: [{ ar: "قُلْ نَعَمْ", good: false }, { ar: "فَسَلَّمَ", good: false }, { ar: "مِن لَّدُنْك", good: true, reason: "Idgham BG : Noun + Lam" }], noun: "Noun Sakina", letter: "Lam (ل)" },
        { type: "exam_quiz", prof: `Question 6/8 ${IBG_HELP_HTML}`, opts: [{ ar: "رَسُولٌ مِّنَ", good: false }, { ar: "مُحَمَّدٌ رَّسُولُ", good: true, reason: "Idgham BG : Tanween + Ra" }, { ar: "نَذِيرٌ مُّبِينٌ", good: false }], noun: "Tanween", letter: "Ra (ر)" },

        { type: "exam_quiz", prof: `Question 7/8 ${IBG_HELP_HTML}`, opts: [{ ar: "أَن يُؤْمِنُوا۟", good: false }, { ar: "أَنفُسَهُمْ", good: false }, { ar: "وَلَٰكِن لَّا", good: true, reason: "Idgham BG : Noun + Lam" }], noun: "Noun Sakina", letter: "Lam (ل)" },
        { type: "exam_quiz", prof: `Question 8/8 ${IBG_HELP_HTML}`, opts: [{ ar: "عَيْنٍ ءَانِيَةٍ", good: false }, { ar: "فِي عِيشَةٍ رَّاضِيَةٍ", good: true, reason: "Idgham BG : Tanween + Ra" }, { ar: "يَوْمَئِذٍ خَٰشِعَةٌ", good: false }], noun: "Tanween", letter: "Ra (ر)" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion.<br>Trouvez les Idghams Bila Ghunnah dans le texte." },

        {
            type: "immersion",
            prof: `Sourate Al-Humazah (1) ${IBG_HELP_HTML}`,
            instruction: "Cliquez sur les mots contenant <strong>Noun Sakina ou Tanween</strong> suivis de Lam ou Ra.",
            totalIzhar: 2,
            targetName: "un Idgham Bila Ghunnah",
            words: [
                { t: "وَيْلٌ", ok: true, noun: "Tanween", letter: "Lam (ل)", endVerse: false, reason: "Idgham BG : وَيْلٌ + ل = Waylul-likulli" },
                { t: "لِّكُلِّ", ok: false },
                { t: "هُمَزَةٍ", ok: true, noun: "Tanween", letter: "Lam (ل)", endVerse: false, reason: "Idgham BG : هُمَزَةٍ + ل = Humazatil-lumaza" },
                { t: "لُّمَزَةٍ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: `Sourate Al-Qari'ah (6-7) ${IBG_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant <strong>Tanween</strong> suivi de Ra.",
            totalIzhar: 1,
            targetName: "un Idgham Bila Ghunnah",
            words: [
                { t: "فَأَمَّا", ok: false }, { t: "مَن", ok: false }, { t: "ثَقُلَتْ", ok: false }, { t: "مَوَٰزِينُهُۥ", ok: false, endVerse: true },
                { t: "فَهُوَ", ok: false }, { t: "فِي", ok: false },
                { t: "عِيشَةٍ", ok: true, noun: "Tanween", letter: "Ra (ر)", endVerse: false, reason: "Idgham BG : عِيشَةٍ + ر = 'Ishatur-radiya" },
                { t: "رَّاضِيَةٍ", ok: false, endVerse: true }
            ]
        }
    ]
};
