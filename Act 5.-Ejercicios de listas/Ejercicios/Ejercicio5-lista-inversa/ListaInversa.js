class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Invierte una lista enlazada.
 * @param {ListNode} head - Nodo inicial de la lista.
 * @return {ListNode} - Nodo cabeza de la lista invertida.
 */
function reverseLinkedList(head) {
  let prev = null;
  
  while (head !== null) {
    [head.next, head, prev] = [prev, head.next, head];
  }

  return prev;
}

// Exporta la función y la clase para que puedan ser utilizadas en los tests
module.exports = { reverseLinkedList, ListNode };