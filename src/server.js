'use strict';

module.exports = {
    start: port => {
        return new Promise((resolve, reject) => {
            const express = require('express');
            const app = express();
            const server = require('http').createServer(app);
            const socket = require('socket.io')(server);

            let socketConnections = {};

            require('./config/express')(app, socketConnections);
            require('./config/routes')(app);

            socket.on('connection', client => {
                client.on('handshake', data => {
                    socketConnections[data] = client;
                });

                client.on('device-disconnected', data => {
                    delete socketConnections[data];
                });
            });

            server.listen(port, () => {
                resolve(server.address().port);
            });

            server.on('error', err => reject(err));
        })
    }
}


