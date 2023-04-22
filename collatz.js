'use strict'

//Inicio de código para conjetura de collatz


function collatz(number){
    console.log(`Tu número es ${number}`);

    let num = 1;
    
    do{

        if(number%2 == 0){
            number = number/2;
        }
        else{
            number = (3*number) + 1
        }

        console.log(`Iteración número ${num} es igual a ${number}`);
        num ++
    }while(number != 1)

    console.log(`Tomó ${num} iteraciones para llegar al bucle 4, 2, 1`);
}


/* function collatz(number){

    //Iniciando un array vacío para usarlo luego
    let array1 = [];
    
    //Iniciando la variable que contará las interaciones.
    let iteraciones = 1;

    while(array1.length != 2){

        console.log(`Tu número es: ${number}`);
        
        if(number%2 == 0){
            number = number/2;
        }
        else{

            if(number == 1){
                array1.push(number);
            }
            number = (3*number) + 1;

            
        }

        iteraciones++
    }

    console.log(`Tomó ${iteraciones} para llegar el bucle infinito de 4, 2, 1`)
} */

/* function collatz(number){
    let array2 = [];
    let i;
    
    console.log(`Tu número es ${number}`);

    for(i = 1; array2.length != 2; i++){

        console.log(number)

        if(number%2 == 0){
            number = number/2;
        }

        else{
            if(number == 1){
                array2.push(number);
            }

            number = (3*number) + 1;
        }
    }

    console.log(`Tomó ${i} iteraciones para llegar el bucle infinito 4, 2, 1`);
}*/
collatz(20) 