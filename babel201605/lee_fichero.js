"use strict";

//cargar modulo de node filesystem
var fs =require('fs');

//leer fichero

fs.readFile('./hoisting.js','utf8',function (err,data) {
   //cuando haya leido el fichero readFile llamará a esta funcion de callback
    if(err){
        console.log('Error', err);
        return;
    }
    //si no ha habido error
    //escribir su contenido
    console.log(data);
});

console.log('fin');
