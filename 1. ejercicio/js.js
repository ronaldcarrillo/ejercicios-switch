'use strict'
/*Este ejemplo utiliza un switch case para determinar el día de la semana en función de un número dado. Dependiendo del valor del número, se muestra un mensaje correspondiente al día de la semana. */
let dia = 1;
switch(dia){
    case 1: console.log('Lunes');break;
    case 2: console.log('Martes');break;
    case 3: console.log('Miercoles');break;
    case 4: console.log('Jueves');break;
    case 5: console.log('Viernes');break;
    case 6: console.log('Sábado');break;
    case 7: console.log('Domingo');break;
    default: console.log('Día no especificado');
}