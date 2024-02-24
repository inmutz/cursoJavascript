// Llamadas asingronas con el uso de setTimeOut 

function miFuncionCallBack(){
    console.log('saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallBack, 3000); 

setTimeout(function(){console.log('saludo asincrono despues de 4 segundos')}, 4000)

setTimeout(() => console.log('saludo asincrono despues de 5 segundos'), 5000); 