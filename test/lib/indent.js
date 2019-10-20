'use strict';

const assert = require('chai').assert;
const azpBump = require('azp-bump');
const utils = require('../../utils');

suite('lib indent Suite:', () => {
    const targetDirectoryName = 'indent';
    const targetDirectory = `${utils.libTestContextRelativeDir}/${targetDirectoryName}`;
    const targetDirectoryPath = `${utils.libTestContextDirPath}/${targetDirectoryName}`;
    const expectedBumpTabFilePath = `${targetDirectoryPath}/expected/tab.json`;

    test('Should set indent to two spaces by default', done => {
        const fileName = 'task.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        azpBump.bumpTaskManifestFiles(args).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '0.1.1');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '0.1.2');
            const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
            assert.deepEqual(bumpedTask.version.Major, 0);
            assert.deepEqual(bumpedTask.version.Minor, 1);
            assert.deepEqual(bumpedTask.version.Patch, 2);
            done();
        });
    });

    test('Should set indent to tab when t specified for indent', done => {
        const fileName = 'tab.json';
        const file = `${targetDirectory}/${fileName}`;
        azpBump.bumpTaskManifestFiles([ file ], { indent: 't' }).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '0.1.4');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '0.1.5');
            const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
            const expectedTaskFileContents = utils.getFileContents(expectedBumpTabFilePath);
            assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
            done();
        });
    });

    test('Should set indent to tab when tab specified for indent', done => {
        const fileName = 'tab2.json';
        const file = `${targetDirectory}/${fileName}`;
        azpBump.bumpTaskManifestFiles([ file ], { indent: 'tab' }).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '0.1.4');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '0.1.5');
            const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
            const expectedTaskFileContents = utils.getFileContents(expectedBumpTabFilePath);
            assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
            done();
        });
    });

    test('Should set indent to tab when tab character specified for indent', done => {
        const fileName = 'tab3.json';
        const file = `${targetDirectory}/${fileName}`;
        azpBump.bumpTaskManifestFiles([ file ], { indent: '\t' }).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '0.1.4');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '0.1.5');
            const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
            const expectedTaskFileContents = utils.getFileContents(expectedBumpTabFilePath);
            assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
            done();
        });
    });

    test('Should set indent to two spaces when 2 specified for indent', done => {
        const fileName = 'twospace.json';
        const file = `${targetDirectory}/${fileName}`;
        azpBump.bumpTaskManifestFiles([ file ], { indent: 2 }).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '0.1.6');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '0.1.7');
            const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
            const expectedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/expected/twospace.json`);
            assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
            done();
        });
    });

    test('Should set indent to four spaces when 4 specified for indent', done => {
        const fileName = 'fourspace.json';
        const file = `${targetDirectory}/${fileName}`;
        azpBump.bumpTaskManifestFiles([ file ], { indent: 4 }).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '0.1.1');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '0.1.2');
            const bumpedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/${fileName}`);
            const expectedTaskFileContents = utils.getFileContents(`${targetDirectoryPath}/expected/fourspace.json`);
            assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
            done();
        });
    });
});
