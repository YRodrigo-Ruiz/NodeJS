// Clase en vivo N°05: Funciones

// Funciones 
// Una porción de código reutilizable
// Un bloque de código que lo podes usar las veces que necesites
// Una tarea que podemos realizar las veces que necesitemos
// Se le pueden pasar parámetros
// Parámetros: son VARIABLES por donde la función va a recibir la información necesaria para trabajar
// Se define, y luego se puede utilizar
// Argumentos: son los VALORES que le paso a la función

// Función Declarada
// Valor por defecto
function sumar (numeroA, numeroB, numeroC = 0) {
    return numeroA + numeroB + numeroC;
}
// console.log(sumar(10,20, 30))
// console.log(sumar(10,40))
// console.log(sumar(10,20, 60))




// Función Expresada
// Definis la función dentro de una variable
// console.log(restar);
let restar = function (numeroA, numeroB) {
    return numeroA - numeroB;
}

// Ejecutar/ LLamar/ Invocar
// console.log(sumar(10,3))
// console.log(typeof restar)
// console.log( sumar(10, 35) );

function triple (numero) {
    return numero * 3;
}

// console.log(triple(10));

// Arrow function
// Es una forma de definir una función un poco más sencilla


let multiplicar = (numeroA, numeroB) => {
    return numeroA * numeroB;
};

let producto = (numeroA, numeroB) => numeroA * numeroB;

let resultadoMultiplicacion = multiplicar(5,6);
let resultadoProducto = producto(6 ,5);
// console.log(resultadoMultiplicacion);
// console.log(resultadoProducto);


// Callback
// Es una función pasada por parámetros

// Ejecuta una función después de x milisegundos
// setTimeout(() =>{
//     console.log("Hola mundo, desde un callback");
// } , 10000);

// console.log("Facu"[1]);

function iniciales (nombre,apellido) {
    return nombre[0] + apellido[0];
}

function nombreCompleto (nombre, apellido) {
    return nombre + " " + apellido;
}

function saludar (callback, nombre, apellido) {
    return "¡Hola " + callback(nombre, apellido) + "!";
}

// console.log(saludar(iniciales, "Facu", "Erbin"));
// console.log(saludar(nombreCompleto, "Facu", "Erbin"));

let nombre = false ? 
                "Facu" : 
                (false ? 
                    "Emmanuel": 
                    "Erbin");
// console.log(nombre)

// MD 2

// function totalAPagar (tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
//     let montoTotal = 0;

//     switch (tipoHamburguesa) {
//         case "Carne a la parrilla":
//             montoTotal = montoTotal + 1800;            
//             break;
//         case "Pollo":
//             montoTotal = montoTotal + 1500;            
//             break;
//         case "Vegetariana":
//             montoTotal = montoTotal + 1200;            
//             break;
//         default:
//             return "Ingrese una tipo válido"
//     }
    
//     if (jamon) montoTotal = montoTotal + 30;
//     if (queso) montoTotal = montoTotal + 25;
//     if (mostaza) montoTotal = montoTotal + 5;
//     if (salsaTomate) montoTotal = montoTotal + 5;
//     if (mayonesa) montoTotal = montoTotal + 5;
//     if (tomate) montoTotal = montoTotal + 15;
//     if (lechuga) montoTotal = montoTotal + 10;
//     if (cebolla) montoTotal = montoTotal + 10;
    
//     return montoTotal; // Cuando llego al return finaliza la función
// }

// console.log(totalAPagar("Pollo", true, false, true,true, false, false, true, false))



function totalAPagar (tipoHamburguesa, ingredientes) {
    let montoTotal = 0;

    switch (tipoHamburguesa) {
        case "Carne a la parrilla":
            montoTotal = montoTotal + 1800;            
            break;
        case "Pollo":
            montoTotal = montoTotal + 1500;            
            break;
        case "Vegetariana":
            montoTotal = montoTotal + 1200;            
            break;
        default:
            return "Ingrese una tipo válido"
    }

    if (ingredientes.jamon) montoTotal = montoTotal + 30;
    if (ingredientes.queso) montoTotal = montoTotal + 25;
    if (ingredientes.salsaTomate) montoTotal = montoTotal + 5;
    if (ingredientes.mostaza) montoTotal = montoTotal + 5;
    if (ingredientes.mayonesa) montoTotal = montoTotal + 5;
    if (ingredientes.tomate) montoTotal = montoTotal + 15;
    if (ingredientes.lechuga) montoTotal = montoTotal + 10;
    if (ingredientes.cebolla) montoTotal = montoTotal + 10;

    return montoTotal;
}

let ingredientes = {
    jamon: true,
    cebolla: true,
    mayonesa: true,
    tomate: true,
}

console.log(totalAPagar("Pollo", ingredientes))