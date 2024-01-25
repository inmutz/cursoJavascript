
// Clase Padre
class Persona {

    static contadorObjetosPersonas = 0; 

    constructor(nombre, apellido){
         this._nombre = nombre; 
         this._apellido = apellido; 
         Persona.contadorObjetosPersonas++;
         console.log('Se incremento en = ' + Persona.contadorObjetosPersonas);
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
        return this._nombre + ' ' + this._apellido; 
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
console.log(persona1); 

let persona2 = new Persona('Karla', 'Lopez'); 
console.log(persona2);

let empleado1 = new Empleado('Carlos', 'Jimenez', 'Sistemas');
console.log(empleado1); 

console.log(empleado1.nombreCompleto());

console.log(empleado1.toString()); 

// persona1.saludar(); No es posible llamar un método static desde un objeto. 

//Pero sí desde una clase 
Persona.saludar(); 

Persona.saludar2(persona1); 


Empleado.saludar()

Empleado.saludar2(persona1);

//Atributo static 
console.log(Persona.contadorObjetosPersonas); 

console.log(Persona.contadorObjetosPersonas);

console.log(Empleado.contadorObjetosPersonas); 