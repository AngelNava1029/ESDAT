const { Nodo, ArbolBinario } = require('../ArbolBinarioConMetodoEliminado');

test('Insertar un nodo en el árbol', () => {
  const arbol = new ArbolBinario();
  arbol.insertar(5);
  expect(arbol.raiz).not.toBeNull();
  expect(arbol.raiz.valor).toBe(5);
});

test('Eliminar un nodo del árbol', () => {
  const arbol = new ArbolBinario();
  arbol.insertar(5);
  arbol.insertar(3);
  arbol.insertar(7);
  arbol.eliminar(3);
  expect(arbol.raiz).not.toBeNull();
  expect(arbol.raiz.valor).toBe(5);
  expect(arbol.raiz.izquierda).toBeNull();
  expect(arbol.raiz.derecha).not.toBeNull();
  expect(arbol.raiz.derecha.valor).toBe(7);
});

test('Encontrar el valor mínimo en un subárbol', () => {
  const arbol = new ArbolBinario();
  arbol.insertar(5);
  arbol.insertar(3);
  arbol.insertar(7);
  arbol.insertar(2);
  arbol.insertar(4);
  arbol.insertar(6);
  arbol.insertar(8);

  const nodo = new Nodo(7);
  nodo.izquierda = new Nodo(6);
  nodo.derecha = new Nodo(8);

  const minValor = arbol.minValorNodo(nodo);
  expect(minValor).toBe(6);
});