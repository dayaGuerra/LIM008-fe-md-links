"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsRotos = exports.funcionStats = void 0;

// Total de links y links unicos
const funcionStats = (data, propiedad) => {
  const newArr = data.map(obj => obj[propiedad]);
  const obj = {
    total: newArr.length,
    unicos: [...new Set(newArr)].length
  };
  return obj;
}; // Total de Links rotos


exports.funcionStats = funcionStats;

const statsRotos = data => {
  const linksRotos = data.filter(ele => ele.statusText === 'fail');
  return linksRotos.length;
};

exports.statsRotos = statsRotos;