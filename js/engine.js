/**
 * Itqan Pro Core Engine
 */

let currentCourse = null;
let idx = 0;
let hasAnswered = false;
let currentAudioId = null;
let immersionSelection = [];
let immersionChoices = {}; // Map wordIndex -> optionIndex
let currentImmersionWordIndex = null;
let selectedQuizOpt = null;

const viewport = document.getElementById('game-area');
const prog = document.getElementById('prog-bar');
const btnMain = document.getElementById('btn-action');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const audioPlayer = document.getElementById('audioPlayer');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const courseTitleLabel = document.getElementById('course-title');
const courseModeLabel = document.getElementById('course-mode');

function showPortal() {
    currentCourse = null;
    header.style.display = 'none';
    footer.style.display = 'none';

    viewport.innerHTML = `
        <div class="portal-container">
            <h1 class="portal-title">Itqān Pro</h1>
            <p style="text-align:center; color:var(--text-light); font-size:0.9rem; margin-bottom:30px;">
                Sélectionnez un module pour commencer.
            </p>
            
            <div class="course-card card-intro" style="border-color:#74b9ff; background:#e3f2fd;" onclick="startCourse(NUN_INTRO_DATA)">
                <div class="course-info">
                    <div class="course-name">INTRODUCTION</div>
                    <div class="course-desc">Comprendre le Noun Sakina & Tanwin.</div>
                </div>
                <div class="course-arrow">➜</div>
            </div>

            <div class="course-card card-izhar" onclick="startCourse(IZHAR_DATA)">
                <div class="course-info">
                    <div class="course-name">AL-IZHAR</div>
                    <div class="course-desc">La Clarification (Lettres de la gorge).</div>
                </div>
                <div class="course-arrow">➜</div>
            </div>

            <div class="course-card card-idgham" onclick="startCourse(IDGHAM_GHUNNAH_DATA)">
                <div class="course-info">
                    <div class="course-name">IDGHAM BI-GHUNNAH</div>
                    <div class="course-desc">Assimilation avec nasalisation.</div>
                </div>
                <div class="course-arrow">➜</div>
            </div>

            <div class="course-card card-bila" onclick="startCourse(IDGHAM_BILA_GHUNNAH_DATA)">
                <div class="course-info">
                    <div class="course-name">IDGHAM BILA-GHUNNAH</div>
                    <div class="course-desc">Assimilation sans nasalisation.</div>
                </div>
                <div class="course-arrow">➜</div>
            </div>

            <div class="course-card card-ikhfaa" onclick="startCourse(IKHFAA_DATA)">
                <div class="course-info">
                    <div class="course-name">AL-IKHFAA</div>
                    <div class="course-desc">La Dissimulation (15 lettres).</div>
                </div>
                <div class="course-arrow">➜</div>
            </div>

            <div class="course-card card-iqlab" onclick="startCourse(IQLAB_DATA)">
                <div class="course-info">
                    <div class="course-name">AL-IQLAB</div>
                    <div class="course-desc">Transformation du Noun en Mim.</div>
                </div>
                <div class="course-arrow">➜</div>
            </div>

        <!-- QALQALA -->
        <div class="course-card card-qalqala" onclick="startCourse(QALQALA_DATA)">
            <div class="course-info">
                <div class="course-name">AL-QALQALA</div>
                <div class="course-desc">Le Rebond (Qutb Jad).</div>
            </div>
            <div class="course-arrow">➜</div>
        </div>

        <h2 class="portal-subtitle">Règles du Ra</h2>

        <!-- TAFKHIM -->
        <div class="course-card card-tafkhim" onclick="startCourse(RA_TAFKHIM_DATA)">
            <div class="course-info">
                <div class="course-name">RA TAFKHIM</div>
                <div class="course-desc">La Lourdeur (Emphase).</div>
            </div>
            <div class="course-arrow">➜</div>
        </div>



        <!-- TARQIQ -->
        <div class="course-card card-tarqiq" onclick="startCourse(RA_TARQIQ_DATA)">
            <div class="course-info">
                <div class="course-name">RA TARQIQ</div>
                <div class="course-desc">La Finesse (Douceur).</div>
            </div>
            <div class="course-arrow">➜</div>
        </div>

        <!-- JAWAZ -->
        <div class="course-card card-jawaz" onclick="startCourse(RA_JAWAZ_DATA)">
            <div class="course-info">
                <div class="course-name">RA JAWAZ</div>
                <div class="course-desc">Les Exceptions (Choix).</div>
            </div>
            <div class="course-arrow">➜</div>
        </div>

        <h2 class="portal-subtitle">Ahkam Al-Lam</h2>

        <!-- AHKAM AL-LAM -->
        <div class="course-card card-lam" onclick="startCourse(LAM_DATA)">
             <div class="course-icon">👑</div>
             <div class="course-info">
                 <h3>Ahkam Al-Lam</h3>
                 <p>Nom d'Allah</p>
             </div>
        </div>

        <!-- GHUNNA -->
        <div class="course-card card-ghunna" onclick="startCourse(GHUNNA_DATA)">
             <div class="course-icon">🍯</div>
             <div class="course-info">
                 <h3>Al-Ghunna</h3>
                 <p>Le Chant (2 Temps)</p>
             </div>
        </div>

        <h2 class="portal-subtitle">Ahkam Al-Mad (Prolongations)</h2>

        <!-- MAD TABII -->
        <div class="course-card card-mad" onclick="startCourse(MAD_TABII_DATA)">
             <div class="course-icon">🌊</div>
             <div class="course-info">
                 <h3>1. Mad Tabi'i</h3>
                 <p>Le Naturel (2 Temps)</p>
             </div>
        </div>

        <!-- MAD BADAL -->
        <div class="course-card card-mad" onclick="startCourse(MAD_BADAL_DATA)">
             <div class="course-icon">🔄</div>
             <div class="course-info">
                 <h3>2. Mad Al-Badal</h3>
                 <p>Hamza avant (2 Temps)</p>
             </div>
        </div>

        <!-- MAD EWAD -->
        <div class="course-card card-mad" onclick="startCourse(MAD_EWAD_DATA)">
             <div class="course-icon">🛑</div>
             <div class="course-info">
                 <h3>3. Mad Al-Ewad</h3>
                 <p>L'Arrêt "An" -> "Aa"</p>
             </div>
        </div>

        <!-- MAD SILA -->
        <div class="course-card card-mad" onclick="startCourse(MAD_SILA_DATA)">
             <div class="course-icon">🔗</div>
             <div class="course-info">
                 <h3>4. Mad As-Sila</h3>
                 <p>Petite (2) & Grande (4-5)</p>
             </div>
        </div>

        <!-- MAD MUTTASIL -->
        <div class="course-card card-mad" onclick="startCourse(MAD_MUTTASIL_DATA)">
             <div class="course-icon">🏠</div>
             <div class="course-info">
                 <h3>5. Wajib Muttasil</h3>
                 <p>Connecté (4-5 Temps)</p>
             </div>
        </div>

        <!-- MAD MUNFASIL -->
        <div class="course-card card-mad" onclick="startCourse(MAD_MUNFASIL_DATA)">
             <div class="course-icon">✂️</div>
             <div class="course-info">
                 <h3>6. Jaiz Munfasil</h3>
                 <p>Séparé (4-5 Temps)</p>
             </div>
        </div>

        <!-- MAD ARID -->
        <div class="course-card card-mad" onclick="startCourse(MAD_ARID_DATA)">
             <div class="course-icon">🛑</div>
             <div class="course-info">
                 <h3>7. Arid Lissukun</h3>
                 <p>Arrêt Temporaire (2-4-6)</p>
             </div>
        </div>

        <!-- MAD LIN -->
        <div class="course-card card-mad" onclick="startCourse(MAD_LIN_DATA)">
             <div class="course-icon">🍃</div>
             <div class="course-info">
                 <h3>8. Mad Lin</h3>
                 <p>La Douceur (2-4-6)</p>
             </div>
        </div>

        <!-- MAD LAZIM -->
        <div class="course-card card-mad" onclick="startCourse(MAD_LAZIM_DATA)">
             <div class="course-icon">🌋</div>
             <div class="course-info">
                 <h3>9. Mad Lazim</h3>
                 <p>L'Obligatoire (6 Temps)</p>
             </div>
        </div>

        <!-- MAD REVIEW -->
        <div class="course-card card-mad" style="border-color:#ffeb3b; background:#fffde7;" onclick="startCourse(MAD_REVIEW_DATA)">
             <div class="course-icon">🎓</div>
             <div class="course-info">
                 <h3>RÉVISION MADS</h3>
                 <p>Grand Test Final</p>
             </div>
        </div>

            <h2 class="portal-subtitle">Règles du Mim Sakina</h2>

            <div class="course-card card-idgham" onclick="startCourse(MIM_IDGHAM_DATA)">
                <div class="course-info">
                    <div class="course-name">IDGHAM SHAFAWI</div>
                    <div class="course-desc">Fusion Orale (Mim + Mim).</div>
                </div>
                <div class="course-arrow">➜</div>
            </div>

            <div class="course-card card-ikhfaa" onclick="startCourse(MIM_IKHFAA_DATA)">
                <div class="course-info">
                    <div class="course-name">IKHFAA SHAFAWI</div>
                    <div class="course-desc">Dissimulation Orale (Mim + Ba).</div>
                </div>
                <div class="course-arrow">➜</div>
            </div>

            <div class="course-card card-izhar" onclick="startCourse(MIM_IZHAR_DATA)">
                <div class="course-info">
                    <div class="course-name">IZHAR SHAFAWI</div>
                    <div class="course-desc">Clarté Orale (26 lettres).</div>
                </div>
                <div class="course-arrow">➜</div>
            </div>

            <!-- NUN REVIEW -->
            <div class="course-card card-idgham" style="border-color:#a29bfe; background:#f3f0ff;" onclick="startCourse(NUN_REVIEW_DATA)">
                 <div class="course-icon">💎</div>
                 <div class="course-info">
                     <h3>RÉVISION NOUN</h3>
                     <p>10 Sourates Interactives</p>
                 </div>
            </div>

            <p style="text-align:center; margin-top:40px; color:var(--text-light); font-size:0.8rem; font-weight:500;">
                Version 2.0 • Pro Edition
            </p>
        </div>
    `;
}

