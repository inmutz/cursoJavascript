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

// Formas para imprimir cada valor de las propiedades

//concatenar
console.log(persona.nombre + ', ' + persona.apellido + ', ' + persona.edad); 

// for in 
for( nombrePropieda in persona){
    console.log(persona[nombrePropieda]); 
} 

//

let personaArray = Object.values(persona); 
console.log(personaArray); 

let personaSting = JSON.stringify(persona); 
console.log(personaSting); 
