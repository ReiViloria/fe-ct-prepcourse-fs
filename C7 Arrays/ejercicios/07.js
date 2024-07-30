function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
 array.sort((a, b) => a - b);
 array.sort();
  return (array);
}
console.log (ordenarArray([1, 2, 3, 10, 25, -2]))
module.exports = ordenarArray;
