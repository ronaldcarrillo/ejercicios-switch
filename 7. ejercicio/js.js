'use strict'
/*Este ejemplo utiliza un switch case para convertir una cantidad dada en una unidad de longitud específica a otra unidad. Dependiendo de la unidad proporcionada, se realiza la conversión y se muestra el resultado en la unidad deseada. Esta conversión será de cm a m y km*/

let unidad = 'km';
let cantidad = 1000;
switch(unidad){
    case 'm':
        cal =  cantidad / 100
        console.log(cantidad,'cm son ',cal,'m');break;
    case 'km': 
        cal =  cantidad / 100000
        console.log(cantidad,'cm son ',cal,'km');break;
    default: console.log('unidad no especificada');break;
}