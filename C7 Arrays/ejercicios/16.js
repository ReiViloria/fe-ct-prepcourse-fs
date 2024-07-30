function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  arrayMultiplos = []
  array.forEach((element, index ) => { arrayMultiplos.push (element*index) });
  return(arrayMultiplos)
}

module.exports = multiplicarElementosPorIndice;
