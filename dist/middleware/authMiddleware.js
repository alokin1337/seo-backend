"use strict";

var _expressJwt = require("express-jwt");

var _expressJwt2 = _interopRequireDefault(_expressJwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// move to env vars
var loginTokenTime = 60 * 60 * 24 * 30; // 30 days

// move to env vars
var SECRET = "Node secRet Is This";

var authenticate = (0, _expressJwt2.default)({ secret: SECRET });

var generateAccessToken = function generateAccessToken(req) {
    req.token = req.token || {};
    req.token = jwt.sign({
        id: req._id
    }, SECRET, {
        expiresIn: loginTokenTime
    });
};

var respond = function respond(req, res) {
    res.status(200).json({
        user: req.username,
        token: req.token
    });
};

module.exports = {
    authenticate: authenticate,
    generateAccessToken: generateAccessToken,
    respond: respond
};
//# sourceMappingURL=authMiddleware.js.map