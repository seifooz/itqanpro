const MAD_ARID_DATA = {
    id: "mad_arid",
    title: "7. MAD ARID LISSUKUN",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Ce Mad est le plus fréquent à l'écoute, car il survient à la fin des versets.",
            html: `
            <div class="concept-card">
                <h3>Définition</h3>
                <p>On l’appelle ainsi lorsque la lettre de l’allongement est suivie d’une lettre ayant un <strong>Sukun ( سُكُون )</strong> dû à l’arrêt.</p>
                <div style="background:#fff3e0; padding:15px; border-radius:10px; margin:15px 0; text-align:center; border:2px solid #ff9800;">
                    <div style="font-size:2rem; color:#e65100;">ٱلْعَٰلَمِينَ 🛑</div>
                    <div style="color:#e65100; font-weight:bold; margin-top:5px;">Le "Na" ( نُون ) final devient muet (Sukun).<br>Le "Yaa" ( ي ) s'allonge.</div>
                </div>
                <div class="tip-box">
                    <strong>Durée :</strong> 2, 4 ou 6 temps (au choix).
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Pourquoi 'Arid' ? Parce que le Sukun n'est pas là à l'origine.",
            html: `
            <div class="concept-card">
                <h3>La Logique : Accidentel</h3>
                <p><strong>Arid ( عَارِض )</strong> signifie "Accidentel".</p>
                <ul style="text-align:left; margin:15px; list-style-type:none; background:#fff; padding:15px; border-radius:10px; border:1px solid #ddd;">
                    <li style="margin-bottom:10px;">🏃 <strong>En continuant</strong> : La lettre se prononce normalement (pas de Mad Arid).</li>
                    <li>🛑 <strong>À l'arrêt</strong> : La dernière voyelle saute, le Sukun apparaît ➡️ Mad Arid.</li>
                </ul>
                <div class="tip-box">
                    <strong>Le Choix :</strong>
                    <ul>
                    <li>2 Harakat (Qasr)</li>
                    <li>4 Harakat (Tawassut - Recommandé)</li>
                    <li>6 Harakat (Tul)</li>
                    </ul>
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Observez comment la dernière voyelle disparaît à l'arrêt pour laisser place à l'allongement.",
            html: `
            <div class="concept-card">
                <h3>Exemples de Transformation</h3>
                
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                    <!-- Ya -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #ef6c00;">
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#ef6c00;">ٱلْعَٰلَمِينَ</div>
                            <div style="font-size:0.8rem; color:#666;">Al-'Aalamiina</div>
                        </div>
                        <div style="font-size:1.5rem;">➡️</div>
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#bf360c;">ٱلْعَٰلَمِينْ</div>
                            <div style="font-size:0.8rem; color:#bf360c;">Al-'Aalamiiin</div>
                        </div>
                    </div>

                    <!-- Wow -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #ef6c00;">
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#ef6c00;">تَعْلَمُونَ</div>
                            <div style="font-size:0.8rem; color:#666;">Ta'lamuuna</div>
                        </div>
                        <div style="font-size:1.5rem;">➡️</div>
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#bf360c;">تَعْلَمُونْ</div>
                            <div style="font-size:0.8rem; color:#bf360c;">Ta'lamuuun</div>
                        </div>
                    </div>

                    <!-- Alif -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #ef6c00;">
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#ef6c00;">ٱلْحِسَابِ</div>
                            <div style="font-size:0.8rem; color:#666;">Al-Hisaabi</div>
                        </div>
                        <div style="font-size:1.5rem;">➡️</div>
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#bf360c;">ٱلْحِسَابْ</div>
                            <div style="font-size:0.8rem; color:#bf360c;">Al-Hisaaab</div>
                        </div>
                    </div>

                </div>
            </div>`
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Vocal</strong><br>Essayons le 'Tawassut' (4 Temps), le plus agréable à l'écoute."
        },
        {
            type: "workshop",
            prof: "Arrêtez-vous nettement sur la dernière consonne.",
            examples: [
                { type: "Arrêt 4 Temps", ar: "ٱلْعَٰلَمِينَ", url: "001002", start: 4, end: 6, id: "arid1" },
                { type: "Arrêt 4 Temps", ar: "ٱلدِّينِ", url: "001004", start: 3, end: 5, id: "arid2" },
                { type: "Arrêt 4 Temps", ar: "نَسْتَعِينُ", url: "001005", start: 6, end: 8, id: "arid3" }
            ]
        },

        // IMMERSION SURAH AL-FATIHAH (1)
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion Coranique</strong><br>Sourate Al-Fatihah (1). Chaque fin de verset est un Mad Arid !",
            instruction: "Cliquez sur les derniers mots de chaque verset pour valider le Mad Arid.",
            surah: 1,
            words: [
                { t: "بِسْمِ", ok: false }, { t: "ٱللَّهِ", ok: false }, { t: "ٱلرَّحْمَٰنِ", ok: false }, { t: "ٱلرَّحِيمِ", ok: true, reason: "Mad Arid : Arrêt sur la fin du verset (Ar-Rahiim)." }, { t: "١", endVerse: true },
                { t: "ٱلْحَمْدُ", ok: false }, { t: "لِلَّهِ", ok: false }, { t: "رَبِّ", ok: false }, { t: "ٱلْعَٰلَمِينَ", ok: true, reason: "Mad Arid (Al-Aalamiiin)." }, { t: "٢", endVerse: true },
                { t: "ٱلرَّحْمَٰنِ", ok: false }, { t: "ٱلرَّحِيمِ", ok: true, reason: "Mad Arid (Ar-Rahiiim)." }, { t: "٣", endVerse: true },
                { t: "مَٰلِكِ", ok: false }, { t: "يَوْمِ", ok: false }, { t: "ٱلدِّينِ", ok: true, reason: "Mad Arid (Ad-Diiin)." }, { t: "٤", endVerse: true },
                { t: "إِيَّاكَ", ok: false }, { t: "نَعْبُدُ", ok: false }, { t: "وإِيَّاكَ", ok: false }, { t: "نَسْتَعِينُ", ok: true, reason: "Mad Arid (Nasta'iiin)." }, { t: "٥", endVerse: true },
                { t: "ٱهْدِنَا", ok: false }, { t: "ٱلصِّرَٰطَ", ok: false }, { t: "ٱلْمُسْتَقِيمَ", ok: true, reason: "Mad Arid (Al-Mustaqiiim)." }, { t: "٦", endVerse: true },
                { t: "صِرَٰطَ", ok: false }, { t: "ٱلَّذِينَ", ok: false }, { t: "أَنْعَمْتَ", ok: false }, { t: "عَلَيْهِمْ", ok: false }, { t: "غَيْرِ", ok: false }, { t: "ٱلْمَغْضُوبِ", ok: false }, { t: "عَلَيْهِمْ", ok: false }, { t: "وَلَا", ok: false }, { t: "ٱلضَّآلِّينَ", ok: true, reason: "Mad Arid (Addaaalliiin)." }, { t: "٧", endVerse: true }
            ]
        },

        // EXAM
        { type: "intro", prof: "🧐 <strong>Évaluation</strong>" },
        {
            type: "quiz_theory",
            prof: "1/3 - Pourquoi appelle-t-on ce Mad 'Arid' (Accidentel) ?",
            opts: [{ t: "Car il n'existe qu'à l'arrêt", good: true }, { t: "Car il est dur à prononcer", good: false }],
            exp: "Si on continue la lecture, le Mad redevient Naturel (2 temps) et le Sukun disparaît."
        },
        {
            type: "quiz_theory",
            prof: "2/3 - Quelle est la durée permise ?",
            opts: [{ t: "Uniquement 4 temps", good: false }, { t: "2, 4 ou 6 temps", good: true }],
            exp: "Le lecteur a le choix, mais doit rester constant."
        },
        {
            type: "quiz_theory",
            prof: "3/3 - Si je ne m'arrête PAS sur ( ٱلْعَٰلَمِينَ ), quelle est la durée ?",
            opts: [{ t: "2 Temps (Naturel)", good: true }, { t: "6 Temps (Long)", good: false }],
            exp: "En continuant, la cause de l'arrêt (le Sukun) disparaît."
        }
    ]
};
