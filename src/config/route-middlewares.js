'use strict'

const constatnts = require('../common/constants');
const utils = require('../common/utils');

module.exports = {
    populateSocket: (req, res, next) => {
        req.checkParams(constatnts.params.publicKey, constatnts.errorMessages.requiredParameter).notEmpty();
        req.checkParams(constatnts.params.device, constatnts.errorMessages.requiredParameter).notEmpty();
        const errors = req.validationErrors();
        if (errors) {
            return utils.errorResponse(res, errors);
        }

        const publicKey = req.params.publicKey;
        const device = req.params.device;
        req.simulatorSocket = req.socketConnections[`${publicKey}-${device}`];

        if (!req.simulatorSocket) {
            return utils.errorResponse(res, [{ msg: constatnts.errorMessages.deviceNotConnetcted }]);
        }

        next();
    }
}
