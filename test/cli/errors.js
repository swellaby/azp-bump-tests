'use strict';

const assert = require('chai').assert;
const utils = require('../../utils');

suite('cli errors Suite:', () => {
    const expectedReturnCode = 1;
    const targetDirectory = `${utils.cliTestContextRelativeDir}/errors`;

    test('Should bubble error when version key is invalid', done => {
        const args = [ `${targetDirectory}/invalid-version-key.json` ];
        const expectedErrMessage = utils.buildExpectedCliErrorMessage('Cannot read property \'Major\' of undefined');
        utils.runVstsBumpCliWithCallback(args, null, true, (returnCode, stdout, stderr) => {
            assert.deepEqual(returnCode, expectedReturnCode);
            assert.isTrue(stderr.includes(expectedErrMessage));
            done();
        });
    });

    test('Should bubble error when major version value is undefined', done => {
        const args = [ `${targetDirectory}/invalid-major-key.json` ];
        const expectedErrMessage = utils.buildExpectedCliErrorMessage(utils.invalidTaskFileErrorDetails);
        utils.runVstsBumpCliWithCallback(args, null, true, (returnCode, stdout, stderr) => {
            assert.deepEqual(returnCode, expectedReturnCode);
            assert.isTrue(stderr.includes(expectedErrMessage));
            done();
        });
    });

    test('Should bubble error when version values are invalid', done => {
        const args = [ `${targetDirectory}/invalid-values.json` ];
        const expectedErrMessage = utils.buildExpectedCliErrorMessage(utils.invalidTaskFileErrorDetails);
        utils.runVstsBumpCliWithCallback(args, null, true, (returnCode, stdout, stderr) => {
            assert.deepEqual(returnCode, expectedReturnCode);
            assert.isTrue(stderr.includes(expectedErrMessage));
            done();
        });
    });
});