import validarUrl from './modules/validate';
import linksDeRutas from './modules/joinLink';

const mdLinks = (path, options = { validate: false }) => new Promise((resolve, reject) => {
  if (typeof path !== 'string') {
    reject(new TypeError('Esperaba un valor string'));
  } if (options.validate) {
    validarUrl(path).then(response => resolve(response))
      .catch(error => reject(error));
  } else {
    resolve(linksDeRutas(path));
  }
});
export default mdLinks;