function resetStepState() {
    hasAnswered = false;
    immersionSelection = [];
    immersionChoices = {};
    currentImmersionWordIndex = null;
    selectedQuizOpt = null;
}

function startCourse(courseData) {
    currentCourse = courseData;
    idx = 0;
    resetStepState();
    header.style.display = 'block';
    footer.style.display = 'flex';
    document.querySelector('.nav-row').style.display = 'flex';
    courseTitleLabel.innerText = courseData.title;
    courseModeLabel.innerText = courseData.mode;

    // Create Side Panel Container if not exists
    if (!document.getElementById('side-panel')) {
        const sp = document.createElement('div');
        sp.id = 'side-panel';
        sp.className = 'side-panel';
        document.body.appendChild(sp);
    }

    render();
}

function render() {
    // Reset state removed from here to persist state across re-renders (like modals)

    if (!currentCourse) return showPortal();

    if (idx >= currentCourse.steps.length) {
        viewport.innerHTML = `
            <div class="concept-card" style="margin-top:40px; padding:40px 20px;">
                <div style="font-size:3.5rem; margin-bottom:20px; color:var(--secondary); display:flex; justify-content:center;">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <h2 style="color:var(--primary); margin-bottom:10px;">Module Complété</h2>
                <p style="color:var(--text-light); margin-bottom:30px;">Vous avez terminé <b>${currentCourse.title}</b> avec succès.</p>
                <div style="display:flex; flex-direction:column; gap:12px; max-width:200px; margin:0 auto;">
                    <button class="btn-main" onclick="showPortal()">Retour au Menu</button>
                    <button class="btn-nav" style="width:100%; border:none; background:transparent; color:var(--text-light); font-size:0.9rem;" onclick="idx=0;resetStepState();render()">Recommencer</button>
                </div>
            </div>`;
        document.querySelector('.nav-row').style.display = 'none';
        return;
    }

    const step = currentCourse.steps[idx];
    prog.style.width = ((idx / currentCourse.steps.length) * 100) + "%";

    // GESTION BOUTONS NAV
    btnPrev.disabled = (idx === 0);

    const isPassive = ["lesson", "intro", "workshop"].includes(step.type);
    btnNext.disabled = !isPassive;

    // Config du bouton principal
    if (step.type === "immersion") {
        btnMain.innerText = "VALIDER";
        btnMain.onclick = validateImmersion;
        btnMain.disabled = false;
    } else if (step.type === "exam_quiz") {
        btnMain.innerText = "VÉRIFIER";
        btnMain.onclick = validateExam;
        btnMain.disabled = true;
    } else {
        btnMain.innerText = isPassive ? "CONTINUER" : "VÉRIFIER";
        btnMain.onclick = next;
        btnMain.disabled = false;
        if (step.type === "quiz_theory") btnMain.disabled = true;
    }

    let html = `<div class="mentor-box"><div class="mentor-avatar">Prof</div><div class="mentor-bubble">${step.prof}</div></div>`;

    if (step.type === "workshop") {
        html += `<div class="instruction-banner">
            <span><span class="step-n">1</span>Écouter</span> 
            <span><span class="step-n">2</span>Enregistrer</span> 
            <span><span class="step-n">3</span>Comparer</span>
        </div>`;
        step.examples.forEach((ex, i) => {
            html += `
            <div class="audio-card">
                <div class="ac-header"><span class="ac-tag">${ex.type}</span></div>
                <div class="ac-arabic">${ex.ar}</div>
                <div class="ac-controls">
                    <button class="btn-audio btn-listen" id="play-${i}" onclick="playAudio('${ex.url}', ${ex.start || 0}, ${ex.end || 100}, ${i})">Lecture</button>
                    <button class="btn-audio btn-record" id="rec-${i}" onclick="toggleRec(${i})">Enregistrer</button>
                    <button class="btn-audio btn-self" id="self-${i}" onclick="playSelf(${i})">Mon Audio</button>
                </div>
            </div>`;
        });
    }
    else if (step.type === "exam_quiz") {
        html += `<div class="quiz-grid">`;
        step.opts.forEach((o, i) => {
            html += `<div class="q-btn" id="opt-${i}" onclick="selectExamOption(${i})"><span class="q-text">${o.ar}</span></div>`;
        });
        html += `</div>
        <div id="feedback" class="feedback-box">
            <div style="font-size:1rem; margin-bottom:10px; font-weight:700;" id="fb-title"></div>
            <div style="font-size:0.9rem; color:#555;">Analyse :</div>
            <div class="fb-logic">
                <div class="fb-item fb-blue">${step.noun}</div>
                <div class="fb-arrow">+</div>
                <div class="fb-item fb-green">${step.letter}</div>
            </div>
            <div style="margin-top:15px; font-size:0.85rem; color:#666; border-top:1px solid #eee; padding-top:10px;">La lettre <strong>${step.letter}</strong> suit directement le <strong>${step.noun}</strong>.</div>
        </div>`;
    }
    else if (step.type === "quiz_theory") {
        if (step.html) html += step.html;
        html += `<div class="quiz-opts">`;
        if (step.opts) {
            step.opts.forEach((o, i) => {
                html += `<div class="q-btn" id="opt-${i}" onclick="checkTheory(${i})"><span>${o.t}</span></div>`;
            });
        }
        html += `</div><div id="feedback" style="margin-top:20px; padding:20px; border-radius:8px; text-align:center; font-weight:500; display:none; border:1px solid #eee;"></div>`;
    }
    else if (step.type === "immersion") {
        html += `<div class="immersion-instruction">${step.instruction}</div><div class="mushaf-container">`;
        step.words.forEach((w, i) => {
            let classes = 'm-word';
            if (w.ok || w.mads || w.rules) classes += ' m-target';
            if (w.endVerse) classes += ' end-verse';

            // Check if answered
            const uChoice = immersionChoices[i];
            if (uChoice !== undefined) {
                classes += ' answered';
            }

            let symbol = w.endVerse ? '<span class="verse-end">۝</span>' : '';
            html += `<span class="m-word ${classes}" id="m-word-${i}" onclick="toggleImmersion(${i})">${w.t}</span>${symbol} `;
        });
        html += `</div><div id="feedback" class="feedback-box"></div>`;
    }
    else {
        html += step.html || '';
    }

    viewport.innerHTML = html;

    // RENDER SIDE PANEL
    renderSidePanel(step);
}

