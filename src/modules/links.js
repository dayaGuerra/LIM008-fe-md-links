"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expresionRegularQueFiltraSoloLinks = exports.abrirArchivoMdYcoleccionarLinks = exports.filtrarArchivosMd = exports.arrayDeArchivos = exports.rutaRelativa = void 0;

const path = require('path');

const fs = require('fs');

const rutaRelativa = pathrel => {
  const absolut = path.resolve(pathrel);
  return absolut;
};

exports.rutaRelativa = rutaRelativa;

const arrayDeArchivos = route => {
  let newarray = [];

  if (fs.lstatSync(route).isFile() === true) {
    newarray.push(route);
  } else {
    const arrayPath = fs.readdirSync(route);
    arrayPath.forEach(file => {
      const arrayderutasdearchivos = arrayDeArchivos(path.join(route, file));
      newarray = newarray.concat(arrayderutasdearchivos);
    });
  }

  return newarray;
};

exports.arrayDeArchivos = arrayDeArchivos;

const filtrarArchivosMd = arr => {
  const variableFiltrado = arr.filter(route => path.extname(route).toLowerCase() === '.md');
  return variableFiltrado;
};

exports.filtrarArchivosMd = filtrarArchivosMd;

const abrirArchivoMdYcoleccionarLinks = arrfile => {
  let arrayDelContenido = [];
  arrfile.forEach(element => {
    const leerFile = fs.readFileSync(element, 'utf8');
    arrayDelContenido = arrayDelContenido.concat(leerFile);
  });
  return arrayDelContenido;
};

exports.abrirArchivoMdYcoleccionarLinks = abrirArchivoMdYcoleccionarLinks;

const expresionRegularQueFiltraSoloLinks = (stringDeContenidoMd, rutaObj) => {
  const regex1 = RegExp(/^\[(.*)\]\((.+)\)/gm);
  const arrayDeObjData = [];
  let array1 = regex1.exec(stringDeContenidoMd);

  while (array1 !== null) {
    const objetoData = {
      ruta: rutaObj,
      texto: array1[1].substring(0, 50),
      link: array1[2]
    };
    arrayDeObjData.push(objetoData);
    array1 = regex1.exec(stringDeContenidoMd);
  }

  return arrayDeObjData;
};

exports.expresionRegularQueFiltraSoloLinks = expresionRegularQueFiltraSoloLinks;