const capitalize = require('./capitalize');

test('Normal Capitalize', () => {
  expect(capitalize('hello').toBe('Hello'));
});
