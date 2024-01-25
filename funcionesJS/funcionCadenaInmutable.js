// Cadena y funciones en JS
// Cadenas inmutables en JS (Una vadena que no puede modifica su valor)

function cambiarValor(parametro){
    parametro = 'Adios'
}

let argumento = "Hola"; 

console.log(`Antes de la fucion: ${argumento}`); 
cambiarValor(argumento); 
console.log(`Despues de la funcion ${argumento}`);
