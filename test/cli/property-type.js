// 'use strict';

// const assert = require('chai').assert;
// const utils = require('../../utils');

// suite('property-type Suite:', () => {
//     const targetDirectory = `${utils.cliTestContextRelativeDir}/property-type`;
//     const propertyTypeDir = utils.testContextDir + 'property-type/';

//     test('Should set property type to number by default', () => {
//         const result = utils.runGulpTaskWithShelljs('bump:prop:default');
//         assert.deepEqual(result.code, utils.successfulReturnCode);
//         const bumpedTask = utils.getTaskFromFile(propertyTypeDir + 'original-string.json');
//         assert.deepEqual(bumpedTask.version.Major, 0);
//         assert.deepEqual(bumpedTask.version.Minor, 2);
//         assert.deepEqual(bumpedTask.version.Patch, 8);
//     });

//     test('Should correctly bump with number properties when specified', () => {
//         const result = utils.runGulpTaskWithShelljs('bump:prop:number');
//         assert.deepEqual(result.code, utils.successfulReturnCode);
//         const bumpedTask = utils.getTaskFromFile(propertyTypeDir + 'number.json');
//         assert.deepEqual(bumpedTask.version.Major, 0);
//         assert.deepEqual(bumpedTask.version.Minor, 3);
//         assert.deepEqual(bumpedTask.version.Patch, 3);
//     });

//     test('Should correctly bump with string properties when specified', () => {
//         const result = utils.runGulpTaskWithShelljs('bump:prop:string');
//         assert.deepEqual(result.code, utils.successfulReturnCode);
//         const bumpedTask = utils.getTaskFromFile(propertyTypeDir + 'string.json');
//         assert.deepEqual(bumpedTask.version.Major, '0');
//         assert.deepEqual(bumpedTask.version.Minor, '2');
//         assert.deepEqual(bumpedTask.version.Patch, '8');
//     });
// });