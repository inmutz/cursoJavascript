// 

let persona1 = {
    nombre: 'Juan', 
    apellido: 'Perez', 
    nombreCompleto: function(titulo, tel ){
        //return this.nombre +' '+ this.apellido
        return titulo + ': '+ this.nombre + ' ' + this.apellido + ', ' + tel; 
    }
}

let persona2 = {
    nombre: 'Karla', 
    apellido: 'Lara'
}

// Uso de apply para usar
// el metodo personal.nombreCompleto con los datos del persona2

console.log(persona1.nombreCompleto('Lic', '12134112')); 

// Usando call para acceder a los datos de persona2 
let arreglo = ['Ing', '13312112']; 
console.log(persona1.nombreCompleto.apply(persona2, arreglo))
