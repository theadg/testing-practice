const reverse = (string) => {
  if (typeof string === 'number') {
    return parseInt(string.toString().split('').reverse().join(''), 10);
  }
  return string.split('').reverse().join('');
};

module.exports = reverse;
