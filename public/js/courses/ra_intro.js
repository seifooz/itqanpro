const RA_INTRO_DATA = {
    id: "ra_intro",
    title: "RA - INTRODUCTION",
    type: "Ahkam Ar-Ra",
    steps: [
        // 1. LISTENING (NO QUIZ)
        {
            type: "lesson",
            prof: "Bonjour ! Découvrez le secret de la lettre **Ra (ر)**.<br>Écoutez simplement ces deux mots.",
            html: `
            <div class="concept-card" style="text-align:center;">
                <h3>Écoutez la différence 👂</h3>
                
                <div style="display:flex; justify-content:space-around; align-items:flex-start; margin-top:20px; gap:10px;">
                    <div style="text-align:center; flex:1;">
                        <button class="btn-audio btn-listen" onclick="playAudio('ra_intro_ex_rabb', 0, 3, 'ex-rabb')" style="background:#fff3e0; border:1px solid #d35400; padding:15px; border-radius:10px; width:100%; color:#d35400; font-weight:bold; font-size:1.1rem; margin-bottom:10px;">
                            <div class="ar-med" style="font-size:1.8rem; margin-bottom:5px;">رَبِّ</div>
                            🔊 "Rabb"
                        </button>
                        <div style="font-size:0.9rem; color:#555;">Son GROS (Grave)</div>
                    </div>
                    <div style="text-align:center; flex:1;">
                        <button class="btn-audio btn-listen" onclick="playAudio('ra_intro_rihla', 2, 4, 'rihla')" style="background:#e3f2fd; border:1px solid #0984e3; padding:15px; border-radius:10px; width:100%; color:#0984e3; font-weight:bold; font-size:1.1rem; margin-bottom:10px;">
                            <div class="ar-med" style="font-size:1.8rem; margin-bottom:5px;">رِحْلَةَ</div>
                            🔊 "Rihla"
                        </button>
                        <div style="font-size:0.9rem; color:#555;">Son FIN (Aigu)</div>
                    </div>
                </div>
            </div>`
        },

        // 2. THE CHAMELEON (SIMPLE EXPLANATION)
        {
            type: "lesson",
            prof: "Vous l'avez entendu ?<br>Le Ra est un **Caméléon** 🦎.",
            html: `
            <div class="concept-card">
                <h3>Il change de couleur</h3>
                <p>Contrairement aux autres lettres, le Ra change de son. Il a deux visages :</p>
                
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-top:15px;">
                    <!-- LOURD -->
                    <div style="background:#fff3e0; padding:15px; border-radius:10px; text-align:center; border-bottom:4px solid #d35400;">
                        <div style="font-size:2.5rem;">🐘</div>
                        <div style="font-weight:bold; color:#d35400; font-size:1.1rem;">LOURD</div>
                        <div style="font-size:0.8rem; color:#666;">(Tafkhim)</div>
                    </div>

                    <!-- FIN -->
                    <div style="background:#e3f2fd; padding:15px; border-radius:10px; text-align:center; border-bottom:4px solid #0984e3;">
                        <div style="font-size:2.5rem;">🙂</div>
                        <div style="font-weight:bold; color:#0984e3; font-size:1.1rem;">FIN</div>
                        <div style="font-size:0.8rem; color:#666;">(Tarqiq)</div>
                    </div>
                </div>
            </div>`
        },

        // 3. THE RULE (SIMPLE VISUAL)
        {
            type: "lesson",
            prof: "Comment savoir lequel utiliser ?<br>Regardez simplement la **Voyelle**.",
            html: `
            <div class="concept-card" style="text-align:center;">
                <p>C'est très logique :</p>
                
                <div style="display:flex; flex-direction:column; gap:15px; margin-top:15px;">
                    
                    <div style="background:#fff3e0; padding:10px; border-radius:8px; display:flex; align-items:center; justify-content:space-between;">
                        <div style="text-align:left;">
                            <div style="font-weight:bold; color:#d35400;">Voyelle HAUTE (a, u)</div>
                            <div style="font-size:0.8rem;">La bouche s'ouvre ou s'arrondit.</div>
                        </div>
                        <div style="font-size:1.5rem;">🐘</div>
                    </div>

                    <div style="background:#e3f2fd; padding:10px; border-radius:8px; display:flex; align-items:center; justify-content:space-between;">
                        <div style="text-align:left;">
                            <div style="font-weight:bold; color:#0984e3;">Voyelle BASSE (i)</div>
                            <div style="font-size:0.8rem;">La bouche sourit (vers le bas).</div>
                        </div>
                        <div style="font-size:1.5rem;">🙂</div>
                    </div>

                </div>
            </div>`
        },

        // 4. ROADMAP
        {
            type: "lesson",
            prof: "C'est tout !<br>Dans les prochains cours, nous pratiquerons ces deux sons.",
            html: `
            <div class="concept-card">
                <h3>La Suite de l'Aventure 🗺️</h3>
                
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:15px;">
                    <div style="padding:15px; background:#fff3e0; border-left:5px solid #d35400; border-radius:5px;">
                        <strong>1. Ra Tafkhim</strong> 🐘<br>
                        <span style="font-size:0.9rem;">Quand il est GROS. (La majorité du temps)</span>
                    </div>
                    
                    <div style="padding:15px; background:#e3f2fd; border-left:5px solid #0984e3; border-radius:5px;">
                        <strong>2. Ra Tarqiq</strong> 🙂<br>
                        <span style="font-size:0.9rem;">Quand il est FIN. (Avec la Kasra)</span>
                    </div>
                </div>

                <div style="margin-top:20px; text-align:center;">
                    <button class="btn-audio" onclick="next()" style="background:#27ae60; color:white; width:100%; border:none;">Commencer le Tafkhim ➜</button>
                </div>
            </div>`
        }
    ]
};
