const path = require('path');
const fs = require('fs');

export const rutaRelativa = (pathrel) => {
  const absolut = path.resolve(pathrel);
  return absolut;
};


export const arrayDeArchivos = (route) => {
  let newarray = [];
  if (fs.lstatSync(route).isFile() === true) {
    newarray.push(route);
  } else {
    const arrayPath = fs.readdirSync(route);

    arrayPath.forEach((file) => {
      const arrayderutasdearchivos = arrayDeArchivos(path.join(route, file));
      newarray = newarray.concat(arrayderutasdearchivos);
    });
  }
  return newarray;
};

export const filtrarArchivosMd = (arr) => {
  const variableFiltrado = arr.filter(route => path.extname(route).toLowerCase() === '.md');
  return variableFiltrado;
};


export const expresionRegularQueFiltraSoloLinks = (stringDeContenidoMd, rutaObj) => {

  const regex1 = RegExp(/(^|[^!])\[(.*)\]\((.+)\)/gm);
  const arrayDeObjData = [];
  let array1 = regex1.exec(stringDeContenidoMd);

  while (array1 !== null) {
    const objetoData = {
      ruta: rutaObj,
      texto: array1[2].substring(0, 50),
      link: array1[3],
    };
    arrayDeObjData.push(objetoData);
    array1 = regex1.exec(stringDeContenidoMd);
  }
  return arrayDeObjData;
};
