'use strict';

const assert = require('chai').assert;
const vstsBump = require('vsts-bump');
const utils = require('../../utils');

suite('lib release-type Suite:', () => {
    const targetDirectoryName = 'release-type';
    const targetDirectory = `${utils.libTestContextRelativeDir}/${targetDirectoryName}`;
    const targetDirectoryPath = `${utils.libTestContextDirPath}/${targetDirectoryName}`;

    test('Should bump patch by default', done => {
        const fileName = 'task.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        vstsBump.bumpTaskManifestFiles(args).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpType, utils.patchReleaseType);
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

    test('Should correctly bump patch version when patch specified for type', done => {
        const fileName = 'patch.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        vstsBump.bumpTaskManifestFiles(args, { type: utils.patchReleaseType }).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpType, utils.patchReleaseType);
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '0.1.4');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '0.1.5');
            const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
            assert.deepEqual(bumpedTask.version.Major, 0);
            assert.deepEqual(bumpedTask.version.Minor, 1);
            assert.deepEqual(bumpedTask.version.Patch, 5);
            done();
        });
    });

    test('Should correctly bump minor version when minor specified for type', done => {
        const fileName = 'minor.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        vstsBump.bumpTaskManifestFiles(args, { type: utils.minorReleaseType }).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpType, utils.minorReleaseType);
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '0.2.0');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '0.3.0');
            const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
            assert.deepEqual(bumpedTask.version.Major, 0);
            assert.deepEqual(bumpedTask.version.Minor, 3);
            assert.deepEqual(bumpedTask.version.Patch, 0);
            done();
        });
    });

    test('Should correctly bump major version when major specified for type', done => {
        const fileName = 'major.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        vstsBump.bumpTaskManifestFiles(args, { type: utils.majorReleaseType }).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpType, utils.majorReleaseType);
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '1.0.0');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '2.0.0');
            const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
            assert.deepEqual(bumpedTask.version.Major, 2);
            assert.deepEqual(bumpedTask.version.Minor, 0);
            assert.deepEqual(bumpedTask.version.Patch, 0);
            done();
        });
    });
});