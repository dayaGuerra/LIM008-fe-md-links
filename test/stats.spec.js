import { funcionStats, statsRotos } from '../lib/modules/stats';
import linksDeRutas from '../lib/modules/joinLink';

const path = require('path');

describe('stats', () => {
  describe('funcionstats', () => {
    it('debería de ser una función', () => {
      expect(typeof funcionStats).toBe('function');
    });
    it('debería devolver un objeto con dos propiedades, totales y unicos', () => {
      const link = linksDeRutas(path.resolve(`${process.cwd()}/test/prueba`));
      expect(funcionStats(link))
        .toEqual({ total: 4, unicos: 1 });
    });
  });

  describe('statsRotos', () => {
    it('debería de ser una función', () => {
      expect(typeof statsRotos).toBe('function');
    });
    it('debería devolver el numero total de links rotos', () => {
      const arrLinks = [{
        ruta: path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
        texto: 'hola',
        link: 'https://nodejs.org/en/',
        status: 200,
        statusText: 'OK',
      },
      {
        ruta: path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
        texto: 'Node.js',
        link: 'https://nodejsjoven.org/en/',
        status: 'no existe',
        statusText: 'fail',
      },
      {
        ruta: path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
        texto: '',
        link: 'https://nodejs.org/ojkko/',
        status: 404,
        statusText: 'fail',
      },
      {
        ruta: path.resolve(`${process.cwd()}/test/prueba/prueba2/documento5.md`),
        texto: '',
        link: 'https://nodejs.org/ojkko/',
        status: 404,
        statusText: 'fail',
      }];
      expect(statsRotos(arrLinks)).toEqual(3);
    });
  });
});
