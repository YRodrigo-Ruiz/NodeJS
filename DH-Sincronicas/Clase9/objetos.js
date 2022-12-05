//Objetos literales
//representacion (una abstraccion) de la realidaed
// tipo de variable

const person = {
    //clave:valor
    name: '',
    age: 0.0,
    hobbies:[''],
    works: false,
    address: {
        street:'',
        city: '',
    },
    getHobbies: function(pos){
        return this.hobbies[pos]
    },
    getName: function(){
        return this.name;
    }
}

//console.log(person.getName());
// console.log(person.address.street)
// console.log(person.address.city)
// console.log(person.hobbies[1]);
// for(let i=0;i<person.hobbies.length;i++){
//     console.log(person.hobbies[i])
// }


const dot = {
    coordX: 5,
    coordY: 20,
    getX: function(){
        return this.coordX;
    },
    getY: function(){
        return this.coordY;
    }
}

function Dot(coordx, coordy){
    this.coordX = coordx;
    this.coordY = coordy;
}

const dot1 = new Dot(6,7);
const dot2 = new Dot(65,0);
const dot3 = new Dot(0,17);

console.log(dot1);
console.log(dot2);
console.log(dot3);