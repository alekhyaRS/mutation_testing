
// Exporting an object containing configuration options
module.exports = {
  // Specify the package manager to be used
  packageManager: 'npm',
  // Specify the reporters to be used for test coverage reporting
  reporters: ['html', 'clear-text', 'progress'],
  // Specify the test runner to be used
  testRunner: 'jest',
  // Specify the type of coverage analysis to be performed
  coverageAnalysis: 'all',
  // Specify the files to be mutated (tested)
  mutate: ['bmi.js', 'gradeToLetter.js'],
  // Jest configuration options
  jest: {
    // Specify the Jest configuration file to be used
    config: require('./jest.config.cjs'), // Assuming there's a Jest configuration file named 'jest.config.cjs'
  },
};