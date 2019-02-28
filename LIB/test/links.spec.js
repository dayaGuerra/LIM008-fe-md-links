import { rutaRelativa, arrayDeArchivos } from '../moduls/links';

describe('rutaRelativa', () => {
  it('debería de ser una función', () => {
    expect(typeof rutaRelativa).toBe('function');
  });
  it('deberia de retornar una ruta absoluta despues de recibir una ruta relativa', () => {
    expect(rutaRelativa('../prueba/prueba1/documento4.md')).toEqual('C:\\Users\\Laboratoria\\Documents\\Proyecto\\prueba\\prueba1\\documento4.md');
  });
});

describe('arrayDeArchivos', () => {
  it('debería de ser una función', () => {
    expect(typeof arrayDeArchivos).toBe('function');
  });
});
