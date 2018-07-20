// 'use strict';

// const assert = require('chai').assert;
// const utils = require('../../utils');

// suite('tasks Suite:', () => {
//     const targetDirectory = `${utils.cliTestContextRelativeDir}/tasks`;

//     test('Should correctly bump multiple tasks when nested in directories', () => {
//         const result = utils.runGulpTaskWithShelljs('bump:tasks:all');
//         assert.deepEqual(result.code, utils.successfulReturnCode);
//         const tasksBaseDir = utils.testContextDir + 'tasks/';
//         const barBumpedTask = utils.getTaskFromFile(tasksBaseDir + 'bar/task.json');
//         const fooBumpedTask = utils.getTaskFromFile(tasksBaseDir + 'foo/task.json');
//         assert.deepEqual(barBumpedTask.version.Major, 0);
//         assert.deepEqual(barBumpedTask.version.Minor, 1);
//         assert.deepEqual(barBumpedTask.version.Patch, 2);
//         assert.deepEqual(fooBumpedTask.version.Major, 1);
//         assert.deepEqual(fooBumpedTask.version.Minor, 2);
//         assert.deepEqual(fooBumpedTask.version.Patch, 4);
//     });

//     test('Should correctly bump task manifest at the root directory', () => {
//         const result = utils.runGulpTaskWithShelljs('bump:tasks:root');
//         assert.deepEqual(result.code, utils.successfulReturnCode);
//         const bumpedTask = utils.getTaskFromFile(utils.testContextDir + 'task.json');
//         assert.deepEqual(bumpedTask.version.Major, 0);
//         assert.deepEqual(bumpedTask.version.Minor, 3);
//         assert.deepEqual(bumpedTask.version.Patch, 5);
//     });
// });