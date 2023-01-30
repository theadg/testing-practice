const calculator = require('../scripts/calculator');

test('Add two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Add negative numbers', () => {
  expect(calculator.add(-1, -2)).toBe(-3);
});

test('Subtract two numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('Negative diffference', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('Multiply two numbers', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('Multiply two negative numbers', () => {
  expect(calculator.multiply(-6, -6)).toBe(36);
});

test('Multiply positive and negative numbers', () => {
  expect(calculator.multiply(-2, 1)).toBe(-2);
});

test('Divide numbers', () => {
  expect(calculator.divide(5, 5)).toBe(1);
});

test('Does not divide 0', () => {
  expect(calculator.divide(5, 0)).toBe('Cannot Divide by Zero');
});

test("Cannot divide using 2 0's", () => {
  expect(calculator.divide(0, 0)).toBe('Result undefined');
});
