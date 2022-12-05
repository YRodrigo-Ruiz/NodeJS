// Clase en vivo N°08: Integración

let numeros = [2, 56, 4, 3, 65, 12, 4, 34, 2, 5, 4];
numeros.push("otro numero");
// console.log(numeros);

// console.log(numeros.indexOf(4))

// console.log(numeros[5])

// Sumatorias Bajo Importe
// Qué va a recibir la función? Un array con importes (números)
// Qué va a retornar la función?  Un número, la suma de los importes que cumplan la condición

// Definir la función y colocar los parámetros
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

// Ejecutar la función
// console.log es un método (función) del objeto console que muestra lo que pasemos por parámetor por la consola
// console.log( "fuera de la función: " + sumatoriaBajoImporte([12,25,3,50]) );

// let resultado = sumatoriaBajoImporte([12,25,3,50]);

// indiceDe
// indexOf
// que recibe por parámetro un array y un elemento buscado
// y retorna los indices (array de números) en los que se encuentra ese elemento buscado dentro del array

function indiceDe (unArray, elementoBuscado) {
    let indices = [];

    for (let i = 0; i < unArray.length; i++) {
        if (unArray[i] === elementoBuscado) { // filtrando
            // Acá, encontré el elementoBuscado dentro del array
            // console.log(i , unArray[i], elementoBuscado);
            indices.push( i );
        }
    }

    return indices;
}


// console.log(indiceDe(["a", "b", "a", "c", "b", "d"], "z"));


function reporteDePasajeros (cantEstaciones) {
    // Necesitamos un acumulador? Sí, los pasajeros (cantdad), reportes (un arrray de strings)
    let pasajeros = 0;
    let reportes = [];

    // Qué vamos a recorrer? Las estaciones, desde la 0 hasta cantEstaciones
    for (let estaciones = 0; estaciones <= cantEstaciones; estaciones ++) {
        // Tenemos condiciones? 3
        if (estaciones == 0) {
        // El tren sale de la estación terminal siempre con 200 pasajeros.
            pasajeros += 200;
        } else if (estaciones == 5) {
        // En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.
            pasajeros += (120 - 80);
            // pasajeros = pasajeros + 120 - 80
        } else {
        // En cada estación el tren sube 50 pasajeros y se bajan 30.
            pasajeros += (50 - 30);        
        }

        // reportes.push("En la estación "+ estaciones +" hay "+ pasajeros +" pasajeros arriba del tren");
        reportes.push(`En la estación ${estaciones} hay ${pasajeros} pasajeros arriba del tren`);
        
    }

    return reportes;
}

// console.log(reporteDePasajeros(8));

// Continuamos a las 22:30 h (hora Arg)

[["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react",
7000], ["nodejs", 15000]]

let elegidos = []


let alumno = ['HTML5', 'CSS3', 'JAVASCRIPT'];

const cursosDH = [['html5', 4000], ['css3', 5000], ['javascript', 10000], ['react',
    7000], ['nodejs', 15000]];


function totalPagar(cursosDH, alumno){
    return cursosDH.filter((element) =>  alumno.includes(element[0].toUpperCase())).reduce((acc , element) => acc + element[1], 0);
}

// console.log(totalPagar(cursosDH, alumno))

function informacion(nombre, apellido,cursosDH, alumno){
    let resultado= totalPagar(cursosDH, alumno)
    console.log(`Estimado ${nombre}  ${apellido}, en función de los cursos seleccionados: `)
    for(let i = 0; i < alumno.length;  i++) {
        console.log((i+1)+'.-' +alumno[i])
    }
    console.log(`El monto total a pagar es de: $${resultado}.
Bienvenido a la gran aventura Digital House.`)
}

informacion('Juan', 'Perez', cursosDH, alumno)
