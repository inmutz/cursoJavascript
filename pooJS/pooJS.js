class Empleado{
    constructor(nombre, sueldo) {
        this._nombre = nombre; 
        this._sueldo = sueldo;   
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, suledo,departamento){
        super(nombre, suledo);
        this._departamento = departamento; 
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, Departamento ${this._departamento}`
    }
}

// Como utilizar el instanceof
function determinarTipo(tipo){
   console.log( tipo.obtenerDetalles()); 
   if (tipo instanceof Gerente){
    console.log('Es un objeto tipo gerente');
    console.log(tipo._departamento); 
   }
   else if (tipo instanceof Empleado){
    console.log('Sí es un empleado')
   }
   else if(tipo instanceof Object){
    console.log('Es un tipo object')
   }
}

let empleado1 = new Empleado('George', 340); 
let gerente1 = new Gerente('Ivan', 500, 'Sistema'); 

determinarTipo(empleado1); 
determinarTipo(gerente1);


