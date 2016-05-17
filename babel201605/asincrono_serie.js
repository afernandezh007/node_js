"use strict";

console.log('empiezo');

function escribeTras2Segundos(texto,callback){
    setTimeout(function () {
        console.log('text '+  texto);
        callback();
    },1000);
}

// llama a una funcion n veces en serie
// al finalizar llama aun callback de finalizacion

function serie(n ,func, callbackFinalizacion) {
    if(n <= 0){
        callbackFinalizacion();
        return;
    }
    n--;
    func(n, function () {
        serie(n, func, callbackFinalizacion);
    });
}


// invocar en serie
serie(5, escribeTras2Segundos, function(){
    console.log('Terminado');
});