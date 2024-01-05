module.exports = {
  forceExit: true,
  collectCoverageFrom: ['src/**/*.(t|j)s'],
  testRegex: ['src/.*\\.spec\\.ts$'],
  reporters: ['default', 'jest-junit'],
  coverageDirectory: 'public/coverage',
  coverageReporters: ['lcov', 'text-summary', 'cobertura'],
  testTimeout: 300000,
  preset: 'ts-jest'
};
