const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
console.log(`APK successfully copied to: ${apkDest}`);

console.log(`Creating GitHub release v${version}...`);
try {
    // This will create a release matching the version and upload the APK as an asset
    execSync(`gh release create v${version} "${apkDest}" --title "Release v${version}" --generate-notes`, { stdio: 'inherit' });
    console.log(`GitHub release v${version} created successfully!`);
    console.log(`Release URL: https://github.com/litospayaso/bide/releases/tag/v${version}`);
} catch (error) {
    console.error(`Failed to create GitHub release:`, error.message);
    process.exit(1);
}
