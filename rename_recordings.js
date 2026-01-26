const fs = require('fs');
const path = require('path');

const AUDIO_DIR = path.join(__dirname, 'audio');
const RECORDING_LIST_PATH = path.join(__dirname, 'audio', 'RECORDING_LIST.md');

// Ranges provided by user (Part 2)
// Note: Ra Jawaz is skipped as requested ("ra jawaz on enleve")
const RANGES = [
    { name: 'AHKAM AL-LAM', start: 221, end: 230 },
    { name: '7. MAD ARID LISSUKUN', start: 231, end: 235 },
    { name: '3. MAD AL-EWAD', start: 236, end: 241 },
    { name: '9. MAD LAZIM', start: 242, end: 245 },
    { name: '8. MAD LIN', start: 246, end: 250 },
    { name: '6. MAD JAIZ MUNFASIL', start: 251, end: 253 },
    { name: '5. MAD WAJIB MUTTASIL', start: 254, end: 257 },
    { name: '4. MAD AS-SILA', start: 258, end: 262 },
    { name: '1. MAD TABI', start: 263, end: 266 },
    { name: 'IDGHAM SHAFAWI MASTERCLASS', start: 267, end: 270 },
    { name: 'IKHFAA SHAFAWI MASTERCLASS', start: 271, end: 275 },
    { name: 'IZHAR SHAFAWI MASTERCLASS', start: 276, end: 280 },
    { name: 'Intro Noun Sakina & Tanwin', start: 281, end: 286 },
    { name: 'MASTERCLASS QALQALA', start: 287, end: 292 },
    { name: 'RA - INTRODUCTION', start: 293, end: 294 },
    // Skipped: RA JAWAZ
    { name: 'RA TAFKHIM (MODE LOURD)', start: 295, end: 300 },
    { name: 'RA TARQIQ (MODE FIN)', start: 301, end: 308 }
];

function main() {
    const listContent = fs.readFileSync(RECORDING_LIST_PATH, 'utf-8');
    let totalRenamed = 0;

    RANGES.forEach(range => {
        console.log(`\n📂 Processing ${range.name} (${range.start}-${range.end})...`);

        // Extract expected filenames for this course from the markdown
        const sectionRegex = new RegExp(`## ${range.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*?\\n([\\s\\S]*?)(?=\\n##|$)`);
        const match = listContent.match(sectionRegex);

        if (!match) {
            console.error(`❌ Section not found: ${range.name}`);
            return;
        }

        const tableContent = match[1];
        const fileMatches = [...tableContent.matchAll(/\| `([^`]+)`/g)];

        // Target names come as .mp3 in the list, but we want .m4a
        const expectedFiles = fileMatches.map(m => m[1].replace('.mp3', '.m4a'));

        const rangeCount = range.end - range.start + 1;

        if (expectedFiles.length !== rangeCount) {
            console.warn(`⚠️  Mismatch! Expected ${expectedFiles.length} files from list, but user range has ${rangeCount}.`);
        }

        const limit = Math.min(expectedFiles.length, rangeCount);

        for (let i = 0; i < limit; i++) {
            const inputNum = range.start + i;
            const targetName = expectedFiles[i];

            // Input file format: "Nouvel enregistrement 174.m4a"
            const inputName = `Nouvel enregistrement ${inputNum}.m4a`;
            const inputPath = path.join(AUDIO_DIR, inputName);
            const targetPath = path.join(AUDIO_DIR, targetName);

            if (fs.existsSync(inputPath)) {
                try {
                    fs.renameSync(inputPath, targetPath);
                    console.log(`✅ Renamed: ${inputName} -> ${targetName}`);
                    totalRenamed++;
                } catch (e) {
                    console.error(`❌ Error renaming ${inputName}: ${e.message}`);
                }
            } else {
                console.log(`❓ Source missing: ${inputName}`);
            }
        }
    });

    console.log(`\n🎉 Total renamed: ${totalRenamed}`);
}

main();
