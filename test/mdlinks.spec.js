import mdLinks from '../lib/mdlinks';

const path = require('path');

describe('mdlinks', () => {
  it('debería de ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('deberia de decir que espera un dato string', () => mdLinks(123, 'validate')
    .catch(error => expect(error)).toBe(new TypeError('Esperaba un valor string')));
//   it('deberia de retornar un objeto con las propiedades text, url, ruta, status y statusText', () => mdLinks(path.join(`${process.cwd()}`, '\\test'), 'validate').then(response => expect(response)).toEqual('hola'));
// });
});
