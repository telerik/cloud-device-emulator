'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const constants = require('./common/constants');
const utils = require('./common/utils');

const logger = require('./logger');
const DeviceEmitter = require('./device-emitter');

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
                client.on('handshake', deviceIdentifier => {
                    socketConnections[deviceIdentifier] = client;
                    new DeviceEmitter().addDevice(utils.getDeviceInfo(deviceIdentifier));
                });

                client.on('device-disconnected', deviceIdentifier => {
                    delete socketConnections[deviceIdentifier];
                    new DeviceEmitter().removeDevice(deviceIdentifier);
                });
            });

            server.listen(port, () => {
                logger.log("Server stared listening");
                resolve(server.address().port);
            });

            server.on(constants.eventNames.error, err => reject(err));
        })
    }
}
