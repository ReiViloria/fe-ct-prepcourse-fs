function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  var prueba = objeto.hasOwnProperty (propiedad);
    return prueba;
  }


module.exports = tienePropiedad;
