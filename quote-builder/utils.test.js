const { getGreeting } = require('./utils.js');

test('returns a personalized greeting', () => {
  expect(getGreeting('Stefani')).toBe('Hello, Stefani!');
});
