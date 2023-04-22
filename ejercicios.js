'use strict'

/* Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

    Nombre
    Apellido
    Nombre de usuario en Platzi
    Edad
    Correo electrónico
    Mayor de edad
    Dinero ahorrado
    Deudas

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

    Nombre completo (nombre y apellido)
    Dinero real (dinero ahorrado menos deudas) */



/* var nombre = prompt("Introduce tu nombre: ");
var apellido = prompt("Introduce tu apellido: ");
var user = prompt("Introduce tu nombre de usuario en platzi");
var age = parseInt(prompt("Introduce tu edad: "));
var mayor;

//funcion para repetir bucles
function repeticion(type, value, text1, text2){

    if(type == "int"){
        while(true){
            if(isNaN(value) == true || value < 0){
                alert(text1);
                value = parseInt(prompt(text2));
        
        
                
            }else{
                break
            }
        }
    }else if(type == "float"){
        while(true){
            if(isNaN(value) == true || value < 0){
                alert(text1);
                value = parseFloat(prompt(text2));
            }else{
                break
            }
        }
    }
    

    return value;
}

age = repeticion("int", age, "Debes introducir un valor númerico correcto. ", "Introduce tu edad: ");

if(age > 17){
    mayor = true;
}else{
    mayor = false;
}

var ahorros = parseFloat(prompt("Introduce el dinero que tienes ahorrado: "));

ahorros = repeticion("float", ahorros, "Debes introducir un monto valido.", "Introduce el dinero que tienes ahorrado")

var deudas = parseFloat(prompt("Introduce el monto de duedas que tengas: "));

deudas = repeticion("float", deudas, "Introduce un valor númerico valido.", "Introduce el monto de duedas que tengas: ");

var dinero_total = ahorros - deudas;

document.write(`<h1>Tu nombre completo es ${nombre} ${apellido} </h1>`);
document.write(`<h1> Tu nombre de usuario en Platzi es ${user} </h1>`);

if(mayor == true){
    document.write(`<h1>Tienes ${age} años y eres mayor de edad. </h1>`);
    
}else{
    document.write(`<h1> Tienes ${age} y eres menor de edad.  </h1>`)
}

document.write(`<h1>Tienes ${ahorros} ahorros y ${deudas} en deudas. Por lo tanto, tienes un dinero total de ${dinero_total} </h1>`); */


/* const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
} */

/* let subs = ["Free", "Basic", "Expert", "ExpertPlus"];

let prompts = ["solo puedes tomar los cursos gratis", 
"puedes tomar casi todos los cursos de Platzi durante un mes", 
"puedes tomar casi todos los cursos de Platzi durante un año", 
"tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]

let usr = "ExpertPlus";

for(let i = 0; i < subs.length; i++){
    if(usr == subs[i]){
        console.log(`Tienes una suscripción de ${usr}. Por ende, ${prompts[i]}`);
    }
} */


/* for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
} */

/* var x = 0;

while(x < 5){
    console.log(x);
    x++
}

var y = 10;

while(y >= 2){
    console.log(y);
    y--
} */

/* 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */

//1 

/* var random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function first(array){
    console.log(array[6])
}

first(random)

//2

function second(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

second(random)

function objects(object){
    for(let value in object){
        console.log(value + " " + object[value]);
    }
}

var dic = {type: "car", wheels: 4, doors: 4};

objects(dic); */

const object = {
    free: "Suscripción free",
    basic: "suscripción basic",
    expert: "Suscripción expert",
    expertduo: "Suscripción expertduo"
}

function read(sus){
    if(object[sus]){
        console.log(object[sus]);
        return;
    }

    console.warn("No hay ni madres, we");
}

const array1 = ["free", "basic", "expert", "expertduo"];
const array2 = ["Gratis", "Básica", "Experta", "Experta para dos"];
let varrandom;

varrandom = "hsdhf";

function loop(vars){
    for(let i = 0; i < array1.length; i++){
        if(vars == array1[i]){
            console.log(`Tu suscrupción es ${vars}. Por ende, es ${array2[i]}`);
            return;
        }
    }

    console.warn("Tu suscripción no existe");
    return;
}

loop(varrandom)
