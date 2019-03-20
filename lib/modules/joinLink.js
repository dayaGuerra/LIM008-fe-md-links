import {
  rutaRelativa, arrayDeArchivos, filtrarArchivosMd,
  expresionRegularQueFiltraSoloLinks,
} from './links';

const fs = require('fs');

const linksDeRutas = (router) => {
  let arrayDelContenido = [];
  const ruta = rutaRelativa(router);
  const archivos = arrayDeArchivos(ruta);
  const archivoMd = filtrarArchivosMd(archivos);
  archivoMd.forEach((file) => {
    const stringDelArray = fs.readFileSync(file, 'utf8');
    const arrayDeObjDeLinks = expresionRegularQueFiltraSoloLinks(stringDelArray, file);
    arrayDelContenido = arrayDelContenido.concat(arrayDeObjDeLinks);
  });
  return arrayDelContenido;
};

export default linksDeRutas;
