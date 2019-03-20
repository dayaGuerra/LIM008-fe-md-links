import validarUrl from '../lib/modules/validate';

const path = require('path');

describe('validarUrl', () => {
  it('debería de ser una función', () => {
    expect(typeof validarUrl).toBe('function');
  });
  it('debería de devolver un objeto con las propiedades status y statustext', () => validarUrl(`${process.cwd()}/test/prueba`).then((status) => {
    const result = [{
      ruta:
        path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
      texto: 'hola',
      link: 'https://nodejs.org/en/',
      status: 200,
      statusText: 'OK',
    },
    {
      ruta:
        path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
      texto: 'Node.js',
      link: 'https://nodejsjoven.org/en/',
      status: 'no existe',
      statusText: 'fail',
    },
    {
      ruta:
        path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
      texto: '',
      link: 'https://nodejs.org/ojkko/',
      status: 404,
      statusText: 'fail',
    },
    {
      ruta:
        path.resolve(`${process.cwd()}/test/prueba/prueba2/documento5.md`),
      texto: '',
      link: 'https://nodejs.org/ojkko/',
      status: 404,
      statusText: 'fail',
    }];
    expect(status).toEqual(result);
  }));
});
