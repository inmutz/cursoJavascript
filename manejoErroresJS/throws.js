"use strict"
let resultado = ''; 

// Uso de la clausula throws en JS
try{
    // x = 10;
    if (isNaN(resultado)) throw 'No es un numero';
    else if (resultado === '') throw 'Tenemos una cadena vacia'; 
    else if (resultado >= 0 ) throw 'Resultado positivo';
    else if (resultado < 0 ) throw 'Valor negativo'

}

catch(error){
    console.log(error);
    //console.log(error.name); 
    //console.log(error.message);     
}

finally{
    console.log('Termina revición de errores')
}