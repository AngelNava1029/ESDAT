import { reverse} from '../Reverse'


describe('Invertir Array', () => {
    it('debería invertir un array de números', () => {
      const arrayEntrada = [1, 2, 3, 4, 5];
      const arrayEsperado = [5, 4, 3, 2, 1];
      expect(reverse(arrayEntrada)).toEqual(arrayEsperado);
    });
  
    it('debería invertir un array de cadenas', () => {
      const arrayEntrada = ['manzana', 'naranja', 'plátano'];
      const arrayEsperado = ['plátano', 'naranja', 'manzana'];
      expect(reverse(arrayEntrada)).toEqual(arrayEsperado);
    });
  
    it('debería lanzar un error para una entrada que no es un array', () => {
      const entrada = 'no es un array';
      expect(() => reverse(entrada)).toThrow('La entrada no es un array');
    }); 
});