function renderSidePanel(step) {
    const sp = document.getElementById('side-panel');
    if (!sp) return;

    if (step.type === 'immersion' && step.options) {
        let content = `
            <div class="sp-header">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                     <div>
                        <h4 class="sp-title">Analyse</h4>
                        <div class="sp-subtitle">Cliquez sur un mot coloré</div>
                     </div>
                     <button class="btn-sp-close" onclick="cancelImmersionSelection()">×</button>
                </div>
            </div>
            <div class="sp-content">
        `;

        // OPTIONS OR PROMPT
        if (currentImmersionWordIndex !== null) {
            const word = step.words[currentImmersionWordIndex];
            content += `
                <div style="margin-bottom:15px; font-weight:bold; color:var(--text); border-bottom:1px solid #eee; padding-bottom:10px;">
                    Mot : <span style="font-family:var(--font-ar); font-size:1.6rem; color:var(--primary); margin-left:10px;">${word.t}</span>
                </div>
            `;

            // MULTI-MAD / MULTI-RULE SUPPORT
            const rules = word.rules || word.mads;
            if (rules && Array.isArray(rules)) {
                rules.forEach((rule, mIdx) => {
                    // Initialize complex choice object if needed
                    const currentChoices = immersionChoices[currentImmersionWordIndex] || {};
                    const selectedOpt = currentChoices[mIdx];

                    content += `
                        <div style="margin-bottom:20px;">
                            <div style="font-size:0.9rem; font-weight:600; color:#555; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                                <span style="background:var(--secondary); color:white; width:18px; height:18px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem;">${mIdx + 1}</span>
                                <span class="rule-label" style="font-family:var(--font-ar); font-size:1.1rem; line-height:1;">${rule.label || (mIdx + 1)}</span>
                            </div>
                            <div class="sp-opts" style="gap:6px; margin-bottom:10px;">
                    `;

                    step.options.forEach((opt, k) => {
                        const isActive = (selectedOpt === k) ? 'active' : '';
                        content += `<button class="btn-sp-opt ${isActive}" style="padding:10px;" onclick="selectImmersionOption(${k}, ${mIdx})">${opt}</button>`;
                    });

                    content += `</div></div>`;
                });
            }
            // SINGLE MAD (Legacy)
            else {
                content += `<div class="sp-opts">`;
                step.options.forEach((opt, k) => {
                    const isActive = (immersionChoices[currentImmersionWordIndex] === k) ? 'active' : '';
                    content += `<button class="btn-sp-opt ${isActive}" onclick="selectImmersionOption(${k})">${opt}</button>`;
                });
                content += `</div>`;
            }

        } else {
            content += `<div style="color:#888; font-style:italic; margin-bottom:20px;">Sélectionnez une prolongation dans le texte pour l'identifier.</div>`;
        }

        // ANSWER LOG
        content += `<div class="answer-log"><h5 style="margin:0 0 10px 0;">Vos Réponses</h5>`;

        // Use updated log logic from recent fixes
        content += `<div class="answer-log" style="margin-top:20px; border-top:1px solid #eee; padding-top:10px;">`;
        step.words.forEach((w, i) => {
            // Check if it's a target word (has mads, rules, or ok=true)
            const rules = w.rules || w.mads;
            const isTarget = w.ok || (rules && rules.length > 0);

            if (isTarget) {
                const uChoiceObj = immersionChoices[i]; // Object {0:optIdx, 1:optIdx} or undefined or generic value

                // Display User Choice(s)
                let userChoiceDisplay = "";

                if (rules && rules.length > 0) {
                    // Multi-rule display
                    rules.forEach((r, rIdx) => {
                        let cIdx;
                        if (uChoiceObj && typeof uChoiceObj === 'object') {
                            cIdx = uChoiceObj[rIdx];
                        }
                        const cText = (cIdx !== undefined) ? step.options[cIdx] : '<span style="color:#ccc; font-style:italic;">...</span>';
                        userChoiceDisplay += `<div style="font-size:0.8rem;">${r.label || (rIdx + 1)}: ${cText}</div>`;
                    });
                } else {
                    // Single logic (fallback or ancient)
                    if (step.options) {
                        let cIdx = uChoiceObj;
                        if (typeof uChoiceObj === 'object' && uChoiceObj !== null) {
                            cIdx = uChoiceObj[0]; // fallback if accidentally stored as object
                        }
                        const cText = (cIdx !== undefined) ? step.options[cIdx] : '<span style="color:#ccc; font-style:italic;">...</span>';
                        userChoiceDisplay = cText;
                    }
                }

                content += `
                 <div class="log-item" id="log-word-${i}" style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid #f9f9f9;">
                     <div class="log-word" style="font-family:var(--font-ar); font-size:1.2rem; color:var(--primary);">${w.t}</div>
                     <div class="log-choice" style="font-size:0.9rem; color:#666; text-align:right;">${userChoiceDisplay}</div>
                     <div class="log-status" style="margin-left:8px;">${hasAnswered ? '' : ''}</div>
                 </div>`;
            }
        });
        content += `</div></div>`;
        sp.innerHTML = content;

        // Open/Close logic
        if (currentImmersionWordIndex !== null || immersionSelection.length > 0) {
            sp.classList.add('open');
        } else {
            sp.classList.remove('open');
        }

    } else {
        sp.classList.remove('open');
    }
}

