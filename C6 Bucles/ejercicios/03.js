function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x === y) {
    return (x);
  } 
  return (Math.max(x, y));
}
console.log(obtenerMayor(5, -5));
module.exports = obtenerMayor;
