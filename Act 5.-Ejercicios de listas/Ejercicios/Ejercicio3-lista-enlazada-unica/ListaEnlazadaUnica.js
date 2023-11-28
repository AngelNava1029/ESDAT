// Nodo de la lista enlazada
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Lista enlazada única
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Añadir un nuevo nodo al final de la lista
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
    }
  }

  // Obtener la longitud de la lista
  length() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }
}

module.exports = LinkedList;
