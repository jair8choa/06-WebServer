const express = require('express');
const app = express();
const port = 3000;
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'))
    //
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        info: 'Home',
        nombre: 'Joaquin',
        anio: new Date().getFullYear()
    });
});

app.get('/about/', (rep, res) => {
    res.render('about', {
        info: 'About',
        nombre: 'Jairo',
        anio: new Date().getFullYear()
    })
})

app.listen(port);