const MAD_ARID_DATA = {
    id: "mad_arid",
    title: "7. MAD ARID LISSUKUN",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "quiz_theory",
            prof: "Comparons deux façons de lire les Versets 2 et 3 de la Fatiha.<br>Regardez bien la fin du mot <strong>Al-Alamiin</strong>.",
            html: `
            <div class="concept-card" style="text-align:center;">
                <h3>Situation 1 : Je m'arrête 🛑</h3>
                <div style="background:#fff3e0; padding:10px; border-radius:10px; border:2px solid #ff9800; margin-bottom:15px;">
                    <div style="font-size:1.4rem; color:#006064; font-family: 'Scheherazade New', serif; direction:rtl;">
                        ٱلْحَمْدُ لِلَّهِ رَبِّ <span style="color:#d32f2f;">ٱلْعَٰلَمِينَ</span> 🛑 ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                    </div>
                     <button class="btn-audio btn-listen" id="play-lid-stop" onclick="playAudio('mad_arid_intro_lid_stop', 0, 100, 'intro-lid-stop')" style="margin-top:10px; width:100%; justify-content:center; background:#e65100; color:white;">
                        <span>▶️</span> Écouter l'Arrêt
                    </button>
                    <div style="font-size:0.85rem; color:#555; margin-top:5px; font-style:italic;">J'ai coupé mon souffle sur "Min".</div>
                </div>

                <h3>Situation 2 : Je continue 🏃 (Liaison)</h3>
                <div style="background:#e8f5e9; padding:10px; border-radius:10px; border:2px solid #4caf50; opacity:0.9;">
                    <div style="font-size:1.4rem; color:#006064; font-family: 'Scheherazade New', serif; direction:rtl;">
                        ٱلْحَمْدُ لِلَّهِ رَبِّ <span style="color:#2e7d32;">ٱلْعَٰلَمِينَ</span> ➡️ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                    </div>
                     <button class="btn-audio btn-listen" id="play-lid-cont" onclick="playAudio('mad_arid_intro_lid_continue', 0, 100, 'intro-lid-cont')" style="margin-top:10px; width:100%; justify-content:center; background:#2e7d32; color:white;">
                        <span>▶️</span> Écouter la Liaison
                    </button>
                    <div style="font-size:0.85rem; color:#555; margin-top:5px; font-style:italic;">Je ne m'arrête pas, je lie les deux versets.</div>
                </div>

            </div>`,
            questions: [
                {
                    q: "Dans l'Exemple 1 (Arrêt), comment ai-je fini le mot ?",
                    opts: ["Al-AlamiinA (Court)", "Al-Alamiiiiiin (Long)"],
                    good: 1
                },
                {
                    q: "Dans l'Exemple 2 (Liaison), comment dois-je lire le mot ?",
                    opts: ["Al-AlamiinA (Court, je prononce la voyelle)", "Al-Alamiiiiiin (Long, je prolonge)"],
                    good: 0
                }
            ],
            exp: "Bravo ! Le Mad Long (Arid) n'existe <strong>QUE</strong> si je m'arrête. Si je continue, la voyelle reste courte."
        },
        {
            type: "lesson",
            prof: "Pourquoi cet allongement ? Parce que nous avons créé un 'Obstacle' artificiel.",
            html: `<div class="concept-card">
                <h3>Le Secret : L'Arrêt (Stop)</h3>
                <p style="color:#333;">En arabe, on ne s'arrête jamais sur une voyelle courte. On la remplace par un <strong>Sukun</strong> (Silence/Absence de voyelle).</p>
                <div style="background:#fff3e0; padding:15px; border-radius:10px; margin:20px 0; text-align:center; border:2px solid #ff9800;">
                    <div style="font-size:1.8rem; color:#e65100; margin-bottom:10px;">ٱلْعَٰلَمِينَ ➡️ ٱلْعَٰلَمِينْ</div>
                    <div style="color:#bf360c; font-weight:bold;">Al-Alamiin<span style="text-decoration:line-through; color:#aaa;">a</span> ➡️ Al-Alamiin<strong>°</strong></div>
                </div>
                <p style="color:#333;">Ce Sukun est <strong>"Arid" (Accidentel)</strong> car il n'existe que parce qu'on s'est arrêté.</p>
            </div>`
        },
        {
            type: "lesson",
            prof: "Comme c'est un arrêt accidentel et temporaire, vous avez le choix de la durée.",
            html: `<div class="concept-card">
                <h3>Les 3 Choix de Durée</h3>
                <p style="color:#333;">Vous pouvez adapter la longueur selon votre rythme de lecture :</p>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:15px;">
                    <div style="background:#e8f5e9; padding:10px; border-radius:8px; border-left:4px solid #4caf50; color:#333;">
                        <strong>2 Temps (Qasr)</strong> : Rapide (Comme Tabi'i).
                    </div>
                    <div style="background:#e3f2fd; padding:10px; border-radius:8px; border-left:4px solid #2196f3; color:#333;">
                        <strong>4 Temps (Tawassut)</strong> : Moyen (Recommandé - Le plus beau).
                    </div>
                    <div style="background:#ffebee; padding:10px; border-radius:8px; border-left:4px solid #f44336; color:#333;">
                        <strong>6 Temps (Tul)</strong> : Long (Très lent).
                    </div>
                </div>
            </div>`
        },
        {
            type: "lesson",
            prof: "Voyons la transformation en action sur d'autres exemples.",
            html: `
            <div class="concept-card">
                <h3>Exemples Visuels</h3>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                    <!-- Ya -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #ef6c00;">
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#ef6c00;">ٱلْعَٰلَمِينَ</div>
                            <div style="font-size:0.8rem; color:#666;">Al-'Aalamiina</div>
                        </div>
                        <div style="font-size:1.5rem;">➡️</div>
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#bf360c;">ٱلْعَٰلَمِينْ</div>
                            <div style="font-size:0.8rem; color:#bf360c;">Al-'Aalamiiin</div>
                        </div>
                    </div>
                    <!-- Wow -->
                    <div style="display:flex; align-items:center; gap:10px; background:#fff; padding:10px; border-radius:8px; border-left: 4px solid #ef6c00;">
                        <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#ef6c00;">تَعْلَمُونَ</div>
                            <div style="font-size:0.8rem; color:#666;">Ta'lamuuna</div>
                        </div>
                        <div style="font-size:1.5rem;">➡️</div>
                         <div style="text-align:center; width: 45%;">
                            <div class="ar-word ar-medium" style="color:#bf360c;">تَعْلَمُونْ</div>
                            <div style="font-size:0.8rem; color:#bf360c;">Ta'lamuuun</div>
                        </div>
                    </div>
                </div>
                <div class="tip-box">
                    <strong>Rappel :</strong> Cette transformation ne se fait QUE si vous ARRÊTEZ votre lecture.
                </div>
            </div>`
        },
        {
            type: "intro",
            prof: "🎙️ <strong>Atelier Vocal</strong><br>Pratiquons le 'Tawassut' (4 Temps), le plus équilibré."
        },
        {
            type: "workshop",
            prof: "Faites bien résonner la lettre de prolongation avant de couper le son.",
            examples: [
                {
                    type: "Arrêt 4 Temps",
                    verse: "ٱلْحَمْدُ لِلَّهِ رَبِّ",
                    ar: "ٱلْعَٰلَمِينَ",
                    url: "mad_arid_quiz_theory_1",
                    start: 4,
                    end: 6,
                    id: "arid1",
                    exp: "Il y a une Fatha sur le Noun (Na), mais si on s'arrête, on met un Sukun et on allonge le Ya : Al-Alamiin."
                },
                {
                    type: "Arrêt 4 Temps",
                    verse: "مَٰلِكِ يَوْمِ",
                    ar: "ٱلدِّينِ",
                    url: "mad_arid_arr_t_4_temps_2",
                    start: 3,
                    end: 5,
                    id: "arid2",
                    exp: "La Kasra sous le Noun (Ni) devient un Sukun à l'arrêt. Le Ya s'allonge 2, 4 ou 6 temps."
                },
                {
                    type: "Arrêt 4 Temps",
                    verse: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ",
                    ar: "نَسْتَعِينُ",
                    url: "mad_arid_arr_t_4_temps_3",
                    start: 6,
                    end: 8,
                    id: "arid3",
                    exp: "On s'arrête sur le Noun avec un Sukun, donc le Ya précédent devient un Mad Arid."
                }
            ]
        },
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion Coranique</strong><br>Sourate Al-Fatihah (1). Chaque arrêt crée un Mad Arid.",
            instruction: "Cliquez sur les derniers mots pour valider le Mad.",
            targetName: "un Mad Arid",
            surah: 1,
            words: [
                { t: "بِسْمِ", ok: false }, { t: "ٱللَّهِ", ok: false }, { t: "ٱلرَّحْمَٰنِ", ok: false }, { t: "ٱلرَّحِيمِ", ok: true, reason: "Mad Arid : Arrêt sur la fin du verset (Ar-Rahiim)." }, { t: "١", endVerse: true },
                { t: "ٱلْحَمْدُ", ok: false }, { t: "لِلَّهِ", ok: false }, { t: "رَبِّ", ok: false }, { t: "ٱلْعَٰلَمِينَ", ok: true, reason: "Mad Arid (Al-Aalamiiin)." }, { t: "٢", endVerse: true },
                { t: "ٱلرَّحْمَٰنِ", ok: false }, { t: "ٱلرَّحِيمِ", ok: true, reason: "Mad Arid (Ar-Rahiiim)." }, { t: "٣", endVerse: true },
                { t: "مَٰلِكِ", ok: false }, { t: "يَوْمِ", ok: false }, { t: "ٱلدِّينِ", ok: true, reason: "Mad Arid (Ad-Diiin)." }, { t: "٤", endVerse: true },
                { t: "إِيَّاكَ", ok: false }, { t: "نَعْبُدُ", ok: false }, { t: "وإِيَّاكَ", ok: false }, { t: "نَسْتَعِينُ", ok: true, reason: "Mad Arid (Nasta'iiin)." }, { t: "٥", endVerse: true },
                { t: "ٱهْدِنَا", ok: false }, { t: "ٱلصِّرَٰطَ", ok: false }, { t: "ٱلْمُسْتَقِيمَ", ok: true, reason: "Mad Arid (Al-Mustaqiiim)." }, { t: "٦", endVerse: true },
                { t: "صِرَٰطَ", ok: false }, { t: "ٱلَّذِينَ", ok: false }, { t: "أَنْعَمْتَ", ok: false }, { t: "عَلَيْهِمْ", ok: false }, { t: "غَيْرِ", ok: false }, { t: "ٱلْمَغْضُوبِ", ok: false }, { t: "عَلَيْهِمْ", ok: false }, { t: "وَلَا", ok: false }, { t: "ٱلضَّآلِّينَ", ok: true, reason: "Mad Arid (Addaaalliiin)." }, { t: "٧", endVerse: true }
            ]
        },
        {
            type: "intro",
            prof: "🧐 <strong>Évaluation du Mad Arid</strong>"
        },
        {
            type: "quiz_theory",
            prof: "Validons votre compréhension du concept.",
            questions: [
                {
                    q: "Pourquoi dit-on 'Arid' (Accidentel) ?",
                    opts: ["Car il n'apparaît qu'à l'arrêt", "Car il est une erreur"],
                    good: 0
                },
                {
                    q: "Si je continue ma lecture sans m'arrêter, quelle est la durée ?",
                    opts: ["2 Temps (Naturel)", "6 Temps (Long)"],
                    good: 0
                },
                {
                    q: "Quelle est la meilleure durée (Moyenne) à l'arrêt ?",
                    opts: ["2 Temps", "4 Temps", "6 Temps"],
                    good: 1
                }
            ]
        }
    ]
};
