'use strict';

const EventEmitter = require("events").EventEmitter;
const constants = require("./common/constants");
const serverLauncher = require("./server-launcher");
const http = require("http");

let instance = null;

class DeviceEmitter extends EventEmitter {
    constructor() {
        super();
        if (!instance) {
            this.devices = {};
            this.startServerPromise = serverLauncher.startServer().then(port => {
                this.port = port;
                http.get({
                    host: constants.server.host,
                    port: port,
                    path: constants.server.devicesUrlPath
                }, res => {
                    let rawData = '';
                    res.on('data', chunk => { rawData += chunk; });
                    res.on('end', () => {
                        const parsedData = JSON.parse(rawData);
                        parsedData.forEach(device => {
                            this.addDevice(device);
                        });
                    });
                });

                return {
                    host: constants.server.host,
                    port: port
                };
            });

            instance = this;
        }

        return instance;
    }

    getSeverAddress() {
        return !this.port ? this.startServerPromise : {
            host: constants.server.host,
            port: this.port
        };
    }

    addDevice(device) {
        this.devices[device.identifier] = device;
        this._raiseOnDeviceFound(device);
    }

    removeDevice(deviceIdentifier) {
        let device = this.devices[deviceIdentifier];
        if (!device) {
            return;
        }

        delete this.devices[deviceIdentifier];
        this._raiseOnDeviceLost(device);
    }

    getCurrentlyAttachedDevices() {
        return this.devices;
    }

    _raiseOnDeviceFound(device) {
        this.emit(constants.eventNames.deviceFound, device);
    }

    _raiseOnDeviceLost(device) {
        this.emit(constants.eventNames.deviceLost, device);
    }
}

module.exports = DeviceEmitter;
