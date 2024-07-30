function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
num= array [0]
numMayoresA10 = []
i=0

for (let index = 0; index < array.length; index++) {
    num = array[index]; 
    if (num > 10 ){
        numMayoresA10.push(num); 
}
}
return (numMayoresA10.length);
}

module.exports = contarElementosMayoresA10;
