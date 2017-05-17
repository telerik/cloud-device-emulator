'use strict';

const constants = require('../common/constants');
const uuid = require('uuid');

module.exports = {
    get: (req, res) => {
        req.checkQuery(constants.params.publicKey, constants.errorMessages.requiredParameter).notEmpty();
        req.checkQuery(constants.params.device, constants.errorMessages.requiredParameter).notEmpty();

        const errors = req.validationErrors();
        if (errors) {
            return res.render(constants.views.error)
        }

        const publicKey = req.query.publicKey;
        const device = req.query.device;
        const params = req.query.params;
        const deviceIdentifier = uuid.v4();

        res.render(constants.views.simulator, {
            key: publicKey,
            device: device,
            deviceIdentifier: deviceIdentifier,
            params: params ? encodeURIComponent(params) : ''
        });
    }
}
