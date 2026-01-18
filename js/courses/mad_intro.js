const MAD_INTRO_DATA = {
    id: "mad_intro",
    title: "0. INTRODUCTION AUX MOUDOUD",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "As-Salamou 'Aleykoum ! 👋<br>Avant de plonger dans les règles, comprenons ce qu'est un <strong>Mad ( Prolongation )</strong>.",
            html: `
            <div class="concept-card">
                <h3>Le Concept</h3>
                <p>En arabe, certaines voyelles s'étirent comme un élastique. C'est ce qu'on appelle le <strong>Mad</strong>.</p>
                <div style="background:#fff; padding:20px; border-radius:15px; text-align:center; margin:20px 0; border:2px dashed #ffb74d;">
                    <div style="font-size:2rem; margin-bottom:10px;">بَ ➡️ بَا</div>
                    <div style="color:#f57c00; font-weight:bold;">Ba (Court) ➡️ Baaa (Long)</div>
                </div>
                <p>Dès que vous voyez une lettre de prolongation, vous <strong>DEVEZ</strong> l'allonger. Ce n'est pas une option, c'est ce qui donne le sens au mot !</p>
            </div>`
        },
        {
            type: "lesson",
            prof: "Il existe 3 lettres magiques qui permettent d'étirer le son. On les appelle les lettres de <strong>Mad</strong>.",
            html: `
            <div class="concept-card">
                <h3>Les 3 Lettres "Élastiques"</h3>
                <div class="letters-grid" style="grid-template-columns: repeat(3, 1fr); gap:10px;">
                    <div class="l-card" style="border-color:#e0e0e0;">
                        <div class="l-ar" style="color:#d32f2f;">ا</div>
                        <div class="l-desc">Alif</div>
                        <small>Prolonge la Fatha (A)</small>
                    </div>
                    <div class="l-card" style="border-color:#e0e0e0;">
                        <div class="l-ar" style="color:#d32f2f;">و</div>
                        <div class="l-desc">Waw</div>
                        <small>Prolonge la Damma (Ou)</small>
                    </div>
                    <div class="l-card" style="border-color:#e0e0e0;">
                        <div class="l-ar" style="color:#d32f2f;">ي</div>
                        <div class="l-desc">Ya</div>
                        <small>Prolonge la Kasra (i)</small>
                    </div>
                </div>
                <div class="tip-box">
                    <strong>Astuce :</strong> Elles sont considérées comme "Mad" si elles sont <strong>vides</strong> (sans voyelle ni signe).
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "La grande question : <strong>Combien de temps</strong> doit-on tirer sur l'élastique ? 🤔",
            html: `
            <div class="concept-card">
                <h3>L'Unité de Mesure : La Haraka</h3>
                <p>On ne compte pas en secondes, mais en <strong>Harakat</strong> (Temps/Mouvements).</p>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:15px;">
                    
                    <div style="display:flex; align-items:center; background:#e8f5e9; padding:10px; border-radius:10px; border:1px solid #c8e6c9;">
                        <div style="font-size:1.5rem; font-weight:800; color:#2e7d32; width:50px; text-align:center;">2</div>
                        <div>
                            <div style="font-weight:bold; color:#2e7d32;">Le Minimum (Naturel)</div>
                            <div style="font-size:0.85rem;">C'est la base. Ni trop court, ni trop long. <br>Ex: <i>Qaala</i></div>
                        </div>
                    </div>

                    <div style="display:flex; align-items:center; background:#fff3e0; padding:10px; border-radius:10px; border:1px solid #ffe0b2;">
                        <div style="font-size:1.5rem; font-weight:800; color:#ef6c00; width:50px; text-align:center;">4-5</div>
                        <div>
                            <div style="font-weight:bold; color:#ef6c00;">Le Moyen</div>
                            <div style="font-size:0.85rem;">On allonge environ le double. Souvent dû à une Hamza.</div>
                        </div>
                    </div>

                    <div style="display:flex; align-items:center; background:#ffebee; padding:10px; border-radius:10px; border:1px solid #ffcdd2;">
                        <div style="font-size:1.5rem; font-weight:800; color:#c62828; width:50px; text-align:center;">6</div>
                        <div>
                            <div style="font-weight:bold; color:#c62828;">Le Maximum (Obligatoire)</div>
                            <div style="font-size:0.85rem;">Très long ! Souvent dû à un Sukun ou une Shadda.</div>
                        </div>
                    </div>

                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Mais comment savoir quand faire 2, 4 ou 6 temps ? C'est simple, il y a des <strong>Causes</strong> !",
            html: `
            <div class="concept-card">
                <h3>La Logique des Causes</h3>
                <p>Le Mad reste à <strong>2 temps</strong> (Naturel) tant que rien ne le perturbe.</p>
                <p>Il s'allonge (4 ou 6) s'il rencontre un obstacle :</p>
                
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:20px;">
                    <div style="background:#fce4ec; padding:15px; border-radius:10px; text-align:center;">
                        <div style="font-size:2rem;">ء</div>
                        <div style="font-weight:bold; color:#880e4f; margin-top:5px;">La Hamza</div>
                        <small>Elle demande souvent 4 ou 5 temps.</small>
                    </div>
                    <div style="background:#e1f5fe; padding:15px; border-radius:10px; text-align:center;">
                        <div style="font-size:2rem;">ْ / ّ</div>
                        <div style="font-weight:bold; color:#01579b; margin-top:5px;">Sukun / Shadda</div>
                        <small>Ils demandent souvent 6 temps (le max).</small>
                    </div>
                </div>
            </div>`
        },
        {
            type: "quiz_theory",
            prof: "Vérifions si vous avez saisi la logique générale.",
            questions: [
                {
                    q: "Si je vois un Alif vide sans Hamza ni Sukun après, je prolonge de...",
                    opts: ["2 Temps (Naturel)", "6 Temps (Max)", "Je ne prolonge pas"],
                    good: 0
                },
                {
                    q: "Quelles sont les deux causes principales qui augmentent la durée du Mad ?",
                    opts: ["La Fatha et la Kasra", "La Hamza et le Sukun", "Le Mim et le Nun"],
                    good: 1
                }
            ]
        },
        {
            type: "lesson",
            prof: "Bravo ! Vous avez maintenant les clés 🗝️ pour comprendre tous les chapitres suivants.",
            html: `
            <div class="concept-card" style="text-align:center;">
                <h3>Prêt pour l'aventure ?</h3>
                <p>Dans les prochains modules, nous verrons chaque cas en détail :</p>
                <ul style="text-align:left; margin:20px auto; display:inline-block; font-size:0.95rem; color:#444;">
                    <li>✅ <strong>Mad Tabi'i</strong> : Le naturel (2 temps).</li>
                    <li>✅ <strong>Mad Wajib/Jaiz</strong> : À cause de la Hamza (4-5 temps).</li>
                    <li>✅ <strong>Mad Lazim</strong> : À cause du Sukun (6 temps).</li>
                </ul>
                <p>Ne vous inquiétez pas, nous prendrons le temps de pratiquer chacun d'eux.</p>
            </div>`
        }
    ]
};
