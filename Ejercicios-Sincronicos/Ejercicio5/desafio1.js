let alquiler = (tipoDeVehiculo, numeroDias) => tipoDeVehiculo * numeroDias;
let numeroDias= 120;
let tipoDeVehiculo = "camioneta";
tipoDeVehiculo = tipoDeVehiculo.toLocaleLowerCase();
switch (tipoDeVehiculo){
    case "compacto":
        console.log(14000 * numeroDias);
        break;
    case "mediano":  
        console.log(17000 * numeroDias);
        break;
    case "camioneta":
        console.log(28000 * numeroDias);
        break;
    case "silla para niños":
        console.log(1200 * numeroDias);
        break;
    default:
        console.log("escriba si es camioneta, compacto o mediano su vehiculo.")    
}


console.log(alquiler("compacto", 18));