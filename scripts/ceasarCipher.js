const getSmallLetter = (asciiVal, key) => {
  let val = asciiVal;
  let num = 0;

  while (num !== key) {
    val += 1;
    num += 1;
    if (val > 122) {
      val = 97;
    }
  }
  return String.fromCharCode(val);
};

const getBigLetter = (asciiVal, key) => {
  let val = asciiVal;
  let num = 0;

  while (num !== key) {
    val += 1;
    num += 1;
    if (val > 90) {
      val = 65;
    }
  }
  return String.fromCharCode(val);
};

const ceaserCipher = (string, key) => {
  // convert to array first

  const copy = string.split('').map((letter) => {
    const asciiVal = letter.charCodeAt(0);

    if (!letter.match(/[a-zA-Z]/)) {
      return letter;
    }
    // for letters
    if (letter === letter.toLowerCase()) {
      if (asciiVal + key > 122) {
        return getSmallLetter(asciiVal, key);
      }
    }

    if (letter === letter.toUpperCase()) {
      if (asciiVal + key > 90) {
        return getBigLetter(asciiVal, key);
      }
    }

    // Puncutations not Included
    return String.fromCharCode(asciiVal + key);
  });

  return copy.join('');
};

module.exports = ceaserCipher;
