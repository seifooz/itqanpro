const MAD_TABII_DATA = {
    id: "mad_tabii",
    title: "1. MAD TABI'I",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Bienvenue. Commençons par la base absolue : Le **Mad Tabi'i** (Naturel).<br>Pour bien le comprendre, il faut connaître sa définition précise.",
            html: `
                <div class="concept-card">
                <h3>Définition Technique</h3>
                <p>C'est tout Mad qui respecte deux conditions négatives :</p>
                <ul class="def-box">
                    <li>1. <strong>Ni précédé</strong> d'une Hamza (ء).</li>
                    <li>2. <strong>Ni suivi</strong> d'une Hamza (ء) ou d'un Soukoun (°) (Original ou dû à l'arrêt).</li>
                </ul>
                <p>Si ces conditions sont remplies, la lettre reste dans son état <strong>Naturel</strong>.</p>
                <div style="background:#e3f2fd; border:2px solid #2196f3; border-radius:12px; padding:20px; text-align:center; margin-top:20px;">
                    <div style="font-size:0.9rem; color:#1565c0; font-weight:bold; letter-spacing:1px; text-transform:uppercase; margin-bottom:5px;">La Règle d'Or</div>
                    <div style="font-size:2.5rem; color:#0d47a1; font-weight:800; line-height:1;">2 TEMPS</div>
                    <div style="font-size:1.1rem; color:#1976d2; margin-top:5px;">(Deux Harakat)</div>
                    <p style="font-size:0.9rem; color:#555; margin-top:15px;">Ni plus, ni moins. C'est le rythme naturel.</p>
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Les lettres du Mad Tabi'i sont les trois voyelles longues, lorsqu'elles sont 'mortes' (Sakin).",
            html: `
            <div class="concept-card">
                <h3>Les 3 Lettres (Way)</h3>
                <div class="letters-grid" style="grid-template-columns: repeat(3, 1fr);">
                    <div class="l-card"><div class="l-ar">ي</div><div class="l-desc">Ya (avec Kasra avant)</div></div>
                    <div class="l-card"><div class="l-ar">و</div><div class="l-desc">Waw (avec Damma avant)</div></div>
                    <div class="l-card"><div class="l-ar">ا</div><div class="l-desc">Alif (avec Fatha avant)</div></div>
                </div>
                <div style="margin-top:20px; font-style:italic; color:#666;">
                    On les appelle les lettres de <strong>Jauf</strong> (Vide de la bouche).
                </div>
            </div>`
        },
        // QUIZ THEORIE NOUVEAU
        {
            type: "quiz_theory",
            prof: "Avant de pratiquer, vérifions la théorie.",
            questions: [
                {
                    q: "Combien de temps dure le Mad Tabi'i ?",
                    opts: ["2 Temps (Harakat)", "4 ou 5 Temps", "6 Temps"],
                    good: 0
                },
                {
                    q: "Quelle condition est VRAIE pour le Mad Tabi'i ?",
                    opts: ["Il est suivi d'une Hamza", "Il n'a ni Hamza ni Soukoun après", "Il a un Soukoun avant"],
                    good: 1
                },
                {
                    q: "Pourquoi dit-on qu'il est 'Naturel' ?",
                    opts: ["C'est la longueur normale sans effort", "Il vient de la nature", "C'est le plus long"],
                    good: 0
                }
            ]
        },
        {
            type: "workshop",
            prof: "Écoutez la différence entre une voyelle courte (1 temps) et longue (2 temps).",
            examples: [
                { type: "1 Temps", ar: "بَ", url: "top_ba" },
                { type: "2 Temps", ar: "بَا", url: "top_baa" },
                { type: "1 Temps", ar: "قُ", url: "top_qu" },
                { type: "2 Temps", ar: "قُو", url: "top_quu" }
            ]
        },
        // IMMERSION SURAH AL-FIL
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion : Surah Al-Fil (105)</strong><br>Trouvez les Mads Tabi'i (Alif, Waw, Ya sans Hamza/Sukun).",
            instruction: "Cliquez sur les lettres de prolongation.",
            surah: 105,
            // options removed for simple selection
            words: [
                { t: "أَلَمْ", ok: false }, { t: "تَرَ", ok: false }, { t: "كَيْفَ", ok: false },
                { t: "فَعَلَ", ok: false }, { t: "رَبُّكَ", ok: false },
                { t: "بِأَصْحَٰبِ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Alif Khanjariya)." },
                { t: "ٱلْفِيلِ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Ya)." }, { t: "١", endVerse: true },
                { t: "أَلَمْ", ok: false }, { t: "يَجْعَلْ", ok: false },
                { t: "كَيْدَهُمْ", ok: false },
                { t: "فِى", ok: true, optIdx: 0, reason: "Mad Tabi'i (Ya)." },
                { t: "تَضْلِيلٍ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Ya)." }, { t: "٢", endVerse: true },
                { t: "وَأَرْسَلَ", ok: false }, { t: "عَلَيْهِمْ", ok: false },
                { t: "طَيْرًا", ok: false },
                { t: "أَبَابِيلَ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Alif et Ya)." }, { t: "٣", endVerse: true },
                { t: "تَرْمِيهِم", ok: true, optIdx: 0, reason: "Mad Tabi'i (Ya)." },
                { t: "بِحِجَارَةٍ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Alif)." },
                { t: "مِّن", ok: false }, { t: "سِجِّيلٍ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Ya)." }, { t: "٤", endVerse: true },
                { t: "فَجَعَلَهُمْ", ok: false },
                { t: "كَعَصْفٍ", ok: false },
                { t: "مَّأْكُولٍۭ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Waw)." }, { t: "٥", endVerse: true }
            ]
        }
    ]
};
