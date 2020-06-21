let common = [
    // *.feature file 위치
    'test/features/**/*.feature', 
    // Load TypeScript module
    '--require-module ts-node/register',
    // step definitions 위치 
    '--require test/step-definitions/**/*.ts', 
    // Load custom formatter
    '--format progress-bar',
    // Load custom formatter
    '--format node_modules/cucumber-pretty' 
].join(' ');
  
module.exports = {
    default: common
};