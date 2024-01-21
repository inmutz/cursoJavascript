let repeticiones = 10; 
let fibonacci = [0 , 1] 

for (contador = 2; contador < repeticiones; contador++){ 
    fibonacci[contador] = fibonacci[contador-1] + fibonacci[contador-2]; 
    console.log(fibonacci.slice());
}


