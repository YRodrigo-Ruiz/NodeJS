let sumar = (n1, n2) => n1 + n2;
let restar = (n1, n2) => n1 - n2;
let multiplicar = (n1, n2) => n1 * n2;
let dividir = (n1, n2) => n1 / n2;

let calculadora = (n1 , n2, operacion) => operacion(n1 , n2);

console.log(calculadora(3, 18, restar));


let doble = n => n *2;
let triple = n => n * 3;
let aplicarCallback = (n, callback)  => callback(n);

console.log(aplicarCallback(2,doble));
