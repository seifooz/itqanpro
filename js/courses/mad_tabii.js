const MAD_TABII_DATA = {
    id: "mad_tabii",
    title: "AL-MAD AT-TABI'I",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Bienvenue. Commençons par la base absolue : Le **Mad Tabi'i** (Naturel).<br>Pour bien le comprendre, il faut connaître sa définition précise.",
            html: `
            <div class="concept-card">
                <h3>Définition Technique</h3>
                <p>C'est tout Mad qui respecte deux conditions négatives :</p>
                <ul style="text-align:left; margin:15px; list-style-type:none; background:#e0f7fa; padding:15px; border-radius:10px; border:2px solid #00acc1;">
                    <li>1. <strong>Ni précédé</strong> d'une Hamza (ء).</li>
                    <li>2. <strong>Ni suivi</strong> d'une Hamza (ء) ou d'un Soukoun (°) (Original ou dû à l'arrêt).</li>
                </ul>
                <p>Si ces conditions sont remplies, la lettre reste dans son état <strong>Naturel</strong>.</p>
                <div class="tip-box">
                    <strong>Durée :</strong> 2 Harakat (Temps).<br>
                    C'est le temps nécessaire pour prononcer deux lettres voyellées.
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Pourquoi cette définition ? C'est par élimination !",
            html: `
            <div class="concept-card">
                <h3>La Logique de l'Élimination</h3>
                <p>Le Mad Tabi'i est le Mad "par défaut".</p>
                <div style="text-align:left; margin-top:15px; font-size:0.9rem;">
                    <div style="margin-bottom:10px;">❌ <strong>Si Hamza Avant ?</strong> <br>➡️ Ce serait un <em>Mad Badal</em> (Ex: Aamana).</div>
                    <div style="margin-bottom:10px;">❌ <strong>Si Hamza Après ?</strong> <br>➡️ Ce serait un <em>Mad Muttasil</em> ou <em>Munfasil</em>.</div>
                    <div style="margin-bottom:10px;">❌ <strong>Si Soukoun Après ?</strong> <br>➡️ Ce serait un <em>Mad Lazim</em> ou <em>Arid</em>.</div>
                </div>
                <div style="margin-top:15px; padding:10px; background:#e8f5e9; border:1px solid #4caf50; border-radius:5px; text-align:center; color:#2e7d32; font-weight:bold;">
                    Pas de Hamza, Pas de Sukun = Mad Tabi'i ✅
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Les lettres du Mad sont trois (les sœurs 'Way'), et elles ont des conditions strictes.",
            html: `
            <div class="concept-card">
                <h3>Les 3 Lettres et leurs Conditions</h3>
                <div style="display:flex; justify-content:space-around; margin:20px 0;">
                    <div class="letter-box" style="background:#fff; border-color:#00acc1;">
                        <div class="ar-big" style="color:#00838f;">ا</div>
                        <div>Alif</div>
                    </div>
                    <div class="letter-box" style="background:#fff; border-color:#00acc1;">
                        <div class="ar-big" style="color:#00838f;">و</div>
                        <div>Wow</div>
                    </div>
                    <div class="letter-box" style="background:#fff; border-color:#00acc1;">
                        <div class="ar-big" style="color:#00838f;">ي</div>
                        <div>Ya</div>
                    </div>
                </div>
                
                <div style="display:flex; flex-direction:column; gap:10px;">
                    <div style="background:#fff; padding:10px; border-radius:8px; border-left:4px solid #F44336;">
                        <strong>1. L'Alif (ا) :</strong> Toujours Sakin, précédé d'une <strong>FATHA</strong>.<br>
                        <span class="ar-word" style="color:#D32F2F;">قَالَ</span> (Qāla)
                    </div>
                    <div style="background:#fff; padding:10px; border-radius:8px; border-left:4px solid #FF9800;">
                        <strong>2. Le Wow (و) :</strong> Sakin, précédé d'une <strong>DAMMA</strong>.<br>
                        <span class="ar-word" style="color:#E65100;">يَقُولُ</span> (Yaqūlu)
                    </div>
                    <div style="background:#fff; padding:10px; border-radius:8px; border-left:4px solid #2196F3;">
                        <strong>3. Le Ya (ي) :</strong> Sakin, précédé d'une <strong>KASRA</strong>.<br>
                        <span class="ar-word" style="color:#1565C0;">قِيلَ</span> (Qīla)
                    </div>
                </div>
            </div>`
        },

        // THE MASTER EXAMPLE
        {
            type: "lesson",
            prof: "Pour mémoriser cela, les savants ont réuni ces 3 cas dans un seul mot du Coran.",
            html: `
            <div class="concept-card">
                <h3>L'Exemple Complet (Al-Jami')</h3>
                <div style="text-align:center; margin:20px 0;">
                    <div class="ar-huge" style="font-size:3rem; color:#006064;">نُوحِيهَا</div>
                    <div style="font-size:1.2rem; color:#555; margin-top:10px;">Nū - Ḥī - Hā</div>
                </div>
                <p style="text-align:center; font-size:0.9rem;">
                    Analysez-le :<br>
                    <strong>Nu</strong> (Wow + Damma)<br>
                    <strong>Hi</strong> (Ya + Kasra)<br>
                    <strong>Ha</strong> (Alif + Fatha)
                </p>
                <div class="tip-box" style="margin-top:15px; border-color:#00838f;">
                    Ce mot ne contient aucune Hamza avant/après un Mad, et aucun Sukun. C'est du <strong>100% Naturel</strong>.
                </div>
                <center>
                    <button class="play-btn" onclick="playAudio('011049', 8, 10, 'nuhiha')">🔊 Écouter (Nuhiha)</button>
                </center>
            </div>`
        },

        // OBSERVATION DRILL
        {
            type: "quiz_theory",
            prof: "Attention au piège ! ⚡️<br>Dans le mot **بَيْتٌ** (Baytun). Le Ya est Sakina. Est-ce un Mad Tabi'i ?",
            opts: [{ t: "Oui", good: false }, { t: "Non", good: true }],
            exp: "NON! Car le Ya est précédé d'une Fatha (Bay), pas d'une Kasra. C'est une lettre de <strong>Lin</strong>, pas de Mad."
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier de Pratique</strong><br>Le secret est la mesure. Ni trop court (1 temps), ni trop long (4 temps)."
        },
        {
            type: "workshop",
            prof: "Répétez après le Cheikh. Visez exactement 2 temps.",
            examples: [
                { type: "Alif (Fatha)", ar: "قَالَ", url: "002030", start: 2, end: 3, id: "qala" },
                { type: "Wow (Damma)", ar: "يَقُولُ", url: "002008", start: 2, end: 4, id: "yaqulu" },
                { type: "Ya (Kasra)", ar: "قِيلَ", url: "002011", start: 2, end: 3, id: "qila" },
                { type: "Le Total", ar: "نُوحِيهَا", url: "011049", start: 8, end: 10, id: "nuhiha-w" }
            ]
        },

        // EXAM
        { type: "intro", prof: "🧐 <strong>Évaluation</strong>" },

        {
            type: "quiz_theory",
            prof: "1/4 - Quelle est la définition du Mad Tabi'i ?",
            opts: [{ t: "Suivi d'une Hamza", good: false }, { t: "Ni Hamza avant, ni Hamza/Sukun après", good: true }],
            exp: "C'est la définition par exclusion de toutes les causes d'allongement supplémentaire."
        },
        {
            type: "quiz_theory",
            prof: "2/4 - Quelle est sa durée ?",
            opts: [{ t: "2 Harakat (Temps)", good: true }, { t: "4 Harakat", good: false }],
            exp: "La durée naturelle de deux mouvements."
        },
        {
            type: "quiz_theory",
            prof: "3/4 - Dans **خَوْفٍ** (Khawf), pourquoi n'est-ce PAS un Mad Tabi'i ?",
            opts: [{ t: "Car le Wow a une Fatha avant", good: true }, { t: "Car le Wow est Sakin", good: false }],
            exp: "Pour le Mad Tabi'i, le Wow doit avoir une Damma avant (comme 'Yaqulu')."
        },
        {
            type: "quiz_theory",
            prof: "4/4 - Lequel de ces mots est un Mad Tabi'i ?",
            opts: [{ t: "جَآءَ (Jaaa-a)", good: false }, { t: "قَالَ (Qala)", good: true }],
            exp: "Jaa-a a une Hamza après (c'est un Muttasil). Qala est pur."
        }
    ]
};
