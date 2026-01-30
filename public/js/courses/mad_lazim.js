const MAD_LAZIM_DATA = {
    id: "mad_lazim",
    title: "9. MAD LAZIM",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Voici le 'Boss Final' des Mads. Le Mad <strong>Lazim ( Lâzim - لَازِم )</strong> est le plus long et le plus fort.",
            html: `
            <div class="concept-card">
                <h3>Définition</h3>
                <p style="color:#333;">On l’appelle ainsi lorsque la lettre de l’allongement est suivie d’une lettre ayant un <strong>Sukun ( سُكُون )</strong> originel (qui ne part jamais) ou d'une <strong>Shadda ( شَدَّة )</strong>.</p>
                <div style="background:#212121; padding:15px; border-radius:10px; margin-top:15px; text-align:center; border:2px solid #000;">
                    <div style="font-size:2rem; color:#fff;">6 TEMPS</div>
                    <div style="color:#bdbdbd; font-weight:bold; margin-top:5px;">Durée obligatoire (Tul).</div>
                </div>
            </div>`
        },

        // 1. KILMI MUTHAQQAL
        {
            type: "lesson",
            prof: "Première catégorie : <strong>Kilmi Muthaqqal ( كِلْمِي مُثَقَّل )</strong>.",
            html: `
            <div class="concept-card">
                <h3>1. Kilmi Muthaqqal (Mot Lourd)</h3>
                <p style="color:#333;">Lorsque la lettre de madd est suivie d’une lettre dédoublée ayant une <strong>Shadda ( شَدَّة )</strong> (et compris en un mot).</p>
                <p style="color:#333;"><strong>Muthaqqal ( مُثَقَّل )</strong> signifie "Lourd", à cause de la Shadda.</p>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #d32f2f;">
                        <div class="ar-word ar-medium" style="color:#d32f2f;">ٱلْحَآقَّةُ</div>
                        <div>(Al-Haaaqqah)</div>
                    </div>
                     <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #d32f2f;">
                        <div class="ar-word ar-medium" style="color:#d32f2f;">ٱلضَّآلِّينَ</div>
                        <div>(Ad-Daaalliiin)</div>
                    </div>
                </div>
            </div>`
        },
        {
            type: "quiz_theory",
            prof: "Quiz Rapide 🚀<br>Pourquoi appelle-t-on ce Mad 'Muthaqqal' (Lourd) ?",
            opts: [{ t: "Car il est suivi d'un Sukun ( سُكُون )", good: false }, { t: "Car il est suivi d'une Shadda ( شَدَّة )", good: true }],
            exp: "La Shadda (qui double la lettre) rend la prononciation plus 'lourde' et intense."
        },

        // 2. KILMI MUKHAFFAF
        {
            type: "lesson",
            prof: "Deuxième catégorie : <strong>Kilmi Mukhaffaf ( كِلْمِي مُخَفَّف )</strong>.",
            html: `
            <div class="concept-card">
                <h3>2. Kilmi Mukhaffaf (Mot Léger)</h3>
                <p style="color:#333;">Lorsque la lettre de madd est suivie d’une lettre ayant un <strong>Sukun ( سُكُون )</strong> originel et compris en un mot.</p>
                <p style="color:#333;"><strong>Mukhaffaf ( مُخَفَّف )</strong> signifie "Léger", car il n'y a pas de Shadda, juste un Sukun.</p>
                <div class="tip-box">
                    Ce cas est unique ! Il n'apparaît que dans le mot <strong>( ءَآلْـَٰٔنَ )</strong> répété deux fois dans la Sourate Yunus (10:51, 91).
                </div>
                <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #1976d2; margin-top:10px;">
                    <div class="ar-word ar-medium" style="color:#1976d2;">ءَآلْـَٔـٰنَ</div>
                    <div>('Aa-aana)</div>
                </div>
            </div>`
        },
        {
            type: "quiz_theory",
            prof: "Quiz Rapide 🚀<br>Combien de mots 'Kilmi Mukhaffaf' existent dans le Coran ?",
            opts: [{ t: "Un seul (répété 2 fois)", good: true }, { t: "Des centaines", good: false }],
            exp: "C'est une règle très rare qui ne concerne que le mot 'Al-An'."
        },

        // 3. HARFI MUTHAQQAL
        {
            type: "lesson",
            prof: "Troisième catégorie : <strong>Harfi Muthaqqal ( حَرْفِي مُثَقَّل )</strong>. (Lettres Mystérieuses)",
            html: `
            <div class="concept-card">
                <h3>3. Harfi Muthaqqal (Lettre Lourde)</h3>
                <p style="color:#333;">Concerne les lettres au début des sourates (Muqatta'at). C'est 'Lourd' s'il y a une <strong>Fusion (Idgham - إِدْغَام)</strong> avec la lettre suivante.</p>
                
                <div style="margin-top:15px; background:#fff; padding:10px; border-radius:8px; border:1px solid #ccc;">
                    <div class="ar-word ar-medium" style="color:#7b1fa2;">الٓمٓ</div>
                    <div style="font-size:0.9rem; margin-top:5px;">
                        <strong>Lam ( لَامْ )</strong> finit par Mim ( مْ ).<br>
                        <strong>Mim ( مِيمْ )</strong> commence par Mim ( مِ ).<br>
                        ➡️ <strong>Idgham (Fusion)</strong> = Shadda ( شَدَّة ) = LOURD.
                    </div>
                </div>
                 <div style="margin-top:5px; background:#fff; padding:10px; border-radius:8px; border:1px solid #ccc;">
                     <div class="ar-word ar-medium" style="color:#7b1fa2;">طسمٓ</div>
                    <div style="font-size:0.9rem; margin-top:5px;">(Ta-Sin-Mim)</div>
                </div>
            </div>`
        },
        {
            type: "quiz_theory",
            prof: "Quiz Rapide 🚀<br>Dans ( الٓمٓ ), pourquoi le 'Lam' est-il Muthaqqal ?",
            opts: [{ t: "Car il y a Idgham (Fusion) avec le Mim", good: true }, { t: "Car il est court", good: false }],
            exp: "La rencontre des deux 'Mim' crée une Shadda, rendant le son lourd."
        },

        // 4. HARFI MUKHAFFAF
        {
            type: "lesson",
            prof: "Quatrième catégorie : <strong>Harfi Mukhaffaf ( حَرْفِي مُخَفَّف )</strong>.",
            html: `
            <div class="concept-card">
                <h3>4. Harfi Mukhaffaf (Lettre Légère)</h3>
                <p style="color:#333;">Lorsque la lettre de madd est suivie d’une lettre ayant un <strong>Sukun ( سُكُون )</strong> originel, mais <strong>SANS Fusion (Idgham - إِدْغَام)</strong>.</p>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #00acc1;">
                        <div class="ar-word ar-medium" style="color:#00acc1;">نٓ</div>
                        <div>(Nuun)</div>
                        <div style="font-size:0.7rem; color:#666;">Finit par Nun Sukun ( نْ ). Pas de fusion.</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #00acc1;">
                        <div class="ar-word ar-medium" style="color:#00acc1;">قٓ</div>
                        <div>(Qaaf)</div>
                    </div>
                     <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #00acc1;">
                        <div class="ar-word ar-medium" style="color:#00acc1;">يسٓ</div>
                        <div>(Yaa-Siiin)</div>
                    </div>
                </div>
            </div>`
        },
        {
            type: "quiz_theory",
            prof: "Quiz Rapide 🚀<br>Pourquoi ( نٓ ) est-il 'Mukhaffaf' (Léger) ?",
            opts: [{ t: "Car il n'y a pas de Shadda/Fusion", good: true }, { t: "Car il n'y a pas de Sukun", good: false }],
            exp: "Le son reste pur et léger car il ne fusionne avec rien après."
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Vocal (6 Temps)</strong><br>Entraînez-vous à tenir le son 6 temps."
        },
        {
            type: "workshop",
            prof: "Comptez : 1-2-3-4-5-6. C'est long !",
            examples: [
                { type: "Kilmi Muthaqqal", ar: "ٱلضَّآلِّينَ", url: "mad_lazim_lesson_1", start: 6, end: 10, id: "lazim1" },
                { type: "Kilmi Muthaqqal", ar: "ٱلْحَآقَّةُ", url: "mad_lazim_kilmi_muthaqqal_2", start: 0, end: 3, id: "lazim2" },
                { type: "Kilmi Mukhaffaf", ar: "ءَآلْـَٔـٰنَ", url: "mad_lazim_kilmi_mukhaffaf_3", start: 2, end: 5, id: "lazim3" },
                { type: "Harfi Mukhaffaf", ar: "قٓ", url: "mad_lazim_harfi_mukhaffaf_4", start: 0, end: 3, id: "lazim4" }
            ]
        },

        // IMMERSION SURAH AL-HAQQAH (69)
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion Coranique</strong><br>Sourate Al-Haqqah (69).",
            instruction: "Cliquez sur les mots contenant un Mad Lazim Kilmi Muthaqqal (6 temps + Shadda).",
            surah: 69,
            words: [
                { t: "ٱلْحَآقَّةُ", ok: true, reason: "Kilmi Muthaqqal : Mad + Shadda (6 temps)." }, { t: "١", endVerse: true },
                { t: "مَا", ok: false }, { t: "ٱلْحَآقَّةُ", ok: true, reason: "Kilmi Muthaqqal : Mad + Shadda (6 temps)." }, { t: "٢", endVerse: true },
                { t: "وَمَآ", ok: false }, { t: "أَدْرَىٰكَ", ok: false }, { t: "مَا", ok: false }, { t: "ٱلْحَآقَّةُ", ok: true, reason: "Kilmi Muthaqqal : Mad + Shadda (6 temps)." }, { t: "٣", endVerse: true },
                { t: "كَذَّبَتْ", ok: false }, { t: "ثَمُودُ", ok: false }, { t: "وَعَادٌۢ", ok: false }, { t: "بِٱلْقَارِعَةِ", ok: false }, { t: "٤", endVerse: true }
            ]
        },

        // FINAL EXAM
        { type: "intro", prof: "🧐 <strong>Évaluation Finale du Mad Lazim</strong>" },
        {
            type: "quiz_theory",
            prof: "1/2 - Quelle est la durée de TOUS les Mad Lazim ?",
            opts: [{ t: "4-5 Temps", good: false }, { t: "6 Temps (Tul)", good: true }],
            exp: "Peu importe le type (Lourd/Léger/Mot/Lettre), c'est TOUJOURS 6 temps."
        },
        {
            type: "quiz_theory",
            prof: "2/2 - Lequel est un 'Harfi Muthaqqal' (Lettre Lourde) ?",
            opts: [{ t: "Lam (dans Alif-Lam-Mim)", good: true }, { t: "Nun (dans Nun)", good: false }],
            exp: "Le Lam fusionne avec le Mim suivant (Idgham), créant une lourdeur."
        }
    ]
};
