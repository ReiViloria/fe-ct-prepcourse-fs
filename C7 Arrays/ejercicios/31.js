function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var textoseparado = texto.split ('');
  var textoInvertidoSeparado = textoseparado.reverse();
  var textoInvertido = textoInvertidoSeparado.join('');
    return (textoInvertido);
}
console.log(invertirTexto('carapellato'));
module.exports = invertirTexto;
