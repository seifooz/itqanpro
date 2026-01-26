const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const COURSES_DIR = path.join(__dirname, 'js', 'courses');
const AUDIO_DIR = path.join(__dirname, 'audio');
const BASE_URL = "https://everyayah.com/data/Alafasy_128kbps/";
const EXTENSION = ".mp3";

// Ensure audio directory exists
if (!fs.existsSync(AUDIO_DIR)) {
    fs.mkdirSync(AUDIO_DIR, { recursive: true });
    console.log(`Created directory: ${AUDIO_DIR}`);
}

// Regex to find 6-digit audio IDs (e.g., "001001", '012023')
// Looks for: url: "123456" OR playAudio('123456'
const ID_REGEX = /["'](\d{6})["']/g;

async function main() {
    console.log("🔍 Scanning for audio IDs...");

    const ids = new Set();

    // Read all files in courses directory
    const files = fs.readdirSync(COURSES_DIR);

    for (const file of files) {
        if (!file.endsWith('.js')) continue;

        const content = fs.readFileSync(path.join(COURSES_DIR, file), 'utf-8');
        let match;

        // Reset regex state just in case
        ID_REGEX.lastIndex = 0;

        while ((match = ID_REGEX.exec(content)) !== null) {
            ids.add(match[1]);
        }
    }

    console.log(`✅ Found ${ids.size} unique audio references.`);

    // Download each file
    let successCount = 0;
    let failCount = 0;

    const sortedIds = Array.from(ids).sort();

    for (const id of sortedIds) {
        if (id === '000000') continue; // Skip placeholders if any

        const fileName = id + EXTENSION;
        const localPath = path.join(AUDIO_DIR, fileName);
        const remoteUrl = BASE_URL + fileName;

        if (fs.existsSync(localPath)) {
            console.log(`⏭️  Skipping existing: ${fileName}`);
            continue;
        }

        console.log(`⬇️  Downloading: ${fileName}...`);

        try {
            await downloadFile(remoteUrl, localPath);
            console.log(`✅ Saved: ${fileName}`);
            successCount++;
            // Be nice to the server
            await new Promise(r => setTimeout(r, 200));
        } catch (err) {
            console.error(`❌ Failed: ${fileName} - ${err.message}`);
            failCount++;
        }
    }

    console.log("\n--- Summary ---");
    console.log(`Total Scanned: ${ids.size}`);
    console.log(`Downloaded: ${successCount}`);
    console.log(`Failed: ${failCount}`);
    console.log(`Existing/Skipped: ${ids.size - successCount - failCount}`);
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);

        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                file.close();
                fs.unlink(dest, () => { }); // Delete empty file
                reject(new Error(`Status Code: ${response.statusCode}`));
                return;
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

main();
