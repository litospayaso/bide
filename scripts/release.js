const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;

const apkSource = path.join(__dirname, '..', 'android', 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk');
const releaseDir = path.join(__dirname, '..', 'releases');
const apkDest = path.join(releaseDir, `bide-${version}.apk`);

if (!fs.existsSync(releaseDir)) {
    fs.mkdirSync(releaseDir, { recursive: true });
}

if (!fs.existsSync(apkSource)) {
    console.error(`ERROR: APK not found at ${apkSource}.`);
    console.error(`Ensure the build was successful before running this script.`);
    process.exit(1);
}

fs.copyFileSync(apkSource, apkDest);
console.log(`Release successfully created: ${apkDest}`);
