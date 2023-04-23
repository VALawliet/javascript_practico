'use strict'


//Utilizando document.querySelector para seleccionar un elemento especifico del HTML y asignarlo a una variable
//La variable es preferible que sea una constante.
const title = document.querySelector('h1');

const input = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btrCalcular');
const newDiv = document.querySelector('.show');

function num1(){
    
    console.log("El valor del input es " + input.value);

}

function num2(){
    
    console.log("El valor del segundo input es " +  input2.value);
}

function Calculate(){
    let value1 = Number(input.value);
    let value2 = Number(input2.value);

    if(isNaN(value1) == true || isNaN(value2)){
        console.log("No se pueden realizar calculos con valores no númericos");
        newDiv.innerText = 'No se puede realizar una suma de valores no númericos.'

    }else{
        console.log(`La respuesta de la suma es ${value1 + value2}`);
        newDiv.innerText = `La respuesta a la suma es ${value1 + value2}`;
    }
}