// Creacion del objeto

let persona = {
    //Las diferente propiedades
    nombre: 'Juan', 
    apellido: 'Perez', 
    email: 'juanperez@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase(); 
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.lang); 
persona.lang = 'ms'; 
console.log(persona.lang); 
console.log(persona.idioma); 
