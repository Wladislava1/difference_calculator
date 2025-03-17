export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  coverageDirectory: 'coverage',
  collectCoverage: true,
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
};
