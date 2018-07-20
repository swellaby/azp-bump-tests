// 'use strict';

// const assert = require('chai').assert;
// const utils = require('../../utils');

// suite('release-type Suite:', () => {
//     const targetDirectory = `${utils.cliTestContextRelativeDir}/release-type`;
//     const releaseTypeDir = utils.testContextDir + 'release-type/';

//     test('Should bump patch by default', () => {
//         const result = utils.runGulpTaskWithShelljs('bump:release:default');
//         assert.deepEqual(result.code, utils.successfulReturnCode);
//         const bumpedTask = utils.getTaskFromFile(releaseTypeDir + 'task.json');
//         assert.deepEqual(bumpedTask.version.Major, 0);
//         assert.deepEqual(bumpedTask.version.Minor, 1);
//         assert.deepEqual(bumpedTask.version.Patch, 2);
//     });

//     test('Should correctly bump patch version when specified', () => {
//         const result = utils.runGulpTaskWithShelljs('bump:release:patch');
//         assert.deepEqual(result.code, utils.successfulReturnCode);
//         const bumpedTask = utils.getTaskFromFile(releaseTypeDir + 'patch.json');
//         assert.deepEqual(bumpedTask.version.Major, 0);
//         assert.deepEqual(bumpedTask.version.Minor, 1);
//         assert.deepEqual(bumpedTask.version.Patch, 5);
//     });

//     test('Should correctly bump minor version when specified', () => {
//         const result = utils.runGulpTaskWithShelljs('bump:release:minor');
//         assert.deepEqual(result.code, utils.successfulReturnCode);
//         const bumpedTask = utils.getTaskFromFile(releaseTypeDir + 'minor.json');
//         assert.deepEqual(bumpedTask.version.Major, 0);
//         assert.deepEqual(bumpedTask.version.Minor, 3);
//         assert.deepEqual(bumpedTask.version.Patch, 0);
//     });

//     test('Should correctly bump major version when specified', () => {
//         const result = utils.runGulpTaskWithShelljs('bump:release:major');
//         assert.deepEqual(result.code, utils.successfulReturnCode);
//         const bumpedTask = utils.getTaskFromFile(releaseTypeDir + 'major.json');
//         assert.deepEqual(bumpedTask.version.Major, 2);
//         assert.deepEqual(bumpedTask.version.Minor, 0);
//         assert.deepEqual(bumpedTask.version.Patch, 0);
//     });
// });