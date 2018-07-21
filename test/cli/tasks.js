'use strict';

const assert = require('chai').assert;
const utils = require('../../utils');

suite('cli tasks Suite:', () => {
    const targetDirectoryName = 'tasks';
    const targetDirectory = `${utils.cliTestContextRelativeDir}/${targetDirectoryName}`;
    const targetDirectoryPath = `${utils.cliTestContextDirPath}/${targetDirectoryName}`;

    test('Should correctly bump multiple tasks when nested in directories', () => {
        const args = `${targetDirectory}/**/task.json`;
        const result = utils.runVstsBumpCli(args);
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const barBumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/bar/task.json`);
        const fooBumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/foo/task.json`);
        assert.deepEqual(barBumpedTask.version.Major, 0);
        assert.deepEqual(barBumpedTask.version.Minor, 1);
        assert.deepEqual(barBumpedTask.version.Patch, 2);
        assert.deepEqual(fooBumpedTask.version.Major, 1);
        assert.deepEqual(fooBumpedTask.version.Minor, 2);
        assert.deepEqual(fooBumpedTask.version.Patch, 4);
    });

    test('Should correctly bump task manifest at the root directory', () => {
        const fileName = 'task.json';
        const file = `${utils.cliTestContextRelativeDir}/${fileName}`;
        const args = [ file ];
        const result = utils.runVstsBumpCli(args);
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${utils.cliTestContextDirPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 3);
        assert.deepEqual(bumpedTask.version.Patch, 5);
    });
});