const net = require('net');
const server = require('./src/server');

module.exports = {
    startServer: (port) => {
        return server.start(port || 0);
    }
}
