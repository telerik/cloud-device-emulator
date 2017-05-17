'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const constants = require('./common/constants');
const utils = require('./common/utils');

const DeviceEmitter = require('./device-emitter');

module.exports = {
    start: port => {
        return new Promise((resolve, reject) => {
            const deviceEmitterInstance = new DeviceEmitter();
            const express = require('express');
            const app = express();
            const server = require('http').createServer(app);
            const socket = require('socket.io')(server);

            let socketConnections = {};

            require('./config/express')(app, socketConnections);
            require('./config/routes')(app);

            socket.on('connection', client => {
                client.on('handshake', deviceIdentifier => {
                    socketConnections[deviceIdentifier] = client;
                    deviceEmitterInstance.addDevice(utils.getDeviceInfo(deviceIdentifier));
                });

                client.on('device-disconnected', deviceIdentifier => {
                    delete socketConnections[deviceIdentifier];
                    deviceEmitterInstance.removeDevice(deviceIdentifier);
                });
            });

            server.listen(port, () => {
                resolve(server.address().port);
            });

            server.on('error', err => reject(err));
        })
    }
}
