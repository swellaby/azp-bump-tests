'use strict';

const assert = require('chai').assert;
const path = require('path');
const utils = require('../../utils');

suite('errors Suite:', () => {
    const expectedReturnCode = 1;
    const targetDirectory = path.join(utils.cliTestContextDir, 'errors');

    test('Should bubble error when version key is invalid', () => {
        const args = [ `${targetDirectory}/invalid-version-key.json` ];
        const result = utils.runVstsBumpCli(args);
        assert.deepEqual(result.code, expectedReturnCode);
        const expectedErrMessage = 'Error: Error parsing JSON file';
        assert.isTrue(result.stderr.includes(expectedErrMessage));
    });

    // test('Should bubble error when major version key is invalid', () => {
    //     const result = utils.runGulpTaskWithShelljs('bump:errors:majorkey');
    //     assert.deepEqual(result.code, expectedReturnCode);
    //     const expectedErrMessage = 'Error: Task manifest file contains an invalid version specification: undefined.1.1';
    //     assert.isTrue(result.stderr.includes(expectedErrMessage));
    // });

    // test('Should bubble error when version values are invalid', () => {
    //     const result = utils.runGulpTaskWithShelljs('bump:errors:values');
    //     assert.deepEqual(result.code, expectedReturnCode);
    //     const expectedErrMessage = 'Error: Task manifest file contains an invalid version specification: foo.1.1';
    //     assert.isTrue(result.stderr.includes(expectedErrMessage));
    // });
});