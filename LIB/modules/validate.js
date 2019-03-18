import linksDeRutas from './joinLink';

const fetch = require('node-fetch');
// funcion para validar las peticiones HTTP
const validarUrl = (arraydeobjetos) => {
  const arrlinks = linksDeRutas(arraydeobjetos);
  const evaluarLinks = arrlinks.map(propiedad => new Promise((resolve) => {
    fetch(propiedad.link)
      .then((res) => {
        if (res.status > 199 && res.status < 400) {
          resolve({
            ...propiedad,
            status: res.status,
            statusText: res.statusText,
          });
        } else {
          resolve({
            ...propiedad,
            status: res.status,
            statusText: 'fail',
          });
        }
      })
      .catch(() => {
        resolve({
          ...propiedad,
          status: 'no existe',
          statusText: 'fail',
        });
      });
  }));
  return Promise.all(evaluarLinks);
};
export default validarUrl;
