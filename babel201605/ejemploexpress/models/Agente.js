"use strict";

var mongoose = require('mongoose');

// crear un esquema de agente

var agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});

//metodo estatico para el modelo
agenteSchema.statics.list = function (query, start, limit, cb) {

    var consulta = Agente.find(query);

    consulta.skip(start);
    consulta.limit(limit);

    consulta.exec(function (err, rows) {
        if (err) {
            cb(err);
            return;
        }

        cb(null, rows);
    });
};


var Agente = mongoose.model('Agente', agenteSchema);

