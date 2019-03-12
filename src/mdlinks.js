"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unionDeFunciones = void 0;

var _links = require("./modules/links");

const unionDeFunciones = router => {
  const uno = (0, _links.rutaRelativa)(router);
  const dos = (0, _links.arrayDeArchivos)(uno);
  const tres = (0, _links.filtrarArchivosMd)(dos);
  const cuatro = (0, _links.abrirArchivoMdYcoleccionarLinks)(tres);
  const cinco = (0, _links.expresionRegularQueFiltraSoloLinks)(cuatro, uno);
  return cinco;
}; // console.log(newLocal('C://Users//Laboratoria//Documents//Proyecto//LIM008-fe-md-links//test//prueba'));


exports.unionDeFunciones = unionDeFunciones;