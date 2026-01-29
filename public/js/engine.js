/**
 * Itqan Pro Core Engine
 */

// Auto-detect base path for assets (works in subfolders like WordPress installations)
const BASE_PATH = (() => {
    // Try to detect from current script location
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i].src;
        if (src.includes('js/engine.js')) {
            // Extract base path (remove "js/engine.js" from the end)
            return src.replace(/js\/engine\.js.*$/, '');
        }
    }
    // Fallback: use document location
    const path = window.location.pathname;
    const lastSlash = path.lastIndexOf('/');
    return window.location.origin + path.substring(0, lastSlash + 1);
})();

console.log('[ItqanPro] BASE_PATH:', BASE_PATH);

let currentCourse = null;
let idx = 0;
let hasAnswered = false;
let currentAudioId = null;
let activeRecorders = {};
let recordingBlobs = {};
let immersionSelection = [];
let immersionChoices = {};
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

/* --- DATA MAPPING HELPER --- */
function getAllCourses() {
    // Maps ID strings to Global Variables from course files
    return {
        'nun_sakina_intro': typeof NUN_INTRO_DATA !== 'undefined' ? NUN_INTRO_DATA : null,
        'izhar': typeof IZHAR_DATA !== 'undefined' ? IZHAR_DATA : null,
        'idgham_ghunnah': typeof IDGHAM_GHUNNAH_DATA !== 'undefined' ? IDGHAM_GHUNNAH_DATA : null,
        'idgham_bila_ghunnah': typeof IDGHAM_BILA_GHUNNAH_DATA !== 'undefined' ? IDGHAM_BILA_GHUNNAH_DATA : null,
        'iqlab': typeof IQLAB_DATA !== 'undefined' ? IQLAB_DATA : null,
        'ikhfaa': typeof IKHFAA_DATA !== 'undefined' ? IKHFAA_DATA : null,
        'qalqala': typeof QALQALA_DATA !== 'undefined' ? QALQALA_DATA : null,
        'ra_tafkhim': typeof RA_TAFKHIM_DATA !== 'undefined' ? RA_TAFKHIM_DATA : null,
        'ra_tarqiq': typeof RA_TARQIQ_DATA !== 'undefined' ? RA_TARQIQ_DATA : null,
        'ra_jawaz': typeof RA_JAWAZ_DATA !== 'undefined' ? RA_JAWAZ_DATA : null,
        'lam': typeof LAM_DATA !== 'undefined' ? LAM_DATA : null,
        'ghunna': typeof GHUNNA_DATA !== 'undefined' ? GHUNNA_DATA : null,
        'ra_intro': typeof RA_INTRO_DATA !== 'undefined' ? RA_INTRO_DATA : null,
        'mad_intro': typeof MAD_INTRO_DATA !== 'undefined' ? MAD_INTRO_DATA : null,
        'mad_tabii': typeof MAD_TABII_DATA !== 'undefined' ? MAD_TABII_DATA : null,
        'mad_badal': typeof MAD_BADAL_DATA !== 'undefined' ? MAD_BADAL_DATA : null,
        'mad_ewad': typeof MAD_EWAD_DATA !== 'undefined' ? MAD_EWAD_DATA : null,
        'mad_sila': typeof MAD_SILA_DATA !== 'undefined' ? MAD_SILA_DATA : null,
        'mad_muttasil': typeof MAD_MUTTASIL_DATA !== 'undefined' ? MAD_MUTTASIL_DATA : null,
        'mad_munfasil': typeof MAD_MUNFASIL_DATA !== 'undefined' ? MAD_MUNFASIL_DATA : null,
        'mad_arid': typeof MAD_ARID_DATA !== 'undefined' ? MAD_ARID_DATA : null,
        'mad_lin': typeof MAD_LIN_DATA !== 'undefined' ? MAD_LIN_DATA : null,
        'mad_lazim': typeof MAD_LAZIM_DATA !== 'undefined' ? MAD_LAZIM_DATA : null,
        'mad_review': typeof MAD_REVIEW_DATA !== 'undefined' ? MAD_REVIEW_DATA : null,
        'mim_idgham': typeof MIM_IDGHAM_DATA !== 'undefined' ? MIM_IDGHAM_DATA : null,
        'mim_ikhfaa': typeof MIM_IKHFAA_DATA !== 'undefined' ? MIM_IKHFAA_DATA : null,
        'mim_izhar': typeof MIM_IZHAR_DATA !== 'undefined' ? MIM_IZHAR_DATA : null,
        'nun_review': typeof NUN_REVIEW_DATA !== 'undefined' ? NUN_REVIEW_DATA : null,
        'mim_review': typeof MIM_REVIEW_DATA !== 'undefined' ? MIM_REVIEW_DATA : null,
        'ra_lam_review': typeof RA_LAM_REVIEW_DATA !== 'undefined' ? RA_LAM_REVIEW_DATA : null
    };
}

