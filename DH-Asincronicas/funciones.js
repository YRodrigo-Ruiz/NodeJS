// funcion expresada

let sumar = function(n1, n2){
    return n1+ n2;
}
console.log(sumar(7, 9));

// funcion declarada

function resta(n1, n2){
    return n1 - n2;
}
console.log(resta(5, 5));

// scope

let mensaje = "hola";

function saludar(){
    let mensaje = "chau";
    return mensaje;
}

console.log(mensaje);    //scope global (fuera de la funcion)
console.log(saludar());   // scope local (dentro de la funcion)

// Arrow Functions

let laMitad = numero => numero / 2;

console.log(laMitad(8));

let dividir = (n1 , n2) => n1 / n2;
console.log(dividir(4, 2));

let tengoQueTrabajar = dia => {
    if(dia == "sabado" || dia == "domingo"){
        return "no trabajas";
    }else{
        return "si, trabajas";
    }
}

console.log(tengoQueTrabajar("sabado"));


function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function tripleDeLaSuma(numero3, numero4) {
    let resultadoDeSuma = sumar(numero3, numero4);
    return resultadoDeSuma * 3;
}
console.log(tripleDeLaSuma);