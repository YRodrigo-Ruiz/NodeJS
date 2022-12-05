const peliculas = require ("./peliculas");

peliculas.forEach(e => console.log(`Los nombres de las películas en cartelera son: ${e.id}`));

const fs = require ('fs');
const mensaje = fs.readFileSync('./mensaje.txt', {encoding: 'utf-8'});
console.log(mensaje);

fs.writeFileSync('./mensaje2.txt', mensaje + "Hola desde app.js");
