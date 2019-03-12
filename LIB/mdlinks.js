import {
  rutaRelativa, arrayDeArchivos, filtrarArchivosMd, abrirArchivoMdYcoleccionarLinks,
  expresionRegularQueFiltraSoloLinks,
} from './modules/links';

export const unionDeFunciones = (router) => {
  const uno = rutaRelativa(router);
  const dos = arrayDeArchivos(uno);
  const tres = filtrarArchivosMd(dos);
  const cuatro = abrirArchivoMdYcoleccionarLinks(tres);
  const cinco = expresionRegularQueFiltraSoloLinks(cuatro, uno);
  return cinco;
};


// console.log(newLocal('C://Users//Laboratoria//Documents//Proyecto//LIM008-fe-md-links//test//prueba'));
