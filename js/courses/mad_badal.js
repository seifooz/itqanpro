const MAD_BADAL_DATA = {
    id: "mad_badal",
    title: "2. MAD AL-BADAL",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Le <strong>Mad Al-Badal</strong> est une variante subtile du Mad Tabi'i.<br>Il se produit uniquement quand la <strong>Hamza</strong> précède la lettre de Mad.",
            html: `
                <div class="concept-card">
                <h3>La Règle</h3>
                <p style="color:#333;">Si une <strong>Hamza ( ء )</strong> vient **AVANT** la lettre de prolongation (Alif, Waw, Ya), c'est un Mad Badal.</p>
                <div style="font-size:2rem; margin:20px; color:#3f51b5;">
                    ءَا / ءُو / إِي
                </div>
                
                <div style="background:#e3f2fd; border:2px solid #2196f3; border-radius:12px; padding:20px; text-align:center; margin-top:20px;">
                    <div style="font-size:0.9rem; color:#1565c0; font-weight:bold; letter-spacing:1px; text-transform:uppercase; margin-bottom:5px;">Durée (Hafs)</div>
                    <div style="font-size:2.5rem; color:#0d47a1; font-weight:800; line-height:1;">2 TEMPS</div>
                    <div style="font-size:1.1rem; color:#1976d2; margin-top:5px;">(Comme le Mad Naturel)</div>
                </div>

                <div class="tip-box">
                    <strong>Pourquoi "Badal" ?</strong><br>
                    Cela signifie "Échange". À l'origine, deux Hamzas se suivaient (أَأْدَم -> ءَادَم). La deuxième a été "échangée" contre une lettre de Mad pour faciliter la prononciation.
                </div>
            </div>`
        },
        // IMMERSION SURAH QURAISH
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion : Surah Quraish (106)</strong><br>Trouvez le Mad Badal ( Hamza avant Mad ).",
            instruction: "Cliquez sur les mots.",
            surah: 106,
            // options removed for simple selection
            words: [
                { t: "لِإِيلَٰفِ", ok: true, optIdx: 0, reason: "Mad Badal (Hamza avant Ya)." },
                { t: "قُرَيْشٍ", ok: false }, { t: "١", endVerse: true },
                { t: "إِۦلَٰفِهِمْ", ok: true, optIdx: 0, reason: "Mad Badal (Hamza avant Alif)." },
                { t: "رِحْلَةَ", ok: false },
                { t: "ٱلشِّتَآءِ", ok: false },
                { t: "وَٱلصَّيْفِ", ok: false }, { t: "٢", endVerse: true },
                { t: "فَلْيَعْبُدُوا۟", ok: false },
                { t: "رَبَّ", ok: false },
                { t: "هَٰذَا", ok: false },
                { t: "ٱلْبَيْتِ", ok: false }, { t: "٣", endVerse: true },
                { t: "ٱلَّذِىٓ", ok: false },
                { t: "أَطْعَمَهُم", ok: false },
                { t: "مِّن", ok: false },
                { t: "جُوعٍ", ok: false },
                { t: "وَءَامَنَهُم", ok: true, optIdx: 0, reason: "Mad Badal (Hamza avant Alif)." },
                { t: "مِّنْ", ok: false },
                { t: "خَوْفٍۭ", ok: false }, { t: "٤", endVerse: true }
            ]
        },
        {
            type: "quiz_theory",
            prof: "Vérifions si vous avez bien compris la nuance.",
            questions: [
                {
                    q: "Où se trouve la Hamza dans le Mad Badal ?",
                    opts: ["AVANT la lettre de Mad", "APRÈS la lettre de Mad", "Il n'y a pas de Hamza"],
                    good: 0
                },
                {
                    q: "Quelle est la durée du Mad Badal (Hafs) ?",
                    opts: ["2 Temps (Comme Tabi'i)", "4 Temps", "6 Temps"],
                    good: 0
                },
                {
                    q: "Que signifie le mot 'Badal' ?",
                    opts: ["Allongement", "Échange / Remplacement", "Coupure"],
                    good: 1
                }
            ]
        }
    ]
};
