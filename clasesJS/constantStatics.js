
// Clase Padre
class Persona {

    static contadorPersonas = 0; // Atributos de nuestra clase.

    // Creación de un metodo static en forma de Constante. 
    static get MAX_OBJ(){
        return 5;
    } 

    constructor(nombre, apellido){
         this._nombre = nombre; 
         this._apellido = apellido; 
         if (Persona.contadorPersonas < Persona.MAX_OBJ){
                this.idPersona = ++Persona.contadorPersonas;
         }
         else{
            console.log('Se ha llegado el maximo de persona'); 
         }
    }
    
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre; 
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido; 
    }
    
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido; 
    }

    // Sobreescritura en el metodo de clase Padre (Object)
    toString(){
        // Se aplica polimorfismo (multiples forma en tiempo de ejecución)
        // El metodo que se ejecuta depende si es una referencia de tipo padre o tipo hijo. 
        return this.nombreCompleto();
    }

    // Metodos static 
    static saludar(){
        console.log('Saludo desde el metodo static'); 
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido)
    }
}

// Clase Hija.
// La clase Empleado hereda las propiedades de la clase Persona.

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
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}



let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString()); 

let empleado1 = new Empleado('Carlos', 'Jimenez', 'Sistemas');
console.log(empleado1.toString()); 

console.log(Persona.contadorPersonas); 

console.log(Persona.MAX_OBJ); 

Persona.MAX_OBJ = 10; 

console.log(Persona.MAX_OBJ); 
