"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./modules/validate"));

var _joinLink = _interopRequireDefault(require("./modules/joinLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mdLinks = function mdLinks(path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    validate: false
  };
  return new Promise(function (resolve, reject) {
    if (typeof path !== 'string') {
      reject(new TypeError('Esperaba un valor string'));
    }

    if (options.validate) {
      (0, _validate.default)(path).then(function (response) {
        return resolve(response);
      });
    } else {
      resolve((0, _joinLink.default)(path));
    }
  });
};

var _default = mdLinks;
exports.default = _default;