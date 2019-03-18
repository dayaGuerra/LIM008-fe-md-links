"use strict";

var _mdlinks = _interopRequireDefault(require("../lib/mdlinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('mdlinks', function () {
  it('debería de ser una función', function () {
    expect(_typeof(_mdlinks.default)).toBe('function');
  });
});