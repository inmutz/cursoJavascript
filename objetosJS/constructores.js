// Función de constructor de tipo persona 
function Persona(nombre, apellido, email) {
    this.nombre = nombre; 
    this.apellido = apellido; 
    this.email = email; 
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido; 
    }
}

// Crear una nueva propiedad para el objeto 
Persona.prototype.tel = '222444221'; 

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '112334421'
console.log(padre.tel);  

let madre = new Persona('Julia', 'Gonzalez', 'jgonzalez@email.com'); 
console.log(madre.tel)

