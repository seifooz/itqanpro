const IKH_SH_HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#6c5ce7; color:white; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        💡 Aide : L'Algorithme
    </button>
    <div style="display:none; background:#e8eaf6; border:1px solid #3f51b5; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>1.</strong> Je vois <strong>Mim Sakina (مْ)</strong> 🚨<br>
        <strong>2.</strong> Je regarde <strong>la lettre d'après</strong> 👀<br>
        <strong>3.</strong> C'est un <strong>Ba (ب)</strong> ?<br>
        ✅ <strong>OUI = IKHFAA SHAFAWI</strong> (Cacher)<br>
        <div style="font-size:0.8rem; color:#555; margin-top:5px;">
        👉 Lèvres à peine fermées. Ghunnah 2 temps.
        </div>
    </div>
</div>`;

const MIM_IKHFAA_DATA = {
    title: "IKHFAA SHAFAWI MASTERCLASS",
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
            prof: "Définition de l'Ikhfaa.<br>Sens Linguistique et Technique.",
            html: `
            <div class="concept-card">
                
                <!-- SENS LINGUISTIQUE -->
                <div style="margin-bottom:25px;">
                    <h4 style="color:#6c5ce7; margin-bottom:10px;">1. Sens Linguistique</h4>
                    <div style="font-size:1.1rem; font-weight:bold; color:#2d3436; margin-bottom:5px;">"Al-Ikhfaa" (الإِخْفَاء)</div>
                    <p style="font-size:0.95rem; color:#666; margin:0;">
                        Cela signifie : <strong>La Dissimulation</strong> (Cacher).
                    </p>
                </div>

                <!-- SENS TECHNIQUE -->
                <div style="background:#e8eaf6; padding:20px; border-radius:12px; border-left:5px solid #3f51b5; text-align:left;">
                    <h4 style="color:#283593; margin-top:0; margin-bottom:10px;">2. Sens Technique</h4>
                    <p style="font-size:1.1rem; line-height:1.6; color:#2c3e50; font-weight:600;">
                        "C'est la prononciation du <strong>Mim Sakina</strong> de manière intermédiaire entre l'Izhar et l'Idgham, avec une <strong>Ghunnah</strong> apparente, lorsqu'il est suivi par la lettre <strong>Ba (ب)</strong>."
                    </p>
                </div>

                <h3 style="margin-top:25px;">Écoutez la dissimulation :</h3>
                
                <div style="background:#e3f2fd; border:1px solid #bbdefb; padding:15px; border-radius:10px;">
                    <div class="ar-med" style="font-size:1.8rem; margin-bottom:10px;">تَرْمِيهِم بِحِجَارَةٍ</div>
                    
                    <button class="btn-audio btn-listen" onclick="playAudio('mim_ikhfaa_tarmihim_bihijara', 0, 100, 'ex-def-ikh-sh')" style="width:100%; background:#e8f5e9; border:1px solid #c8e6c9; padding:12px; border-radius:8px; cursor:pointer;">
                        <div style="font-size:1.2rem;">🔊 Écouter (Tarmihim-Bihijara)</div>
                        <div style="font-size:0.8rem; color:#2e7d32; margin-top:5px;">Notez la Ghunnah et les lèvres douces</div>
                    </button>
                </div>
            </div>`
        },

        // 3. LA RÈGLE
        {
            type: "lesson",
            prof: "La Condition Unique.<br>La lettre déclencheur.",
            html: `<div class="concept-card">
                <div style="background:#fff3e0; padding:15px; border-radius:10px; border-left:5px solid #ff9800; margin-bottom:20px;">
                    <h4 style="margin:0; color:#e65100;">La Règle :</h4>
                    <p style="font-weight:bold; font-size:1.1rem; margin-top:5px;">
                        Mim Sakina (مْ)<br>+<br>Ba (ب)
                    </p>
                </div>
                
                <div class="ex-logic" style="margin-bottom:0;">
                    Il n'y a qu'une seule lettre pour l'Ikhfaa Shafawi : <strong>Le Ba (ب)</strong>.
                </div>
            </div>`
        },

        // 4. ALGORITHME
        {
            type: "lesson",
            prof: "L'Algorithme Mental.<br>À retenir par cœur.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je vois <strong>Mim Sakina (مْ)</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>La lettre suivante est un <strong>Ba (ب)</strong>?</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">OUI ➡ <strong>IKHFAA SHAFAWI</strong><br>Cacher + Ghunnah</div></div></div>`
        },

        // 5. EXEMPLES VISUELS
        {
            type: "lesson",
            prof: "Exemple 1.<br>Mim Sakina + Ba.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">تَرْمِيهِم بِحِجَارَةٍ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ب</div><div class="mz-label green">Ba</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">مْ</div><div class="mz-label blue">Mim</div></div></div></div>
                ${IKH_SH_HELP_HTML}
                <div class="ex-logic">Le <strong>Mim Sakina</strong> rencontre un <strong>Ba</strong>.<br>On cache le Mim avec une Ghunnah de 2 temps.</div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2.<br>Mim Sakina + Ba.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">وَمَا هُم بِمُؤْمِنِينَ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ب</div><div class="mz-label green">Ba</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">مْ</div><div class="mz-label blue">Mim</div></div></div></div>
                ${IKH_SH_HELP_HTML}
                <div class="ex-logic">Les lèvres ne doivent pas être pressées fort.<br><strong>Hum-Bim'minin</strong></div>
            </div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Écoutez et Répétez." },

        {
            type: "workshop", prof: `Entraînement <strong>Ikhfaa Shafawi</strong>. ${IKH_SH_HELP_HTML}`, examples: [
                { type: "Mim + Ba", ar: "تَرْمِيهِم بِحِجَارَةٍ", url: "mim_ikhfaa_tarmihim_bihijara", hint: "✅ Ghunnah 2 temps" },
                { type: "Mim + Ba", ar: "وَمَا هُم بِمُؤْمِنِينَ", url: "mim_ikhfaa_wama_hum_bimuminin", hint: "✅ Ghunnah 2 temps" },
                { type: "Mim + Ba", ar: "أَلَمْ يَعْلَم بِأَنَّ", url: "mim_ikhfaa_alam_ya'lam_bi'anna", hint: "✅ Ghunnah 2 temps" }
            ]
        },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>Identifiez l'Ikhfaa Shafawi." },

        // Quiz
        { type: "exam_quiz", prof: `Question 1/8 ${IKH_SH_HELP_HTML}`, opts: [{ ar: "أَلَمْ تَكُن", good: false }, { ar: "تَرْمِيهِم بِحِجَارَةٍ", good: true, reason: "Ikhfaa Shafawi : Mim + Ba" }, { ar: "هُمْ فِيهَا", good: false }], noun: "Mim Sakina", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: `Question 2/8 ${IKH_SH_HELP_HTML}`, opts: [{ ar: "أَنفُسَهُمْ", good: false }, { ar: "لَهُم مَّا", good: false }, { ar: "يَعْتَصِم بِٱللَّهِ", good: true, reason: "Ikhfaa Shafawi : Mim + Ba" }], noun: "Mim Sakina", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: `Question 3/8 ${IKH_SH_HELP_HTML}`, opts: [{ ar: "وَمَا هُم بِمُؤْمِنِينَ", good: true, reason: "Ikhfaa Shafawi : Mim + Ba" }, { ar: "هُمْ يُوقِنُونَ", good: false }, { ar: "لَكُم مَّا", good: false }], noun: "Mim Sakina", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: `Question 4/8 ${IKH_SH_HELP_HTML}`, opts: [{ ar: "أَلَمْ نَشْرَحْ", good: false }, { ar: "أَمْ لَمْ", good: false }, { ar: "أَلَمْ يَعْلَم بِأَنَّ", good: true, reason: "Ikhfaa Shafawi : Mim + Ba" }], noun: "Mim Sakina", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: `Question 5/8 ${IKH_SH_HELP_HTML}`, opts: [{ ar: "بَيْنَهُم مَّا", good: false }, { ar: "فَاحْكُم بَيْنَهُم", good: true, reason: "Ikhfaa Shafawi : Mim + Ba" }, { ar: "أَنْذَرْتَهُمْ", good: false }], noun: "Mim Sakina", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: `Question 6/8 ${IKH_SH_HELP_HTML}`, opts: [{ ar: "عَلَيْهِمْ وَلَا", good: false }, { ar: "إِنَّ رَبَّهُم بِهِمْ", good: true, reason: "Ikhfaa Shafawi : Mim + Ba" }, { ar: "فَلَهُمْ أَجْرُهُمْ", good: false }], noun: "Mim Sakina", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: `Question 7/8 ${IKH_SH_HELP_HTML}`, opts: [{ ar: "كَلْبُهُمْ", good: false }, { ar: "أَمْوَاتٌ", good: false }, { ar: "وَكَلْبُهُم بَاسِطٌ", good: true, reason: "Ikhfaa Shafawi : Mim + Ba" }], noun: "Mim Sakina", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: `Question 8/8 ${IKH_SH_HELP_HTML}`, opts: [{ ar: "هُمْ فِيهَا", good: false }, { ar: "يَوْمَ هُم بَارِزُونَ", good: true, reason: "Ikhfaa Shafawi : Mim + Ba" }, { ar: "هُمْ خَالِدُونَ", good: false }], noun: "Mim Sakina", letter: "Ba (ب)" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion.<br>Trouvez l'Ikhfaa Shafawi dans le verset." },

        {
            type: "immersion",
            prof: `Sourate Al-Fil (4) ${IKH_SH_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant l'<strong>Ikhfaa Shafawi</strong>.",
            totalIzhar: 1,
            targetName: "un Ikhfaa Shafawi",
            words: [
                { t: "تَرْمِيهِم", ok: true, noun: "Mim Sakina", letter: "Ba (ب)", endVerse: false, reason: "Mim Sakina + Ba = Ikhfaa Shafawi ✅" },
                { t: "بِحِجَارَةٍ", ok: false }, // Bi-hijara
                { t: "مِّن", ok: false },
                { t: "سِجِّيلٍ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: `Sourate Al-Adiyat (11) ${IKH_SH_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant l'<strong>Ikhfaa Shafawi</strong>.",
            totalIzhar: 1,
            targetName: "un Ikhfaa Shafawi",
            words: [
                { t: "إِنَّ", ok: false },
                { t: "رَبَّهُم", ok: true, noun: "Mim Sakina", letter: "Ba (ب)", endVerse: false, reason: "Mim Sakina + Ba = Ikhfaa Shafawi ✅" },
                { t: "بِهِمْ", ok: false }, // Bihim
                { t: "يَوْمَئِذٍ", ok: false },
                { t: "لَّخَبِيرٌ", ok: false, endVerse: true }
            ]
        }
    ]
};