// NAVIGATION
function prev() {
    if (idx > 0) {
        idx--;
        resetStepState();
        render();
    }
}

function next() {
    idx++;
    resetStepState();
    render();
}

// AUDIO
function playAudio(url, start, end, id) {
    const isDefBtn = typeof id === 'string' && id.startsWith('def');

    if (currentAudioId === id) {
        if (audioPlayer.paused) {
            audioPlayer.play();
            if (!isDefBtn) {
                const btn = document.getElementById(`play-${id}`);
                if (btn) { btn.innerText = "Pause"; btn.classList.add('playing'); }
            } else {
                document.getElementById(`play-${id}`).classList.add('playing');
            }
        } else {
            audioPlayer.pause();
            if (!isDefBtn) {
                const btn = document.getElementById(`play-${id}`);
                if (btn) { btn.innerText = "Lecture"; btn.classList.remove('playing'); }
            } else {
                document.getElementById(`play-${id}`).classList.remove('playing');
            }
        }
        return;
    }

    audioPlayer.src = url + ".mp3";
    currentAudioId = id;

    document.querySelectorAll('.btn-listen').forEach(b => { b.classList.remove('playing'); b.innerText = "Lecture"; });
    document.querySelectorAll('.def-audio-btn').forEach(b => b.classList.remove('playing'));

    audioPlayer.play().catch(e => { console.log("Erreur lecture", e); });

    if (!isDefBtn) {
        const btn = document.getElementById(`play-${id}`);
        if (btn) {
            btn.innerText = "Pause";
            btn.classList.add('playing');
        }
    } else {
        document.getElementById(`play-${id}`).classList.add('playing');
    }
}

