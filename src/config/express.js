'use strict';

const exphbs = require('express-handlebars');
const express = require('express');
const expressValidator = require('express-validator');

module.exports = (app, socketConnections) => {
    app.engine('handlebars', exphbs({ defaultLayout: '../../src/views/layouts/main' }));
    app.set('view engine', 'handlebars');
    app.set('views', './src/views');

    app.use(expressValidator());

    app.use(express.static('src/public'));

    app.use((req, res, next) => {
        req.socketConnections = socketConnections;
        next();
    });
}
