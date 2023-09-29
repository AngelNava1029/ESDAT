function floodFill(matrix, startX, startY, newColor, originalColor) {
  // Verificar los límites de la matriz y si el color actual coincide con el color original
  if (
    startX < 0 ||
    startX >= matrix.length ||
    startY < 0 ||
    startY >= matrix[0].length ||
    matrix[startX][startY] !== originalColor
  ) {
    return;
  }

  // Cambiar el color actual al nuevo color
  matrix[startX][startY] = newColor;

  // Llamar a la función recursivamente para los 4 vecinos
  floodFill(matrix, startX + 1, startY, newColor, originalColor); // Derecha
  floodFill(matrix, startX - 1, startY, newColor, originalColor); // Izquierda
  floodFill(matrix, startX, startY + 1, newColor, originalColor); // Abajo
  floodFill(matrix, startX, startY - 1, newColor, originalColor); // Arriba
}
export {floodFill}
