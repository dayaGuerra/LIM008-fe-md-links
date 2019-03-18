"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _links = require("./links");

var linksDeRutas = function linksDeRutas(router) {
  var ruta = (0, _links.rutaRelativa)(router);
  var archivos = (0, _links.arrayDeArchivos)(ruta);
  var archivoMd = (0, _links.filtrarArchivosMd)(archivos);
  var leerArchivo = (0, _links.abrirArchivoMdYcoleccionarLinks)(archivoMd);
  var links = (0, _links.expresionRegularQueFiltraSoloLinks)(leerArchivo, ruta);
  return links;
};

var _default = linksDeRutas;
exports.default = _default;