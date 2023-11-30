const Queue = require('../EjemploDeCola');


// Test para la clase Queue
describe('Queue', () => {
  // Test para verificar el método enqueue
  it('should add elements to the queue', () => {
    const cola = new Queue();
    cola.enqueue('Elemento1');
    expect(cola.size()).toBe(1);
    expect(cola.peek()).toBe('Elemento1');
  });

  // Test para verificar el método dequeue
  it('should remove elements from the queue', () => {
    const cola = new Queue();
    cola.enqueue('Elemento1');
    cola.enqueue('Elemento2');
    const removedElement = cola.dequeue();
    expect(removedElement).toBe('Elemento1');
    expect(cola.size()).toBe(1);
  });

  // Test para verificar el método isEmpty
  it('should check if the queue is empty', () => {
    const cola = new Queue();
    expect(cola.isEmpty()).toBe(true);
    cola.enqueue('Elemento1');
    expect(cola.isEmpty()).toBe(false);
  });

  // Test para verificar el método size
  it('should return the correct size of the queue', () => {
    const cola = new Queue();
    expect(cola.size()).toBe(0);
    cola.enqueue('Elemento1');
    cola.enqueue('Elemento2');
    expect(cola.size()).toBe(2);
  });

  // Test para verificar el método peek
  it('should return the first element without removing it', () => {
    const cola = new Queue();
    cola.enqueue('Elemento1');
    cola.enqueue('Elemento2');
    expect(cola.peek()).toBe('Elemento1');
    expect(cola.size()).toBe(2);
  });
});