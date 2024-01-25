// Funciones recursiva 
// Imprimir 3, 2, 1.

function funcionRecursiva(number){
    //Caso base 
    if (number == 1)
        console.log(number); 
    else {
        console.log(number); 
        funcionRecursiva(number - 1);
    }
}

// Llamamos a la función recursiva 

funcionRecursiva(3); 
