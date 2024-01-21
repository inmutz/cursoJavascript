// Ejercicio de suma acumulativa 
let repeticiones = 5, acumulativa = 0, contador = 0; 

/*for (contador = 0; contador <= repeticiones; contador++){
    acumulativa += contador;
    console.log(acumulativa)
}*/

/*while( contador <= repeticiones){
    contador++
    acumulativa+= contador
    console.log(acumulativa)
}*/

do {
    contador++
    acumulativa+= contador
    console.log(acumulativa)
} while ( contador <= repeticiones)

