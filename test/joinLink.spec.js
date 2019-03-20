import linksDeRutas from '../lib/modules/joinLink';

const path = require('path');

describe('linkDeRutas', () => {
  it('debería de ser una función', () => {
    expect(typeof linksDeRutas).toBe('function');
  });
  it('debería de ser una función', () => {
    const result = [{
      ruta: path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
      texto: 'hola',
      link: 'https://nodejs.org/en/',
    },
    {
      ruta: path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
      texto: 'Node.js',
      link: 'https://nodejsjoven.org/en/',
    },
    {
      ruta: path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
      texto: '',
      link: 'https://nodejs.org/ojkko/',
    },
    {
      ruta: path.resolve(`${process.cwd()}/test/prueba/prueba2/documento5.md`),
      texto: '',
      link: 'https://nodejs.org/ojkko/',
    }];
    expect(linksDeRutas(path.resolve(`${process.cwd()}/test`))).toEqual(result);
  });
});
