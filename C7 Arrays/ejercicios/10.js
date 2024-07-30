function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
string= array [0]
arrayMasDeCinco = []
i=0

for (let index = 0; index < array.length; index++) {
    var string = array[index]; 
    if (string.length > 4){
        arrayMasDeCinco.push(string); 
}
}
return (arrayMasDeCinco[0]);
}

module.exports = obtenerPrimerStringLargo;
