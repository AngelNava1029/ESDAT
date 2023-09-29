import { palindromo } from '../Palindromo'

describe('Suite de pruebas de la funcion palindromo() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Master Angel Nava');
  })

  it('Test 1 - debe devolver el true para el valor "radar"', () => {
    expect(palindromo('radar')).toBe(true);
  })
/*
  it('Test 2 - debe devolver el true para el valor "reconocer"', () => {
    expect(palindromo('reconocer')).toBe(true);
  })
  
  it('Test 3 - debe devolver el false para el valor "hola"', () => {
    expect(palindromo('hola')).toBe(false);
  })
  */
})
