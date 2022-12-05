const dataJSON = '{"name":"Juan Carlos", "age":35, "phone":"525142551","works":true}';

// console.log("Formato JSON puro: ",dataJSON);

// console.log("Formato convertido a JS: ",JSON.parse(dataJSON));

const obj = {
    name: 'Fede',
    age: 23,
    works: false,
}

console.log("Objeto literal de JS: ",obj);
console.log("Objeto convertido a JSON: ",JSON.stringify(obj));