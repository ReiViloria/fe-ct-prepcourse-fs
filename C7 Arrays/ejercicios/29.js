function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  var faltante = null
  if (numeros[0] == undefined) {
    return (null)
  }

  for (let i = 0; i < numeros.length; i++) {
    var element = numeros[i+1] - numeros[i];
    if (Math.abs(element) == 2) {
      faltante = numeros[i] + 1;
    }
    if (faltante !== null) break;
  }
    return (faltante)
}
console.log(encontrarNumeroFaltante([1, 2, 3, 4, 5, 7, 8]));
module.exports = encontrarNumeroFaltante;