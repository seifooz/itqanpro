const MAD_EWAD_DATA = {
    id: "mad_ewad",
    title: "3. MAD AL-EWAD",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "quiz_theory",
            prof: "Observez et écoutez ce verset de Surah An-Nasr.<br>Comment la prof s'arrête-t-elle sur le dernier mot ?",
            html: `
            <div class="concept-card" style="text-align:center;">
                <h3>Observation Audio</h3>
                <div style="font-size:1.8rem; margin-top:20px; margin-bottom:10px; color:#006064; font-family: 'Scheherazade New', serif; line-height:1.6;">
                    وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ <span style="color:#d32f2f;">أَفْوَاجًا</span>
                </div>
                
                <div style="margin-bottom:20px;">
                    <button class="btn-audio btn-listen" id="play-intro-nasr" onclick="playAudio('mad_ewad_intro_nasr', 0, 100, 'intro-nasr')" style="background:#e0f7fa; color:#006064; border:none; padding:10px 20px; border-radius:30px; font-weight:bold; cursor:pointer; display:inline-flex; align-items:center; gap:8px;">
                        <span>▶️</span> Écouter la Récitation
                    </button>
                </div>
            </div>`,
            questions: [
                {
                    q: "À l'arrêt, qu'avez-vous entendu ?",
                    opts: ["Afwajan (On prononce le 'N')", "AfwajAA (On prolonge le 'A')"],
                    good: 1
                }
            ],
            exp: "Exact ! Le 'N' disparaît et laisse place à une belle prolongation (Mad). C'est le Mad Ewad."
        },
        {
            type: "lesson",
            prof: "Exactement ! Vous dites naturellement <strong>AfwajAA</strong>. Vous avez appliqué le Mad Ewad sans le savoir.",
            html: `<div class="concept-card">
                <h3>Le Secret de l'Arrêt</h3>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:15px;">
                    <div style="padding:15px; background:#ffebee; border-left:5px solid #d32f2f; border-radius:4px; opacity:0.6;">
                        <div style="font-weight:bold; color:#d32f2f;">❌ Lecture "Afwajan"</div>
                        <p style="margin:5px 0 0 0; color:#333; font-size:0.9rem;">S'arrêter sur le 'N' est interdit ici.</p>
                    </div>
                     <div style="padding:15px; background:#e8f5e9; border-left:5px solid #2e7d32; border-radius:4px;">
                        <div style="font-weight:bold; color:#2e7d32;">✅ Lecture "Afwajaa"</div>
                        <p style="margin:5px 0 0 0; color:#333; font-size:0.9rem;">On remplace le Tanween par un <strong>Alif</strong> (2 Temps).</p>
                    </div>
                </div>
                <p style="margin-top:15px; font-size:0.9rem; text-align:center; color:#333;">C'est la règle de la <strong>Compensation (Ewad)</strong>.</p>
            </div>`
        },
        {
            type: "lesson",
            prof: "Attention : Cette transformation ne concerne QUE le Tanween du haut (Fatha).",
            html: `<div class="concept-card">
                <h3>Classification des Arrêts</h3>
                <div class="def-box" style="display:flex; flex-direction:column; gap:15px;">
                    
                    <div style="display:flex; gap:15px; align-items:flex-start;">
                        <div style="min-width:12px; height:12px; margin-top:6px; background:#d32f2f; border-radius:50%;"></div>
                        <div>
                            <strong style="color:#d32f2f;">1. Tanween Damma (UN) ou Kasra (IN)</strong>
                            <div style="color:#333; font-size:0.9rem; margin-top:3px;">On s'arrête sur un <strong>Sukun</strong> (Silence).</div>
                            <div style="font-size:0.85rem; color:#444; margin-top:2px;">Ghafurun ➡️ Ghafur</div>
                        </div>
                    </div>

                    <div style="height:1px; background:#eee; margin:0 10px;"></div>

                    <div style="display:flex; gap:15px; align-items:flex-start;">
                         <div style="min-width:12px; height:12px; margin-top:6px; background:#2e7d32; border-radius:50%;"></div>
                        <div>
                            <strong style="color:#2e7d32;">2. Tanween Fatha (AN)</strong>
                            <div style="color:#333; font-size:0.9rem; margin-top:3px;">On transforme en <strong>Mad (2 Temps)</strong>.</div>
                            <div style="font-size:0.85rem; color:#444; margin-top:2px;">Afwajan ➡️ Afwajaa</div>
                        </div>
                    </div>

                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Maintenant que vous l'avez observé, voici la définition technique.",
            html: `
                <div class="concept-card">
                <h3>Définition Technique</h3>
                <p>Le <strong>Mad Ewad</strong> est le remplacement du Tanween Fatha ( ً ) par un Alif lors de l'arrêt.</p>
                
                <div style="background:#e3f2fd; border:2px solid #2196f3; border-radius:12px; padding:20px; text-align:center; margin-top:20px;">
                    <div style="font-size:0.9rem; color:#1565c0; font-weight:bold; letter-spacing:1px; text-transform:uppercase; margin-bottom:5px;">Durée (Compensée)</div>
                    <div style="font-size:2.5rem; color:#0d47a1; font-weight:800; line-height:1;">2 TEMPS</div>
                    <div style="font-size:1.1rem; color:#1976d2; margin-top:5px;">(Comme le Mad Naturel)</div>
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
            type: "lesson",
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
            </div>`
        },

        // WORKSHOP
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier de Pratique</strong><br>Appliquez la compensation : Transformez le 'an' en 'aa'."
        },
        {
            type: "workshop",
            prof: "Écoutez et répétez. Notez la transformation du Tanween en 'aa' à l'arrêt (2 temps).",
            examples: [
                {
                    type: "2 Temps",
                    verse: "وَكَانَ ٱللَّهُ",
                    ar: "عَلِيمًا",
                    exp: "À l'arrêt : 'Aliimaan' devient 'Aliimaa' (Le Tanween Fatha est remplacé par Alif)",
                    url: "mad_ewad_quiz_theory_1", start: 6, end: 8, id: "aliman"
                },
                {
                    type: "2 Temps",
                    verse: "وَكَفَىٰ بِٱللَّهِ",
                    ar: "وَكِيلًا",
                    exp: "À l'arrêt : 'Wakiilaan' devient 'Wakiilaa' (Prolongation de 2 temps)",
                    url: "mad_ewad_2_temps_2", start: 7, end: 9, id: "wakilan"
                },
                {
                    type: "2 Temps",
                    verse: "وَكَانَ ٱللَّهُ غَفُورًا",
                    ar: "رَّحِيمًا",
                    exp: "À l'arrêt : Rahiimaan ➡️ Rahiimaa (Mad Ewad)",
                    url: "mad_ewad_2_temps_3", start: 10, end: 12, id: "rahiman"
                },
                {
                    type: "Exception (Ta Marbuta)",
                    verse: "ٱلْقَارِعَةُ مَا",
                    ar: "ٱلْقَارِعَةُ",
                    exp: "⚠️ Exception ! La Ta Marbuta devient 'Ha' sakin : on dit 'Qari'ah' (pas de prolongation)",
                    url: "mad_ewad_exception_4", start: 0, end: 3, id: "qariah"
                }
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
            prof: "Vérifions vos connaissances sur le Mad Al-Ewad.",
            questions: [
                {
                    q: "Quelle est la condition du Mad Ewad ?",
                    opts: ["Arrêt sur Tanween Damma", "Arrêt sur Tanween Fatha", "Arrêt sur Tanween Kasra"],
                    good: 1
                },
                {
                    q: "Quelle est la durée du Mad Ewad ?",
                    opts: ["2 Temps (Harakat)", "4 Temps (Harakat)", "6 Temps"],
                    good: 0
                },
                {
                    q: "Comment s'arrête-t-on sur une Taa Marbuta ( ة ) ?",
                    opts: ["On allonge (aa)", "On transforme en Ha (Sakin)", "On prononce le Tanween"],
                    good: 1
                }
            ]
        }
    ]
};
