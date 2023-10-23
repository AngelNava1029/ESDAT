function reverse(arr) {
    // Verificar si arr es un array
    if (!Array.isArray(arr)) {
      throw new Error('La entrada no es un array');
    }
  
    // Crear una copia del array original para no mutarlo
    const arrayInvertido = [...arr];
  
    // Invertir el array
    arrayInvertido.reverse();
  
    return arrayInvertido;
  }
export { reverse }
