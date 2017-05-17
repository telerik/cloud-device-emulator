'use strict';

const serverLauncher = require('./src/server-launcher');
const DeviceEmitter = require('./src/device-emitter');
const deviceEmitterInstance = new DeviceEmitter();

module.exports = {
    getSeverAddress: deviceEmitterInstance.getSeverAddress.bind(deviceEmitterInstance),
    deviceEmitter: deviceEmitterInstance
}
