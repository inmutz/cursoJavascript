
// Creacion del objeto
let persona = {
    //Las diferente propiedades
    nombre: 'Juan', 
    apellido: 'Perez', 
    email: 'juanperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre); 
console.log(persona.edad);
console.log(persona.email);
console.log(persona);
console.log(persona.nombreCompleto());

// Otra froma de crear objeto
let persona2 = new Object(); 
persona2.nombre = 'Karla'; 
persona2.direccion = 'Saturno 2'; 
persona2.tel = '53213123'; 

console.log(persona2.tel ); 

// Otra forma de accecer a las propiedades
console.log(persona.nombre); 
console.log(persona['apellido']); 

// for in para recorer cada una de las propiedades
for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])  
}