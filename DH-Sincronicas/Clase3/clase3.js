// Clase en vivo N°03

// Variables
// Es un espacio de memoria donde almacenamos información que vamos a utilizar a futuro
// Diferentes tipos de variable, distintos tipos de datos
// Pueden ser globales o locales
// const => constantes

var nombreDeLaVariable = "algún valor";
// console.log( nombreDeLaVariable );
nombreDeLaVariable = "otro valor";
// console.log( nombreDeLaVariable );

// Identificadores
// a-z A-Z 0-9 $ _
// No podemos iniciar el nombre de la variable con un número
// No debemos utilizar tildes o Ñ
// No deben comenzar con mayúscula
// camelCase
// El nombre de la variable tiene que ser lo más representativo posible

let telefono;

// var vs let
// var siempre es global y let puedes ser local o global
// Hace referencia al contexto
let nombre = "Facu"; // global

{
    // let nombre = "Emmanuel"; // local

    {
        // console.log(nombre);
    }
}

let apellido = "Erbin";
// apellido = "Guzman"; 


// Tipos de datos
// Strings
// Si está entre comillas es un string
// Comillas dobles o simples "" ''
// const texto = 'algún \n"texto"';
// console.log(texto);

// Number
// Enteros, decimales
let numero = 10.5;

// Boolean
// console.log(true)

// Array []

// objeto {}
const persona = {
    nombre: "Facu",
    apellido: "Erbin",
    edad: 28
}

// persona.nombre = "Emmanuel";

// console.log(persona.nombre, persona.apellido); // Notación punto
// console.log(persona["nombre"], persona["apellido"] ); // Notación corchetes []

// Operadores
// Aritméticos
// + - * / %
// console.log(127 % 2);

// console.log(3 ** 2) Potencia

// Incremento ++ y Decremento --
numero = 10; 
numero ++; // incrementa en 1

// Suma/ Resta y asignación += -=
numero = 10;
numero -= 5;
numero = numero - 5;
// console.log(numero)

// Concatenación +
// Nos permite unir texto
nombre = "Facu";
apellido = "Erbin";
// console.log(10 + 10 + nombre + " " + apellido + (10 + 10));

// Precedencia de Operadores
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// console.log(2 + 3 * 5); 

// Comparación
// Simple == !=
// Solo se considera el valor
numero = 5;
// console.log( numero == "5");
// Estricta === !==
// Se tiene en cuenta también el tipo de dato
// console.log( numero === "5");

// console.log( typeof numero);

// Desafios

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
// console.log(`Estimado ${nombre}
// esto es un salto de linea
// su apellido es ${apellido}(acá va una variable)`)

let fecha = new Date('2001/10/05');
console.log(fecha);