/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/  // npm run jest extraExercises.test.js

const sort = require("../C8 Objects + Callbacks/objects/ejercicios/07");

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  
  
  var arraygrande = [];
  var array2 = [];
  for (const key in objeto) {
    array2.push (key, objeto[key]);
    arraygrande.push (array2);
    array2 = [];
  }
  return arraygrande
 
  // OTRO METODO
  // var array = Object.keys (objeto) ;
 // var arraygrande = [];
 // var array2 = []; 
 // i = 0
  //while (i < array.length) {
   // propiedad = array[i];
 //   array2.push (array[i], objeto[propiedad]);
   // arraygrande.push (array2);
  //  array2 = [];
  //  i++;
  //}
  // return arraygrande
   
}


function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

    var array = string.split('').sort();
    var primero = array[0]
    var objeto = {}
    objeto[primero] = 1
    var j=1

    for (let i = 1; i < array.length; i++) {
        elemento = array[i]  
      if (elemento == array [i-1]){
        objeto[elemento] = j+1;
        j = j+1;
      } else {
        j = 1
        objeto[elemento] = j
        
      }
      
    }

    return (objeto)

}
  

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  

   var array = string.split('')
   var array2 = []
   var array3 = []
   for (let i = 0; i < array.length; i++) {
      if  (array[i] == array[i].toUpperCase()){
        array2.push (array[i])
      } else {
        array3.push (array[i])
      }
        
      }
   var arrayFinal = array2.concat(array3)
   return arrayFinal.join('')
}




function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  array = frase.split(' ')
  array2 = []
  for (let i = 0; i < array.length; i++) {
      array2.push(array[i].split('').reverse().join(''));
    
  }

  return array2.join (' ')
}




function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  numero2 = numero.toString().split('').reverse().join('')
  
  if(numero2 == numero) {
    return "Es capicua"
  }
    return "No es capicua"

}



function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  array = string.split('')
  array2 = []
  for (let i = 0; i < array.length; i++) {
    if(array[i] !== 'a' && array[i] !== 'b' && array[i] !== 'c'){
      array2.push (array[i])
    };
  }
    return array2.join('')
}



function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  var orden = arrayOfStrings.sort ((a, b) => a.length - b.length)
  return orden

}



function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  var arrayInter = [];
  for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])){
        arrayInter.push (array1[i]);
      }
    
  }
  
  return (arrayInter)
      
    

}
console.log(buscoInterseccion ([1, 2, 3], [1, 5, 8, 3]));



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
