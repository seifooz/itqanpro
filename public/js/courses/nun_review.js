const NUN_REVIEW_DATA = {
    title: "Révision Nun Sakina",
    mode: "Immersion Interactive",
    steps: [
        {
            type: "intro",
            prof: "Bienvenue dans la Révision Finale du Nun Sakina et Tanwin.<br><br>Nous allons analyser 10 Sourates complètes.<br>Cliquez sur les lettres vertes pour identifier la règle.",
            html: `
            <div class="intro-box">
                <div class="intro-icon">💎</div>
                <h3>Grand Test Final</h3>
                <p>Identifiez : Izhar, Idgham (Ghunna/Bila-Ghunna), Iqlab, et Ikhfaa.</p>
                <div class="review-features">
                    <div class="rf-item"><span class="rf-icon">👁️</span><span>Analyse Visuelle</span></div>
                    <div class="rf-item"><span class="rf-icon">👆</span><span>Interactive</span></div>
                    <div class="rf-item"><span class="rf-icon">✅</span><span>Correction Immédiate</span></div>
                </div>
            </div>`
        },

        // STANDARD OPTIONS:
        // 0: Izhar Halqi
        // 1: Idgham Ghunna
        // 2: Idgham Bila-Ghunna
        // 3: Iqlab
        // 4: Ikhfaa Haqiqi

        // 1. AL-QADR (97) - 5 Verses
        {
            type: "immersion",
            prof: "1/10 : <strong>Al-Qadr</strong>",
            instruction: "Cherchez bien.",
            surah: 97,
            options: ["Izhar Halqi", "Idgham Ghunna", "Idgham Bila-Ghunna", "Iqlab", "Ikhfaa Haqiqi"],
            words: [
                { t: "إِنَّآ", ok: false }, { t: "أَنزَلْنَٰهُ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Noun Sakina + Za = Ikhfaa." },
                { t: "فِى", ok: false }, { t: "لَيْلَةِ", ok: false }, { t: "ٱلْقَدْرِ", ok: false }, { t: "١", endVerse: true },
                { t: "وَمَآ", ok: false }, { t: "أَدْرَىٰكَ", ok: false }, { t: "مَا", ok: false }, { t: "لَيْلَةُ", ok: false }, { t: "ٱلْقَدْرِ", ok: false }, { t: "٢", endVerse: true },
                { t: "لَيْلَةُ", ok: false }, { t: "ٱلْقَدْرِ", ok: false }, { t: "خَيْرٌ", ok: true, rules: [{ label: "رٌ", optIdx: 1 }], reason: "Tanwin + Mim = Idgham Ghunna." },
                { t: "مِّنْ", ok: true, rules: [{ label: "ن", optIdx: 0 }], reason: "Noun + Alif = Izhar." },
                { t: "أَلْفِ", ok: false }, { t: "شَهْرٍ", ok: false }, { t: "٣", endVerse: true },
                { t: "تَنَزَّلُ", ok: false }, { t: "ٱلْمَلَٰٓئِكَةُ", ok: false }, { t: "وَٱلرُّوحُ", ok: false }, { t: "فِيهَا", ok: false }, { t: "بِإِذْنِ", ok: false }, { t: "رَبِّهِم", ok: false },
                { t: "مِّن", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Noun + Kull = Ikhfaa." },
                { t: "كُلِّ", ok: false }, { t: "أَمْرٍ", ok: true, rules: [{ label: "رٍ", optIdx: 0 }], reason: "Tanwin + Salam = Izhar." }, // Salamun Hiya
                { t: "٤", endVerse: true },
                { t: "سَلَٰمٌ", ok: true, rules: [{ label: "مٌ", optIdx: 0 }], reason: "Tanwin + Ha = Izhar Halqi." },
                { t: "هِىَ", ok: false }, { t: "حَتَّىٰ", ok: false }, { t: "مَطْلَعِ", ok: false }, { t: "ٱلْفَجْرِ", ok: false }, { t: "٥", endVerse: true }
            ]
        },

        // 2. ASH-SHARH (94) - 8 Verses
        {
            type: "immersion",
            prof: "2/10 : <strong>Ash-Sharh</strong>",
            instruction: "Identifiez les règles.",
            surah: 94,
            options: ["Izhar Halqi", "Idgham Ghunna", "Idgham Bila-Ghunna", "Iqlab", "Ikhfaa Haqiqi"],
            words: [
                { t: "أَلَمْ", ok: false }, { t: "نَشْرَحْ", ok: false }, { t: "لَكَ", ok: false }, { t: "صَدْرَكَ", ok: false }, { t: "١", endVerse: true },
                { t: "وَوَضَعْنَا", ok: false }, { t: "عَنكَ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Noun Sakina + Kaf = Ikhfaa." },
                { t: "وِزْرَكَ", ok: false }, { t: "٢", endVerse: true },
                { t: "ٱلَّذِىٓ", ok: false }, { t: "أَنقَضَ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Noun Sakina + Qaf = Ikhfaa." },
                { t: "ظَهْرَكَ", ok: false }, { t: "٣", endVerse: true },
                { t: "وَرَفَعْنَا", ok: false }, { t: "لَكَ", ok: false }, { t: "ذِكْرَكَ", ok: false }, { t: "٤", endVerse: true },
                { t: "فَإِنَّ", ok: false }, { t: "مَعَ", ok: false }, { t: "ٱلْعُسْرِ", ok: false }, { t: "يُسْرًا", ok: true, rules: [{ label: "رًا", optIdx: 0 }], reason: "Tanwin + Inna (Hamza) = Izhar." },
                { t: "٥", endVerse: true },
                { t: "إِنَّ", ok: false }, { t: "مَعَ", ok: false }, { t: "ٱلْعُسْرِ", ok: false }, { t: "يُسْرًا", ok: false }, { t: "٦", endVerse: true }
            ]
        },

        // 3. AT-TIN (95) - 8 Verses
        {
            type: "immersion",
            prof: "3/10 : <strong>At-Tin</strong>",
            instruction: "Identifiez les règles.",
            surah: 95,
            options: ["Izhar Halqi", "Idgham Ghunna", "Idgham Bila-Ghunna", "Iqlab", "Ikhfaa Haqiqi"],
            words: [
                { t: "وَٱلتِّينِ", ok: false }, { t: "وَٱلزَّيْتُونِ", ok: false }, { t: "١", endVerse: true },
                { t: "وَطُورِ", ok: false }, { t: "سِينِينَ", ok: false }, { t: "٢", endVerse: true },
                { t: "وَهَٰذَا", ok: false }, { t: "ٱلْبَلَدِ", ok: false }, { t: "ٱلْأَمِينِ", ok: false }, { t: "٣", endVerse: true },
                { t: "لَقَدْ", ok: false }, { t: "خَلَقْنَا", ok: false }, { t: "ٱلْإِنسَٰنَ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Noun Sakina + Sin = Ikhfaa." },
                { t: "فِىٓ", ok: false }, { t: "أَحْسَنِ", ok: false }, { t: "تَقْوِيمٍ", ok: true, rules: [{ label: "مٍ", optIdx: 4 }], reason: "Tanwin + Tha = Ikhfaa." },
                { t: "٤", endVerse: true },
                { t: "ثُمَّ", ok: false }, { t: "رَدَدْنَٰهُ", ok: false }, { t: "أَسْفَلَ", ok: false }, { t: "سَٰفِلِينَ", ok: false }, { t: "٥", endVerse: true },
                { t: "إِلَّا", ok: false }, { t: "ٱلَّذِينَ", ok: false }, { t: "ءَامَنُوا۟", ok: false }, { t: "وَعَمِلُوا۟", ok: false }, { t: "ٱلصَّٰلِحَٰتِ", ok: false },
                { t: "فَلَهُمْ", ok: false }, { t: "أَجْرٌ", ok: true, rules: [{ label: "رٌ", optIdx: 0 }], reason: "Tanwin + Ghayn = Izhar." },
                { t: "غَيْرُ", ok: false }, { t: "مَمْنُونٍ", ok: false }, { t: "٦", endVerse: true }
            ]
        },

        // 4. AL-ZALZALAH (99) - 8 Verses
        {
            type: "immersion",
            prof: "4/10 : <strong>Al-Zalzalah</strong>",
            instruction: "Dernière étape !",
            surah: 99,
            options: ["Izhar Halqi", "Idgham Ghunna", "Idgham Bila-Ghunna", "Iqlab", "Ikhfaa Haqiqi"],
            words: [
                { t: "إِذَا", ok: false }, { t: "زُلْزِلَتِ", ok: false }, { t: "ٱلْأَرْضُ", ok: false }, { t: "زِلْزَالَهَا", ok: false }, { t: "١", endVerse: true },
                { t: "وَأَخْرَجَتِ", ok: false }, { t: "ٱلْأَرْضُ", ok: false }, { t: "أَثْقَالَهَا", ok: false }, { t: "٢", endVerse: true },
                { t: "وَقَالَ", ok: false }, { t: "ٱلْإِنسَٰنُ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Ikhfaa." },
                { t: "مَا", ok: false }, { t: "لَهَا", ok: false }, { t: "٣", endVerse: true },
                { t: "يَوْمَئِذٍ", ok: true, rules: [{ label: "ذٍ", optIdx: 4 }], reason: "Tanwin + Tuhaddithu = Ikhfaa." },
                { t: "تُحَدِّثُ", ok: false }, { t: "أَخْبَارَهَا", ok: false }, { t: "٤", endVerse: true },
                { t: "بِأَنَّ", ok: false }, { t: "رَبَّكَ", ok: false }, { t: "أَوْحَىٰ", ok: false }, { t: "لَهَا", ok: false }, { t: "٥", endVerse: true },
                { t: "يَوْمَئِذٍ", ok: true, rules: [{ label: "ذٍ", optIdx: 1 }], reason: "Tanwin + Yasduru = Idgham Ghunna." },
                { t: "يَصْدُرُ", ok: false }, { t: "ٱلنَّاسُ", ok: false }, { t: "أَشْتَاتًا", ok: true, rules: [{ label: "تًا", optIdx: 2 }], reason: "Tanwin + Lam = Idgham Bila-Ghunna." },
                { t: "لِّيُرَوْا۟", ok: false }, { t: "أَعْمَٰلَهُمْ", ok: false }, { t: "٦", endVerse: true },
                { t: "فَمَن", ok: true, rules: [{ label: "ن", optIdx: 1 }], reason: "Idgham Ghunna." },
                { t: "يَعْمَلْ", ok: false }, { t: "مِثْقَالَ", ok: false }, { t: "ذَرَّةٍ", ok: true, rules: [{ label: "ةٍ", optIdx: 0 }], reason: "Tanwin + Khayran (Kha) = Izhar Halqi!" },
                { t: "خَيْرًا", ok: true, rules: [{ label: "رًا", optIdx: 1 }], reason: "Tanwin + Yarahu (Ya) = Idgham Ghunna." },
                { t: "يَرَهُۥ", ok: false }, { t: "٧", endVerse: true },
                { t: "وَمَن", ok: true, rules: [{ label: "ن", optIdx: 1 }], reason: "Idgham Ghunna." },
                { t: "يَعْمَلْ", ok: false }, { t: "مِثْقَالَ", ok: false }, { t: "ذَرَّةٍ", ok: true, rules: [{ label: "ةٍ", optIdx: 4 }], reason: "Tanwin + Sharran (Shin) = Ikhfaa." },
                { t: "شَرًّا", ok: true, rules: [{ label: "رًّا", optIdx: 1 }], reason: "Idgham Ghunna." },
                { t: "يَرَهُۥ", ok: false }, { t: "٨", endVerse: true }
            ]
        },

        // 5. AL-BAYYINAH (98) - 8 Verses
        {
            type: "immersion",
            prof: "5/10 : <strong>Al-Bayyinah</strong>",
            instruction: "Attention aux règles rares.",
            surah: 98,
            options: ["Izhar Halqi", "Idgham Ghunna", "Idgham Bila-Ghunna", "Iqlab", "Ikhfaa Haqiqi"],
            words: [
                { t: "لَمْ", ok: false }, { t: "يَكُنِ", ok: false }, { t: "ٱلَّذِينَ", ok: false }, { t: "كَفَرُوا۟", ok: false }, { t: "مِنْ", ok: true, rules: [{ label: "ن", optIdx: 0 }], reason: "Izhar." },
                { t: "أَهْلِ", ok: false }, { t: "ٱلْكِتَٰبِ", ok: false }, { t: "وَٱلْمُشْرِكِينَ", ok: false }, { t: "مُنفَكِّينَ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Ikhfaa." },
                { t: "حَتَّىٰ", ok: false }, { t: "تَأْتِيَهُمُ", ok: false }, { t: "ٱلْبَيِّنَةُ", ok: false }, { t: "١", endVerse: true },
                { t: "رَسُولٌ", ok: true, rules: [{ label: "لٌ", optIdx: 1 }], reason: "Idgham Ghunna." },
                { t: "مِّنَ", ok: false }, { t: "ٱللَّهِ", ok: false }, { t: "يَتْلُوا۟", ok: false }, { t: "صُحُفًا", ok: true, rules: [{ label: "فًا", optIdx: 1 }], reason: "Tanwin + Mim = Idgham Ghunna." },
                { t: "مُّطَهَّرَةً", ok: false }, { t: "٢", endVerse: true },
                { t: "فِيهَا", ok: false }, { t: "كُتُبٌ", ok: true, rules: [{ label: "بٌ", optIdx: 0 }], reason: "Izhar." },
                { t: "قَيِّمَةٌ", ok: false }, { t: "٣", endVerse: true }
            ]
        },

        // 6. AD-DUHA (93) - 11 Verses
        {
            type: "immersion",
            prof: "6/10 : <strong>Ad-Duha</strong>",
            instruction: "Trouvez les règles.",
            surah: 93,
            options: ["Izhar Halqi", "Idgham Ghunna", "Idgham Bila-Ghunna", "Iqlab", "Ikhfaa Haqiqi"],
            words: [
                { t: "وَٱلضُّحَىٰ", ok: false }, { t: "١", endVerse: true },
                { t: "وَٱلَّيْلِ", ok: false }, { t: "إِذَا", ok: false }, { t: "سَجَىٰ", ok: false }, { t: "٢", endVerse: true },
                { t: "مَا", ok: false }, { t: "وَدَّعَكَ", ok: false }, { t: "رَبُّكَ", ok: false }, { t: "وَمَا", ok: false }, { t: "قَلَىٰ", ok: false }, { t: "٣", endVerse: true },
                { t: "وَلَلْءَاخِرَةُ", ok: false }, { t: "خَيْرٌ", ok: true, rules: [{ label: "رٌ", optIdx: 2 }], reason: "Tanwin + Lam = Idgham Bila-Ghunna." },
                { t: "لَّكَ", ok: false }, { t: "مِنَ", ok: false }, { t: "ٱلْأُولَىٰ", ok: false }, { t: "٤", endVerse: true },
                { t: "وَلَسَوْفَ", ok: false }, { t: "يُعْطِيكَ", ok: false }, { t: "رَبُّكَ", ok: false }, { t: "فَتَرْضَىٰٓ", ok: false }, { t: "٥", endVerse: true },
                { t: "أَلَمْ", ok: false }, { t: "يَجِدْكَ", ok: false }, { t: "يَتِيمًا", ok: true, rules: [{ label: "مًا", optIdx: 4 }], reason: "Tanwin + Fa = Ikhfaa." },
                { t: "فَـَٔاوَىٰ", ok: false }, { t: "٦", endVerse: true },
                { t: "وَوَجَدَكَ", ok: false }, { t: "ضَآلًّا", ok: true, rules: [{ label: "لًّا", optIdx: 4 }], reason: "Tanwin + Fa = Ikhfaa." },
                { t: "فَهَدَىٰ", ok: false }, { t: "٧", endVerse: true },
                { t: "وَوَجَدَكَ", ok: false }, { t: "عَآئِلًا", ok: true, rules: [{ label: "لًا", optIdx: 4 }], reason: "Tanwin + Fa = Ikhfaa." },
                { t: "فَأَغْنَىٰ", ok: false }, { t: "٨", endVerse: true }
            ]
        },

        // 7. ASH-SHAMS (91) - 15 Verses
        {
            type: "immersion",
            prof: "7/10 : <strong>Ash-Shams</strong>",
            instruction: "Identifiez les règles.",
            surah: 91,
            options: ["Izhar Halqi", "Idgham Ghunna", "Idgham Bila-Ghunna", "Iqlab", "Ikhfaa Haqiqi"],
            words: [
                { t: "وَٱلشَّمْسِ", ok: false }, { t: "وَضُحَىٰهَا", ok: false }, { t: "١", endVerse: true },
                { t: "وَٱلْقَمَرِ", ok: false }, { t: "إِذَا", ok: false }, { t: "تَلَىٰهَا", ok: false }, { t: "٢", endVerse: true },
                { t: "وَٱلنَّهَارِ", ok: false }, { t: "إِذَا", ok: false }, { t: "جَلَّىٰهَا", ok: false }, { t: "٣", endVerse: true },
                { t: "وَٱلَّيْلِ", ok: false }, { t: "إِذَا", ok: false }, { t: "يَغْشَىٰهَا", ok: false }, { t: "٤", endVerse: true },
                { t: "وَٱlsَّمَآءِ", ok: false }, { t: "وَمَا", ok: false }, { t: "بَنَىٰهَا", ok: false }, { t: "٥", endVerse: true },
                { t: "وَٱلْأَرْضِ", ok: false }, { t: "وَمَا", ok: false }, { t: "طَحَىٰهَا", ok: false }, { t: "٦", endVerse: true },
                { t: "وَنَفْسٍ", ok: true, rules: [{ label: "سٍ", optIdx: 1 }], reason: "Tanwin + Waw = Idgham Ghunna." },
                { t: "وَمَا", ok: false }, { t: "سَوَّىٰهَا", ok: false }, { t: "٧", endVerse: true },
                { t: "فَأَلْهَمَهَا", ok: false }, { t: "فُجُورَهَا", ok: false }, { t: "وَتَقْوَىٰهَا", ok: false }, { t: "٨", endVerse: true },
                { t: "قَدْ", ok: false }, { t: "أَفْلَحَ", ok: false }, { t: "مَن", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Noun Sakina + Za = Ikhfaa." },
                { t: "زَكَّىٰهَا", ok: false }, { t: "٩", endVerse: true },
                { t: "وَقَدْ", ok: false }, { t: "خَابَ", ok: false }, { t: "مَن", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Noun Sakina + Dal (Dassaha) = Ikhfaa." },
                { t: "دَسَّىٰهَا", ok: false }, { t: "١٠", endVerse: true }
            ]
        },

        // 8. AL-ALAQ (96) - 19 Verses
        {
            type: "immersion",
            prof: "8/10 : <strong>Al-Alaq</strong>",
            instruction: "Attention au Noun Sakina.",
            surah: 96,
            options: ["Izhar Halqi", "Idgham Ghunna", "Idgham Bila-Ghunna", "Iqlab", "Ikhfaa Haqiqi"],
            words: [
                { t: "ٱقْرَأْ", ok: false }, { t: "بِٱسْمِ", ok: false }, { t: "رَبِّكَ", ok: false }, { t: "ٱلَّذِى", ok: false }, { t: "خَلَقَ", ok: false }, { t: "١", endVerse: true },
                { t: "خَلَقَ", ok: false }, { t: "ٱلْإِنسَٰنَ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Ikhfaa." },
                { t: "مِنْ", ok: true, rules: [{ label: "ن", optIdx: 0 }], reason: "Noun + 'Alaq ('Ayn) = Izhar." },
                { t: "عَلَقٍ", ok: false }, { t: "٢", endVerse: true },
                { t: "ٱقْرَأْ", ok: false }, { t: "وَرَبُّكَ", ok: false }, { t: "ٱلْأَكْرَمُ", ok: false }, { t: "٣", endVerse: true },
                { t: "ٱلَّذِى", ok: false }, { t: "عَلَّمَ", ok: false }, { t: "بِٱلْقَلَمِ", ok: false }, { t: "٤", endVerse: true },
                { t: "عَلَّمَ", ok: false }, { t: "ٱلْإِنسَٰنَ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Ikhfaa." },
                { t: "مَا", ok: false }, { t: "لَمْ", ok: false }, { t: "يَعْلَمْ", ok: false }, { t: "٥", endVerse: true },
                { t: "كَلَّآ", ok: false }, { t: "إِنَّ", ok: false }, { t: "ٱلْإِنسَٰنَ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Ikhfaa." },
                { t: "لَيَطْغَىٰٓ", ok: false }, { t: "٦", endVerse: true },
                { t: "أَن", ok: true, rules: [{ label: "ن", optIdx: 2 }], reason: "Noun + Raa = Idgham Bila Ghunna." },
                { t: "رَّءَاهُ", ok: false }, { t: "ٱسْتَغْنَىٰٓ", ok: false }, { t: "٧", endVerse: true },
                { t: "١٥", endVerse: true }, { t: "لَنَسْفَعًۢا", ok: true, rules: [{ label: "عًۢ", optIdx: 3 }], reason: "Tanwin + Ba = Iqlab." },
                { t: "بِٱلنَّاصِيَةِ", ok: false }
            ]
        },

        // 9. AL-BALAD (90) - 20 Verses
        {
            type: "immersion",
            prof: "9/10 : <strong>Al-Balad</strong>",
            instruction: "Identifiez les règles.",
            surah: 90,
            options: ["Izhar Halqi", "Idgham Ghunna", "Idgham Bila-Ghunna", "Iqlab", "Ikhfaa Haqiqi"],
            words: [
                { t: "لَآ", ok: false }, { t: "أُقْسِمُ", ok: false }, { t: "بِهَٰذَا", ok: false }, { t: "ٱلْبَلَدِ", ok: false }, { t: "١", endVerse: true },
                { t: "وَأَنتَ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Noun Sakina + Ta = Ikhfaa." },
                { t: "حِلٌّۢ", ok: true, rules: [{ label: "لٌ", optIdx: 3 }], reason: "Tanwin + Ba = Iqlab." },
                { t: "بِهَٰذَا", ok: false }, { t: "ٱلْبَلَدِ", ok: false }, { t: "٢", endVerse: true },
                { t: "وَوَالِدٍ", ok: true, rules: [{ label: "دٍ", optIdx: 1 }], reason: "Tanwin + Waw = Idgham Ghunna." },
                { t: "وَمَا", ok: false }, { t: "وَلَدَ", ok: false }, { t: "٣", endVerse: true },
                { t: "لَقَدْ", ok: false }, { t: "خَلَقْنَا", ok: false }, { t: "ٱلْإِنسَٰنَ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Noun Sakina + Sin = Ikhfaa." },
                { t: "فِى", ok: false }, { t: "كَبَدٍ", ok: true, rules: [{ label: "دٍ", optIdx: 0 }], reason: "Tanwin + Alif (Ayah 5) = Izhar." }, // corrected from previous logic
                { t: "٤", endVerse: true },
                { t: "أَيَحْسَبُ", ok: false }, { t: "أَن", ok: true, rules: [{ label: "ن", optIdx: 2 }], reason: "Noun Sakina + Lam = Idgham Bila-Ghunna." },
                { t: "لَّن", ok: true, rules: [{ label: "ن", optIdx: 1 }], reason: "Noun Sakina + Ya = Idgham Ghunna." },
                { t: "يَقْدِرَ", ok: false }, { t: "عَلَيْهِ", ok: false }, { t: "أَحَدٌ", ok: false }, { t: "٥", endVerse: true },
                { t: "يَقُولُ", ok: false }, { t: "أَهْلَكْتُ", ok: false }, { t: "مَالًا", ok: true, rules: [{ label: "لً", optIdx: 2 }], reason: "Tanwin + Lam = Idgham Bila-Ghunna." },
                { t: "لُّبَدًا", ok: false }, { t: "٦", endVerse: true },
                { t: "أَيَحْسَبُ", ok: false }, { t: "أَن", ok: true, rules: [{ label: "ن", optIdx: 2 }], reason: "Noun Sakina + Lam = Idgham Bila-Ghunna." },
                { t: "لَّمْ", ok: false }, { t: "يَرَهُۥٓ", ok: false }, { t: "أَحَدٌ", ok: false }, { t: "٧", endVerse: true },
                { t: "أَلَمْ", ok: false }, { t: "نَجْعَل", ok: false }, { t: "لَّهُۥ", ok: false }, { t: "عَيْنَيْنِ", ok: false }, { t: "٨", endVerse: true },
                { t: "وَلِسَانًا", ok: true, rules: [{ label: "نً", optIdx: 1 }], reason: "Tanwin + Waw = Idgham Ghunna." },
                { t: "وَشَفَتَيْنِ", ok: false }, { t: "٩", endVerse: true },
                { t: "وَهَدَيْنَٰهُ", ok: false }, { t: "ٱلنَّجْدَيْنِ", ok: false }, { t: "١٠", endVerse: true }
            ]
        },

        // 10. AL-LAYL (92) - 21 Verses
        {
            type: "immersion",
            prof: "10/10 : <strong>Al-Layl</strong>",
            instruction: "Attention aux liaisons.",
            surah: 92,
            options: ["Izhar Halqi", "Idgham Ghunna", "Idgham Bila-Ghunna", "Iqlab", "Ikhfaa Haqiqi"],
            words: [
                { t: "وَٱلَّيْلِ", ok: false }, { t: "إِذَا", ok: false }, { t: "يَغْشَىٰ", ok: false }, { t: "١", endVerse: true },
                { t: "وَٱلنَّهَارِ", ok: false }, { t: "إِذَا", ok: false }, { t: "تَجَلَّىٰ", ok: false }, { t: "٢", endVerse: true },
                { t: "وَمَا", ok: false }, { t: "خَلَقَ", ok: false }, { t: "ٱلذَّكَرَ", ok: false }, { t: "وَٱلْأُنثَىٰٓ", ok: true, rules: [{ label: "ن", optIdx: 4 }], reason: "Noun Sakina + Tha = Ikhfaa." }, { t: "٣", endVerse: true },
                { t: "إِنَّ", ok: false }, { t: "سَعْيَكُمْ", ok: false }, { t: "لَشَتَّىٰ", ok: false }, { t: "٤", endVerse: true },
                { t: "فَأَمَّا", ok: false }, { t: "مَنْ", ok: true, rules: [{ label: "ن", optIdx: 0 }], reason: "Noun Sakina + Hamza = Izhar." },
                { t: "أَعْطَىٰ", ok: false }, { t: "وَٱتَّقَىٰ", ok: false }, { t: "٥", endVerse: true },
                { t: "وَصَدَّقَ", ok: false }, { t: "بِٱلْحُسْنَىٰ", ok: false }, { t: "٦", endVerse: true },
                { t: "فَسَنُيَسِّرُهُۥ", ok: false }, { t: "لِلْيُسْرَىٰ", ok: false }, { t: "٧", endVerse: true },
                { t: "وَأَمَّا", ok: false }, { t: "مَنۢ", ok: true, rules: [{ label: "ن", optIdx: 3 }], reason: "Noun Sakina + Ba = Iqlab." },
                { t: "بَخِلَ", ok: false }, { t: "وَٱسْتَغْنَىٰ", ok: false }, { t: "٨", endVerse: true }
            ]
        }
    ]
};
