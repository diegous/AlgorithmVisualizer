var index = 0;

function inorder ( root , parent ) {
  logArbol.visitar(root);

  if (soyHoja(root)) {
    logText.imprimir('Llegué a una hoja: '+root);
    logArreglo.encolar(root);
  } else {
    logText.imprimir('Estoy en el nodo ' + root);

    if (T[root][0] > -1)
      inorder(T[root][0], root);

    logArreglo.encolar(root);

    if (T[root][1] > -1)
      inorder(T[root][1], root);
  }

  logArbol.abandonar(root);
}

inorder ( 5 ); // node with key 5 is the root
logger._print( 'Finiquitado' );

var soyHoja = function(root) {
  return ((T[root][0] == -1) && (T[root][1] == -1));
}


/*
TREE_TRACER
===========
treeTracer._visit(root, parent)._wait();
- Marca el nodo "root" y la arista "parent-root" como siendo visitado actualmente (rosa)

treeTracer._leave ( root );
- Marca el nodo "root" como visitado y abandonado (gris obscuro). No marca ningún vértice.

ARRAY_TRACER
============
arrayTracer._notify ( index++, root )._wait();
- Pone en el arreglo el valor de "root" en la posición "index + 1"(porque el arreglo empieza en 0)

LOGGER
======
logger._print( mensaje + root);
- Imprime mensajes (abajo)

*/

var logText = {
  imprimir: function(mensaje) { logger._print(mensaje) }
};

var logArreglo = {
  indice: 0,
  encolar: function(nodo) {
    arrayTracer._notify(this.indice++, nodo)._wait();
  }
};

var logArbol = {
  visitar: function(nodo) { treeTracer._visit(nodo)._wait() },
  abandonar: function(nodo) { treeTracer._leave(nodo) }
};

function imprimirActual(raiz) {
  logger._print( 'Printing ' + root);
  treeTracer._leave ( root );
  arrayTracer._notify ( index++, root )._wait();
};

