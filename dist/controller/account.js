'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _account = require('../models/account');

var _account2 = _interopRequireDefault(_account);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _authMiddleware = require('../middleware/authMiddleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    api.get('/', function (req, res) {
        res.status(200).send({ username: req.body.username });
    });

    // register route

    api.post('/register', function (req, res) {

        // check if user with that email exits
        _account2.default.findOne({ email: req.body.email }, function (err, user) {
            if (user) return res.status(400).send({ msg: 'There is an account with this email' });
            if (err) return res.status(500).send({ msg: 'Something went wrong 1' });

            var acc = new _account2.default(req.body);
            console.log(acc);
            acc.save(function (error) {
                if (error) {
                    return res.status(500).send({ msg: 'Something went wrong' });
                }
                return res.status(200).send({ msg: 'Account was succesfully Created' });
            });
        });
    });

    // login route
    api.post('/login', function (req, res) {
        _account2.default.findOne({ email: req.body.email }, function (err, user) {
            if (!user) return res.status(400).send({ msg: "Username doesnt exits" });

            _passport2.default.authenticate('local', {
                session: true,
                scope: []
            });
            (0, _authMiddleware.generateAccessToken)(user);
            (0, _authMiddleware.respond)(user, res);
        });
    });

    return api;
};
//# sourceMappingURL=account.js.map