// HELPER FOR COURSE METADATA (Dark Reference Style)
function getCourseMeta(id, title) {
    const defaultMeta = {
        tag: "Module",
        iconColor: "icon-yellow",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
        letter: "A"
    };

    if (!title) return defaultMeta;

    let meta = { ...defaultMeta };

    if (id === 'nun_sakina_intro') {
        meta.tag = "Essentiel";
        meta.iconColor = "icon-gold";
        // Arabic Noon letter stylized
        meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="url(#goldGrad)" opacity="0.2"/><text x="12" y="17" font-family="'Scheherazade New', serif" font-size="16" fill="currentColor" text-anchor="middle">ن</text><defs><linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FFD700"/><stop offset="100%" style="stop-color:#FFA500"/></linearGradient></defs></svg>`;
        meta.letter = "ن";
    }
    else if (id === 'izhar') {
        meta.tag = "6 Lettres";
        meta.iconColor = "icon-green";
        // Eye with clarity symbol
        meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5C5.5 5 2 12 2 12s3.5 7 10 7 10-7 10-7-3.5-7-10-7z"/><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 2v2M12 20v2" stroke-dasharray="2 2"/></svg>`;
        meta.letter = "ظ";
    }
    else if (id.includes('idgham')) {
        meta.tag = id.includes('bila') ? "2 Lettres" : "4 Lettres";
        meta.iconColor = "icon-blue";
        // Merge/Fusion arrows
        meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 4l5 5-5 5"/><path d="M17 4l-5 5 5 5"/><circle cx="12" cy="17" r="3" fill="currentColor" opacity="0.3"/></svg>`;
        meta.letter = "غ";
    }
    else if (id.includes('iqlab')) {
        meta.tag = "1 Lettre";
        meta.iconColor = "icon-purple";
        // Transformation arrows
        meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12h16"/><path d="M8 8l-4 4 4 4"/><path d="M16 8l4 4-4 4"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>`;
        meta.letter = "ب";
    }
    else if (id.includes('ikhfa')) {
        meta.tag = "15 Lettres";
        meta.iconColor = "icon-purple";
        // Hidden/veiled symbol
        meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h18" stroke-dasharray="3 3"/><circle cx="12" cy="12" r="6" opacity="0.3" fill="currentColor"/><circle cx="12" cy="12" r="3"/></svg>`;
        meta.letter = "خ";
    }
    else if (id.includes('mad')) {
        meta.tag = "Prolongation";
        meta.iconColor = "icon-gold";
        // Wave/elongation
        meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/><path d="M2 16c2-3 4-3 6 0s4 3 6 0 4-3 6 0" opacity="0.5"/></svg>`;
        meta.letter = "ا";
        if (id === 'mad_intro') {
            meta.tag = "Concept";
            meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>`;
        }
        if (id.includes('review')) {
            meta.tag = "Bilan";
            meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>`;
        }
    }
    else if (id.includes('qalqala')) {
        meta.tag = "5 Lettres";
        meta.iconColor = "icon-yellow";
        // Vibration/echo
        meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6" opacity="0.5"/><circle cx="12" cy="12" r="9" opacity="0.25"/></svg>`;
        meta.letter = "ق";
    }
    else if (id.includes('ghunna')) {
        meta.tag = "Nasalisation";
        meta.iconColor = "icon-blue";
        // Sound wave
        meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12h2c1 -4 2 4 3 0s2 -4 3 0 2 4 3 0 2 -4 3 0h2"/><path d="M12 6v2M12 16v2" opacity="0.5"/></svg>`;
        meta.letter = "غ";
    }
    else if (id.includes('ra') || id.includes('lam')) {
        meta.tag = "Lettre Spéciale";
        meta.iconColor = "icon-green";
        // Letter focus
        meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M2 12h4M18 12h4M12 2v4M12 18v4"/></svg>`;
        meta.letter = id.includes('lam') ? "ل" : "ر";
    }
    else if (id.includes('mim')) {
        meta.tag = "Règle Mim";
        meta.iconColor = "icon-blue";
        // Mim letter
        meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/><text x="12" y="17" font-family="'Scheherazade New', serif" font-size="16" fill="currentColor" text-anchor="middle">م</text></svg>`;
        meta.letter = "م";
    }
    else if (id.includes('review')) {
        meta.tag = "Examen";
        meta.iconColor = "icon-purple";
        meta.icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4"/><rect x="4" y="4" width="16" height="16" rx="2"/></svg>`;
        meta.letter = "✓";
    }

    return meta;
}

