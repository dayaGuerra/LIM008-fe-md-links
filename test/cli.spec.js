import cli from '../lib/modules/cli';

// const path = require('path');

describe('mdlinks', () => {
  it('debería de ser una función', () => {
    expect(typeof cli).toBe('function');
  });
  it('debería de ser una función', () => {
    expect(cli()).toBe('function');
  });
});
