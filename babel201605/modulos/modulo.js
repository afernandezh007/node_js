"use strict";

console.log('inicializa el modulo');

var objeto = {
    name: 'Jones'
};

function suma(a, b) {
    return a + b;
}

//module.exports = {suma: suma, objeto: objeto};
exports.suma = suma;