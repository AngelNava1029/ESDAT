class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function atencionAlCliente(customerQueue) {
  const atendidos = [];

  while (!customerQueue.isEmpty()) {
    atendidos.push(customerQueue.dequeue());
  }

  return atendidos;
}

export{atencionAlCliente,Queue }
