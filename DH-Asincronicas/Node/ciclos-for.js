for(let i = 0 ; i<10; i++){
    console.log("el valor de i es = " + i);
}

function noParesDeContarImparesHasta(numero){
    let conteo = 0;
    for (let i = 0; i <= numero; i++) {
    if ((i % 2) !== 0) {
        conteo = conteo + 1;
    }
}
return conteo;
}
console.log(noParesDeContarImparesHasta(4));



function sumatoriaBajoImporte (importes) {
    // Acumulador
    // Acumula el resultado de ejecutar una operación sobre un conjunto de datos
    // Necesitamos un acumulador? Sí, tenemos que sumar los importamos
    let suma = 0; // Se declara antes del for y se le da un valor inicial

    // Qué vamos a recorrer? El array importes
    for (let i = 0; i < importes.length; i++) {
        // Tenemos condiciones? Sí
        if (importes[i] > 0 && importes[i] <= 1000) {
            suma = suma + importes[i];
        }
    }

    return ("dentro de la función: " + suma); // retorna, te da la respuesta de la función
}
