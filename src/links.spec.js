"use strict";

var _links = require("../lib/modules/links");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var path = require('path');

describe('rutaRelativa', function () {
  it('debería de ser una función', function () {
    expect(_typeof(_links.rutaRelativa)).toBe('function');
  });
  it('deberia de retornar una ruta absoluta despues de recibir una ruta relativa', function () {
    expect((0, _links.rutaRelativa)(path.join("".concat(process.cwd()), '\\test\\prueba\\prueba2\\documento4.md'))).toEqual(path.join("".concat(process.cwd()), '\\test\\prueba\\prueba2\\documento4.md'));
  });
});
describe('arrayDeArchivos', function () {
  it('debería de ser una función', function () {
    expect(_typeof(_links.arrayDeArchivos)).toBe('function');
  });
  it('debería de retornar la ruta del archivo', function () {
    expect((0, _links.arrayDeArchivos)("".concat(process.cwd(), "\\test\\prueba\\documento1.txt"))).toEqual(["".concat(process.cwd(), "\\test\\prueba\\documento1.txt")]);
  });
  it('debería de retornar las rutas de todos los archivos encontrados en la carpeta', function () {
    expect((0, _links.arrayDeArchivos)(path.join("".concat(process.cwd()), '\\test\\prueba'))).toEqual([path.join("".concat(process.cwd()), '\\test\\prueba\\documento1.txt'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba1\\documento2.txt'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba1\\documento3.js'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba1\\documento4.md'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba2\\documento5.md'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba2\\documento6.js')]);
  });
});
describe('filtrarArchivosMd', function () {
  it('debería de ser una función', function () {
    expect(_typeof(_links.filtrarArchivosMd)).toBe('function');
  });
  it('debería de retornar el filtrado de archivos md', function () {
    expect((0, _links.filtrarArchivosMd)([path.join("".concat(process.cwd()), '\\test\\prueba\\documento1.txt'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba1\\documento2.txt'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba1\\documento3.js'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba1\\documento4.md'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba2\\documento5.md'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba2\\documento6.js')])).toEqual([path.join("".concat(process.cwd()), '\\test\\prueba\\prueba1\\documento4.md'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba2\\documento5.md')]);
  });
});
describe('abrirArchivoMdYcoleccionarLinks', function () {
  it('debería de ser una función', function () {
    expect(_typeof(_links.abrirArchivoMdYcoleccionarLinks)).toBe('function');
  });
  it('debería de retornar un array con el contenido de los archivos', function () {
    expect((0, _links.abrirArchivoMdYcoleccionarLinks)([path.join("".concat(process.cwd()), '\\test\\prueba\\prueba1\\documento4.md'), path.join("".concat(process.cwd()), '\\test\\prueba\\prueba2\\documento5.md')])).toEqual(['## Título\r\n[hola](https://nodejs.org/en/)\r\n### Subtítulo\r\nAl texto en Markdown puedes añadirle formato como **negrita** \r\n![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)\r\n[Node.js](https://nodejsjoven.org/en/)\r\n[](https://nodejs.org/ojkko/)', '## Título\r\n[](https://nodejs.org/ojkko/)']);
  });
});
describe('expresionRegularQueFiltraSoloLinks', function () {
  it('debería de ser una función', function () {
    expect(_typeof(_links.expresionRegularQueFiltraSoloLinks)).toBe('function');
  });
  it('debería de retornar un objeto con las siguientes propiedades ruta, texto, url.', function () {
    expect((0, _links.expresionRegularQueFiltraSoloLinks)(['## Título\r\n[hola](https://nodejs.org/en/)\r\n### Subtítulo\r\nAl texto en Markdown puedes añadirle formato como **negrita** \r\n![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)\r\n[Node.js](https://nodejsjoven.org/en/)\r\n[](https://nodejs.org/ojkko/)', '## Título\r\n[](https://nodejs.org/ojkko/)'], (0, _links.rutaRelativa)(path.join("".concat(process.cwd()), '\\test\\prueba')))).toEqual([{
      ruta: path.join("".concat(process.cwd()), '\\test\\prueba'),
      texto: 'hola',
      link: 'https://nodejs.org/en/'
    }, {
      ruta: path.join("".concat(process.cwd()), '\\test\\prueba'),
      texto: 'Node.js',
      link: 'https://nodejsjoven.org/en/'
    }, {
      ruta: path.join("".concat(process.cwd()), '\\test\\prueba'),
      texto: '',
      link: 'https://nodejs.org/ojkko/'
    }, {
      ruta: path.join("".concat(process.cwd()), '\\test\\prueba'),
      texto: '',
      link: 'https://nodejs.org/ojkko/'
    }]);
  });
});