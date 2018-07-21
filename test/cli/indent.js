'use strict';

const assert = require('chai').assert;
const utils = require('../../utils');

suite('cli indent Suite:', () => {
    const targetDirectoryName = 'indent';
    const targetDirectory = `${utils.cliTestContextRelativeDir}/${targetDirectoryName}`;
    const targetDirectoryPath = `${utils.cliTestContextDirPath}/${targetDirectoryName}`;
    const expectedBumpTabFilePath = `${targetDirectoryPath}/expected/tab.json`;

    test('Should set indent to two spaces by default', () => {
        const fileName = 'task.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runVstsBumpCli(args);
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 1);
        assert.deepEqual(bumpedTask.version.Patch, 2);
    });

    test('Should set indent to tab when t specified for shorthand indent', () => {
        const fileName = 'tab.json';
        const args = [ `${targetDirectory}/${fileName}` ];
        const result = utils.runVstsBumpCli(args, '-i t');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
        const expectedTaskFileContents = utils.getFileContents(expectedBumpTabFilePath);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });

    test('Should set indent to tab when t specified for indent', () => {
        const fileName = 'tab2.json';
        const args = [ `${targetDirectory}/${fileName}` ];
        const result = utils.runVstsBumpCli(args, '--indent t');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
        const expectedTaskFileContents = utils.getFileContents(expectedBumpTabFilePath);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });

    test('Should set indent to tab when tab specified for shorthand indent', () => {
        const fileName = 'tab3.json';
        const args = [ `${targetDirectory}/${fileName}` ];
        const result = utils.runVstsBumpCli(args, '-i t');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
        const expectedTaskFileContents = utils.getFileContents(expectedBumpTabFilePath);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });

    test('Should set indent to tab when tab specified for indent', () => {
        const fileName = 'tab4.json';
        const args = [ `${targetDirectory}/${fileName}` ];
        const result = utils.runVstsBumpCli(args, '--indent t');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
        const expectedTaskFileContents = utils.getFileContents(expectedBumpTabFilePath);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });

    test('Should set indent to tab when tab character specified for shorthand indent', () => {
        const fileName = 'tab5.json';
        const args = [ `${targetDirectory}/${fileName}` ];
        const result = utils.runVstsBumpCli(args, '-i \\t');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
        const expectedTaskFileContents = utils.getFileContents(expectedBumpTabFilePath);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });

    test('Should set indent to tab when tab character specified for indent', () => {
        const fileName = 'tab6.json';
        const args = [ `${targetDirectory}/${fileName}` ];
        const result = utils.runVstsBumpCli(args, '--indent \\t');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
        const expectedTaskFileContents = utils.getFileContents(expectedBumpTabFilePath);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });

    test('Should set indent to two spaces when 2 specified for shorthand indent', () => {
        const fileName = 'twospace.json';
        const args = [ `${targetDirectory}/${fileName}` ];
        const result = utils.runVstsBumpCli(args, '-i 2');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
        const expectedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/expected/${fileName}`);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });

    test('Should set indent to two spaces when 2 specified for indent', () => {
        const fileName = 'twospace2.json';
        const args = [ `${targetDirectory}/${fileName}` ];
        const result = utils.runVstsBumpCli(args, '--indent 2');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
        const expectedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/expected/twospace.json`);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });

    test('Should set indent to four spaces when 4 specified for shorthand indent', () => {
        const fileName = 'fourspace.json';
        const args = [ `${targetDirectory}/${fileName}` ];
        const result = utils.runVstsBumpCli(args, '-i 4');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
        const expectedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/expected/${fileName}`);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });

    test('Should set indent to four spaces when 4 specified for indent', () => {
        const fileName = 'fourspace2.json';
        const args = [ `${targetDirectory}/${fileName}` ];
        const result = utils.runVstsBumpCli(args, '--indent 4');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
        const expectedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/expected/fourspace.json`);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });
});