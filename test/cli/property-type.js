'use strict';

const assert = require('chai').assert;
const utils = require('../../utils');

suite('cli property-type Suite:', () => {
    const targetDirectoryName = 'property-type';
    const targetDirectory = `${utils.cliTestContextRelativeDir}/${targetDirectoryName}`;
    const targetDirectoryPath = `${utils.cliTestContextDirPath}/${targetDirectoryName}`;

    test('Should set property type to number by default', () => {
        const fileName = 'original-string.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runVstsBumpCli(args);
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 2);
        assert.deepEqual(bumpedTask.version.Patch, 8);
    });

    test('Should correctly bump with number properties when number specified for shorthand property type', () => {
        const fileName = 'number.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runVstsBumpCli(args, '-p number');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 3);
        assert.deepEqual(bumpedTask.version.Patch, 3);
    });

    test('Should correctly bump with number properties when number specified for property type', () => {
        const fileName = 'number2.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runVstsBumpCli(args, '--version-property-type number');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 3);
        assert.deepEqual(bumpedTask.version.Patch, 3);
    });

    test('Should correctly bump with string properties when string specified for shorthand property type', () => {
        const fileName = 'string.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runVstsBumpCli(args, '-p string');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, '0');
        assert.deepEqual(bumpedTask.version.Minor, '2');
        assert.deepEqual(bumpedTask.version.Patch, '8');
    });

    test('Should correctly bump with string properties when string specified for property type', () => {
        const fileName = 'string2.json';
        const file = `${targetDirectory}/${fileName}`;
        const args = [ file ];
        const result = utils.runVstsBumpCli(args, '--version-property-type string');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTask = utils.getTaskFromFile(`${targetDirectoryPath}/${fileName}`);
        assert.deepEqual(bumpedTask.version.Major, '0');
        assert.deepEqual(bumpedTask.version.Minor, '2');
        assert.deepEqual(bumpedTask.version.Patch, '8');
    });
});