// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:

    let acumulador;
    return acumulador = 1+2+3+4+5+6+7+8+9+10;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  let array2 = [];
    for(let i = 0; i < array.length; i++){
       if(array[i] % 2 == 0){
       array2.push(array[i]);
    }
  }
  return array2;

}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  let arrayNuevo = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 0){
      arrayNuevo.push(array[i] ** 2);
    }
  }
  return arrayNuevo;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:

  let suma = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] > 0){
      suma = suma + array[i];
    }
  }
  return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:

  return num.toString().length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
