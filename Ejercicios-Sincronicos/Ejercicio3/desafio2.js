let nombre = "fulanito";
let apellido = "cosme";
let sueldoActual = 100000;
let porcentajeAumento = 25;

let calculoAumento = (( sueldoActual * porcentajeAumento) / 100 );
let nuevoSueldo = sueldoActual + calculoAumento;

console.log( "Hola estimado" + " " + nombre + " " + apellido );
console.log("En base a su sueldo actual:\n$" + sueldoActual );
console.log("Ha recibido un aumento del 25%:\n$" + calculoAumento);
console.log("y su sueldo es de: $" + nuevoSueldo);