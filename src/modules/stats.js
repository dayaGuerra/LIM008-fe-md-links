"use strict";

var _links = _interopRequireDefault(require("./links"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const output3 = ['## Título\r\n[hola](https://nodejs.org/en/)\r\n### Subtítulo\r\nAl texto en Markdown puedes añadirle formato como **negrita** \r\n![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)\r\n[Node.js](https://nodejsjoven.org/en/)\r\n[](https://nodejs.org/ojkko/)', '## Título\r\n[](https://nodejs.org/ojkko/)'];
console.log((0, _links.default)(output3));