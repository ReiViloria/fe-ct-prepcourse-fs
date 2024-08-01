function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  
  var c = num
  var tabla = []
  for (let index = 0; index < 10; index++) {
    c = c + 2;
    tabla.push (c);
  if (c === index) break;
  }
  if (tabla.length < 10){
    return ("Se interrumpió la ejecución")
  }
  return (tabla)
}

console.log(breakStatement(50));
module.exports = breakStatement;
