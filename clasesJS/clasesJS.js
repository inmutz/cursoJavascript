// Crear un nueva Clase 

class Persona {
    constructor(nombre, apellido){
         this._nombre = nombre; 
         this._apellido = apellido; 
    }
    
    get nombre(){
        return this._nombre + ' ' + this._apellido
    }

    set nombre(nombre){
        this._nombre = nombre; 
    }
}

let persona1 = new Persona('Juan', 'Perez');

persona1.nombre = 'Carlos' // Usando set para nombre 

console.log(persona1.nombre); // USanado Get para nombre
