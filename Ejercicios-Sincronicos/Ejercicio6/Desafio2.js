let peli = ["Turno de dia", "30 noches con mi ex","Bestia", "El monte", "Top gun maverick","Elvis", "Thor: amor y trueno"];

function ordenar(pelicula) {
    // Preguntar si la pelicula esta en el array
    if (! peliculas.includes(pelicula)) {
        let mensaje = "La pelicula no encuentra en el listado";
        return mensaje
    }

    // Averiguar pisicion de la pelicula 
    let index = peliculas.indexOf(pelicula);
    // Almacenar en variable pelicula el elemnto buscado
    pelicula = peliculas.splice(index, 1);
    console.log(pelicula);
    //Convertir el eeray pelicula en string y pasarlo a mayuscula
    pelicula = pelicula.join().toUpperCase();
    // Agrego elemento al inicio del array
    peliculas.splice(0,0,pelicula); //peliculas.unshift(pelicula)
        
    return peliculas;
}

let estrenos = "Counter-Strike NOP Vertigo Nick Avatar";

let estrenosArray = estrenos.split(" ");
console.log(estrenosArray);
estrenosArray.shift();
console.log(estrenosArray);

function unirListas(lista1, lista2) {
    return lista1.concat(lista2);    
}

console.log(unirListas(peliculas, estrenosArray))
