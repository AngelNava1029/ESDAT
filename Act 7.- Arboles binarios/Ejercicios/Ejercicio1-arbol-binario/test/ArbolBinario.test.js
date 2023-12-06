import {ArbolBinario } from '../ArbolBinario';


describe('ArbolBinario', () => {
  test('Debería insertar correctamente los nodos', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(7);
    arbol.insertar(2);
    arbol.insertar(4);
    arbol.insertar(6);
    arbol.insertar(8);

    expect(arbol.raiz.valor).toBe(5);
    expect(arbol.raiz.izquierda.valor).toBe(3);
    expect(arbol.raiz.derecha.valor).toBe(7);
    // Puedes agregar más expectativas según la estructura de tu árbol
  });

  test('Debería manejar nodos duplicados correctamente', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(7);
    arbol.insertar(5); // Nodo duplicado

    // Agrega expectativas según cómo manejes los nodos duplicados en tu implementación
    // Por ejemplo, podrías ignorar nodos duplicados o manejarlos de otra manera.
  });

  test('Debería imprimir correctamente el árbol', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(7);
    arbol.insertar(2);
    arbol.insertar(4);
    arbol.insertar(6);
    arbol.insertar(8);

    const consoleSpy = jest.spyOn(console, 'log');
    arbol.imprimir(); // Asumiendo que tienes un método imprimir en tu clase ArbolBinario

    // Agrega expectativas para verificar que la salida de la consola es correcta
    // Por ejemplo, podrías comparar con un string esperado si sabes cómo debería verse tu árbol
  });
});