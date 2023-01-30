const reverse = require('./reverse');

test('Test Name', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('Works with numbers', () => {
  expect(reverse(1234)).toBe(4321);
});
