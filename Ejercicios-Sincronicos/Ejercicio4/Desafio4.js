let numero1 = 1;
let numero2 = 2;
let operacion = "suma";

switch (operacion.toLowerCase()) {
    case "suma": 
        console.log( numero1 + numero2 );
        break;
    case "resta":
        console.log( numero1 - numero2 );   
        break;
    case "multiplicacion":
        console.log( numero1 * numero2 );     
        break;
    case "dividir":
        console.log( numero2 / numero1 );
        break;    
    default: console.log("las opereciones aceptadas son suma, resta, multiplicacion y division.");
        break;
}