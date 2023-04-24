'use strict'


//Utilizando document.querySelector para seleccionar un elemento especifico del HTML y asignarlo a una variable
//La variable es preferible que sea una constante.
const title = document.querySelector('h1');

const input = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector("#form");

//Seleccionando un nuevo elemento desde Javascript para
//Utilizarlo en el código.
const newDiv = document.querySelector('.show');

window.addEventListener('scroll', scrollin);

function scrollin(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        newDiv.className = 'smth1';
    }else{
        newDiv.className = "";
    }
}

//.addEventListener('nombre del evento', función a ejecutar sin parentesis)
//form.addEventListener('submit', sumarInputValues);
//La función de arriba no me parece la mejor para usar; prefiero la de abajo.
btn.addEventListener('click',sumarInputValues);

function num1(){
    
    console.log("El valor del input es " + input.value);

}

function num2(){
    
    console.log("El valor del segundo input es " +  input2.value);
}

function sumarInputValues(event){
    //console.log({event});

    //event.preventDefault() previene que el evento haga su función por defecto.
    //Esto es útil cuando queremos que un submit no haga request
    //A otra url
    //event.preventDefault()

    //La función Number() nos permite transformar a números todo lo que el usuario escriba.
    let value1 = Number(input.value);
    let value2 = Number(input2.value);

    //Utilizando condicionales para realizar multiples funciones en el HTML

    if(isNaN(value1) == true || isNaN(value2)){
        console.log("No se pueden realizar calculos con valores no númericos");

        //Añadiendole cosas al div que seleccionamos antes
        newDiv.innerText = 'No se puede realizar una suma de valores no númericos.'

    }else{
        console.log(`La respuesta de la suma es ${value1 + value2}`);
        newDiv.innerText = `La respuesta a la suma es ${value1 + value2}`;
    }
}