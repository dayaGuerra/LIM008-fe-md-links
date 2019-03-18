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
  const evaluarLinks = arrlinks.map(propiedad => new Promise(resolve => {
    fetch(propiedad.link).then(res => {
      if (res.status > 199 && res.status < 400) {
        resolve({ ...propiedad,
          status: res.status,
          statusText: res.statusText
        });
      } else {
        resolve({ ...propiedad,
          status: res.status,
          statusText: 'fail'
        });
      }
    }).catch(() => {
      resolve({ ...propiedad,
        status: 'no existe',
        statusText: 'fail'
      });
    });
  }));
  return Promise.all(evaluarLinks);
};

var _default = validarUrl;
exports.default = _default;