function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  //var comparacion = array [0];
  
  var comparacion = array [0]
  var confirmar = array.every((n) => n == comparacion)
  return (confirmar)
  
}



module.exports = todosIguales;
