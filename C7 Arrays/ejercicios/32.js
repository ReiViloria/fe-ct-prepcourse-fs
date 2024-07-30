function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var textoseparado = string.split ('');
  var textoInvertidoSeparado = textoseparado.reverse();
  var textoInvertido = textoInvertidoSeparado.join('');
    if (string == textoInvertido){
      return (true)
    } else {
      return (false)
    }
}
console.log(esPalindromo('ANewNA'));
module.exports = esPalindromo;