class dispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada; 
        this._marca = marca; 
    }

    get tipoEntrada(){
        return this._tipoEntrada; 
    }

    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada; 
    }

    get marca(){
        return this._marca; 
    }

    set marca(marca){
        return this._marca = marca
    }

    toString(){
        return `Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
    }
}

class Raton extends dispositivoEntrada{
    static contadorRaton = 0; 
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRaton; 
    }

    get idRaton(){
        return this._idRaton; 
    }

    toString(){
        return `IdRaton: ${this._idRaton}, ${super.toString()}`
    }

}

class Teclado extends dispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado; 
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `IdTeclado: ${this._idTeclado}, ${super.toString()}`
    }
}

class Monitor extends dispositivoEntrada{
    static contadorMonitor = 0; 
    constructor(tipoEntrada, marca, tamaño){
        super(tipoEntrada, marca); 
        this._tamaño = tamaño; 
        this._idMonitor = ++Monitor.contadorMonitor; 
    } 

    get idMonitor(){
        return this._idMonitor; 
    }

    get tamaño(){
        return this._tamaño; 
    }

    set tamaño(tamaño){
        return this._tamaño = tamaño; 
    }

    toString(){
        return `IdMonitos: ${this._idMonitor}, ${super.toString()} Tamaño: ${this._tamaño}`
    }
}

class Computadora {
    static contadorCompu = 0; 

    constructor(marca, monitor, teclado, raton){
        this._idCompu = ++Computadora.contadorCompu; 
        this._marca = marca; 
        this._monitor = monitor; 
        this._teclado = teclado; 
        this._raton = raton; 
    }

    get idComp(){
        return this._idCompu; 
    }

    get marca(){
        return this._marca; 
    }

    set marca(marca){
        return this._marca = marca; 
    }

    toString(){
        return `IdComputadora: ${this._idCompu}, Marca: ${this._marca} \n | Monitor: ${this._monitor} \n | Teclado: ${this._teclado} \n | Raton: ${this._raton}`
    }
}

class Orden{
    static calcularOrden = 0; 
    static get MAX_ORDEN() {
        return 5;
    }
    constructor(){    
        this._idOrden = ++Orden.calcularOrden; 
        this._compus = [];
    }

    get(){
        return this._idOrden; 
    }

    agregarCompu(compu){
            this._compus.push(compu); 
    }

    mostrarOrden(){
        let compuOrden = ''
        for(let compu of this._compus){
            compuOrden += `\n ${compu}\n`
        }

        console.log( `Orden: ${this._idOrden}, Computadora: ${compuOrden}`)
    }
}

let raton1 = new Raton ('Bluetooth', 'HP'); 
let raton2 = new Raton ('USB', 'Razer'); 

let teclado1 = new Teclado ('USB', 'Razer'); 
let teclado2 = new Teclado ('2.4', 'Lenovo'); 


let monitor1 = new Monitor('HDMI', 'ROG', '25pulg'); 
let monitor2 = new Monitor('USB', 'ASUS', '30pulg'); 

let computadora1 = new Computadora('HP', monitor1, teclado1, raton1); 
let computadora2 = new Computadora('ASUS', monitor2, teclado2, raton2); 

let orden1 = new Orden()
orden1.agregarCompu(computadora1);
orden1.agregarCompu(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden()
orden2.agregarCompu(computadora2);
orden2.agregarCompu(computadora1);
orden2.mostrarOrden();

let orden3 = new Orden()
orden3.agregarCompu(computadora1);
orden3.agregarCompu(computadora1);
orden3.mostrarOrden();

let orden4 = new Orden()
orden4.agregarCompu(computadora2);
orden4.agregarCompu(computadora2);
orden4.agregarCompu(computadora1);
orden4.mostrarOrden();




