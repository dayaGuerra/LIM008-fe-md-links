import {
  rutaRelativa, arrayDeArchivos, filtrarArchivosMd, abrirArchivoMdYcoleccionarLinks,
  expresionRegularQueFiltraSoloLinks,
} from './links';

const linksDeRutas = (router) => {
  const ruta = rutaRelativa(router);
  const archivos = arrayDeArchivos(ruta);
  const archivoMd = filtrarArchivosMd(archivos);
  const leerArchivo = abrirArchivoMdYcoleccionarLinks(archivoMd);
  const links = expresionRegularQueFiltraSoloLinks(leerArchivo, ruta);
  return links;
};
export default linksDeRutas;
