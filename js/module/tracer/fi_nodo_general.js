class NodoGeneral {
  constructor(dato){
    this.dato = dato;
    this.listaHijos = new ListaEnlazadaGenerica();
  }

  getDato(){
    return this.dato;
  }

  getHijos(){
    return this.listaHijos;
  }

  setDato(dato){
    this.dato = dato;
  }

  setListaHijos(lista){
    this.listaHijos = lista;
  }
}

// module.exports = NodoGeneral;
