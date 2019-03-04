
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
const provisionalDeboBorrarlo = arrayDeArchivos('C:\\Users\\Laboratoria\\Documents\\Proyecto\\LIM008-fe-md-links\\test\\prueba');


export const filtrarArchivosMd = (router) => {
  const variableFiltrado = router.filter(route => path.extname(route) === '.md');
  return variableFiltrado;
};

export const datodearraydemdBorrar = filtrarArchivosMd(provisionalDeboBorrarlo);

export const abrirArchivoMdYcoleccionarLinks = (arrfilemd) => {
  let arrayDelContenido = [];
  arrfilemd.forEach((element) => {
    const leerFile = fs.readFileSync(element, 'utf8');
    arrayDelContenido = arrayDelContenido.concat(leerFile);
  });
  return arrayDelContenido;
};

export const expresionRegularQueFiltraSoloLinks = (stringDeContenidoMd) => {
  const regex1 = RegExp(/^\[(.*)\]\((.+)\)/gm);
  const arrayDeObjData = [];
  let array1 = regex1.exec(stringDeContenidoMd);
  while (array1 !== null) {
    const objetoData = {
      texto: array1[1],
      link: array1[2],
    };
    arrayDeObjData.push(objetoData);
    array1 = regex1.exec(stringDeContenidoMd);
  }
  return arrayDeObjData;
};

const textodearchivoMd = abrirArchivoMdYcoleccionarLinks(datodearraydemdBorrar);

export const objetoDeLinks = expresionRegularQueFiltraSoloLinks(textodearchivoMd);
