import {exec} from "node:child_process";
import { access } from 'fs/promises'

import path from "path";

const versionRegEx = /Version (?<version>.*)/;
const installLocationRegEx = /Install location:\s+(?<installationPath>.*)\n/

const runPlaywrightCommand = (command) => new Promise((resolve, reject) => {
  exec(`"${path.join('.', 'node_modules', '.bin', 'playwright')}" ${command}`, (error, stdout, stderr) => {
    if (error) {
      return reject(error);
    }
    if (stderr) {
      return reject(stderr);
    }

    resolve(stdout)
  });
});

const checkPlaywrightVersion = async () => {
  const playwrightVersion = await runPlaywrightCommand('--version');

  const version = versionRegEx.exec(playwrightVersion)?.groups.version;
  if (!version) {
    throw new Error('Cannot determine playwright version');
  }
  const [major, minor, patch] = version.split('.');

  if (parseInt(major) !== 1 || parseInt(minor) < 39) {
    throw new Error(`The installed version ${version} of playwright is not supported only 1.39+ is`);
  }

  return version;
}

const checkBrowserInstalled = async (browserName) => {
  const chromiumInstallationLocation = await runPlaywrightCommand(`install ${browserName} --dry-run`);

  const installationPath = installLocationRegEx.exec(chromiumInstallationLocation)?.groups.installationPath;
  if (!installationPath) {
    throw new Error(`Cannot determine ${browserName} installation`);
  }

  return access(installationPath);
}

const run = async () => {
  const [version] = await Promise.all([
    checkPlaywrightVersion(),
    checkBrowserInstalled('chromium'),
    checkBrowserInstalled('firefox'),
  ])

  console.log(`Playwright is correctly installed with the version ${version} and both chromium and firefox. Great job agent !`)
}

run()
