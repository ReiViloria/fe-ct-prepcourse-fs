function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
num= array [0]
numPares = []
i=0

for (let index = 0; index < array.length; index++) {
    num = array[index]; 
    if (num % 2 === 0 ){
        numPares.push(num); 
}
}
return (numPares);
}

module.exports = filtrarNumerosPares;
