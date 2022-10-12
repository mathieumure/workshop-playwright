const { exec } = require('node:child_process');
const path = require('path');

const versionRegEx = /Version (?<version>.*)/;

exec(`"${path.join('.', 'node_modules', '.bin', 'playwright')}" --version`, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  if (stderr) {
    console.error(stderr);
  }

  const version = versionRegEx.exec(stdout)?.groups.version;
  if (!version) {
    throw new Error('Cannot determine playwright version');
  }
  const [major, minor, patch] = version.split('.');

  if (parseInt(major) !== 1 || parseInt(minor) < 27) {
    throw new Error(`The installed version ${version} of playwright is not supported only 1.27+ is`);
  }

  console.log(`Playwright is correctly installed with the version ${version} !`);
});
