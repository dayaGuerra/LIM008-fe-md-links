import funcionStats from '../lib/modules/stats';

describe('funcionstats', () => {
  it('debería de ser una función', () => {
    expect(typeof funcionStats).toBe('function');
  });
});
 