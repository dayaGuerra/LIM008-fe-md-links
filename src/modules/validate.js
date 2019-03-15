"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mdlinks = _interopRequireDefault(require("../mdlinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fetch = require('node-fetch');

const validarUrl = arraydeobjetos => {
  const arrlinks = (0, _mdlinks.default)(arraydeobjetos);
  const evaluarLinks = arrlinks.map(propiedadDeObj => new Promise(resolve => {
    const propiedad = Object.assign(propiedadDeObj);
    fetch(propiedad.link).then(res => {
      if (res.status > 199 && res.status < 399) {
        propiedad.status = res.status;
        propiedad.statusText = res.statusText;
        resolve(propiedad);
      } else {
        propiedad.status = res.status;
        propiedad.statusText = 'fail';
        resolve(propiedad);
      }
    }).catch(() => {
      propiedad.status = 'no existe';
      propiedad.statusText = 'fail';
      resolve(propiedad);
    });
  }));
  return Promise.all(evaluarLinks);
};

var _default = validarUrl; // validarUrl('C:\\Users\\Laboratoria\\Documents\\Proyecto\\LIM008-fe-md-links\\test\\prueba').then(response => console.log(response));

exports.default = _default;