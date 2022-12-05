// npm: node package manager
const fs = require('fs');

// console.log(__dirname + '/datos/bicis.json')
const bicis = JSON.parse(fs.readFileSync( __dirname + '/datos/bicis.json', 'utf-8'));

module.exports = bicis;