const LinkedList = require('../ListaEnlazadaUnica');


describe('LinkedList', () => {
  test('debería añadir elementos a la lista y devolver la longitud correcta', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.length()).toBe(3);
  });

  test('debería devolver longitud cero para una lista vacía', () => {
    const linkedList = new LinkedList();

    expect(linkedList.length()).toBe(0);
  });

  test('debería manejar correctamente una lista con un solo elemento', () => {
    const linkedList = new LinkedList();

    linkedList.append(42);

    expect(linkedList.length()).toBe(1);
  });

  test('debería devolver la longitud correcta después de eliminar elementos', () => {
    const linkedList = new LinkedList();

    linkedList.append(5);
    linkedList.append(10);
    linkedList.append(15);

    linkedList.head = linkedList.head.next; // Eliminar el primer elemento

    expect(linkedList.length()).toBe(2);
  });
});