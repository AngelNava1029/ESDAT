import { letterCombinations } from '../LetterCombinations'

describe('Suite de pruebas de la funcion binarySearch() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Master Angel Nava');
  })
  test('Letter combinations for "23"', () => {
    const result = letterCombinations('23');
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    expect(result).toEqual(expected);
  });
  
  test('Letter combinations for "7"', () => {
    const result = letterCombinations('7');
    const expected = ['p', 'q', 'r', 's'];
    expect(result).toEqual(expected);
  });
  
  test('Letter combinations for empty string', () => {
    const result = letterCombinations('');
    const expected = [];
    expect(result).toEqual(expected);
  });

})
