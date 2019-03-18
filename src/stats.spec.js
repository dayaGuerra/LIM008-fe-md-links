"use strict";

var _stats = require("../lib/modules/stats");

var _joinLink = _interopRequireDefault(require("../lib/modules/joinLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var path = require('path');

describe('stats', function () {
  describe('funcionstats', function () {
    it('debería de ser una función', function () {
      expect(_typeof(_stats.funcionStats)).toBe('function');
    });
    it('debería devolver un objeto con dos propiedades, totales y unicos', function () {
      var link = (0, _joinLink.default)("C:\\Users\\Laboratoria\\Documents\\Proyecto\\LIM008-fe-md-links\\test\\prueba");
      expect((0, _stats.funcionStats)(link)).toEqual({
        total: 4,
        unicos: 1
      });
    });
  });
  describe('statsRotos', function () {
    it('debería de ser una función', function () {
      expect(_typeof(_stats.statsRotos)).toBe('function');
    });
    it('debería devolver el numero total de links rotos', function () {
      var arrLinks = [{
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
      expect((0, _stats.statsRotos)(arrLinks)).toEqual(3);
    });
  });
});