function test(actual, expected, testName) {
  if (expected == actual)
    message = "    BIEN: "+testName
  else
    message = "==> ERROR: "+testName+": vino '"+actual+"' en lugar de '"+expected+"'"

  console.log(message)
}

// POPULATION
list = new ListaEnlazadaGenerica

list.agregarInicio(2)
list.agregarInicio(1)

list.agregarFinal(4)
list.agregarFinal(5)

list.agregarEn(3,3)
list.agregarEn(6,6)

// -------------- TEST AGREGAR
list.comenzar()
i = 1

while (!list.fin()) {
  item = list.proximo()
  test(item, i, "AGREGAR-"+i)
  i++
}

// -------------- TEST TAMAÑO
test(list.tamanio(), 6, "TAMAÑO")

// -------------- TEST BORRAR
currentTest = "BORRAR-"
test(list.eliminar(3), true, currentTest+3)
test(list.eliminar(7), false, currentTest+7)

// -------------- TEST BORRAR EN
currentTest = "BORRAR-EN-"
test(list.eliminarEn(1), true, currentTest+1)
test(list.eliminarEn(3), true, currentTest+3)
test(list.eliminarEn(6), false, currentTest+6)

// -------------- TEST TAMAÑO (después de borrar)
test(list.tamanio(), 3, "TAMAÑO (despues de borrar)")

// -------------- TEST INCLUYE
currentTest = "INCLUYE-"
test(list.incluye(2), true, currentTest+2)
test(list.incluye(4), true, currentTest+4)
test(list.incluye(6), true, currentTest+6)

// -------------- TEST ELEMENTO
currentTest = "INCLUYE-"
test(list.elemento(1), 2, currentTest+2)
test(list.elemento(2), 4, currentTest+4)
test(list.elemento(3), 6, currentTest+6)

// -------------- TEST ES_VACIA
test(list.esVacia(), false, "ES_VACIA")


// -------------- TEST ES_VACIA
test((new ListaEnlazadaGenerica).esVacia(), true, "ES_VACIA")
