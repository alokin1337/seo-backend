'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    api.get('/pagespeed', function (req, res) {

        // pagespeedapi https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed
        var options = {
            url: "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=http://skalilo.com",
            params: {
                strategy: "desktop",
                category: "seo"
            }
        };

        var url = options.url + '?' + _querystring2.default.stringify(options.params);
        console.log(url);
        (0, _nodeFetch2.default)(url).then(function (res) {
            return res.json();
        }).then(function (json) {
            res.status(200).json({ json: json });
        });
    });

    api.get('/webmaster', function (req, res) {
        // webmaster https://developers.google.com/webmaster-tools/search-console-api-original/v3/

        // search google for sitemap "site:seo-michael.co.uk inurl:sitemap"
        // check the robot file for sitemap "site:seo-michael.co.uk inurl:robots.txt"


    });

    return api;
};
//# sourceMappingURL=website.js.map