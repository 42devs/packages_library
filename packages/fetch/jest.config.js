const sharedConfig = require('../../jest.config');

module.exports = {
  ...sharedConfig,
  rootDir: './',
  collectCoverageFrom: [
    './src/**/*.ts',
  ],
  coveragePathIgnorePatterns: [
    './index.ts',
  ],
};
