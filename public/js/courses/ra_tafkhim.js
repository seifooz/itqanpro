const RA_TAF_HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#e67e22; color:white; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        💡 Aide : L'Algorithme du Prof
    </button>
    <div style="display:none; background:#fff3e0; border:1px solid #e67e22; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>1. Le Chef 👑</strong> : Le Ra a <strong>Fatha/Damma</strong> ? ➡ <strong>LOURD</strong><br>
        <strong>2. Le Miroir 🪞</strong> : Le Ra est <strong>Muet (Soukoun)</strong> ?<br>
        &nbsp;&nbsp;👉 Regarde Avant : Fatha/Damma ? ➡ <strong>LOURD</strong><br>
        <strong>3. Les Pièges ⚠️</strong> :<br>
        &nbsp;&nbsp;👉 Hamza Wasl avant ? ➡ <strong>LOURD</strong> (Toujours !)<br>
        &nbsp;&nbsp;👉 Lettre "Grosse" après ? ➡ <strong>LOURD</strong> (Toujours !)
    </div>
</div>`;

const RA_TAFKHIM_DATA = {
    id: "ra_tafkhim",
    title: "RA TAFKHIM (MODE LOURD)",
    type: "Ahkam Ar-Ra",
    steps: [
        // --- INTRO ---
        {
            type: "lesson",
            prof: "Bonjour ! Aujourd'hui, on s'attaque au <strong>Ra Tafkhim</strong> (Lourd).<br>C'est la personnalité 'Forte' du Ra.",
            html: `
            <div class="concept-card">
                <h3 style="color:#d35400;">C'est quoi "Lourd" ? 🤔</h3>
                <p style="font-size:1rem; color:#2c3e50; margin-bottom:15px;">
                    C'est un son qui remplit la bouche. Le son doit résonner, il doit être <strong>GRAVE</strong> et <strong>IMPOSANT</strong>.
                </p>
                <div style="background:#fff3e0; padding:15px; border-radius:10px; text-align:center;">
                    <div style="font-weight:bold; color:#d35400; margin-bottom:5px;">La Technique :</div>
                    <div style="font-size:0.9rem;">
                        Lève l'arrière de la langue vers le palais.<br>
                        Le son va monter et prendre de l'ampleur.
                    </div>
                </div>
            </div>`
        },

        // --- RÈGLE 1 : LE CHEF (VOYELLES) ---
        {
            type: "lesson",
            prof: "Règle N°1 : <strong>Le Chef (La Voyelle)</strong>.<br>C'est le plus simple. Regarde ce que porte le Ra.",
            html: `
            <div class="concept-card">
                <h3>Si le Ra porte "Haut" ou "Avant"...</h3>
                
                <!-- VISUAL BREAKDOWN: FATHA -->
                <div class="mz-container" style="margin-bottom:15px;">
                    <div class="mz-phrase">رَبِّ</div>
                    <div class="mz-analysis">
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#e67e22; color:#d35400;">َ</div>
                            <div class="mz-label" style="color:#d35400;">Fatha</div>
                        </div>
                        <div class="mz-icon">+</div>
                        <div class="mz-group">
                            <div class="mz-box mz-blue">ر</div>
                            <div class="mz-label blue">Ra</div>
                        </div>
                    </div>
                    <div class="ex-logic">Le Ra a une <strong>Fatha</strong> ➡ <strong>LOURD</strong></div>
                </div>

                <!-- VISUAL BREAKDOWN: DAMMA -->
                <div class="mz-container">
                    <div class="mz-phrase">رُزِقُوا</div>
                    <div class="mz-analysis">
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#e67e22; color:#d35400;">ُ</div>
                            <div class="mz-label" style="color:#d35400;">Damma</div>
                        </div>
                        <div class="mz-icon">+</div>
                        <div class="mz-group">
                            <div class="mz-box mz-blue">ر</div>
                            <div class="mz-label blue">Ra</div>
                        </div>
                    </div>
                    <div class="ex-logic">Le Ra a une <strong>Damma</strong> ➡ <strong>LOURD</strong></div>
                </div>

                <div class="tip-box" style="margin-top:15px;">
                    💡 <strong>Astuce :</strong> Fatha = Bouche ouverte en haut.<br>Damma = Bouche arrondie en avant.<br>Cela aide à produire le son lourd.
                </div>
            </div>`
        },

        // --- RÈGLE 2 : LE MIROIR (SOUKOUN) ---
        {
            type: "lesson",
            prof: "Règle N°2 : <strong>Le Miroir (Soukoun)</strong>.<br>Si le Ra est muet (stop), il ne décide plus.",
            html: `
            <div class="concept-card">
                <h3>Il copie son voisin de gauche ! ⬅️</h3>
                <p>Quand le Ra a un <strong>Soukoun</strong> (ou quand tu t'arrêtes dessus), il devient un miroir. Il reflète la lettre <strong>AVANT</strong> lui.</p>
                
                <div class="mz-container">
                    <div class="mz-phrase">بَرْق</div>
                    <div class="mz-analysis">
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#2ecc71;">بَ</div>
                            <div class="mz-label green">Avec Fatha</div>
                        </div>
                        <div class="mz-icon">⮕</div>
                        <div class="mz-group">
                            <div class="mz-box mz-blue">رْ</div>
                            <div class="mz-label blue">Ra Muet (Miroir)</div>
                        </div>
                    </div>
                    <div class="ex-logic">Avant, il y a une Fatha.<br>Donc le Ra devient <strong>LOURD</strong>.</div>
                </div>

                <div style="margin-top:15px; background:#fff3e0; padding:10px; border-radius:8px;">
                    <div class="ar-med" style="text-align:center; margin-bottom:5px;">بَرْق</div>
                    <div style="font-size:0.9rem; text-align:center;">
                        Ba (Fatha) ➡ Ra (LOURD)<br>
                        <strong>"Barq"</strong>
                    </div>
                </div>
            </div>`
        },

        // --- RÈGLE 3 : LE PIÈGE DU HAMZA ---
        {
            type: "lesson",
            prof: "Attention ! Voici le <strong>Piège N°1</strong>.<br>Le 'Hamza Wasl' (Le trait sans Hamza).",
            html: `
            <div class="concept-card">
                <h3 style="color:#c0392b;">L'Exception du Hamza ⚠️</h3>
                <p><strong>La Règle d'Or :</strong> Si le Ra vient après lui, c'est <strong>TOUJOURS LOURD</strong>.</p>
                
                <div class="mz-container">
                    <div class="mz-phrase">ٱرْجِعِي</div>
                    <div class="mz-analysis">
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#e74c3c;">ٱ</div>
                            <div class="mz-label" style="color:#c0392b;">Hamza Wasl</div>
                        </div>
                        <div class="mz-icon">+</div>
                        <div class="mz-group">
                            <div class="mz-box mz-blue">رْ</div>
                            <div class="mz-label blue">Ra</div>
                        </div>
                    </div>
                    <div class="ex-logic">Hamza Wasl avant ? <strong>TOUJOURS LOURD !</strong><br>(Même si on prononce 'i')</div>
                </div>
                
                <div style="background:#ffebee; padding:15px; border-radius:10px; border:2px solid #ef5350; margin-top:15px;">
                    <button class="btn-audio btn-listen" onclick="playAudio('ra_tafkhim_irjii', 0, 3, 'irjii')" style="width:100%; padding:8px; background:#fff; border:1px solid #ffcdd2;">
                        🔊 Écoute : Le Ra est GROS (IRr)
                    </button>
                </div>
            </div>`
        },

        // --- RÈGLE 4 : LE MUR (LETTRE EMPHATIQUE) ---
        {
            type: "lesson",
            prof: "Piège N°2 (Niveau Expert) : <strong>Le Mur</strong>.<br>Quand une 'Lettre Forte' bloque le passage.",
            html: `
            <div class="concept-card">
                <h3 style="color:#c0392b;">L'influence du Futur 🔮</h3>
                <p>Une lettre <strong>Emphatique</strong> (Sad, Dad, Ta, Dha, Qaf) après le Ra impose sa lourdeur.</p>
                
                <div class="mz-container">
                    <div class="mz-phrase">مِرْصَادًا</div>
                    <div class="mz-analysis">
                        <div class="mz-group">
                            <div class="mz-box mz-blue">رْ</div>
                            <div class="mz-label blue">Ra</div>
                        </div>
                        <div class="mz-icon">+</div>
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#e74c3c;">ص</div>
                            <div class="mz-label" style="color:#c0392b;">Sad (Fort)</div>
                        </div>
                    </div>
                    <div class="ex-logic">Le <strong>SAD</strong> après est trop fort.<br>Il oblige le Ra à devenir <strong>LOURD</strong>.</div>
                </div>

                <div class="tip-box">
                    👉 <strong>Règle :</strong> Une lettre forte après le Ra gagne toujours !
                </div>
            </div>`
        },

        // --- ALGORITHME RECAP ---
        {
            type: "lesson",
            prof: "Récapitulons avec ma méthode infaillible.<br>L'Algorithme du Prof.",
            html: `<div class="concept-card"><div class="flow-chart"><div class="flow-step"><div class="flow-num">1</div><div>Ra a Fatha/Damma ?</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">2</div><div><strong>OUI</strong> ➡ C'est <strong>LOURD</strong> 🐘<br><strong>NON</strong> (Soukoun) ➡ Regarde <strong>AVANT</strong>.</div></div><div class="flow-arrow">▼</div><div class="flow-step"><div class="flow-num">3</div><div>Avant a Fatha/Damma ? ➡ <strong>LOURD</strong> 🐘<br>(Attention au Hamza Wasl !)</div></div><div class="flow-arrow">▼</div><div class="flow-step flow-final">⚠️ Regarde <strong>APRÈS</strong>.<br>Lettre 'Grosse' ? ➡ <strong>LOURD</strong> 🐘</div></div></div>`
        },

        // --- PARTIE 2 : ATELIER ---
        { type: "intro", prof: "Assez parlé ! À toi de jouer.<br>Écoute et imite-moi." },

        {
            type: "workshop", prof: `Entraînement <strong>Ra Tafkhim</strong>. Fais résonner ta voix ! ${RA_TAF_HELP_HTML}`, examples: [
                { type: "Le Chef (Fatha)", ar: "رَبِّ ٱلْعَٰلَمِينَ", url: "ra_tafkhim_lesson_1", start: 0, end: 3, hint: "Bouche ouverte haut" },
                { type: "Le Chef (Damma)", ar: "رُزِقُوا", url: "ra_tafkhim_le_chef_damma__2", start: 7, end: 9, hint: "Bouche en avant" },
                { type: "Le Miroir (Barq)", ar: "بَرْق", url: "ra_tafkhim_le_miroir_barq__3", start: 2, end: 4, hint: "Copie le Ba (Fatha)" },
                { type: "Le Piège (Wasl)", ar: "ٱرْجِعِي", url: "ra_tafkhim_le_pi_ge_wasl__4", start: 0, end: 3, hint: "Malgré le 'i', c'est LOURD !" },
                { type: "Le Mur (Sad)", ar: "مِرْصَادًا", url: "ra_tafkhim_le_mur_sad__5", start: 4, end: 6, hint: "Le Sad rend tout lourd" }
            ]
        },

        // --- PARTIE 3 : QUIZ ---
        { type: "intro", prof: "Contrôle Surprise (10 Questions) ! 📝<br>Sélection des Meilleurs Cas." },

        // SELECTION BEST OF 10
        { type: "exam_quiz", prof: `Q1/10 - Dans **رُوحُ**, le Ra est Lourd. Pourquoi ? ${RA_TAF_HELP_HTML}`, opts: [{ ar: "Car il a une Damma", good: true, reason: "Damma = Lourd !" }, { ar: "Car il a une Kasra", good: false }], noun: "Règle 1", letter: "Le Chef" },
        { type: "quiz_theory", prof: `Q2/10 - Je vois **رِزْقًا** (Rizqan). Le Ra a une Kasra.`, opts: [{ t: "Lourd", good: false }, { t: "Fin (Tarqiq)", good: true, reason: "Kasra = Fin" }], exp: "La Kasra est la seule voyelle qui amincit le Ra." },
        { type: "quiz_theory", prof: `Q3/10 - **مَرْيَمَ** (Maryam). Le Ra est Muet. Avant, le Mim a une Fatha.`, opts: [{ t: "Lourd", good: true, reason: "Miroir sur Fatha = Lourd" }, { t: "Fin", good: false }], exp: "Ra Muet + Fatha avant = Lourd." },
        { type: "quiz_theory", prof: `Q4/10 - **قُرْءَٰنً** (Qur'an). Ra Muet. Avant, Qaf avec Damma.`, opts: [{ t: "Lourd", good: true, reason: "Miroir sur Damma = Lourd" }, { t: "Fin", good: false }], exp: "Ra Muet + Damma avant = Lourd." },
        { type: "quiz_theory", prof: `Q5/10 - **فِرْعَوْنَ** (Fir'awn). Ra Muet. Avant, Fa avec Kasra.`, opts: [{ t: "Lourd", good: false }, { t: "Fin (Tarqiq)", good: true, reason: "Miroir sur Kasra = Fin" }], exp: "Ra Muet + Kasra avant = Fin." },

        { type: "quiz_theory", prof: "Q6/10 - **ٱرْجِعُونِ** (Irji'uni). J'entends 'i'. C'est quel piège ?", opts: [{ t: "Hamza Wasl", good: true, reason: "Toujours Lourd" }, { t: "Aucun", good: false }], exp: "Hamza Wasl = Toujours Lourd." },
        { type: "quiz_theory", prof: "Q7/10 - **لِمَنِ ٱرْتَضَىٰ**. Le Ra suit un Hamza Wasl (après 'Ni').", opts: [{ t: "Lourd", good: true, reason: "Hamza Wasl = Lourd" }, { t: "Fin", good: false }], exp: "Même précédé d'une Kasra (Ni), le Wasl annule tout." },

        { type: "quiz_theory", prof: "Q8/10 - **مِرْصَادًا**. J'ai 'i' avant. Pourquoi c'est **Lourd** ?", opts: [{ t: "La lettre d'après (Sad) est trop grosse", good: true, reason: "Le Mur Emphatique" }, { t: "Erreur", good: false }], exp: "Lettre Emphatique après = Lourd." },
        { type: "quiz_theory", prof: "Q9/10 - **قِرْطَاس**. Ra muet + Kasra avant. Mais Ta (ط) après.", opts: [{ t: "Lourd", good: true, reason: "Le Ta est Fort" }, { t: "Fin", good: false }], exp: "Le Ta bloque la finesse." },

        { type: "quiz_theory", prof: "Q10/10 - Je m'arrête sur **ٱلْكَوْثَرَ**. Le Ra devient muet. Avant j'ai une Fatha.", opts: [{ t: "Lourd", good: true, reason: "Arrêt = Miroir sur Fatha" }, { t: "Fin", good: false }], exp: "Arrêt = Soukoun. Fatha avant = Lourd." },

        // --- PARTIE 4 : IMMERSION ---
        { type: "intro", prof: "Mission Spéciale 🕵️‍♂️<br>Trouve les Ra Lourds dans le Quran." },

        {
            type: "immersion",
            prof: `Sourate Al-Kauthar (108) ${RA_TAF_HELP_HTML}`,
            instruction: "Touche les Ra **Lourds** uniquement.",
            totalIzhar: 3,
            targetName: "un Ra Lourd",
            words: [
                { t: "إِنَّآ", ok: false }, { t: "أَعْطَيْنَٰكَ", ok: false }, { t: "ٱلْكَوْثَرَ", ok: true, noun: "رَ", letter: "Lourd (Fatha)", endVerse: true, reason: "Fatha (ou Arrêt après Fatha) = Lourd ✅" },
                { t: "فَصَلِّ", ok: false }, { t: "لِرَبِّكَ", ok: true, noun: "رَ", letter: "Lourd (Fatha)", reason: "Fatha = Lourd ✅" }, { t: "وَٱنْحَرْ", ok: true, noun: "رْ", letter: "Miroir (Ha Fatha)", endVerse: true, reason: "Arrêt. Avant, le Ha a une Fatha = Lourd ✅" },
                { t: "إِنَّ", ok: false }, { t: "شَانِئَكَ", ok: false }, { t: "هُوَ", ok: false }, { t: "ٱلْأَبْتَرُ", ok: true, noun: "رُ", letter: "Lourd (Damma)", endVerse: true, reason: "Damma (ou Arrêt après Fatha) = Lourd ✅" }
            ]
        }
    ]
};
