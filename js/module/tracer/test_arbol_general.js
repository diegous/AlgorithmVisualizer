/// Helper functions

test = function(actual, expected, testName) {
  if (expected == actual)
    message = "    BIEN: "+testName
  else
    message = "==> ERROR: "+testName+": vino '"+actual+"' en lugar de '"+expected+"'"

  console.log(message)
}

hijos_incluye = (padre, arbol) => { return padre.getHijos().incluye(arbol) }

// POPULATION
/*
  Arbol a usar:

nvl-1:          1
nvl-2:    2     3     4
nvl-3:    5   6 7 8
nvl-4:          9
*/
tree = new ArbolGeneral(1)
a2 = new ArbolGeneral(2)
a3 = new ArbolGeneral(3)
a4 = new ArbolGeneral(4)
a5 = new ArbolGeneral(5)
a6 = new ArbolGeneral(6)
a7 = new ArbolGeneral(7)
a8 = new ArbolGeneral(8)
a9 = new ArbolGeneral(9)

 //////////////////////////
// ------- TEST ------- //

// ------- TEST agregarHijo
currentTest = "agregarHijo"
// 1 -> (2,3,4)
tree.agregarHijo(a2)
tree.agregarHijo(a3)
tree.agregarHijo(a4)

test(hijos_incluye(tree, a2), true, currentTest+"-2")
test(hijos_incluye(tree, a3), true, currentTest+"-3")
test(hijos_incluye(tree, a4), true, currentTest+"-4")

// 2 -> (5)
a2.agregarHijo(a5)
test(hijos_incluye(a2, a5), true, currentTest+"-5")

// 3 -> (6,7,8)
a3.agregarHijo(a6)
a3.agregarHijo(a7)
a3.agregarHijo(a8)

test(hijos_incluye(a3, a6), true, currentTest+"-6")
test(hijos_incluye(a3, a7), true, currentTest+"-7")
test(hijos_incluye(a3, a8), true, currentTest+"-8")

// 7 -> (9)
a7.agregarHijo(a9)
test(hijos_incluye(a7, a9), true, currentTest+"-9")


// ------- TEST getRaiz
test(tree.getRaiz(), tree.raiz, "getRaiz-1")
test(a2.getRaiz(), a2.raiz, "getRaiz-2")
test(a3.getRaiz(), a3.raiz, "getRaiz-3")

// ------- TEST getDatoRaiz
test(tree.getDatoRaiz(), 1, "getDatoRaiz-1")
test(a2.getDatoRaiz(), 2, "getDatoRaiz-2")
test(a3.getDatoRaiz(), 3, "getDatoRaiz-3")

// ------- TEST getHijos
var listaHijos = tree.getHijos()
listaHijos.comenzar()

test(listaHijos.proximo(), a2, "getHijos-2")
test(listaHijos.proximo(), a3, "getHijos-3")
test(listaHijos.proximo(), a4, "getHijos-4")

// ------- TEST eliminarHijo
test(tree.eliminarHijo(a4), true, "eliminarHijo-true")
test(tree.eliminarHijo(a4), false, "eliminarHijo-false")
test(hijos_incluye(a4), false, "eliminarHijo-incluye")

// ------- TEST altura
test(tree.altura(), 3, "altura-tree")
test(a3.altura(), 2, "altura-a3")
test(a9.altura(), 0, "altura-a9")

// ------- TEST nivel
test(tree.nivel(1), 0, "nivel-1")
test(tree.nivel(3), 1, "nivel-3")
test(tree.nivel(7), 2, "nivel-7")
test(tree.nivel(9), 3, "nivel-9")

// ------- TEST ancho
test(tree.ancho(), 4, "ancho")
test(a3.ancho(), 3, "ancho")
test(a9.ancho(), 1, "ancho")

// ------- TEST esHoja
test(tree.esHoja(), false, "esHoja1")
test(a4.esHoja(), true, "esHoja4")

// ------- TEST esVacio
test(tree.esVacio(), false, "esVacio")
