const IDG_HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#6c5ce7; color:white; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        💡 Aide : L'Algorithme
    </button>
    <div style="display:none; background:#e8eaf6; border:1px solid #3f51b5; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>1.</strong> Je vois <strong>Mim Sakina (مْ)</strong> 🚨<br>
        <strong>2.</strong> Je regarde <strong>la lettre d'après</strong> 👀<br>
        <strong>3.</strong> C'est un <strong>Mim (م)</strong> ?<br>
        ✅ <strong>OUI = IDGHAM SHAFAWI</strong> (Fusion)<br>
        <div style="font-size:0.8rem; color:#555; margin-top:5px;">
        👉 Je ferme les lèvres. Ghunnah 2 temps.
        </div>
    </div>
</div>`;

const MIM_IDGHAM_DATA = {
    title: "IDGHAM SHAFAWI MASTERCLASS",
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
            prof: "Définition de l'Idgham.<br>Sens Linguistique et Technique.",
            html: `
            <div class="concept-card">
                
                <!-- SENS LINGUISTIQUE -->
                <div style="margin-bottom:25px;">
                    <h4 style="color:#6c5ce7; margin-bottom:10px;">1. Sens Linguistique</h4>
                    <div style="font-size:1.1rem; font-weight:bold; color:#2d3436; margin-bottom:5px;">"Al-Idkhal" (الإِدْخَال)</div>
                    <p style="font-size:0.95rem; color:#666; margin:0;">
                        Cela signifie : <strong>L'Introduction</strong> (Insérer une chose dans une autre).
                    </p>
                </div>

                <!-- SENS TECHNIQUE -->
                <div style="background:#e8eaf6; padding:20px; border-radius:12px; border-left:5px solid #3f51b5; text-align:left;">
                    <h4 style="color:#283593; margin-top:0; margin-bottom:10px;">2. Sens Technique</h4>
                    <p style="font-size:1.1rem; line-height:1.6; color:#2c3e50; font-weight:600;">
                        "C'est la rencontre d'un <strong>Mim Sakina</strong> avec un <strong>Mim voyellisé</strong>, de sorte qu'ils deviennent <strong>un seul Mim renforcé</strong> (avec Shaddah) et une <strong>Ghunnah</strong>."
                    </p>
                </div>

                <h3 style="margin-top:25px;">Écoutez la fusion :</h3>
                
                <div style="background:#e3f2fd; border:1px solid #bbdefb; padding:15px; border-radius:10px;">
                    <div class="ar-med" style="font-size:1.8rem; margin-bottom:10px;">لَهُم مَّا</div>
                    
                    <button class="btn-audio btn-listen" onclick="playAudio('mim_idgham_lahum_ma', 0, 100, 'ex-def-idg')" style="width:100%; background:#e8f5e9; border:1px solid #c8e6c9; padding:12px; border-radius:8px; cursor:pointer;">
                        <div style="font-size:1.2rem;">🔊 Écouter (Lahum-Ma)</div>
                        <div style="font-size:0.8rem; color:#2e7d32; margin-top:5px;">Notez la Ghunnah longue (2 temps)</div>
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
                        Mim Sakina (مْ)<br>+<br>Mim (م)
                    </p>
                </div>
                
                <h4 style="color:#444; margin-bottom:15px;">Le Couple "Jumeau" (Mutamathilayn)</h4>
                
                <div class="ex-logic" style="margin-bottom:0;">
                    Comme les deux lettres sont identiques et sortent du même endroit (les lèvres), la première fusionne totalement dans la seconde.
                </div>
            </div>`
        },

        // 4. ALGORITHME
        {
            type: "lesson",
            prof: "L'Algorithme Mental.<br>À retenir par cœur.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je vois <strong>Mim Sakina (مْ)</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>La lettre suivante est un <strong>Mim (م)</strong>?</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">OUI ➡ <strong>IDGHAM SHAFAWI</strong><br>Fusion + Ghunnah</div></div></div>`
        },

        // 5. EXEMPLES VISUELS
        {
            type: "lesson",
            prof: "Exemple 1.<br>Mim Sakina + Mim.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">لَهُم مَّا</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">م</div><div class="mz-label green">Mim</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">مْ</div><div class="mz-label blue">Mim</div></div></div></div>
                ${IDG_HELP_HTML}
                <div class="ex-logic">Le <strong>Mim Sakina</strong> rencontre un autre <strong>Mim</strong>.<br>Fusion totale + Ghunnah de 2 temps.</div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2.<br>Mim Sakina + Mim.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">أَطْعَمَهُم مِّن</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">م</div><div class="mz-label green">Mim</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">مْ</div><div class="mz-label blue">Mim</div></div></div></div>
                ${IDG_HELP_HTML}
                <div class="ex-logic">On prononce comme si c'était un seul Mim avec Shaddah :<br><strong>At'amahum-min</strong></div>
            </div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Écoutez et Répétez." },

        {
            type: "workshop", prof: `Entraînement <strong>Idgham Shafawi</strong>. ${IDG_HELP_HTML}`, examples: [
                { type: "Mim + Mim", ar: "لَهُم مَّا", url: "mim_idgham_lahum_ma", hint: "✅ Ghunnah 2 temps" },
                { type: "Mim + Mim", ar: "أَطْعَمَهُم مِّن", url: "mim_idgham_at'amahum_min", hint: "✅ Ghunnah 2 temps" },
                { type: "Mim + Mim", ar: "عَلَيْهِم مُّؤْصَدَةٌ", url: "mim_idgham_alayhim_mu'sadah", hint: "✅ Ghunnah 2 temps" }
            ]
        },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>Identifiez l'Idgham Shafawi." },

        // Quiz
        { type: "exam_quiz", prof: `Question 1/8 ${IDG_HELP_HTML}`, opts: [{ ar: "لَكُمْ دِينُكُمْ", good: false }, { ar: "لَهُم مَّا", good: true, reason: "Idgham Shafawi : Mim + Mim" }, { ar: "أَنَّهُمْ", good: false }], noun: "Mim Sakina", letter: "Mim (م)" },
        { type: "exam_quiz", prof: `Question 2/8 ${IDG_HELP_HTML}`, opts: [{ ar: "أَلَمْ نَشْرَحْ", good: false }, { ar: "هُمْ فِيهَا", good: false }, { ar: "أَطْعَمَهُم مِّن", good: true, reason: "Idgham Shafawi : Mim + Mim" }], noun: "Mim Sakina", letter: "Mim (م)" },
        { type: "exam_quiz", prof: `Question 3/8 ${IDG_HELP_HTML}`, opts: [{ ar: "عَلَيْهِم مُّؤْصَدَةٌ", good: true, reason: "Idgham Shafawi : Mim + Mim" }, { ar: "عَلَيْهِمْ وَلَا", good: false }, { ar: "أَلَمْ تَرَ", good: false }], noun: "Mim Sakina", letter: "Mim (م)" },
        { type: "exam_quiz", prof: `Question 4/8 ${IDG_HELP_HTML}`, opts: [{ ar: "كُنتُمْ خَيْرَ", good: false }, { ar: "كُنتُم مَّرْضَىٰ", good: true, reason: "Idgham Shafawi : Mim + Mim" }, { ar: "أَمْ لَمْ", good: false }], noun: "Mim Sakina", letter: "Mim (م)" },
        { type: "exam_quiz", prof: `Question 5/8 ${IDG_HELP_HTML}`, opts: [{ ar: "مِنْهُمْ", good: false }, { ar: "وَمِنْهُم مَّن", good: true, reason: "Idgham Shafawi : Mim + Mim" }, { ar: "عَنْهُمْ", good: false }], noun: "Mim Sakina", letter: "Mim (م)" },
        { type: "exam_quiz", prof: `Question 6/8 ${IDG_HELP_HTML}`, opts: [{ ar: "إِنَّهُمْ كَانُوا۟", good: false }, { ar: "فَإِنَّهُمْ", good: false }, { ar: "إِنَّهُم مُّلَٰقُوا۟", good: true, reason: "Idgham Shafawi : Mim + Mim" }], noun: "Mim Sakina", letter: "Mim (م)" },
        { type: "exam_quiz", prof: `Question 7/8 ${IDG_HELP_HTML}`, opts: [{ ar: "أَمْ مَنْ", good: true, reason: "Idgham Shafawi : Mim + Mim" }, { ar: "أَمْ لَمْ", good: false }, { ar: "أَمْ حَسِبْتُمْ", good: false }], noun: "Mim Sakina", letter: "Mim (م)" },
        { type: "exam_quiz", prof: `Question 8/8 ${IDG_HELP_HTML}`, opts: [{ ar: "كَمْ أَهْلَكْنَا", good: false }, { ar: "لَكُمْ دِينُكُمْ", good: false }, { ar: "كَم مِّن فِئَةٍ", good: true, reason: "Idgham Shafawi : Mim + Mim" }], noun: "Mim Sakina", letter: "Mim (م)" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion.<br>Trouvez l'Idgham Shafawi dans le verset." },

        {
            type: "immersion",
            prof: `Sourate Al-Humazah (8) ${IDG_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant l'<strong>Idgham Shafawi</strong>.",
            totalIzhar: 1,
            targetName: "un Idgham Shafawi",
            words: [
                { t: "إِنَّهَا", ok: false },
                { t: "عَلَيْهِم", ok: true, noun: "Mim Sakina", letter: "Mim (م)", endVerse: false, reason: "Mim Sakina + Mim = Idgham Shafawi ✅" },
                { t: "مُّؤْصَدَةٌ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: `Sourate Quraish (4) ${IDG_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant l'<strong>Idgham Shafawi</strong>.",
            totalIzhar: 1,
            targetName: "un Idgham Shafawi",
            words: [
                { t: "ٱلَّذِيٓ", ok: false },
                { t: "أَطْعَمَهُم", ok: true, noun: "Mim Sakina", letter: "Mim (م)", endVerse: false, reason: "Mim Sakina + Mim = Idgham Shafawi ✅" },
                { t: "مِّن", ok: false }, { t: "جُوعٍ", ok: false, endVerse: true }
            ]
        }
    ]
};
