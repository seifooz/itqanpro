/**
 * Script pour télécharger toutes les sourates du Juz Amma depuis l'API AlQuran
 * Exécuter avec: node download_surahs.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Liste des sourates du Juz Amma (87-114)
const surahList = [
    { num: 87, name: "Al-A'la" },
    { num: 88, name: "Al-Ghashiyah" },
    { num: 89, name: "Al-Fajr" },
    { num: 90, name: "Al-Balad" },
    { num: 91, name: "Ash-Shams" },
    { num: 92, name: "Al-Layl" },
    { num: 93, name: "Ad-Duha" },
    { num: 94, name: "Ash-Sharh" },
    { num: 95, name: "At-Tin" },
    { num: 96, name: "Al-Alaq" },
    { num: 97, name: "Al-Qadr" },
    { num: 98, name: "Al-Bayyina" },
    { num: 99, name: "Az-Zalzalah" },
    { num: 100, name: "Al-Adiyat" },
    { num: 101, name: "Al-Qariah" },
    { num: 102, name: "At-Takathur" },
    { num: 103, name: "Al-Asr" },
    { num: 104, name: "Al-Humazah" },
    { num: 105, name: "Al-Fil" },
    { num: 106, name: "Quraysh" },
    { num: 107, name: "Al-Ma'un" },
    { num: 108, name: "Al-Kawthar" },
    { num: 109, name: "Al-Kafirun" },
    { num: 110, name: "An-Nasr" },
    { num: 111, name: "Al-Masad" },
    { num: 112, name: "Al-Ikhlas" },
    { num: 113, name: "Al-Falaq" },
    { num: 114, name: "An-Nas" }
];

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function downloadAllSurahs() {
    console.log('🚀 Début du téléchargement des sourates...\n');

    const allSurahs = [];

    for (const su of surahList) {
        try {
            console.log(`📖 Téléchargement: ${su.num}. ${su.name}...`);

            const url = `https://api.alquran.cloud/v1/surah/${su.num}/editions/quran-uthmani,fr.hamidullah,en.transliteration`;
            const json = await fetchUrl(url);

            if (json.code !== 200 || !json.data) {
                console.log(`   ❌ Erreur API pour sourate ${su.num}`);
                continue;
            }

            // Traiter les ayahs
            const ayahs = json.data[0].ayahs.map((a, i) => {
                let txt = a.text;

                // Supprimer la Basmala du premier verset (sauf sourate 1 et 9)
                if (i === 0 && su.num !== 1 && su.num !== 9) {
                    const targets = ["ٱلرَّحِيمِ", "الرَّحِيمِ", "الرحيم", "ٱلرَّحِيم", "الرَّحِيم"];
                    for (const t of targets) {
                        const idx = txt.indexOf(t);
                        if (idx !== -1 && idx < 60) {
                            txt = txt.substring(idx + t.length).trim();
                            break;
                        }
                    }
                }

                return {
                    num: a.numberInSurah,
                    text: txt,
                    trans: json.data[1].ayahs[i].text,
                    phon: json.data[2].ayahs[i].text
                };
            });

            allSurahs.push({
                num: su.num,
                name: su.name,
                ayahs: ayahs
            });

            console.log(`   ✅ ${ayahs.length} versets téléchargés`);

            // Attendre un peu pour ne pas surcharger l'API
            await sleep(500);

        } catch (e) {
            console.error(`   ❌ Erreur pour sourate ${su.num}:`, e.message);
        }
    }

    // Trier par numéro de sourate
    allSurahs.sort((a, b) => a.num - b.num);

    // Créer le dossier data s'il n'existe pas
    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }

    // Sauvegarder le fichier JSON
    const outputPath = path.join(dataDir, 'juz_amma.json');
    fs.writeFileSync(outputPath, JSON.stringify(allSurahs, null, 2), 'utf8');

    console.log(`\n✨ Terminé! ${allSurahs.length} sourates sauvegardées dans:`);
    console.log(`   📁 ${outputPath}`);

    // Afficher les stats
    let totalAyahs = 0;
    allSurahs.forEach(s => totalAyahs += s.ayahs.length);
    console.log(`\n📊 Statistiques:`);
    console.log(`   - Sourates: ${allSurahs.length}`);
    console.log(`   - Versets: ${totalAyahs}`);
}

downloadAllSurahs().catch(console.error);
