const fs = require('fs');
const path = require('path');

const coursesDir = '/Users/main/Documents/itqanpro-spa/js/courses';
const files = fs.readdirSync(coursesDir);

console.log("--- AUDIO MANIFEST (FULL) ---");

const allIds = new Set();

files.forEach(file => {
    if (!file.endsWith('.js')) return;

    const content = fs.readFileSync(path.join(coursesDir, file), 'utf8');

    // Pattern 1: playAudio('ID', ...)
    const regex1 = /playAudio\(['"]([^'"]+)['"]/g;
    let match;
    while ((match = regex1.exec(content)) !== null) {
        allIds.add(match[1]);
        console.log(`FILE: ${file} | TYPE: playAudio | ID: ${match[1]}`);
    }

    // Pattern 2: url: "ID" (Workshop examples)
    const regex2 = /url:\s*['"]([^'"]+)['"]/g;
    while ((match = regex2.exec(content)) !== null) {
        allIds.add(match[1]);
        console.log(`FILE: ${file} | TYPE: workshop | ID: ${match[1]}`);
    }
});

console.log("\n--- UNIQUE IDS ---");
const sorted = [...allIds].sort();
sorted.forEach(id => console.log(id));
console.log(`\nTOTAL UNIQUE: ${sorted.length}`);
