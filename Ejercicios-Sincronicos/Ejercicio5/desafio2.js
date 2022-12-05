function totalAPagar (tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
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
    
    if (jamon) montoTotal = montoTotal + 30;
    if (queso) montoTotal = montoTotal + 25;
    if (mostaza) montoTotal = montoTotal + 5;
    if (salsaTomate) montoTotal = montoTotal + 5;
    if (mayonesa) montoTotal = montoTotal + 5;
    if (tomate) montoTotal = montoTotal + 15;
    if (lechuga) montoTotal = montoTotal + 10;
    if (cebolla) montoTotal = montoTotal + 10;
    
     return montoTotal;  //Cuando llego al return finaliza la función
}

console.log(totalAPagar("Pollo", true, false, true,true, false, false, true, false))



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