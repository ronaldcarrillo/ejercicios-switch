'use strict'
/*El objetivo de este ejemplo es determinar la cantidad de días en un mes específico. Utilizando un switch case, se identifica el mes proporcionado y se muestra la cantidad de días correspondiente. */

let mes = 'enero';
switch(mes){
    case 'enero': console.log('31 días');break;
    case 'febrero': console.log('28 días');break;
    case 'marzo': console.log('31 días');break;
    case 'abril': console.log('30 días');break;
    case 'mayo': console.log('31 días');break;
    case 'junio': console.log('30 días');break;
    case 'julio': console.log('31 días');break;
    case 'agosto': console.log('31 días');break;
    case 'septiembre': console.log('30 días');break;
    case 'octubre': console.log('31 días');break;
    case 'noviembre': console.log('30 días');break;
    case 'diciembre': console.log('31 días');break;
    default: console.log('Mes no especificado');
}