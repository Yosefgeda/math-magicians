import calculate from '../logic/calculate';

describe('test for calculate js file', () => {
  let Obj = null;
  beforeEach(() => {
    Obj = {
      total: null,
      next: null,
      operation: null,
    };
  });
  test('test if the first value passed to function is updated in Obj.next', () => {
    expect(calculate(Obj, '0')).toStrictEqual({ total: null, next: '0' });
  });

  test('test if the second value and operator passed to function are updated in Obj.next and Obj.operation respectively', () => {
    Obj = calculate(Obj, '12');
    Obj = calculate(Obj, '+');
    expect(calculate(Obj, '3')).toStrictEqual({ total: '12', next: '3', operation: '+' });
  });

  test('Passing objects of two numbers and + operator to get their sum', () => {
    Obj = calculate(Obj, '12');
    Obj = calculate(Obj, '+');
    Obj = calculate(Obj, '3');
    expect(calculate(Obj, '=')).toStrictEqual({ total: '15', next: null, operation: null });
  });

  test('Passing objects of two numbers and - operator to get their difference', () => {
    Obj = calculate(Obj, '100');
    Obj = calculate(Obj, '-');
    Obj = calculate(Obj, '1');
    expect(calculate(Obj, '=')).toStrictEqual({ total: '99', next: null, operation: null });
  });

  test('Passing objects of two numbers and x operator to get their product', () => {
    Obj = calculate(Obj, '3');
    Obj = calculate(Obj, 'x');
    Obj = calculate(Obj, '7');
    expect(calculate(Obj, '=')).toStrictEqual({ total: '21', next: null, operation: null });
  });

  test('Passing objects of two numbers and ÷ operator to get their quotient', () => {
    Obj = calculate(Obj, '100');
    Obj = calculate(Obj, '÷');
    Obj = calculate(Obj, '100');
    expect(calculate(Obj, '=')).toStrictEqual({ total: '1', next: null, operation: null });
  });
  test('Passing objects of two numbers and % operator to get their remainder', () => {
    Obj = calculate(Obj, '100');
    Obj = calculate(Obj, '%');
    Obj = calculate(Obj, '33');
    expect(calculate(Obj, '=')).toStrictEqual({
      total: '1',
      next: null,
      operation: null,
    });
  });
});
