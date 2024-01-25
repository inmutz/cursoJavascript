// Creacion del objeto
let persona = {
    //Las diferente propiedades
    nombre: 'Juan', 
    apellido: 'Perez', 
    email: 'juanperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Agregar una nueva propiedad
persona.tel = '42133341'; 
console.log(persona); 

// Eliminar una propiedad
delete persona.tel; 
console.log(persona); 
