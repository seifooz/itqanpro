const MAD_REVIEW_DATA = {
    id: "mad_review",
    title: "RÉVISION : JUZ AMMA",
    type: "Review",
    steps: [
        {
            type: "lesson",
            prof: "Bienvenue dans l'Examen Final. Vous allez analyser 10 Sourates.<br>Cliquez sur chaque mot contenant un Mad pour l'identifier.",
            html: `
            <div class="concept-card">
                <h3>Instruction</h3>
                <p>Certains mots contiennent <strong>PLUSIEURS</strong> Mads. Vous devrez tous les identifier.</p>
                <div class="tip-box">
                    <strong>10 Sourates à analyser :</strong><br>
                    Al-Fatiha, An-Nas, Al-Falaq, Al-Ikhlas, Al-Masad, An-Nasr, Al-Kafirun, Al-Kawthar, Al-Ma'un, Quraish.
                </div>
            </div>`
        },

        // 1. AL-FATIHA
        {
            type: "immersion",
            prof: "1/10 : <strong>Al-Fatiha</strong>",
            instruction: "Identifiez les Mads.",
            surah: 1,
            options: ["Mad Tabi'i (2)", "Mad Arid (2-4-6)", "Mad Lazim (6)"],
            words: [
                { t: "بِسْمِ", ok: false }, { t: "ٱللَّهِ", ok: false },
                { t: "ٱلرَّحْمَٰنِ", ok: true, mads: [{ label: "ا", optIdx: 0 }], reason: "Tabi'i (Naturel)." },
                { t: "ٱلرَّحِيمِ", ok: true, mads: [{ label: "ي", optIdx: 1 }], reason: "Arid (Arrêt)." }, { t: "١", endVerse: true },
                { t: "ٱلْحَمْدُ", ok: false }, { t: "لِلَّهِ", ok: false }, { t: "رَبِّ", ok: false },
                { t: "ٱلْعَٰلَمِينَ", ok: true, mads: [{ label: "ا", optIdx: 0 }, { label: "ي", optIdx: 1 }] }, { t: "٢", endVerse: true },
                { t: "ٱلرَّحْمَٰنِ", ok: true, mads: [{ label: "ا", optIdx: 0 }], reason: "Tabi'i." },
                { t: "ٱلرَّحِيمِ", ok: true, mads: [{ label: "ي", optIdx: 1 }], reason: "Arid." }, { t: "٣", endVerse: true },
                { t: "مَٰلِكِ", ok: true, mads: [{ label: "ا", optIdx: 0 }], reason: "Tabi'i." }, { t: "يَوْمِ", ok: false },
                { t: "ٱلدِّينِ", ok: true, mads: [{ label: "ي", optIdx: 1 }], reason: "Mad Arid." }, { t: "٤", endVerse: true },
                { t: "إِيَّاكَ", ok: true, mads: [{ label: "ا", optIdx: 0 }], reason: "Tabi'i." }, { t: "نَعْبُدُ", ok: false },
                { t: "وَإِيَّاكَ", ok: true, mads: [{ label: "ا", optIdx: 0 }], reason: "Tabi'i." },
                { t: "نَسْتَعِينُ", ok: true, mads: [{ label: "ي", optIdx: 1 }], reason: "Mad Arid." }, { t: "٥", endVerse: true },
                { t: "ٱهْدِنَا", ok: true, mads: [{ label: "ا", optIdx: 0 }], reason: "Tabi'i." },
                { t: "ٱلصِّرَٰطَ", ok: true, mads: [{ label: "ا", optIdx: 0 }], reason: "Tabi'i." },
                { t: "ٱلْمُسْتَقِيمَ", ok: true, mads: [{ label: "ي", optIdx: 1 }], reason: "Mad Arid." }, { t: "٦", endVerse: true },
                { t: "صِرَٰطَ", ok: true, mads: [{ label: "ا", optIdx: 0 }], reason: "Tabi'i." },
                { t: "ٱلَّذِينَ", ok: true, mads: [{ label: "ي", optIdx: 0 }], reason: "Tabi'i." },
                { t: "أَنْعَمْتَ", ok: false }, { t: "عَلَيْهِمْ", ok: false }, { t: "غَيْرِ", ok: false },
                { t: "ٱلْمَغْضُوبِ", ok: true, mads: [{ label: "و", optIdx: 0 }], reason: "Tabi'i." }, { t: "عَلَيْهِمْ", ok: false },
                { t: "وَلَا", ok: true, mads: [{ label: "ا", optIdx: 0 }], reason: "Tabi'i." },
                { t: "ٱلضَّآلِّينَ", ok: true, mads: [{ label: "ا", optIdx: 2 }, { label: "ي", optIdx: 1 }], reason: "Lazim (Short/Long) puis Arid." }, { t: "٧", endVerse: true }
            ]
        },

        // 2. AN-NAS
        {
            type: "immersion",
            prof: "2/10 : <strong>An-Nas</strong>",
            instruction: "Trouvez les Mads.",
            surah: 114,
            options: ["Mad Tabi'i (2)", "Mad Arid (2-4-6)"],
            words: [
                { t: "قُلْ", ok: false }, { t: "أَعُوذُ", ok: true, mads: [{ label: "و", optIdx: 0 }], reason: "Tabi'i." },
                { t: "بِرَبِّ", ok: false },
                { t: "ٱلنَّاسِ", ok: true, mads: [{ label: "ا", optIdx: 1 }] }, { t: "١", endVerse: true },
                { t: "مَلِكِ", ok: false },
                { t: "ٱلنَّاسِ", ok: true, mads: [{ label: "ا", optIdx: 1 }], reason: "Arid." }, { t: "٢", endVerse: true },
                { t: "إِلَٰهِ", ok: true, mads: [{ label: "ا", optIdx: 0 }], reason: "Tabi'i." },
                { t: "ٱلنَّاسِ", ok: true, mads: [{ label: "ا", optIdx: 1 }], reason: "Arid." }, { t: "٣", endVerse: true },
                { t: "مِن", ok: false }, { t: "شَرِّ", ok: false },
                { t: "ٱلْوَسْوَاسِ", ok: true, mads: [{ label: "ا", optIdx: 0 }, { label: "ا", optIdx: 1 }] },
                { t: "ٱلْخَنَّاسِ", ok: true, mads: [{ label: "ا", optIdx: 1 }], reason: "Arid." }, { t: "٤", endVerse: true },
                { t: "ٱلَّذِى", ok: true, mads: [{ label: "ي", optIdx: 0 }], reason: "Tabi'i." },
                { t: "يُوَسْوِسُ", ok: false }, { t: "فِى", ok: true, mads: [{ label: "ي", optIdx: 0 }], reason: "Tabi'i." },
                { t: "صُدُورِ", ok: true, mads: [{ label: "و", optIdx: 0 }], reason: "Tabi'i." },
                { t: "ٱلنَّاسِ", ok: true, mads: [{ label: "ا", optIdx: 1 }], reason: "Arid." }, { t: "٥", endVerse: true },
                { t: "مِنَ", ok: false }, { t: "ٱلْجِنَّةِ", ok: false },
                { t: "وَٱلنَّاسِ", ok: true, mads: [{ label: "ا", optIdx: 1 }], reason: "Arid." }, { t: "٦", endVerse: true }
            ]
        },

        // 3. AL-FALAQ
        {
            type: "immersion",
            prof: "3/10 : <strong>Al-Falaq</strong>",
            instruction: "Identifiez les Mads.",
            surah: 113,
            options: ["Mad Tabi'i (2)", "Mad Arid (2-4-6)"],
            words: [
                { t: "قُلْ", ok: false }, { t: "أَعُوذُ", ok: true, mads: [{ label: "و", optIdx: 0 }] }, { t: "بِرَبِّ", ok: false },
                { t: "ٱlْفَلَقِ", ok: true, mads: [{ label: "ق", optIdx: 1 }], reason: "Qalqala mais ici Arid" }, { t: "١", endVerse: true },
                { t: "مِن", ok: false }, { t: "شَرِّ", ok: false },
                { t: "مَا", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "خَلَقَ", ok: true, mads: [{ label: "ق", optIdx: 1 }] }, { t: "٢", endVerse: true },
                { t: "وَمِن", ok: false }, { t: "شَرِّ", ok: false },
                { t: "غَاسِقٍ", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "إِذَا", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "وَقَبَ", ok: true, mads: [{ label: "ب", optIdx: 1 }] }, { t: "٣", endVerse: true },
                { t: "وَمِن", ok: false }, { t: "شَرِّ", ok: false },
                { t: "ٱلنَّفَّٰثَٰتِ", ok: true, mads: [{ label: "ا", optIdx: 0 }, { label: "ا", optIdx: 0 }] },
                { t: "فِى", ok: true, mads: [{ label: "ي", optIdx: 0 }] },
                { t: "ٱلْعُقَدِ", ok: true, mads: [{ label: "د", optIdx: 1 }] }, { t: "٤", endVerse: true },
                { t: "وَمِن", ok: false }, { t: "شَرِّ", ok: false },
                { t: "حَاسِدٍ", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "إِذَا", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "حَسَدَ", ok: true, mads: [{ label: "د", optIdx: 1 }] }, { t: "٥", endVerse: true }
            ]
        },

        // 4. AL-IKHLAS
        {
            type: "immersion",
            prof: "4/10 : <strong>Al-Ikhlas</strong>",
            instruction: "Identifiez les Mads.",
            surah: 112,
            options: ["Mad Tabi'i (2)", "Mad Sila Sughra (2)", "Mad Arid (2-4-6)"],
            words: [
                { t: "قُلْ", ok: false }, { t: "هُوَ", ok: false }, { t: "ٱللَّهُ", ok: false },
                { t: "أَحَدٌ", ok: true, mads: [{ label: "د", optIdx: 2 }], reason: "Arid (Arrêt)." }, { t: "١", endVerse: true },
                { t: "ٱللَّهُ", ok: false },
                { t: "ٱلصَّمَدُ", ok: true, mads: [{ label: "د", optIdx: 2 }] }, { t: "٢", endVerse: true },
                { t: "لَمْ", ok: false }, { t: "يَلِدْ", ok: false }, { t: "وَلَمْ", ok: false },
                { t: "يُولَدْ", ok: true, mads: [{ label: "و", optIdx: 0 }], reason: "Tabi'i." }, { t: "٣", endVerse: true },
                { t: "وَلَمْ", ok: false },
                { t: "يَكُن", ok: false },
                { t: "لَّهُۥ", ok: true, mads: [{ label: "هـ", optIdx: 1 }], reason: "Sila Sughra." },
                { t: "كُFُوًا", ok: false },
                { t: "أَحَدٌۢ", ok: true, mads: [{ label: "د", optIdx: 2 }] }, { t: "٤", endVerse: true }
            ]
        },

        // 5. AL-MASAD
        {
            type: "immersion",
            prof: "5/10 : <strong>Al-Masad</strong>",
            instruction: "Identifiez les Mads.",
            surah: 111,
            options: ["Mad Tabi'i", "Mad Sila Sughra", "Mad Jaiz Munfasil"],
            words: [
                { t: "تَبَّتْ", ok: false },
                { t: "يَدَآ", ok: true, mads: [{ label: "ا", optIdx: 2 }], reason: "Munfasil." },
                { t: "أَبِى", ok: false }, { t: "لَهَبٍ", ok: false }, { t: "وَتَبَّ", ok: false }, { t: "١", endVerse: true },
                { t: "مَآ", ok: true, mads: [{ label: "ا", optIdx: 2 }] },
                { t: "أَغْنَىٰ", ok: true, mads: [{ label: "ى", optIdx: 0 }] }, { t: "عَنْهُ", ok: false },
                { t: "مَالُهُۥ", ok: true, mads: [{ label: "ا", optIdx: 0 }, { label: "هـ", optIdx: 1 }], reason: "Alif (Tabi'i), Ha (Sila Sughra)." },
                { t: "وَمَا", ok: true, mads: [{ label: "ا", optIdx: 0 }] }, { t: "كَسَبَ", ok: false }, { t: "٢", endVerse: true },
                { t: "سَيَصْلَىٰ", ok: true, mads: [{ label: "ى", optIdx: 0 }] },
                { t: "نَارًا", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "ذَاتَ", ok: true, mads: [{ label: "ا", optIdx: 0 }] }, { t: "لَهَبٍ", ok: false }, { t: "٣", endVerse: true },
                { t: "وَٱمْرَأَتُهُۥ", ok: true, mads: [{ label: "هـ", optIdx: 1 }] },
                { t: "حَمَّالَةَ", ok: true, mads: [{ label: "ا", optIdx: 0 }] }, { t: "ٱلْحَطَبِ", ok: false }, { t: "٤", endVerse: true },
                { t: "فِى", ok: true, mads: [{ label: "ي", optIdx: 0 }] },
                { t: "جِيدِهَا", ok: true, mads: [{ label: "ي", optIdx: 0 }, { label: "ا", optIdx: 0 }] }, { t: "حَبْلٌ", ok: false }, { t: "مِّن", ok: false }, { t: "مَّسَدٍۭ", ok: false }, { t: "٥", endVerse: true }
            ]
        },

        // 6. AN-NASR
        {
            type: "immersion",
            prof: "6/10 : <strong>An-Nasr</strong>",
            instruction: "Identifiez les Mads.",
            surah: 110,
            options: ["Mad Tabi'i", "Mad Muttasil", "Mad Ewad", "Mad Sila Sughra"],
            words: [
                { t: "إِذَا", ok: true, mads: [{ label: "ا", optIdx: 0 }] }, { t: "جَآءَ", ok: true, mads: [{ label: "ا", optIdx: 1 }] }, { t: "نَصْرُ", ok: false }, { t: "ٱللَّهِ", ok: false }, { t: "وَٱلْفَتْحُ", ok: false }, { t: "١", endVerse: true },
                { t: "وَرَأَيْتَ", ok: false },
                { t: "ٱلنَّاسَ", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "يَدْخُلُونَ", ok: true, mads: [{ label: "و", optIdx: 0 }] },
                { t: "فِى", ok: true, mads: [{ label: "ي", optIdx: 0 }] },
                { t: "دِينِ", ok: true, mads: [{ label: "ي", optIdx: 0 }] }, { t: "ٱللَّهِ", ok: false },
                { t: "أَفْوَاجًا", ok: true, mads: [{ label: "ا", optIdx: 0 }, { label: "ا", optIdx: 2 }], reason: "Alif (Tabi'i) puis Ewad à l'arrêt." }, { t: "٢", endVerse: true },
                { t: "فَسَبِّحْ", ok: false }, { t: "بِحَمْدِ", ok: false }, { t: "رَبِّكَ", ok: false }, { t: "وَٱسْتَغْفِرْهُ", ok: false },
                { t: "إِنَّهُۥ", ok: true, mads: [{ label: "هـ", optIdx: 3 }], reason: "Sila Sughra" },
                { t: "كَانَ", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "تَوَّابًۢا", ok: true, mads: [{ label: "ا", optIdx: 0 }, { label: "ا", optIdx: 2 }] }, { t: "٣", endVerse: true }
            ]
        },

        // 7. AL-KAFIRUN
        {
            type: "immersion",
            prof: "7/10 : <strong>Al-Kafirun</strong>",
            instruction: "Identifiez les Mads.",
            surah: 109,
            options: ["Mad Tabi'i", "Mad Jaiz Munfasil", "Mad Arid"],
            words: [
                { t: "قُلْ", ok: false },
                { t: "يَٰٓأَيُّهَا", ok: true, mads: [{ label: "ا", optIdx: 1 }, { label: "هـ", optIdx: 0 }] },
                { t: "ٱلْكَٰفِرُونَ", ok: true, mads: [{ label: "ا", optIdx: 0 }, { label: "و", optIdx: 2 }] }, { t: "١", endVerse: true },
                { t: "لَآ", ok: true, mads: [{ label: "ا", optIdx: 1 }] },
                { t: "أَعْبُدُ", ok: false },
                { t: "مَا", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "تَعْبُدُونَ", ok: true, mads: [{ label: "و", optIdx: 2 }] }, { t: "٢", endVerse: true },
                { t: "وَلَآ", ok: true, mads: [{ label: "ا", optIdx: 1 }] },
                { t: "أَنتُمْ", ok: false },
                { t: "عَٰبِدُونَ", ok: true, mads: [{ label: "ا", optIdx: 0 }, { label: "و", optIdx: 0 }] },
                { t: "مَآ", ok: true, mads: [{ label: "ا", optIdx: 1 }] },
                { t: "أَعْبُدُ", ok: false }, { t: "٣", endVerse: true },
                { t: "وَلَآ", ok: true, mads: [{ label: "ا", optIdx: 1 }] },
                { t: "أَنَا۠", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "عَابِدٌ", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "مَّا", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "عَبَدتُّمْ", ok: false }, { t: "٤", endVerse: true },
                { t: "وَلَآ", ok: true, mads: [{ label: "ا", optIdx: 1 }] },
                { t: "أَنتُمْ", ok: false },
                { t: "عَٰبِدُونَ", ok: true, mads: [{ label: "ا", optIdx: 0 }, { label: "و", optIdx: 0 }] },
                { t: "مَآ", ok: true, mads: [{ label: "ا", optIdx: 1 }] },
                { t: "أَعْبُدُ", ok: false }, { t: "٥", endVerse: true },
                { t: "لَكُمْ", ok: false },
                { t: "دِينُكُمْ", ok: true, mads: [{ label: "ي", optIdx: 0 }] }, { t: "وَلِىَ", ok: false },
                { t: "دِينِ", ok: true, mads: [{ label: "ي", optIdx: 2 }] }, { t: "٦", endVerse: true }
            ]
        },

        // 8. AL-KAWTHAR
        {
            type: "immersion",
            prof: "8/10 : <strong>Al-Kawthar</strong>",
            instruction: "Identifiez les Mads.",
            surah: 108,
            options: ["Mad Tabi'i", "Mad Jaiz Munfasil"],
            words: [
                { t: "إِنَّآ", ok: true, mads: [{ label: "ا", optIdx: 1 }] },
                { t: "أَعْطَيْنَٰكَ", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "ٱلْكَوْثَرَ", ok: false }, { t: "١", endVerse: true },
                { t: "فَصَلِّ", ok: false }, { t: "لِرَبِّكَ", ok: false }, { t: "وَٱنْحَرْ", ok: false }, { t: "٢", endVerse: true },
                { t: "إِنَّ", ok: false },
                { t: "شَانِئَكَ", ok: true, mads: [{ label: "ا", optIdx: 0 }] },
                { t: "هُوَ", ok: false }, { t: "ٱلْأَبْتَرُ", ok: false }, { t: "٣", endVerse: true }
            ]
        },

        // 9. AL-MA'UN
        {
            type: "immersion",
            prof: "9/10 : <strong>Al-Ma'un</strong>",
            instruction: "Identifiez les Mads.",
            surah: 107,
            options: ["Mad Lin", "Mad Tabi'i", "Mad Arid"],
            words: [
                { t: "أَرَءَيْتَ", ok: true, mads: [{ label: "ى", optIdx: 0 }] },
                { t: "ٱلَّذِى", ok: true, mads: [{ label: "ي", optIdx: 1 }] }, { t: "يُكَذِّبُ", ok: false },
                { t: "بِٱلدِّينِ", ok: true, mads: [{ label: "ي", optIdx: 2 }] }, { t: "١", endVerse: true },
                { t: "فَذَٰلِكَ", ok: true, mads: [{ label: "ا", optIdx: 1 }] },
                { t: "ٱلَّذِى", ok: true, mads: [{ label: "ي", optIdx: 1 }] }, { t: "يَدُعُّ", ok: false },
                { t: "ٱلْيَتِيمَ", ok: true, mads: [{ label: "ي", optIdx: 2 }] }, { t: "٢", endVerse: true },
                { t: "وَلَا", ok: true, mads: [{ label: "ا", optIdx: 1 }] }, { t: "يَحُضُّ", ok: false }, { t: "عَلَىٰ", ok: false },
                { t: "طَعَامِ", ok: true, mads: [{ label: "ا", optIdx: 1 }] },
                { t: "ٱلْمِسْكِينِ", ok: true, mads: [{ label: "ي", optIdx: 2 }] }, { t: "٣", endVerse: true },
                { t: "فَوَيْلٌ", ok: true, mads: [{ label: "و", optIdx: 0 }] },
                { t: "لِّلْمُصَلِّينَ", ok: true, mads: [{ label: "ي", optIdx: 2 }] }, { t: "٤", endVerse: true },
                { t: "ٱلَّذِينَ", ok: true, mads: [{ label: "ي", optIdx: 1 }] }, { t: "هُمْ", ok: false }, { t: "عَن", ok: false },
                { t: "صَلَاتِهِمْ", ok: true, mads: [{ label: "ا", optIdx: 1 }] },
                { t: "سَاهُونَ", ok: true, mads: [{ label: "ا", optIdx: 1 }, { label: "و", optIdx: 2 }] }, { t: "٥", endVerse: true },
                { t: "ٱلَّذِينَ", ok: true, mads: [{ label: "ي", optIdx: 1 }] }, { t: "هُمْ", ok: false },
                { t: "يُرَآءُونَ", ok: true, mads: [{ label: "ا", optIdx: 1 }, { label: "و", optIdx: 2 }], reason: "Muttasil puis Arid" }, { t: "٦", endVerse: true },
                { t: "وَيَمْنَعُونَ", ok: true, mads: [{ label: "و", optIdx: 1 }] },
                { t: "ٱلْمَاعُونَ", ok: true, mads: [{ label: "ا", optIdx: 1 }, { label: "و", optIdx: 2 }] }, { t: "٧", endVerse: true }
            ]
        },

        // 10. QURAISH
        {
            type: "immersion",
            prof: "10/10 : <strong>Quraish</strong><br>Dernière étape !",
            instruction: "Identifiez les Mads.",
            surah: 106,
            options: ["Mad Lin", "Mad Tabi'i", "Mad Badal", "Mad Muttasil", "Mad Arid", "Mad Jaiz Munfasil"],
            words: [
                { t: "لِإِيلَٰفِ", ok: true, mads: [{ label: "ي", optIdx: 2 }, { label: "ا", optIdx: 1 }] },
                { t: "قُرَيْشٍ", ok: true, mads: [{ label: "ي", optIdx: 0 }], reason: "Mad Lin." }, { t: "١", endVerse: true },
                { t: "إِۦلَٰفِهِمْ", ok: true, mads: [{ label: "ي", optIdx: 2 }, { label: "ا", optIdx: 1 }] }, { t: "رِحْلَةَ", ok: false },
                { t: "ٱلشِّتَآءِ", ok: true, mads: [{ label: "ا", optIdx: 3 }], reason: "Muttasil." },
                { t: "وَٱلصَّيْفِ", ok: true, mads: [{ label: "ي", optIdx: 0 }] }, { t: "٢", endVerse: true },
                { t: "فَلْيَعْبُدُوا۟", ok: true, mads: [{ label: "و", optIdx: 1 }] }, { t: "رَبَّ", ok: false },
                { t: "هَٰذَا", ok: true, mads: [{ label: "ا", optIdx: 1 }] }, { t: "ٱلْبَيْتِ", ok: true, mads: [{ label: "ي", optIdx: 0 }] }, { t: "٣", endVerse: true },
                { t: "ٱلَّذِىٓ", ok: true, mads: [{ label: "ي", optIdx: 5 }], reason: "Jaiz Munfasil" },
                { t: "أَطْعَمَهُم", ok: false }, { t: "مِّن", ok: false },
                { t: "جُوعٍ", ok: true, mads: [{ label: "و", optIdx: 1 }, { label: "ي", optIdx: 4 }] },
                { t: "وَءَامَنَهُم", ok: true, mads: [{ label: "ا", optIdx: 2 }] }, { t: "مِّنْ", ok: false },
                { t: "خَوْفٍۭ", ok: true, mads: [{ label: "و", optIdx: 0 }] }, { t: "٤", endVerse: true }
            ]
        },

        { type: "intro", prof: "🏆 <strong>Grand Chelem !</strong><br>Vous avez analysé 10 Sourates complètes.<br>Mashallah, vous êtes prêt pour la suite." }
    ]
};
