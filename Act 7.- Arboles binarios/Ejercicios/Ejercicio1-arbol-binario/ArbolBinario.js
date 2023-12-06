class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
 }
 
 
 // Clase que representa el árbol binario
 class ArbolBinario {
  constructor() {
    this.raiz = null;
  }
  imprimir() {
    this.imprimirNodo(this.raiz);
  }

  // Método auxiliar para imprimir nodos recursivamente
  imprimirNodo(nodo) {
    if (nodo !== null) {
      this.imprimirNodo(nodo.izquierda);
      console.log(nodo.valor);
      this.imprimirNodo(nodo.derecha);
    }
  }
 
  // Método para insertar un nuevo nodo en el árbol
  insertar(valor) {
    const nuevoNodo = new Nodo(valor);
 
 
    if (this.raiz === null) {
      this.raiz = nuevoNodo;
    } else {
      this.insertarNodo(this.raiz, nuevoNodo);
    }
  }
 
 
  // Método auxiliar para insertar un nodo en una posición específica del árbol
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
 
 
 console.log(arbol);

 export{ArbolBinario  }
