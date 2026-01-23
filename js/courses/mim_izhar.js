const IZH_SH_HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#6c5ce7; color:white; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        💡 Aide : L'Algorithme
    </button>
    <div style="display:none; background:#e8eaf6; border:1px solid #3f51b5; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>1.</strong> Je vois <strong>Mim Sakina (مْ)</strong> 🚨<br>
        <strong>2.</strong> Je regarde <strong>la lettre d'après</strong> 👀<br>
        <strong>3.</strong> Ce n'est <strong>PAS Mim (م)</strong> ni <strong>Ba (ب)</strong> ?<br>
        ✅ <strong>OUI = IZHAR SHAFAWI</strong> (Clarté)<br>
        <div style="font-size:0.8rem; color:#555; margin-top:5px;">
        👉 Je prononce le Mim clairement. Pas de Ghunnah prolongée.
        </div>
    </div>
</div>`;

const MIM_IZHAR_DATA = {
    title: "IZHAR SHAFAWI MASTERCLASS",
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
                    Cette règle s'applique spécifiquement au :
                </p>
                
                <div style="display:flex; justify-content:center; gap:20px; text-align:center;">
                    <div style="background:#e8eaf6; padding:20px 30px; border-radius:15px; border:2px solid #3f51b5;">
                        <div class="ar-big" style="color:#3f51b5;">مْ</div>
                        <div style="font-weight:bold; font-size:1rem; margin-top:10px; color:#283593;">Mim Sakina</div>
                        <div style="font-size:0.8rem; color:#5c6bc0;">(Sans voyelle)</div>
                    </div>
                </div>
            </div>`
        },

        // 2. DÉFINITION
        {
            type: "lesson",
            prof: "Définition de l'Izhar.<br>Sens Linguistique et Technique.",
            html: `
            <div class="concept-card">
                
                <!-- SENS LINGUISTIQUE -->
                <div style="margin-bottom:25px;">
                    <h4 style="color:#6c5ce7; margin-bottom:10px;">1. Sens Linguistique</h4>
                    <div style="font-size:1.1rem; font-weight:bold; color:#2d3436; margin-bottom:5px;">"Al-Izhar" (الإِظْهَار)</div>
                    <p style="font-size:0.95rem; color:#666; margin:0;">
                        Cela signifie : <strong>La Clarté</strong> (Rendre une chose visible).
                    </p>
                </div>

                <!-- SENS TECHNIQUE -->
                <div style="background:#e8eaf6; padding:20px; border-radius:12px; border-left:5px solid #3f51b5; text-align:left;">
                    <h4 style="color:#283593; margin-top:0; margin-bottom:10px;">2. Sens Technique</h4>
                    <p style="font-size:1.1rem; line-height:1.6; color:#2c3e50; font-weight:600;">
                        "C'est prononcer le <strong>Mim Sakina</strong> de manière <strong>claire et détachée</strong>, sans Ghunnah supplémentaire, lorsqu'il est suivi par n'importe quelle lettre <strong>sauf Mim et Ba</strong>."
                    </p>
                </div>

                <h3 style="margin-top:25px;">Écoutez la clarté :</h3>
                
                <div style="background:#e3f2fd; border:1px solid #bbdefb; padding:15px; border-radius:10px;">
                    <div class="ar-med" style="font-size:1.8rem; margin-bottom:10px;">هُمْ فِيهَا</div>
                    
                    <button class="btn-audio btn-listen" onclick="playAudio('mim_izhar_hum_fiha', 0, 100, 'ex-def-izh-sh')" style="width:100%; background:#e8f5e9; border:1px solid #c8e6c9; padding:12px; border-radius:8px; cursor:pointer;">
                        <div style="font-size:1.2rem;">🔊 Écouter (Hum-Fiha)</div>
                        <div style="font-size:0.8rem; color:#2e7d32; margin-top:5px;">Notez la coupure nette entre Mim et Fa</div>
                    </button>
                    <div style="font-size:0.75rem; color:#c62828; margin-top:5px; font-weight:bold;">⚠️ Attention : Ne pas faire traîner le son (Ghunnah) ici !</div>
                </div>
            </div>`
        },

        // 3. LA RÈGLE
        {
            type: "lesson",
            prof: "La Condition Universelle.<br>Toutes les autres lettres.",
            html: `<div class="concept-card">
                <div style="background:#fff3e0; padding:15px; border-radius:10px; border-left:5px solid #ff9800; margin-bottom:20px;">
                    <h4 style="margin:0; color:#e65100;">La Règle :</h4>
                    <p style="font-weight:bold; font-size:1.1rem; margin-top:5px;">
                        Mim Sakina (مْ)<br>+<br>Tout sauf (م - ب)
                    </p>
                </div>
                
                <h4 style="color:#444; margin-bottom:15px;">26 Lettres Possibles</h4>
                
                <div class="ex-logic" style="margin-bottom:0;">
                    C'est la règle par défaut. Si ce n'est pas un Idgham (Mim) ni un Ikhfaa (Ba), c'est un Izhar !
                </div>
            </div>`
        },

        // 4. ALGORITHME
        {
            type: "lesson",
            prof: "L'Algorithme Mental.<br>À retenir par cœur.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je vois <strong>Mim Sakina (مْ)</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>La lettre suivante est <strong>Mim (م)</strong> ou <strong>Ba (ب)</strong>?</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">NON ➡ <strong>IZHAR SHAFAWI</strong><br>Prononciation Claire</div></div></div>`
        },

        // 5. EXEMPLES VISUELS
        {
            type: "lesson",
            prof: "Exemple 1.<br>Mim Sakina + Fa (Attention).",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">هُمْ فِيهَا</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ف</div><div class="mz-label green">Fa</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">مْ</div><div class="mz-label blue">Mim</div></div></div></div>
                ${IZH_SH_HELP_HTML}
                <div class="ex-logic">Le <strong>Mim Sakina</strong> rencontre un <strong>Fa</strong>.<br>Il faut être vigilant pour ne pas cacher le Mim ici. Clarté !</div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2.<br>Mim Sakina + Waw (Attention).",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">عَلَيْهِمْ وَلَا</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">و</div><div class="mz-label green">Waw</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">مْ</div><div class="mz-label blue">Mim</div></div></div></div>
                ${IZH_SH_HELP_HTML}
                <div class="ex-logic">Le <strong>Mim Sakina</strong> rencontre un <strong>Waw</strong>.<br>Prononcez clairement : <strong>Alayhim-Wala</strong>.</div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 3.<br>Mim Sakina + Ta (Standard).",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">أَنْعَمْتَ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ت</div><div class="mz-label green">Ta</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">مْ</div><div class="mz-label blue">Mim</div></div></div></div>
                ${IZH_SH_HELP_HTML}
                <div class="ex-logic">Le <strong>Mim Sakina</strong> rencontre un <strong>Ta</strong>.<br>Prononciation normale et claire du Mim.</div>
            </div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Écoutez et Répétez." },

        {
            type: "workshop", prof: `Entraînement <strong>Izhar Shafawi</strong> (Lettres Pièges). ${IZH_SH_HELP_HTML}`, examples: [
                { type: "Mim + Fa (Danger)", ar: "هُمْ فِيهَا", url: "mim_izhar_hum_fiha", hint: "✅ Clair & Rapide" },
                { type: "Mim + Waw (Danger)", ar: "عَلَيْهِمْ وَلَا", url: "mim_izhar_alayhim_wala", hint: "✅ Clair & Rapide" }
            ]
        },
        {
            type: "workshop", prof: `Entraînement <strong>Izhar Shafawi</strong> (Lettres Standard). ${IZH_SH_HELP_HTML}`, examples: [
                { type: "Mim + Ta", ar: "أَنْعَمْتَ", url: "mim_izhar_an'amta", hint: "✅ Clair" },
                { type: "Mim + Ra", ar: "أَمْ لَمْ", url: "mim_izhar_am_lam", hint: "✅ Clair" },
                { type: "Mim + Hamza", ar: "أَمْ أَنَا۠", url: "mim_izhar_am_ana", hint: "✅ Clair" }
            ]
        },


        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>Identifiez l'Izhar Shafawi." },

        // Quiz
        { type: "exam_quiz", prof: `Question 1/8 ${IZH_SH_HELP_HTML}`, opts: [{ ar: "عَلَيْهِم مُّؤْصَدَةٌ", good: false }, { ar: "عَلَيْهِمْ وَلَا", good: true, reason: "Izhar Shafawi : Mim + Waw" }, { ar: "يَعْتَصِم بِٱللَّهِ", good: false }], noun: "Mim Sakina", letter: "Waw (و)" },
        { type: "exam_quiz", prof: `Question 2/8 ${IZH_SH_HELP_HTML}`, opts: [{ ar: "لَكُم مَّا", good: false }, { ar: "لَكُمْ دِينُكُمْ", good: true, reason: "Izhar Shafawi : Mim + Dal" }, { ar: "كُنتُم مَّرْضَىٰ", good: false }], noun: "Mim Sakina", letter: "Dal (د)" },
        { type: "exam_quiz", prof: `Question 3/8 ${IZH_SH_HELP_HTML}`, opts: [{ ar: "هُم بَارِزُونَ", good: false }, { ar: "لَهُم مَّا", good: false }, { ar: "هُمْ فِيهَا", good: true, reason: "Izhar Shafawi : Mim + Fa" }], noun: "Mim Sakina", letter: "Fa (ف)" },
        { type: "exam_quiz", prof: `Question 4/8 ${IZH_SH_HELP_HTML}`, opts: [{ ar: "تَرْمِيهِم بِحِجَارَةٍ", good: false }, { ar: "إِنَّهُم مُّلَٰقُوا۟", good: false }, { ar: "أَمْ لَمْ", good: true, reason: "Izhar Shafawi : Mim + Lam" }], noun: "Mim Sakina", letter: "Lam (ل)" },
        { type: "exam_quiz", prof: `Question 5/8 ${IZH_SH_HELP_HTML}`, opts: [{ ar: "أَلَمْ يَعْلَم بِأَنَّ", good: false }, { ar: "أَلَمْ تَكُن", good: true, reason: "Izhar Shafawi : Mim + Ta" }, { ar: "أَطْعَمَهُم مِّن", good: false }], noun: "Mim Sakina", letter: "Ta (ت)" },
        { type: "exam_quiz", prof: `Question 6/8 ${IZH_SH_HELP_HTML}`, opts: [{ ar: "مِّن", good: false }, { ar: "تُمْسُونَ", good: true, reason: "Izhar Shafawi : Mim + Sin" }, { ar: "مِمَّنْ", good: false }], noun: "Mim Sakina", letter: "Sin (س)" },
        { type: "exam_quiz", prof: `Question 7/8 ${IZH_SH_HELP_HTML}`, opts: [{ ar: "أَنْعَمْتَ", good: true, reason: "Izhar Shafawi : Mim + Ta" }, { ar: "أَنبِئْهُم", good: false }, { ar: "أَنَّهُمْ", good: false }], noun: "Mim Sakina", letter: "Ta (ت)" },
        { type: "exam_quiz", prof: `Question 8/8 ${IZH_SH_HELP_HTML}`, opts: [{ ar: "ذُلِّلَتْ", good: false }, { ar: "أَمْوَٰتًا", good: true, reason: "Izhar Shafawi : Mim + Waw" }, { ar: "مَا", good: false }], noun: "Mim Sakina", letter: "Waw (و)" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion.<br>Trouvez l'Izhar Shafawi dans le verset." },

        {
            type: "immersion",
            prof: `Sourate Al-Fatiha (7) ${IZH_SH_HELP_HTML}`,
            instruction: "Il y a <strong>2 cas d'Izhar Shafawi</strong> ici (Mim+Lettre).",
            totalIzhar: 2,
            targetName: "un Izhar Shafawi",
            words: [
                { t: "أَنْعَمْتَ", ok: true, noun: "Mim Sakina", letter: "Ta (ت)", endVerse: false, reason: "Mim Sakina + Ta = Izhar Shafawi ✅" },
                { t: "عَلَيْهِمْ", ok: true, noun: "Mim Sakina", letter: "Ghyn (غ)", endVerse: false, reason: "Mim Sakina + Ghyn = Izhar Shafawi ✅" },
                { t: "غَيْرِ", ok: false },
                { t: "ٱلْمَغْضُوبِ", ok: false },
                { t: "عَلَيْهِمْ", ok: false, endVerse: false } // Ignoring final for now as per original data standard
            ]
        },
        {
            type: "immersion",
            prof: `Sourate Al-Qari'ah (8) ${IZH_SH_HELP_HTML}`,
            instruction: "Trouvez le cas d'<strong>Izhar Shafawi</strong>.",
            totalIzhar: 1,
            targetName: "un Izhar Shafawi",
            words: [
                { t: "وَأَمَّا", ok: false },
                { t: "مَنْ", ok: false },
                { t: "خَفَّتْ", ok: false },
                { t: "مَوَٰزِينُهُۥ", ok: true, noun: "Mim Sakina", letter: "Waw (و)", endVerse: true, reason: "Attendez... Mawazinuhu n'a pas de Mim Sakina." }
            ]
        }
    ]
};
