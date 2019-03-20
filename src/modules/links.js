"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expresionRegularQueFiltraSoloLinks = exports.filtrarArchivosMd = exports.arrayDeArchivos = exports.rutaRelativa = void 0;

var path = require('path');

var fs = require('fs');

var rutaRelativa = function rutaRelativa(pathrel) {
  var absolut = path.resolve(pathrel);
  return absolut;
};

exports.rutaRelativa = rutaRelativa;

var arrayDeArchivos = function arrayDeArchivos(route) {
  var newarray = [];

  if (fs.lstatSync(route).isFile() === true) {
    newarray.push(route);
  } else {
    var arrayPath = fs.readdirSync(route);
    arrayPath.forEach(function (file) {
      var arrayderutasdearchivos = arrayDeArchivos(path.join(route, file));
      newarray = newarray.concat(arrayderutasdearchivos);
    });
  }

  return newarray;
};

exports.arrayDeArchivos = arrayDeArchivos;

var filtrarArchivosMd = function filtrarArchivosMd(arr) {
  var variableFiltrado = arr.filter(function (route) {
    return path.extname(route).toLowerCase() === '.md';
  });
  return variableFiltrado;
};

exports.filtrarArchivosMd = filtrarArchivosMd;

var expresionRegularQueFiltraSoloLinks = function expresionRegularQueFiltraSoloLinks(stringDeContenidoMd, rutaObj) {
  var regex1 = RegExp(/(^|[!^])\[(.*)\]\((.+)\)/gm);
  var arrayDeObjData = [];
  var array1 = regex1.exec(stringDeContenidoMd);

  while (array1 !== null) {
    var objetoData = {
      ruta: rutaObj,
      texto: array1[2].substring(0, 50),
      link: array1[3]
    };
    arrayDeObjData.push(objetoData);
    array1 = regex1.exec(stringDeContenidoMd);
  }

  return arrayDeObjData;
};

exports.expresionRegularQueFiltraSoloLinks = expresionRegularQueFiltraSoloLinks;