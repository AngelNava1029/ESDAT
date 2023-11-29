import { LinkedList} from '../DeteccionCiclica'


test('Detectar ciclo en una lista enlazada', () => {
  const list = new LinkedList();

  list.addNode(1);
  list.addNode(2);
  list.addNode(3);
  list.addNode(4);

  expect(list.hasCycle()).toBe(false);

  // Crear un ciclo en la lista
  list.head.next.next.next.next = list.head.next;

  expect(list.hasCycle()).toBe(true);
});