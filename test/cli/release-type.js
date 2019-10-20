'use strict';

const assert = require('chai').assert;
const utils = require('../../utils');

suite('cli release-type Suite:', () => {
    const targetDirectoryName = 'release-type';
    const targetDirectory = `${utils.cliTestContextRelativeDir}/${targetDirectoryName}`;
    const targetDirectoryPath = `${utils.cliTestContextDirPath}/${targetDirectoryName}`;

    test('Should bump patch by default', () => {
        const fileName = 'task.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runAzpBumpCli(args);
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 1);
        assert.deepEqual(bumpedTask.version.Patch, 2);
    });

    test('Should correctly bump patch version when patch specified for shorthand type', () => {
        const fileName = 'patch.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runAzpBumpCli(args, '-t patch');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 1);
        assert.deepEqual(bumpedTask.version.Patch, 5);
    });

    test('Should correctly bump patch version when patch specified for type', () => {
        const fileName = 'patch2.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runAzpBumpCli(args, '--type patch');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 1);
        assert.deepEqual(bumpedTask.version.Patch, 5);
    });

    test('Should correctly bump minor version when minor specified for shorthand type', () => {
        const fileName = 'minor.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runAzpBumpCli(args, '-t minor');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 3);
        assert.deepEqual(bumpedTask.version.Patch, 0);
    });

    test('Should correctly bump minor version when minor specified for type', () => {
        const fileName = 'minor2.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runAzpBumpCli(args, '--type minor');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 3);
        assert.deepEqual(bumpedTask.version.Patch, 0);
    });

    test('Should correctly bump major version when major specified for shorthand type', () => {
        const fileName = 'major.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runAzpBumpCli(args, '-t major');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 2);
        assert.deepEqual(bumpedTask.version.Minor, 0);
        assert.deepEqual(bumpedTask.version.Patch, 0);
    });

    test('Should correctly bump major version when major specified for type', () => {
        const fileName = 'major2.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runAzpBumpCli(args, '--type major');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 2);
        assert.deepEqual(bumpedTask.version.Minor, 0);
        assert.deepEqual(bumpedTask.version.Patch, 0);
    });
});
