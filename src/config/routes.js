'use strict';

const controllers = require('../controllers');
const routeMiddware = require('./route-middlewares');

module.exports = app => {
    app.get('/', controllers.layout.get);

    //API
    app.get('/api/health', routeMiddware.healthcheckMiddleware);
    app.get('/api/simulators/devices', controllers.simulator.getConnectedDevice);
    app.post('/api/simulators/:device/:publicKey/rotateleft', routeMiddware.populateSocket, controllers.simulator.rotateLeft);
    app.post('/api/simulators/:device/:publicKey/rotateright', routeMiddware.populateSocket, controllers.simulator.rotateRight);
    app.post('/api/simulators/:device/:publicKey/emitHomeButton', routeMiddware.populateSocket, controllers.simulator.emitHomeButton);
    app.post('/api/simulators/:device/:publicKey/setScale', routeMiddware.populateSocket, controllers.simulator.setScale);
    app.post('/api/simulators/:device/:publicKey/heartbeat', routeMiddware.populateSocket, controllers.simulator.heartbeat);
    app.post('/api/simulators/:device/:publicKey/mouseclick', routeMiddware.populateSocket, controllers.simulator.mouseclick);
    app.post('/api/simulators/:device/:publicKey/keypress', routeMiddware.populateSocket, controllers.simulator.keypress);
    app.post('/api/simulators/:device/:publicKey/openUrl', routeMiddware.populateSocket, controllers.simulator.openUrl);
    app.post('/api/simulators/:device/:publicKey/restartApp', routeMiddware.populateSocket, controllers.simulator.restartApp);
    app.post('/api/simulators/:device/:publicKey/endSession', routeMiddware.populateSocket, controllers.simulator.endSession);
    app.post('/api/simulators/:device/:publicKey/saveScreenshot', routeMiddware.populateSocket, controllers.simulator.saveScreenshot);
    app.post('/api/simulators/:device/:publicKey/getScreenshot', routeMiddware.populateSocket, controllers.simulator.getScreenshot);
    app.post('/api/simulators/:device/:publicKey/requestSession', routeMiddware.populateSocket, controllers.simulator.requestSession);
    app.post('/api/simulators/:device/:publicKey/pasteText', routeMiddware.populateSocket, controllers.simulator.pasteText);
    app.post('/api/simulators/:device/:publicKey/setLanguage', routeMiddware.populateSocket, controllers.simulator.setLanguage);
    app.post('/api/simulators/:device/:publicKey/setLocation', routeMiddware.populateSocket, controllers.simulator.setLocation);
};
