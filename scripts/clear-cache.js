const fs = require('fs');
const path = require('path');

const cacheDir = path.join(__dirname, '..', 'node_modules', '.cache'); // Adjust the folder path if your cache folder is located elsewhere

function clearCache() {
    if (fs.existsSync(cacheDir)) {
        fs.rmSync(cacheDir, { recursive: true, force: true });
        console.log('Cache folder cleared successfully.');
    } else {
        console.log('No cache folder found, skipping.');
    }
}

clearCache();
