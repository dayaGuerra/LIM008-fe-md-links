import { validarUrl } from '../lib/modules/validate';

describe('validarUrl', () => {
  it('debería de ser una función', () => {
    expect(typeof validarUrl).toBe('function');
  });
});
