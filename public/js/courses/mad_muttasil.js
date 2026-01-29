const MAD_MUTTASIL_DATA = {
    id: "mad_muttasil",
    title: "5. MAD WAJIB MUTTASIL",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Nous entrons dans la catégorie des Mads longs (4-5 temps). Le premier est <strong>Obligatoire (Wajib)</strong>.",
            html: `
            <div class="concept-card">
                <h3>Définition</h3>
                <p style="color:#333;">On l’appelle ainsi lorsque la lettre de l’allongement est suivie de la lettre <strong>Hamza ( هَمْزَة )</strong>, le tout en un <strong>SEUL mot</strong>.</p>
                <div style="background:#e3f2fd; padding:15px; border-radius:10px; margin:15px 0; text-align:center; border:2px solid #2196f3;">
                    <div style="font-size:2rem; color:#0d47a1;">سَمَآءَ</div>
                    <div style="color:#0d47a1; font-weight:bold; margin-top:5px;">Mad + Hamza ( هَمْزَة ) = Même mot 🏠</div>
                </div>
                <div class="tip-box">
                    <strong>Durée :</strong> 4 ou 5 temps (Harakat).
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Pourquoi 'Muttasil' (Connecté) ? Parce qu'ils sont inséparables.",
            html: `
            <div class="concept-card">
                <h3>La Logique : Connexion</h3>
                <p style="color:#333;"><strong>Muttasil ( مُتَّصِل )</strong> signifie "Attaché". La cause de l'allongement (la Hamza) est attachée à la lettre de Mad dans le même corps (le mot).</p>
                <div class="tip-box" style="border-left-color:#ff9800;">
                    <strong>Jugement : Wajib (Obligatoire)</strong><br>
                    Il est interdit de le raccourcir à 2 temps. Tous les lecteurs l'allongent.
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Repérez la Vague (~) au-dessus de la lettre. C'est le signe de l'allongement long.",
            html: `
            <div class="concept-card">
                <h3>Exemples Visuels</h3>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                    
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #1565c0;">
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#1565c0;">جَآءَ</div>
                            <div style="font-size:0.8rem; color:#666;">Jaaa-a</div>
                        </div>
                        <div style="font-size:0.8rem; color:#333;">Alif ( أَلِف ) + Hamza ( هَمْزَة )</div>
                    </div>

                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #1565c0;">
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#1565c0;">سُوٓءَ</div>
                            <div style="font-size:0.8rem; color:#666;">Suuu-a</div>
                        </div>
                        <div style="font-size:0.8rem; color:#333;">Wow ( وَاو ) + Hamza ( هَمْزَة )</div>
                    </div>

                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #1565c0;">
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#1565c0;">سِيٓءَتْ</div>
                            <div style="font-size:0.8rem; color:#666;">Siii-at</div>
                        </div>
                        <div style="font-size:0.8rem; color:#333;">Ya ( يَاء ) + Hamza ( هَمْزَة )</div>
                    </div>

                </div>
            </div>`
        },

        // OBSERVATION
        {
            type: "quiz_theory",
            prof: "Test de vigilance ⚡️<br>Dans ( فِيٓ أَنفُسِهِم ), est-ce un Mad Muttasil ?",
            html: `
            <div class="concept-card">
                 <div style="text-align:center; margin-bottom:15px;">
                    <div class="ar-word ar-medium">فِيٓ أَنفُسِهِم</div>
                </div>
                <p>Regardez bien : Est-ce un seul ou deux mots ?</p>
            </div>`,
            opts: [{ t: "Oui, Muttasil", good: false }, { t: "Non, c'est Munfasil (Séparé)", good: true }],
            exp: "Ici, le Mad ( فِي ) est dans un mot, et la Hamza ( أَنفُسِهِم ) dans un autre. Ce n'est PAS Muttasil."
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Vocal</strong><br>Allongez le son pendant 4 à 5 temps."
        },
        {
            type: "workshop",
            prof: "Suivez la vague et assurez-vous de bien prononcer la Hamza à la fin.",
            examples: [
                { type: "Muttasil (Alif)", ar: "إِذَا جَآءَ", url: "mad_muttasil_lesson_1", start: 0, end: 3, id: "muttasil1" },
                { type: "Muttasil (Alif)", ar: "ٱلسَّمَآءُ", url: "mad_muttasil_muttasil_alif__2", start: 0, end: 2, id: "muttasil2" },
                { type: "Muttasil (Wow)", ar: "يَنُوٓءُ", url: "mad_muttasil_muttasil_wow__3", start: 16, end: 18, id: "muttasil3" },
                { type: "Muttasil (Ya)", ar: "هَنِيٓـًٔا", url: "mad_muttasil_muttasil_ya__4", start: 10, end: 12, id: "muttasil4" }
            ]
        },

        // IMMERSION SURAH AN-NABA (78)
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion Coranique</strong><br>Sourate An-Naba (78). Trouvez les Mad Wajib Muttasil !",
            instruction: "Cliquez sur les mots où la Vague (~) est suivie d'une Hamza DANS LE MÊME MOT.",
            surah: 78,
            words: [
                { t: "عَمَّ", ok: false }, { t: "يَتَسَآءَلُونَ", ok: true, reason: "Mad + Hamza dans le même mot (Yatasaa-aloun)." }, { t: "١", endVerse: true },
                { t: "عَنِ", ok: false }, { t: "ٱلنَّبَإِ", ok: false }, { t: "ٱلْعَظِيمِ", ok: false }, { t: "٢", endVerse: true },
                { t: "ٱلَّذِى", ok: false }, { t: "هُمْ", ok: false }, { t: "فِيهِ", ok: false }, { t: "مُخْتَلِفُونَ", ok: false }, { t: "٣", endVerse: true },
                // Skipping to verse 14 for another example
                { t: "وَأَنزَلْنَا", ok: false }, { t: "مِنَ", ok: false }, { t: "ٱلْمُعْصِرَٰتِ", ok: false }, { t: "مَآءً", ok: true, reason: "Mad + Hamza dans le même mot (Maaa-an)." }, { t: "ثَجَّاجًا", ok: false }, { t: "١٤", endVerse: true },
                { t: "لِّنُخْرِجَ", ok: false }, { t: "بِهِۦ", ok: false }, { t: "حَبًّا", ok: false }, { t: "وَنَبَاتًا", ok: false }, { t: "١٥", endVerse: true },
                { t: "وَجَنَّٰتٍ", ok: false }, { t: "أَلْفَافًا", ok: false }, { t: "١٦", endVerse: true },
                { t: "إِنَّ", ok: false }, { t: "يَوْمَ", ok: false }, { t: "ٱلْفَصْلِ", ok: false }, { t: "كَانَ", ok: false }, { t: "مِيقَٰتًا", ok: false }, { t: "١٧", endVerse: true },
                { t: "يَوْمَ", ok: false }, { t: "يُنفَخُ", ok: false }, { t: "فِى", ok: false }, { t: "ٱلصُّورِ", ok: false }, { t: "فَتَأْتُونَ", ok: false }, { t: "أَفْوَاجًا", ok: false }, { t: "١٨", endVerse: true },
                { t: "وَفُتِحَتِ", ok: false }, { t: "ٱلسَّمَآءُ", ok: true, reason: "Mad + Hamza dans le même mot (Assamaaa-u)." }, { t: "فَكَانَتْ", ok: false }, { t: "أَبْوَٰبًا", ok: false }, { t: "١٩", endVerse: true },
                { t: "وَسُيِّرَتِ", ok: false }, { t: "ٱلْجِبَالُ", ok: false }, { t: "فَكَانَتْ", ok: false }, { t: "سَرَابًا", ok: false }, { t: "٢٠", endVerse: true },
                { t: "إِنَّ", ok: false }, { t: "جَهَنَّمَ", ok: false }, { t: "كَانَتْ", ok: false }, { t: "مِرْصَادًا", ok: false }, { t: "٢١", endVerse: true },
                { t: "لِّلطَّٰغِينَ", ok: false }, { t: "مَـَٔابًا", ok: false }, { t: "٢٢", endVerse: true },
                // Skipping to verse 26 for "Jazaa-an"
                { t: "جَزَآءً", ok: true, reason: "Mad + Hamza dans le même mot (Jazaaa-an)." }, { t: "وِفَاقًا", ok: false }, { t: "٢٦", endVerse: true },
                // Verse 39 for "Shaa-a"
                { t: "ذَٰلِكَ", ok: false }, { t: "ٱلْيَوْمُ", ok: false }, { t: "ٱلْحَقُّ", ok: false }, { t: "فَمَن", ok: false }, { t: "شَآءَ", ok: true, reason: "Mad + Hamza dans le même mot (Shaaa-a)." }, { t: "ٱتَّخَذَ", ok: false }, { t: "إِلَىٰ", ok: false }, { t: "رَبِّهِۦ", ok: false }, { t: "مَـَٔابًا", ok: false }, { t: "٣٩", endVerse: true }
            ]
        },

        // EXAM
        { type: "intro", prof: "🧐 <strong>Évaluation</strong>" },
        {
            type: "quiz_theory",
            prof: "1/3 - Quelle est la condition principale du Mad Muttasil ?",
            opts: [{ t: "Mad et Hamza dans deux mots différents", good: false }, { t: "Mad et Hamza dans le MÊME mot", good: true }],
            exp: "C'est la définition même de 'Muttasil' (Connecté)."
        },
        {
            type: "quiz_theory",
            prof: "2/3 - Quelle est la durée d'allongement ?",
            opts: [{ t: "2 Temps", good: false }, { t: "4 ou 5 Temps", good: true }],
            exp: "C'est un allongement Wajib (Obligatoire) de 4 ou 5 harakat."
        },
        {
            type: "quiz_theory",
            prof: "3/3 - Lequel de ces mots est un Mad Muttasil ?",
            type: "quiz_theory",
            prof: "3/3 - Lequel de ces mots est un Mad Muttasil ?",
            opts: [{ t: "بِمَآ أُنزِلَ", good: false }, { t: "سَوَآءٌ", good: true }],
            exp: "( بِمَآ أُنزِلَ ) est séparé (Munfasil). ( سَوَآءٌ ) est un seul mot."
        }
    ]
};
