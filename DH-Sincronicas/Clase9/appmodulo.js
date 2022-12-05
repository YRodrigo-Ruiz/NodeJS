const operacion = require('./funciones/funciones.js')

console.log(operacion.resta(2,13));
console.log(operacion.suma(2,13));
console.log(operacion.mult(2,13));

//IIFE (Expresion de funcion invocada inmediatamente)ES6 extra para investigar
// (mayor = (v1,v2) => {
//     if(v1>v2){
//         console.log(v1);
//     }else{
//         console.log(v2);
//     }
// })(8,9)

//mayor(8,9)
