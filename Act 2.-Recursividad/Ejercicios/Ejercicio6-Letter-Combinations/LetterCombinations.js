function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const combinations = [];

  function generateCombination(current, index) {
    if (index === digits.length) {
      combinations.push(current);
      return;
    }

    const digit = digits[index];
    const letters = digitMap[digit];

    for (let i = 0; i < letters.length; i++) {
      generateCombination(current + letters[i], index + 1);
    }
  }

  generateCombination('', 0);
  return combinations;
}

export { letterCombinations }
