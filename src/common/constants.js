'use strict';

const path = require('path');
const packageName = "cloud-device-emulator";
const osenv = require('osenv');

const winLogFilesLocation = path.join(process.env.APPDATA || "", packageName);
const unixLogFilesLocation = path.join(osenv.home(), ".local", "share", packageName);
const logsDir = process.platform === "win32" ? winLogFilesLocation : unixLogFilesLocation;
const statusFileDir = path.join(logsDir, "health");

module.exports = {
    common: {
        name: packageName,
        logFilesDeleteDaysNumber: 30
    },
    errorMessages: {
        requiredParameter: 'The parameter is required.',
        scaleErrorMessage: 'The parameter must be a number between 10 and 100.',
        deviceNotConnetcted: 'There is no connected device.'
    },
    successMesseges: {
        success: 'success'
    },
    statusMassages: {
        OK: 'OK'
    },
    logFilesLocation: {
        win: winLogFilesLocation,
        unix: unixLogFilesLocation,
        logsDir,
        statusFileDir,
        statusFilePath: path.join(statusFileDir, 'status.txt')
    },
    methods: {
        rotateLeft: 'rotateLeft',
        rotateRight: 'rotateRight',
        emitHomeButton: 'emitHomeButton',
        heartbeat: 'heartbeat',
        restartApp: 'restartApp',
        endSession: 'endSession',
        getScreenshot: 'getScreenshot',
        requestSession: 'requestSession',
        saveScreenshot: 'saveScreenshot',
        setScale: 'setScale',
        mouseclick: 'mouseclick',
        keypress: 'keypress',
        openUrl: 'openUrl',
        pasteText: 'pasteText',
        setLanguage: 'setLanguage',
        setLocation: 'setLocation',
        publicKey: 'publicKey',
        device: 'device',
        refresh: 'refresh'
    },
    params: {
        scale: 'scale',
        x: 'x',
        y: 'y',
        key: 'key',
        shiftKey: 'shiftKey',
        url: 'url',
        text: 'text',
        lang: 'lang',
        lat: 'lat',
        long: 'long',
        publicKey: 'publicKey',
        device: 'device',
        deviceIdentifier: 'deviceIdentifier'
    },
    views: {
        simulator: 'simulator',
        error: 'error'
    },
    os: {
        android: 'android',
        ios: 'ios'
    },
    device: {
        android: 'nexus'
    },
    responseCode: {
        ok: 200,
        badRequest: 400
    },
    server: {
        host: 'localhost',
        healthUrlPath: '/api/health',
        devicesUrlPath: '/api/simulators/devices',
        quitPath: '/api/quit'
    },
    eventNames: {
        deviceFound: "deviceFound",
        deviceLost: "deviceLost",
        deviceEmitter: "deviceEmitter",
        data: "data",
        error: "error",
        end: "end"
    }
}
