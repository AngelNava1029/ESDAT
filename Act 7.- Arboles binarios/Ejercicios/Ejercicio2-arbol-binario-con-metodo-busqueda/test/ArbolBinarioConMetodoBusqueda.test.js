import {ArbolBinario } from '../ArbolBinarioConMetodoBusqueda';

describe('ArbolBinario', () => {
  test('Debe insertar y buscar valores correctamente', () => {
    const arbol = new ArbolBinario();
    
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(7);
    arbol.insertar(2);
    arbol.insertar(4);
    arbol.insertar(6);
    arbol.insertar(8);

    // Prueba de búsqueda exitosa
    expect(arbol.buscar(4)).toEqual(expect.objectContaining({ valor: 4 }));

    // Prueba de búsqueda sin éxito
    expect(arbol.buscar(9)).toBeNull();
  });

  test('Debe manejar árbol vacío', () => {
    const arbol = new ArbolBinario();

    // El árbol está vacío, por lo que la búsqueda debería devolver null
    expect(arbol.buscar(5)).toBeNull();
  });

  test('Debe manejar inserción y búsqueda de valores repetidos', () => {
    const arbol = new ArbolBinario();

    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(7);
    arbol.insertar(5); // Insertar un valor repetido

    // La búsqueda debería devolver el primer nodo con el valor 5
    expect(arbol.buscar(5)).toEqual(expect.objectContaining({ valor: 5 }));
  });
});