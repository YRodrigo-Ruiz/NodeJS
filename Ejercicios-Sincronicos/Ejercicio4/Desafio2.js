// Ajuste tarifario de energía eléctrica //

let pagoMes = 1000; //pago actual de energía eléctrica por mes.
let consumoKWH = 200; //58 kw : consumo mensual de Kilovatios hora de consumo mensual por el hogar.
let aumento = 1.20;

consumoKWH > 300 ? pagoMes= pagoMes*aumento: pagoMes;

console.log (`Debido a que su hogar tuvo un consumo de ${consumoKWH} kwh, en base al ajuste tarifario
(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),
cumplimos con informarle que se ha ajustado el total a pagar, que será de ${pagoMes}`);

// console.log ("Debido a que su hogar tuvo un consumo de ${consumoKWH} kwh, en base al ajuste tarifario"
//("hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), +
//"cumplimos con informarle que se ha ajustado el total a pagar, que será de $"{pagoMes});










