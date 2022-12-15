let notas =[10, 4, 5, 8, 9, 7];
//MAP
let notasHastaEl100 = notas.map(function(number){
    return numero * 10;
});
// console.log(notasHastaEl100);

//FILTER
let notasAprobadas = notas.filter(function(number){
    return numero >=7;
});
//console.log(notasAprobadas);


//REDUCE
let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero;
});
//console.log(sumaNotas);

//FOREACH
notas.forEach(function(valor, indice){
    console.log("En la posicion " + indice + " tengo el valor" + valor);
});
StyleSheetList