function showPortal() {
    currentCourse = null;
    header.style.display = 'none';
    footer.style.display = 'none';

    const courses = getAllCourses();

    // NEW ORDER
    const sections = [
        {
            title: "Ahkam Noun Sakina & Tanween",
            subtitle: "Règles de base",
            ids: ['nun_sakina_intro', 'izhar', 'idgham_ghunnah', 'idgham_bila_ghunnah', 'iqlab', 'ikhfaa']
        },
        {
            title: "Ahkam Mim Sakina",
            subtitle: "Règles du Mim",
            ids: ['mim_idgham', 'mim_ikhfaa', 'mim_izhar']
        },
        {
            title: "Al-Moudoud (Prolongations)",
            subtitle: "Types de Mad",
            ids: ['mad_intro', 'mad_tabii', 'mad_badal', 'mad_ewad', 'mad_sila', 'mad_muttasil', 'mad_munfasil', 'mad_arid', 'mad_lin', 'mad_lazim']
        },
        {
            title: "Ahkam Ra & Lam",
            subtitle: "Lettres Spéciales",
            ids: ['ra_intro', 'ra_tafkhim', 'ra_tarqiq', 'ra_jawaz', 'lam']
        },
        {
            title: "Autres Règles",
            subtitle: "Compléments",
            ids: ['qalqala', 'ghunna']
        }
    ];

    let sectionsHTML = '';
    // Build Navigation Dropdown Options
    let navOptions = '<option value="">-- Choisir un cours --</option>';

    sections.forEach(sec => {
        let cards = '';
        navOptions += `<optgroup label="${sec.title}">`;

        sec.ids.forEach(id => {
            const c = courses[id];
            if (c) {
                const meta = getCourseMeta(id, c.title);
                navOptions += `<option value="${id}">${c.title}</option>`;
                cards += `
                <div class="dark-card" data-letter="${meta.letter}" onclick="startCourse('${id}')">
                    <div class="dc-icon-box ${meta.iconColor}">
                        ${meta.icon}
                    </div>
                    <div class="dc-content">
                        <h3 class="dc-title">${c.title}</h3>
                        <p class="dc-desc">${c.desc || 'Apprenez les règles de récitation.'}</p>
                    </div>
                    <div class="dc-footer">
                        <span class="dc-tag">${meta.tag}</span>
                        <div class="dc-link">Accéder <span>➜</span></div>
                    </div>
                </div>`;
            }
        });
        navOptions += `</optgroup>`;

        if (cards) {
            sectionsHTML += `
            <div class="section-header">
                <h2 class="section-title">${sec.title}</h2>
                <span class="section-subtitle">${sec.subtitle}</span>
            </div>
            <div class="dark-grid">
                ${cards}
            </div>`;
        }
    });

    viewport.innerHTML = `
    <div class="dashboard-shell portal-dark-mode">
        <!-- GLASS HERO SECTION -->
        <div class="portal-hero-glass">
            <a href="home.html" class="home-link-btn" title="Retour à l'accueil">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Accueil</span>
            </a>
            <div class="hero-brand">
                <span class="brand-itqan">Itqān</span>
                <span class="brand-pro">Pro</span>
            </div>
            <h1 class="hero-title">Maîtrisez le <span class="gold-text">Tajweed</span></h1>
            <p class="hero-subtitle">Bienvenue dans votre espace d'apprentissage interactif. Progressez étape par étape vers l'excellence.</p>
            <div class="hero-badge">
                <span class="badge-icon">📜</span>
                <span>Selon Riwayat Hafs 'an Asim</span>
            </div>
            <div class="hero-nav">
                <select class="nav-select-glass" onchange="if(this.value) startCourse(this.value)">
                    ${navOptions}
                </select>
            </div>
        </div>

        <div class="main-container" style="padding-top:30px;">
            ${sectionsHTML}
            
            <div class="portal-footer">
                © 2024 Itqān Pro • Excellence Tajweed
            </div>
        </div>
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

function startCourse(dataOrId) {
    let courseData = dataOrId;

    // Handle string ID
    if (typeof dataOrId === 'string') {
        const courses = getAllCourses();
        courseData = courses[dataOrId];
        if (!courseData) {
            console.error("Course not found:", dataOrId);
            return;
        }
    }

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

    // Fix: Scroll to top of viewport on step change
    const vp = document.getElementById('game-area');
    if (vp) vp.scrollTop = 0;

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
            // Check if example has verse (new format) or just word (legacy)
            let arabicDisplay = '';
            if (ex.verse) {
                // New format: display verse with target word in red
                arabicDisplay = `
                    <div class="ac-verse" style="font-size:1.4rem; color:#333; margin-bottom:8px; line-height:1.8;">${ex.verse} <span style="color:#d32f2f; font-weight:bold;">${ex.ar}</span></div>
                    ${ex.exp ? `<div class="ac-exp" style="font-size:0.85rem; color:#006064; background:#e0f7fa; padding:8px 12px; border-radius:6px; margin-top:8px;">${ex.exp}</div>` : ''}
                `;
            } else {
                // Legacy format: just the word
                arabicDisplay = `<div class="ac-arabic">${ex.ar}</div>`;
            }

            html += `
            <div class="audio-card">
                <div class="ac-header"><span class="ac-tag">${ex.type}</span></div>
                ${arabicDisplay}
                <div class="ac-controls">
                    <button class="btn-audio btn-listen" id="play-${i}" onclick="playAudio('${ex.url}', ${ex.start || 0}, ${ex.end || 100}, ${i})">Lecture</button>
                    <button class="btn-audio btn-record" id="rec-${i}" onclick="toggleRec(${i})">Enregistrer</button>
                    <div style="display:flex; gap:5px; align-items:center;">
                         <button class="btn-audio btn-self" id="self-${i}" onclick="playSelf(${i})">Mon Audio</button>
                         <button class="btn-audio btn-delete" id="del-${i}" onclick="deleteRec(${i})" style="display:none; background:#ffebee; color:#c0392b; border-color:#ffcdd2; padding:5px 12px; min-width:auto;" title="Supprimer">🗑️</button>
                    </div>
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

        // Support for multiple questions (New Format)
        if (step.questions && step.questions.length > 0) {
            html += `<div class="quiz-grid">`;
            step.questions.forEach((q, qIdx) => {
                html += `
                <div class="theory-q-block" id="tq-block-${qIdx}" style="background:white; border:1px solid #eee; padding:20px; border-radius:12px; margin-bottom:15px;">
                    <div style="font-weight:700; color:var(--primary); margin-bottom:15px;">${q.q}</div>
                    <div class="tq-opts">`;
                q.opts.forEach((opt, oIdx) => {
                    html += `<div class="q-btn-small" id="tq-${qIdx}-${oIdx}" onclick="checkTheoryMulti(${qIdx}, ${oIdx})" style="padding:12px; border:1px solid #eee; border-radius:6px; margin-bottom:8px; cursor:pointer;">${opt}</div>`;
                });
                html += `</div><div class="tq-feedback" id="tq-fb-${qIdx}" style="margin-top:10px; font-size:0.9rem; font-weight:600; display:none;"></div></div>`;
            });
            html += `</div>`;
        }
        // Support for single question (Legacy Format)
        else {
            html += `<div class="quiz-opts">`;
            if (step.opts) {
                step.opts.forEach((o, i) => {
                    html += `<div class="q-btn" id="opt-${i}" onclick="checkTheory(${i})"><span>${o.t}</span></div>`;
                });
            }
            html += `</div><div id="feedback" style="margin-top:20px; padding:20px; border-radius:8px; text-align:center; font-weight:500; display:none; border:1px solid #eee;"></div>`;
        }
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
            if (immersionSelection.includes(i)) {
                classes += ' selected';
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

// AUDIO
function playAudio(url, start, end, id) {
    const isDefBtn = typeof id === 'string' && id.startsWith('def');

    if (currentAudioId === id) {
        if (audioPlayer.paused) {
            audioPlayer.play();
            if (!isDefBtn) {
                const btn = document.getElementById(`play-${id}`);
                if (btn) {
                    if (btn.children.length === 0) btn.innerText = "Pause";
                    btn.classList.add('playing');
                }
            } else {
                document.getElementById(`play-${id}`).classList.add('playing');
            }
        } else {
            audioPlayer.pause();
            if (!isDefBtn) {
                const btn = document.getElementById(`play-${id}`);
                if (btn) {
                    if (btn.children.length === 0) btn.innerText = "Lecture";
                    btn.classList.remove('playing');
                }
            } else {
                document.getElementById(`play-${id}`).classList.remove('playing');
            }
        }
        return;
    }

    const audioUrl = BASE_PATH + "audio/" + url + ".mp3";
    console.log('[ItqanPro] Loading audio:', audioUrl);
    audioPlayer.src = audioUrl;
    audioPlayer.onerror = (e) => {
        const err = audioPlayer.error;
        const currentSrc = audioPlayer.src;
        console.error("Audio Error:", err, "URL:", currentSrc);

        // FALLBACK: If MP3 fails, try M4A
        if (currentSrc.endsWith('.mp3')) {
            console.log("MP3 failed, trying M4A fallback...");
            audioPlayer.src = currentSrc.replace('.mp3', '.m4a');
            audioPlayer.play().catch(err => console.log("Auto-play fallback error", err));
            return;
        }

        // Code 4 = MEDIA_ERR_SRC_NOT_SUPPORTED (often due to file:// blocking or missing file)
        if (err && err.code === 4) {
            if (window.location.protocol === 'file:') {
                alert("⚠️ Erreur Audio : Impossible de lire le fichier.\n\nSi vous ouvrez ce fichier en local (file://), les navigateurs bloquent souvent l'audio par sécurité.\n\nSolution : Utilisez un serveur local (ex: 'Live Server' sur VSCode) ou hébergez le site.");
            } else {
                alert("⚠️ Erreur Audio : Fichier introuvable.\n\nURL essayée : " + audioPlayer.src + "\n\nVérifiez que le fichier audio existe sur le serveur.");
            }
        } else {
            console.log("Erreur lecture audio (Code " + (err ? err.code : 'N/A') + ")");
        }
    };
    currentAudioId = id;

    // Reset UI for others
    document.querySelectorAll('.btn-listen').forEach(b => {
        b.classList.remove('playing');
        if (b.children.length === 0) b.innerText = "Lecture";
    });
    document.querySelectorAll('.def-audio-btn').forEach(b => b.classList.remove('playing'));

    // Play from beginning (User will provide cut files)
    audioPlayer.currentTime = 0;

    audioPlayer.play().catch(e => { console.log("Erreur lecture", e); });

    if (!isDefBtn) {
        const btn = document.getElementById(`play-${id}`);
        if (btn) {
            if (btn.children.length === 0) btn.innerText = "Pause";
            btn.classList.add('playing');
        }
    } else {
        document.getElementById(`play-${id}`).classList.add('playing');
    }
}

function resetAudioUI(id) {
    const isDefBtn = typeof id === 'string' && id.startsWith('def');
    if (!isDefBtn) {
        const btn = document.getElementById(`play-${id}`);
        if (btn) {
            if (btn.children.length === 0) btn.innerText = "Lecture";
            btn.classList.remove('playing');
        }
    } else {
        document.getElementById(`play-${id}`).classList.remove('playing');
    }
}

audioPlayer.onended = () => {
    if (currentAudioId !== null) {
        resetAudioUI(currentAudioId);
        currentAudioId = null;
    }
};

async function toggleRec(id) {
    const btn = document.getElementById(`rec-${id}`);
    const btnSelf = document.getElementById(`self-${id}`);

    if (btn.classList.contains('recording')) {
        // STOP RECORDING
        if (activeRecorders[id]) {
            activeRecorders[id].stop();
            // Note: onstop callback in start block will handle storage
        }
        btn.classList.remove('recording');
        btn.innerText = "Enregistrer";
        // btnSelf.style.display = "flex"; // Ensure visible
        return;
    }

    // START RECORDING
    // Optional: Stop other recordings?
    // document.querySelectorAll('.btn-record').forEach(b => { if(b !== btn && b.classList.contains('recording')) b.click(); });

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        activeRecorders[id] = mediaRecorder;

        mediaRecorder.ondataavailable = event => {
            if (event.data.size > 0) audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(audioChunks, { type: 'audio/mp3' });
            recordingBlobs[id] = URL.createObjectURL(blob);

            // Clean up stream tracks
            stream.getTracks().forEach(track => track.stop());
            delete activeRecorders[id];

            // UI Update
            btnSelf.style.display = "inline-flex"; // FORCE DISPLAY
            btnSelf.innerText = "Mon Audio (Ecouter)";
            btnSelf.classList.add('has-record');

            // Show Delete Button
            const btnDel = document.getElementById(`del-${id}`);
            if (btnDel) btnDel.style.display = "inline-flex";
        };

        mediaRecorder.start();
        btn.classList.add('recording');
        btn.innerText = "Arrêter";
        btnSelf.style.display = "none"; // Hide play button while recording
        const btnDel = document.getElementById(`del-${id}`);
        if (btnDel) btnDel.style.display = "none";

    } catch (e) {
        console.error("Recording error:", e);
        alert("Impossible d'accéder au microphone. Vérifiez les permissions.");
    }
}

function deleteRec(id) {
    if (confirm("Supprimer votre enregistrement ?")) {
        // Stop audio if playing
        const btnSelf = document.getElementById(`self-${id}`);
        if (btnSelf.classList.contains('playing')) {
            // Basic stop
            btnSelf.classList.remove('playing');
            btnSelf.innerText = "Mon Audio (Ecouter)";
        }

        // Revoke URL to free memory
        if (recordingBlobs[id]) {
            URL.revokeObjectURL(recordingBlobs[id]);
            delete recordingBlobs[id];
        }

        // Reset UI
        btnSelf.style.display = "none";
        btnSelf.classList.remove('has-record');

        const btnDel = document.getElementById(`del-${id}`);
        if (btnDel) btnDel.style.display = "none";
    }
}

function playSelf(id) {
    const btnSelf = document.getElementById(`self-${id}`);

    if (!recordingBlobs[id]) {
        alert("Veuillez d'abord vous enregistrer !");
        return;
    }

    if (btnSelf.classList.contains('playing')) {
        // Stop (not fully implemented due to Audio object scope, but we can prevent double play)
        return;
    }

    const audio = new Audio(recordingBlobs[id]);
    btnSelf.innerText = "Lecture...";
    btnSelf.classList.add('playing');

    audio.play().catch(e => {
        alert("Erreur de lecture: " + e.message);
        btnSelf.classList.remove('playing');
        btnSelf.innerText = "Mon Audio (Ecouter)";
    });

    audio.onended = () => {
        btnSelf.innerText = "Mon Audio (Ecouter)";
        btnSelf.classList.remove('playing');
    };
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

    // Add word to selection array if not already present
    if (!immersionSelection.includes(currentImmersionWordIndex)) {
        immersionSelection.push(currentImmersionWordIndex);
    }

    const el = document.getElementById(`m-word-${currentImmersionWordIndex}`);
    if (el) {
        el.classList.add('answered');
        el.classList.add('selected');
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
                const targetName = step.targetName || (() => {
                    const cid = currentCourse.id || "";
                    if (cid.includes("izhar")) return "un Izhar";
                    if (cid.includes("idgham")) return "un Idgham";
                    if (cid.includes("ikhfa")) return "un Ikhfa";
                    if (cid.includes("iqlab")) return "un Iqlab";
                    if (cid.includes("qalqala")) return "une Qalqala";
                    if (cid.includes("ghunna")) return "une Ghunna";
                    if (cid.includes("ra_")) return "une Règle du Ra";
                    if (cid.includes("lam")) return "une Règle du Lam";
                    if (cid.includes("mim_")) return "une Règle du Mim";
                    if (cid.includes("mad")) return "un Mad";
                    return "la règle recherchée";
                })();
                explanationHTML += `<div class="if-item"><span class="if-ar">${w.t}</span><span class="if-expl">❌ Ce n'est pas ${targetName} ici.</span></div>`;
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

function checkTheoryMulti(qIdx, oIdx) {
    // Prevent multiple clicks on same question
    const qBlock = document.getElementById(`tq-block-${qIdx}`);
    if (qBlock.classList.contains('answered')) return;

    qBlock.classList.add('answered');
    const step = currentCourse.steps[idx];
    const question = step.questions[qIdx];

    const isCorrect = (oIdx === question.good);
    const feedbackEl = document.getElementById(`tq-fb-${qIdx}`);
    const selectedBtn = document.getElementById(`tq-${qIdx}-${oIdx}`);

    if (isCorrect) {
        selectedBtn.style.backgroundColor = '#d4edda';
        selectedBtn.style.borderColor = '#c3e6cb';
        selectedBtn.style.color = '#155724';
        selectedBtn.innerHTML += ' ✅';
        feedbackEl.innerHTML = '<span style="color:#155724;">Correct !</span>';
    } else {
        selectedBtn.style.backgroundColor = '#f8d7da';
        selectedBtn.style.borderColor = '#f5c6cb';
        selectedBtn.style.color = '#721c24';
        selectedBtn.innerHTML += ' ❌';

        // Show correct
        const correctBtn = document.getElementById(`tq-${qIdx}-${question.good}`);
        correctBtn.style.backgroundColor = '#d4edda';
        correctBtn.style.borderColor = '#c3e6cb';

        feedbackEl.innerHTML = `<span style="color:#721c24;">Non, la bonne réponse était : ${question.opts[question.good]}</span>`;
    }
    feedbackEl.style.display = 'block';

    // Verify if all questions are answered to enable Next
    const totalQ = step.questions.length;
    const totalAns = document.querySelectorAll('.theory-q-block.answered').length;

    if (totalAns === totalQ) {
        btnMain.disabled = false;
        btnMain.innerText = "CONTINUER";
        btnMain.onclick = next;
        btnNext.disabled = false;
    }
}
