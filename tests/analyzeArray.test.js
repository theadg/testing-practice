const analyzeArray = require('../scripts/analyzeArray');

test('Works with array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Works with empty array', () => {
  expect(analyzeArray([])).toStrictEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });
});
