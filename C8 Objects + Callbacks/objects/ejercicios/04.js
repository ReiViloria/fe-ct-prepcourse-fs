function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:
   var dato = objeto.hasOwnProperty (propiedad);
   return (dato);
}

module.exports = verificarPropiedad;
