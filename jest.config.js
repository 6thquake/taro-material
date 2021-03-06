module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json'],
  rootDir: __dirname,
  testMatch: [
    '<rootDir>/packages/taro-material/src/**/*.test.js',
    '<rootDir>/packages/taro-material/src/**/test.js'
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    react: 'nervjs',
    'react-addons-test-utils': 'nerv-test-utils',
    'react-dom': 'nervjs',
    weui: '<rootDir>/__mock__/styleMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mock__/styleMock.js',
  },
}
