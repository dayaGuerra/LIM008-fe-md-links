"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsRotos = exports.funcionStats = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Total de links y links unicos
var funcionStats = function funcionStats(data, propiedad) {
  var newArr = data.map(function (obj) {
    return obj[propiedad];
  });
  var obj = {
    total: newArr.length,
    unicos: _toConsumableArray(new Set(newArr)).length
  };
  return obj;
}; // Total de Links rotos


exports.funcionStats = funcionStats;

var statsRotos = function statsRotos(data) {
  var linksRotos = data.filter(function (ele) {
    return ele.statusText === 'fail';
  });
  return linksRotos.length;
};

exports.statsRotos = statsRotos;