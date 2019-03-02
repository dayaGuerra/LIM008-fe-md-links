
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
export const provisionalDeboBorrarlo = arrayDeArchivos('C:\\Users\\Laboratoria\\Documents\\prueba');


export const filtrarArchivosMd = (router) => {
  const variableFiltrado = router.filter(route => path.extname(route) === '.md');
  return variableFiltrado;
};

// const datodearraydemdBorrar = filtrarArchivosMd(provisionalDeboBorrarlo);

export const abrirArchivoMdYcoleccionarLinks = (arrfilemd) => {
  let arrayDelContenido = [];
  arrfilemd.forEach((element) => {
    const leerFile = fs.readFileSync(element, 'utf8');
    arrayDelContenido = arrayDelContenido.concat(leerFile);
  });
  return arrayDelContenido;
};

export const expresionRegularQueFiltraSoloLinks = () => {

};
// console.log(abrirArchivoMdYcoleccionarLinks(datodearraydemdBorrar));
