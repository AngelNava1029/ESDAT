import { binarySearch } from '../BinarySearch'

describe('Suite de pruebas de la funcion binarySearch() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Master Angel Nava');
  })

  it('Test 1 - debe devolver en el index 4 en el searchValue "5" en el arreglo [1,2,3,4,5,6,7,8,9,10]', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 5)).toBe(4);
  })

  it('Test 2 - debe devolver en el index 0 en el searchValue "1" en el arreglo [1,2,3,4,5,6,7,8,9,10]', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 1)).toBe(0);
  })
  
  it('Test 3 - debe devolver en el index 9 en el searchValue "10" en el arreglo [1,2,3,4,5,6,7,8,9,10]', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 10)).toBe(9);
  })
  
  
   // 10 se encuentra en la posición 9

})
