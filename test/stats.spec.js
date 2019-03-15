import { funcionStats, statsRotos } from '../lib/modules/stats';
import linksDeRutas from '../lib/modules/joinLink';

const path = require('path');

describe('funcionstats', () => {
  it('debería de ser una función', () => {
    expect(typeof funcionStats).toBe('function');
  });
  it('debería devolver un objeto con dos propiedades, totales y unicos', () => {
    const array = linksDeRutas(path.join(`${process.cwd()}`, '\\test\\prueba'));
    console.log(array);
    expect(funcionStats(array))
      .toEqual({ total: 4, unicos: 1 });
  });
});

describe('statsRotos', () => {
  it('debería de ser una función', () => {
    expect(typeof statsRotos).toBe('function');
  });
  it.only('debería devolver el numero total de links rotos', () => {
    const arrLinks = [{
      ruta:
      path.join(`${process.cwd()}`, '\\test\\prueba'),
      texto: 'hola',
      link: 'https://nodejs.org/en/',
      status: 200,
      statusText: 'OK',
    },
    {
      ruta:
      path.join(`${process.cwd()}`, '\\test\\prueba'),
      texto: 'Node.js',
      link: 'https://nodejsjoven.org/en/',
      status: 'no existe',
      statusText: 'fail',
    },
    {
      ruta:
      path.join(`${process.cwd()}`, '\\test\\prueba'),
      texto: '',
      link: 'https://nodejs.org/ojkko/',
      status: 404,
      statusText: 'fail',
    },
    {
      ruta:
      path.join(`${process.cwd()}`, '\\test\\prueba'),
      texto: '',
      link: 'https://nodejs.org/ojkko/',
      status: 404,
      statusText: 'fail',
    }];
    expect(statsRotos(arrLinks)).toEqual(3);
  });
});
