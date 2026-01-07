const MAD_EWAD_DATA = {
    id: "mad_ewad",
    title: "3. MAD AL-EWAD",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Nous passons maintenant au <strong>Mad Al-Ewad</strong> (Compensation).<br>C'est une règle très fréquente qui s'applique uniquement à l'arrêt.",
            html: `
            <div class="concept-card">
                <h3>Définition Technique</h3>
                <p>C'est tout Mad apparaissant lors de l’arrêt sur un mot se terminant par un <strong>Tanween Fatha ( ً )</strong>.</p>
                <div style="background:#e0f7fa; padding:15px; border-radius:10px; margin:15px 0; text-align:center; border:2px solid #00acc1;">
                    <div style="font-size:2rem; color:#006064;">ً ⬅️ ـَا</div>
                    <div style="color:#006064; font-weight:bold; margin-top:5px;">On "compense" le son 'N' du Tanween par un Alif ( أَلِف ).</div>
                </div>
                <div class="tip-box">
                    <strong>Durée :</strong> 2 Harakat (Temps).<br>
                    Exactement comme le Mad Tabi'i. Ni plus, ni moins.
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Pourquoi ce changement ? C'est une question de fluidité à l'arrêt.",
            html: `
            <div class="concept-card">
                <h3>La Logique : Compensation</h3>
                <p>En arabe, on ne s'arrête jamais sur une voyelle courte, ni sur le son 'N' du Tanween Fatha.</p>
                <ul style="text-align:left; margin:15px; list-style-type:none; background:#fff; padding:15px; border-radius:10px; border:1px solid #ddd;">
                    <li style="margin-bottom:10px;">🛑 <strong>Tanween Damma/Kasra</strong> ( ـٌ / ـٍ ) ➡️ Devient Sukun ( سُكُون ).</li>
                    <li>✨ <strong>Tanween Fatha</strong> ( ـًا ) ➡️ Devient Alif ( أَلِف ).</li>
                </ul>
                <div style="margin-top:15px; padding:10px; background:#e8f5e9; border:1px solid #4caf50; border-radius:5px; text-align:center; color:#2e7d32; font-weight:bold;">
                    An ➡️ Aa
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Voyons la transformation en action. Observez bien la fin des mots.",
            html: `
            <div class="concept-card">
                <h3>Exemples de Transformation</h3>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                    
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #e65100;">
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#e65100;">عَلِيمًا</div>
                            <div style="font-size:0.8rem; color:#666;">Aliiman</div>
                        </div>
                        <div style="font-weight:bold; color:#333;">➡️</div>
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#006064;">عَلِيمَا</div>
                            <div style="font-size:0.8rem; color:#006064;">Aliima</div>
                        </div>
                    </div>

                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #00acc1;">
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#e65100;">رَحِيمًا</div>
                            <div style="font-size:0.8rem; color:#666;">Rahiman</div>
                        </div>
                        <div style="font-weight:bold; color:#333;">➡️</div>
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#006064;">رَحِيمَا</div>
                            <div style="font-size:0.8rem; color:#006064;">Rahiima</div>
                        </div>
                    </div>
                </div>
            </div>`
        },

        // EXCEPTION
        {
            type: "quiz_theory",
            prof: "⚠️ Attention ! Il y a une exception majeure.<br>Si le mot finit par une <strong>Ta Marbuta ( ة )</strong>.",
            html: `
            <div class="concept-card">
                <h3>L'Exception : Taa Marbuta ( ة )</h3>
                <p><strong>L'Exception :</strong> Si le mot se termine par une <strong>Taa Marbuta ( ة )</strong>, on ne met PAS d'Alif. On le transforme en 'Ha' ( هـ ) Sakin.</p>
                <div style="display:flex; align-items:center; justify-content:center; gap:15px; margin:20px 0;">
                    <div class="ar-word ar-medium" style="color:#d32f2f;">رَحْمَةً</div>
                    <div style="font-size:1.5rem;">➡️</div>
                    <div class="ar-word ar-medium" style="color:#333;">رَحْمَهْ</div>
                </div>
                <div style="text-align:center;">Rahmatan ➡️ Rahmah</div>
            </div>`,
            opts: [{ t: "On allonge (Rahmataa)", good: false }, { t: "On arrête sur Ha (Rahmah)", good: true }],
            exp: "Avec la Taa Marbuta (ة), l'arrêt se fait toujours en transformant la lettre en Ha (ه) avec Sukun."
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier de Pratique</strong><br>Appliquez la compensation : Transformez le 'an' en 'aa'."
        },
        {
            type: "workshop",
            prof: "Écoutez et répétez. Notez bien la durée de 2 temps.",
            examples: [
                { type: "Ewad (Normal)", ar: "عَلِيمًا", url: "076030", start: 6, end: 8, id: "aliman" },
                { type: "Ewad (Normal)", ar: "وَكِيلًا", url: "017002", start: 7, end: 9, id: "wakilan" },
                { type: "Ewad (Normal)", ar: "قِيلاً", url: "025024", start: 10, end: 12, id: "qilan" },
                { type: "Exception (Ta)", ar: "ٱلْقَارِعَةُ", url: "101001", start: 0, end: 3, id: "qariah" }
            ]
        },

        // IMMERSION SURAH AL-ADIYAT (100)
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion Coranique</strong><br>Sourate Al-Adiyat. Identifiez les arrêts en Mad Ewad !",
            instruction: "Cliquez sur les mots qui finissent par un Tanween Fatha et qui deviennent un Mad Ewad à l'arrêt.",
            surah: 100,
            words: [
                { t: "وَٱلْعَٰدِيَٰتِ", ok: false }, { t: "ضَبْحًا", ok: true, reason: "Tanween Fatha ➡️ Alif (Dabha)" }, { t: "١", endVerse: true },
                { t: "فَٱلْمُورِيَٰتِ", ok: false }, { t: "قَدْحًا", ok: true, reason: "Tanween Fatha ➡️ Alif (Qadha)" }, { t: "٢", endVerse: true },
                { t: "فَٱلْمُغِيرَٰتِ", ok: false }, { t: "صُبْحًا", ok: true, reason: "Tanween Fatha ➡️ Alif (Subha)" }, { t: "٣", endVerse: true },
                { t: "فَأَثَرْنَ", ok: false }, { t: "بِهِۦ", ok: false }, { t: "نَقْعًا", ok: true, reason: "Tanween Fatha ➡️ Alif (Naq'a)" }, { t: "٤", endVerse: true },
                { t: "فَوَسَطْنَ", ok: false }, { t: "بِهِۦ", ok: false }, { t: "جَمْعًا", ok: true, reason: "Tanween Fatha ➡️ Alif (Jam'a)" }, { t: "٥", endVerse: true }
            ]
        },

        // EXAM
        { type: "intro", prof: "🧐 <strong>Évaluation</strong>" },
        {
            type: "quiz_theory",
            prof: "1/3 - Quelle est la condition du Mad Ewad ?",
            opts: [{ t: "Arrêt sur Tanween Damma", good: false }, { t: "Arrêt sur Tanween Fatha", good: true }],
            exp: "Le Mad Ewad ne concerne QUE le Tanween Fatha (ً)."
        },
        {
            type: "quiz_theory",
            prof: "2/3 - Quelle est la durée du Mad Ewad ?",
            opts: [{ t: "2 Temps (Harakat)", good: true }, { t: "4 Temps (Harakat)", good: false }],
            exp: "C'est un Mad Naturel accidentel, donc 2 temps."
        },
        {
            prof: "3/3 - Comment s'arrête-t-on sur le mot **شَجَرَةً** (Shajaratan) ?",
            opts: [{ t: "Shajarataa", good: false }, { t: "Shajarah ( Ha - هَاء )", good: true }],
            exp: "C'est une Taa Marbuta ( ة ). Elle devient un Ha ( هَاء ) Sakin à l'arrêt, pas de Mad !"
        }
    ]
};
