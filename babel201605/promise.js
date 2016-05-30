"use strict";

var fs = require('fs');

function leeFichero(nomFile){
    return new Promise(function (resolve, reject) {
        fs.readFile(nomFile,'utf8',function (err, data) {
            if(err){
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}


leeFichero('./this1.js').then(function (data) {
   console.log('data', data); 
}).catch(function (err) {
    console.log('Error',err);
});