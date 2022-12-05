const collectible = require("./collectibles");

let hotToys = collectible("Hot Toys");
let bandai = collectible("Bandai");
let starWars = collectible("Star Wars");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
    figures: unifiedCollectibles,
    listFigures: function (){
        unifiedCollectibles.forEach((e)=> {
            console.log(`Marca ${element.marca}, variedad ${element.nombre}, en stock: ${element.stock} a $${element.precio} el paquete.`);


        })
    }
}

