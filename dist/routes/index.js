'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _index = require('../database/index');

var _index2 = _interopRequireDefault(_index);

var _middleware = require('../middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _website = require('../controller/website');

var _website2 = _interopRequireDefault(_website);

var _account = require('../controller/account');

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

// connect to db
(0, _index2.default)(function (db) {

  // internal middleware
  router.use((0, _middleware2.default)({ config: _config2.default, db: db }));

  // api routes v1 (/)

  router.use('/', (0, _website2.default)({ config: _config2.default, db: db }));
  router.use('/', (0, _account2.default)({ config: _config2.default, db: db }));
});

exports.default = router;
//# sourceMappingURL=index.js.map