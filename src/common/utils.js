'use strict';

const constants = require('../common/constants');

module.exports = {
    successResponse: (res) => {
        res.status(200)
            .json({ msg: constants.successMesseges.success });
    },

    errorResponse: (res, errors) => {
        res.status(400)
            .json({ errors });
    }
}
