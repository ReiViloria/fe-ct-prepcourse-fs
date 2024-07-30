function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  
  var c = 0
  var tabla = []
  for (let index = 0; index < 11; index++) {
    c = 6 * index;
    tabla.push (c)}
    return (tabla)
}

console.log(tablaDelSeis())

module.exports = tablaDelSeis;
