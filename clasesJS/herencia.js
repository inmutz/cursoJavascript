class Persona {
    constructor(nombre, apellido){
         this._nombre = nombre; 
         this._apellido = apellido; 
    }
    
    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre; 
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido; 
    }
    
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido; 
    }
}

// La clase Empleado hereda las propiedades de la clase Persona

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        // Mandar a llamar el construcctor de la clase padre Persona
        // Para poder obtener los parametros 

        super(nombre, apellido)
        this._departamento = departamento; 

    }

    get departamento(){
        return this._departamento; 
    }

    set departamento(departamento){
        this._departamento = departamento; 
    }

    // Sobreescritura

    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento
    }
}



let persona1 = new Persona('Juan', 'Perez');
console.log(persona1); 

let persona2 = new Persona('Karla', 'Lopez'); 
console.log(persona2)

let empleado1 = new Empleado('Carlos', 'Jimenez', 'Sistemas');
console.log(empleado1); 
console.log(empleado1.nombreCompleto());



