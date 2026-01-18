const MAD_MUNFASIL_DATA = {
    id: "mad_munfasil",
    title: "6. MAD JAIZ MUNFASIL",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Nous passons au 'cousin' du Mad précédent. Il lui ressemble, mais la structure change.",
            html: `
            <div class="concept-card">
                <h3>Définition</h3>
                <p style="color:#333;">On l’appelle ainsi lorsque la lettre de l’allongement est située à la <strong>FIN</strong> d'un mot puis suivie de la lettre <strong>Hamza ( هَمْزَة )</strong> au <strong>DÉBUT</strong> du second mot.</p>
                <div style="background:#e8f5e9; padding:15px; border-radius:10px; margin:15px 0; text-align:center; border:2px solid #4caf50;">
                    <div style="font-size:2rem; color:#1b5e20;">إِنَّآ أَنزَلْنَٰهُ</div>
                    <div style="color:#1b5e20; font-weight:bold; margin-top:5px;">Mad (Mot 1) + Hamza (Mot 2) 🏘️</div>
                </div>
                <div class="tip-box">
                    <strong>Durée :</strong> 4 ou 5 temps.
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "On l'appelle 'Jaiz' (Permis) car il y a une flexibilité selon les lectures, mais pour nous (Hafs), on l'allonge.",
            html: `
            <div class="concept-card">
                <h3>La Logique : Séparation</h3>
                <p style="color:#333;"><strong>Munfasil ( مُنْفَصِل )</strong> signifie "Séparé".</p>
                <ul style="text-align:left; margin:15px; list-style-type:none; background:#fff; padding:15px; border-radius:10px; border:1px solid #ddd;">
                    <li style="margin-bottom:10px;">🏠 <strong>Muttasil</strong> : Colocataires (Même mot).</li>
                    <li>🏘️ <strong>Munfasil</strong> : Voisins (Deux mots séparés).</li>
                </ul>
                <div class="tip-box">
                    <strong>Note :</strong> Bien que permis à 2 temps dans certaines voies, nous l'apprenons ici à <strong>4 ou 5 temps</strong> (Tawassut).
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Attention ! Parfois les mots sont collés graphiquement, mais ce sont bien deux mots grammaticaux.",
            html: `
            <div class="concept-card">
                <h3>Exemples Visuels</h3>
                
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                    <!-- Normal -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #2e7d32;">
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#2e7d32;">فِيٓ أَنفُسِكُم</div>
                            <div style="font-size:0.8rem; color:#666;">Fiii Anfusikum</div>
                        </div>
                        <div style="font-size:0.8rem; color:#333;">Ya ( يَاء ) | Hamza ( هَمْزَة )</div>
                    </div>

                    <!-- Hidden Separation -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #2e7d32;">
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#2e7d32;">يَٰٓأَيُّهَا</div>
                            <div style="font-size:0.8rem; color:#666;">Yaaa-Ayyuha</div>
                        </div>
                        <div style="font-size:0.8rem; color:#333;">Ya ( يَاء ) (Appel) + Ayyuha</div>
                    </div>

                    <!-- Wow -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #2e7d32;">
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#2e7d32;">قُوٓا۟ أَنفُسَكُمْ</div>
                            <div style="font-size:0.8rem; color:#666;">Quuu Anfusakum</div>
                        </div>
                        <div style="font-size:0.8rem; color:#333;">Wow ( وَاو ) | Hamza ( هَمْزَة )</div>
                    </div>
                </div>
            </div>`
        },

        // WORKSHOP
        {
            type: "quiz_theory",
            prof: "Analyse Rapide 🧐<br>Dans ( وَلَآ أَنَا۠ ). Le Mad est à la fin de ( وَلَآ ), la Hamza au début de ( أَنَا۠ ).",
            html: `
            <div class="concept-card">
                <div style="text-align:center; margin-bottom:15px;">
                    <div class="ar-word ar-medium">وَلَآ أَنَا۠</div>
                </div>
                <p>Est-ce un seul bloc ou deux blocs ?</p>
            </div>`,
            opts: [{ t: "Muttasil (Un mot)", good: false }, { t: "Munfasil (Deux mots)", good: true }],
            exp: "Les composants sont dans deux mots distincts. C'est un Munfasil."
        },

        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Vocal</strong><br>Pratiquez l'allongement en respectant la séparation."
        },
        {
            type: "workshop",
            prof: "Ne coupez pas le souffle entre les deux mots. Liez le son fluidement.",
            examples: [
                { type: "Munfasil (Alif)", ar: "وَمَآ أَنزَلْنَا", url: "036028", start: 0, end: 3, id: "munfasil1" },
                { type: "Munfasil (Ya)", ar: "فِيٓ أَحْسَنِ", url: "095004", start: 5, end: 7, id: "munfasil2" },
                { type: "Munfasil (Wow)", ar: "تُوبُوٓا۟ إِلَى ٱللَّهِ", url: "066008", start: 6, end: 9, id: "munfasil3" }
            ]
        },

        // IMMERSION SURAH AL-QADR (97)
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion Coranique</strong><br>Sourate Al-Qadr (97). Trouvez les Mad Munfasil !",
            instruction: "Cliquez sur les mots où le Mad est suivi d'une Hamza dans le mot SUIVANT.",
            surah: 97,
            words: [
                { t: "إِنَّآ", ok: true, reason: "Mad (Alif) à la fin + Hamza au début de Anzalnahu." }, { t: "أَنزَلْنَٰهُ", ok: false }, { t: "فِى", ok: false }, { t: "لَيْلَةِ", ok: false }, { t: "ٱلْقَدْرِ", ok: false }, { t: "١", endVerse: true },
                { t: "وَمَآ", ok: true, reason: "Mad (Ma) fin de mot + Hamza (Adraka) début de mot." }, { t: "أَدْرَىٰكَ", ok: false }, { t: "مَا", ok: false }, { t: "لَيْلَةُ", ok: false }, { t: "ٱلْقَدْرِ", ok: false }, { t: "٢", endVerse: true },
                { t: "لَيْلَةُ", ok: false }, { t: "ٱلْقَدْرِ", ok: false }, { t: "خَيْرٌ", ok: false }, { t: "مِّنْ", ok: false }, { t: "أَلْفِ", ok: false }, { t: "شَهْرٍ", ok: false }, { t: "٣", endVerse: true },
                { t: "تَنَزَّلُ", ok: false }, { t: "ٱلْمَلَٰٓئِكَةُ", ok: false }, { t: "وَٱلرُّوحُ", ok: false }, { t: "فِيهَا", ok: false }, { t: "بِإِذْنِ", ok: false }, { t: "رَبِّهِم", ok: false }, { t: "مِّن", ok: false }, { t: "كُلِّ", ok: false }, { t: "أَمْرٍ", ok: false }, { t: "٤", endVerse: true },
                { t: "سَلَٰمٌ", ok: false }, { t: "هِىَ", ok: false }, { t: "حَتَّىٰ", ok: false }, { t: "مَطْلَعِ", ok: false }, { t: "ٱلْفَجْرِ", ok: false }, { t: "٥", endVerse: true }
            ]
        },

        // EXAM
        { type: "intro", prof: "🧐 <strong>Évaluation</strong>" },
        {
            type: "quiz_theory",
            prof: "1/3 - Quelle est la différence clé avec le Mad Muttasil ?",
            opts: [{ t: "La durée", good: false }, { t: "La position de la Hamza (mot suivant)", good: true }],
            exp: "C'est la séparation des mots qui change le nom de la règle (Munfasil = Séparé)."
        },
        {
            type: "quiz_theory",
            prof: "2/3 - Quelle est la durée recommandée (Hafs) ?",
            opts: [{ t: "2 Temps", good: false }, { t: "4 ou 5 Temps", good: true }],
            exp: "Bien que 'Jaiz' (Permis) permette 2 temps, nous appliquons 4 ou 5 temps ici."
        },
        {
            type: "quiz_theory",
            prof: "3/3 - Dans ( يَٰٓأَيُّهَا ). Pourquoi est-ce un Munfasil ?",
            opts: [{ t: "C'est une exception", good: false }, { t: "Car ( يَٰـ ) est un mot à part", good: true }],
            exp: "À l'écrit c'est collé, mais grammaticalement ce sont deux mots."
        }
    ]
};
