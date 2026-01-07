const MAD_BADAL_DATA = {
    id: "mad_badal",
    title: "2. MAD AL-BADAL",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Le 2ème type de Mad est très spécifique. Il concerne la position de la Hamza.",
            html: `
            <div class="concept-card">
                <h3>Définition Technique</h3>
                <p>C'est tout Mad qui respecte la condition suivante :</p>
                <ul style="text-align:left; margin:15px; list-style-type:none; background:#e0f7fa; padding:15px; border-radius:10px; border:2px solid #00acc1;">
                    <li><strong>Il est PRÉCÉDÉ d'une Hamza (ء).</strong></li>
                </ul>
                <div class="tip-box">
                    <strong>Durée :</strong> 2 Harakat (Temps).<br>
                    Exactement comme le Mad Tabi'i.
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Pourquoi s'appelle-t-il 'Badal' (Substitut/Échange) ? C'est une histoire de grammaire !",
            html: `
            <div class="concept-card">
                <h3>L'Origine du Nom</h3>
                <p>À l'origine, ces mots avaient <strong>Deux Hamzas</strong> :</p>
                <div style="margin:10px 0; font-size:0.9rem;">
                    Ex: <em>A'mana</em> (أَأْمَنَ) est dur à prononcer.
                </div>
                <div style="background:#fff3e0; padding:10px; border-radius:8px; border:1px solid #ff9800;">
                    On a donc <strong>Substitué</strong> la 2ème Hamza par une lettre de Mad correspondant à la voyelle précédente.
                    <br>➡️ <strong>Aamana</strong> (ءَامَنَ)
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Il existe 3 formes, selon la voyelle de la Hamza (Fatha, Kasra, Damma).",
            html: `
            <div class="concept-card">
                <h3>Les 3 Exemples Clés</h3>
                
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                    <!-- Alif -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #e65100;">
                        <div class="ar-medium" style="color:#e65100;">ءَا</div>
                        <div><strong>Hamza + Alif</strong></div>
                        <div class="ar-word" style="margin-left:auto;">ءَامَنَ</div>
                        <div style="font-size:0.8rem; color:#888;">('Aamana)</div>
                    </div>

                    <!-- Wow -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #ef6c00;">
                        <div class="ar-medium" style="color:#ef6c00;">أُو</div>
                        <div><strong>Hamza + Wow</strong></div>
                        <div class="ar-word" style="margin-left:auto;">أُوتُوا۟</div>
                        <div style="font-size:0.8rem; color:#888;">('Uutu)</div>
                    </div>

                    <!-- Ya -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #ff9800;">
                        <div class="ar-medium" style="color:#ff9800;">إِي</div>
                        <div><strong>Hamza + Ya</strong></div>
                        <div class="ar-word" style="margin-left:auto;">إِيمَٰنًا</div>
                        <div style="font-size:0.8rem; color:#888;">('Imana)</div>
                    </div>
                </div>
            </div>`
        },

        // OBSERVATION / QUIZ
        {
            type: "quiz_theory",
            prof: "Observation 👀<br>Dans le mot **شَنَـَٔانُ** (Shana'anu). Il y a une Hamza suivie d'un Alif. Est-ce un Badal ?",
            opts: [{ t: "Non", good: false }, { t: "Oui", good: true }],
            exp: "Oui ! Même au milieu du mot, si Hamza précède le Mad, c'est un Badal."
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Vocal</strong><br>La difficulté est de ne pas 'hacher' le son de la Hamza."
        },
        {
            type: "workshop",
            prof: "Prononcez la Hamza nettement, puis glissez dans le Mad.",
            examples: [
                { type: "Badal Alif", ar: "ءَامَنَ", url: "106004", start: 6, end: 8 },
                { type: "Badal Wow", ar: "أُوتِىَ", url: "002269", start: 2, end: 4 },
                { type: "Badal Ya", ar: "إِيلَٰفِهِمْ", url: "106002", start: 0, end: 2 }
            ]
        },

        // EXAM
        { type: "intro", prof: "🧐 <strong>Évaluation</strong>" },
        {
            type: "quiz_theory",
            prof: "1/3 - Quelle est la définition du Mad Badal ?",
            opts: [{ t: "Mad suivi de Hamza", good: false }, { t: "Mad précédé de Hamza", good: true }],
            exp: "C'est l'inverse du Muttasil. Ici la Hamza est DEVANT."
        },
        {
            type: "quiz_theory",
            prof: "2/3 - Pourquoi l'appelle-t-on 'Badal' (Substitut) ?",
            opts: [{ t: "Car on remplace une Hamza par un Mad", good: true }, { t: "Car on change la voyelle", good: false }],
            exp: "Historiquement, la 2ème Hamza a été transformée pour faciliter la prononciation."
        },
        {
            type: "quiz_theory",
            prof: "3/3 - Quelle est la durée de ce Mad ?",
            opts: [{ t: "2 Temps", good: true }, { t: "6 Temps", good: false }],
            exp: "Dans la lecture de Hafs, c'est 2 temps (comme le Tabi'i)."
        }
    ]
};
