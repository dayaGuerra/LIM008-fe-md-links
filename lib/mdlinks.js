import validarUrl from './modules/validate';
import linksDeRutas from './modules/joinLink';


const mdLinks = (route, options = { validate: false }) => new Promise((resolve, reject) => {
  if (typeof route !== 'string') {
    reject(new TypeError('Esperaba un valor string'));
  } if (options.validate) {
    validarUrl(route).then(response => resolve(response))
  } else {
    resolve(linksDeRutas(route));
  }
});
export default mdLinks;
