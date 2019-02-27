import {rutaRelativa} from '../src/moduls/controller-links.js';

describe('rutaRelativa', () => {
    it('debería de ser una función', () => {
        expect( typeof rutaRelativa).toBe('function');
    });
    it('deberia de retornar una ruta absoluta despues de recibir una ruta relativa', () => {
        expect(rutaRelativa('../src/moduls/controller-links.js')).toEqual('C:\\Users\\ADMIN\\Documents\\PROYECTOS\\src\\moduls\\controller-links.js');
    });
  });
  




