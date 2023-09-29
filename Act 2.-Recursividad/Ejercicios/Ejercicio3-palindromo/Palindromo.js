function palindromo(cadena) {
  // Eliminar espacios en blanco y convertir a minúsculas
  cadena = cadena.replace(/\s/g, '').toLowerCase();

  // Caso base: una cadena vacía o de un solo carácter es un palíndromo
  if (cadena.length <= 0) {
    return true;
  }

  // Verificar si el primer y último carácter son iguales
  if (cadena[0] !== cadena[cadena.length - 1]) {
    return false;
  }

  // Llamada recursiva con la cadena sin el primer y último carácter
  console.log(cadena);
  return palindromo(cadena.slice(1, -1));
}


export { palindromo }
