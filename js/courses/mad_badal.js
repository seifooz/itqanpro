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
                <p>Si une <strong>Hamza ( ء )</strong> vient **AVANT** la lettre de prolongation (Alif, Waw, Ya), c'est un Mad Badal.</p>
                <div style="font-size:2rem; margin:20px; color:#3f51b5;">
                    ءَا / ءُو / إِي
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
            options: ["Mad Badal (2 Temps)", "Autre Mad (Ignorer)"],
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
            prof: "Quelle est la durée du Mad Badal selon Hafs ?",
            opts: [{ t: "2 Temps", good: true }, { t: "4 Temps", good: false }, { t: "6 Temps", good: false }],
            exp: "Chez Hafs, le Mad Badal se prolonge comme le Mad Tabi'i : 2 temps."
        }
    ]
};
