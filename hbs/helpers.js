const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    anio = new Date().getFullYear();
    return anio;
})