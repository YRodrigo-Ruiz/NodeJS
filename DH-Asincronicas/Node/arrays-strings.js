// Arrays

let nombres = ["Nacho", "Pipo", "Javi"];
let edades = [34, 28, 37 , 25];
let valores = [true, false, true];
let variados = ["nacho", 5 , false, edades];

// dato concreto de array (ARRAY DENTRO DE UN ARRAY)
console.log(variados[3][2]); 
"accede a la variable edades ubicada en el indice 3 y buscamos el valor del array con el incide 2"

// Metodos de arrays

// Push
let notas = [3, 4, 5, 0];

notas.push(1,2,3);
console.log(notas);

notas.pop();
console.log(notas)

let frases = "breaking bad rules!";
console.log(frases.slice(-10));