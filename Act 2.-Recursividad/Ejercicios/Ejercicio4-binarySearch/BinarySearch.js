function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // El elemento no se encuentra en el arreglo
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Se encontró el elemento en la posición 'mid'
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right); // Buscar en la mitad derecha
  } else {
    return binarySearch(arr, target, left, mid - 1); // Buscar en la mitad izquierda
  }
}

export { binarySearch }
