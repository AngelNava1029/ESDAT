// Implementación de una cola utilizando un arreglo
class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.elements[0];
  }
}

// Uso de la cola
let cola = new Queue();

// Agregar elementos a la cola
cola.enqueue("Manzana");
cola.enqueue("Banana");
cola.enqueue("Naranja");

// Obtener el primer elemento de la cola (sin eliminarlo)
console.log(cola.peek()); // Imprime "Manzana"

// Eliminar y obtener el primer elemento de la cola
let elementoEliminado = cola.dequeue();
console.log(elementoEliminado); // Imprime "Manzana"

// Verificar si la cola está vacía
console.log(cola.isEmpty()); // Imprime false

// Obtener el tamaño de la cola
console.log(cola.size()); // Imprime 2

module.exports = Queue;
