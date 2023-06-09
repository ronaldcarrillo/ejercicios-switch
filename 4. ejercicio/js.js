'use strict'
/*En este caso, el switch case se utiliza para convertir una calificación numérica en su equivalente en texto. Dependiendo del número de calificación, se muestra el mensaje correspondiente al nivel de rendimiento.
1  -  Muy deficiente
2  -  Insuficiente
3  -  Suficiente
4  -  Bien
5  -  Notable
6  -  Sobresaliente */

let calificacion = 1;
switch(calificacion){
    case 1: console.log('Muy deficiente');break;
    case 2: console.log('Insuficiente');break;
    case 3: console.log('Suficiente');break;
    case 4: console.log('Bien');break;
    case 5: console.log('Notable');break;
    case 6: console.log('Sobresaliente');break;
    default: console.log('Calificación no especificado');
}