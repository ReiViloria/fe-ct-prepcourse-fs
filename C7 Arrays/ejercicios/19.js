
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  var multiplicacion = 1;
  if (arguments.length > 0) {
    for (let index = 0; index < arguments.length; index++) {
      multiplicacion = arguments[index]* multiplicacion;
    }
    return (multiplicacion);
  }
    return (0);
}


module.exports = multiplicarArgumentos;
