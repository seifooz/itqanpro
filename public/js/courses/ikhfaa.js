const IKH_HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#6c5ce7; color:white; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        💡 Aide : L'Algorithme
    </button>
    <div style="display:none; background:#fef9e7; border:1px solid #f1c40f; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>1.</strong> Je vois <strong>Noun (نْ) / Tanween (ــً)</strong> 🚨<br>
        <strong>2.</strong> Je regarde <strong>la lettre d'après</strong> 👀<br>
        <strong>3.</strong> C'est une des <strong>15 lettres</strong> ? (Pas Gorge, pas YANMU, pas LR, pas Ba)<br>
        ✅ <strong>OUI = IKHFAA</strong> + Ghunnah 2 temps<br>
        <strong>4.</strong> Lettre <span style="color:#e53935;">Emphatique</span> (ص ض ط ظ ق) ? → <strong>Mufakhkhama</strong><br>
        <strong>4.</strong> Lettre <span style="color:#2196f3;">Fine</span> (ت ث ج د ذ ز س ش ف ك) ? → <strong>Muraqqaqa</strong>
    </div>
</div>`;

const IKHFAA_DATA = {
    title: "AL-IKHFAA MASTERCLASS",
    mode: "PRO MODE",
    steps: [
        // --- PARTIE 1 : THÉORIE ---

        // 1. SCOPE
        {
            type: "lesson",
            prof: "Introduction.<br>Sur quoi porte la règle de l'Ikhfaa ?",
            html: `
            <div class="concept-card">
                <h3>Champ d'Application</h3>
                <p style="font-size:1rem; color:#2c3e50; margin-bottom:20px;">
                    Comme les autres règles, celle-ci s'applique au :
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
            prof: "Définition de l'Ikhfaa.<br>Sens Linguistique et Technique.",
            html: `
            <div class="concept-card">
                
                <!-- SENS LINGUISTIQUE -->
                <div style="margin-bottom:25px;">
                    <h4 style="color:#6c5ce7; margin-bottom:10px;">1. Sens Linguistique</h4>
                    <div style="font-size:1.1rem; font-weight:bold; color:#2d3436; margin-bottom:5px;">"Al-Istitaar" (الاِسْتِتَار)</div>
                    <p style="font-size:0.95rem; color:#666; margin:0;">
                        Cela signifie : <strong>La Dissimulation</strong> (Cacher quelque chose).
                    </p>
                </div>

                <!-- SENS TECHNIQUE -->
                <div style="background:#fff3e0; padding:20px; border-radius:12px; border-left:5px solid #ff9800; text-align:left;">
                    <h4 style="color:#e65100; margin-top:0; margin-bottom:10px;">2. Sens Technique</h4>
                    <p style="font-size:1.1rem; line-height:1.6; color:#2c3e50; font-weight:600;">
                        "C'est prononcer le Noun de manière <strong>cachée</strong>, entre l'Izhar et l'Idgham, avec <strong>Ghunnah</strong> de 2 temps."
                    </p>
                    <p style="font-size:0.85rem; color:#555; margin-top:10px; font-style:italic;">
                        La langue ne touche pas le palais. On prépare la bouche pour la lettre suivante.
                    </p>
                </div>

                <h3 style="margin-top:25px;">Écoutez la différence :</h3>
                
                <div style="display:flex; flex-direction:column; gap:15px;">
                    
                    <!-- Ex 1 : Muraqqaqa -->
                    <div style="background:#e3f2fd; border:1px solid #bbdefb; padding:15px; border-radius:10px;">
                        <div style="font-size:0.9rem; color:#1976d2; margin-bottom:5px; font-weight:bold;">Exemple 1 : Ikhfaa MURAQQAQA (Fin)</div>
                        <div class="ar-med" style="font-size:1.6rem; margin-bottom:10px;">مِن شَرِّ</div>
                        
                        <div style="display:flex; gap:10px;">
                            <div class="btn-audio btn-listen" onclick="playAudio('ikhfaa_min_sharri', 0, 100, 'ex-def-1-ok')" style="flex:1; background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ✅</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#2e7d32;">Correct</div>
                                <div style="font-size:0.65rem; color:#555;">(Ghunna fine)</div>
                            </div>
                            <div class="btn-audio btn-listen" onclick="playAudio('ikhfaa_min_sharri_wrong', 0, 100, 'ex-def-1-ko')" style="flex:1; background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ❌</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#c62828;">Incorrect</div>
                                <div style="font-size:0.65rem; color:#555;">(Min Sharri - clair)</div>
                            </div>
                        </div>
                    </div>

                    <!-- Ex 2 : Mufakhkhama -->
                    <div style="background:#ffebee; border:1px solid #ffcdd2; padding:15px; border-radius:10px;">
                        <div style="font-size:0.9rem; color:#c62828; margin-bottom:5px; font-weight:bold;">Exemple 2 : Ikhfaa MUFAKHKHAMA (Épais)</div>
                        <div class="ar-med" style="font-size:1.6rem; margin-bottom:10px;">مِن قَبْلِ</div>
                        
                        <div style="display:flex; gap:10px;">
                            <div class="btn-audio btn-listen" onclick="playAudio('ikhfaa_min_qabli', 0, 100, 'ex-def-2-ok')" style="flex:1; background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ✅</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#2e7d32;">Correct</div>
                                <div style="font-size:0.65rem; color:#555;">(Ghunna épaisse)</div>
                            </div>
                            <div class="btn-audio btn-listen" onclick="playAudio('ikhfaa_min_qabli_wrong', 0, 100, 'ex-def-2-ko')" style="flex:1; background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px; display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                                <div style="font-size:1.2rem;">🔊 ❌</div>
                                <div style="font-size:0.75rem; font-weight:bold; color:#c62828;">Incorrect</div>
                                <div style="font-size:0.65rem; color:#555;">(Min Qabli - clair)</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`
        },

        // 3. LETTERS (15)
        {
            type: "lesson",
            prof: "La Condition.<br>Quand applique-t-on l'Ikhfaa ?",
            html: `<div class="concept-card">
                <div style="background:#fff3e0; padding:15px; border-radius:10px; border-left:5px solid #ff9800; margin-bottom:20px;">
                    <h4 style="margin:0; color:#e65100;">La Règle :</h4>
                    <p style="font-weight:bold; font-size:1.1rem; margin-top:5px;">
                        Noun Sakina / Tanween<br>+<br>Une des 15 Lettres
                    </p>
                </div>
                
                <div style="color:#555; font-size:0.9rem; margin-bottom:10px;">Les 15 Lettres de l'Ikhfaa :</div>
<div style="color:#777; font-size:0.85rem; margin-bottom:10px;">
  Vous n'avez pas besoin de mémoriser toutes les lettres de l'Ikhfaa. Mémorisez simplement les lettres des règles Izhar, Idgham et Iqlab ; les lettres d'Ikhfaa sont simplement le reste.
</div>
                <div class="letters-grid" style="grid-template-columns:repeat(5, 1fr); gap:8px;">
                    <div class="l-card"><div class="l-ar">ص</div></div><div class="l-card"><div class="l-ar">ذ</div></div><div class="l-card"><div class="l-ar">ث</div></div><div class="l-card"><div class="l-ar">ك</div></div><div class="l-card"><div class="l-ar">ج</div></div>
                    <div class="l-card"><div class="l-ar">ش</div></div><div class="l-card"><div class="l-ar">ق</div></div><div class="l-card"><div class="l-ar">س</div></div><div class="l-card"><div class="l-ar">د</div></div><div class="l-card"><div class="l-ar">ط</div></div>
                    <div class="l-card"><div class="l-ar">ز</div></div><div class="l-card"><div class="l-ar">ف</div></div><div class="l-card"><div class="l-ar">ت</div></div><div class="l-card"><div class="l-ar">ض</div></div><div class="l-card"><div class="l-ar">ظ</div></div>
                </div>
                <div style="margin-top:15px; font-size:0.85rem; color:#666; background:#f5f5f5; padding:10px; border-radius:8px;">
                    <strong>Moyen Mnémotechnique :</strong><br>
                    <em style="color:#0984e3;">"Sif Dha Sana Kam Jada Shakhsun Qad Sama... Dum Tayyiban Zid Fi Tuqan Da' Dhalima"</em>
                </div>
            </div>`
        },

        // 4. MURAQQAQA vs MUFAKHKHAMA - CRITICAL SECTION
        {
            type: "lesson",
            prof: "TRÈS IMPORTANT.<br>Deux types de Ghunnah.",
            html: `<div class="concept-card">
                <h3 style="color:#d63031; margin-bottom:20px;">⚠️ Distinction Cruciale</h3>
                
                <div style="display:flex; flex-direction:column; gap:20px;">
                    
                    <!-- MURAQQAQA -->
                    <div style="background:#e3f2fd; padding:20px; border-radius:12px; border:2px solid #2196f3;">
                        <h4 style="color:#1976d2; margin:0 0 10px 0;">🔵 Ikhfaa MURAQQAQA (مُرَقَّقَة)</h4>
                        <div style="font-size:1rem; font-weight:bold; margin-bottom:10px;">= Ghunnah FINE (légère)</div>
                        <div style="font-size:0.9rem; color:#555; margin-bottom:10px;">
                            <strong>Quand ?</strong> Avec les lettres <strong>fines</strong> (Tarqiq) :
                        </div>
                        <div class="letters-grid" style="grid-template-columns:repeat(5, 1fr); gap:5px; font-size:0.9rem;">
                            <div class="l-card" style="padding:8px;"><div class="l-ar" style="font-size:1.2rem;">ت</div></div>
                            <div class="l-card" style="padding:8px;"><div class="l-ar" style="font-size:1.2rem;">ث</div></div>
                            <div class="l-card" style="padding:8px;"><div class="l-ar" style="font-size:1.2rem;">ج</div></div>
                            <div class="l-card" style="padding:8px;"><div class="l-ar" style="font-size:1.2rem;">د</div></div>
                            <div class="l-card" style="padding:8px;"><div class="l-ar" style="font-size:1.2rem;">ذ</div></div>
                            <div class="l-card" style="padding:8px;"><div class="l-ar" style="font-size:1.2rem;">ز</div></div>
                            <div class="l-card" style="padding:8px;"><div class="l-ar" style="font-size:1.2rem;">س</div></div>
                            <div class="l-card" style="padding:8px;"><div class="l-ar" style="font-size:1.2rem;">ش</div></div>
                            <div class="l-card" style="padding:8px;"><div class="l-ar" style="font-size:1.2rem;">ف</div></div>
                            <div class="l-card" style="padding:8px;"><div class="l-ar" style="font-size:1.2rem;">ك</div></div>
                        </div>
                        <div style="font-size:0.85rem; color:#666; margin-top:10px; font-style:italic;">
                            👄 Bouche en "sourire", son léger.
                        </div>
                    </div>

                    <!-- MUFAKHKHAMA -->
                    <div style="background:#ffebee; padding:20px; border-radius:12px; border:2px solid #e53935;">
                        <h4 style="color:#c62828; margin:0 0 10px 0;">🔴 Ikhfaa MUFAKHKHAMA (مُفَخَّمَة)</h4>
                        <div style="font-size:1rem; font-weight:bold; margin-bottom:10px;">= Ghunnah ÉPAISSE (lourde)</div>
                        <div style="font-size:0.9rem; color:#555; margin-bottom:10px;">
                            <strong>Quand ?</strong> Avec les lettres <strong>emphatiques</strong> (Tafkhim) :
                        </div>
                        <div class="letters-grid" style="grid-template-columns:repeat(5, 1fr); gap:5px; font-size:0.9rem;">
                            <div class="l-card" style="padding:8px; background:#ffcdd2;"><div class="l-ar" style="font-size:1.2rem; color:#c62828;">ص</div></div>
                            <div class="l-card" style="padding:8px; background:#ffcdd2;"><div class="l-ar" style="font-size:1.2rem; color:#c62828;">ض</div></div>
                            <div class="l-card" style="padding:8px; background:#ffcdd2;"><div class="l-ar" style="font-size:1.2rem; color:#c62828;">ط</div></div>
                            <div class="l-card" style="padding:8px; background:#ffcdd2;"><div class="l-ar" style="font-size:1.2rem; color:#c62828;">ظ</div></div>
                            <div class="l-card" style="padding:8px; background:#ffcdd2;"><div class="l-ar" style="font-size:1.2rem; color:#c62828;">ق</div></div>
                        </div>
                        <div style="font-size:0.85rem; color:#666; margin-top:10px; font-style:italic;">
                            👄 Bouche arrondie, son "gonflé".
                        </div>
                    </div>
                    
                </div>
            </div>`
        },

        // Exemples Visuels - MURAQQAQA
        {
            type: "lesson",
            prof: "Exemple 1 : Ikhfaa Muraqqaqa.<br>Ghunnah Fine (ش).",
            html: `
            <div class="concept-card">
                <div style="background:#e3f2fd; padding:10px; border-radius:8px; margin-bottom:15px; text-align:center;">
                    <span style="color:#1976d2; font-weight:bold;">🔵 MURAQQAQA (Fine)</span>
                </div>
                <div class="mz-container"><div class="mz-phrase">مِن شَرِّ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ش</div><div class="mz-label green">Fine</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div>
                ${IKH_HELP_HTML}
                <div class="ex-logic">Le <strong>Noun (نْ)</strong> rencontre le <strong>Shin (ش)</strong> (lettre fine).<br>Ikhfaa avec <strong>Ghunnah légère</strong>.</div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 2 : Ikhfaa Muraqqaqa.<br>Ghunnah Fine (ف).",
            html: `
            <div class="concept-card">
                <div style="background:#e3f2fd; padding:10px; border-radius:8px; margin-bottom:15px; text-align:center;">
                    <span style="color:#1976d2; font-weight:bold;">🔵 MURAQQAQA (Fine)</span>
                </div>
                <div class="mz-container"><div class="mz-phrase">أَنفُسَهُمْ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box mz-green">ف</div><div class="mz-label green">Fine</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div>
                ${IKH_HELP_HTML}
                <div class="ex-logic">Le <strong>Noun (نْ)</strong> rencontre le <strong>Fa (ف)</strong> (lettre fine).<br>Ikhfaa avec <strong>Ghunnah légère</strong>.</div>
            </div>`
        },
        // Exemples Visuels - MUFAKHKHAMA
        {
            type: "lesson",
            prof: "Exemple 3 : Ikhfaa Mufakhkhama.<br>Ghunnah Épaisse (ق).",
            html: `
            <div class="concept-card">
                <div style="background:#ffebee; padding:10px; border-radius:8px; margin-bottom:15px; text-align:center;">
                    <span style="color:#c62828; font-weight:bold;">🔴 MUFAKHKHAMA (Épaisse)</span>
                </div>
                <div class="mz-container"><div class="mz-phrase">مِن قَبْلِ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box" style="background:#ffcdd2; color:#c62828;">ق</div><div class="mz-label" style="color:#c62828;">Épaisse</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div>
                ${IKH_HELP_HTML}
                <div class="ex-logic">Le <strong>Noun (نْ)</strong> rencontre le <strong>Qaf (ق)</strong> (lettre emphatique).<br>Ikhfaa avec <strong>Ghunnah épaisse/gonflée</strong>.</div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Exemple 4 : Ikhfaa Mufakhkhama.<br>Ghunnah Épaisse (ط).",
            html: `
            <div class="concept-card">
                <div style="background:#ffebee; padding:10px; border-radius:8px; margin-bottom:15px; text-align:center;">
                    <span style="color:#c62828; font-weight:bold;">🔴 MUFAKHKHAMA (Épaisse)</span>
                </div>
                <div class="mz-container"><div class="mz-phrase">عَن طَبَقٍ</div><div class="mz-analysis"><div class="mz-group"><div class="mz-box" style="background:#ffcdd2; color:#c62828;">ط</div><div class="mz-label" style="color:#c62828;">Épaisse</div></div><div class="mz-icon">+</div><div class="mz-group"><div class="mz-box mz-blue">نْ</div><div class="mz-label blue">Noun</div></div></div></div>
                ${IKH_HELP_HTML}
                <div class="ex-logic">Le <strong>Noun (نْ)</strong> rencontre le <strong>Ta (ط)</strong> (lettre emphatique).<br>Ikhfaa avec <strong>Ghunnah épaisse/gonflée</strong>.</div>
            </div>`
        },

        // Algorithme
        {
            type: "lesson",
            prof: "L'Algorithme Mental.<br>À retenir par cœur.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Je vois <strong>Noun</strong> ou <strong>Tanween</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div>C'est une des <strong>15 lettres</strong> ?</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">3</div><div>OUI ➡ <strong>IKHFAA</strong> + Ghunnah 2 temps</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">Lettre Emphatique (ص ض ط ظ ق) ? → <strong>Mufakhkhama</strong><br>Sinon → <strong>Muraqqaqa</strong></div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Atelier Pratique.<br>Entraînez-vous à l'Ikhfaa avec les deux types." },

        // WORKSHOP - Muraqqaqa
        {
            type: "workshop", prof: `Groupe 1 : <strong>Muraqqaqa (Fine)</strong>. ${IKH_HELP_HTML}`, examples: [
                { type: "Noun + Shin (Muraqqaqa)", ar: "مِن شَرِّ", url: "ikhfaa_min_sharri", hint: "🔵 Ghunnah fine" },
                { type: "Noun + Fa (Muraqqaqa)", ar: "أَنفُسَهُمْ", url: "ikhfaa_anfusahum", hint: "🔵 Ghunnah fine" },
                { type: "Noun + Sin (Muraqqaqa)", ar: "إِنسَٰن", url: "ikhfaa_insan", hint: "🔵 Ghunnah fine" }
            ]
        },
        // WORKSHOP - Mufakhkhama
        {
            type: "workshop", prof: `Groupe 2 : <strong>Mufakhkhama (Épaisse)</strong>. ${IKH_HELP_HTML}`, examples: [
                { type: "Noun + Qaf (Mufakhkhama)", ar: "مِن قَبْلِ", url: "ikhfaa_min_qabli", hint: "🔴 Ghunnah épaisse" },
                { type: "Noun + Ta (Mufakhkhama)", ar: "عَن طَبَقٍ", url: "ikhfaa_an_tabaq", hint: "🔴 Ghunnah épaisse" },
                { type: "Tanween + Sad (Mufakhkhama)", ar: "رِيحًا صَرْصَرًا", url: "ikhfaa_rihan_sarsara", hint: "🔴 Ghunnah épaisse" }
            ]
        },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Examen Final.<br>Identifiez l'Ikhfaa ET son type." },

        // Quiz - Muraqqaqa
        { type: "exam_quiz", prof: `Question 1/10 - Muraqqaqa ${IKH_HELP_HTML}`, opts: [{ ar: "مِن مَّالٍ", good: false }, { ar: "مِن شَرِّ", good: true, reason: "Ikhfaa Muraqqaqa : Noun + Shin (fine)" }, { ar: "مِنْ خَوْفٍ", good: false }], noun: "Noun Sakina", letter: "Shin (ش) - Muraqqaqa 🔵" },
        { type: "exam_quiz", prof: `Question 2/10 - Muraqqaqa ${IKH_HELP_HTML}`, opts: [{ ar: "يَنْهَوْنَ", good: false }, { ar: "إِنسَٰن", good: true, reason: "Ikhfaa Muraqqaqa : Noun + Sin (fine)" }, { ar: "نَارٌ حَامِيَةٌ", good: false }], noun: "Noun Sakina", letter: "Sin (س) - Muraqqaqa 🔵" },
        { type: "exam_quiz", prof: `Question 3/10 - Muraqqaqa ${IKH_HELP_HTML}`, opts: [{ ar: "خَيْرًا يَرَهُ", good: false }, { ar: "يَتِيمًا ذَا", good: true, reason: "Ikhfaa Muraqqaqa : Tanween + Dhal (fine)" }, { ar: "كُفُوًا أَحَدٌ", good: false }], noun: "Tanween", letter: "Dhal (ذ) - Muraqqaqa 🔵" },
        { type: "exam_quiz", prof: `Question 4/10 - Muraqqaqa ${IKH_HELP_HTML}`, opts: [{ ar: "وَلَآ أَنتُمْ", good: true, reason: "Ikhfaa Muraqqaqa : Noun + Ta (fine)" }, { ar: "سَمِيعٌ عَلِيمٌ", good: false }, { ar: "غَفُورٌ رَّحِيمٌ", good: false }], noun: "Noun Sakina", letter: "Ta (ت) - Muraqqaqa 🔵" },
        { type: "exam_quiz", prof: `Question 5/10 - Muraqqaqa ${IKH_HELP_HTML}`, opts: [{ ar: "مِن نُّورٍ", good: false }, { ar: "مِن ثَمَرَٰتٍ", good: true, reason: "Ikhfaa Muraqqaqa : Noun + Tha (fine)" }, { ar: "مَن يَقُولُ", good: false }], noun: "Noun Sakina", letter: "Tha (ث) - Muraqqaqa 🔵" },

        // Quiz - Mufakhkhama
        { type: "exam_quiz", prof: `Question 6/10 - Mufakhkhama ${IKH_HELP_HTML}`, opts: [{ ar: "أَنعَمْتَ", good: false }, { ar: "مِن قَبْلِ", good: true, reason: "Ikhfaa Mufakhkhama : Noun + Qaf (épaisse)" }, { ar: "قَوْلًا مَّعْرُوفًا", good: false }], noun: "Noun Sakina", letter: "Qaf (ق) - Mufakhkhama 🔴" },
        { type: "exam_quiz", prof: `Question 7/10 - Mufakhkhama ${IKH_HELP_HTML}`, opts: [{ ar: "عَذَابٌ أَلِيمٌ", good: false }, { ar: "رِيحًا صَرْصَرًا", good: true, reason: "Ikhfaa Mufakhkhama : Tanween + Sad (épaisse)" }, { ar: "هُدًى لِّلْمُتَّقِينَ", good: false }], noun: "Tanween", letter: "Sad (ص) - Mufakhkhama 🔴" },
        { type: "exam_quiz", prof: `Question 8/10 - Mufakhkhama ${IKH_HELP_HTML}`, opts: [{ ar: "كِرَامٍ بَرَرَةٍ", good: false }, { ar: "عَن طَبَقٍ", good: true, reason: "Ikhfaa Mufakhkhama : Noun + Ta (épaisse)" }, { ar: "مُّطَهَّرَةٍ", good: false }], noun: "Noun Sakina", letter: "Ta (ط) - Mufakhkhama 🔴" },
        { type: "exam_quiz", prof: `Question 9/10 - Mufakhkhama ${IKH_HELP_HTML}`, opts: [{ ar: "مَنصُورًا", good: true, reason: "Ikhfaa Mufakhkhama : Noun + Sad (épaisse)" }, { ar: "قَوْلًا مَّعْرُوفًا", good: false }, { ar: "أَنعَمْتَ", good: false }], noun: "Noun Sakina", letter: "Sad (ص) - Mufakhkhama 🔴" },
        { type: "exam_quiz", prof: `Question 10/10 - Mufakhkhama ${IKH_HELP_HTML}`, opts: [{ ar: "مِن وَالٍ", good: false }, { ar: "مِن ظَلَمَ", good: true, reason: "Ikhfaa Mufakhkhama : Noun + Dha (épaisse)" }, { ar: "أَنفُسَهُمْ", good: false }], noun: "Noun Sakina", letter: "Dha (ظ) - Mufakhkhama 🔴" },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Immersion.<br>Identifiez l'Ikhfaa ET son type." },

        {
            type: "immersion",
            prof: `Sourate Al-Falaq (2) ${IKH_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant l'Ikhfaa. <strong>Quel type ?</strong>",
            totalIzhar: 1,
            targetName: "un Ikhfaa",
            words: [
                { t: "مِن", ok: true, noun: "Noun Sakina", letter: "Shin (ش)", endVerse: false, reason: "Ikhfaa MURAQQAQA 🔵 : مِنْ + ش = Ghunnah fine" },
                { t: "شَرِّ", ok: false },
                { t: "مَا", ok: false }, { t: "خَلَقَ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: `Sourate Al-Kafirun (3) ${IKH_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant l'Ikhfaa. <strong>Quel type ?</strong>",
            totalIzhar: 1,
            targetName: "un Ikhfaa",
            words: [
                { t: "وَلَآ", ok: false },
                { t: "أَنتُمْ", ok: true, noun: "Noun Sakina", letter: "Ta (ت)", endVerse: false, reason: "Ikhfaa MURAQQAQA 🔵 : أَنْ + ت = Ghunnah fine" },
                { t: "عَٰبِدُونَ", ok: false }, { t: "مَآ", ok: false }, { t: "أَعْبُدُ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: `Sourate Al-Inshiqaq (19) ${IKH_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant l'Ikhfaa. <strong>Quel type ?</strong>",
            totalIzhar: 1,
            targetName: "un Ikhfaa",
            words: [
                { t: "لَتَرْكَبُنَّ", ok: false },
                { t: "طَبَقًا", ok: true, noun: "Tanween", letter: "Ain (?)", endVerse: false, reason: "Attention: Le contexte complet du verset doit être vérifié" },
                { t: "عَن", ok: true, noun: "Noun Sakina", letter: "Ta (ط)", endVerse: false, reason: "Ikhfaa MUFAKHKHAMA 🔴 : عَنْ + ط = Ghunnah épaisse" },
                { t: "طَبَقٍ", ok: false, endVerse: true }
            ]
        },
        {
            type: "immersion",
            prof: `Sourate Al-Qalam (1) ${IKH_HELP_HTML}`,
            instruction: "Cliquez sur le mot contenant l'Ikhfaa. <strong>Mufakhkhama car Qaf !</strong>",
            totalIzhar: 1,
            targetName: "un Ikhfaa",
            words: [
                { t: "ن", ok: false },
                { t: "وَٱلْقَلَمِ", ok: false },
                { t: "وَمَا", ok: false },
                { t: "يَسْطُرُونَ", ok: false, endVerse: true }
            ]
        }
    ]
};
