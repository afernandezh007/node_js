"use strict";

var fs = require('fs');
var path = require('path');

var versionModulo = function (moduleName, callback) {
    // definir ruta al fichero
    var fichero = path.join('./node_modules', moduleName, 'package.json');

    //leer fichero
    fs.readFile(fichero, {encoding: 'utf8'}, function (err, data) {
        if (err) {
            callback(err);
            return;
        }

        try {
            var packageJson = JSON.parse(data);
        }catch(e){
            callback(e);
            return;
        }
        callback(null, packageJson.version);

    });
};

versionModulo('chance', function (err, data) {
    if (err) {
        console.log('Error!', err);
        return;
    }
    console.log('La versión del modulo chance es', data);
})