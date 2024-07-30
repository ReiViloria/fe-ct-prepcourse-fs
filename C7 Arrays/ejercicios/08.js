function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   array.includes (num);
   if (array.includes (num) == true){
      return (array.indexOf(num))
   } 
   return (-1)
}
console.log (encontrarElemento(3, [2, 5 , 3 , -1]))
module.exports = encontrarElemento;
