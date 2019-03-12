import {
  rutaRelativa, arrayDeArchivos, filtrarArchivosMd, abrirArchivoMdYcoleccionarLinks,
  expresionRegularQueFiltraSoloLinks,
} from '../lib/modules/links';

const input = `${process.cwd()}\\Proyecto\\LIM008-fe-md-links\\test\\prueba`;

const output = [`${process.cwd()}\\test\\prueba\\documento1.txt`,
  `${process.cwd()}\\test\\prueba\\prueba1\\documento2.txt`,
  `${process.cwd()}\\test\\prueba\\prueba1\\documento3.js`,
  `${process.cwd()}\\test\\prueba\\prueba1\\documento4.md`,
  `${process.cwd()}\\test\\prueba\\prueba2\\documento5.md`,
  `${process.cwd()}\\test\\prueba\\prueba2\\documento6.js`];

const output2 = [`${process.cwd()}\\test\\prueba\\prueba1\\documento4.md`,
  `${process.cwd()}\\test\\prueba\\prueba2\\documento5.md`];

const output3 = ['## Título\r\n[hola](https://nodejs.org/en/)\r\n### Subtítulo\r\nAl texto en Markdown puedes añadirle formato como **negrita** \r\n![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)\r\n[Node.js](https://nodejsjoven.org/en/)\r\n[](https://nodejs.org/ojkko/)',
  '## Título\r\n[](https://nodejs.org/ojkko/)'];

const output4 = [{
  ruta: undefined,
  texto: 'hola',
  link: 'https://nodejs.org/en/',
},
{
  ruta: undefined,
  texto: 'Node.js',
  link: 'https://nodejsjoven.org/en/',
},
{
  ruta: undefined,
  texto: '',
  link: 'https://nodejs.org/ojkko/',
},
{
  ruta: undefined,
  texto: '',
  link: 'https://nodejs.org/ojkko/',
}];

describe('rutaRelativa', () => {
  it('debería de ser una función', () => {
    expect(typeof rutaRelativa).toBe('function');
  });
  it('deberia de retornar una ruta absoluta despues de recibir una ruta relativa', () => {
    expect(rutaRelativa(`${process.cwd()}\\test\\prueba\\prueba2\\documento4.md`)).toEqual(`${process.cwd()}\\test\\prueba\\prueba2\\documento4.md`);
  });
});

describe('arrayDeArchivos', () => {
  it('debería de ser una función', () => {
    expect(typeof arrayDeArchivos).toBe('function');
  });
  it('debería de retornar la ruta del archivo', () => {
    expect(arrayDeArchivos(`${process.cwd()}\\test\\prueba\\documento1.txt`)).toEqual([`${process.cwd()}\\test\\prueba\\documento1.txt`]);
  });
  it('debería de retornar las rutas de todos los archivos encontrados en la carpeta', () => {
    expect(arrayDeArchivos(`${process.cwd()}\\test\\prueba`)).toEqual(output);
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
  it('debería de retornar un objeto con las siguientes propiedades ruta, texto, url.', () => {
    expect(expresionRegularQueFiltraSoloLinks(output3)).toEqual(output4);
  });
});
