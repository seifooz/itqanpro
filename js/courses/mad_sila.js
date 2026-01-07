const MAD_SILA_DATA = {
    id: "mad_sila",
    title: "4. MAD AS-SILA",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Le 4ème type est particulier car il ne concerne qu'une seule lettre : Le Pronom <strong>Ha ( هَاء )</strong>.",
            html: `
            <div class="concept-card">
                <h3>Définition</h3>
                <p><strong>As-Sila ( الصِّلَة )</strong> désigne le pronom de la 3ème personne du masculin singulier ( ـه ).</p>
                <div style="background:#e8eaf6; padding:15px; border-radius:10px; margin-top:15px; text-align:center; border:2px solid #3f51b5;">
                    <div style="font-size:2rem; color:#1a237e;">ـه ⬅️ ـو / ـي</div>
                    <div style="color:#1a237e; font-weight:bold; margin-top:5px;">Il y a allongement lorsque celui-ci est suivi d’une des deux lettres de madd ( وَاو / يَاء ).</div>
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Cette règle se divise en deux parties selon la lettre qui suit le pronom.",
            html: `
            <div class="concept-card">
                <h3>Les 2 Catégories</h3>
                <p>Tout dépend de la présence (ou non) d'une <strong>Hamza ( هَمْزَة )</strong> juste après.</p>
                <ul style="text-align:left; margin:15px; list-style-type:none; background:#fff; padding:15px; border-radius:10px; border:1px solid #ddd;">
                    <li style="margin-bottom:10px;">🟢 <strong>Petite (Sughra)</strong> : N'importe quelle lettre SAUF Hamza ( هَمْزَة ).</li>
                    <li>🔴 <strong>Grande (Kubra)</strong> : Suivi spécifiquement d'une Hamza ( هَمْزَة ).</li>
                </ul>
            </div>`
        },
        {
            type: "lesson",
            prof: "Commençons par la plus fréquente : La Petite Sila.",
            html: `
            <div class="concept-card">
                <h3>1. As-Sila Sughra ( صِلَة صُغْرَى )</h3>
                <p>On l’appelle petite lorsque le madd est suivi de toute lettre <strong>hormis la Hamza ( هَمْزَة )</strong>.</p>
                <div class="tip-box">
                    <strong>Durée :</strong> 2 temps (Harakat).
                </div>
                <div style="margin-top:15px; display:flex; gap:10px; align-items:center; background:#fff; padding:10px; border-radius:8px;">
                    <div class="ar-word ar-medium" style="color:#3f51b5;">إِنَّهُۥ كَانَ</div>
                    <div>(Innahuu Kaana)</div>
                </div>
                 <div style="margin-top:5px; display:flex; gap:10px; align-items:center; background:#fff; padding:10px; border-radius:8px;">
                    <div class="ar-word ar-medium" style="color:#3f51b5;">بِهِۦ بَصِيرًا</div>
                    <div>(Bihii Basira)</div>
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Ensuite, si une Hamza apparaît, l'allongement devient plus long.",
            html: `
            <div class="concept-card">
                <h3>2. As-Sila Kubra ( صِلَة كُبْرَى )</h3>
                <p>On l’appelle grande lorsque le madd est suivi de la lettre <strong>Hamza ( هَمْزَة )</strong>.</p>
                <div class="tip-box" style="border-left-color:#e91e63;">
                    <strong>Durée :</strong> 4 ou 5 temps (Harakat).
                </div>
                <div style="margin-top:15px; display:flex; gap:10px; align-items:center; background:#fff; padding:10px; border-radius:8px;">
                    <div class="ar-word ar-medium" style="color:#c2185b;">مَالَهُۥٓ أَخْلَدَهُۥ</div>
                    <div>(Malahuuu Akhladah)</div>
                </div>
                 <div style="margin-top:5px; display:flex; gap:10px; align-items:center; background:#fff; padding:10px; border-radius:8px;">
                    <div class="ar-word ar-medium" style="color:#c2185b;">عِندَهُۥٓ إِلَّا</div>
                    <div>(Indahuuu Illa)</div>
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "⚠️ <strong>Condition Importante</strong><br>Le Ha doit être 'Mobile entre deux Mobiles'.",
            html: `
            <div class="concept-card">
                <h3>L'Exception du Soukoun</h3>
                <p>Si la lettre AVANT le Ha porte un <strong>Sukun ( سُكُون )</strong>, il n'y a PAS de Sila.</p>
                <div style="background:#ffebee; padding:10px; border-radius:8px; margin-top:10px; border:1px solid #ef5350;">
                    <div class="ar-word ar-medium" style="color:#c62828;">فِيهِ هُدًى</div>
                    <div style="font-size:0.9rem;">(Fihi Huda) ➡️ Pas d'allongement.</div>
                </div>
            </div>`
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier de Pratique</strong><br>Distinguez la Petite (2 temps) de la Grande (4-5 temps)."
        },
        {
            type: "workshop",
            prof: "Écoutez et répétez en respectant les durées.",
            examples: [
                { type: "Sila Sughra (2)", ar: "إِنَّهُۥ كَانَ", url: "017044", start: 9, end: 11, id: "sughra1" },
                { type: "Sila Sughra (2)", ar: "بِهِۦ بَصِيرًا", url: "084015", start: 4, end: 6, id: "sughra2" },
                { type: "Sila Kubra (4-5)", ar: "أَنَّ مَالَهُۥٓ أَخْلَدَهُۥ", url: "104003", start: 2, end: 5, id: "kubra1" },
                { type: "Sila Kubra (4-5)", ar: "وَثَاقَهُۥٓ أَحَدٌ", url: "089026", start: 2, end: 5, id: "kubra2" }
            ]
        },

        // IMMERSION SURAH AL-HUMAZAH (104)
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion Coranique</strong><br>Sourate Al-Humazah (104). Trouvez les Sila !",
            instruction: "Cliquez sur les mots contenant un Ha de Sila (Sughra ou Kubra).",
            surah: 104,
            words: [
                { t: "وَيْلٌ", ok: false }, { t: "لِّكُلِّ", ok: false }, { t: "هُمَزَةٍ", ok: false }, { t: "لُّمَزَةٍ", ok: false }, { t: "١", endVerse: true },
                { t: "ٱلَّذِى", ok: false }, { t: "جَمَعَ", ok: false }, { t: "مَالًا", ok: false }, { t: "وَعَدَّدَهُۥ", ok: true, reason: "Sila Sughra (2 temps) -> Pas de Hamza après." }, { t: "٢", endVerse: true },
                { t: "يَحْسَبُ", ok: false }, { t: "أَنَّ", ok: false }, { t: "مَالَهُۥٓ", ok: true, reason: "Sila Kubra (4-5 temps) -> Suivi d'une Hamza." }, { t: "أَخْلَدَهُۥ", ok: true, reason: "Sila Sughra (2 temps) -> Arrêt possible." }, { t: "٣", endVerse: true },
                { t: "كَلَّا", ok: false }, { t: "لَيُنۢبَذَنَّ", ok: false }, { t: "فِى", ok: false }, { t: "ٱلْحُطَمَةِ", ok: false }, { t: "٤", endVerse: true }
            ]
        },

        // EXAM
        { type: "intro", prof: "🧐 <strong>Évaluation</strong>" },
        {
            type: "quiz_theory",
            prof: "1/3 - Quelle lettre déclenche la Sila Kubra (Grande) ?",
            opts: [{ t: "Alif ( أَلِف )", good: false }, { t: "Hamza ( هَمْزَة )", good: true }],
            exp: "La présence d'une Hamza ( هَمْزَة ) après le Ha transforme la Sila en Kubra."
        },
        {
            type: "quiz_theory",
            prof: "2/3 - Quelle est la durée de la Sila Sughra (Petite) ?",
            opts: [{ t: "2 Temps", good: true }, { t: "4 Temps", good: false }],
            exp: "C'est un allongement naturel de 2 harakat."
        },
        {
            type: "quiz_theory",
            prof: "3/3 - Dans ( فِيهِ هُدًى ), pourquoi n'y a-t-il pas de Sila ?",
            opts: [{ t: "Car le Ha est précédé d'un Sukun", good: true }, { t: "Car le Ha a une Kasra", good: false }],
            exp: "Le Ha doit être entouré de deux lettres voyellées (mobiles). Ici le Ya est Sakin."
        }
    ]
};
