// 

class Persona{
    static contadorPersona = 0; 

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersona; 
        this._nombre = nombre; 
        this._apellido = apellido; 
        this._edad = edad; 
    }
    get idPersona(){
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido; 
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toSting (){
        return this._idPersona + ' - ' + this._nombre + ' ' + this._apellido + ' ' + this.edad 
    }

}

class Empleado extends Persona{
    static contadorEmpleado = 0; 
    constructor (nombre, apellido, edad, sueldo){
            super(nombre, apellido, edad);
            this._contadorEmpleado = ++Empleado.contadorEmpleado
            this._sueldo = sueldo; 

    }

    get contadorEmpleado(){
        return this._contadorEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toSting(){
        return super.toSting() + ' ' + this._sueldo + ' ' + this.contadorEmpleado
    }

}


class Cliente extends Persona{
    static contadorCliente = 0; 
    constructor(nombre, apellido, edad, date){
        super(nombre, apellido, edad); 
        this._idCliente = ++Cliente.contadorCliente; 
        this._date = date;

    }

    get idCliente(){
        return this._idCliente;
    }

    get date(){
        return this._date; 
    }

    set date(date){
        return this._date = date
    }

    toSting(){
        return super.toSting() + ' ' + this._idCliente + ' ' + this._date
    }

}



let persona1 = new Persona('Ivan', 'Molina', 34); 
console.log(persona1.toSting());

let empleado1 = new Empleado('Jorge', 'Castillo', 18, 2450); 
console.log(empleado1.toSting());

let cliente1 = new Cliente('Luna', 'Garcias', 23, new Date()); 
console.log(cliente1.toSting())


