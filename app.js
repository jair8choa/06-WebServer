const express = require('express');
const app = express();
const port = 3000;
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'))
    //
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        info: 'Home',
        nombre: 'Joaquin',
    });
});

app.get('/about', (rep, res) => {
    res.render('about', {
        info: 'About',
        nombre: 'Jairo',
    });
});
console.log(`PUERTO: ${port}`);
app.listen(port);