audioPlayer.onended = () => {
    if (currentAudioId !== null) {
        const isDefBtn = typeof currentAudioId === 'string' && currentAudioId.startsWith('def');
        if (!isDefBtn) {
            const btn = document.getElementById(`play-${currentAudioId}`);
            if (btn) { btn.innerText = "Lecture"; btn.classList.remove('playing'); }
        } else {
            document.getElementById(`play-${currentAudioId}`).classList.remove('playing');
        }
        currentAudioId = null;
    }
};

function toggleRec(id) {
    const btn = document.getElementById(`rec-${id}`);
    const btnSelf = document.getElementById(`self-${id}`);
    if (btn.classList.contains('recording')) {
        btn.classList.remove('recording');
        btn.innerText = "Enregistrer";
        btnSelf.style.display = "flex";
    } else {
        document.querySelectorAll('.btn-record').forEach(b => { b.classList.remove('recording'); b.innerText = "Enregistrer"; });
        btn.classList.add('recording');
        btn.innerText = "Arrêter";
        btnSelf.style.display = "none";
    }
}

function playSelf(id) {
    const btnSelf = document.getElementById(`self-${id}`);
    if (btnSelf.innerText === "Mon Audio") {
        btnSelf.innerText = "Lecture...";
        btnSelf.classList.add('playing');
        setTimeout(() => {
            btnSelf.innerText = "Mon Audio";
            btnSelf.classList.remove('playing');
        }, 2000);
    }
}

