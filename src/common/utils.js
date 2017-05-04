'use strict';

const constants = require('../common/constants');

module.exports = {
    successResponse: (res) => {
        res.status(constants.responseCode.ok)
            .json({ msg: constants.successMesseges.success });
    },

    errorResponse: (res, errors) => {
        res.status(constants.responseCode.badRequest)
            .json({ errors });
    }
}
