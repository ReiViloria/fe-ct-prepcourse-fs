function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  
  var suma = 0;

for (let index = 0; index < resultadosTest.length; index++) {
  suma += resultadosTest[index];
}
  promedio = suma / resultadosTest.length;
  return(promedio);
}
console.log (promedioResultadosTest([10, 15, 20]))
module.exports = promedioResultadosTest;
