// Clase en vivo N°04: Condicionales

// Operadores lógicos
// Trabajano con valores booleanos
// Nos devuelve un valor booleano
// Nos permiten formar una condicón a partir de dos o más

// AND Y Conjunción lógica &&
// Te retorna true cuando todo lo que evalua es true
// true && true => true
// true && false => false
// false && false => false
let numero = 10;
// console.log(numero > 0 && numero < 1000);

// OR O Disyunción lógica ||
// true || true => true
// true || false => true
// false || false => false
// console.log(numero > 0 || numero == -15);

// Acá tenes una función que trae el nombre y apellido de un usuario
// let nombre = "";
// let apellido = "";
// if (nombre || apellido) {
//     console.log("nombre && apellido")
// }

// NOT Negación !
// ! true => false
// ! false => true

let dia = "Sábado";
// console.log(dia == "Lunes" || dia == "Martes" || dia == "Miércoles" || dia == "Jueves" || dia == "Viernes");
// console.log(dia !== "Sábado" && dia !== "Domingo");
// console.log(! (dia === "Sábado" || dia === "Domingo"));

// Condicionales
// Control de flujo
// if, else if, else

// if (condicion) {
// // lo que queremos hacer
// }

dia = "Domingo";
// if (dia !== "Sábado" && dia !== "Domingo") {
//     // if (dia == "Lunes") {
//     //     console.log("Nos levantamos tarde");
//     // }
//     console.log("Vamos a trabajar");
// } else if (dia == "Sábado") {
//     console.log("Hoy comemos pizza");
// } else {
//     console.log("Hoy se come asado");
// }


// If ternario
// condicion ? valorVerdadero : valorFalso;
let megustaProgramar = false;
const lenguaje = megustaProgramar ? "JS" : "HTML";
// const lenguaje = megustaProgramar ? console.log("JS") : console.log("HTML");
// console.log(lenguaje);

// Switch
// Cuando tenemos muchas opciones
// key, es la variable que usamos para evaluar las condiciones
dia = "Lunes"
// switch (dia) {
//     case "Lunes":
//         console.log("Hoy es Lunes");
//         break;
//     case "Martes":
//         console.log("Hoy es Martes");
//         break;
//     case "Miércoles":
//         console.log("Hoy es la mitad de la semana")
//         break;
//     default:
//         console.log("No encontramos ese día")
// }

numero = 10;
// if (numero > 0) console.log("Entro en el if");

// if (! email) console.log("No podemos continuar");


// https://developer.mozilla.org/en-US/docs/Glossary/Falsy


perfil = "ASISTENTE";

// switch (perfil.toLowerCase()) {
//     case "administrador":
//     case "ADMINISTRADOR":
//     case "Administrador":
//         console.log("Es un administrador");
//         break;
//     case "asistente":
//         console.log("Es un asistente");
//         break;
//     default:
//         break;
// }

numero = -2;
// switch (true) {
//     case numero > 0:
//         console.log("El número es positivo");    
//         break;
//     case numero == 0:
//         console.log("El número es cero");
//         break;
//     case numero < 0:
//         console.log("El número es negativo");    
//         break;
//     default:
//         console.log("Ingrese un número válido")
//         break;
// }

// nombre = process.argv[2];
// apellido = process.argv[3];

// let num1 = parseInt(process.argv[2])
// let num2 = parseInt(process.argv[3])


// console.log(num1 + num2);

// console.log(process.argv);

let operador = process.argv[3];
let resultado = 0;
let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[4]);

switch (operador){
    case "sumar":
        resultado = num1 + num2;
        console.log(`El resultado de sumar ${num1} + ${num2} es ${resultado}`);
        break;

    case "restar":
         resultado = num1 - num2;
        console.log(`El resultado de restar ${num1} - ${num2} es ${resultado}`);
        break;
    case "producto":
        resultado = num1 * num2;
        console.log(`El resultado de multiplicar ${num1} * ${num2} es ${resultado}`);
        break;

    case "division":
        resultado = num1 / num2;
        console.log(`El resultado de dividir ${num1} / ${num2} es ${resultado}`);
        break;
    default:
        console.log("Operacion o valores no validos")
}
