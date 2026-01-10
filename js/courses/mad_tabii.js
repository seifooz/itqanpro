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
        {
            type: "workshop",
            prof: "Écoutez la différence entre une voyelle courte (1 temps) et longue (2 temps).",
            examples: [
                { type: "Court", ar: "بَ", url: "top_ba" },
                { type: "Long (Mad)", ar: "بَا", url: "top_baa" },
                { type: "Court", ar: "قُ", url: "top_qu" },
                { type: "Long (Mad)", ar: "قُو", url: "top_quu" }
            ]
        },
        // IMMERSION SURAH AL-FIL
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion : Surah Al-Fil (105)</strong><br>Trouvez les Mads Tabi'i (Alif, Waw, Ya sans Hamza/Sukun).",
            instruction: "Cliquez sur les lettres de prolongation.",
            surah: 105,
            options: ["Mad Tabi'i (2 Temps)", "Autre (Ignorer)"],
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
        },
        {
            type: "quiz_theory",
            prof: "Question rapide :",
            opts: [{ t: "2 Temps", good: true }, { t: "4 Temps", good: false }],
            exp: "Le Mad Tabi'i est toujours de 2 temps."
        }
    ]
};
