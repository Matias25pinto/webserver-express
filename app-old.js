const http = require('http');

// Para poder esuchar peticiones http primero debemos crear el servidor

http.createServer((req, res) => {

        res.writeHead(200, { 'Contet-Type': 'application/json' }); // informar en la cabecera que vamos a enviar un JSON

        let salida = {
            nombre: 'Matias Pinto',
            edad: 27,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        //res.write('Hola mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');