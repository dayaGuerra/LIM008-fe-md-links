"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _links = require("./links");

const linksDeRutas = router => {
  const ruta = (0, _links.rutaRelativa)(router);
  const archivos = (0, _links.arrayDeArchivos)(ruta);
  const archivoMd = (0, _links.filtrarArchivosMd)(archivos);
  const leerArchivo = (0, _links.abrirArchivoMdYcoleccionarLinks)(archivoMd);
  const links = (0, _links.expresionRegularQueFiltraSoloLinks)(leerArchivo, ruta);
  return links;
};

var _default = linksDeRutas;
exports.default = _default;