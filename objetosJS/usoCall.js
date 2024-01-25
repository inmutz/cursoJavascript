// 

let persona1 = {
    nombre: 'Juan', 
    apellido: 'Perez', 
    nombreCompleto: function(titulo, tel){
        return titulo + ': '+ this.nombre + ' ' + this.apellido + ', ' + tel; 
    }
}

let persona2 = {
    nombre: 'Karla', 
    apellido: 'Lara'
}

// Uso de call para usar
// el metodo personal.nombreCompleto con los datos del persona2

console.log(persona1.nombreCompleto('Lic', '12312312')); 

// Usando call para acceder a los datos de persona2 
console.log(persona1.nombreCompleto.call(persona2))

// Pasar argumentos con call 
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '2131213442' )); 
