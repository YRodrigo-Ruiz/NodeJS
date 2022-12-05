// if ternario
let fruta = "Naranja"

let resultado = fruta == "Naranja"?"Si":"No";
console.log(resultado);

// Switch
let semaforo = "Verde";

switch (semaforo) {
    case "Verde" :
        console.log("Cruce");
        break;
    case "Amarillo" :
        console.log("Precaucion");
        break;
    case "Rojo" : 
    console.log("No Cruzar");
    break;
    default :
    console.log("No Funciona");
    break;   
}