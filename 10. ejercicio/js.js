'use strict'
/*Escribe un programa que permita al usuario convertir una temperatura de Celsius a Fahrenheit o de Fahrenheit a Celsius. El programa debe solicitar al usuario que ingrese la temperatura y luego pedirle que elija la conversión deseada. Utiliza un switch case para realizar la conversión seleccionada y mostrar el resultado al usuario. */

let temperatura = 45;
let temp = 'fahrenheit'
switch(temp){
    case 'celsius': 
        cal = temperatura * (9/5) + 32
        console.log(`${temperatura}ºC equivale a ${cal}ºF`); break;
    case 'fahrenheit': 
        cal = (temperatura - 32) * (5/9)
        console.log(`${temperatura}ºF equivale a ${cal}ºC`); break;
    default: console.log('Unidad de medida no espicificada');break;
}