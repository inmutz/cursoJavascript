class Producto{
    static contadorId = 0; 

    constructor(nombre, precio){
        this._nombre = nombre; 
        this._precio = precio; 
        this.contadorId = ++Producto.contadorId;
        
    }

    get contador (){
        return this.contadorId
    }

    get nombre (){
        return this._nombre; 
    }

    set nombre (nombre){
        return this._nombre = nombre
    }

    get precio (){
        return this._precio; 
    }

    set precio (precio){
        return this.precio = precio
    }

    toString(){
        return `idProducto: ${this.contadorId}, NombreProd: ${this._nombre}, Precio: $${this._precio}` 
    }
}

class Orden {
    static contadorOrden = 0; 
    static get MAX_PROD(){
        return 5; 
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrden; 
        this._productos = []; 
        //this._contadorProductosAgregados = 0; 
    }

    get idOrden(){
        return this._idOrden; 
    }

    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PROD){
            this._productos.push(producto); 
        //    this._productos[this._contadorProductosAgregados++] = producto; 
        }
        else{
            console.log('Se llego al max de producto'); 
        }

    }

    calcularTotal(){
        let totalVenta = 0
        for(let producto of this._productos){
            totalVenta += producto.precio; 
        }
        return totalVenta
    }



    mostrarOrden(){
        let productoOrden = ''; 
        for (let producto of this._productos){
            productoOrden += '\n{' + producto.toString() + '}'; 
        }

        console.log(`Orden: ${this._idOrden} total: $${this.calcularTotal()}, Producto: ${productoOrden}`); 
    }



}

let producto1 = new Producto('juguete', 121431); 
// console.log(producto1.toString()); 
let producto2 = new Producto('Pantalon', 21312); 
// console.log(producto2.toString()); 

let producto3 = new Producto('Camisa', 1212); 
// console.log(producto2.toString()); 

let orden1 = new Orden(); 
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden() 


let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.mostrarOrden() 