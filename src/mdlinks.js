"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./modules/validate"));

var _joinLink = _interopRequireDefault(require("./modules/joinLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (typeof path !== 'string') {
    reject(new TypeError('Esperaba un valor string'));
  }

  if (options === '--validate') {
    (0, _validate.default)(path).then(response => resolve(response));
  } else {
    resolve((0, _joinLink.default)(path));
  }
});

var _default = mdLinks;
exports.default = _default;