import calculate from '../logic/calculate';

describe('test for calculate js file', () => {
  test('when equals button is clicked', () => {
    const output = calculate({
      total: '7',
      next: '8',
      operation: '+',
    }, '=');
    expect(output.total).toBe('15');
  });
  test('when AC button is clicked', () => {
    const output = calculate({
      total: '8',
      next: '5',
      operation: '',
    }, 'AC');
    expect(output.total).toBe(null);
  });
  test('when % button is clicked', () => {
    const output = calculate({
      total: '9',
      next: '3',
      operation: '%',
    }, '=');
    expect(output.total).toBe('0');
  });
});
