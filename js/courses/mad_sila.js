const MAD_SILA_DATA = {
    id: "mad_sila",
    title: "4. MAD AS-SILA",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "quiz_theory",
            prof: "Observez et écoutez ce verset de Surah Al-Inshiqaq.<br>Comment prononcez-vous le pronom 'HU' ?",
            html: `
            <div class="concept-card" style="text-align:center;">
                <h3>Observation Audio</h3>
                <div style="font-size:1.8rem; margin-top:20px; margin-bottom:10px; color:#006064; font-family: 'Scheherazade New', serif; line-height:1.6;">
                    <span style="color:#d32f2f;">إِنَّهُۥ</span> كَانَ فِيٓ أَهْلِهِۦ مَسْرُورًا
                </div>
                
                <div style="margin-bottom:20px;">
                    <button class="btn-audio btn-listen" id="play-intro-sila" onclick="playAudio('mad_sila_intro_sila', 0, 100, 'intro-sila')" style="background:#e0f7fa; color:#006064; border:none; padding:10px 20px; border-radius:30px; font-weight:bold; cursor:pointer; display:inline-flex; align-items:center; gap:8px;">
                        <span>▶️</span> Écouter la Récitation
                    </button>
                </div>
            </div>`,
            questions: [
                {
                    q: "Après 'Innahu', avez-vous entendu un allongement ?",
                    opts: ["Non, je prononce 'HU' court sans prolongation (Innahu Kana)", "Oui, je fais une prolongation (Innahuuu Kana)"],
                    good: 1
                }
            ],
            exp: "Exact ! Bien qu'il n'y ait pas de lettre de Mad écrite, on l'allonge à l'oral. C'est le Mad As-Sila."
        },
        {
            type: "lesson",
            prof: "C'est la particularité de ce pronom ! Le 'Ha' ( ه ) de la 3ème personne se prolonge souvent comme s'il y avait un Madd caché.",
            html: `<div class="concept-card">
                <h3>Le Pronom 'Ha' ( ه )</h3>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:15px;">
                    <div style="padding:15px; background:#ffebee; border-left:5px solid #d32f2f; border-radius:4px; opacity:0.6;">
                        <div style="font-weight:bold; color:#d32f2f;">❌ Lecture Courte</div>
                        <p style="margin:5px 0 0 0; color:#333; font-size:0.9rem;">Sans la règle, on dirait 'Innahu'.</p>
                    </div>
                     <div style="padding:15px; background:#e8f5e9; border-left:5px solid #2e7d32; border-radius:4px;">
                        <div style="font-weight:bold; color:#2e7d32;">✅ Lecture Allongée (Sila)</div>
                        <p style="margin:5px 0 0 0; color:#333; font-size:0.9rem;">On ajoute un 'Waw' ou un 'Ya' oralement : <strong>Innahuu</strong>.</p>
                    </div>
                </div>
                <p style="margin-top:15px; font-size:0.9rem; text-align:center; color:#333;">Cela crée un lien (Sila) fluide avec le mot suivant.</p>
            </div>`
        },
        {
            type: "lesson",
            prof: "Il existe deux types de Sila, selon la lettre qui vient APRÈS le Ha. Voici des exemples :",
            html: `<div class="concept-card">
                <h3>Les 2 Types de Sila</h3>
                <div class="def-box" style="display:flex; flex-direction:column; gap:15px;">
                    
                    <div style="display:flex; gap:15px; align-items:flex-start;">
                        <div style="min-width:12px; height:12px; margin-top:6px; background:#2e7d32; border-radius:50%;"></div>
                        <div style="width:100%;">
                            <strong style="color:#2e7d32;">1. Sila Sughra (Petite)</strong>
                            <div style="color:#333; font-size:0.9rem; margin-top:3px;">Si suivi de <strong>n'importe quelle lettre</strong> (sauf Hamza).</div>
                            <div style="background:#e8f5e9; padding:5px 10px; margin-top:5px; border-radius:5px; display:inline-block;">
                                <span class="ar-word" style="font-size:1.1rem; color:#2e7d32;">بِهِۦ بَصِيرًا</span>
                                <span style="font-size:0.8rem; color:#555;">(Bihi Basira)</span>
                            </div>
                            <div style="font-size:0.85rem; color:#444; margin-top:2px;">Durée : 2 Temps (Naturel)</div>
                        </div>
                    </div>

                    <div style="height:1px; background:#eee; margin:0 10px;"></div>

                    <div style="display:flex; gap:15px; align-items:flex-start;">
                        <div style="min-width:12px; height:12px; margin-top:6px; background:#d32f2f; border-radius:50%;"></div>
                        <div style="width:100%;">
                            <strong style="color:#d32f2f;">2. Sila Kubra (Grande)</strong>
                            <div style="color:#333; font-size:0.9rem; margin-top:3px;">Si suivi spécifiquement d'une <strong>Hamza ( ء )</strong>.</div>
                            <div style="background:#ffebee; padding:5px 10px; margin-top:5px; border-radius:5px; display:inline-block;">
                                 <span class="ar-word" style="font-size:1.1rem; color:#c62828;">عِندَهُۥٓ إِلَّا</span>
                                <span style="font-size:0.8rem; color:#555;">(Indahu Illa)</span>
                            </div>
                            <div style="font-size:0.85rem; color:#444; margin-top:2px;">Durée : 4 ou 5 Temps</div>
                        </div>
                    </div>

                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Pour que la Sila s'applique, une condition est essentielle : le 'Ha' doit être ENTOURÉ de voyelles.",
            html: `
                <div class="concept-card">
                <h3>La Condition "Sandwich"</h3>
                <p>Le Ha doit être <strong>entre deux lettres voyellées</strong> (mobiles).</p>
                
                <div style="background:#fff; border:1px solid #ddd; border-radius:12px; padding:15px; text-align:center; margin-top:15px; font-family: 'Scheherazade New', serif;">
                    
                    <div style="display:flex; justify-content:center; align-items:center; gap:5px; font-size:1.5rem; color:#555;">
                        <div>
                            <span style="color:#1976d2;">بِ</span>
                            <div style="font-size:0.8rem; font-family:sans-serif;">Voyelle</div>
                        </div>
                        <div style="color:#333;">+</div>
                        <div style="border:2px solid #d32f2f; padding:5px 10px; border-radius:8px;">
                            <span style="color:#d32f2f;">هِ</span>
                            <div style="font-size:0.8rem; font-family:sans-serif; color:#d32f2f;">Ha</div>
                        </div>
                        <div style="color:#333;">+</div>
                        <div>
                            <span style="color:#1976d2;">بَ</span>
                            <div style="font-size:0.8rem; font-family:sans-serif;">Voyelle</div>
                        </div>
                    </div>
                    
                    <div style="margin-top:10px; font-size:1.1rem; color:#000;">
                        Exemple : <span class="ar-word">بِهِۦ بَصِيرًا</span>
                    </div>

                </div>

                <div style="margin-top:15px; background:#f5f5f5; padding:10px; border-radius:8px; font-size:0.9rem; color:#666;">
                    Si une des lettres autour a un <strong>Sukun</strong> (Silence), la chaîne est brisée ➡️ Pas de Sila.
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "⚠️ <strong>Exception Spéciale</strong><br>Il y a un cas unique dans le Coran où la condition est remplie, mais on ne fait PAS de Sila.",
            html: `
            <div class="concept-card">
                <h3>L'Exception : Yardahu Lakum</h3>
                <div style="text-align:center; margin:15px 0;">
                    <div class="ar-word ar-large" style="color:#d32f2f;">يَرْضَهُ لَكُمْ</div>
                    <div style="font-size:0.9rem; color:#555; margin-top:5px;">(Sourate Az-Zumar, 39:7)</div>
                </div>
                
                <div style="background:#fff3e0; border-left:4px solid #ff9800; padding:10px; border-radius:4px; font-size:0.9rem; color:#bf360c;">
                    <strong>Observation :</strong> Le Ha est bien entre deux voyelles (Dhad Fatha + Lam Fatha).
                    <br><br>
                    <strong>Règle (Hafs) :</strong> C'est une exception de lecture (Riwayah). On le lit <strong>court</strong>, sans prolongation.
                </div>
            </div>`
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier de Pratique</strong><br>Écoutez bien la différence de longueur et l'exception."
        },
        {
            type: "workshop",
            prof: "Répétez après le Cheikh. Sughra (2) vs Kubra (4) vs Exception.",
            examples: [
                { type: "Sila Sughra (2)", ar: "إِنَّهُۥ كَانَ", url: "mad_sila_quiz_theory_1", start: 0, end: 2, id: "sughra1" },
                { type: "Sila Sughra (2)", ar: "بِهِۦ بَصِيرًا", url: "mad_sila_sila_sughra_2__2", start: 10, end: 12, id: "sughra2" },
                { type: "Sila Kubra (4-5)", ar: "أَنَّ مَالَهُۥٓ أَخْلَدَهُۥ", url: "mad_sila_sila_kubra_4_5__3", start: 2, end: 5, id: "kubra1" },
                { type: "Exception (Court)", ar: "يَرْضَهُ لَكُمْ", url: "mad_sila_exception_court__4", start: 12, end: 14, id: "exception" }
            ]
        },

        // IMMERSION SURAH AL-HUMAZAH (104)
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion Coranique</strong><br>Sourate Al-Humazah. Repérez les Silas Sughra et Kubra.",
            instruction: "Cliquez sur les mots contenant une Sila (Petite ou Grande).",
            surah: 104,
            words: [
                { t: "وَيْلٌ", ok: false }, { t: "لِّكُلِّ", ok: false }, { t: "هُمَزَةٍ", ok: false }, { t: "لُّمَزَةٍ", ok: false }, { t: "١", endVerse: true },
                { t: "ٱلَّذِى", ok: false }, { t: "جَمَعَ", ok: false }, { t: "مَالًا", ok: false }, { t: "وَعَدَّدَهُۥ", ok: true, reason: "Sila Sughra (2 temps)" }, { t: "٢", endVerse: true },
                { t: "يَحْسَبُ", ok: false }, { t: "أَنَّ", ok: false }, { t: "مَالَهُۥٓ", ok: true, reason: "Sila Kubra (Hamza après)" }, { t: "أَخْلَدَهُۥ", ok: true, reason: "Sila Sughra (Arrêt possible)" }, { t: "٣", endVerse: true },
                { t: "كَلَّا", ok: false }, { t: "لَيُنۢبَذَنَّ", ok: false }, { t: "فِى", ok: false }, { t: "ٱلْحُطَمَةِ", ok: false }, { t: "٤", endVerse: true },
                { t: "وَمَا", ok: false }, { t: "أَدْرَاكَ", ok: false }, { t: "مَا", ok: false }, { t: "ٱلْحُطَمَةُ", ok: false }, { t: "٥", endVerse: true },
                { t: "نَارُ", ok: false }, { t: "ٱللَّهِ", ok: false }, { t: "ٱلْمُوقَدَةُ", ok: false }, { t: "٦", endVerse: true },
                { t: "ٱلَّتِى", ok: false }, { t: "تَطَّلِعُ", ok: false }, { t: "عَلَى", ok: false }, { t: "ٱلْأَفْـِٔدَةِ", ok: false }, { t: "٧", endVerse: true },
                { t: "إِنَّهَا", ok: false }, { t: "عَلَيْهِم", ok: false }, { t: "مُّؤْصَدَةٌ", ok: false }, { t: "٨", endVerse: true },
                { t: "فِى", ok: false }, { t: "عَمَدٍ", ok: false }, { t: "مُّمَدَّدَةٍ", ok: false }, { t: "٩", endVerse: true }
            ]
        },

        // EXAM
        { type: "intro", prof: "🧐 <strong>Évaluation</strong>" },
        {
            type: "quiz_theory",
            prof: "Vérifions votre compréhension.",
            questions: [
                {
                    q: "Quand applique-t-on le Mad As-Sila ?",
                    opts: ["Sur le pronom 'Ha' (ه) à l'arrêt", "Sur le pronom 'Ha' (ه) en continuant", "Sur toute lettre 'Ha'"],
                    good: 1
                },
                {
                    q: "Quelle lettre transforme la Sila en 'Kubra' (Grande) ?",
                    opts: ["Alif ( ا )", "Waw ( و )", "Hamza ( ء )"],
                    good: 2
                },
                {
                    q: "Dans <span class='ar-word'>فِيهِ هُدًى</span>, pourquoi n'y a-t-il pas de Sila ?",
                    opts: ["Car le Ha est précédé d'un Sukun (Yaa Sakin)", "Car c'est la fin du verset", "Car le Ha porte une Fatha"],
                    good: 0,
                    exp: "Bien vu ! Le Yaa est Sakin. La condition 'Sandwich' (Voyelle-Ha-Voyelle) n'est pas remplie."
                }
            ]
        }
    ]
};
