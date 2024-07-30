function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var c = 0
  for (let index = 0; index < secuencia.length; index++) {
    c = secuencia[index];
    if (secuencia[index] % n === 0) break;
}
if (c % n === 0){
  return (c)}
  
}

module.exports = encontrarPrimerMultiploDeN;