const MAD_LIN_DATA = {
    id: "mad_lin",
    title: "8. MAD LIN",
    type: "Ahkam Al-Mad",
    steps: [
        {
            type: "lesson",
            prof: "Le <strong>Mad Lin</strong> (Douceur) est très simple. Il concerne deux lettres spécifiques.",
            html: `
            <div class="concept-card">
                <h3>Définition</h3>
                <p>C'est lorsqu'on s'arrête sur une lettre qui est précédée d'une lettre de <strong>Lin</strong>.</p>
                <div class="tip-box">
                    <strong>Les Lettres de Lin :</strong><br>
                    Le <strong>Waw ( و )</strong> et le <strong>Ya ( ي )</strong> porteurs d'un <strong>Sukun</strong> et précédés d'une <strong>Fatha</strong>.
                </div>
                <div style="font-size:2rem; margin:15px; color:#006064;">
                    ـَوْ / ـَيْ
                </div>
            </div>`
        },
        {
            type: "workshop",
            prof: "Voici la différence entre un arrêt normal et un Mad Lin. Écoutez la douceur.",
            examples: [
                { type: "Normal", ar: "بَيْتٌ", url: "lin_base" },
                { type: "Arrêt (Mad Lin)", ar: "بَيْتْ", url: "lin_stop" },
                { type: "Normal", ar: "خَوْفٌ", url: "lin_kh_base" },
                { type: "Arrêt (Mad Lin)", ar: "خَوْفْ", url: "lin_kh_stop" }
            ]
        },
        // IMMERSION SURAH AL-MA'UN
        {
            type: "immersion",
            prof: "🔍 <strong>Immersion : Surah Al-Ma'un (107)</strong><br>Le Mad Lin n'apparaît qu'à l'arrêt.",
            instruction: "Cliquez sur les Mads Lin (si on s'arrête).",
            surah: 107,
            options: ["Mad Lin (2-4-6)", "Mad Arid (2-4-6)", "Mad Tabi'i (2)"],
            words: [
                { t: "أَرَءَيْتَ", ok: true, optIdx: 0, reason: "Mad Lin (Ya Sukun après Fatha)." },
                { t: "ٱلَّذِى", ok: true, optIdx: 2, reason: "Mad Tabi'i." },
                { t: "يُكَذِّبُ", ok: false },
                { t: "بِٱلدِّينِ", ok: true, optIdx: 1, reason: "Mad Arid Lissukun." }, { t: "١", endVerse: true },
                { t: "فَذَٰلِكَ", ok: true, optIdx: 2, reason: "Mad Tabi'i." },
                { t: "ٱلَّذِى", ok: true, optIdx: 2, reason: "Mad Tabi'i." },
                { t: "يَدُعُّ", ok: false },
                { t: "ٱلْيَتِيمَ", ok: true, optIdx: 1, reason: "Mad Arid Lissukun." }, { t: "٢", endVerse: true },
                { t: "وَلَا", ok: true, optIdx: 2, reason: "Mad Tabi'i." },
                { t: "يَحُضُّ", ok: false }, { t: "عَلَىٰ", ok: false },
                { t: "طَعَامِ", ok: true, optIdx: 2, reason: "Mad Tabi'i." },
                { t: "ٱلْمِسْكِينِ", ok: true, optIdx: 1, reason: "Mad Arid." }, { t: "٣", endVerse: true },
                { t: "فَوَيْلٌ", ok: true, optIdx: 0, reason: "Mad Lin (Waw Sukun après Fatha)." },
                { t: "لِّلْمُصَلِّينَ", ok: true, optIdx: 1, reason: "Mad Arid." }, { t: "٤", endVerse: true },
                { t: "ٱلَّذِينَ", ok: true, optIdx: 2, reason: "Mad Tabi'i." },
                { t: "هُمْ", ok: false }, { t: "عَن", ok: false },
                { t: "صَلَاتِهِمْ", ok: true, optIdx: 2, reason: "Mad Tabi'i." },
                { t: "سَاهُونَ", ok: true, optIdx: 1, reason: "Mad Arid." }, { t: "٥", endVerse: true },
                { t: "ٱلَّذِينَ", ok: true, optIdx: 2, reason: "Mad Tabi'i." },
                { t: "هُمْ", ok: false },
                { t: "يُرَآءُونَ", ok: true, optIdx: 1, reason: "Mad Arid (et Muttasil)." }, { t: "٦", endVerse: true },
                { t: "وَيَمْنَعُونَ", ok: true, optIdx: 2, reason: "Mad Tabi'i." },
                { t: "ٱلْمَاعُونَ", ok: true, optIdx: 1, reason: "Mad Arid." }, { t: "٧", endVerse: true }
            ]
        },
        {
            type: "quiz_theory",
            prof: "Le Mad Lin est-il obligatoire ?",
            opts: [{ t: "Oui, toujours 6 temps", good: false }, { t: "Non, c'est permissif (2-4-6)", good: true }],
            exp: "Comme le Mad Arid, on a le choix de la longueur (2, 4 ou 6 temps) à l'arrêt."
        }
    ]
};
