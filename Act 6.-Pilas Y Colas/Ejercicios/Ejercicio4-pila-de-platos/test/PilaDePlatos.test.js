import { Stack } from '../PilaDePlatos';

describe("Ejercicio4-pila-de-platos", () => {
  test("La pila de platos funciona correctamente", () => {
    const plateStack = new Stack();

    // Llegada de platos a la pila
    plateStack.push("Plato 1");
    plateStack.push("Plato 2");
    plateStack.push("Plato 3");

    // Retirar los platos de la pila en orden inverso
    expect(plateStack.pop()).toBe("Plato 3");
    expect(plateStack.pop()).toBe("Plato 2");
    expect(plateStack.pop()).toBe("Plato 1");

    // Verificar si la pila está vacía después de retirar todos los platos
    expect(plateStack.isEmpty()).toBe(true);

    // Verificar que el tamaño de la pila sea 0 después de retirar todos los platos
    expect(plateStack.size()).toBe(0);
  });
});
describe("Ejercicio4-pila-de-platos", () => {
  test("Intentar retirar un plato de una pila vacía", () => {
    const plateStack = new Stack();

    // Intentar retirar un plato de la pila vacía
    expect(plateStack.pop()).toBe("La pila está vacía");

    // Verificar que la pila sigue estando vacía
    expect(plateStack.isEmpty()).toBe(true);

    // Verificar que el tamaño de la pila sigue siendo 0
    expect(plateStack.size()).toBe(0);
  });
});
describe("Ejercicio4-pila-de-platos", () => {
  test("Verificar tamaño de la pila después de agregar y retirar elementos", () => {
    const plateStack = new Stack();

    // Agregar platos a la pila
    plateStack.push("Plato 1");
    plateStack.push("Plato 2");

    // Verificar que el tamaño de la pila sea 2 después de agregar dos platos
    expect(plateStack.size()).toBe(2);

    // Retirar un plato de la pila
    plateStack.pop();

    // Verificar que el tamaño de la pila sea 1 después de retirar un plato
    expect(plateStack.size()).toBe(1);
  });
});