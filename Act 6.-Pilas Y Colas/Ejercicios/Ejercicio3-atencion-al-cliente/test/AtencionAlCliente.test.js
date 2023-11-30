import { atencionAlCliente,Queue } from '../AtencionAlCliente';


describe('atencionAlCliente', () => {
  test('atiende a los clientes en orden de llegada', () => {
    const customerQueue = new Queue();
    customerQueue.enqueue("Cliente 1");
    customerQueue.enqueue("Cliente 2");
    customerQueue.enqueue("Cliente 3");

    const atendidos = atencionAlCliente(customerQueue);

    expect(atendidos).toEqual(["Cliente 1", "Cliente 2", "Cliente 3"]);
  });

  test('funciona correctamente con una cola vacía', () => {
    const customerQueue = new Queue();

    const atendidos = atencionAlCliente(customerQueue);

    expect(atendidos).toEqual([]);
  });

  test('atiende a los clientes en orden incluso después de agregar más clientes', () => {
    const customerQueue = new Queue();
    customerQueue.enqueue("Cliente 1");
    customerQueue.enqueue("Cliente 2");
    customerQueue.enqueue("Cliente 3");

    const atendidos = atencionAlCliente(customerQueue);

    // Añadir más clientes después de la atención inicial
    customerQueue.enqueue("Cliente 4");
    customerQueue.enqueue("Cliente 5");

    atendidos.push(customerQueue.dequeue());
    atendidos.push(customerQueue.dequeue());

    expect(atendidos).toEqual(["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4", "Cliente 5"]);
  });
});