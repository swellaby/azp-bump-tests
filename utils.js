'use strict';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const normalizeDirectoryPaths = originalPath => originalPath.replace(/\\/g, '/');

const buildBumpSummaryMessage = (numBumpedFiles, bumpType) => {
    return `Bumped ${numBumpedFiles} task manifest file(s) using bump type ${bumpType}`;
};

const buildBumpedFileResultMessage = (oldVersion, newVersion, file) => {
    return `Bumped ${oldVersion} to ${newVersion} in ${normalizeDirectoryPaths(file)}`;
};

const buildCliCommand = (args, options) => {
    let command = 'azp-bump';
    if (options) {
        command = `${command} ${options}`;
    }

    return `${command} ${args}`;
};

const runAzpBumpCli = (args, options, isSilent = true) => {
    const command = buildCliCommand(args, options);
    return shell.exec(command, { silent: isSilent });
};

const runAzpBumpCliWithCallback = (args, options, isSilent = true, callback) => {
    const command = buildCliCommand(args, options);
    return shell.exec(command, { silent: isSilent }, callback);
};

const getFileContents = (filePath) => {
    const file = fs.readFileSync(filePath, 'utf8');
    return file;
};

const testContextRootDir = '.testcontext';
const libTestContextDir = 'lib';
const cliTestContextDir = 'cli';
const testContextRootDirPath = path.join(path.resolve('./'), testContextRootDir);
const libTestContextDirPath = path.join(testContextRootDirPath, libTestContextDir);
const cliTestContextDirPath = path.join(testContextRootDirPath, cliTestContextDir);
const libBaseErrorMessage = 'Fatal error occurred while attempting to bump file. Details:';
const cliBaseErrorMessage = `Fatal error encountered. ${libBaseErrorMessage}`;
const invalidTaskFileErrorDetails = 'Encountered one or more invalid tasks. Task must represent version as an object ' +
    'under the \'version\' key with Major, Minor, and Patch fields (that start with Uppercase letters)';

module.exports = {
    successfulReturnCode: 0,
    testContextRootDir,
    libTestContextRelativeDir: `${testContextRootDir}/${libTestContextDir}`,
    cliTestContextRelativeDir: `${testContextRootDir}/${cliTestContextDir}`,
    testContextRootDirPath,
    libTestContextDirPath,
    cliTestContextDirPath,
    patchReleaseType: 'patch',
    minorReleaseType: 'minor',
    majorReleaseType: 'major',
    defaultBumpType: 'patch',
    buildBumpSummaryMessage,
    buildBumpedFileResultMessage,
    runAzpBumpCli,
    runAzpBumpCliWithCallback,
    getFileContents,
    getTaskFromFile: (filePath) => JSON.parse(getFileContents(filePath)),
    cliBaseErrorMessage,
    invalidTaskFileErrorDetails,
    buildExpectedCliErrorMessage: errorMessageDetails => `${cliBaseErrorMessage} ${errorMessageDetails}`,
    buildExpectedLibErrorMessage: errorMessageDetails => `${libBaseErrorMessage} ${errorMessageDetails}`,
    normalizeDirectoryPaths
};
