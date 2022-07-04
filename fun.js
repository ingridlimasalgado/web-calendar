let meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let hoy= new Date(); // Crea el día de hoy
let fechaActual= hoy.getDate(); // fecha
let mesActual= hoy.getMonth(); //0 a 11
let añoActual= hoy.getFullYear(); 

// console.log(fechaActual+" - "+mesActual+" - "+añoActual);

let dates= document.getElementById('dates'); 
let month= document.getElementById('month');
let year= document.getElementById('year');

// flechas
let prevMonth= document.getElementById('month-prev');
let nextMonth= document.getElementById('month-next');

// Asigno lo actual a cada let
month.textContent= meses[mesActual]; //Guarda en #month el mes[actual]
year.textContent= añoActual.toString(); //A string porque es un número


//Funciones
function writeMonth(month){

}

function getTotalDays(month){ //Cuántos días tiene un mes

}

function esBisiesto(){
    return ((añoActual % 100 !== 0) && (añoActual % 4 === 0) || (añoActual % 400 ===0))
}
// console.log(esBisiesto(2020));

function startDay(){ //Dónde empieza la semana
    let start = new Date(añoActual, mesActual, 1) //Crea una nueva fecha (ese año, ese mes, el día 1)
    //Para que empiece en domingo: 
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
    //del 1er día toma el día de la semana (0-6); si es 0 (lunes) le resta 1 para que sea domingo 
}

//flechas
function goLastMonth(){
    if (mesActual !== 0)
        mesActual++;
    else { //Si el nro de mes es 0, entonces estamos en dic (se asigna 11) del año anterior
        mesActual=11;
        añoActual--;
    }
    setNewDate(); //?? va a crear una nueva fecha********************

}
function goNextMonth(){
    if (mesActual !== 11)
        mesActual++;
    else { //Si es 11, que pase a Enero del sig año
        mesActual=0;
        añoActual++;
    }
    // setNewDate();
}

function setNewDate(){
    hoy.getFullYear(añoActual,mesActual,fechaActual);
    month.textContent=meses[mesActual];
    year.textContent=añoActual.toString();
}