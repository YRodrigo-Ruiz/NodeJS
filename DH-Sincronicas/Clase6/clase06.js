// Clase en vivo N°06: Array y Strings

// Arrays
// Un grupo de datos
// Un conjunto de datos que están ordenados con un indice que comienza en cero
// Si está entre corchetes es un array
let colores = ["Rojo", ["Azul", "Verde"]];
let variable = ["a", "b", "c", 1, 2, 3, true, false, colores];

// console.log(variable[8][1][0], variable[1]);
// console.log(2 ** 32)

// Métodos de Array
// Basado en objetos

let persona =  {
    nombre: "Facu", // propiedades
    apellido: "Erbin",
    edad: 28,
    saludar: () => console.log("Hola mundo") // método
}

// persona.saludar();

// Propiedades: son variables que pertenecen a un objeto
// Métodos: son funciones propias de un objeto
// console.log();

let color = ["Rojo", "Azul", "Verde"];

// length // propiedad
// console.log( color.length);

// push() pop()
// Trabaja con el final del array
color[2] = "Plateado"
color.push("Celeste", "Amarillo", "Amarillo");
// color.pop();
// color.pop();
// console.log(color);

// shift() unshift() con el inicio del array

// console.log(color.join(" - "));

// indexOf()
// te tira la primer posición en la que se encuentra un elemento buscado dentro de un array
// si el elemento buscado no está, te retorna -1
// console.log(color.indexOf("Amarillo") != -1 )

// includes()
// console.log(color.includes("Amarillo"))

// https://www.w3schools.com/js/js_array_methods.asp

// Métodos strings
// length
// console.log("Facu"[1])

// slice()
const nombre = "Facu Erbin";
console.log(nombre.toLowerCase());
console.log(nombre);
// [ ; )
// console.log(nombre.slice(5));

// replace()

// console.log(nombre.split(" "));


let peliculas = ["Turno de dia", "30 noches con mi ex", "Bestia", "Top gun maverick", "Elvis", "Thor: amor y trueno"];

function ordenar(pelicula) {
    // Preguntar si la pelicula esta en el array
    if (! peliculas.includes(pelicula)) {
        let mensaje = "La pelicula no encuentra en el listado";
        return mensaje
    }

    // Averiguar pisicion de la pelicula 
    let index = peliculas.indexOf(pelicula);
    // Almacenar en variable pelicula el elemnto buscado
    pelicula = peliculas.splice(index, 1);
    //Convertir el eeray pelicula en string y pasarlo a mayuscula
    pelicula = pelicula.join().toUpperCase();
    console.log(pelicula);
    // Agrego elemento al inicio del array
     peliculas.unshift(pelicula); // peliculas.splice(0,0,pelicula);
        
    return peliculas;
}

let prueba = ordenar("Top gun maverick");
console.log(prueba);