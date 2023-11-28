import { DoublyLinkedList } from '../ListaDoblementeEnlazada';

describe('DoublyLinkedList', () => {
  test('Append nodes to the list', () => {
    const list = new DoublyLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(3);
    expect(list.tail.data).toBe(3);
    expect(list.tail.prev.data).toBe(2);
  });

  test('Delete nodes from the list', () => {
    const list = new DoublyLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    // Delete a middle node
    list.delete(2);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(3);
    expect(list.tail.data).toBe(3);

    // Delete the last node
    list.delete(3);
    expect(list.head.data).toBe(1);
    expect(list.head.next).toBeNull();
    expect(list.tail.data).toBe(1);

    // Delete the only remaining node
    list.delete(1);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });
});