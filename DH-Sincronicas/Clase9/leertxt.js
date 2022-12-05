const fs = require('fs');

//leer archivo en variable

const data = fs.readFileSync(__dirname + '/datos.txt','utf-8');
console.log(data);