
//cargar la libreria de node http

var http = require('http');

// crear un servidor 
var server = http.createServer(function(request, response){
    // response.writeHead(200,{'Content-Type': 'text/plain'});
    response.writeHead(200,{'Content-Type': 'text/html charset=UTF-8'});

    response.end('Wake up, <b>Neo and Trinity</b>...\n');
});

//arrancar el servidor
server.listen(1337,'127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1337');
