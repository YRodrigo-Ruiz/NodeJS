let string = letra => letra.toUpperCase();

console.log(string("hola soy german"));

let dato = tipoDeDato => tipoDeDato;

console.log(dato(typeof(tipoDeDato)));

let edad = edadPerros => edadPerros * 7;

console.log(edad(10));

function valorDeHoras(salarioMensual, cantidadDias, horasPorDia){
    return (salarioMensual / cantidadDias) / horasPorDia;
}

console.log(valorDeHoras(100000, 30, 8));
