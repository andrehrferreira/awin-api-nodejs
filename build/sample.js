"use strict";

require("@babel/polyfill/noConflict");

require("dotenv/config");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var awin;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          awin = new _index["default"](process.env.AWIN_PUBLISHER_ID, process.env.AWIN_ACESS_TOKEN); // Doc https://wiki.awin.com/index.php/API_get_programmes

          awin.programs().then(console.log)["catch"](console.log);
          /*
          awin
              .deeplink("link", "awinmid")
              .then(console.log)
              .catch(console.log)
          */
          // Doc https://wiki.awin.com/index.php/API_get_programmes
          // Success

          awin.deeplink("https://loja.electrolux.com.br/", 17858).then(console.log)["catch"](console.log); // Return deeplink invalid

          awin.deeplink("https://www.americanas.com.br/", 11111).then(console.log)["catch"](console.log); // Return deeplink invalid

          awin.deeplink().then(console.log)["catch"](console.log);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
//# sourceMappingURL=sample.js.map