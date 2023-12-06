class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

class ArbolBinario {
  constructor() {
    this.raiz = null;
  }

  insertar(valor) {
    const nuevoNodo = new Nodo(valor);

    if (this.raiz === null) {
      this.raiz = nuevoNodo;
    } else {
      this.insertarNodo(this.raiz, nuevoNodo);
    }
  }

  insertarNodo(nodo, nuevoNodo) {
    if (nuevoNodo.valor < nodo.valor) {
      if (nodo.izquierda === null) {
        nodo.izquierda = nuevoNodo;
      } else {
        this.insertarNodo(nodo.izquierda, nuevoNodo);
      }
    } else {
      if (nodo.derecha === null) {
        nodo.derecha = nuevoNodo;
      } else {
        this.insertarNodo(nodo.derecha, nuevoNodo);
      }
    }
  }

  // Método de búsqueda
  buscar(valor) {
    return this.buscarNodo(this.raiz, valor);
  }

  buscarNodo(nodo, valor) {
    if (nodo === null) {
      return null; // El valor no está en el árbol
    }

    if (valor === nodo.valor) {
      return nodo; // Encontrado
    } else if (valor < nodo.valor) {
      return this.buscarNodo(nodo.izquierda, valor);
    } else {
      return this.buscarNodo(nodo.derecha, valor);
    }
  }
}

// Ejemplo de uso
const arbol = new ArbolBinario();
arbol.insertar(5);
arbol.insertar(3);
arbol.insertar(7);
arbol.insertar(2);
arbol.insertar(4);
arbol.insertar(6);
arbol.insertar(8);

console.log("Árbol completo:");
console.log(arbol);

console.log("\nBuscando el valor 4 en el árbol:");
console.log(arbol.buscar(4));

console.log("\nBuscando el valor 9 en el árbol:");
console.log(arbol.buscar(9));

export{ArbolBinario  }
