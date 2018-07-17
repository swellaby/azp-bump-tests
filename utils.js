'use strict';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const buildBumpedMessage = (oldVersion, newVersion, releaseType) => {
    return `Bumped ${oldVersion} to ${newVersion} with type: ${releaseType}`;
};

const buildGulpTaskCommand = (taskName) => {
    return `npm run gulp -- ${taskName}`;
};

const runGulpTaskWithShelljs = (gulpTaskName) => {
    const commandName = buildGulpTaskCommand(gulpTaskName);
    return shell.exec(commandName, { silent: true });
};

const getFileContents = (filePath) => {
    const file = fs.readFileSync(filePath, 'utf8');
    return file;
};

module.exports = {
    successfulReturnCode: 0,
    testContextDir: path.join(path.resolve('./'), '.testcontext/'),
    patchReleaseType: 'patch',
    minorReleaseType: 'minor',
    majorReleaseType: 'major',
    buildBumpedMessage: buildBumpedMessage,
    buildGulpTaskCommand: buildGulpTaskCommand,
    runGulpTaskWithShelljs: runGulpTaskWithShelljs,
    getFileContents: getFileContents,
    getTaskFromFile: (filePath) => JSON.parse(getFileContents(filePath))
};