'use strict';

const constants = require('../common/constants');

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

        res.render(constants.views.simulator, {
            key: publicKey,
            device: device,
            params: params ? encodeURIComponent(params) : ''
        });
    }
}