// QUIZ EXAM
function selectExamOption(i) {
    if (hasAnswered) return;
    selectedQuizOpt = i;
    document.querySelectorAll('.q-btn').forEach((b, index) => {
        if (index === i) b.classList.add('selected');
        else b.classList.remove('selected');
    });
    btnMain.disabled = false;
}

function validateExam() {
    if (hasAnswered || selectedQuizOpt === null) return;
    hasAnswered = true;
    const step = currentCourse.steps[idx];
    const good = step.opts[selectedQuizOpt].good;
    const fb = document.getElementById('feedback');
    const fbTitle = document.getElementById('fb-title');

    document.querySelectorAll('.q-btn').forEach(b => b.style.pointerEvents = 'none');

    if (good) {
        document.getElementById(`opt-${selectedQuizOpt}`).classList.remove('selected');
        document.getElementById(`opt-${selectedQuizOpt}`).classList.add('correct');
        fb.style.borderColor = '#00b894';
        fbTitle.innerHTML = "Correct";
        fbTitle.style.color = "#008f72";
    } else {
        document.getElementById(`opt-${selectedQuizOpt}`).classList.remove('selected');
        document.getElementById(`opt-${selectedQuizOpt}`).classList.add('wrong');
        step.opts.forEach((o, k) => { if (o.good) document.getElementById(`opt-${k}`).classList.add('correct'); });
        fb.style.borderColor = '#ff7675';
        fbTitle.innerHTML = "Incorrect";
        fbTitle.style.color = "#d63031";
    }

    fb.style.display = 'block';
    btnMain.innerText = "CONTINUER";
    btnMain.onclick = next;
    btnNext.disabled = false;
}

