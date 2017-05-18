'use strict';

const serverLauncher = require('./src/server-launcher');
const DeviceEmitter = require('./src/device-emitter');
const DeviceManager = require('./src/device-manager');
const deviceEmitterInstance = new DeviceEmitter();
const deviceManager = new DeviceManager();

module.exports = {
    getSeverAddress: deviceEmitterInstance.getSeverAddress.bind(deviceEmitterInstance),
    deviceEmitter: deviceEmitterInstance,
    refresh: deviceManager.refresh.bind(deviceManager)
}
