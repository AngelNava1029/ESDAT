class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// Lista doblemente enlazada
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Método para añadir un nodo al final de la lista
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Método para eliminar un nodo por valor
  delete(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        return true; // Nodo eliminado
      }

      current = current.next;
    }

    return false; // Nodo no encontrado
  }
}


export { DoublyLinkedList };