import {floodFill} from '../FloodFill';

describe('Suite de pruebas de la funcion floodFill() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Master Angel Nava');
  })
  test("Flood Fill", () => {
    const matrix = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
  
    const startX = 1;
    const startY = 1;
    const newColor = 2;
  
    // Llamamos a la función de relleno de inundación
    floodFill(matrix, startX, startY, newColor, matrix[startX][startY]);
  
    // Verificamos si la matriz se ha llenado correctamente
    expect(matrix).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);
  });
})
