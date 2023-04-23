'use strict'


//Utilizando document.querySelector para seleccionar un elemento especifico del HTML y asignarlo a una variable
//La variable es preferible que sea una constante.
const title = document.querySelector('h1');

//Ejemplo 1
const parrafo = document.querySelector('p');
//Se selecciona un elemento por el nombre de ese elemento. En este caso, se selecciona la primera etiqueta p



//Ejemplo 2
const parrafito = document.querySelector('.parrafito');
//Se selecciona el elemento por clase. Cabe recalcar que, con querySelector, se llama a las clases e identificadores a como se 
//haría normalmente en css

//Ejemplo 3
const pid = document.querySelector('#pid');
//Seleccionar el elemento por el id usando la sintaxis de css

const input = document.querySelector('input');


//Modificación del HTML interno de una variable
title.innerHTML = "Patito <br> Feo";

//Modificación del texto interno de una variable
title.innerText = "Patito <br> Feo";


/* console.log(title.getAttribute('class'));
title.setAttribute('class', 'rojo');
console.log(title.getAttribute('class')); */

//Para seleccionar especificamente las clases de un elemento se utiliza:
// .classList

//Añadiendole .add a classList podemos agregarle una clase al elemento
title.classList.add("Verde");

//Añadiendo .remove a classList podemos quitarle una clase a un elemento.
title.classList.remove('platzilg');

//Para asignarle un valor por defecto a los inputs se utiliza .value = x
input.value = "453";

//Para crear un elemento HTML desde Javascript se utiliza document.createElement('nombre de etiqueta');
const img = document.createElement('img');

img.classList.add("Smth");

console.log(img.getAttribute('class'));

//Para añadirle un atributo a una etiqueta de HTMl se utiliza .setAtribute('nombre del atributo', 'Valor del atributo');
img.setAttribute('src', 'https://yt3.googleusercontent.com/ytc/AGIKgqMF2M0gIVQeSen6lfXCe8P281NMD6pgS6YrOYmk-g=s900-c-k-c0x00ffffff-no-rj');
console.log(img.getAttribute('src'));

pid.innerText = "";

//.append se utiliza para agregar un elemento HTML dentro de otro.
pid.append(img)