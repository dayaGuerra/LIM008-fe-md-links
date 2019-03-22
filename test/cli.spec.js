import cli from '../lib/modules/cli';

const path = require('path');

const arg = [];
const arg1 = [path.resolve(`${process.cwd()}/test`), '--stats'];
const arg2 = [path.resolve(`${process.cwd()}/test`), '--validate'];
const arg3 = [path.resolve(`${process.cwd()}/test`), '--stats', '--validate'];
const arg4 = [path.resolve(`${process.cwd()}/test`)];

describe('cli', () => {
  it('debería de ser una función', () => {
    expect(typeof cli).toBe('function');
  });
  it('deberia de retornar error', () => cli(arg).then(response => expect(response).toEqual('Ingresa una ruta valida')));
  it('deberia de retornar un string con dos datos estadisticos', () => cli(arg1).then(response => expect(response).toEqual('Total:4\nunique:1')));
  it('deberia de retornar un string con los datos validados', () => cli(arg2).then(response => expect(response).toEqual(
    `${path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`)} https://nodejs.org/en/ hola 200 OK`,
  )));
  it('deberia de retornar un string con tres datos estadisticos', () => cli(arg3).then(response => expect(response).toEqual('Total:4\nunique:1\nBroken:3')));
  it('deberia de retornar un string con los datos sin validar', () => cli(arg4).then(response => expect(response).toEqual(
    `${path.resolve(`${process.cwd()}/test/prueba/prueba1/documento4.md`)} https://nodejs.org/en/ hola`,
  )));
});
