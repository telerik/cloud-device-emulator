'use strict';

function log() {
    const args = [new Date()].concat(Array.prototype.slice.call(arguments));
    return console.log.apply(console, args);
}

function error() {
    const args = [new Date()].concat(Array.prototype.slice.call(arguments));
    return console.error.apply(console, args);
}

module.exports = {
    log,
    error
};
