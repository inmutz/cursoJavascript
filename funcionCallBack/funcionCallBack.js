
miFuncion()
miFuncion2()
function miFuncion(){
    console.log('miFuncion 1');
}

function miFuncion2(){
    console.log('mifuncion 2');
}

// Funcion tipo callback

function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(op1, op2, functioncallback){
    let res = op1 + op2; 
    functioncallback(`Resultado: ${res}`);
}

sumar(4,3, imprimir); 








