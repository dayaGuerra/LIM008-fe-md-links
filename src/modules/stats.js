"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsRotos = exports.funcionStats = void 0;

var _validate = _interopRequireDefault(require("./validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

const statsRotos = dat => {
  console.log(typeof dat);
  const linksRotos = dat.filter(ele => ele.statusText === 'fail');
  return linksRotos.length;
};

exports.statsRotos = statsRotos;
console.log(statsRotos((0, _validate.default)('C:\\Users\\Laboratoria\\Documents\\Proyecto\\LIM008-fe-md-links\\test\\prueba')));