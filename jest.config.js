module.exports = {
  preset: 'jest-playwright-preset',
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testRegex: [
    '/__tests__/.*\\.(test|spec)\\.[jt]sx?$'
  ]
};
