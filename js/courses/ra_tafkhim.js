const RA_TAFKHIM_DATA = {
    id: "ra_tafkhim",
    title: "RA TAFKHIM (LOURD)",
    type: "Ahkam Ar-Ra",
    steps: [
        {
            type: "lesson",
            prof: "Partie 1 : <strong>Le Tafkhim</strong> (Lourdeur).<br>C'est la règle de base. Le Ra doit remplir la bouche.",
            html: `
            <div class="concept-card">
                <h3 style="color:#d35400;">La Bouche Pleine 🐘</h3>
                <p>Le Ra est une lettre forte. Dans environ <strong>70% des cas</strong>, elle se prononce avec emphase (Gros).</p>
                <div style="background:#fff0e6; border:1px solid #fab1a0; padding:15px; border-radius:8px; margin-top:15px; text-align:center;">
                    On lève l'arrière de la langue vers le palais.<br>
                    Le son résonne comme un écho grave.
                </div>
            </div>`
        },

        // REGLE 1 : VOYELLES
        {
            type: "lesson",
            prof: "Règle N°1 : Les Voyelles Fortes.<br>Fatha (Haut) et Damma (Avant) rendent le Ra lourd.",
            html: `
            <div class="concept-card">
                <h3>1. Fatha & Damma</h3>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    <div class="audio-row-item" style="flex-direction:column; text-align:center;">
                        <div class="ar-big" style="color:#d35400;">رَ</div>
                        <div class="ar-word" style="font-size:1.2rem;">رَبِّ</div>
                        <div style="font-size:0.7rem; color:#888;">(Rabb)</div>
                    </div>
                    <div class="audio-row-item" style="flex-direction:column; text-align:center;">
                        <div class="ar-big" style="color:#d35400;">رُ</div>
                        <div class="ar-word" style="font-size:1.2rem;">رُزِقُوا</div>
                        <div style="font-size:0.7rem; color:#888;">(Ruziqu)</div>
                    </div>
                </div>
            </div>`
        },
        // DRILL 1
        {
            type: "quiz_theory",
            prof: "Quiz Rapide ⚡️<br>Je vois **رَسُولٌ** (Rasul). Le Ra a une Fatha. Verdict ?",
            opts: [{ t: "Tafkhim (Lourd)", good: true }, { t: "Tarqiq (Fin)", good: false }],
            exp: "Excellent. Fatha = Force (Lourd)."
        },

        // REGLE 2 : SOUKOUN SIMPLE
        {
            type: "lesson",
            prof: "Règle N°2 : Le Soukoun.<br>Si le Ra est muet, on regarde la lettre <strong>AVANT</strong>.",
            html: `
            <div class="concept-card">
                <h3>2. L'Influence Précédente</h3>
                <p>Si la lettre avant porte une Fatha ou Damma, sa force se propage au Ra.</p>
                
                <div class="eq-container">
                    <div class="eq-formula">
                        <div class="eq-tag tag-red">Fatha / Damma</div>
                        <div class="eq-plus">+</div>
                        <div class="eq-tag tag-blue">Ra Soukoun</div>
                        <div class="eq-plus">=</div>
                        <div class="res-text" style="color:#d35400;">LOURD</div>
                    </div>
                </div>
                
                <div style="margin-top:15px; display:flex; gap:10px;">
                    <div class="audio-row-item" style="flex:1; justify-content:center;">
                        <span class="ar-word">مَرْيَمَ</span>
                    </div>
                    <div class="audio-row-item" style="flex:1; justify-content:center;">
                        <span class="ar-word">قُرْءَان</span>
                    </div>
                </div>
            </div>`
        },
        // DRILL 2
        {
            type: "quiz_theory",
            prof: "Quiz Rapide ⚡️<br>Dans **بَرْق** (Barq), le Ra est Soukoun. Avant lui, un Ba avec Fatha. Le Ra est...",
            opts: [{ t: "Tafkhim (Lourd)", good: true }, { t: "Tarqiq (Fin)", good: false }],
            exp: "Exactement. La Fatha contamine le Ra et le rend lourd."
        },

        // REGLE 3 : HAMZA WASL
        {
            type: "lesson",
            prof: "Règle N°3 (Avancée) : <strong>Hamza Wasl</strong>.<br>C'est un piège ! Si le Ra suit un Hamza de liaison, il est <strong>TOUJOURS LOURD</strong>.",
            html: `
            <div class="concept-card">
                <h3 style="color:#c0392b;">Le Piège du Hamza Wasl</h3>
                <p>Même si on entend une 'Kasra' (i) au début, comme c'est un Hamza instable (Wasl), le Ra reste fort.</p>
                <div class="audio-row-item">
                    <div class="ar-big">ٱرْجِعِي</div>
                    <div style="margin-left:10px;">
                        <div><strong>Irji'i</strong></div>
                        <div style="font-size:0.8rem; color:#c0392b;">Prononcé "IR" mais LOURD !</div>
                    </div>
                    <button class="mini-play" onclick="playAudio('089028', 0, 3, 'irjii')">▶</button>
                </div>
                <div class="audio-row-item" style="margin-top:10px;">
                    <div class="ar-big">لِمَنِ ٱرْتَضَىٰ</div>
                    <div style="margin-left:10px;">
                        <div><strong>Artada</strong></div>
                        <div style="font-size:0.8rem; color:#c0392b;">Lourd à cause du Wasl.</div>
                    </div>
                </div>
            </div>`
        },
        // DRILL 3
        {
            type: "quiz_theory",
            prof: "Quiz 'Piège' ⚡️<br>Je lis **ٱرْكَب** (Irkab). J'entends 'i'. Pourquoi c'est lourd ?",
            opts: [{ t: "Parce que c'est un Hamza Wasl", good: true }, { t: "C'est une erreur, c'est Fin", good: false }],
            exp: "C'est la règle d'or : Hamza Wasl + Ra = Toujours Lourd."
        },

        // REGLE 4 : LETTRE EMPHATIQUE
        {
            type: "lesson",
            prof: "Règle N°4 (Avancée) : <strong>L'Obstacle</strong>.<br>Si après le Ra, il y a une lettre très lourde (SAD, DAD, TA, DHA, QAF), le Ra devient lourd.",
            html: `
            <div class="concept-card">
                <h3 style="color:#c0392b;">L'Influence Suivante</h3>
                <p>Même si le Ra est précédé d'une Kasra (qui devrait l'amincir), la lettre <strong>lourde</strong> qui suit "annule" la douceur.</p>
                
                <div class="audio-row-item">
                    <div class="ar-big">مِرْصَادًا</div>
                    <div style="margin-left:10px;">
                        <div class="ar-word">Mir-sada</div>
                        <div style="font-size:0.8rem;">Le SAD (ص) force le Ra à grossir.</div>
                    </div>
                    <button class="mini-play" onclick="playAudio('078021', 4, 6, 'mirsada')">▶</button>
                </div>
                
                <div class="tip-box">
                    <strong>Note :</strong> Cela arrive surtout quand le Ra est entre une Kasra et une lettre Isti'la (Emphatique).
                </div>
            </div>`
        },
        // DRILL 4
        {
            type: "quiz_theory",
            prof: "Quiz Expert ⚡️<br>Dans **قِرْطَاس** (Qirtas), j'ai une Kasra avant. Mais j'ai un TA (ط) après. Le Ra est...",
            opts: [{ t: "Fin (Tarqiq)", good: false }, { t: "Lourd (Tafkhim)", good: true }],
            exp: "Le TA est une lettre emphatique. Elle bloque la finesse."
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Tafkhim</strong><br>Entraîne-toi à grossir ta voix."
        },
        {
            type: "workshop",
            prof: "Écoute et répète en gardant la bouche pleine.",
            examples: [
                { type: "Cas 1: Fatha", ar: "رَبِّ ٱلْعَٰلَمِينَ", url: "001002", start: 0, end: 3 },
                { type: "Cas 1: Damma", ar: "رُزِقُوا", url: "002025", start: 7, end: 9 },
                { type: "Cas 2: Soukoun (après Fatha)", ar: "وَٱلْمُرْسَلَٰتِ", url: "077001", start: 0, end: 3 },
                { type: "Cas 3: Hamza Wasl", ar: "ٱرْجِعِي", url: "089028", start: 0, end: 3 },
                { type: "Cas 4: Lettre Emphatique", ar: "مِرْصَادًا", url: "078021", start: 4, end: 6 }
            ]
        },

        // EXAMEN FINAL
        { type: "intro", prof: "🧐 <strong>Examen Final</strong><br>Analyse bien la cause." },

        {
            type: "quiz_theory",
            prof: "Q1/6 - Le Ra de **رُوحُ** (Ruh) est Lourd. Pourquoi ?",
            opts: [{ t: "Car il porte une Damma", good: true }, { t: "Car il porte une Kasra", good: false }],
            exp: "Damma = Tafkhim (Lourd)."
        },
        {
            type: "quiz_theory",
            prof: "Q2/6 - Dans **بَرْق** (Barq), le Ra est Soukoun. Pourquoi est-il Lourd ?",
            opts: [{ t: "Car la lettre AVANT a une Kasra", good: false }, { t: "Car la lettre AVANT a une Fatha", good: true }],
            exp: "On regarde avant : Ba avec Fatha -> Ra Lourd."
        },
        {
            type: "quiz_theory",
            prof: "Q3/6 - **قُرْءَن** (Qur'an). Ra Sakina. Pourquoi Lourd ?",
            opts: [{ t: "Lettre avant a une Damma", good: true }, { t: "Lettre avant a un Soukoun", good: false }],
            exp: "Lettre avant (Qaf) a une Damma -> Ra Lourd."
        },
        {
            type: "quiz_theory",
            prof: "Q4/6 - **ٱرْجِعُونِ** (Irji'uni). J'entends 'i'. Pourquoi je dois faire le Tafkhim ?",
            opts: [{ t: "C'est une exception Hamza Wasl", good: true }, { t: "C'est une erreur, c'est Fin", good: false }],
            exp: "Exception Hamza Wasl = Toujours Lourd."
        },
        {
            type: "quiz_theory",
            prof: "Q5/6 - **مِرْصَادًا** (Mirsada). Il y a une Kasra avant. Pourquoi c'est quand même Lourd ?",
            opts: [{ t: "À cause de la lettre Sad (Emphatique) qui suit", good: true }, { t: "À cause du Mim initial", good: false }],
            exp: "La lettre Emphatique après le Ra annule l'effet de la Kasra."
        },
        {
            type: "quiz_theory",
            prof: "Q6/6 - Si je m'arrête sur le mot **ٱلْأَبْتَرَ** (Al-Abtar). Le Ra devient Sakina. Avant lui il y a une Fatha. Verdict ?",
            opts: [{ t: "Fin", good: false }, { t: "Lourd", good: true }],
            exp: "Arrêt = Soukoun. On regarde avant : Ta avec Fatha -> Ra Lourd."
        },

        // IMMERSION
        {
            type: "intro",
            prof: "📖 <strong>Immersion</strong><br>Sourate Al-Kauthar (108). Trouve les Ra Lourds."
        },
        {
            type: "immersion",
            prof: "Surah Al-Kauthar (108)",
            instruction: "Touche les Ra **Lourds** (Fin de verset).",
            surah: 108,
            words: [
                { t: "إِنَّآ", ok: false }, { t: "أَعْطَيْنَٰكَ", ok: false }, { t: "ٱلْكَوْثَرَ", ok: true, noun: "رَ", letter: "Lourd (Fatha/Arrêt)" }, { t: "١", endVerse: true },
                { t: "فَصَلِّ", ok: false }, { t: "لِرَبِّكَ", ok: true, noun: "رَ", letter: "Lourd (Fatha)" }, { t: "وَٱنْحَرْ", ok: true, noun: "رْ", letter: "Lourd (Arrêt après Fatha)" }, { t: "٢", endVerse: true },
                { t: "إِنَّ", ok: false }, { t: "شَانِئَكَ", ok: false }, { t: "هُوَ", ok: false }, { t: "ٱلْأَبْتَرُ", ok: true, noun: "رُ", letter: "Lourd (Damma/Arrêt)" }, { t: "٣", endVerse: true }
            ]
        }
    ]
};
