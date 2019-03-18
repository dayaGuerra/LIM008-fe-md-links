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

const [,, ...args] = process.argv;
const arg = process.argv.slice(2);

const cli = () => {
  if (arg.length === 3) {
    // respuesta stats + validate
    if (arg[1] === '--stats' && arg[2] === '--validate') {
      const links = (0, _joinLink.default)(arg[0]);
      (0, _validate.default)(arg[0]).then(response => {
        console.log(` Total:  ${(0, _stats.funcionStats)(links).total}\n unique: ${(0, _stats.funcionStats)(links).unicos}\n Broken: ${(0, _stats.statsRotos)(response)}`);
      });
    }
  } // respuesta statss o validate


  if (arg.length === 2) {
    if (arg[1] === '--stats') {
      const links = (0, _joinLink.default)(arg[0]);
      console.log(` Total:  ${(0, _stats.funcionStats)(links).total}\n unique: ${(0, _stats.funcionStats)(links).unicos}`);
    }

    if (arg[1] === '--validate') {
      (0, _validate.default)(arg[0]).then(response => response.forEach(ele => console.log(`${ele.ruta} ${ele.link} ${ele.texto} ${ele.status} ${ele.statusText}`)));
    }
  } else {
    (0, _joinLink.default)(arg[0]).forEach(ele => console.log(`${ele.ruta} ${ele.link} ${ele.texto}`));
  }
};

var _default = cli;
exports.default = _default;
cli();