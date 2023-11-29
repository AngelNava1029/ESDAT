class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  hasCycle() {
    const visitedNodes = new Set();
    let current = this.head;

    while (current) {
      if (visitedNodes.has(current)) {
        return true; // Hay un ciclo
      }

      visitedNodes.add(current);
      current = current.next;
    }

    return false; // No hay ciclo
  }
}
export { LinkedList }
