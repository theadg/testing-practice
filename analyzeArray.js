const getAverage = (array) => {
  let total = 0;
  let average = 0;

  array.map((element) => {
    total += element;

    return element;
  });

  average = total / array.length;

  return average || 0;
};

const getMax = (array) => (array.length > 0 ? Math.max(...array) : 0);
const getMin = (array) => (array.length > 0 ? Math.min(...array) : 0);

const analyzeArray = (array) => ({
  average: getAverage(array),
  length: array.length,
  min: getMin(array),
  max: getMax(array),
});

module.exports = analyzeArray;
