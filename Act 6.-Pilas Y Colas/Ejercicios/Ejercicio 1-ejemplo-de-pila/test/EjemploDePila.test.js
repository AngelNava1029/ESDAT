const Stack = require('../EjemploDePila');


describe('Stack', () => {
  // Test para el método push
  test('debería agregar un elemento a la pila', () => {
    const pila = new Stack();
    pila.push("Elemento");
    expect(pila.size()).toBe(1);
  });

  // Test para el método pop
  test('debería eliminar y devolver el elemento superior de la pila', () => {
    const pila = new Stack();
    pila.push("Elemento");
    const elementoEliminado = pila.pop();
    expect(elementoEliminado).toBe("Elemento");
    expect(pila.isEmpty()).toBe(true);
  });

  // Test para el método peek
  test('debería devolver el elemento superior de la pila sin eliminarlo', () => {
    const pila = new Stack();
    pila.push("Elemento");
    const elementoEnLaCima = pila.peek();
    expect(elementoEnLaCima).toBe("Elemento");
    expect(pila.size()).toBe(1);
  });

  // Test para el método isEmpty
  test('debería devolver true si la pila está vacía', () => {
    const pila = new Stack();
    expect(pila.isEmpty()).toBe(true);
  });

  // Test para el método size
  test('debería devolver el tamaño correcto de la pila', () => {
    const pila = new Stack();
    pila.push("Elemento1");
    pila.push("Elemento2");
    expect(pila.size()).toBe(2);
  });
});