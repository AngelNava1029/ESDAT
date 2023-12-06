const ArbolBinario = require('../ArbolBinarioConMetodoMover.js');

describe('Ejercicio4-arbol-binario-con-metodo-mover', () => {
  test('mover un nodo existente a una nueva posición en el árbol', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(7);
    arbol.insertar(2);
    arbol.insertar(4);
    arbol.insertar(6);
    arbol.insertar(8);

    expect(arbol.buscar(4)).toBeTruthy();

    arbol.mover(4, 9);
    expect(arbol.buscar(4)).toBeNull();
    expect(arbol.buscar(9)).toBeTruthy();
  });

  test('intentar mover un nodo que no existe no afecta al árbol', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(7);

    expect(arbol.buscar(4)).toBeNull();

    arbol.mover(4, 9);
    expect(arbol.buscar(4)).toBeNull();
    expect(arbol.buscar(9)).toBeNull();
  });

  test('mover un nodo existente a una posición que ya contiene un nodo lo reemplaza', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(7);
    arbol.insertar(2);
    arbol.insertar(4);
    arbol.insertar(6);
    arbol.insertar(8);

    expect(arbol.buscar(4)).toBeTruthy();
    expect(arbol.buscar(6)).toBeTruthy();

    arbol.mover(4, 6);
    expect(arbol.buscar(4)).toBeNull();
    expect(arbol.buscar(6)).toBeTruthy();
  });
});
