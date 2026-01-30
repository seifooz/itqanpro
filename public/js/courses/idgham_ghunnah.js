const IG_HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#6c5ce7; color:white; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        💡 Aide : L'Algorithme
    </button>
    <div style="display:none; background:#fef9e7; border:1px solid #f1c40f; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>1.</strong> Je vois <strong>Noun (نْ) / Tanween (ــً)</strong> 🚨<br>
        <strong>2.</strong> Je regarde <strong>la lettre d'après</strong> 👀<br>
        <strong>3.</strong> C'est <strong>Y, N, M, W</strong> (ي ن م و) ?<br>
        ✅ <strong>OUI = IDGHAM BI-GHUNNAH</strong><br>
        (Je fusionne + Je nasalise 2 temps)
    </div>
</div>`;

const IDGHAM_GHUNNAH_DATA = {
    title: "IDGHAM BI-GHUNNAH",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---

        // 1. SCOPE
        {
            type: "lesson",
            prof: "Introduction.<br>Sur quoi porte la règle d'Idgham Bi-Ghunnah ?",
            html: `
            <div class="concept-card">
                <h3>Champ d'Application</h3>
                <p style="font-size:1rem; color:#2c3e50; margin-bottom:20px;">
                    Comme pour l'Izhar, cette règle s'applique spécifiquement au :
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
            prof: "Définition de l'Idgham Bi-Ghunnah.<br>Sens Linguistique et Technique.",
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
                <div style="background:#f9fbe7; padding:20px; border-radius:12px; border-left:5px solid #8bc34a; text-align:left;">
                    <h4 style="color:#2e7d32; margin-top:0; margin-bottom:10px;">2. Sens Technique</h4>
                    <p style="font-size:1.1rem; line-height:1.6; color:#2c3e50; font-weight:600;">
                        "C'est la fusion du Noun (ou Tanween) dans la lettre suivante, accompagnée d'une <strong>Ghunnah</strong> de 2 temps."
                    </p>
                    <p style="font-size:0.85rem; color:#555; margin-top:10px; font-style:italic;">
                        Le 'N' disparaît, mais son **son nasal** persiste et s'allonge.
                    </p>
                </div>

                <h3 style="margin-top:25px;">Écoutez la différence :</h3>
                
                <div style="display:flex; flex-direction:column; gap:15px;">
                    
                    <!-- Ex 1 : Noun + Ya -->
                    <div style="background:#fff; border:1px solid #eee; padding:15px; border-radius:10px;">
                        <div style="font-size:0.9rem; color:#666; margin-bottom:5px;">Exemple 1 : Noun + Ya (ي)</div>
                        <div class="ar-med" style="font-size:1.6rem; margin-bottom:10px;">مَن يَعْمَلْ</div>
                        
                        <div style="display:flex; gap:10px;">
                            <div class="btn-audio btn-listen" onclick="playAudio('idgham_gh_man_yamal', 0, 100, 'ex-def-1-ok')" style="flex:1; background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ✅</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#2e7d32;">Correct</div>
                                <div style="font-size:0.65rem; color:#555;">(May-ya'mal + 2s)</div>
                            </div>
                            <div class="btn-audio btn-listen" onclick="playAudio('idgham_gh_man_yamal_wrong', 0, 100, 'ex-def-1-ko')" style="flex:1; background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ❌</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#c62828;">Incorrect</div>
                                <div style="font-size:0.65rem; color:#555;">(Man Ya'mal - Sec)</div>
                            </div>
                        </div>
                    </div>

                    <!-- Ex 2 : Tanween + Waw -->
                    <div style="background:#fff; border:1px solid #eee; padding:15px; border-radius:10px;">
                        <div style="font-size:0.9rem; color:#666; margin-bottom:5px;">Exemple 2 : Tanween + Waw (و)</div>
                        <div class="ar-med" style="font-size:1.6rem; margin-bottom:10px;">غِشَٰوَةٌ وَلَهُمْ</div>
                        
                        <div style="display:flex; gap:10px;">
                            <div class="btn-audio btn-listen" onclick="playAudio('idgham_gh_ghishawatun', 0, 100, 'ex-def-2-ok')" style="flex:1; background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ✅</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#2e7d32;">Correct</div>
                                <div style="font-size:0.65rem; color:#555;">(Watuw-wa... + 2s)</div>
                            </div>
                            <div class="btn-audio btn-listen" onclick="playAudio('idgham_gh_ghishawatun_wrong', 0, 100, 'ex-def-2-ko')" style="flex:1; background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ❌</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#c62828;">Incorrect</div>
                                <div style="font-size:0.65rem; color:#555;">(tun wa... - Sec)</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`
        },

        // 3. LETTERS (YANMU)
        {
            type: "lesson",
            prof: "La Condition.<br>Quand applique-t-on l'Idgham Bi-Ghunnah ?",
            html: `<div class="concept-card">
                <div style="background:#ffebee; padding:15px; border-radius:10px; border-left:5px solid #d63031; margin-bottom:20px;">
                    <h4 style="margin:0; color:#d63031;">La Règle :</h4>
                    <p style="font-weight:bold; font-size:1.1rem; margin-top:5px;">
                        Noun Sakina / Tanween<br>+<br>Une lettre de "YANMU"
                    </p>
                </div>
                
                <div style="color:#555; font-size:0.9rem; margin-bottom:10px;">Les 4 Lettres (Moyen mnémotechnique) :</div>
                <div class="letters-grid" style="grid-template-columns:repeat(4, 1fr);">
                    <div class="l-card"><div class="l-ar">ي</div></div>
                    <div class="l-card"><div class="l-ar">ن</div></div>
                    <div class="l-card"><div class="l-ar">م</div></div>
                    <div class="l-card"><div class="l-ar">و</div></div>
                </div>
                <div style="margin-top:15px; font-weight:bold; color:#2c3e50; font-size:1.2rem;">
                    يَنْمُو
                </div>
                <div style="font-size:0.8rem; color:#888;">(Il grandit / Il croît)</div>
            </div>`
        },

        // Exemples Visuels
        {
            type: "lesson",
            prof: "Exemple 1 : Noun + Ya.<br>Visualisez la fusion.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">مَن يَقُولُ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ي</div><div class="mz-label green">YANMU</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div>
                ${IG_HELP_HTML}
                <div class="ex-logic">Le <strong>Noun (نْ)</strong> rencontre le <strong>Ya (ي)</strong>.<br>Il entre dedans et ça vibre 2 temps.<br><strong>"May-yaqool"</strong></div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2 : Tanween + Nun.<br>Fusion identique.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">يَوْمَئِذٍ نَّاعِمَةٌ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ن</div><div class="mz-label green">YANMU</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">ــٍ</div><div class="mz-label blue">Tanween</div></div></div></div>
                ${IG_HELP_HTML}
                <div class="ex-logic">Le <strong>Tanween (ــٍ)</strong> rencontre le <strong>Nun (ن)</strong>.<br>Fusion nasale : <strong>"Yawma-idhin-na'imah"</strong></div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 3 : Noun + Mim.<br>Nasalisation forte.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">مِن مَّسَدٍ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">م</div><div class="mz-label green">YANMU</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div>
                ${IG_HELP_HTML}
                <div class="ex-logic">Le <strong>Noun (نْ)</strong> rencontre le <strong>Mim (م)</strong>.<br>Vibration nasale intense : <strong>"Mim-masadin"</strong></div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 4 : Tanween + Waw.<br>Fusion ronde.",
            html: `
            <div class="concept-card">
                <div class="mz-container"><div class="mz-phrase">غِشَٰوَةٌ وَلَهُمْ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">و</div><div class="mz-label green">YANMU</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">ــٌ</div><div class="mz-label blue">Tanween</div></div></div></div>
                ${IG_HELP_HTML}
                <div class="ex-logic">Le <strong>Tanween (ــٌ)</strong> rencontre le <strong>Waw (و)</strong>.<br>Fusion nasale : <strong>"Ghishawa-tuw-walahum"</strong></div>
            </div>`
        },

        // Algorithme Global
        {
            type: "lesson",
            prof: "L'Algorithme Mental.<br>À retenir par cœur.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je vois <strong>Noun</strong> ou <strong>Tanween</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>Je regarde la lettre suivante.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">3</div><div>C'est <strong>Y, N, M, W</strong> ?</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">OUI ➡ <strong>IDGHAM BI-GHUNNAH</strong> (2 temps)</div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Entraînez-vous à l'Idgham avec les 4 lettres." },

        // WORKSHOP
        { type: "workshop", prof: `Lettre 1 : <strong>Ya (ي)</strong>. ${IG_HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مَن يَعْمَلْ", url: "idgham_gh_man_yamal", hint: "Expl: Noun + Ya (YANMU) -> Idgham BG" }, { type: "Tanween", ar: "وُجُوهٌ يَوْمَئِذٍ", url: "idgham_gh_wujoohun", hint: "Expl: Tanween + Ya (YANMU) -> Idgham BG" }] },
        { type: "workshop", prof: `Lettre 2 : <strong>Nun (ن)</strong>. ${IG_HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مِن نِّعْمَةٍ", url: "idgham_gh_min_nimatin", hint: "Expl: Noun + Nun (YANMU) -> Idgham BG" }, { type: "Tanween", ar: "يَوْمَئِذٍ نَّاعِمَةٌ", url: "idgham_gh_yawmaidhin", hint: "Expl: Tanween + Nun (YANMU) -> Idgham BG" }] },
        { type: "workshop", prof: `Lettre 3 : <strong>Mim (م)</strong>. ${IG_HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مِن مَّسَدٍ", url: "idgham_gh_mim_masadin", hint: "Expl: Noun + Mim (YANMU) -> Idgham BG" }, { type: "Tanween", ar: "جَزَآءً مِّن", url: "idgham_gh_jazaam", hint: "Expl: Tanween + Mim (YANMU) -> Idgham BG" }] },
        { type: "workshop", prof: `Lettre 4 : <strong>Waw (و)</strong>. ${IG_HELP_HTML}`, examples: [{ type: "Noun Sakina", ar: "مِن وَالٍ", url: "idgham_gh_miw_walin", hint: "Expl: Noun + Waw (YANMU) -> Idgham BG" }, { type: "Tanween", ar: "غِشَٰوَةٌ وَلَهُمْ", url: "idgham_gh_ghishawatun", hint: "Expl: Tanween + Waw (YANMU) -> Idgham BG" }] },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>Identifiez les règles Idgham Bi-Ghunnah." },

        { type: "exam_quiz", prof: `Question 1/8 ${IG_HELP_HTML}`, opts: [{ ar: "مَن يَقُولُ", good: true, reason: "Idgham BG : Noun + Ya" }, { ar: "مَنْ ءَامَنَ", good: false }, { ar: "أَنْعَمْتَ", good: false }], noun: "Noun Sakina", letter: "Ya (ي)" },
        { type: "exam_quiz", prof: `Question 2/8 ${IG_HELP_HTML}`, opts: [{ ar: "خَيْرًا يَرَهُۥ", good: true, reason: "Idgham BG : Tanween + Ya" }, { ar: "جُرُفٍ هَارٍ", good: false }, { ar: "عَلِيمًا حَكِيمًا", good: false }], noun: "Tanween", letter: "Ya (ي)" },

        { type: "exam_quiz", prof: `Question 3/8 ${IG_HELP_HTML}`, opts: [{ ar: "مِن نُّورٍ", good: true, reason: "Idgham BG : Noun + Nun" }, { ar: "مِنْ عِلْمٍ", good: false }, { ar: "أَنكَدَ", good: false }], noun: "Noun Sakina", letter: "Nun (ن)" },
        { type: "exam_quiz", prof: `Question 4/8 ${IG_HELP_HTML}`, opts: [{ ar: "شَيْءٍ نُّكُرٍ", good: true, reason: "Idgham BG : Tanween + Nun" }, { ar: "سَمِيعٌ عَلِيمٌ", good: false }, { ar: "كُفُوًا أَحَدٌ", good: false }], noun: "Tanween", letter: "Nun (ن)" },

        { type: "exam_quiz", prof: `Question 5/8 ${IG_HELP_HTML}`, opts: [{ ar: "مِن مَّالٍ", good: true, reason: "Idgham BG : Noun + Mim" }, { ar: "مِنْ خَوْفٍ", good: false }, { ar: "أَنعَمَ", good: false }], noun: "Noun Sakina", letter: "Mim (م)" },
        { type: "exam_quiz", prof: `Question 6/8 ${IG_HELP_HTML}`, opts: [{ ar: "قَوْلًا مَّعْرُوفًا", good: true, reason: "Idgham BG : Tanween + Mim" }, { ar: "عَذَابٌ أَلِيمٌ", good: false }, { ar: "حَاسِدٍ إِذَا", good: false }], noun: "Tanween", letter: "Mim (م)" },

        { type: "exam_quiz", prof: `Question 7/8 ${IG_HELP_HTML}`, opts: [{ ar: "مِن وَاقٍ", good: true, reason: "Idgham BG : Noun + Waw" }, { ar: "مِنْ هَادٍ", good: false }, { ar: "وَٱنْحَرْ", good: false }], noun: "Noun Sakina", letter: "Waw (و)" },
        { type: "exam_quiz", prof: `Question 8/8 ${IG_HELP_HTML}`, opts: [{ ar: "لَهَبٍ وَتَبَّ", good: true, reason: "Idgham BG : Tanween + Waw" }, { ar: "نَارًا حَامِيَةً", good: false }, { ar: "عَيْنٍ ءَانِيَةٍ", good: false }], noun: "Tanween", letter: "Waw (و)" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion.<br>Trouvez les Idghams dans le texte." },

        {
            type: "immersion",
            prof: `Sourate Az-Zalzalah (7-8) ${IG_HELP_HTML}`,
            instruction: "Cliquez sur les mots contenant <strong>Noun Sakina ou Tanween</strong> suivis d'une lettre YANMU.",
            totalIzhar: 2,
            words: [
                { t: "فَمَن", ok: true, noun: "Noun Sakina", letter: "Ya (ي)", endVerse: false, reason: "Idgham BG : مَنْ + ي = May-ya'mal" },
                { t: "يَعْمَلْ", ok: false },
                { t: "مِثْقَالَ", ok: false }, { t: "ذَرَّةٍ", ok: false },
                { t: "خَيْرًا", ok: true, noun: "Tanween", letter: "Ya (ي)", endVerse: false, reason: "Idgham BG : خَيْرًا + ي = Khayray-yarah" },
                { t: "يَرَهُۥ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: `Sourate An-Naba (13) ${IG_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant <strong>Tanween</strong> suivi d'une lettre YANMU.",
            totalIzhar: 1,
            words: [
                { t: "وَجَعَلْنَا", ok: false },
                { t: "سِرَاجًا", ok: true, noun: "Tanween", letter: "Waw (و)", endVerse: false, reason: "Idgham BG : سِرَاجًا + و = Sirajaw-wahhaja" },
                { t: "وَهَّاجًا", ok: false, endVerse: true }
            ]
        }
    ]
};
