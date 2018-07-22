'use strict';

const assert = require('chai').assert;
const vstsBump = require('vsts-bump');
const utils = require('../../utils');

suite('lib errors Suite:', () => {
    const targetDirectory = `${utils.libTestContextRelativeDir}/errors`;

    test('Should reject with error when task cotnaisn invalid version key', done => {
        const args = [ `${targetDirectory}/invalid-version-key.json` ];
        const expectedErrMessage = utils.buildExpectedLibErrorMessage('Cannot read property \'Major\' of undefined');
        vstsBump.bumpTaskManifestFiles(args).catch(err => {
            assert.deepEqual(err.message, expectedErrMessage);
            done();
        });
    });

    test('Should bubble error when major version value is undefined', done => {
        const args = [ `${targetDirectory}/invalid-major-key.json` ];
        const expectedErrMessage = utils.buildExpectedLibErrorMessage(utils.invalidTaskFileErrorDetails);
        vstsBump.bumpTaskManifestFiles(args).catch(err => {
            assert.deepEqual(err.message, expectedErrMessage);
            done();
        });
    });

    test('Should bubble error when version values are invalid', done => {
        const args = [ `${targetDirectory}/invalid-values.json` ];
        const expectedErrMessage = utils.buildExpectedLibErrorMessage(utils.invalidTaskFileErrorDetails);
        vstsBump.bumpTaskManifestFiles(args).catch(err => {
            assert.deepEqual(err.message, expectedErrMessage);
            done();
        });
    });
});