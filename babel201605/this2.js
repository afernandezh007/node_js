"use strict";

function Coche(){
    this.ruedas=4;
    this.cuantasRuedas = function () {
      console.log('tiene '+ this.ruedas);
    };
}

function leeFichero(fichero,callback){
    // ...
    callback();
}

var coche = new Coche();

coche.cuantasRuedas();

setTimeout(coche.cuantasRuedas.bind(coche), 2000);

leeFichero('package.json',coche.cuantasRuedas.bind(coche));