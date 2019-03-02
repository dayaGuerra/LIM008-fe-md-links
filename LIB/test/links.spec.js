import {
  rutaRelativa, arrayDeArchivos, filtrarArchivosMd, abrirArchivoMdYcoleccionarLinks, expresionRegularQueFiltraSoloLinks,
} from '../modules/links';

const output = [
  'C:\\Users\\Laboratoria\\Documents\\prueba\\documento1.txt',
  'C:\\Users\\Laboratoria\\Documents\\prueba\\prueba1\\documento2.txt',
  'C:\\Users\\Laboratoria\\Documents\\prueba\\prueba1\\documento3.js',
  'C:\\Users\\Laboratoria\\Documents\\prueba\\prueba1\\documento4.md',
  'C:\\Users\\Laboratoria\\Documents\\prueba\\prueba2\\documento5.md',
  'C:\\Users\\Laboratoria\\Documents\\prueba\\prueba2\\documento6.js',
];

const output2 = ['C:\\Users\\Laboratoria\\Documents\\prueba\\prueba1\\documento4.md',
  'C:\\Users\\Laboratoria\\Documents\\prueba\\prueba2\\documento5.md'];

const output3 = ['## Título\r\n### Subtítulo\r\nEste es un ejemplo de texto que da entrada a una lista genérica de elementos:\r\n\r\n- Elemento 1\r\n- Elemento 2\r\n- Elemento 3\r\n\r\nEste es un ejemplo de texto que da entrada a una lista numerada:\r\n\r\n1. Elemento 1\r\n2. Elemento 2\r\n3. Elemento 3\r\n\r\nAl texto en Markdown puedes añadirle formato como **negrita** ',
  '## Título\r\n### Subtítulo\r\nEste es un ejemplo de texto que da entrada a una lista genérica de elementos:\r\n\r\n- Elemento 1\r\n- Elemento 2\r\n- Elemento 3\r\n\r\nEste es un ejemplo de texto que da entrada a una lista numerada:\r\n\r\n1. Elemento 1\r\n2. Elemento 2\r\n3. Elemento 3\r\n\r\nAl texto en Markdown puedes añadirle formato como **negrita** '];

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
    expect(arrayDeArchivos('C:\\Users\\Laboratoria\\Documents\\prueba')).toEqual(output);
  });
});

describe('filtrarArchivosMd', () => {
  it('debería de ser una función', () => {
    expect(typeof filtrarArchivosMd).toBe('function');
  });
  it('debería de retornar el filtrado de archivos md', () => {
    expect(filtrarArchivosMd(output)).toEqual(output2);
  });
});

describe('abrirArchivoMdYcoleccionarLinks', () => {
  it('debería de ser una función', () => {
    expect(typeof abrirArchivoMdYcoleccionarLinks).toBe('function');
  });
  it('debería de retornar un array con el contenido de los archivos', () => {
    expect(abrirArchivoMdYcoleccionarLinks(output2)).toEqual(output3);
  });
});

describe('expresionRegularQueFiltraSoloLinks', () => {
  it('debería de ser una función', () => {
    expect(typeof expresionRegularQueFiltraSoloLinks).toBe('function');
  });
});