function checkTheory(i) {
    if (hasAnswered) return;
    hasAnswered = true;
    const step = currentCourse.steps[idx];

    // Support both modern (correctIdx) and legacy (good: true)
    let isCorrect = false;
    if (step.correctIdx !== undefined) {
        isCorrect = (i === step.correctIdx);
    } else {
        isCorrect = step.opts[i].good;
    }

    const btnOpt = document.getElementById(`opt-${i}`);
    const fb = document.getElementById('feedback');
    const explanation = step.opts[i].exp || step.exp || "";

    if (isCorrect) {
        btnOpt.classList.add('correct');
        fb.style.background = "#f0fdf4"; fb.style.color = "#008f72"; fb.style.borderColor = "#00b894";
        fb.innerHTML = explanation || "Correct !";
    } else {
        btnOpt.classList.add('wrong');
        fb.style.background = "#fffafa"; fb.style.color = "#d63031"; fb.style.borderColor = "#ff7675";
        fb.innerHTML = explanation || "Incorrect.";

        // Highlight correct answer
        if (step.correctIdx !== undefined) {
            document.getElementById(`opt-${step.correctIdx}`).classList.add('correct');
        } else {
            step.opts.forEach((o, k) => { if (o.good) document.getElementById(`opt-${k}`).classList.add('correct'); });
        }
    }
    fb.style.display = "block";
    btnMain.disabled = false; btnMain.onclick = next; btnNext.disabled = false;
}

// IMMERSION
function toggleImmersion(i) {
    if (hasAnswered) return;
    const step = currentCourse.steps[idx];
    const el = document.getElementById(`m-word-${i}`);

    // If step has options (Interactive Mode)
    if (step.options) {
        if (immersionSelection.includes(i)) {
            // Deselect
            immersionSelection = immersionSelection.filter(idx => idx !== i);
            delete immersionChoices[i];
            el.classList.remove('selected');
            el.removeAttribute('data-choice');
        } else {
            // Open Side Panel (Set Current)
            currentImmersionWordIndex = i;
            render(); // Re-render to update side panel
        }
    } else {
        // Legacy Simple Mode
        if (immersionSelection.includes(i)) {
            immersionSelection = immersionSelection.filter(idx => idx !== i);
            el.classList.remove('selected');
        } else {
            immersionSelection.push(i);
            el.classList.add('selected');
        }
    }
}

function selectImmersionOption(optIdx, mIdx) {
    if (currentImmersionWordIndex === null) return;

    if (mIdx !== undefined && mIdx !== null) {
        if (!immersionChoices[currentImmersionWordIndex] || typeof immersionChoices[currentImmersionWordIndex] !== 'object') {
            immersionChoices[currentImmersionWordIndex] = {};
        }
        immersionChoices[currentImmersionWordIndex][mIdx] = optIdx;
    } else {
        immersionChoices[currentImmersionWordIndex] = optIdx;
    }

    const step = currentCourse.steps[idx];

    const el = document.getElementById(`m-word-${currentImmersionWordIndex}`);
    if (el) {
        el.classList.add('answered');
    }

    renderSidePanel(step);
}

