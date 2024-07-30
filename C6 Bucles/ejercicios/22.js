function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  otro = 0
  i = 0
  do {
    i=i+1;
    otro = num + 5*i;
  } while (i < 8);
  return (otro);
}
console.log(doWhile(10));
module.exports = doWhile;