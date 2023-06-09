'use strict'
/*En este caso, el switch case se utiliza para identificar si un día específico es un día laborable o un día de fin de semana. Dependiendo del día proporcionado, se muestra un mensaje correspondiente al tipo de día.*/

let dia = 'lunes';
switch(true){
    case dia == 'lunes' || dia == 'martes' || dia == 'miercoles' || dia == 'jueves' || dia == 'viernes':
        console.log(`El ${dia} es un día laboral`);break;
    case dia == 'sabado' || dia == 'domingo': 
        console.log(`El ${dia} es un día de fin de semana`);break;

    default: console.log('Día no válido');break;
}