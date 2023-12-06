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

  eliminar(valor) {
    this.raiz = this.eliminarNodo(this.raiz, valor);
  }

  eliminarNodo(nodo, valor) {
    if (nodo === null) {
      return null;
    }

    if (valor < nodo.valor) {
      nodo.izquierda = this.eliminarNodo(nodo.izquierda, valor);
    } else if (valor > nodo.valor) {
      nodo.derecha = this.eliminarNodo(nodo.derecha, valor);
    } else {
      if (nodo.izquierda === null) {
        return nodo.derecha;
      } else if (nodo.derecha === null) {
        return nodo.izquierda;
      }

      nodo.valor = this.minValorNodo(nodo.derecha);
      nodo.derecha = this.eliminarNodo(nodo.derecha, nodo.valor);
    }

    return nodo;
  }

  minValorNodo(nodo) {
    let actual = nodo;
    while (actual.izquierda !== null) {
      actual = actual.izquierda;
    }
    return actual.valor;
  }
}

module.exports = { Nodo, ArbolBinario };
