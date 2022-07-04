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

prevMonth.addEventListener('click', ()=> goPrevMonth());
nextMonth.addEventListener('click', ()=> goNextMonth());

// Asigno lo actual a cada let
month.textContent= meses[mesActual]; //Guarda en #month el mes[actual]
year.textContent= añoActual.toString(); //A string porque es un número

writeMonth(mesActual);



//Funciones
function writeMonth(month){

    // Para que se previsualicen los días del mes anterior 
    for(let i=startDay(); i>0 ; i--){ //Va hacia atrás (del 1 al 31 etc)
        dates.innerHTML+= `<div class="weekday opaco">${getTotalDays(mesActual-1)-(i-1)}</div>`
    }

    for(let i=1; i<=getTotalDays(month); i++){

        if(i===fechaActual)
            dates.innerHTML+= ` <div class="weekday hoy">${i}</div> `;
        else
            dates.innerHTML+= ` <div class="weekday">${i}</div> `;
    }

    /*for(let i=getTotalDays(mesActual); i<=getTotalDays(mesActual+1) ; i++){ //Va hacia atrás (del 1 al 31 etc)
        dates.innerHTML+= `<div class="weekday opaco">${getTotalDays(mesActual+1)+1}</div>`
    }
    */

}

function getTotalDays(month){ //Cuántos días tiene un mes
    if(month===-1) 
        month=11;

    if(month==0 || month==2 || month==4 || month==6 || month==7 || month==9 || month==11)
        return 31;
    else if (month==3 || month==5 || month==8 || month==10)
        return 30;
    else 
        return esBisiesto()? 29 : 28;
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
function goPrevMonth(){
    if (mesActual !== 0)
        mesActual--;
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
    setNewDate();
}

function setNewDate(){
    hoy.getFullYear(añoActual,mesActual,fechaActual);
    month.textContent=meses[mesActual];
    year.textContent=añoActual.toString();

    dates.textContent='';
    writeMonth(mesActual);
}