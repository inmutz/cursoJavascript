// Alcance de variables en JS

let variableGlobal = 5; 

// Modificar el valor 
variableGlobal = 10; 

// Definir la siguiente función 
function mifuncion(variableLocal){
    console.log(variableLocal); 
    // Modificamos el valor de la varaiable global
    variableGlobal = 20; 
    // No podemos refedinir una variable global (let)
    // let variableGlobal = 30; 
}

// Lamamos la función 
mifuncion(variableGlobal); 


