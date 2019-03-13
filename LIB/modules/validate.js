import unionDeFunciones from '../mdlinks';

const fetch = require('node-fetch');

const validarUrl = (arraydeobjetos) => {
  const arrlinks = unionDeFunciones(arraydeobjetos);
  const evaluarLinks = arrlinks.map(propiedadDeObj => new Promise((resolve) => {
    const propiedad = Object.assign(propiedadDeObj);
    fetch(propiedad.link)
      .then((res) => {
        if (res.status > 199 && res.status < 399) {
          propiedad.status = res.status;
          propiedad.statusText = res.statusText;
          resolve(propiedad);
        } else {
          propiedad.status = res.status;
          propiedad.statusText = 'fail';
          resolve(propiedad);
        }
      })
      .catch(() => {
        propiedad.status = 'no existe';
        propiedad.statusText = 'fail';
        resolve(propiedad);
      });
  }));
  return Promise.all(evaluarLinks);
};

export default validarUrl;
