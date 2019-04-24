'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    reconnectTries: 1000
};

exports.default = function (callback) {
    var db = _mongoose2.default.connect('mongodb://localhost:27017/skalilo-api', options).then(function () {
        console.log('db connected successfuly'), function (err) {
            console.log(err);
        };
    });
    callback();
};
//# sourceMappingURL=index.js.map