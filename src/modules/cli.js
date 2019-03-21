"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stats = require("./stats");

var _joinLink = _interopRequireDefault(require("./joinLink"));

var _validate = _interopRequireDefault(require("./validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = function cli(arg) {
  if (arg.length === 0) {
    console.log('Ingresa una ruta valida');
  }

  if (arg.length === 3) {
    // respuesta stats + validate
    if (arg[1] === '--stats' && arg[2] === '--validate' || arg[2] === '--validate' && arg[1] === '--stats') {
      var links = (0, _joinLink.default)(arg[0]);
      (0, _validate.default)(arg[0]).then(function (response) {
        console.log(" Total:  ".concat((0, _stats.funcionStats)(links).total, "\n unique: ").concat((0, _stats.funcionStats)(links).unicos, "\n Broken: ").concat((0, _stats.statsRotos)(response)));
      });
    }
  } // respuesta stats o validate


  if (arg.length === 2) {
    if (arg[1] === '--stats') {
      var _links = (0, _joinLink.default)(arg[0]);

      console.log(" Total:  ".concat((0, _stats.funcionStats)(_links).total, "\n unique: ").concat((0, _stats.funcionStats)(_links).unicos));
    }

    if (arg[1] === '--validate') {
      (0, _validate.default)(arg[0]).then(function (response) {
        return response.forEach(function (ele) {
          return console.log("".concat(ele.ruta, " ").concat(ele.link, " ").concat(ele.texto, " ").concat(ele.status, " ").concat(ele.statusText));
        });
      });
    }
  }

  if (arg.length === 1) {
    (0, _joinLink.default)(arg[0]).forEach(function (ele) {
      return console.log("".concat(ele.ruta, " ").concat(ele.link, " ").concat(ele.texto));
    });
  }
};

var _default = cli;
exports.default = _default;