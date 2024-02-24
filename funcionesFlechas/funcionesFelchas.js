
let miFuncion = function (){
    console.log('Saludo desde mi funcion')
}

// const miFuncionFlecha = () => {
//     console.log('Saludo desde mi funcion flecha'); 
// }

const miFuncionFlecha = () => console.log('Saludo desde mi funcion flecha'); 

// miFuncionFlecha(); 

// const saludar = () => {
//     return 'Saludo desde la funcion flacha'; 
// }

const saludar = () => 'Saludo desde la funcion flecha';
console.log(saludar()); 

const regresarObjeto = () => ({nombre: 'Juan', apellido: 'Rodrigez'}); 
console.log(regresarObjeto());

// const funcionConParametros = (mensaje) => console.log(mensaje); 
const funcionConParametros = mensaje => console.log(mensaje); 

funcionConParametros('hola desde el parametro'); 

const funcionSuma = (obj1, obj2) => console.log(obj1 + obj2);
funcionSuma(2,3)