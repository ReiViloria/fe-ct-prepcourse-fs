function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var mayusculas = array.map((string) => {
    return (string.toUpperCase());
  })
  return (mayusculas);
}
console.log(convertirStringAMayusculas(['casa','edificio', 'construccion', 'etc']));
module.exports = convertirStringAMayusculas;
