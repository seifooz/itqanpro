const MAD_REVIEW_DATA = {
    id: "mad_review",
    title: "RÉVISION : AHKAM AL-MAD",
    type: "Review",
    steps: [
        {
            type: "lesson",
            prof: "Bravo ! Vous avez terminé tous les modules de Mad. Il est temps de tout mélanger ! 🌪️",
            html: `
            <div class="concept-card">
                <h3>Le Grand Test Interactif</h3>
                <p>Attention : Pour chaque mot sélectionné, vous devrez <strong>PRECISER</strong> le type de Mad.</p>
                <ul style="text-align:left; margin:15px; list-style-type:none; background:#fff; padding:15px; border-radius:10px;">
                    <li>1. Mad Tabi'i / Badal / Ewad (2 Temps)</li>
                    <li>2. Mad Sila (2 ou 4-5 Temps)</li>
                    <li>3. Mad Muttasil / Munfasil (4-5 Temps)</li>
                    <li>4. Mad Arid / Lin (2-4-6 Temps)</li>
                    <li>5. Mad Lazim (6 Temps)</li>
                </ul>
            </div>`
        },

        // IMMERSION 1: SURAH AL-KAWTHAR (Short & Mixed)
        {
            type: "immersion",
            prof: "🔍 <strong>Niveau 1 : Surah Al-Kawthar</strong><br>Cliquez sur les mots et choisissez le BON type.",
            instruction: "Trouvez tous les Mads et identifiez-les.",
            surah: 108,
            options: ["Mad Tabi'i (2)", "Mad Jaiz Munfasil (4-5)", "Mad Arid (2-4-6)", "Mad Ewad (2)"],
            words: [
                { t: "إِنَّآ", ok: true, optIdx: 1, reason: "Mad Jaiz Munfasil (Alif suivi de Hamza séparé)." },
                { t: "أَعْطَيْنَٰكَ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Alif Khanjariya)." },
                { t: "ٱلْكَوْثَرَ", ok: false }, { t: "١", endVerse: true },
                { t: "فَصَلِّ", ok: false }, { t: "لِرَبِّكَ", ok: false }, { t: "وَٱنْحَرْ", ok: false }, { t: "٢", endVerse: true },
                { t: "إِنَّ", ok: false }, { t: "شَانِئَكَ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Alif)." },
                { t: "هُوَ", ok: false }, { t: "ٱلْأَبْتَرُ", ok: false }, { t: "٣", endVerse: true }
            ]
        },

        // QUIZ THEORIQUE : IDENTIFICATION
        { type: "intro", prof: "🧐 <strong>Identification Rapide</strong>" },
        {
            type: "quiz_theory",
            prof: "Dans le mot ( ٱلضَّآلِّينَ ), quel est le type de Mad ?",
            opts: [{ t: "Mad Wajib Muttasil", good: false }, { t: "Mad Lazim Kilmi Muthaqqal", good: true }, { t: "Mad Arid Lissukun", good: false }],
            exp: "C'est un Mad Lazim (6 temps) car suivi d'une Shadda."
        },
        {
            type: "quiz_theory",
            prof: "Dans ( يَٰٓأَيُّهَا ), quel est le type de Mad ?",
            opts: [{ t: "Mad Jaiz Munfasil", good: true }, { t: "Mad Tabi'i", good: false }],
            exp: "C'est un Munfasil car le Mad (Ya) et la Hamza (Ayyuha) sont techniquement séparés."
        },

        // IMMERSION 2: SURAH AN-NASR
        {
            type: "immersion",
            prof: "🔍 <strong>Niveau 2 : Surah An-Nasr</strong><br>Attention au Mad Muttasil et Arid.",
            instruction: "Cliquez et identifiez.",
            surah: 110,
            options: ["Mad Tabi'i (2)", "Mad Wajib Muttasil (4-5)", "Mad Ewad (2)", "Mad Sila (2)"],
            words: [
                { t: "إِذَا", ok: true, optIdx: 0, reason: "Mad Tabi'i (Alif)." },
                { t: "جَآءَ", ok: true, optIdx: 1, reason: "Mad Wajib Muttasil (Mad + Hamza même mot)." },
                { t: "نَصْرُ", ok: false }, { t: "ٱللَّهِ", ok: false }, { t: "وَٱلْفَتْحُ", ok: false }, { t: "١", endVerse: true },
                { t: "وَرَأَيْتَ", ok: false }, { t: "ٱلنَّاسَ", ok: true, optIdx: 0, reason: "Mad Tabi'i." },
                { t: "يَدْخُلُونَ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Waw)." },
                { t: "فِى", ok: true, optIdx: 0, reason: "Mad Tabi'i (Ya)." },
                { t: "دِينِ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Ya)." },
                { t: "ٱللَّهِ", ok: false }, { t: "أَفْوَاجًا", ok: true, optIdx: 2, reason: "Mad Ewad (Arrêt sur Tanween Fatha)." }, { t: "٢", endVerse: true },
                { t: "فَسَبِّحْ", ok: false }, { t: "بِحَمْدِ", ok: false }, { t: "رَبِّكَ", ok: false }, { t: "وَٱسْتَغْفِرْهُ", ok: false },
                { t: "إِنَّهُۥ", ok: true, optIdx: 3, reason: "Mad Sila Sughra (Ha + Waw caché)." },
                { t: "كَانَ", ok: true, optIdx: 0, reason: "Mad Tabi'i." },
                { t: "تَوَّابًۢا", ok: true, optIdx: 2, reason: "Mad Ewad (Arrêt sur Tanween)." }, { t: "٣", endVerse: true }
            ]
        },

        // IMMERSION 3 : AYAT AL-KURSI SEGMENT
        {
            type: "immersion",
            prof: "🔍 <strong>Niveau Expert : Ayat Al-Kursi</strong>",
            instruction: "Trouvez et identifiez les Mads.",
            surah: 2,
            options: ["Mad Tabi'i (2)", "Mad Arid Lissukun (2-4-6)", "Mad Sila (2)", "Mad Lazim (6)"],
            words: [
                { t: "ٱللَّهُ", ok: false }, { t: "لَآ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Laa)." },
                { t: "إِلَٰهَ", ok: true, optIdx: 0, reason: "Mad Tabi'i (Alif Khanjariya)." },
                { t: "إِلَّا", ok: false }, { t: "هُوَ", ok: false },
                { t: "ٱلْحَىُّ", ok: false }, { t: "ٱلْقَيُّومُ", ok: true, optIdx: 1, reason: "Mad Arid Lissukun (si arrêt)." }, { t: "ج", endVerse: false },
                { t: "لَا", ok: true, optIdx: 0, reason: "Mad Tabi'i." },
                { t: "تَأْخُذُهُۥ", ok: true, optIdx: 2, reason: "Mad Sila Sughra." },
                { t: "سِنَةٌ", ok: false }, { t: "وَلَا", ok: true, optIdx: 0, reason: "Mad Tabi'i." },
                { t: "نَوْمٌ", ok: true, optIdx: 1, reason: "Mad Arid Lissukun (si arrêt)." }, { t: "ج", endVerse: false }
            ]
        },

        { type: "intro", prof: "🎉 <strong>Félicitations !</strong><br>Vous êtes un expert des Mads maintenant." }
    ]
};
