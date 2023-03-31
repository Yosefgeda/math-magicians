import operate from '../logic/operate';

describe('test the operation in operate js file', () => {
  test('sum of 1 and 3 to equal', () => {
    const sum = operate(1, 3, '+');
    expect(sum).toBe('4');
  });
  test('subtraction of 6 and 2 to equal 4', () => {
    const subract = operate(6, 2, '-');
    expect(subract).toBe('4');
  });
  test('multiplication of 8 and 7 to equal 56', () => {
    const multiply = operate(8, 7, 'x');
    expect(multiply).toBe('56');
  });
  test(' divide of 8 and 4 is equal to 2', () => {
    const divide = operate(8, 4, '÷');
    expect(divide).toBe('2');
  });
  test(' modulo of 9 and 4 is equal to 2', () => {
    const divide = operate(9, 4, '%');
    expect(divide).toBe('1');
  });
});
