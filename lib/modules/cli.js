import { funcionStats, statsRotos } from './stats';
import linksDeRutas from './joinLink';
import validarUrl from './validate';

const cli = (arg) => {
  if (arg.length === 0) {
    return 'Ingresa una ruta valida';
  }

  if (arg.length === 3) {
    // respuesta stats + validate
    if ((arg[1] === '--stats' && arg[2] === '--validate') || (arg[2] === '--validate' && arg[1] === '--stats')) {
      const links = linksDeRutas(arg[0]);
      validarUrl(arg[0]).then((response) => {
        console.log(` Total:  ${funcionStats(links).total}\n unique: ${funcionStats(links).unicos}\n Broken: ${statsRotos(response)}`);
      });
    }
  } // promesa

  // respuesta stats o validate
  if (arg.length === 2) {
    if (arg[1] === '--stats') {
      const links = linksDeRutas(arg[0]);
      return ` Total:  ${funcionStats(links).total}\n unique: ${funcionStats(links).unicos}`;
    }
    if (arg[1] === '--validate') {
      validarUrl(arg[0]).then(response => response
        .forEach(ele => console.log(`${ele.ruta} ${ele.link} ${ele.texto} ${ele.status} ${ele.statusText}`)));
    }
  } // 1 promesa

  if (arg.length === 1) {
    linksDeRutas(arg[0]).forEach(ele => console.log(`${ele.ruta} ${ele.link} ${ele.texto}`));
  }
}; // foreach y no es promesa

export default cli;
