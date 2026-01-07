const RA_JAWAZ_DATA = {
    id: "ra_jawaz",
    title: "RA JAWAZ (EXCEPTIONS)",
    type: "Ahkam Ar-Ra",
    steps: [
        {
            type: "lesson",
            prof: "Partie 3 : <strong>Le Jawaz</strong> (Choix).<br>Pour ces mots rares, les savants ont divergé ou autorisé les deux.",
            html: `
            <div class="concept-card">
                <h3 style="color:#fdcb6e;">Les Cas Particuliers</h3>
                <p>Parfois, le Ra est coincé entre une cause d'amincissement (Kasra) et une cause de lourdeur (Lettre emphatique ou Arrêt).</p>
                <div style="background:#fff3cd; border:1px solid #ffeeba; padding:15px; border-radius:8px; margin-top:15px; text-align:center;">
                    Dans ces cas, tu peux souvent choisir, mais il y a une <strong>préférence</strong>.
                </div>
            </div>`
        },

        // MOT 1 : MISR
        {
            type: "lesson",
            prof: "Exception N°1 : <strong>Misr</strong> (L'Égypte).",
            html: `
            <div class="concept-card">
                <h3>مِصْرَ (Misr)</h3>
                <p><strong>Analyse :</strong> Le Ra est précédé d'un Sad (ص) emphatique avec Soukoun, lui-même précédé d'une Kasra.</p>
                
                <div class="comparison-box" style="margin-top:20px;">
                    <div style="margin-bottom:15px;">
                        <span class="tag-orange">À l'arrêt (Préférence)</span>
                        <p><strong>LOURD (Tafkhim)</strong><br>On privilégie la force du Sad (ص).</p>
                    </div>
                    <div>
                        <span class="tag-blue">À la liaison</span>
                        <p><strong>LOURD (Tafkhim)</strong><br>Car le Ra porte une Fatha (M isra).</p>
                    </div>
                </div>
                
                <div class="audio-row-item">
                    <div class="ar-word">مِصْرَ</div>
                    <button class="mini-play" onclick="playAudio('010087', 4, 6, 'misr')">▶</button>
                    <div class="ex-label">Écoute l'arrêt Lourd.</div>
                </div>
            </div>`
        },

        // MOT 2 : AL-QITR
        {
            type: "lesson",
            prof: "Exception N°2 : <strong>Al-Qitr</strong> (Le Cuivre fondu).",
            html: `
            <div class="concept-card">
                <h3>ٱلْقِطْرِ (Al-Qitr)</h3>
                <p><strong>Analyse :</strong> Le Ra est précédé d'un Ta (ط) emphatique avec Soukoun, lui-même précédé d'une Kasra.</p>
                
                <div class="comparison-box" style="margin-top:20px;">
                    <div style="margin-bottom:15px;">
                        <span class="tag-blue">À l'arrêt (Préférence)</span>
                        <p><strong>FIN (Tarqiq)</strong><br>On revient à l'origine de la Kasra du Qaf.</p>
                    </div>
                    <div>
                        <span class="tag-blue">À la liaison</span>
                        <p><strong>FIN (Tarqiq)</strong><br>Car le Ra porte une Kasra (Al-Qitr i).</p>
                    </div>
                </div>
                
                <div class="audio-row-item">
                    <div class="ar-word">ٱلْقِطْرِ</div>
                    <!-- Using generic example or specific verse -->
                    <div class="ex-label">On préfère la finesse.</div>
                </div>
            </div>`
        },

        // MOT 3 : FIRQ
        {
            type: "lesson",
            prof: "Exception N°3 : <strong>Firq</strong> (Une partie).<br>C'est le seul cas où le Ra est suivi d'une emphatique mais qui est cassée (Kasra).",
            html: `
            <div class="concept-card">
                <h3>فِرْقٍ (Firq)</h3>
                <p>Ici, le Qaf (ق) final porte une Kasra (Tanween Kasra). Sa force est "brisée".</p>
                
                <div style="background:#f8f9fa; padding:15px; border-radius:8px;">
                    <div style="font-weight:bold; margin-bottom:10px;">Les Deux Visages :</div>
                    <ul class="rule-list">
                        <li><strong>Fin (Tarqiq) :</strong> Car le Qaf est affaibli par sa Kasra.</li>
                        <li><strong>Lourd (Tafkhim) :</strong> Car le Qaf reste une lettre forte de base.</li>
                    </ul>
                </div>
                <div class="tip-box">
                    Les deux sont corrects à la lecture.
                </div>
            </div>`
        },

        // QUIZ
        { type: "intro", prof: "🧐 Quiz Jawaz" },
        {
            type: "quiz_theory",
            prof: "Si je m'arrête sur le mot 'Misr' (مِصْر), je préfère le lire :",
            opts: [{ t: "Lourd (Tafkhim)", good: true }, { t: "Fin (Tarqiq)", good: false }],
            exp: "Le Sad Emphatique rend le Ra lourd."
        },
        {
            type: "quiz_theory",
            prof: "Si je m'arrête sur 'Al-Qitr' (ٱلْقِطْر), je préfère le lire :",
            opts: [{ t: "Lourd (Tafkhim)", good: false }, { t: "Fin (Tarqiq)", good: true }],
            exp: "On suit la Kasra initiale."
        }
    ]
};
