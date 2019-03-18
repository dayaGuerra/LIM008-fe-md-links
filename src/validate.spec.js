"use strict";

var _validate = _interopRequireDefault(require("../lib/modules/validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var path = require('path');

describe('validarUrl', function () {
  it('debería de ser una función', function () {
    expect(_typeof(_validate.default)).toBe('function');
  });
  it('debería de devolver un objeto con las propiedades status y statustext', function () {
    return (0, _validate.default)("".concat(process.cwd(), "\\test\\prueba")).then(function (status) {
      var result = [{
        ruta: path.join("".concat(process.cwd()), '\\test\\prueba'),
        texto: 'hola',
        link: 'https://nodejs.org/en/',
        status: 200,
        statusText: 'OK'
      }, {
        ruta: path.join("".concat(process.cwd()), '\\test\\prueba'),
        texto: 'Node.js',
        link: 'https://nodejsjoven.org/en/',
        status: 'no existe',
        statusText: 'fail'
      }, {
        ruta: path.join("".concat(process.cwd()), '\\test\\prueba'),
        texto: '',
        link: 'https://nodejs.org/ojkko/',
        status: 404,
        statusText: 'fail'
      }, {
        ruta: path.join("".concat(process.cwd()), '\\test\\prueba'),
        texto: '',
        link: 'https://nodejs.org/ojkko/',
        status: 404,
        statusText: 'fail'
      }];
      expect(status).toEqual(result);
    });
  });
});