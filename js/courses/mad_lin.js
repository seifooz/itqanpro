const MAD_LIN_DATA = {
    id: "mad_lin",
    title: "8. MAD LIN",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Voici le 'petit frère' du Mad Arid. Il concerne des lettres spécifiques appelées 'Lin' (Douceur).",
            html: `
            <div class="concept-card">
                <h3>Définition</h3>
                <p>Cela ne concerne que le <strong>Wow ( وَاو )</strong> et le <strong>Ya ( يَاء )</strong> lorsqu'ils portent un <strong>Sukun ( سُكُون )</strong> et sont précédés d'une <strong>Fatha ( فَتْحَة )</strong> et suivies d’une lettre ayant un <strong>Sukun ( سُكُون )</strong> dû à l’arrêt.</p>
                <div style="background:#f3e5f5; padding:15px; border-radius:10px; margin:15px 0; text-align:center; border:2px solid #ab47bc;">
                    <div style="font-size:2rem; color:#7b1fa2;">خَوْف 🛑</div>
                    <div style="color:#7b1fa2; font-weight:bold; margin-top:5px;">Wow ( وَاو ) Sakina + Fatha ( فَتْحَة ) avant = LIN (Douceur)</div>
                </div>
                <div class="tip-box">
                    <strong>Durée :</strong> 2, 4 ou 6 temps (au choix).
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Comme pour le Mad Arid, ce Mad n'apparaît **QUE si l'on s'arrête** sur le mot.",
            html: `
            <div class="concept-card">
                <h3>La Règle à l'Arrêt 🛑</h3>
                <p><strong>Lin ( اللِّين )</strong> signifie "Douceur". Le son sort sans effort.</p>
                <ul style="text-align:left; margin:15px; list-style-type:none; background:#fff; padding:15px; border-radius:10px; border:1px solid #ddd;">
                    <li style="margin-bottom:10px;">🏃 <strong>En continuant</strong> : Pas de Mad (0 temps). C'est juste une lettre souple.</li>
                    <li>🛑 <strong>À l'arrêt</strong> : On peut allonger 2, 4 ou 6 temps.</li>
                </ul>
                <div class="tip-box">
                    <strong>Condition Clé :</strong> Toujours une <strong>Fatha ( فَتْحَة )</strong> avant le Wow ( وَاو ) ou le Ya ( يَاء ).
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Observez la transformation à l'arrêt. Le son s'étire avec douceur.",
            html: `
            <div class="concept-card">
                <h3>Exemples de Transformation</h3>
                
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                    <!-- Bayt -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #7b1fa2;">
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#7b1fa2;">ٱلْبَيْتِ</div>
                            <div style="font-size:0.8rem; color:#666;">Al-Bayti</div>
                        </div>
                        <div style="font-size:1.5rem;">➡️</div>
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#4a148c;">ٱلْبَيْتْ</div>
                            <div style="font-size:0.8rem; color:#4a148c;">Al-Bayyt</div>
                        </div>
                    </div>

                    <!-- Khawf -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #7b1fa2;">
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#7b1fa2;">خَوْفٍ</div>
                            <div style="font-size:0.8rem; color:#666;">Khawfin</div>
                        </div>
                        <div style="font-size:1.5rem;">➡️</div>
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#4a148c;">خَوْفْ</div>
                            <div style="font-size:0.8rem; color:#4a148c;">Khawwf</div>
                        </div>
                    </div>

                    <!-- Sayf -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #7b1fa2;">
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#7b1fa2;">وَٱلصَّيْفِ</div>
                            <div style="font-size:0.8rem; color:#666;">Wassayfi</div>
                        </div>
                        <div style="font-size:1.5rem;">➡️</div>
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#4a148c;">وَٱلصَّيْفْ</div>
                            <div style="font-size:0.8rem; color:#4a148c;">Wassayyf</div>
                        </div>
                    </div>

                </div>
            </div>`
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Vocal</strong><br>Sentez la différence entre un Mad pur et un son Lin."
        },
        {
            type: "workshop",
            prof: "Arrêtez-vous avec douceur, sans forcer.",
            examples: [
                { type: "Lin Ya", ar: "ٱلْبَيْتِ", url: "106003", start: 4, end: 6, id: "lin1" },
                { type: "Lin Wow", ar: "خَوْفٍۭ", url: "106004", start: 10, end: 12, id: "lin2" },
                { type: "Lin Ya", ar: "قُرَيْشٍ", url: "106001", start: 3, end: 5, id: "lin3" }
            ]
        },

        // IMMERSION SURAH QURAYSH (106)
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion Coranique</strong><br>Sourate Quraysh (106). Le paradis du Mad Lin !",
            instruction: "Cliquez sur les mots de fin de verset qui contiennent un Mad Lin.",
            surah: 106,
            words: [
                { t: "لِإِيلَٰفِ", ok: false }, { t: "قُرَيْشٍ", ok: true, reason: "Mad Lin : Ya Sakina précédé d'une Fatha + Arrêt (Qurayysh)." }, { t: "١", endVerse: true },
                { t: "إِۦلَٰفِهِمْ", ok: false }, { t: "رِحْلَةَ", ok: false }, { t: "ٱلشِّتَآءِ", ok: false }, { t: "وَٱلصَّيْفِ", ok: true, reason: "Mad Lin : Ya Sakina précédé d'une Fatha + Arrêt (Wassayyf)." }, { t: "٢", endVerse: true },
                { t: "فَلْيَعْبُدُوا۟", ok: false }, { t: "رَبَّ", ok: false }, { t: "هَٰذَا", ok: false }, { t: "ٱلْبَيْتِ", ok: true, reason: "Mad Lin : Ya Sakina précédé d'une Fatha + Arrêt (Al-Bayyt)." }, { t: "٣", endVerse: true },
                { t: "ٱلَّذِىٓ", ok: false }, { t: "أَطْعَمَهُم", ok: false }, { t: "مِّن", ok: false }, { t: "جُوعٍ", ok: false }, { t: "وَءَامَنَهُم", ok: false }, { t: "مِّنْ", ok: false }, { t: "خَوْفٍۭ", ok: true, reason: "Mad Lin : Wow Sakina précédé d'une Fatha + Arrêt (Khawwf)." }, { t: "٤", endVerse: true }
            ]
        },

        // EXAM
        { type: "intro", prof: "🧐 <strong>Évaluation</strong>" },
        {
            type: "quiz_theory",
            prof: "1/3 - Quelles sont les lettres de Lin ?",
            opts: [{ t: "Alif ( أَلِف ) et Wow ( وَاو )", good: false }, { t: "Wow ( وَاو ) et Ya ( يَاء ) (avec Sukun)", good: true }],
            exp: "L'Alif ( أَلِف ) ne peut jamais être une lettre de Lin."
        },
        {
            type: "quiz_theory",
            prof: "2/3 - Quelle voyelle doit précéder la lettre de Lin ?",
            opts: [{ t: "Une Fatha ( فَتْحَة )", good: true }, { t: "Une Kasra ( كَسْرَة )", good: false }],
            exp: "C'est la condition clé : Fatha ( فَتْحَة ) avant."
        },
        {
            type: "quiz_theory",
            prof: "3/3 - Si je continue sans m'arrêter sur ( قُرَيْشٍ ), combien de temps dure le Lin ?",
            opts: [{ t: "2 Temps", good: false }, { t: "0 Temps (Lettre normale)", good: true }],
            exp: "Le Mad Lin disparaît totalement en cas de liaison (Wasl)."
        }
    ]
};
