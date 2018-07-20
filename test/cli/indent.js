'use strict';

const assert = require('chai').assert;
const utils = require('../../utils');

suite('indent Suite:', () => {
    const targetDirectoryName = 'indent';
    const targetDirectory = `${utils.cliTestContextRelativeDir}/${targetDirectoryName}`;
    const targetDirectoryPath = `${utils.cliTestContextDirPath}/${targetDirectoryName}`;

    test('Should set indent to two spaces by default', () => {
        const fileName = 'task.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const oldVersion = '0.1.1';
        const newVersion = '0.1.2';
        const summaryMessage = utils.buildBumpSummaryMessage(1, utils.defaultBumpType);
        const bumpedFileDetailedMessage = utils.buildBumpedFileResultMessage(oldVersion, newVersion, file);
        const result = utils.runVstsBumpCli(args);
        assert.deepEqual(result.code, utils.successfulReturnCode);
        assert.isTrue(result.stdout.includes(summaryMessage));
        assert.isTrue(result.stdout.includes(bumpedFileDetailedMessage));
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 1);
        assert.deepEqual(bumpedTask.version.Patch, 2);
    });

    // test('Should set indent to tab when specified', () => {
    //     const result = utils.runGulpTaskWithShelljs('bump:indent:tab');
    //     assert.deepEqual(result.code, utils.successfulReturnCode);
    //     const bumpedTaskFilePath = indentDir + 'tab.json';
    //     const expectedTaskFilePath = indentDir + 'expected/' + 'tab.json';
    //     const bumpedTaskFileContents = utils.getFileContents(bumpedTaskFilePath);
    //     const expectedTaskFileContents = utils.getFileContents(expectedTaskFilePath);
    //     assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    // });

    // test('Should set indent to two spaces when specified', () => {
    //     const result = utils.runGulpTaskWithShelljs('bump:indent:twospace');
    //     assert.deepEqual(result.code, utils.successfulReturnCode);
    //     const bumpedTaskFilePath = indentDir + 'twospace.json';
    //     const expectedTaskFilePath = indentDir + 'expected/' + 'twospace.json';
    //     const bumpedTaskFileContents = utils.getFileContents(bumpedTaskFilePath);
    //     const expectedTaskFileContents = utils.getFileContents(expectedTaskFilePath);
    //     assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    // });

    // test('Should set indent to four spaces when specified', () => {
    //     const result = utils.runGulpTaskWithShelljs('bump:indent:fourspace');
    //     assert.deepEqual(result.code, utils.successfulReturnCode);
    //     const bumpedTaskFilePath = indentDir + 'fourspace.json';
    //     const expectedTaskFilePath = indentDir + 'expected/' + 'fourspace.json';
    //     const bumpedTaskFileContents = utils.getFileContents(bumpedTaskFilePath);
    //     const expectedTaskFileContents = utils.getFileContents(expectedTaskFilePath);
    //     assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    //     const bumpedTask = JSON.parse(bumpedTaskFileContents.toString());
    //     assert.deepEqual(bumpedTask.version.Major, 0);
    //     assert.deepEqual(bumpedTask.version.Minor, 1);
    //     assert.deepEqual(bumpedTask.version.Patch, 2);
    // });
});