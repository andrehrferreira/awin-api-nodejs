"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill/noConflict");

var _axios = _interopRequireDefault(require("axios"));

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(awinaffid, acessToken) {
  return {
    programs: function programs() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        countryCode: "BR"
      };
      return _axios["default"].get("https://api.awin.com/publishers/".concat(awinaffid, "/programmes?accessToken=").concat(acessToken, "&").concat(_querystring["default"].encode(params))).then(function (response) {
        return response.data;
      })["catch"](function (err) {
        return err.message;
      });
    },
    deeplink: function deeplink(link, awinmid) {
      return new Promise(function (resolve, reject) {
        if (link && awinaffid) {
          resolve("https://www.awin1.com/cread.php?awinmid=".concat(awinmid, "&awinaffid=").concat(awinaffid, "&").concat(encodeURIComponent(link)));
        } else {
          reject('Missing link or awinmid');
        }
      });
    }
  };
};

exports["default"] = _default;
//# sourceMappingURL=index.js.map