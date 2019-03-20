import mdLinks from '../lib/mdlinks';

const path = require('path');

describe('mdlinks', () => {
  it('debería de ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('debería de ser un error que dice (esperaba un valor string)', () => mdLinks(65465)
    .catch((err) => {
      // console.log(err);
      expect(err).toEqual(TypeError('Esperaba un valor string'));
    }));

  it('debería de retornar una promesa con el array de objetos', () => mdLinks(path.resolve(`${process.cwd()}/test/prueba`))
    .then(res => expect(res).toEqual([{
      ruta:
      path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
      texto: 'hola',
      link: 'https://nodejs.org/en/',
    },
    {
      ruta:
      path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
      texto: 'Node.js',
      link: 'https://nodejsjoven.org/en/',
    },
    {
      ruta:
      path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
      texto: '',
      link: 'https://nodejs.org/ojkko/',
    },
    {
      ruta:
      path.resolve(`${process.cwd()}/test/prueba/prueba2/documento5.md`),
      texto: '',
      link: 'https://nodejs.org/ojkko/',
    }]))
    .catch(err => (err)));
});
