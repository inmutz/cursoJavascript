// Redondeo y Truncado en JS

let numero = 8.5, redondeo, truncado; 

//Redondeo 
// Math.round() redonde al valor entero más cercano.
// 0.5 o superior, redonde al valor entero superior más cercano.

redondeo = Math.round(numero); 
console.log(redondeo); 

//Truncado  
//Math.trunc() elimina la parte flotante. 

redondeo = Math.trunc(numero); 
console.log(redondeo); 