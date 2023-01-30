// A calculator object  add, subtract, divide, and multiply.
// emphasis on the object
const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  divide: (x, y) => {
    if (x === 0 && y === 0) {
      return 'Result undefined';
    }

    if (x === 0 || y === 0) {
      return 'Cannot Divide by Zero';
    }

    return x / y;
  },
  multiply: (x, y) => x * y,
};

module.exports = calculator;
