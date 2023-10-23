import { diffTwoArrays} from '../DiffTwoArrays'


describe('diffTwoArrays', () => {
    
  
    it('returns an array with elements that are present in one array but not the other', () => {
      const result = diffTwoArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]);
      expect(result).toEqual([4]);
    });
  
    it('returns an empty array if both arrays are the same', () => {
      const result = diffTwoArrays([1, 2, 3], [1, 2, 3]);
      expect(result).toEqual([]);
    });
  
    it('returns an array with elements from both arrays that are not present in the other', () => {
      const result = diffTwoArrays([1, 2, 3, 4], [1, 2, 3, 5]);
      expect(result).toEqual([4, 5]);
    });
  
    it('returns an array with all elements if the arrays have no common elements', () => {
      const result = diffTwoArrays([1, 2, 3], [4, 5, 6]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });