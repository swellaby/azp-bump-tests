'use strict';

const assert = require('chai').assert;
const azpBump = require('azp-bump');
const utils = require('../../utils');

suite('lib dirs Suite:', () => {
    const targetDirectoryName = 'tasks';
    const targetDirectory = `${utils.libTestContextRelativeDir}/${targetDirectoryName}`;
    const targetDirectoryPath = `${utils.libTestContextDirPath}/${targetDirectoryName}`;

    test('Should correctly bump multiple tasks when nested in directories', done => {
        const args = `${targetDirectory}/**/task.json`;
        azpBump.bumpTaskManifestFiles([ args ]).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpType, utils.patchReleaseType);
            assert.deepEqual(bumpResult.bumpedFiles.length, 2);
            const firstBumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(firstBumpedFileResult.filePath, utils.normalizeDirectoryPaths(`${targetDirectory}/bar/task.json`));
            assert.deepEqual(firstBumpedFileResult.initialVersion, '0.1.1');
            assert.deepEqual(firstBumpedFileResult.bumpedVersion, '0.1.2');
            const secondBumpedFileResult = bumpResult.bumpedFiles[1];
            assert.deepEqual(secondBumpedFileResult.filePath, utils.normalizeDirectoryPaths(`${targetDirectory}/foo/task.json`));
            assert.deepEqual(secondBumpedFileResult.initialVersion, '1.2.3');
            assert.deepEqual(secondBumpedFileResult.bumpedVersion, '1.2.4');
            const barBumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/bar/task.json`);
            const fooBumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/foo/task.json`);
            assert.deepEqual(barBumpedTask.version.Major, 0);
            assert.deepEqual(barBumpedTask.version.Minor, 1);
            assert.deepEqual(barBumpedTask.version.Patch, 2);
            assert.deepEqual(fooBumpedTask.version.Major, 1);
            assert.deepEqual(fooBumpedTask.version.Minor, 2);
            assert.deepEqual(fooBumpedTask.version.Patch, 4);
            done();
        });
    });

    test('Should correctly bump task manifest at the root directory', done => {
        const fileName = 'task.json';
        const file = `${utils.libTestContextRelativeDir}/${fileName}`;
        azpBump.bumpTaskManifestFiles([ file ]).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpType, utils.patchReleaseType);
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const firstBumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(firstBumpedFileResult.filePath, file);
            assert.deepEqual(firstBumpedFileResult.initialVersion, '0.3.4');
            assert.deepEqual(firstBumpedFileResult.bumpedVersion, '0.3.5');
            const bumpedTask = utils.getTaskFromFile(`${utils.libTestContextDirPath}/${fileName}`);
            assert.deepEqual(bumpedTask.version.Major, 0);
            assert.deepEqual(bumpedTask.version.Minor, 3);
            assert.deepEqual(bumpedTask.version.Patch, 5);
            done();
        });
    });
});
