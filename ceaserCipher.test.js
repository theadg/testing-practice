const ceaserCipher = require('./ceasarCipher');

test('a to z', () => {
  expect(
    ceaserCipher('a b c d e f g h i j k l m n o p q r s t u v w x y z', 1)
  ).toBe('b c d e f g h i j k l m n o p q r s t u v w x y z a');
});

test('A to Z', () => {
  expect(
    ceaserCipher(
      'a b c d e f g h i j k l m n o p q r s t u v w x y z'.toUpperCase(),
      1
    )
  ).toBe('B C D E F G H I J K L M N O P Q R S T U V W X Y Z A');
});

test('punctuations', () => {
  expect(ceaserCipher('! @ #  $ % ^ & * ( )', 1)).toBe('! @ #  $ % ^ & * ( )');
});
