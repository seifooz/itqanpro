const MAD_LIN_DATA = {
    id: "mad_lin",
    title: "8. MAD LIN",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "quiz_theory",
            prof: "Observez et écoutez le premier verset de Surah Quraysh.<br>Comment l'Imam finit-il le mot <strong>Quraysh</strong> ?",
            html: `
            <div class="concept-card" style="text-align:center;">
                <h3>Observation Audio</h3>
                <div style="font-size:1.8rem; margin-top:20px; margin-bottom:10px; color:#006064; font-family: 'Scheherazade New', serif; line-height:1.6;">
                     لِإِيلَٰفِ <span style="color:#d32f2f;">قُرَيْشٍ</span>
                </div>
                
                <div style="margin-bottom:20px;">
                    <button class="btn-audio btn-listen" id="play-lin-intro" onclick="playAudio('mad_lin_intro_lin', 0, 100, 'intro-lin')" style="background:#e0f7fa; color:#006064; border:none; padding:10px 20px; border-radius:30px; font-weight:bold; cursor:pointer; display:inline-flex; align-items:center; gap:8px;">
                        <span>▶️</span> Écouter la Récitation
                    </button>
                </div>
            </div>`,
            questions: [
                {
                    q: "À l'arrêt, qu'avez-vous entendu ?",
                    opts: ["Un son court et sec", "Une prolongation douce (Yaaaa)"],
                    good: 1
                }
            ],
            exp: "Exact ! À l'arrêt, le son s'étire avec douceur. C'est le Mad Lin."
        },
        {
            type: "lesson",
            prof: "Avant de voir le détail, voici la définition technique à retenir.",
            html: `
            <div class="concept-card">
                <h3>Définition Technique</h3>
                <p>Le <strong>Mad Lin</strong> survient lorsque l'on s'arrête sur une lettre précédée d'une lettre de <strong>Lin</strong> (Douceur).</p>
                <div class="tip-box">
                    <strong>Les Lettres de Lin :</strong><br>
                    Le <strong>Waw ( و )</strong> et le <strong>Ya ( ي )</strong> porteurs d'un <strong>Sukun</strong> et précédés d'une <strong>Fatha</strong>.
                </div>
                <div style="font-size:2rem; margin:15px; color:#006064; text-align:center;">
                    ـَوْ / ـَيْ
                </div>
                <p style="font-size:0.9rem; color:#555;">On l'appelle "Lin" car le son sort avec facilité et douceur, sans effort.</p>
            </div>`
        },
        {
            type: "lesson",
            prof: "Regardons maintenant la composition exacte (La Recette) avec des exemples.",
            html: `
            <div class="concept-card">
                <h3>La Recette du Mad Lin</h3>
                <p style="color:#333;">Il se forme quand une lettre de Lin ( <span class="ar-inline">يْ</span> ou <span class="ar-inline">وْ</span> ) est précédée d'une <strong>Fatha</strong>.</p>
                
                <div style="display:flex; flex-direction:column; gap:15px; margin-top:20px;">
                    
                    <!-- EXEMPLE 1 : QURAYSH -->
                    <div style="background:#fff; border:1px solid #e0e0e0; border-radius:10px; padding:15px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">
                            <div class="ar-medium" style="color:#2d3436; font-size:2rem;">قُرَيْش</div>
                            <div style="font-weight:bold; color:#d32f2f;">Quraysh</div>
                        </div>
                        <div style="display:flex; align-items:center; gap:15px; justify-content:center;">
                            <div style="text-align:center;">
                                <div class="ar-medium" style="color:#1976d2; font-size:2.2rem;">يْ</div>
                                <div style="font-size:0.75rem; color:#555;">Ya Sukun</div>
                            </div>
                            <div style="font-size:1.5rem; color:#ccc;">+</div>
                            <div style="text-align:center;">
                                <div class="ar-medium" style="color:#d32f2f; font-size:2.2rem;">رَ</div>
                                <div style="font-size:0.75rem; color:#555;">Ra Fatha</div>
                            </div>
                        </div>
                        <div style="font-size:0.85rem; color:#333; margin-top:10px; text-align:center; font-style:italic;">
                            "Le Ya est précédé d'une Fatha."
                        </div>
                    </div>

                    <!-- EXEMPLE 2 : KHAWF -->
                    <div style="background:#fff; border:1px solid #e0e0e0; border-radius:10px; padding:15px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">
                            <div class="ar-medium" style="color:#2d3436; font-size:2rem;">خَوْف</div>
                            <div style="font-weight:bold; color:#d32f2f;">Khawf</div>
                        </div>
                        <div style="display:flex; align-items:center; gap:15px; justify-content:center;">
                            <div style="text-align:center;">
                                <div class="ar-medium" style="color:#1976d2; font-size:2.2rem;">وْ</div>
                                <div style="font-size:0.75rem; color:#555;">Waw Sukun</div>
                            </div>
                            <div style="font-size:1.5rem; color:#ccc;">+</div>
                            <div style="text-align:center;">
                                <div class="ar-medium" style="color:#d32f2f; font-size:2.2rem;">خَ</div>
                                <div style="font-size:0.75rem; color:#555;">Kha Fatha</div>
                            </div>
                        </div>
                        <div style="font-size:0.85rem; color:#333; margin-top:10px; text-align:center; font-style:italic;">
                            "Le Waw est précédé d'une Fatha."
                        </div>
                    </div>

                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Comme c'est un arrêt accidentel, vous avez exactement le même choix que pour le Mad Arid.",
            html: `<div class="concept-card">
                <h3>Les 3 Durées (Au choix)</h3>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:15px;">
                    <div style="background:#e8f5e9; padding:10px; border-radius:8px; border-left:4px solid #4caf50; color:#333;">
                        <strong>2 Temps (Qasr)</strong> : À peine allongé (Juste la douceur).
                    </div>
                    <div style="background:#e3f2fd; padding:10px; border-radius:8px; border-left:4px solid #2196f3; color:#333;">
                        <strong>4 Temps (Tawassut)</strong> : Moyen (Recommandé).
                    </div>
                    <div style="background:#ffebee; padding:10px; border-radius:8px; border-left:4px solid #f44336; color:#333;">
                        <strong>6 Temps (Tul)</strong> : Très long.
                    </div>
                </div>
            </div>`
        },
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Vocal</strong><br>Écoutez cette douceur (Layyin) dans la prolongation."
        },
        {
            type: "workshop",
            prof: "Entraînez-vous à faire un beau 4 temps sur ces mots de Surah Quraysh.",
            examples: [
                { type: "Arrêt (Ya)", ar: "قُرَيْشٍ", url: "mad_lin_quiz_theory_1", start: 3, end: 6, id: "lin1" },
                { type: "Arrêt (Ya)", ar: "ٱلصَّيْفِ", url: "mad_lin_arr_t_ya__2", start: 6, end: 9, id: "lin2" },
                { type: "Arrêt (Ya)", ar: "ٱلْبَيْتِ", url: "mad_lin_arr_t_ya__3", start: 5, end: 7, id: "lin3" },
                { type: "Arrêt (Waw)", ar: "خَوْفٍ", url: "mad_lin_arr_t_waw__4", start: 6, end: 8, id: "lin4" }
            ]
        },
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion Coranique</strong><br>Sourate Quraysh (106). C'est LA sourate du Mad Lin.",
            instruction: "Cliquez sur les mots finaux. Attention, ils sont tous des Mad Lin !",
            surah: 106,
            words: [
                { t: "لِإِيلَٰفِ", ok: false }, { t: "قُرَيْشٍ", ok: true, reason: "Mad Lin (Yaa après Fatha)" }, { t: "١", endVerse: true },
                { t: "إِۦلَٰفِهِمْ", ok: false }, { t: "رِحْلَةَ", ok: false }, { t: "ٱلشِّتَآءِ", ok: false }, { t: "وَٱلصَّيْفِ", ok: true, reason: "Mad Lin (Yaa après Fatha)" }, { t: "٢", endVerse: true },
                { t: "فَلْيَعْبُدُوا۟", ok: false }, { t: "رَبَّ", ok: false }, { t: "هَٰذَا", ok: false }, { t: "ٱلْبَيْتِ", ok: true, reason: "Mad Lin (Yaa après Fatha)" }, { t: "٣", endVerse: true },
                { t: "ٱلَّذِىٓ", ok: false }, { t: "أَطْعَمَهُم", ok: false }, { t: "مِّن", ok: false }, { t: "جُوعٍ", ok: false }, { t: "وَءَامَنَهُم", ok: false }, { t: "مِّنْ", ok: false }, { t: "خَوْفٍۭ", ok: true, reason: "Mad Lin (Waw après Fatha)" }, { t: "٤", endVerse: true }
            ]
        },
        {
            type: "quiz_theory",
            prof: "Dernière petite question...",
            questions: [
                {
                    q: "Si je ne m'arrête PAS sur le mot 'Quraysh', y a-t-il un Mad ?",
                    opts: ["Oui, 2 temps", "Non, aucun Mad"],
                    good: 1
                }
            ],
            exp: "C'est exact. Contrairement au Mad Tabi'i qui reste à 2 temps, le Mad Lin disparaît complètement en cas de liaison."
        }
    ]
};
