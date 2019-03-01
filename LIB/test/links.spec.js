import { rutaRelativa, arrayDeArchivos } from '../modules/links';

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
  it('debería de retornar la ruta del archivo', () => {
    expect(arrayDeArchivos('C:\\Users\\Laboratoria\\Documents\\prueba\\documento1.txt')).toEqual(['C:\\Users\\Laboratoria\\Documents\\prueba\\documento1.txt']);
  });
  it('debería de retornar las rutas de todos los archivos encontrados en la carpeta', () => {
    expect(arrayDeArchivos('C:\\Users\\Laboratoria\\Documents\\prueba')).toEqual(['C:\\Users\\Laboratoria\\Documents\\prueba\\documento1.txt',
      'C:\\Users\\Laboratoria\\Documents\\prueba\\prueba1\\documento2.txt',
      'C:\\Users\\Laboratoria\\Documents\\prueba\\prueba1\\documento3.js',
      'C:\\Users\\Laboratoria\\Documents\\prueba\\prueba1\\documento4.md',
      'C:\\Users\\Laboratoria\\Documents\\prueba\\prueba2\\documento5.md',
      'C:\\Users\\Laboratoria\\Documents\\prueba\\prueba2\\documento6.js']);
  });
});
