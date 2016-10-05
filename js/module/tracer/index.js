'use strict';

const Tracer = require('./tracer');
const LogTracer = require('./log');
const Array1DTracer = require('./array1d');
const Array2DTracer = require('./array2d');
const ChartTracer = require('./chart');
const CoordinateSystemTracer = require('./coordinate_system');
const DirectedGraphTracer = require('./directed_graph');
const UndirectedGraphTracer = require('./undirected_graph');
const WeightedDirectedGraphTracer = require('./weighted_directed_graph');
const WeightedUndirectedGraphTracer = require('./weighted_undirected_graph');


const ArbolGeneral = require('./fi_arbol_general');
const ListaEnlazadaGenerica = require('./fi_lista_enlazada_generica');
const NodoGeneral = require('./fi_nodo_general');
const NodoGenerico = require('./fi_nodo_generico');

module.exports = {
  Tracer,
  LogTracer,
  Array1DTracer,
  Array2DTracer,
  ChartTracer,
  CoordinateSystemTracer,
  DirectedGraphTracer,
  UndirectedGraphTracer,
  WeightedDirectedGraphTracer,
  WeightedUndirectedGraphTracer,

  ArbolGeneral,
  ListaEnlazadaGenerica,
  NodoGeneral,
  NodoGenerico
};
