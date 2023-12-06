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
    this.raiz = this._insertar(this.raiz, valor);
  }

  _insertar(nodo, valor) {
    if (nodo === null) {
      return new Nodo(valor);
    }

    if (valor < nodo.valor) {
      nodo.izquierda = this._insertar(nodo.izquierda, valor);
    } else if (valor > nodo.valor) {
      nodo.derecha = this._insertar(nodo.derecha, valor);
    }

    return nodo;
  }

  buscar(valor) {
    return this._buscar(this.raiz, valor);
  }

  _buscar(nodo, valor) {
    if (nodo === null || nodo.valor === valor) {
      return nodo;
    }

    if (valor < nodo.valor) {
      return this._buscar(nodo.izquierda, valor);
    } else {
      return this._buscar(nodo.derecha, valor);
    }
  }

  eliminar(valor) {
    this.raiz = this._eliminar(this.raiz, valor);
  }

  _eliminar(nodo, valor) {
    if (nodo === null) {
      return nodo;
    }

    if (valor < nodo.valor) {
      nodo.izquierda = this._eliminar(nodo.izquierda, valor);
    } else if (valor > nodo.valor) {
      nodo.derecha = this._eliminar(nodo.derecha, valor);
    } else {
      if (nodo.izquierda === null) {
        return nodo.derecha;
      } else if (nodo.derecha === null) {
        return nodo.izquierda;
      }

      nodo.valor = this._encontrarMinimoValor(nodo.derecha);
      nodo.derecha = this._eliminar(nodo.derecha, nodo.valor);
    }

    return nodo;
  }

  _encontrarMinimoValor(nodo) {
    let minimo = nodo.valor;
    while (nodo.izquierda !== null) {
      minimo = nodo.izquierda.valor;
      nodo = nodo.izquierda;
    }
    return minimo;
  }

  mover(valor, nuevoValor) {
    const nodo = this._buscar(this.raiz, valor);

    if (nodo !== null) {
      this.eliminar(valor);
      this.insertar(nuevoValor);
    }
  }
}

module.exports = ArbolBinario;