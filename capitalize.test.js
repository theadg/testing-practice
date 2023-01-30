const capitalize = require('./capitalize');

test('Normal Capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Does not capitalize number', () => {
  expect(capitalize('1ab')).toBe('1ab');
});
