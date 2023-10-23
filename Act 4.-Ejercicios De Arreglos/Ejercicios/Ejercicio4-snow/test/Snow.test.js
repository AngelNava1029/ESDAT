import { Solution } from '../Snow';

const solution = new Solution();
const list = [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 1];

describe('Solution', () => {
  describe('colectarNieveCuadratica', () => {
    it('returns the expected result for colectarNieveCuadratica', () => {
      const expected = 18;
      const result = solution.colectarNieveCuadratica(list);
      expect(result).toEqual(expected);
    });
  });

  describe('colectarNieveLineal', () => {
    it('returns the expected result for colectarNieveLineal', () => {
      const expected = 9;
      const result = solution.colectarNieveLineal(list);
      expect(result).toEqual(expected);
    });
  });

  describe('colectarNieveBest', () => {
    it('returns the expected result for colectarNieveBest', () => {
      const expected = 6;
      const result = solution.colectarNieveBest(list);
      expect(result).toEqual(expected);
    });
  });
});