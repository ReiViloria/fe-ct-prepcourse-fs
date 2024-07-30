function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var suma = 0;

for (let index = 0; index < arrayOfNums.length; index++) {
  suma += arrayOfNums[index];
}

return(suma);
}

module.exports = agregarNumeros;
