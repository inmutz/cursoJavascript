// Declarición de la matriz
let matriz = [[100, 200, 300], [400, 500,600]];

// No. Renglones
console.log(matriz.length);

// No. Columnsas 
console.log(matriz[0].length); 
console.log(matriz[1].length); 


for (let ren = 0; ren <  matriz.length; ren++){
    //columnas
    for(let col = 0; col < matriz[ren].length; col++){
        console.log(`Elemento[${ren}][${col}] = ${matriz[ren][col]}`); 
    }
}