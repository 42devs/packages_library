/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'packages/**/*.{ts,js,tsx,jsx}'
  ],
  coveragePathIgnorePatterns: [
    'jest.config.js',
    '/@types/',
    '/node_modules/',
    '/dist/',
    '/lib/',
    '/mock/',
  ],
  coverageThreshold: {
    global: {
      lines: 90,
      branches: 70,
      functions: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    '^@42devs/(.*)$': '<rooDir>/packages/$1/'
  }
};
