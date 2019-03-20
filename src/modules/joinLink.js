"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _links = require("./links");

var fs = require('fs');

var linksDeRutas = function linksDeRutas(router) {
  var arrayDelContenido = [];
  var ruta = (0, _links.rutaRelativa)(router);
  var archivos = (0, _links.arrayDeArchivos)(ruta);
  var archivoMd = (0, _links.filtrarArchivosMd)(archivos);
  archivoMd.forEach(function (file) {
    var stringDelArray = fs.readFileSync(file, 'utf8');
    var arrayDeObjDeLinks = (0, _links.expresionRegularQueFiltraSoloLinks)(stringDelArray, file);
    arrayDelContenido = arrayDelContenido.concat(arrayDeObjDeLinks);
  });
  return arrayDelContenido;
};

console.log(linksDeRutas("C:\\Users\\Laboratoria\\Documents\\Proyecto\\LIM008-fe-md-links\\test"));
var _default = linksDeRutas;
exports.default = _default;