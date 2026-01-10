const NUN_INTRO_DATA = {
    title: "Intro Noun Sakina",
    mode: "Cours Interactif",
    steps: [
        // 1. INTRO NOUN
        {
            type: "lesson",
            prof: "Bienvenue ! 👋<br>Le Tajweed repose sur 2 indices clés.<br>Le premier est le <strong>Noun Sakina</strong>.",
            html: `<div class="card"><div class="ar-big" style="font-size:3rem;">نْ</div><strong>Le Noun Sakina</strong><br><small>Un "N" avec un rond (Silence).</small></div>`
        },

        // 2. QUIZ NOUN
        {
            type: "quiz_theory",
            prof: "Trouve le Noun Sakina (celui qui est muet).",
            opts: [
                { t: "Na (نَ) - <span class='ar'>نَ</span>", good: false, exp: "Non, c'est 'Na' avec une Fatha." },
                { t: "N (Sakina) - <span class='ar'>نْ</span>", good: true, exp: "Exact ! Le petit rond indique le silence." },
                { t: "Nu (نُ) - <span class='ar'>نُ</span>", good: false, exp: "Non, c'est 'Nu' avec une Damma." },
                { t: "Ba (بْ) - <span class='ar'>بْ</span>", good: false, exp: "Non, c'est un Ba." }
            ],
            correctIdx: 1
        },

        // 3. INTRO TANWEEN
        {
            type: "lesson",
            prof: "Le deuxième indice est le <strong>Tanween</strong>.<br>C'est une <strong>double voyelle</strong> à la fin d'un mot.",
            html: `<div class="card"><div class="ar-big" style="word-spacing:15px; font-size:3rem;">ـً  ـٍ  ـٌ</div><strong>An - In - Un</strong></div>`
        },

        // 4. SECRET TANWEEN
        {
            type: "lesson",
            prof: "⚠️ <strong>Le Secret :</strong><br>Le Tanween s'écrit avec 2 traits, mais se prononce avec un <strong>'N' caché</strong> !",
            html: `<div class="card" style="background:#fffde7; border-color:#fbc02d; padding:15px; border-radius:10px; border-left:5px solid #fbc02d;">
                        <p style="font-weight:bold; color:#f57f17; font-size:0.9rem;">EXEMPLE : AHADUN</p>
                        <div style="display:flex; justify-content:space-around; align-items:center; margin-top:15px;">
                            <div style="text-align:center;"><small>ÉCRIT</small><div class="ar-med" style="color:#333; font-size:2rem;">أَحَدٌ</div></div>
                            <div style="font-size:1.5rem; color:#fbc02d;">➡</div>
                            <div style="text-align:center;"><small>ENTENDU</small><div class="ar-med" style="color:#00b894; font-size:2rem;">أَحَدُ<span style="color:#d63031">نْ</span></div></div>
                        </div>
                        <p style="margin-top:15px; font-size:0.9rem;">On entend le 'N' rouge, mais on ne l'écrit pas !</p>
                      </div>`
        },

        // 5. QUIZ TANWEEN FATHA
        {
            type: "quiz_theory",
            prof: "Entraînement : Trouve le <strong>Tanween Fathatan (ـً)</strong> (Son 'AN').",
            opts: [
                { t: "عَلِيمًا", good: true, exp: "Bien vu ! Les deux traits au-dessus = 'AN'." },
                { t: "رَحِيمٌ", good: false, exp: "Non, ça c'est 'UN' (boucles)." },
                { t: "يَوْمٍ", good: false, exp: "Non, ça c'est 'IN' (en bas)." }
            ],
            correctIdx: 0
        },

        // 6. QUIZ TANWEEN DAMMA
        {
            type: "quiz_theory",
            prof: "Trouve le <strong>Tanween Dammatan (ـٌ)</strong> (Son 'UN').",
            opts: [
                { t: "كُفُوًا", good: false, exp: "C'est 'AN'." },
                { t: "أَحَدٌ", good: true, exp: "Parfait ! La double boucle = 'UN'." },
                { t: "حَاسِدٍ", good: false, exp: "C'est 'IN'." }
            ],
            correctIdx: 1
        },

        // 7. QUIZ TANWEEN KASRA
        {
            type: "quiz_theory",
            prof: "Trouve le <strong>Tanween Kasratan (ـٍ)</strong> (Son 'IN').",
            opts: [
                { t: "نَارٌ", good: false, exp: "C'est 'UN'." },
                { t: "لَهَبٍ", good: true, exp: "Excellent ! Les deux traits en dessous = 'IN'." },
                { t: "أَبَدًا", good: false, exp: "C'est 'AN'." }
            ],
            correctIdx: 1
        },

        // 8. AUDIO ACTIVE (THE MYSTERY)
        {
            type: "quiz_theory",
            prof: "👂 <strong>Écoute bien !</strong><br>Voici 3 mots avec un Noun Sakina. Est-ce qu'on prononce le 'N' toujours de la même façon ?",
            html: `<div class="card" style="text-align:left; background:#fff; padding:15px; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.05);">
                        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">
                            <div class="ar-med" style="font-size:1.8rem;">مَنْ ءَامَنَ</div>
                            <div style="text-align:right;">
                                <div style="font-size:0.8rem; color:#666;">🔊 Man 'Amana</div>
                                <div style="font-size:0.75rem; color:#00b894; font-weight:bold;">N clair</div>
                            </div>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">
                            <div class="ar-med" style="font-size:1.8rem;">مَن يَعْمَلُ</div>
                            <div style="text-align:right;">
                                <div style="font-size:0.8rem; color:#666;">🔊 May-Ya'malu</div>
                                <div style="font-size:0.75rem; color:#0984e3; font-weight:bold;">N fusionné</div>
                            </div>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <div class="ar-med" style="font-size:1.8rem;">مِنۢ بَعْدِ</div>
                            <div style="text-align:right;">
                                <div style="font-size:0.8rem; color:#666;">🔊 Mim-Ba'di</div>
                                <div style="font-size:0.75rem; color:#d63031; font-weight:bold;">N devient M</div>
                            </div>
                        </div>
                      </div>`,
            opts: [
                { t: "Oui, c'est toujours le son 'N'", good: false, exp: "Écoute encore, ça change !" },
                { t: "Non, le son change !", good: true, exp: "Exactement ! Parfois le Noun est clair, parfois il fusionne, parfois il se transforme." }
            ],
            correctIdx: 1
        },

        // 9. DETECTIVE (NEW STEP)
        {
            type: "quiz_theory",
            prof: "🔍 <strong>Détective :</strong><br>Regarde bien. Ces mots commencent tous par <strong>مَنْ</strong>. Je t'aide avec l'audio.<br>À ton avis, <strong>qu'est-ce qui provoque ce changement ?</strong>",
            html: `<div class="card" style="background:#fff; padding:15px; border-radius:10px;">
                        <div style="display:flex; align-items:center; margin-bottom:15px;">
                            <span style="font-size:1.2rem; font-weight:bold; color:#ccc; margin-right:10px;">1.</span>
                            <span class="ar-med" style="font-size:2rem;">مَنْ ءَامَنَ</span>
                            <span style="margin-left:auto;">🔊</span>
                        </div>
                        <div style="display:flex; align-items:center; margin-bottom:15px;">
                            <span style="font-size:1.2rem; font-weight:bold; color:#ccc; margin-right:10px;">2.</span>
                            <span class="ar-med" style="font-size:2rem;">مَن يَعْمَلُ</span>
                            <span style="margin-left:auto;">🔊</span>
                        </div>
                        <div style="display:flex; align-items:center;">
                            <span style="font-size:1.2rem; font-weight:bold; color:#ccc; margin-right:10px;">3.</span>
                            <span class="ar-med" style="font-size:2rem;">مِنۢ بَعْدِ</span>
                            <span style="margin-left:auto;">🔊</span>
                        </div>
                      </div>`,
            opts: [
                { t: "La voyelle du Noun (Harka)", good: false, exp: "Non, regardez, le Noun a toujours un Sukun." },
                { t: "La lettre d'avant", good: false, exp: "Non, c'est toujours un Mim avant." },
                { t: "La lettre SUIVANTE", good: true, exp: "Bravo ! C'est le voisin de gauche (le suivant) qui décide !" }
            ],
            correctIdx: 2
        },

        // 10. THE LOGIC
        {
            type: "lesson",
            prof: "Pourquoi ça change ?<br>C'est la <strong>Règle du Voisin</strong> !<br>Le Noun Sakina s'adapte toujours à la lettre qui le suit.",
            html: `<div class="card" style="border:2px dashed var(--secondary); padding:20px; text-align:center;">
                        <div style="font-size:2rem; font-weight:bold;">نْ + <span style="color:var(--secondary);">?</span></div>
                        <p>C'est le voisin de gauche qui décide de la règle !</p>
                      </div>`
        },

        // 11. FAMILLE 1: IZHAR
        {
            type: "lesson",
            prof: "1️⃣ <strong>AL-IZHAR (La Clarté)</strong><br>Si le voisin est une lettre de la Gorge (comme Hamza ou Ha), le Noun reste fort et clair.",
            html: `
            <div class="lesson-card" style="border-left:4px solid #00b894;">
                <div style="display:flex; align-items:center;">
                    <div style="font-size:2rem; margin-right:15px;">📢</div>
                    <div>
                        <strong>Man 'Amana</strong>
                        <div class="ar-med" style="color:#00b894;">مَنْ ءَامَنَ</div>
                    </div>
                </div>
                <p style="margin-top:10px; font-size:0.9rem;">On entend bien le "N". Pas de fusion. Pas de cachette.</p>
            </div>`
        },

        // 12. FAMILLE 2: IDGHAM
        {
            type: "lesson",
            prof: "2️⃣ <strong>AL-IDGHAM (La Fusion)</strong><br>Si le voisin est fort (comme Ya ou Ra), le Noun fond à l'intérieur !",
            html: `
            <div class="lesson-card" style="border-left:4px solid #0984e3;">
                <div style="display:flex; align-items:center;">
                    <div style="font-size:2rem; margin-right:15px;">🤝</div>
                    <div>
                        <strong>May-Ya'malu</strong> (Pas Man-Ya)
                        <div class="ar-med" style="color:#0984e3;">مَن يَعْمَلُ</div>
                    </div>
                </div>
                <p style="margin-top:10px; font-size:0.9rem;">Le Noun a disparu ! Il est entré dans le Ya.</p>
            </div>`
        },

        // 13. FAMILLE 3: IQLAB
        {
            type: "lesson",
            prof: "3️⃣ <strong>AL-IQLAB (La Transformation)</strong><br>Si le voisin est un Ba (ب), le Noun se transforme en Mim (M) !",
            html: `
            <div class="lesson-card" style="border-left:4px solid #d63031;">
                <div style="display:flex; align-items:center;">
                    <div style="font-size:2rem; margin-right:15px;">🔄</div>
                    <div>
                        <strong>Mim-Ba'di</strong> (Pas Min-Ba)
                        <div class="ar-med" style="color:#d63031;">مِنۢ بَعْدِ</div>
                    </div>
                </div>
                <p style="margin-top:10px; font-size:0.9rem;">C'est impossible de dire 'NB' rapidement. La bouche dit 'MB' naturellement.</p>
            </div>`
        },

        // 14. FAMILLE 4: IKHFAA
        {
            type: "lesson",
            prof: "4️⃣ <strong>AL-IKHFAA (La Cachette)</strong><br>Pour la plupart des autres lettres, on cache le Noun dans le nez (Ghunna).",
            html: `
            <div class="lesson-card" style="border-left:4px solid #6c5ce7;">
                <div style="display:flex; align-items:center;">
                    <div style="font-size:2rem; margin-right:15px;">🌫️</div>
                    <div>
                        <strong>Min-Qablu</strong> (Son nasal)
                        <div class="ar-med" style="color:#6c5ce7;">مِن قَبْلُ</div>
                    </div>
                </div>
                <p style="margin-top:10px; font-size:0.9rem;">On n'entend pas un "N" clair, mais un son qui vibre dans le nez.</p>
            </div>`
        },

        // 15. TABLEAU RECAP
        {
            type: "lesson",
            prof: "Voici le plan de votre apprentissage.<br>Chaque couleur est une règle que nous allons étudier ensemble.",
            html: `<div class="grid" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                        <div class="btn-opt" style="background:#e0f2f1; border:1px solid #00b894; color:#00695c; padding:10px; border-radius:8px; text-align:center;">1. IZHAR<br><small>Clarté</small></div>
                        <div class="btn-opt" style="background:#e3f2fd; border:1px solid #0984e3; color:#0d47a1; padding:10px; border-radius:8px; text-align:center;">2. IDGHAM<br><small>Fusion</small></div>
                        <div class="btn-opt" style="background:#fbe9e7; border:1px solid #ff7675; color:#c62828; padding:10px; border-radius:8px; text-align:center;">3. IQLAB<br><small>Transfo</small></div>
                        <div class="btn-opt" style="background:#f3e5f5; border:1px solid #9c27b0; color:#4a148c; padding:10px; border-radius:8px; text-align:center;">4. IKHFA<br><small>Cachette</small></div>
                      </div>`
        },

        // 16. EXAMEN FINAL
        {
            type: "quiz_theory",
            prof: "Examen Final :<br>Touche le mot qui contient un <strong>Tanween</strong> (le Noun caché).",
            opts: [
                { t: "ٱلْفَلَقِ", good: false, exp: "Non, ça finit par une Kasra simple." },
                { t: "غَاسِقٍ", good: true, exp: "Bravo ! 'Ghasiqin' finit par un Kasratan (IN)." },
                { t: "إِذَا", good: false, exp: "Non, ça finit par un Alif (pas de Tanwin ici)." }
            ],
            correctIdx: 1
        }
    ]
};
