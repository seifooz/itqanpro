const GHUNNA_DATA = {
    id: "ghunna",
    title: "AL-GHUNNA",
    type: "Les Bases",
    steps: [
        {
            type: "lesson",
            prof: "Bienvenue dans le monde de la <strong>Ghunna</strong> (Nasalisation).<br>C'est le 'Miel' du Tajweed 🍯.",
            html: `
            <div class="concept-card">
                <h3>Définition : Le Chant du Nez</h3>
                <p>La Ghunna est un son qui sort du <strong>Khayshum</strong> (la cavité nasale).</p>
                <div style="background:#fce4ec; padding:15px; border-radius:10px; margin-top:15px; text-align:center;">
                    <div style="font-size:3rem;">👃</div>
                    <p style="color:#880e4f; font-weight:bold; margin-top:5px;">Bouche fermée = Son bloqué !</p>
                </div>
                <div class="tip-box">
                    Fais le test : pince ton nez et essaie de dire "NNNNN". Impossible !
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "La règle concerne 2 lettres, mais seulement quand elles portent un <strong>Costume Spécial</strong>.",
            html: `
            <div class="concept-card">
                <h3>Les 2 Lettres : Nun & Mim</h3>
                <div style="display:flex; justify-content:center; gap:20px; margin-top:20px;">
                    <div style="background:white; border:2px solid #e91e63; padding:15px; border-radius:10px; min-width:80px; text-align:center;">
                        <div class="ar-big" style="color:#e91e63;">ن</div>
                        <div style="font-weight:bold;">Nun</div>
                    </div>
                    <div style="background:white; border:2px solid #e91e63; padding:15px; border-radius:10px; min-width:80px; text-align:center;">
                        <div class="ar-big" style="color:#e91e63;">م</div>
                        <div style="font-weight:bold;">Mim</div>
                    </div>
                </div>
                <p style="text-align:center; margin-top:20px;">La Condition : <strong>La SHADDA ( ّ )</strong></p>
            </div>`
        },

        {
            type: "lesson",
            prof: "<strong>La Règle d'Or :</strong><br>Dès que tu vois <strong>نّ</strong> ou <strong>مّ</strong>, tu dois tenir 2 Temps.",
            html: `
            <div class="concept-card">
                <h3>Le Chronomètre ⏱️</h3>
                <div style="display:flex; align-items:center; justify-content:center; gap:10px; background:#fce4ec; padding:20px; border-radius:15px; border:2px solid #f06292;">
                    <div class="ar-big" style="color:#880e4f;">نّ / مّ</div>
                    <div style="font-size:2rem;">=</div>
                    <div style="text-align:center;">
                        <span style="font-size:1.5rem; font-weight:bold; color:#d81b60;">2 Temps</span>
                        <div style="font-size:0.8rem;">(Harakat)</div>
                    </div>
                </div>
                <div style="margin-top:15px; text-align:center; color:#555;">
                    C'est le temps de plier et déplier son doigt.
                </div>
            </div>`
        },

        // EXAMPLES
        {
            type: "lesson",
            prof: "Voici les 'Stars' de la Ghunna. On les retrouve partout !",
            html: `
            <div class="concept-card">
                <h3>Exemples Fréquents</h3>

                <div class="audio-row-item">
                    <div class="ar-big" style="color:#d81b60;">إِنَّ</div>
                    <div style="flex:1; margin-left:10px;">
                        <strong>Inna</strong>
                        <div style="font-size:0.8rem;">(Vraiment/Certes)</div>
                    </div>
                    <button class="mini-play" onclick="playAudio('ghunna_innag', 8, 10, 'innag')">▶</button>
                </div>

                <div class="audio-row-item">
                    <div class="ar-big" style="color:#d81b60;">ثُمَّ</div>
                    <div style="flex:1; margin-left:10px;">
                        <strong>Thumma</strong>
                        <div style="font-size:0.8rem;">(Ensuite)</div>
                    </div>
                    <button class="mini-play" onclick="playAudio('ghunna_thummag', 0, 2, 'thummag')">▶</button>
                </div>

                <div class="audio-row-item">
                    <div class="ar-big" style="color:#d81b60;">عَمَّ</div>
                    <div style="flex:1; margin-left:10px;">
                        <strong>'Amma</strong>
                        <div style="font-size:0.8rem;">(Sur quoi)</div>
                    </div>
                    <button class="mini-play" onclick="playAudio('ghunna_ammag', 0, 2, 'ammag')">▶</button>
                </div>
            </div>`
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Vocal</strong><br>Applique la durée de 2 temps."
        },
        {
            type: "workshop",
            prof: "Prends ton temps. Fais vibrer le nez !",
            examples: [
                { type: "Nun Shadda", ar: "إِنَّهُم", url: "ghunna_lesson_1", start: 6, end: 8 },
                { type: "Mim Shadda", ar: "أُمِّهِۦ", url: "ghunna_mim_shadda_2", start: 2, end: 4 },
                { type: "Nun Shadda", ar: "ٱلنَّاسِ", url: "ghunna_nun_shadda_3", start: 3, end: 5 },
                { type: "Mim Shadda", ar: "حَمَّالَةَ", url: "ghunna_mim_shadda_4", start: 2, end: 4 }
            ]
        },

        // IMMERSION (New)
        {
            type: "intro",
            prof: "📖 <strong>Immersion Totale</strong><br>Sourate An-Nas (114) est remplie de Ghunnas !"
        },
        {
            type: "immersion",
            prof: "Sourate An-Nas",
            instruction: "Trouve tous les Nun et Mim avec Shadda (Ghunna 2 Temps).",
            surah: 114,
            words: [
                { t: "قُلْ", ok: false }, { t: "أَعُوذُ", ok: false }, { t: "بِرَبِّ", ok: false }, { t: "ٱلنَّاسِ", ok: true, noun: "نَّ", letter: "Nun Shadda" }, { t: "١", endVerse: true },
                { t: "مَلِكِ", ok: false }, { t: "ٱلنَّاسِ", ok: true, noun: "نَّ", letter: "Nun Shadda" }, { t: "٢", endVerse: true },
                { t: "إِلَٰهِ", ok: false }, { t: "ٱلنَّاسِ", ok: true, noun: "نَّ", letter: "Nun Shadda" }, { t: "٣", endVerse: true },
                { t: "مِن", ok: false }, { t: "شَرِّ", ok: false }, { t: "ٱلْوَسْوَاسِ", ok: false }, { t: "ٱلْخَنَّاسِ", ok: true, noun: "نَّ", letter: "Nun Shadda" }, { t: "٤", endVerse: true },
                { t: "ٱلَّذِي", ok: false }, { t: "يُوَسْوِسُ", ok: false }, { t: "فِي", ok: false }, { t: "صُدُورِ", ok: false }, { t: "ٱلنَّاسِ", ok: true, noun: "نَّ", letter: "Nun Shadda" }, { t: "٥", endVerse: true },
                { t: "مِنَ", ok: false }, { t: "ٱلْجِنَّةِ", ok: true, noun: "نَّ", letter: "Nun Shadda" }, { t: "وَٱلنَّاسِ", ok: true, noun: "نَّ", letter: "Nun Shadda" }, { t: "٦", endVerse: true }
            ]
        },

        {
            type: "immersion",
            prof: "Sourate At-Takathur (102)",
            instruction: "Maintenant, chasse les MIM avec Shadda (مّ) !",
            surah: 102,
            words: [
                { t: "أَلْهَاكُمُ", ok: false }, { t: "ٱلتَّكَاثُرُ", ok: false }, { t: "١", endVerse: true },
                { t: "حَتَّىٰ", ok: false }, { t: "زُرْتُمُ", ok: false }, { t: "ٱلْمَقَابِرَ", ok: false }, { t: "٢", endVerse: true },
                { t: "كَلَّا", ok: false }, { t: "سَوْفَ", ok: false }, { t: "تَعْلَمُونَ", ok: false }, { t: "٣", endVerse: true },
                { t: "ثُمَّ", ok: true, noun: "مَّ", letter: "Mim Shadda" }, { t: "كَلَّا", ok: false }, { t: "سَوْفَ", ok: false }, { t: "تَعْلَمُونَ", ok: false }, { t: "٤", endVerse: true },
                { t: "كَلَّا", ok: false }, { t: "لَوْ", ok: false }, { t: "تَعْلَمُونَ", ok: false }, { t: "عِلْمَ", ok: false }, { t: "ٱلْيَقِينِ", ok: false }, { t: "٥", endVerse: true },
                { t: "لَتَرَوُنَّ", ok: false, noun: "نَّ", letter: "Piège ! C'est un Nun" }, { t: "ٱلْجَحِيمَ", ok: false }, { t: "٦", endVerse: true },
                { t: "ثُمَّ", ok: true, noun: "مَّ", letter: "Mim Shadda" }, { t: "لَتَرَوُنَّهَا", ok: false, noun: "نَّ", letter: "Piège ! C'est un Nun" }, { t: "عَيْنَ", ok: false }, { t: "ٱلْيَقِينِ", ok: false }, { t: "٧", endVerse: true },
                { t: "ثُمَّ", ok: true, noun: "مَّ", letter: "Mim Shadda" }, { t: "لَتُسْـَٔلُنَّ", ok: false, noun: "نَّ", letter: "Piège ! C'est un Nun" }, { t: "يَوْمَئِذٍ", ok: false }, { t: "عَنِ", ok: false }, { t: "ٱلنَّعِيمِ", ok: false }, { t: "٨", endVerse: true }
            ]
        },

        // EXAMEN FINAL
        { type: "intro", prof: "🧐 <strong>Examen Final</strong><br>Simple mais efficace." },

        {
            type: "quiz_theory",
            prof: "1/4 - La Ghunna est un son qui sort de :",
            opts: [{ t: "La Gorge (Halq)", good: false }, { t: "Le Nez (Khayshum)", good: true }],
            exp: "C'est une nasalisation."
        },
        {
            type: "quiz_theory",
            prof: "2/4 - Quelles sont les lettres de la Ghunna ?",
            opts: [{ t: "Mim et Nun (م - ن)", good: true }, { t: "Ba et Mim (ب - م)", good: false }],
            exp: "Seulement Mim et Nun."
        },
        {
            type: "quiz_theory",
            prof: "3/4 - Quelle est la condition OBLIGATOIRE ?",
            opts: [{ t: "Une Fatha", good: false }, { t: "Une Shadda ( ّ )", good: true }],
            exp: "Pas de Shadda = Pas de Ghunna longue."
        },
        {
            type: "quiz_theory",
            prof: "4/4 - Combien de temps doit-on tenir le son ?",
            opts: [{ t: "1 Temps (Rapide)", good: false }, { t: "2 Temps (Long)", good: true }],
            exp: "On la tient 2 Harakat."
        }
    ]
};
