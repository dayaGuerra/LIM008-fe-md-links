"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joinLink = _interopRequireDefault(require("./joinLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fetch = require('node-fetch');

const validarUrl = arraydeobjetos => {
  const arrlinks = (0, _joinLink.default)(arraydeobjetos);
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

validarUrl(`${process.cwd()}\\test\\prueba`).then(result => console.log(result)).catch(result => console.log(result));
var _default = validarUrl;
exports.default = _default;