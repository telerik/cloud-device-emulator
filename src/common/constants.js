'use strict';

module.exports = {
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
        devicesUrlPath: '/api/simulators/devices'
    },
    eventNames: {
        deviceFound: "deviceFound",
        deviceLost: "deviceLost"
    }
}
