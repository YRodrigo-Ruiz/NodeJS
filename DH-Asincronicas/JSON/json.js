//Example 1
let amigos = ["Coco", "Pablito", "Sus", "Franco"];

let amigosJSON = JSON.stringify(amigos);

let amigosOriginal = JSON.parse(amigosJSON);

//Example 2
let person = {
    name : "Carli",
    age : 26,
    adress : "Street 123"
};

let personJSON = JSON.stringify(person);

let originalPerson = JSON.parse(personJSON);




