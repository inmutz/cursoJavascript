let miPromesa = new Promise((resolved, rejected) => {
    let expression = true;
    if (expression)
        resolved("Resolvio correcto")
    else 
        rejected("Se produjo un error")
}); 

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// ); 

miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error)); 

let promesa = new Promise((resolver) => {
    // console.log('Inicio promesa'); 
    setTimeout(()=> resolver('Saludos desde mi promesa y Timeout'), 3000);
    // console.log('Salida de promesa'); 

}); 

// promesa.then(valor => console.log(valor));

// async indica que va regresar una promesa
async function miFuncionConPromesa(){
    return 'Saludo con promesa y async'; 
}

// miFuncionConPromesa().then(valor => console.log(valor)); 

// async/await 

async function miFuncionConPromesaYawait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await')
    });
    console.log( await miPromesa); 
}

//miFuncionConPromesaYawait();

// promesa, async, await, setTimeOut

async function functionConPromesaAwaitTimeOut(){ 
    console.log('Inicio de a funcion'); 
    let miPormesa = new Promise(resolver => {
        setTimeout(() =>resolver('Promesa con SetTimeOut y await'), 3000);
        
    });
    console.log(await miPormesa);
    console.log('fin de la funcion'); 
}

functionConPromesaAwaitTimeOut(); 


