const NUN_INTRO_DATA = {
    id: "nun_sakina_intro", // Added ID for safety
    title: "Intro Noun Sakina & Tanwin",
    mode: "Cours Interactif",
    steps: [
        // 1. INDUCTIVE INTRO (SOUND)
        {
            type: "quiz_theory",
            prof: "Commençons par une expérience auditive. 👂<br>Écoutez ces deux mots...",
            html: `
            <div class="concept-card" style="text-align:center;">
                <h3>L'Expérience Sonore</h3>
                
                <div style="display:flex; justify-content:space-around; align-items:flex-start; margin-top:20px;">
                    <div style="text-align:center; width:45%;">
                        <div class="ar-med" style="font-size:2rem; color:#2d3436; margin-bottom:10px; height:50px;">مَنْ</div>
                        <button class="btn-audio btn-listen" id="play-intro-aman" onclick="playAudio('intro_aman', 0, 100, 'intro-aman')" style="background:#fff; border:1px solid #ddd; padding:10px; border-radius:10px; width:100%;">
                            🔊 Écouter
                        </button>
                    </div>
                    <div style="text-align:center; width:45%;">
                        <div class="ar-med" style="font-size:2rem; color:#2d3436; margin-bottom:10px; height:50px;">كِتَابًا</div>
                        <button class="btn-audio btn-listen" id="play-intro-kitaban" onclick="playAudio('intro_kitaban', 0, 100, 'intro-kitaban')" style="background:#fff; border:1px solid #ddd; padding:10px; border-radius:10px; width:100%;">
                            🔊 Écouter
                        </button>
                    </div>
                </div>
            </div>`,
            questions: [
                {
                    q: "Entendez-vous le son 'N' (Enne) dans ces 2 mots ?",
                    opts: ["Non, pas du tout", "Oui, j'entends 'N' dans les deux"],
                    good: 1
                }
            ],
            exp: "Exactement ! On entend le son 'N' dans les deux cas. Voyons pourquoi."
        },

        // 2. THE NOUN SAKINA
        {
            type: "lesson",
            prof: "Analysons le <strong>1er Cas</strong> (Ex : Man / مَنْ).",
            html: `
            <div class="concept-card">
                <h3>1er Cas : Le Noun Sakina (Ex : Man / مَنْ)</h3>
                <p>C'est un <strong>Noun</strong> (Lettre N) avec un <strong>Sukun</strong> (Signe du silence ْ ).</p>
                
                <div style="text-align:center; margin:15px; background:#e0f2f1; padding:10px; border-radius:10px;">
                    <div style="font-size:3rem; color:#009688; font-family: 'Scheherazade New', serif;">نْ</div>
                    <div style="color:#00796b; font-weight:bold;">"Enn"</div>
                </div>

                <p style="margin-top:10px;">⚠️ <strong>Où le trouve-t-on ?</strong><br>Contrairement au Tanween, il peut être partout !</p>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px;">
                    <div style="background:#fff; border:1px solid #ddd; padding:10px; border-radius:8px; text-align:center;">
                        <span style="display:block; font-size:0.8rem; color:#555; margin-bottom:5px;">AU MILIEU</span>
                        <div class="ar-med" style="font-size:1.5rem; color:#333;">أَنْعَمْتَ</div>
                        <span style="font-size:0.7rem; color:#777;">(An'amta)</span>
                    </div>
                    <div style="background:#fff; border:1px solid #ddd; padding:10px; border-radius:8px; text-align:center;">
                        <span style="display:block; font-size:0.8rem; color:#555; margin-bottom:5px;">À LA FIN</span>
                        <div class="ar-med" style="font-size:1.5rem; color:#333;">مَنْ</div>
                        <span style="font-size:0.7rem; color:#777;">(Man)</span>
                    </div>
                </div>

                <p style="margin-top:10px; font-size:0.9rem;"><strong>Règle d'or :</strong> Il est statique. Il ne bouge pas. Il est écrit et prononcé.</p>
            </div>`
        },

        // 3. THE TANWEEN (VISUALS)
        {
            type: "lesson",
            prof: "Analysons le <strong>2ème Cas</strong> (Ex : Kitaban / كِتَابًا).",
            html: `
            <div class="concept-card">
                <h3>2ème Cas : Le Tanween (Ex : Kitaban / كِتَابًا)</h3>
                <p>C'est tout simplement une <strong>Double Voyelle</strong> qui se trouve <strong>toujours à la FIN</strong> du mot.</p>
                <ul style="text-align:left; margin-top:10px; margin-bottom:15px; font-size:0.95rem;">
                    <li>2 Fathas (Fathatan) : ً</li>
                    <li>2 Dammas (Dammatan) : ٌ</li>
                    <li>2 Kasras (Kasratan) : ٍ</li>
                </ul>

                <p>Regardez le secret :</p>

                <!-- DAMMATAN EXAMPLE -->
                <div style="background:#fff9c4; padding:15px; border-radius:10px; border:2px solid #fbc02d; margin-top:5px;">
                    <div style="color:#f57f17; font-weight:bold; text-align:center; margin-bottom:10px;">EXEMPLE : AHADUN (Dammatan)</div>
                    <div style="display:flex; justify-content:space-around; align-items:center;">
                        <div style="text-align:center;">
                            <small style="color:#555;">ÉCRIT</small>
                            <div class="ar-med" style="font-size:2.5rem; color:#333;">أَحَدٌ</div>
                        </div>
                        <div style="font-size:2rem; color:#fbc02d;">➡</div>
                        <div style="text-align:center;">
                            <small style="color:#555;">ENTENDU</small>
                            <div class="ar-med" style="font-size:2.5rem; color:#009688;">أَحَدُ<span style="color:#d63031;">نْ</span></div>
                        </div>
                    </div>
                    <div style="text-align:center; font-size:0.85rem; margin-top:5px; color:#333;">On entend le 'N' rouge, mais on ne l'écrit pas !</div>
                </div>

                <!-- FATHATAN EXAMPLE -->
                <div style="background:#e3f2fd; padding:15px; border-radius:10px; border:2px solid #2196f3; margin-top:15px;">
                    <div style="color:#1565c0; font-weight:bold; text-align:center; margin-bottom:10px;">EXEMPLE : KITABAN (Fathatan)</div>
                    <div style="display:flex; justify-content:space-around; align-items:center;">
                        <div style="text-align:center;">
                            <small style="color:#555;">ÉCRIT</small>
                            <div class="ar-med" style="font-size:2.5rem; color:#333;">كِتَابًا</div>
                        </div>
                        <div style="font-size:2rem; color:#2196f3;">➡</div>
                        <div style="text-align:center;">
                            <small style="color:#555;">ENTENDU</small>
                            <div class="ar-med" style="font-size:2.5rem; color:#009688;">كِتَابَ<span style="color:#d63031;">نْ</span></div>
                        </div>
                    </div>
                </div>

                 <!-- KASRATAN EXAMPLE -->
                <div style="background:#f3e5f5; padding:15px; border-radius:10px; border:2px solid #9c27b0; margin-top:15px;">
                    <div style="color:#7b1fa2; font-weight:bold; text-align:center; margin-bottom:10px;">EXEMPLE : YAWMIN (Kasratan)</div>
                    <div style="display:flex; justify-content:space-around; align-items:center;">
                        <div style="text-align:center;">
                            <small style="color:#555;">ÉCRIT</small>
                            <div class="ar-med" style="font-size:2.5rem; color:#333;">يَوْمٍ</div>
                        </div>
                        <div style="font-size:2rem; color:#9c27b0;">➡</div>
                        <div style="text-align:center;">
                            <small style="color:#555;">ENTENDU</small>
                            <div class="ar-med" style="font-size:2.5rem; color:#009688;">يَوْمِ<span style="color:#d63031;">نْ</span></div>
                        </div>
                    </div>
                </div>

            </div>`
        },

        // 4. IDENTIFICATION GOAL
        {
            type: "lesson",
            prof: "🎯 <strong>Votre Objectif Principal</strong>",
            html: `
            <div class="concept-card" style="text-align:center;">
                <p style="font-size:1.1rem; line-height:1.6;">Le plus important pour l'instant n'est pas de connaître toutes les règles par cœur, mais d'être capable d'<strong>IDENTIFIER</strong> ces deux cas dans le Coran.</p>
                <div style="margin-top:20px; font-weight:bold; color:#d63031;">
                    Dès que vous voyez un Noun Sakina (نْ) ou un Tanween (ً ٍ ٌ)...<br>
                    <span style="font-size:1.5rem;">ALARME ! 🚨</span>
                </div>
                <p>Il y a une règle de Tajweed qui s'applique !</p>
            </div>`
        },

        // 5. IMMERSION 1 (Surah 76:2)
        {
            type: "immersion",
            prof: "🔍 <strong>Niveau 1 : Surah Al-Insan (76:2)</strong><br>Touchez tous les Noun Sakina et Tanween.",
            instruction: "Cherchez les Alarmes (N ou Tanween).",
            surah: 76,
            words: [
                { t: "إِنَّا", ok: false },
                { t: "خَلَقْنَا", ok: false },
                { t: "ٱلْإِنسَٰنَ", ok: true, reason: "Noun Sakina au milieu (Caché)" },
                { t: "مِن", ok: true, reason: "Noun Sakina à la fin" },
                { t: "نُّطْفَةٍ", ok: true, reason: "Tanween Kasra à la fin" },
                { t: "أَمْشَاجٍ", ok: true, reason: "Tanween Kasra à la fin" },
                { t: "نَّبْتَلِيهِ", ok: false },
                { t: "فَجَعَلْنَٰهُ", ok: false },
                { t: "سَمِيعًۢا", ok: true, reason: "Tanween Fatha à la fin" },
                { t: "بَصِيرًا", ok: true, reason: "Tanween Fatha à la fin" },
                { t: "٢", endVerse: true }
            ]
        },

        // 6. IMMERSION 2 (Surah 88:4-5)
        {
            type: "immersion",
            prof: "🔍 <strong>Niveau 2 : Surah Al-Ghashiyah (88:4-5)</strong><br>Attention aux Tanween !",
            instruction: "Touchez les mots finissant par un Tanween ou Noun Sakina.",
            surah: 88,
            words: [
                { t: "تَصْلَىٰ", ok: false },
                { t: "نَارًا", ok: true, reason: "Tanween Fatha à la fin" },
                { t: "حَامِيَةً", ok: true, reason: "Tanween Fatha à la fin" },
                { t: "٤", endVerse: true },
                { t: "تُسْقَىٰ", ok: false },
                { t: "مِنْ", ok: true, reason: "Noun Sakina à la fin" },
                { t: "عَيْنٍ", ok: true, reason: "Tanween Kasra à la fin" },
                { t: "آنِيَةٍ", ok: true, reason: "Tanween Kasra à la fin" },
                { t: "٥", endVerse: true }
            ]
        },

        // 7. IMMERSION 3 (Surah 96:2)
        {
            type: "immersion",
            prof: "🔍 <strong>Niveau 3 : Surah Al-Alaq (96:2)</strong><br>Repérez le Noun Sakina au milieu du mot !",
            instruction: "Où se cache le Noun ?",
            surah: 96,
            words: [
                { t: "خَلَقَ", ok: false },
                { t: "ٱلْإِنسَٰنَ", ok: true, reason: "Noun Sakina au milieu" },
                { t: "مِنْ", ok: true, reason: "Noun Sakina à la fin" },
                { t: "عَلَقٍ", ok: true, reason: "Tanween Kasra à la fin" },
                { t: "٢", endVerse: true }
            ]
        },

        // 8. OBSERVATION (LES 4 REGLES)
        {
            type: "quiz_theory",
            prof: "👂 <strong>Écoute bien !</strong><br>Voici 4 exemples (Noun Sakina et Tanween) mettant en jeu les 4 règles.<br>Est-ce qu'on entend le 'N' de la même façon ?",
            html: `
            <div class="concept-card" style="text-align:center;">
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:20px;">
                    <!-- Izhar -->
                    <div class="btn-audio btn-listen" onclick="playAudio('cham_man_amana', 0, 100, 'cham-1')" style="background:#e8f5e9; border:1px solid #c8e6c9; padding:8px; border-radius:8px;">
                        <div class="ar-med" style="font-size:1.4rem;">مَنْ ءَامَنَ</div>
                        <div style="font-size:0.75rem; color:#2d3436;">(Man Amana)</div>
                        <div>🔊</div>
                    </div>
                    <!-- Idgham -->
                    <div class="btn-audio btn-listen" onclick="playAudio('cham_may_yamalu', 0, 100, 'cham-2')" style="background:#e3f2fd; border:1px solid #bbdefb; padding:8px; border-radius:8px;">
                        <div class="ar-med" style="font-size:1.4rem;">مَن يَعْمَلْ</div>
                        <div style="font-size:0.75rem; color:#2d3436;">(May-Ya'malu)</div>
                        <div>🔊</div>
                    </div>
                    <!-- Iqlab -->
                    <div class="btn-audio btn-listen" onclick="playAudio('cham_mim_badi', 0, 100, 'cham-3')" style="background:#ffebee; border:1px solid #ffcdd2; padding:8px; border-radius:8px;">
                        <div class="ar-med" style="font-size:1.4rem;">مِنۢ بَعْدِ</div>
                        <div style="font-size:0.75rem; color:#2d3436;">(Mim-Ba'di)</div>
                        <div>🔊</div>
                    </div>
                    <!-- Ikhfaa -->
                    <div class="btn-audio btn-listen" onclick="playAudio('cham_min_duni', 0, 100, 'cham-4')" style="background:#f3e5f5; border:1px solid #e1bee7; padding:8px; border-radius:8px;">
                        <div class="ar-med" style="font-size:1.4rem;">مِن دُونِ</div>
                        <div style="font-size:0.75rem; color:#2d3436;">(Min Douni)</div>
                        <div>🔊</div>
                    </div>
                </div>
            </div>`,
            questions: [
                {
                    q: "Verdict ?",
                    opts: ["Oui, c'est pareil", "Non, ça change !"],
                    good: 1
                }
            ],
            exp: "Exactement ! Le son 'N' change tout le temps !"
        },

        // 9. DEDUCTION (THE CAUSE)
        {
            type: "quiz_theory",
            prof: "🤔 <strong>À votre avis...</strong><br>Selon quoi on prononce le 'N' différemment ?",
            html: `
            <div class="concept-card" style="text-align:center;">
                <p>Regardez bien ce qui vient <strong>après</strong> le Noun Sakina...</p>
                <div class="ar-med" style="font-size:2rem; margin:15px 0;">
                    نْ <span style="color:#d63031;">?</span>
                </div>
            </div>`,
            questions: [
                {
                    q: "Qui décide de la règle ?",
                    opts: ["La voyelle d'avant", "La phrase", "La lettre qui suit"],
                    good: 2
                }
            ],
            exp: "Bravo ! C'est la lettre qui suit (le Voisin) qui décide de la règle."
        },

        // 10. CONCLUSION (TEASER)
        {
            type: "lesson",
            prof: "C'est pour cela qu'il y a <strong>4 Règles</strong>.<br>Nous allons détailler chaque règle dans les prochains cours.",
            html: `
            <div class="concept-card" style="text-align:center;">
                <p style="margin-bottom:15px;">Chaque groupe de lettres (Voisins) donne une règle différente :</p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.9rem;">
                    <div style="background:#e8f5e9; padding:5px; border-radius:5px;">1. Izhar</div>
                    <div style="background:#e3f2fd; padding:5px; border-radius:5px;">2. Idgham</div>
                    <div style="background:#ffebee; padding:5px; border-radius:5px;">3. Iqlab</div>
                    <div style="background:#f3e5f5; padding:5px; border-radius:5px;">4. Ikhfaa</div>
                </div>
            </div>`
        },


    ]
};
