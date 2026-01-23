const RA_JAWAZ_HELP_HTML = `
<div style="margin-top:10px;">
    <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'" style="background:#f1c40f; color:black; border:none; padding:5px 12px; border-radius:15px; font-size:0.8rem; cursor:pointer; font-weight:bold;">
        ⚖️ Aide : Le Juge
    </button>
    <div style="display:none; background:#fff9c4; border:1px solid #f1c40f; padding:10px; border-radius:10px; margin-top:5px; font-size:0.85rem; color:#333; text-align:left;">
        <strong>Le Combat des Forces :</strong><br>
        1. <strong>M I S R</strong> (مِصْر) : Le Sad est Fort 💪.<br>
        ➡ Préférence : <strong>LOURD 🐘</strong><br><br>
        2. <strong>Q I T R</strong> (قِطْر) : La Kasra est Forte 📉.<br>
        ➡ Préférence : <strong>FIN 🙂</strong><br><br>
        3. <strong>F I R Q</strong> (فِرْق) : Égalité 🤝.<br>
        ➡ <strong>CHOIX TOTAL</strong>
    </div>
</div>`;

const RA_JAWAZ_DATA = {
    id: "ra_jawaz",
    title: "RA JAWAZ (LE CHOIX)",
    type: "Ahkam Ar-Ra",
    steps: [
        // --- INTRO ---
        {
            type: "lesson",
            prof: "Partie 3 : <strong>Le Jawaz</strong> (Le Choix).<br>C'est le sommet de la maîtrise. Ici, tu es le juge.",
            html: `
            <div class="concept-card">
                <h3 style="color:#f39c12;">⚖️ Le Conflit des Forces</h3>
                <p style="font-size:1rem; color:#2c3e50; margin-bottom:15px;">
                    Parfois, le Ra est coincé entre deux forces opposées :
                </p>
                <div style="display:flex; justify-content:space-between; align-items:center; background:#fff3e0; padding:10px; border-radius:8px;">
                    <div style="text-align:center;">
                        <span style="font-size:1.5rem;">📉</span><br>
                        <strong style="color:#0984e3;">KASRA</strong><br>
                        "Tire vers le Bas"
                    </div>
                    <div style="font-weight:bold; color:#7f8c8d;">VS</div>
                    <div style="text-align:center;">
                        <span style="font-size:1.5rem;">🧱</span><br>
                        <strong style="color:#d35400;">EMPHASE</strong><br>
                        "Tire vers le Haut"
                    </div>
                </div>
                <p style="margin-top:10px; font-size:0.9rem;">
                    Dans ces cas rares, tu as le <strong>CHOIX</strong>, mais il y a une préférence.
                </p>
            </div>`
        },

        // --- MOT 1 : MISR (EGYPTE) ---
        {
            type: "lesson",
            prof: "Cas N°1 : <strong>Misr</strong> (L'Égypte).<br>Le Sad est une lettre très puissante.",
            html: `
            <div class="concept-card">
                <h3>مِصْرَ (Misr)</h3>
                <p>À l'arrêt, le Ra devient muet. Il est coincé entre une Kasra (i) et un Sad (S) Lourd.</p>
                
                <!-- VISUAL CONFLICT -->
                <div class="mz-container" style="margin-bottom:15px;">
                    <div class="mz-phrase">مِصْر</div>
                    <div class="mz-analysis">
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#0984e3; color:#0984e3;">ِ</div>
                            <div class="mz-label" style="color:#0984e3;">Kasra (Fin)</div>
                        </div>
                        <div class="mz-icon">⚡️</div>
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#d35400; font-weight:bold; color:#d35400;">ص</div>
                            <div class="mz-label" style="color:#d35400;">Sad (LOURD)</div>
                        </div>
                    </div>
                    <div class="ex-logic">Le <strong>SAD</strong> est un mur très épais.<br>Il gagne le combat ! 💪</div>
                </div>

                <div style="background:#fff3e0; padding:15px; border-radius:10px; border:2px solid #f39c12; text-align:center;">
                    <div style="font-weight:bold; color:#d35400;">Préférence : LOURD 🐘</div>
                    <div style="font-size:0.8rem;">(Tu peux faire Fin, mais Lourd est mieux)</div>
                    <button class="btn-audio btn-listen" onclick="playAudio('010087', 4, 6, 'misr')" style="margin-top:5px;">🔊 Écoute (Lourd)</button>
                </div>
            </div>`
        },

        // --- MOT 2 : AL-QITR (CUIVRE) ---
        {
            type: "lesson",
            prof: "Cas N°2 : <strong>Al-Qitr</strong> (Le Cuivre).<br>Ici, c'est l'inverse.",
            html: `
            <div class="concept-card">
                <h3>ٱلْقِطْرِ (Al-Qitr)</h3>
                <p>À l'arrêt, Ra muet. Coincé entre Kasra et Ta (emphatique).</p>
                
                <div class="mz-container">
                    <div class="mz-phrase">ٱلْقِطْر</div>
                    <div class="mz-analysis">
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#0984e3; color:#0984e3;">ِ</div>
                            <div class="mz-label" style="color:#0984e3;">Kasra (Fin)</div>
                        </div>
                        <div class="mz-icon">⚡️</div>
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#d35400; color:#d35400;">ط</div>
                            <div class="mz-label" style="color:#d35400;">Ta (Lourd)</div>
                        </div>
                    </div>
                    <div class="ex-logic">Ici, on regarde l'origine du mot.<br>La <strong>Kasra</strong> l'emporte ! 🏆</div>
                </div>

                <div style="background:#e3f2fd; padding:15px; border-radius:10px; border:2px solid #3498db; text-align:center;">
                    <div style="font-weight:bold; color:#0984e3;">Préférence : FIN 🙂</div>
                    <div style="font-size:0.8rem;">(Pour revenir à l'origine "Qitri")</div>
                </div>
            </div>`
        },

        // --- MOT 3 : FIRQ (PARTIE) ---
        {
            type: "lesson",
            prof: "Cas N°3 : <strong>Firq</strong>.<br>L'égalité parfaite.",
            html: `
            <div class="concept-card">
                <h3>فِرْقٍ (Firq)</h3>
                <p>Ra muet. Avant 'i'. Après Qaf... MAIS le Qaf a une Kasra (Cassé) !</p>
                
                <div class="mz-container">
                    <div class="mz-phrase">فِرْق</div>
                    <div class="mz-analysis">
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#0984e3;">ِ</div>
                            <div class="mz-label blue">Kasra</div>
                        </div>
                        <div class="mz-icon">🤝</div>
                        <div class="mz-group">
                            <div class="mz-box mz-green" style="border-color:#d35400;">قٍ</div>
                            <div class="mz-label red">Qaf (Brisé)</div>
                        </div>
                    </div>
                    <div class="ex-logic">Le Qaf est fort, mais cassé par sa Kasra.<br><strong>CHOIX TOTAL (50/50)</strong></div>
                </div>
            </div>`
        },

        // --- QUIZ (10 Questions) ---
        { type: "intro", prof: "As-tu l'âme d'un Juge ? ⚖️<br>10 Questions pour trancher." },

        // CONCEPT
        { type: "quiz_theory", prof: "Q1/10 - Que veut dire 'Jawaz' ?", opts: [{ t: "Interdit", good: false }, { t: "Autorisation / Choix", good: true, reason: "C'est la permission des deux faces." }], exp: "Jawaz = Permis." },

        // MISR
        { type: "quiz_theory", prof: "Q2/10 - Je m'arrête sur **مِصْر** (Misr). Je peux faire Fin ou Lourd. Lequel est préféré ?", opts: [{ t: "Lourd (Tafkhim)", good: true, reason: "Comme le Sad" }, { t: "Fin (Tarqiq)", good: false }], exp: "On préfère suivre la lourdeur du Sad." },
        { type: "quiz_theory", prof: "Q3/10 - Pourquoi privilégie-t-on le Lourd dans Misr ?", opts: [{ t: "À cause du Sad (Lettre Forte)", good: true }, { t: "À cause du Mim", good: false }], exp: "Le Sad est une lettre très puissante." },
        { type: "quiz_theory", prof: "Q4/10 - Si je continue la lecture (sans m'arrêter) sur **مِصْرَ**. Le Ra a une Fatha.", opts: [{ t: "Lourd OBLIGATOIRE", good: true, reason: "Ra Fatha = Lourd" }, { t: "Choix", good: false }], exp: "En liaison, la règle de base (Fatha) s'applique : LOURD." },

        // QITR
        { type: "quiz_theory", prof: "Q5/10 - Je m'arrête sur **ٱلْقِطْر** (Al-Qitr). Préférence ?", opts: [{ t: "Lourd", good: false }, { t: "Fin (Tarqiq)", good: true, reason: "Origine Kasra" }], exp: "On préfère le Fin pour rappeler la Kasra d'origine." },
        { type: "quiz_theory", prof: "Q6/10 - Si je fais **Al-Qitr** en LOURD, est-ce une faute ?", opts: [{ t: "Oui, c'est Haram", good: false }, { t: "Non, c'est autorisé (Jawaz)", good: true, reason: "Les deux sont permis" }], exp: "C'est juste une préférence, pas une obligation." },

        // FIRQ
        { type: "quiz_theory", prof: "Q7/10 - Le mot **فِرْقٍ** (Firq) est spécial car :", opts: [{ t: "La lettre forte (Qaf) a une Kasra", good: true, reason: "Qaf brisé" }, { t: "Il n'y a pas de lettre forte", good: false }], exp: "Le Qaf est 'cassé', donc il perd de sa force." },
        { type: "quiz_theory", prof: "Q8/10 - Dans **فِرْقٍ**, quelle est la préférence ?", opts: [{ t: "Lourd", good: false }, { t: "Fin", good: false }, { t: "Égalité totale", good: true }], exp: "Les savants sont très partagés, c'est le vrai choix." },

        // MIX / RECAP
        { type: "quiz_theory", prof: "Q9/10 - Si je m'arrête sur **يَسْر** (yasr) (Sourate Fajr). C'est comme Al-Qitr. Préférence ?", opts: [{ t: "Fin", good: true, reason: "Yasr-i (Origine)" }, { t: "Lourd", good: false }], exp: "On préfère le Fin car le mot d'origine est 'Yasri' (avec Ya supprimé)." },
        { type: "quiz_theory", prof: "Q10/10 - Résumé : Pour **Misr**, pense ___. Pour **Qitr**, pense ___.", opts: [{ t: "Fort / Doux", good: true }, { t: "Doux / Fort", good: false }], exp: "Misr = Fort (Sad). Qitr = Doux (Kasra/Fin)." }
    ]
};
