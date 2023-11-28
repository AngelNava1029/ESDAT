import { addTwoNumbers, ListNode} from '../AgregarDosNumeros'


function arrayToListNode(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
  
    for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
    }
  
    return dummyHead.next;
  }
  
  // Función auxiliar para convertir una lista enlazada a un array
  function listNodeToArray(head) {
    let result = [];
    let current = head;
  
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Test Jest
  describe('Invertir Array', () => {
    it('Suma dos números representados como listas enlazadas', () => {
        // Caso de prueba 1
        let l1 = arrayToListNode([2, 4, 3]);
        let l2 = arrayToListNode([5, 6, 4]);
        let expectedResult = [7, 0, 8];
        expect(listNodeToArray(addTwoNumbers(l1, l2))).toEqual(expectedResult);
    });

    it('Suma dos números representados como listas enlazadas', () => {
        // Caso de prueba 2
        
        let l1 = arrayToListNode([9, 9, 9, 9]);
        let l2 = arrayToListNode([9, 9, 9]);
        let expectedResult = [8, 9, 9, 0, 1];
        expect(listNodeToArray(addTwoNumbers(l1, l2))).toEqual(expectedResult);
    });
   
    it('Suma dos números representados como listas enlazadas', () => {
        // Puedes agregar más casos de prueba según sea necesario
        let l1 = arrayToListNode([]);
        let l2 = arrayToListNode([]);
        expect(listNodeToArray(addTwoNumbers(l1, l2))).toEqual([]);
    });
  });