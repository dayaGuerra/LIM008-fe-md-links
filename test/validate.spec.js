import validarUrl from '../lib/modules/validate';

const path = require('path');
// const fetch = require('node-fetch');
const fetchMock = require('../_mocks_/node-fetch');
// const fetchMock = require('fetch-mock');


fetchMock.config.sendAsJson = true;
fetchMock.config.fallbackToNetwork = true;

const result = [{
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

describe('validarUrl', () => {
  afterEach(() => { fetchMock.reset(), fetchMock.restore(); });

  it('debería de ser una función', () => {
    expect(typeof validarUrl).toBe('function');
  });
  it.only('debería de devolver un objeto con las propiedades status y statustext', () => {
    fetchMock.mock('https://nodejsgorg/en/', new Promise((resolve, reject) => {
      reject();
    }));
    return validarUrl(`${process.cwd()}\\test\\prueba`).then((arrLinksValidados) => {
      expect(arrLinksValidados).toEqual();
    });
  });
  // it('debería de devolver un objeto con las propiedades status y statustext', (done) => {
  //   fetchMock
  //     .mock('https://nodejs.org/ojkko/', 4004);
  //   validarUrl(`${process.cwd()}\\test\\prueba`).then((status) => {
  //     expect(status).toEqual(result);
  //     done();
  //   });
});
// });

// describe('kjhgfdssdfghjklñ' , (done) => {
//   fetchMock
//       .mock('https://nodejs.org/en/', 200);
//       .mock('https://nodejsjoven.org/en/', 'no existe');
//       .mock('https://nodejs.org/ojkko/', 404);
//       .mock('https://nodejs.org/ojkko/', 404);

// })
