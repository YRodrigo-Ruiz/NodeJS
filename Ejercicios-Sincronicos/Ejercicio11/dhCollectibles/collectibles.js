let fs = require("fs");

const readFiles = () => {
    let jsonImport1 = JSON.parse(fs.readFileSync(__dirname + '/datos/figures1.json', 'utf-8'));
    let jsonImport2 = JSON.parse(fs.readFileSync(__dirname + "/datos/figures2.json", "utf-8"));
    let jsonImport3 = JSON.parse(fs.readFileSync(__dirname + "/datos/figures3.json", "utf-8"));
    return allToys = [...jsonImport1, ...jsonImport2, ...jsonImport3];
}



const importar = (param) => {
    let selectBrand = readFiles();
    return selectBrand.filter((e) => e.brand == param);
}


module.exports = importar;
