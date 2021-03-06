import {
  rutaRelativa, arrayDeArchivos, filtrarArchivosMd,
  expresionRegularQueFiltraSoloLinks,
} from '../lib/modules/links';


const path = require('path');

describe('rutaRelativa', () => {
  it('debería de ser una función', () => {
    expect(typeof rutaRelativa).toBe('function');
  });
  it('deberia de retornar una ruta absoluta despues de recibir una ruta relativa', () => {
    expect(rutaRelativa(path.resolve(`${process.cwd()}/test/prueba/prueba2/documento4.md`)))
      .toEqual(path.resolve(`${process.cwd()}/test/prueba/prueba2/documento4.md`));
  });
});

describe('arrayDeArchivos', () => {
  it('debería de ser una función', () => {
    expect(typeof arrayDeArchivos).toBe('function');
  });
  it('debería de retornar la ruta del archivo', () => {
    expect(arrayDeArchivos(`${process.cwd()}/test/prueba/documento1.txt`))
      .toEqual([`${process.cwd()}/test/prueba/documento1.txt`]);
  });
  it('debería de retornar las rutas de todos los archivos encontrados en la carpeta', () => {
    expect(arrayDeArchivos(path.resolve(`${process.cwd()}/test/prueba`)))
      .toEqual([path.resolve(`${process.cwd()}/test/prueba/documento1.txt`),
        path.resolve(`${process.cwd()}/test/prueba/prueba1/documento2.txt`),
        path.resolve(`${process.cwd()}/test/prueba/prueba1/documento3.js`),
        path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
        path.resolve(`${process.cwd()}/test/prueba/prueba2/documento5.md`),
        path.resolve(`${process.cwd()}/test/prueba/prueba2/documento6.js`)]);
  });
});

describe('filtrarArchivosMd', () => {
  it('debería de ser una función', () => {
    expect(typeof filtrarArchivosMd).toBe('function');
  });
  it('debería de retornar el filtrado de archivos md', () => {
    expect(filtrarArchivosMd([path.resolve(`${process.cwd()}/test/prueba/documento1.txt`),
      path.resolve(`${process.cwd()}/test/prueba/prueba1/documento2.txt`),
      path.resolve(`${process.cwd()}/test/prueba/prueba1/documento3.js`),
      path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
      path.resolve(`${process.cwd()}/test/prueba/prueba2/documento5.md`),
      path.resolve(`${process.cwd()}/test/prueba/prueba2/documento6.js`)]))
      .toEqual([path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
        path.resolve(`${process.cwd()}/test/prueba/prueba2/documento5.md`)]);
  });
});


describe('expresionRegularQueFiltraSoloLinks', () => {
  it('debería de ser una función', () => {
    expect(typeof expresionRegularQueFiltraSoloLinks).toBe('function');
  });
  it('debería de retornar un objeto con las siguientes propiedades ruta, texto, url.', () => {
    expect(expresionRegularQueFiltraSoloLinks(['## Título\r\n[hola](https://nodejs.org/en/)\r\n### Subtítulo\r\nAl texto en Markdown puedes añadirle formato como **negrita** \r\n![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)\r\n[Node.js](https://nodejsjoven.org/en/)\r\n[](https://nodejs.org/ojkko/)',
      '## Título\r\n[](https://nodejs.org/ojkko/)'],
    path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`)))
      .toEqual([{
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
        ruta: path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`),
        texto: '',
        link: 'https://nodejs.org/ojkko/',
      }]);
  });
});
