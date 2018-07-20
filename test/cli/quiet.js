'use strict';

const assert = require('chai').assert;
const utils = require('../../utils');

suite('quiet Suite:', () => {
    const targetDirectory = `${utils.cliTestContextRelativeDir}/quiet`;

    test('Should display output by default', () => {
        const file = `${targetDirectory}/task.json`;
        const args = [ file ];
        const oldVersion = '0.1.1';
        const newVersion = '0.1.2';
        const summaryMessage = utils.buildBumpSummaryMessage(1, utils.defaultBumpType);
        const bumpedFileDetailedMessage = utils.buildBumpedFileResultMessage(oldVersion, newVersion, file);
        const result = utils.runVstsBumpCli(args);
        assert.deepEqual(result.code, utils.successfulReturnCode);
        assert.isTrue(result.stdout.includes(summaryMessage));
        assert.isTrue(result.stdout.includes(bumpedFileDetailedMessage));
    });

    test('Should not display output when shorthand quiet option is set', () => {
        const args = [ `${targetDirectory}/task2.json` ];
        const summaryMessage = utils.buildBumpSummaryMessage(1, utils.defaultBumpType);
        const result = utils.runVstsBumpCli(args, '-q', false);
        assert.deepEqual(result.code, utils.successfulReturnCode);
        assert.deepEqual(result.code, utils.successfulReturnCode);
        assert.deepEqual(result.stdout, '');
        assert.isFalse(result.stdout.includes(summaryMessage));
    });

    test('Should not display output when full quiet option is set', () => {
        const args = [ `${targetDirectory}/**/*.json` ];
        const summaryMessage = utils.buildBumpSummaryMessage(1, utils.defaultBumpType);
        const result = utils.runVstsBumpCli(args, '--quiet', false);
        assert.deepEqual(result.code, utils.successfulReturnCode);
        assert.deepEqual(result.stdout, '');
        assert.isFalse(result.stdout.includes(summaryMessage));
    });
});