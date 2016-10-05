class ArbolGeneral {
  static getClassName() {
    return 'ArbolGeneral';
  }

  constructor(dato) {
    this.raiz = new NodoGeneral(dato);
  }

  getRaiz() {
    return this.raiz;
  }

  getDatoRaiz() {
    return this.getRaiz().getDato();
  }

  getHijos() {
    var lista = new ListaEnlazadaGenerica();
    var hijos = this.getRaiz().getHijos();
    hijos.comenzar();

    while (!hijos.fin())
      lista.agregarFinal(hijos.proximo());

    return lista;
  }

  agregarHijo(unArbol) {
    this.raiz.getHijos().agregarFinal(unArbol);
  }

  eliminarHijo(arbolAEliminar) {
    var ok = false;

    var listaHijos = this.getRaiz().getHijos();
    listaHijos.comenzar();

    while (!listaHijos.fin() && !ok) {
      var hijoTemp = listaHijos.proximo();

      if (hijoTemp.getDatoRaiz() == (arbolAEliminar.getDatoRaiz()))
        ok = listaHijos.eliminar(arbolAEliminar);
    }

    return ok;
  }

  altura() {
    if (this.esHoja()) {
      return 0;
    } else {
      var max = -1;
      var hijos = this.getHijos();
      hijos.comenzar();

      while (!hijos.fin()) {
        var hijo = hijos.proximo();
        var h = hijo.altura();

        if (h > max)
          max = h;
      }

      return max + 1;
    }
  }

  cant_nivel (){
    return this.altura() + 1;
  }

  nivel(dato){
    if (this.getDatoRaiz() == dato) {
      return 0;
    } else {
      var nivelActual = -1;
      var hijos = this.getHijos();
      hijos.comenzar();

      while(!hijos.fin() && nivelActual == -1) {
        var hijo = hijos.proximo();
        nivelActual = hijo.nivel(dato);
      }

      if (nivelActual == -1)
        return -1
      else
        return nivelActual + 1;
    }
  }


  ancho(){
    var maxAncho = -1;
    var anchoDeNivel = 0;
    var cola = [];
    cola.push(this);
    cola.push(null);

    while(cola.length > 1 || maxAncho == -1) {
      var elem = cola.shift(); // equivalente al cola.pop()

      if (elem != null) {
        anchoDeNivel++;
        var hijos = elem.getHijos();
        hijos.comenzar();

        while (!hijos.fin()){
          cola.push(hijos.proximo())
        }
      } else {
        cola.push(null);

        if (anchoDeNivel > maxAncho)
          maxAncho = anchoDeNivel;

        anchoDeNivel = 0;
      }
    }

    return maxAncho;
  }

  esHoja(){
    return this.raiz.getHijos().tamanio() == 0;
  }

  esVacio(){
    return this.getDatoRaiz() == null;
  }
}

// module.exports = ArbolGeneral;
