'use strict'
/*El objetivo de este ejercicio es convertir un mes en su equivalente en número. Se utiliza un switch case para asignar el nombre del mes correspondiente al número proporcionado. */
let mes = 'enero';
switch(mes){
    case 'enero': console.log(1);break;
    case 'febrero': console.log(2);break;
    case 'marzo': console.log(3);break;
    case 'abril': console.log(4);break;
    case 'mayo': console.log(5);break;
    case 'junio': console.log(6);break;
    case 'julio': console.log(7);break;
    case 'agosto': console.log(8);break;
    case 'septiembre': console.log(9);break;
    case 'octubre': console.log(10);break;
    case 'noviembre': console.log(11);break;
    case 'diciembre': console.log(12);break;
    default: console.log('Mes no especificado');
}