function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  var str1sep = str1.split ('')
  var str2sep = str2.split ('')
  var str3sep = str3.split ('')
  var strjunto = []

  var grande = Math.max (str1sep.length, str2sep.length, str3sep.length)

  for (let i = 0; i < grande; i++) {
    if (str1sep[i] !== undefined){
      strjunto.push (str1sep[i])
    }
    if (str2sep[i] !== undefined){
      strjunto.push (str2sep[i])
    }
    if (str3sep[i] !== undefined){
      strjunto.push (str3sep[i])
    }
  }
  
  return (strjunto.join(''))
}

console.log (combine ("abc", "12345", "67"))

module.exports = combine;