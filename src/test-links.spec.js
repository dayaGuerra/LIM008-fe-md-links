"use strict";

var _controllerLinks = require("../src/moduls/controller-links.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('rutaRelativa', function () {
  it('debería de ser una función', function () {
    expect(_typeof(_controllerLinks.rutaRelativa)).toBe('function');
  });
  it('deberia de retornar una ruta absoluta despues de recibir una ruta relativa', function () {
    expect((0, _controllerLinks.rutaRelativa)('../src/moduls/controller-links.js')).toEqual("C:\\Users\\ADMIN\\Documents\\PROYECTOS\\src\\moduls\\controller-links.js");
  });
});