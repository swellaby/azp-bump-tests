'use strict';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const buildBumpSummaryMessage = (numBumpedFiles, bumpType) => {
    return `Bumped ${numBumpedFiles} task manifest file(s) using bump type ${bumpType}`;
};

const buildBumpedFileResultMessage = (oldVersion, newVersion, file) => {
    return `Bumped ${oldVersion} to ${newVersion} in ${file}`;
};

const runVstsBumpCli = (args, options, isSilent = true) => {
    const command = `vsts-bump ${args} ${options}`;
    return shell.exec(command, { silent: isSilent });
};

const getFileContents = (filePath) => {
    const file = fs.readFileSync(filePath, 'utf8');
    return file;
};

const testContextRootDir = path.join(path.resolve('./'), '.testcontext/');
const libTestContextDir = path.join(testContextRootDir, 'lib/');
const cliTestContextDir = path.join(testContextRootDir, 'cli/');

module.exports = {
    successfulReturnCode: 0,
    testContextRootDir: testContextRootDir,
    libTestContextDir: libTestContextDir,
    cliTestContextDir: cliTestContextDir,
    patchReleaseType: 'patch',
    minorReleaseType: 'minor',
    majorReleaseType: 'major',
    buildBumpSummaryMessage: buildBumpSummaryMessage,
    buildBumpedFileResultMessage: buildBumpedFileResultMessage,
    runVstsBumpCli: runVstsBumpCli,
    getFileContents: getFileContents,
    getTaskFromFile: (filePath) => JSON.parse(getFileContents(filePath))
};