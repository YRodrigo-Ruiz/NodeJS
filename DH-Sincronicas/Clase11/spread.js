//operador (...) operador de propagación

//const nombres = ['juan','maria', 'ana'];

// const nombres2 = ['Martin','diego', 'florencia'];
// const allNombres = [...nombres,...nombres2];
//console.log(allNombres);
//console.log(nombres2.concat(nombres));

// const obj = {
//     clave1: 'val1',
//     clave2: 'val2'
// }

// const obj2 = {
//     clave3: 'val3',
//     ...obj,
//     clave4: 'val4',
// }

// console.log(obj2);

const suma = (...params) => {
    return params.reduce((va,cv) => va+cv);
    
}

//console.log(Math.max(1, 3, 2));

const getMayor = (...numeros) => {

    return Math.max(...numeros);
    // let mayor = 0;
    // for(let i = 0; i<numeros.length;i++){
    //     if(numeros[i] > mayor){
    //         mayor = numeros[i];
    //     }
    // }
    // return mayor;
}

console.log(getMayor(5,7,1,56,150,9));