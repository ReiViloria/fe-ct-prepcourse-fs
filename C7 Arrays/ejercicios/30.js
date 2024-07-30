function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  
  var numerosNoRepetidos = []
  var repetido = true
  var primerRepetido = undefined

  for (let i = 0; i < numeros.length; i++) {
        repetido = numerosNoRepetidos.includes (numeros[i]) ;
    if (repetido == false){
      numerosNoRepetidos.push(numeros[i])
    }
    else {
      primerRepetido = numeros[i]
    }
    if (primerRepetido !== undefined) break;
    }
      return (primerRepetido)
    }

   module.exports = encontrarElementoRepetido;