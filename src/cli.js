#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stats = require("./modules/stats");

var _joinLink = _interopRequireDefault(require("./modules/joinLink"));

var _validate = _interopRequireDefault(require("./modules/validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arg = process.argv.slice(2);

var cli = function cli() {
  if (arg.length === 3) {
    // respuesta stats + validate
    if (arg[1] === '--stats' && arg[2] === '--validate') {
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
  } else {
    (0, _joinLink.default)(arg[0]).forEach(function (ele) {
      return console.log("".concat(ele.ruta, " ").concat(ele.link, " ").concat(ele.texto));
    });
  }
};

var _default = cli;
exports.default = _default;
cli();