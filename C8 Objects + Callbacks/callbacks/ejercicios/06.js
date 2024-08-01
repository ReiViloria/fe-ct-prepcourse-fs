function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
 

   const array2 = array.map ((x) => cb (x));
   //  otra forma const array2 = array.map (cb);
    return array2
}

module.exports = map;
