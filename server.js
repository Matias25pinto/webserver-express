const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // Definir una carpeta publica, de esta forma muestra la pagina web dentro de public

// __dirname; lo que hace es tomar cualquier path que tenga y le concatene, esto se usa porque no sabemos la estructura de carpeta que tendremos en el servidor
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs'); // Express HBS engine


// todas las funciones que entran por / ejecutan el callBack
app.get('/', function(req, res) {


    res.render('home', {
        nombre: 'matias pinto'
    }); // renderizar el sitio web
});

app.get('/about', function(req, res) {
    res.render('about'); // renderizar el sitio web
});

app.get('/data', (req, res) => {
    res.send('Hola Data');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});