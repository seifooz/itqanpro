const LAM_DATA = {
    id: "ahkam_lam",
    title: "AHKAM AL-LAM",
    type: "Ahkam Spécifiques",
    steps: [
        {
            type: "lesson",
            prof: "Le Saviez-vous ? 🤔<br>La lettre <strong>Lam (ل)</strong> est une lettre 'Caméléon'.",
            html: `
            <div class="concept-card">
                <h3>La Règle de Base</h3>
                <p>À l'origine, le Lam est <strong>TOUJOURS FIN (Tarqiq)</strong>.</p>
                <div style="background:#f1f2f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center;">
                    <div class="ar-word">لَطِيفٌ</div>
                    <div style="font-size:0.8rem; color:#888;">(Latif)</div>
                    <div class="ar-word">لِسَان</div>
                    <div style="font-size:0.8rem; color:#888;">(Lisan)</div>
                </div>
                <div class="tip-box" style="margin-top:15px;">
                    Mais il existe <strong>UNE SEULE EXCEPTION</strong> où le Lam devient Gros et Lourd...
                </div>
            </div>`
        },

        // OBSERVATION STEP (Interactive)
        {
            type: "quiz_theory",
            prof: `👂 <strong>Observe et Écoute</strong>.<br>
            Écoute les deux extraits ci-dessous.<br>
            Entends-tu le mot "Allah" de la même façon ?
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:15px; margin-bottom:15px;">
                <div style="text-align:center; background:#fff0e6; padding:10px; border-radius:8px; border:1px solid #fab1a0;">
                    <button class="mini-play" onclick="playAudio('lam_obs_h', 0, 3, 'obs-h')" style="width:40px; height:40px;">▶</button>
                    <div class="ar-big" style="font-size:1.2rem; color:#d35400; margin-top:5px;">هوَ ٱللَّهُ</div>
                </div>
                <div style="text-align:center; background:#e3f2fd; padding:10px; border-radius:8px; border:1px solid #90caf9;">
                    <button class="mini-play" onclick="playAudio('lam_obs_l', 0, 3, 'obs-l')" style="width:40px; height:40px;">▶</button>
                    <div class="ar-big" style="font-size:1.2rem; color:#0984e3; margin-top:5px;">بِسْمِ ٱللَّهِ</div>
                </div>
            </div>`,
            opts: [{ t: "Oui, c'est identique", good: false }, { t: "Non, c'est différent", good: true }],
            exp: "Exactement ! Le premier est LOURD (Tafkhim), le second est FIN (Tarqiq)."
        },

        {
            type: "lesson",
            prof: "L'Exception Royale 👑<br>Le Lam grossit uniquement dans le Nom Majestueux : <strong>ALLAH</strong> (et Allahumma).",
            html: `
            <div class="concept-card">
                <h3 style="color:#d35400;">Lafdh Al-Jalah (Le Nom d'Allah)</h3>
                <p>Dans le nom d'Allah, le Lam change selon la lettre qui est <strong>AVANT</strong>.</p>
                <div style="display:flex; justify-content:space-around; margin-top:20px;">
                    <div style="text-align:center;">
                        <span class="tag-red">Fatha / Damma</span>
                        <div style="font-size:1.5rem; margin-top:5px;">⬇️</div>
                        <div style="font-weight:bold; color:#d35400;">LOURD (Tafkhim)</div>
                    </div>
                    <div style="text-align:center;">
                        <span class="tag-blue">Kasra</span>
                        <div style="font-size:1.5rem; margin-top:5px;">⬇️</div>
                        <div style="font-weight:bold; color:#0984e3;">FIN (Tarqiq)</div>
                    </div>
                </div>
            </div>`
        },

        // VISUAL EQUATION STEP (Refined Structure)
        {
            type: "lesson",
            prof: "Voici comment visualiser la règle.<br>On décompose le mot qui précède pour trouver la cause.",
            html: `
            <div class="concept-card">
                <h3>L'Équation Visuelle 📐</h3>
                
                <!-- Heavy Eq -->
                <div style="background:#fff5eb; padding:15px; border-radius:10px; border:1px solid #ffe0b2; margin-bottom:20px;">
                    <!-- Top: Full Word -->
                    <div style="text-align:center; margin-bottom:10px;">
                        <div class="ar-big" style="color:#2d3436;">مَنَ</div>
                        <div style="font-size:0.7rem; color:#888;">(Mot Avant)</div>
                    </div>
                    
                    <!-- Arrow Down -->
                    <div style="text-align:center; color:#d35400; font-size:1.2rem; margin-bottom:10px;">⬇</div>

                    <!-- Bottom: Breakdown -->
                    <div style="display:flex; justify-content:center; gap:10px; align-items:flex-end;">
                        <!-- Last Letter & Haraka -->
                        <div style="text-align:center;">
                             <div style="display:inline-block; border:2px solid #d35400; padding:5px 12px; border-radius:8px; background:white;">
                                <div class="ar-big" style="color:#d35400;">نَ</div>
                            </div>
                            <div style="font-size:0.6rem; font-weight:bold; margin-top:4px; color:#d35400;">FATHA<br>(Cause)</div>
                        </div>

                        <div style="font-size:1.5rem; color:#ccc; margin-bottom:20px;">+</div>

                        <!-- Allah -->
                        <div style="text-align:center;">
                            <div style="display:inline-block; border:1px solid #ccc; padding:5px 12px; border-radius:8px; background:white;">
                                <div class="ar-big">ٱللَّهُ</div>
                            </div>
                            <div style="font-size:0.6rem; font-weight:bold; margin-top:4px; color:#555;">ALLAH<br>(Conséquence)</div>
                        </div>
                    </div>
                    <div style="text-align:center; margin-top:10px; font-weight:bold; color:#d35400; font-size:1.1rem;">
                        = LOURD (Tafkhim) 🐘
                    </div>
                </div>

                <!-- Light Eq -->
                <div style="background:#e3f2fd; padding:15px; border-radius:10px; border:1px solid #bbdefb;">
                    <!-- Top: Full Word -->
                    <div style="text-align:center; margin-bottom:10px;">
                        <div class="ar-big" style="color:#2d3436;">بِسْمِ</div>
                        <div style="font-size:0.7rem; color:#888;">(Mot Avant)</div>
                    </div>
                    
                    <!-- Arrow Down -->
                    <div style="text-align:center; color:#0984e3; font-size:1.2rem; margin-bottom:10px;">⬇</div>

                    <!-- Bottom: Breakdown -->
                    <div style="display:flex; justify-content:center; gap:10px; align-items:flex-end;">
                        <!-- Last Letter & Haraka -->
                        <div style="text-align:center;">
                             <div style="display:inline-block; border:2px solid #0984e3; padding:5px 12px; border-radius:8px; background:white;">
                                <div class="ar-big" style="color:#0984e3;">مِ</div>
                            </div>
                            <div style="font-size:0.6rem; font-weight:bold; margin-top:4px; color:#0984e3;">KASRA<br>(Cause)</div>
                        </div>

                        <div style="font-size:1.5rem; color:#ccc; margin-bottom:20px;">+</div>

                        <!-- Allah -->
                        <div style="text-align:center;">
                             <div style="display:inline-block; border:1px solid #ccc; padding:5px 12px; border-radius:8px; background:white;">
                                <div class="ar-big">ٱللَّهِ</div>
                            </div>
                            <div style="font-size:0.6rem; font-weight:bold; margin-top:4px; color:#555;">ALLAH<br>(Conséquence)</div>
                        </div>
                    </div>
                     <div style="text-align:center; margin-top:10px; font-weight:bold; color:#0984e3; font-size:1.1rem;">
                        = FIN (Tarqiq) 🦋
                    </div>
                </div>

            </div>`
        },

        // CAS 1 : TAFKHIM
        {
            type: "lesson",
            prof: "<strong>Cas N°1 : Le Tafkhim (Lourd)</strong><br>Si le mot Allah est précédé d'une <strong>Fatha</strong> ou <strong>Damma</strong>.",
            html: `
            <div class="concept-card">
                <h3 style="color:#d35400;">La Grandeur (Tafkhim)</h3>
                
                <div class="audio-row-item" style="margin-bottom:10px;">
                    <div class="ar-big" style="color:#d35400;">قُلْ هُوَ ٱللَّهُ</div>
                    <div style="margin-left:10px;">
                        <strong>Huwa-Llah</strong>
                        <div style="font-size:0.8rem;">(Avant: Fatha sur le Wow)</div>
                    </div>
                    <button class="mini-play" onclick="playAudio('lam_huwallah', 0, 3, 'huwallah')">▶</button>
                </div>

                <div class="audio-row-item">
                    <div class="ar-big" style="color:#d35400;">نَصْرُ ٱللَّهِ</div>
                    <div style="margin-left:10px;">
                        <strong>Nasru-Llah</strong>
                        <div style="font-size:0.8rem;">(Avant: Damma sur le Ra)</div>
                    </div>
                   <button class="mini-play" onclick="playAudio('lam_nasrullah', 0, 3, 'nasrullah')">▶</button>
                </div>

                <div class="note-box" style="margin-top:15px; border-left:4px solid #d35400; padding-left:10px;">
                    Le Lam remplit toute la bouche, comme pour le Ra Tafkhim.
                </div>
            </div>`
        },
        // DRILL 1
        {
            type: "quiz_theory",
            prof: "Quiz Rapide ⚡️<br>Je dis **سُبْحَانَ ٱللَّهِ** (Subhana-llah). Le Noun a une Fatha. Le Lam d'Allah est... ?",
            opts: [{ t: "Fin (Comme d'habitude)", good: false }, { t: "Lourd (Tafkhim)", good: true }],
            exp: "Précédé d'une Fatha -> Le Nom d'Allah devient Lourd."
        },

        // CAS 2 : TARQIQ
        {
            type: "lesson",
            prof: "<strong>Cas N°2 : Le Tarqiq (Fin)</strong><br>Si le mot Allah est précédé d'une <strong>Kasra</strong>.",
            html: `
            <div class="concept-card">
                <h3 style="color:#0984e3;">La Douceur (Tarqiq)</h3>
                <p>La Kasra 'casse' la lourdeur et rend le Lam fin, comme un sourire.</p>
                
                <div class="audio-row-item">
                    <div class="ar-big" style="color:#0984e3;">بِسْمِ ٱللَّهِ</div>
                    <div style="margin-left:10px;">
                        <strong>Bismi-Llah</strong>
                        <div style="font-size:0.8rem;">(Avant: Kasra sur le Mim)</div>
                    </div>
                    <button class="mini-play" onclick="playAudio('lam_bismillah', 0, 3, 'bismillah')">▶</button>
                </div>

                <div class="audio-row-item" style="margin-top:10px;">
                    <div class="ar-big" style="color:#0984e3;">قُلِ ٱللَّهُمَّ</div>
                    <div style="margin-left:10px;">
                        <strong>Quli-Llahumma</strong>
                        <div style="font-size:0.8rem;">(Avant: Kasra sur le Lam)</div>
                    </div>
                    <button class="mini-play" onclick="playAudio('lam_qulillah', 0, 3, 'qulillah')">▶</button>
                </div>
            </div>`
        },
        // DRILL 2
        {
            type: "quiz_theory",
            prof: "Quiz Rapide ⚡️<br>Dans **لِلَّهِ** (Lillahi = Pour Allah). Il y a une Kasra au début. Le Lam est... ?",
            opts: [{ t: "Fin (Tarqiq)", good: true }, { t: "Lourd (Tafkhim)", good: false }],
            exp: "Kasra avant -> Lam Fin."
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Vocal</strong><br>Ecoute bien la différence."
        },
        {
            type: "workshop",
            prof: "Exerce ton oreille : Lourd vs Fin.",
            examples: [
                { type: "Lourd (Fatha)", ar: "إِنَّ ٱللَّهَ", url: "lam_lesson_1", start: 8, end: 10 },
                { type: "Lourd (Damma)", ar: "عَبْدُ ٱللَّهِ", url: "lam_lourd_damma__2", start: 2, end: 4 },
                { type: "Fin (Kasra)", ar: "بِسْمِ ٱللَّهِ", url: "lam_fin_kasra__3", start: 0, end: 2 },
                { type: "Fin (Kasra)", ar: "أَعُوذُ بِٱللَّهِ", url: "lam_fin_kasra__4", start: 5, end: 7 }
            ]
        },

        // EXAMEN FINAL (Immersion Removed)
        { type: "intro", prof: "🧐 <strong>Examen Final</strong><br>Maîtrises-tu l'Exception ?" },

        {
            type: "quiz_theory",
            prof: "1/5 - La lettre Lam est-elle généralement lourde ou fine ?",
            opts: [{ t: "Toujours Lourde", good: false }, { t: "Toujours Fine (sauf exception)", good: true }],
            exp: "Le Lam est une lettre fine (Tarqiq) par nature."
        },
        {
            type: "quiz_theory",
            prof: "2/5 - Quelle est la seule exception ?",
            opts: [{ t: "Le mot 'Salat'", good: false }, { t: "Le Nom d'Allah", good: true }],
            exp: "Seul le nom d'Allah (et Allahumma) permet le Tafkhim."
        },
        {
            type: "quiz_theory",
            prof: "3/5 - Je lis **عَلَى ٱللَّهِ** (Ala-llahi). Le mot avant finit par une Fatha. Verdict ?",
            opts: [{ t: "Tafkhim (Lourd)", good: true }, { t: "Tarqiq (Fin)", good: false }],
            exp: "Fatha -> Lourd."
        },
        {
            type: "quiz_theory",
            prof: "4/5 - Je lis **فِي سَبِيلِ ٱللَّهِ** (Fi Sabili-llahi). Le mot avant finit par une Kasra. Verdict ?",
            opts: [{ t: "Tafkhim (Lourd)", good: false }, { t: "Tarqiq (Fin)", good: true }],
            exp: "Kasra -> Fin."
        },
        {
            type: "quiz_theory",
            prof: "5/5 - Si je commence ma phrase par **ٱللَّهُ نُورُ** (Allahu Nouru...). Il n'y a rien avant. Verdict ?",
            opts: [{ t: "Lourd (Tafkhim)", good: true }, { t: "Fin (Tarqiq)", good: false }],
            exp: "Si on commence par Allah, c'est comme s'il y avait une Fatha virtuelle -> Lourd."
        }
    ]
};
