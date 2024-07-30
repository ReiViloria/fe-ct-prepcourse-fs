
function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var porDos = array.map((num) => {
    return (num * 2);
  })
  return (porDos);
}

console.log(duplicarElementos([2, 5, 6, 10]));
module.exports = duplicarElementos;
