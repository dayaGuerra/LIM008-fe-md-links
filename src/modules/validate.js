"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joinLink = _interopRequireDefault(require("./joinLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetch = require('node-fetch'); // funcion para validar las peticiones HTTP


var validarUrl = function validarUrl(arraydeobjetos) {
  var arrlinks = (0, _joinLink.default)(arraydeobjetos);
  var evaluarLinks = arrlinks.map(function (propiedad) {
    return new Promise(function (resolve) {
      fetch(propiedad.link).then(function (res) {
        if (res.status > 199 && res.status < 400) {
          resolve(_objectSpread({}, propiedad, {
            status: res.status,
            statusText: res.statusText
          }));
        } else {
          resolve(_objectSpread({}, propiedad, {
            status: res.status,
            statusText: 'fail'
          }));
        }
      }).catch(function () {
        resolve(_objectSpread({}, propiedad, {
          status: 'no existe',
          statusText: 'fail'
        }));
      });
    });
  });
  return Promise.all(evaluarLinks);
};

var _default = validarUrl;
exports.default = _default;