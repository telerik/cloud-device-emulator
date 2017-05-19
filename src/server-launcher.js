'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const constants = require('./common/constants');

const tempDir = path.join(__dirname, 'tmp');
const statusFilePath = path.join(tempDir, 'status.txt');

let server = null;

module.exports = {
    startServer: () => {
        server = require('./server');
        let currentServerPort;
        return getState()
            .then(port => checkServerHealth(port)
                .then(serverHealth => {
                    currentServerPort = port;
                    if (!serverHealth) {
                        return server.start(port)
                            .catch(initServerWithFreePort)
                            .then(port => {
                                currentServerPort = port;
                                watchStatusFile();
                                return currentServerPort;
                            });
                    }

                    return currentServerPort;
                })
            , err => initServerWithFreePort()
                .then(port => {
                    currentServerPort = port;
                    watchStatusFile();
                    return currentServerPort;
                })
            );
    }
}

function initServerWithFreePort(err) {
    return server.start(0)
        .then(saveState);
}

function saveState(port) {
    return new Promise((resolve, reject) => {
        ensureDirExists(tempDir);
        fs.writeFile(statusFilePath, port, err => err ? reject(err) : resolve(port));
    });
}

function getState() {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(tempDir)) {
            return reject();
        }

        if (fs.existsSync(statusFilePath)) {
            return fs.readFile(statusFilePath, 'utf8', (err, data) => {
                err ? reject(err) : resolve(data)
            });
        }

        reject();
    });
}

function watchStatusFile() {
    fs.watch(tempDir, (event, fileName) => {
        if (event === 'rename') {
            process.exit(1);
        }
    });
}

function checkServerHealth(port) {
    return new Promise((resolve, reject) => {
        const getRequest = http.get({
            host: constants.server.host,
            port: port,
            path: constants.server.healthUrlPath
        }, res => resolve(res.statusCode === 200));

        getRequest.on(constants.eventNames.error, err => resolve(false));
    });
}

function ensureDirExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}
