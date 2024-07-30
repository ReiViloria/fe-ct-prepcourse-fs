function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  suma = 0
  for (var i = 1 ; i < n+1; i++){
    suma = suma + i;
  }
  return (suma);
}
console.log(sumarHastaN(3));

module.exports = sumarHastaN;
