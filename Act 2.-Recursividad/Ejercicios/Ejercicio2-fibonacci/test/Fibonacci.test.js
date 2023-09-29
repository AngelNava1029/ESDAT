import { fibonacci } from '../Fibonacci'

describe('Suite de pruebas de la funcion fibonacci() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Master Angel Nava');
  })
  test('Fibonacci de 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  
  test('Fibonacci de 1 debe ser 1', () => {
    expect(fibonacci(1)).toBe(1);
  });
  
  test('Fibonacci de 10 debe ser 55', () => {
    expect(fibonacci(10)).toBe(55);
  });
  
  test('Fibonacci de 15 debe ser 610', () => {
    expect(fibonacci(15)).toBe(610);
  });
  
  test('Fibonacci de 20 debe ser 6765', () => {
    expect(fibonacci(20)).toBe(6765);
  });
})
