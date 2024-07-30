function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  
  if (Array.isArray (arr) && arr[0] !== undefined) {
    return (true)
  }
    return (false)
}
console.log(esArrayNoVacio());
module.exports = esArrayNoVacio;