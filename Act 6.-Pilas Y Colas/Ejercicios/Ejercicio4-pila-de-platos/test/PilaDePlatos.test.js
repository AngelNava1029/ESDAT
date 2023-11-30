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
    expect(plateStack.pop()).toBe("La pila está vacía");
    expect(plateStack.isEmpty()).toBe(true);
    expect(plateStack.size()).toBe(0);
  });
});