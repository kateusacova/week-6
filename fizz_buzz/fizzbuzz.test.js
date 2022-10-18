const fizzBuzz = require("./fizz_buzz");

describe('fizzBuzz', () => {
  it('returns Fizz when multiply of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(18)).toBe('Fizz');
  });
  it('returns Buzz when multiply of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
  });
  it('returns FizzBuzz when multiply of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  it('returns number when neither multiply of 3 nor 4', () => {
    expect(fizzBuzz(8)).toBe(8);
  });
});