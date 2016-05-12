"use strict";

console.log('empiezo');

//hacemos funcion asincrona que recibe un callback

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

//invocar funcion asincrona con callback
escribeTras2Segundos('texto1', function () {
    escribeTras2Segundos('texto2', function () {
        console.log('termino');
    });
});