function cancelImmersionSelection() {
    currentImmersionWordIndex = null;
    render();
}

function validateImmersion() {
    if (hasAnswered) return;
    hasAnswered = true;
    const step = currentCourse.steps[idx];
    const fb = document.getElementById('feedback');
    let allFound = true;
    let mistakes = false;
    let explanationHTML = '<div class="immersion-feedback-list">';

    step.words.forEach((w, i) => {
        const el = document.getElementById(`m-word-${i}`);
        el.classList.remove('selected');

        if (w.ok) {
            let itemStatus = "";
            let itemExpl = "";

            if (immersionSelection.includes(i)) {
                let isChoiceCorrect = true;
                let userChoiceText = "";

                const rules = w.rules || w.mads;
                if (rules) {
                    const userObj = immersionChoices[i] || {};
                    const errorParts = [];
                    const correctParts = [];
                    rules.forEach((m, mIdx) => {
                        const uChoiceIdx = userObj[mIdx];
                        if (uChoiceIdx !== m.optIdx) {
                            isChoiceCorrect = false;
                            const uText = step.options[uChoiceIdx] || '?';
                            errorParts.push(`${m.label} : Vous avez dit <b>${uText}</b> (C'est <b>${step.options[m.optIdx]}</b>)`);
                        } else {
                            correctParts.push(`${m.label} : ✅`);
                        }
                    });
                    itemExpl = w.reason ? w.reason : correctParts.join(' | ');
                    if (!isChoiceCorrect) userChoiceText = "<br>" + errorParts.join('<br>');
                }
                else if (step.options) {
                    const userChoiceIdx = immersionChoices[i];
                    if (userChoiceIdx !== w.optIdx) {
                        isChoiceCorrect = false;
                        userChoiceText = ` (Vous avez dit : ${step.options[userChoiceIdx]})`;
                    }
                    itemExpl = w.reason || `${w.noun || 'Mot'} + ${w.letter || 'Lettre'}`;
                }

                if (isChoiceCorrect) {
                    el.classList.add('val-correct');
                    itemStatus = `<span class="if-expl">✅ Correct. ${itemExpl}</span>`;
                } else {
                    el.classList.add('val-wrong');
                    allFound = false;
                    itemStatus = `<span class="if-expl">❌ Incorrect. ${userChoiceText}<br>Solution : ${itemExpl}</span>`;
                }
            }
            else {
                el.classList.add('val-missed');
                allFound = false;
                let missedExpl = "";
                const rules = w.rules || w.mads;
                if (rules) {
                    const parts = rules.map(m => `${m.label} : ${step.options[m.optIdx]}`);
                    missedExpl = parts.join(' | ');
                } else if (step.options) {
                    missedExpl = step.options[w.optIdx];
                }
                const finalExpl = w.reason ? w.reason : missedExpl;
                itemStatus = `<span class="if-expl" style="color:#d63031;">⚠️ Manqué. Solution : <b>${finalExpl}</b></span>`;
            }

            explanationHTML += `<div class="if-item"><span class="if-ar">${w.t}</span>${itemStatus}</div>`;

        } else {
            if (immersionSelection.includes(i)) {
                el.classList.add('val-wrong');
                mistakes = true;
                allFound = false;
                explanationHTML += `<div class="if-item"><span class="if-ar">${w.t}</span><span class="if-expl">❌ Ce n'est pas un Mad ici.</span></div>`;
            }
        }
    });

    explanationHTML += '</div>';

    let titleMsg = "";
    let color = "";
    if (!allFound || mistakes) {
        titleMsg = "RÉSULTATS";
        color = "#e74c3c";
        fb.style.borderColor = "#e74c3c";
        fb.style.background = "#fdf0ef";
    } else {
        titleMsg = "PARFAIT !";
        color = "#27ae60";
        fb.style.borderColor = "#27ae60";
        fb.style.background = "#f0fdf4";
    }

    fb.innerHTML = `<h4 style="color:${color}; margin-top:0;">${titleMsg}</h4>${explanationHTML}`;
    fb.style.display = 'block';

    btnMain.innerText = "CONTINUER";
    btnMain.onclick = next;
    btnNext.disabled = false;
    renderSidePanel(step);
}
