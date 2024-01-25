// Paso por referencia. 
// Objeto (array) se pasa por referencia. 

function cambiarValor(parametro){
    parametro[0] = 20; 
}

// Llmamos a la función 
let arreglo = [10]; 
console.log(`Antes del arreglo: ${arreglo[0]}`); 
cambiarValor(arreglo); 
console.log(`Despues del arreglo: ${arreglo[0]}`)