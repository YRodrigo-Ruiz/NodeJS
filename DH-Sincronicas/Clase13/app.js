const bicis = require('./clase10');
const fs = require('fs');


// Clase de consulta

// Función
// Es un bloque de código que definimos una vez y podemos invocar las veces que sea necesario
// Parámetros: son las variables a traves de las cuales la función puede recibir información

function sumar (num1, num2) {
    return num1 + num2;
}

// Callback
// Es una función que pasamos por parámetro

function calculadora (operacion, num1, num2) {
    return ["El resultado de la operación es " + operacion(num1, num2) + " y acá va un objeto ", {num1, num2}];
    // return [operacion(num1, num2), num1, num2];
}


// console.log( calculadora(sumar, 10,20) );

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados= estudiantes.filter(function(alumnosAprobado){
    // console.log(alumnosAprobado.promedio >= 6)
    return alumnosAprobado.aprobado;
});

let desaprobados= estudiantes.filter(function(alumnosDesaprobado){
    return ! alumnosDesaprobado.aprobado 
});

// console.log(desaprobados);

// Desafio Clase 10

// console.log(bicis)

// Objeto literal
// propieades: son variables que guardan alguna característica del objeto
// métodos: son funciones propias del objeto
const dhBici = {
    bicicletas: bicis,
    buscarBici: function (id) {
        const bici = this.bicicletas.find( (bici) => bici.id == id );
        if (bici) return bici;

        return null;
    },
    venderBici: function (id) {
        const bici = this.buscarBici(id);

        if (bici) {
            bici.vendida = "si";
            fs.writeFileSync('./datos/bicis.json',JSON.stringify(this.bicicletas));
            return bici;
        }

        return "Bicicleta no encontrada";
    },
    bicisParaLaVenta: function () {
        return this.bicicletas.filter( (bici) => bici.vendida == "no");
    },
    totalVentas: function () {
        return this.bicicletas
                    .filter(bici => bici.vendida == "si")
                    .reduce( (acumulador, bici) => acumulador + bici.precio, 0);
        // return this.bicicletas.reduce( (acumulador, bici) => {
        //     if (bici.vendida == "si") {
        //         return acumulador + bici.precio;
        //     } else {
        //         return acumulador;
        //     }
        //     // (bici.vendida == "si") ? acumulador + bici.precio : acumulador
        // } );
    },
    aumentoBici: function (porcentaje) {
        const bicis = this.bicicletas.map( (bici) => {
            bici.precio = bici.precio + (bici.precio * porcentaje / 100);
            return bici;
        });
        fs.writeFileSync('./datos/bicis.json', JSON.stringify(bicis));
        return bicis;
    },
    bicisPorRodado: function (rodado) {
        return this.bicicletas.filter( (bici) => bici.rodado == rodado);
    },
    listarBicis: function () {
        return this.bicicletas.forEach( bici => console.log(bici));
    }
}

// dhBici.venderBici(3)
// console.log(dhBici.bicisParaLaVenta());
// console.log(dhBici.bicisPorRodado(32));
dhBici.listarBicis();
// console.log(["a", "b"] != [] );


const collectibles = {
    // figuras: unifiedCollectibles,
    lstFigures: function () {
        return this.figuras.forEach(element => {
            console.log(element);
        });
    }
}