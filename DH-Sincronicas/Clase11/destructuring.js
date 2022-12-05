const nombres = ['juan','maria', 'ana'];
let [name1,,name3] = nombres;

const obj = [
    {
        id: 1,
        name: 'juan',
        age: 23
    },
    {
        id: 2,
        name: 'ramiro',
        age: 19
    },

 ]
const ele = obj.map(function(elem) {
   return elem
})
const [e1,e2] = obj; 

const {name} = e1;
console.log(name);
//console.log(e1);
// console.log(e2);

//console.log(obj[1].name)

// const obj = {
//       id: 1,
//       name: 'juan',
//       age: 23
// };

// const {id, name, age} = obj;

// console.log(name);
