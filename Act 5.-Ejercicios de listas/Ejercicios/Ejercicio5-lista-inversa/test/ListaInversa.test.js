const { reverseLinkedList, ListNode } = require('../ListaInversa');

describe('reverseLinkedList', () => {
  test('Invierte una lista enlazada', () => {
    const originalList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
    const reversedList = reverseLinkedList(originalList);

    expect(reversedList.val).toBe(4);
    expect(reversedList.next.val).toBe(3);
    expect(reversedList.next.next.val).toBe(2);
    expect(reversedList.next.next.next.val).toBe(1);
    expect(reversedList.next.next.next.next).toBeNull();
  });
});