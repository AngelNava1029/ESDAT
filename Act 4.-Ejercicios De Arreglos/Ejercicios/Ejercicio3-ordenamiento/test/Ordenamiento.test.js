import { ordenamiento} from '../Ordenamiento'


describe('ordenamiento', () => {
    it('Ordena un array de números en orden ascendente', () => {
      const inputArray = [64, 34, 25, 12, 22, 11, 90];
      const sortedArray = ordenamiento(inputArray);
      expect(sortedArray).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });
  
    it('Ordena un array de cadenas en orden alfabético', () => {
      const inputArray = ['banana', 'apple', 'orange', 'cherry'];
      const sortedArray = ordenamiento(inputArray);
      expect(sortedArray).toEqual(['apple', 'banana', 'cherry', 'orange']);
    });
  
    it('Ordena un array de números en orden ascendente incluso si hay duplicados', () => {
      const inputArray = [5, 2, 8, 2, 1, 5, 9];
      const sortedArray = ordenamiento(inputArray);
      expect(sortedArray).toEqual([1, 2, 2, 5, 5, 8, 9]);
    });  
});