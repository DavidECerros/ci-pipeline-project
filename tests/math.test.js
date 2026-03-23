const { add, isPrime, factorial } = require('../src/math');

describe('add()', () => {
  test('suma dos positivos', () => expect(add(2, 3)).toBe(5));
  test('suma con negativo', () => expect(add(-1, 4)).toBe(3));
  test('suma ceros', () => expect(add(0, 0)).toBe(0));
});

describe('isPrime()', () => {
  test('7 es primo', () => expect(isPrime(7)).toBe(true));
  test('4 no es primo', () => expect(isPrime(4)).toBe(false));
  test('1 no es primo', () => expect(isPrime(1)).toBe(false));
  test('2 es primo', () => expect(isPrime(2)).toBe(true));
});

describe('factorial()', () => {
  test('factorial de 5', () => expect(factorial(5)).toBe(120));
  test('factorial de 0', () => expect(factorial(0)).toBe(1));
  test('factorial negativo lanza error', () => {
    expect(() => factorial(-1)).toThrow();
  });
});
