import validarUrl from './modules/validate';
import linksDeRutas from './modules/joinLink';

const path = require('path');

const mdLinks = (route, options = { validate: false }) => new Promise((resolve, reject) => {
  if (typeof route !== 'string') {
    reject(new TypeError('Esperaba un valor string'));
  } if (options.validate) {
    validarUrl(route).then(response => resolve(response))
      .catch(error => reject(error));
  } else {
    resolve(linksDeRutas(route));
  }
});
export default mdLinks;

// console.log(mdLinks(path.resolve(`${process.cwd()}/test`)));
