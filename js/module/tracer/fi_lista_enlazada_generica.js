class ListaEnlazadaGenerica {
  // private NodoGenerico<T> inicio;
  // private NodoGenerico<T> actual;
  // private NodoGenerico<T> fin;

  // private int tamanio;
  constructor(){
    this.size = 0
    this.inicio = null
    this.actual = null
    this.ultimo = null
  }

  comenzar() {
    this.actual = this.inicio;
  }

  proximo() {
    var dato = this.actual.getDato();
    this.actual = this.actual.getSiguiente();
    return dato;
  }

  fin() {
    return (this.actual == null);
  }

  elemento(pos) {
    if (pos < 1 || pos > this.size)
      return null;
    else {
      var n = this.inicio;

      while (pos-- > 1)
        n = n.getSiguiente();

      return n.getDato();
    }
  }

  agregarEn(elem, pos) {
    if (pos < 1 || pos > (this.size + 1))
      return false;
    else {
      this.size++;
      var aux = new NodoGenerico();
      aux.setDato(elem);

      if (this.esVacia()) {
        this.inicio = aux
        this.ultimo = aux
      } else {
        if (pos == 1) {
          aux.setSiguiente(this.inicio);
          this.inicio = aux;
        } else {
          var n = this.inicio;
          var ant = null;
          var posActual = 1;

          while (!(n == null) && (posActual < pos)) {
            ant = n;
            n = n.getSiguiente();
            posActual++;
          }

          aux.setSiguiente(n);
          ant.setSiguiente(aux);

          //Nuevo
          if (aux.getSiguiente() == null)
            this.ultimo = aux;
        }
      }

      return true;
    }
  }

  agregarInicio(elem) {
    this.agregarEn(elem, 1);
    return true;
  }

  agregarFinal(elem) {
    var aux = new NodoGenerico();
    aux.setDato(elem);

    if (this.inicio == null) {
      this.inicio = aux;
      this.ultimo = aux;
    } else {
      this.ultimo.setSiguiente(aux);
      this.ultimo = aux;
    }

    this.size++;
    return true;
  }

  eliminar(elem) {
    var n = this.inicio;
    var ant = null;

    while ((n != null) && !(n.getDato() == elem)) {
      ant = n;
      n = n.getSiguiente();
    }

    if (n == null)
      return false;
    else {
      if (ant == null)
        this.inicio = null;
      else
        ant.setSiguiente(n.getSiguiente());
      this.size--;
      //Nuevo
      //if (ant.getSiguiente()==null)
      //  fin=ant;

      return true;
    }
  }

  eliminarEn(pos) {
    if (pos < 1 || pos > this.size)
      return false;
    else {
      this.size--;

      if (pos == 1) {
        this.inicio = this.inicio.getSiguiente();
        return true;
      } else {
        var n = this.inicio;
        var ant = null;

        while (!(n == null) && (pos > 1)) {
          pos--;
          ant = n;
          n = n.getSiguiente();
        }

        ant.setSiguiente(n.getSiguiente());

        //Nuevo
        if (ant.getSiguiente() == null)
          this.ultimo = ant;
        return true;
      }
    }
  }

  incluye(elem) {
    var n = this.inicio;

    while (!(n == null) && !(n.getDato() == elem))
      n = n.getSiguiente();

    return !(n == null);
  }

  toString() {
    var str = "";
    var n = this.inicio;

    while (n != null) {
      str = str + n.getDato() + " -> ";
      n = n.getSiguiente();
    }

    if (str.length() > 1)
      str = str.substring(0, str.length() - 4);
    return str;
  }

  tamanio() {
    return this.size;
  }

  esVacia() {
    return (this.inicio == null);
  }
}

// module.exports = ListaEnlazadaGenerica;
