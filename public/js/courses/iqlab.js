const IQ_HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#6c5ce7; color:white; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        💡 Aide : L'Algorithme
    </button>
    <div style="display:none; background:#fef9e7; border:1px solid #f1c40f; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>1.</strong> Je vois <strong>Noun (نْ) / Tanween (ــً)</strong> 🚨<br>
        <strong>2.</strong> Je regarde <strong>la lettre d'après</strong> 👀<br>
        <strong>3.</strong> C'est <strong>Ba (ب)</strong> ?<br>
        ✅ <strong>OUI = IQLAB</strong><br>
        (Je transforme le N en M + Ghunnah 2 temps)
    </div>
</div>`;

const IQLAB_DATA = {
    title: "AL-IQLAB MASTERCLASS",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---

        // 1. SCOPE
        {
            type: "lesson",
            prof: "Introduction.<br>Sur quoi porte la règle de l'Iqlab ?",
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
            prof: "Définition de l'Iqlab.<br>Sens Linguistique et Technique.",
            html: `
            <div class="concept-card">
                
                <!-- SENS LINGUISTIQUE -->
                <div style="margin-bottom:25px;">
                    <h4 style="color:#6c5ce7; margin-bottom:10px;">1. Sens Linguistique</h4>
                    <div style="font-size:1.1rem; font-weight:bold; color:#2d3436; margin-bottom:5px;">"Al-Qalb" (القَلْب)</div>
                    <p style="font-size:0.95rem; color:#666; margin:0;">
                        Cela signifie : <strong>La Transformation</strong> (Changer une chose en une autre).
                    </p>
                </div>

                <!-- SENS TECHNIQUE -->
                <div style="background:#e8f5e9; padding:20px; border-radius:12px; border-left:5px solid #4caf50; text-align:left;">
                    <h4 style="color:#2e7d32; margin-top:0; margin-bottom:10px;">2. Sens Technique</h4>
                    <p style="font-size:1.1rem; line-height:1.6; color:#2c3e50; font-weight:600;">
                        "C'est la transformation du Noun (ou Tanween) en <strong>Mim (م)</strong>, avec <strong>Ghunnah</strong> de 2 temps."
                    </p>
                    <p style="font-size:0.85rem; color:#555; margin-top:10px; font-style:italic;">
                        Le son 'N' devient complètement 'M' et on nasalise.
                    </p>
                </div>

                <h3 style="margin-top:25px;">Écoutez la différence :</h3>
                
                <div style="display:flex; flex-direction:column; gap:15px;">
                    
                    <!-- Ex 1 : Noun + Ba -->
                    <div style="background:#fff; border:1px solid #eee; padding:15px; border-radius:10px;">
                        <div style="font-size:0.9rem; color:#666; margin-bottom:5px;">Exemple 1 : Noun + Ba (ب)</div>
                        <div class="ar-med" style="font-size:1.6rem; margin-bottom:10px;">مِنۢ بَعْدِ</div>
                        
                        <div style="display:flex; gap:10px;">
                            <div class="btn-audio btn-listen" onclick="playAudio('iqlab_min_badi', 0, 100, 'ex-def-1-ok')" style="flex:1; background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ✅</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#2e7d32;">Correct</div>
                                <div style="font-size:0.65rem; color:#555;">(Mim-ba'di)</div>
                            </div>
                            <div class="btn-audio btn-listen" onclick="playAudio('iqlab_min_badi_wrong', 0, 100, 'ex-def-1-ko')" style="flex:1; background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ❌</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#c62828;">Incorrect</div>
                                <div style="font-size:0.65rem; color:#555;">(Min Ba'di - avec N)</div>
                            </div>
                        </div>
                    </div>

                    <!-- Ex 2 : Tanween + Ba -->
                    <div style="background:#fff; border:1px solid #eee; padding:15px; border-radius:10px;">
                        <div style="font-size:0.9rem; color:#666; margin-bottom:5px;">Exemple 2 : Tanween + Ba (ب)</div>
                        <div class="ar-med" style="font-size:1.6rem; margin-bottom:10px;">سَمِيعٌۢ بَصِيرٌ</div>
                        
                        <div style="display:flex; gap:10px;">
                            <div class="btn-audio btn-listen" onclick="playAudio('iqlab_samiun_baseer', 0, 100, 'ex-def-2-ok')" style="flex:1; background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ✅</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#2e7d32;">Correct</div>
                                <div style="font-size:0.65rem; color:#555;">(Sami'um-basir)</div>
                            </div>
                            <div class="btn-audio btn-listen" onclick="playAudio('iqlab_samiun_baseer_wrong', 0, 100, 'ex-def-2-ko')" style="flex:1; background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ❌</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#c62828;">Incorrect</div>
                                <div style="font-size:0.65rem; color:#555;">(Sami'un Basir - avec N)</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`
        },

        // 3. LETTER (Ba)
        {
            type: "lesson",
            prof: "La Condition.<br>Quand applique-t-on l'Iqlab ?",
            html: `<div class="concept-card">
                <div style="background:#e8f5e9; padding:15px; border-radius:10px; border-left:5px solid #4caf50; margin-bottom:20px;">
                    <h4 style="margin:0; color:#2e7d32;">La Règle :</h4>
                    <p style="font-weight:bold; font-size:1.1rem; margin-top:5px;">
                        Noun Sakina / Tanween<br>+<br>Ba (ب)
                    </p>
                </div>
                
                <div style="color:#555; font-size:0.9rem; margin-bottom:10px;">Une seule Lettre :</div>
                <div class="letters-grid" style="grid-template-columns:1fr;">
                    <div class="l-card"><div class="l-ar">ب</div><div style="font-size:0.8rem; margin-top:5px;">Ba</div></div>
                </div>
                <div style="margin-top:15px; font-size:0.85rem; color:#666; background:#f5f5f5; padding:10px; border-radius:8px;">
                    <strong>Signe Graphique :</strong><br>
                    Vous verrez souvent un petit <strong>Mim (ۢ)</strong> au-dessus du Noun pour indiquer la transformation.
                </div>
            </div>`
        },

        // Exemples Visuels
        {
            type: "lesson",
            prof: "Exemple 1 : Noun + Ba.<br>Entre deux mots.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">مِنۢ بَعْدِ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ب</div><div class="mz-label green">Ba</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نۢ</div><div class="mz-label blue">Noun</div></div></div></div>
                ${IQ_HELP_HTML}
                <div class="ex-logic">Le <strong>Noun (نۢ)</strong> rencontre le <strong>Ba (ب)</strong>.<br>Transformation : <strong>"Mim-ba'di"</strong></div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2 : Tanween + Ba.<br>Fin de mot.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">سَمِيعٌۢ بَصِيرٌ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ب</div><div class="mz-label green">Ba</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">ــٌۢ</div><div class="mz-label blue">Tanween</div></div></div></div>
                ${IQ_HELP_HTML}
                <div class="ex-logic">Le <strong>Tanween (ــٌۢ)</strong> rencontre le <strong>Ba (ب)</strong>.<br>Transformation : <strong>"Sami'um-basir"</strong></div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 3 : Dans un seul mot.<br>Cas particulier.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">لَيُنۢبَذَنَّ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ب</div><div class="mz-label green">Ba</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نۢ</div><div class="mz-label blue">Noun</div></div></div></div>
                ${IQ_HELP_HTML}
                <div class="ex-logic">Le <strong>Noun</strong> et le <strong>Ba</strong> sont dans le même mot.<br>Transformation : <strong>"Layum-badhanna"</strong></div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 4 : Tanween + Ba.<br>Autre cas.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">كِرَامٍۭ بَرَرَةٍ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ب</div><div class="mz-label green">Ba</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">ــٍۭ</div><div class="mz-label blue">Tanween</div></div></div></div>
                ${IQ_HELP_HTML}
                <div class="ex-logic">Le <strong>Tanween</strong> rencontre le <strong>Ba (ب)</strong>.<br>Transformation : <strong>"Kiramim-bararah"</strong></div>
            </div>`
        },

        // Algorithme Global
        {
            type: "lesson",
            prof: "L'Algorithme Mental.<br>À retenir par cœur.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je vois <strong>Noun</strong> ou <strong>Tanween</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>Je regarde la lettre suivante.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">3</div><div>C'est <strong>Ba (ب)</strong> ?</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">OUI ➡ <strong>IQLAB</strong> (N → M + Ghunnah)</div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Entraînez-vous à l'Iqlab avec la lettre Ba." },

        // WORKSHOP
        { type: "workshop", prof: `Lettre Unique : <strong>Ba (ب)</strong>. ${IQ_HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مِنۢ بَعْدِ", url: "iqlab_min_badi", hint: "Expl: Noun + Ba -> Iqlab (Mim-ba'di)" }, { type: "Tanween", ar: "سَمِيعٌۢ بَصِيرٌ", url: "iqlab_samiun_baseer", hint: "Expl: Tanween + Ba -> Iqlab (Sami'um-basir)" }] },
        { type: "workshop", prof: `Plus d'exemples. ${IQ_HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "أَنبِئْهُم", url: "iqlab_ambihum", hint: "Expl: Noun + Ba -> Iqlab (Am-bi'hum)" }, { type: "Tanween", ar: "كِرَامٍۭ بَرَرَةٍ", url: "iqlab_kiramin_bararah", hint: "Expl: Tanween + Ba -> Iqlab (Kiramim-bararah)" }] },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>Identifiez les cas d'Iqlab." },

        { type: "exam_quiz", prof: `Question 1/8 ${IQ_HELP_HTML}`, opts: [{ ar: "أَن تَبَرُّوا۟", good: false }, { ar: "أَنبِئْهُم", good: true, reason: "Iqlab : Noun + Ba" }, { ar: "أَنْعَمْتَ", good: false }], noun: "Noun Sakina", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: `Question 2/8 ${IQ_HELP_HTML}`, opts: [{ ar: "عَيْنٍ ءَانِيَةٍ", good: false }, { ar: "كِرَامٍۭ بَرَرَةٍ", good: true, reason: "Iqlab : Tanween + Ba" }, { ar: "رَسُولٌ مِّنَ", good: false }], noun: "Tanween", letter: "Ba (ب)" },

        { type: "exam_quiz", prof: `Question 3/8 ${IQ_HELP_HTML}`, opts: [{ ar: "مِن رَّبِّهِمْ", good: false }, { ar: "مِنۢ بَعْدِ", good: true, reason: "Iqlab : Noun + Ba" }, { ar: "مِمَّنْ", good: false }], noun: "Noun Sakina", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: `Question 4/8 ${IQ_HELP_HTML}`, opts: [{ ar: "عَلِيمٌ حَكِيمٌ", good: false }, { ar: "غَفُورٌ رَّحِيمٌ", good: false }, { ar: "عَلِيمٌۢ بِذَاتِ", good: true, reason: "Iqlab : Tanween + Ba" }], noun: "Tanween", letter: "Ba (ب)" },

        { type: "exam_quiz", prof: `Question 5/8 ${IQ_HELP_HTML}`, opts: [{ ar: "فَمَن يَعْمَلْ", good: false }, { ar: "لَيُنۢبَذَنَّ", good: true, reason: "Iqlab : Noun + Ba (interne)" }, { ar: "يَنْهَوْنَ", good: false }], noun: "Noun Sakina (Interne)", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: `Question 6/8 ${IQ_HELP_HTML}`, opts: [{ ar: "أَفْوَاجًا", good: false }, { ar: "حَبًّا وَنَبَاتًا", good: false }, { ar: "زَوْجٍۭ بَهِيجٍ", good: true, reason: "Iqlab : Tanween + Ba" }], noun: "Tanween", letter: "Ba (ب)" },

        { type: "exam_quiz", prof: `Question 7/8 ${IQ_HELP_HTML}`, opts: [{ ar: "يَنظُرُونَ", good: false }, { ar: "يَنقَلِبُ", good: false }, { ar: "يَنۢبُوعًا", good: true, reason: "Iqlab : Noun + Ba" }], noun: "Noun Sakina", letter: "Ba (ب)" },
        { type: "exam_quiz", prof: `Question 8/8 ${IQ_HELP_HTML}`, opts: [{ ar: "رَجْعٌۢ بَعِيدٌ", good: true, reason: "Iqlab : Tanween + Ba" }, { ar: "شَيْءٍ شَهِيدٌ", good: false }, { ar: "نَارٌ حَامِيَةٌ", good: false }], noun: "Tanween", letter: "Ba (ب)" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion.<br>Trouvez les cas d'Iqlab dans le texte." },

        {
            type: "immersion",
            prof: `Sourate Al-Humazah (4) ${IQ_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant <strong>Noun Sakina</strong> suivi de Ba.",
            totalIzhar: 1,
            targetName: "un Iqlab",
            words: [
                { t: "كَلَّا", ok: false },
                { t: "لَيُنۢبَذَنَّ", ok: true, noun: "Noun Sakina", letter: "Ba (ب)", endVerse: false, reason: "Iqlab : لَيُنۢ + ب = Layum-badhanna" },
                { t: "فِي", ok: false },
                { t: "ٱلْحُطَمَةِ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: `Sourate Al-Mulk (13) ${IQ_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant <strong>Tanween</strong> suivi de Ba.",
            totalIzhar: 1,
            targetName: "un Iqlab",
            words: [
                { t: "إِنَّهُۥ", ok: false },
                { t: "عَلِيمٌۢ", ok: true, noun: "Tanween", letter: "Ba (ب)", endVerse: false, reason: "Iqlab : عَلِيمٌۢ + ب = 'Alimum-bidhati" },
                { t: "بِذَاتِ", ok: false },
                { t: "ٱلصُّدُورِ", ok: false, endVerse: true }
            ]
        }
    ]
};
