"use strict";

//funcion que espera con callback

function espera(milis, cb) {
    setTimeout(() => {
        console.log('He esperado ', milis);
        return cb('fin',{a:1});
    }, milis);
}

//consumir la funcion de forma secuencial

run(function*(sigue) {

    for(let i =0;i<10;i++){
        let res = yield espera(1000, sigue);
        console.log(res);
    }
});

//Funcion ayudante
function run(generatorFn) {
    let iterador = generatorFn(sigue);

    function sigue() {
        var args = Array.prototype.slice.call(arguments);
        iterador.next(args);
    }

    // iterador.next(arguments);
}