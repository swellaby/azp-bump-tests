'use strict';

const assert = require('chai').assert;
const azpBump = require('azp-bump');
const utils = require('../../utils');

suite('lib errors Suite:', () => {
    const targetDirectory = `${utils.libTestContextRelativeDir}/errors`;

    test('Should reject with error when task contains invalid version key', done => {
        const args = [ `${targetDirectory}/invalid-version-key.json` ];
        const expectedErrMessage = utils.buildExpectedLibErrorMessage('Cannot read property \'Major\' of undefined');
        azpBump.bumpTaskManifestFiles(args).catch(err => {
            assert.deepEqual(err.message, expectedErrMessage);
            done();
        });
    });

    test('Should bubble error when major version value is undefined', done => {
        const args = [ `${targetDirectory}/invalid-major-key.json` ];
        const expectedErrMessage = utils.buildExpectedLibErrorMessage(utils.invalidTaskFileErrorDetails);
        azpBump.bumpTaskManifestFiles(args).catch(err => {
            assert.deepEqual(err.message, expectedErrMessage);
            done();
        });
    });

    test('Should bubble error when version values are invalid', done => {
        const args = [ `${targetDirectory}/invalid-values.json` ];
        const expectedErrMessage = utils.buildExpectedLibErrorMessage(utils.invalidTaskFileErrorDetails);
        azpBump.bumpTaskManifestFiles(args).catch(err => {
            assert.deepEqual(err.message, expectedErrMessage);
            done();
        });
    });
});
