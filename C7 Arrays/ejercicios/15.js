function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  Math.max(...array)
  
  if (Math.max(...array) == -Infinity || Math.max(...array) == Infinity ){
    return (0);
  }
  
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === Math.max(...array)){

    return (index);}
  }
}


module.exports = encontrarIndiceMayor;
