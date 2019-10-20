'use strict';

const assert = require('chai').assert;
const azpBump = require('azp-bump');
const utils = require('../../utils');

suite('lib property-type Suite:', () => {
    const targetDirectoryName = 'property-type';
    const targetDirectory = `${utils.libTestContextRelativeDir}/${targetDirectoryName}`;
    const targetDirectoryPath = `${utils.libTestContextDirPath}/${targetDirectoryName}`;

    test('Should set property type to number by default', done => {
        const fileName = 'original-string.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        azpBump.bumpTaskManifestFiles(args).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '0.2.7');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '0.2.8');
            const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
            assert.deepEqual(bumpedTask.version.Major, 0);
            assert.deepEqual(bumpedTask.version.Minor, 2);
            assert.deepEqual(bumpedTask.version.Patch, 8);
            done();
        });
    });

    test('Should correctly bump with number properties when number specified for property type', done => {
        const fileName = 'number.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        azpBump.bumpTaskManifestFiles(args, { versionPropertyType: 'number' }).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '0.3.2');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '0.3.3');
            const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
            assert.deepEqual(bumpedTask.version.Major, 0);
            assert.deepEqual(bumpedTask.version.Minor, 3);
            assert.deepEqual(bumpedTask.version.Patch, 3);
            done();
        });
    });

    test('Should correctly bump with string properties when string specified for property type', done => {
        const fileName = 'string.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        azpBump.bumpTaskManifestFiles(args, { versionPropertyType: 'string' }).then(bumpResult => {
            assert.deepEqual(bumpResult.bumpedFiles.length, 1);
            const bumpedFileResult = bumpResult.bumpedFiles[0];
            assert.deepEqual(bumpedFileResult.filePath, file);
            assert.deepEqual(bumpedFileResult.initialVersion, '0.2.7');
            assert.deepEqual(bumpedFileResult.bumpedVersion, '0.2.8');
            const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
            assert.deepEqual(bumpedTask.version.Major, '0');
            assert.deepEqual(bumpedTask.version.Minor, '2');
            assert.deepEqual(bumpedTask.version.Patch, '8');
            done();
        });
    });
});
