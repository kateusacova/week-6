const add = require('./add');
const multiply = require('./multiply');

describe('add', () => {
  it('add 2 and 2', () => {
    expect(add(2,2)).toBe(4);
  });

  it('add 5 and 0', () => {
    expect(add(5,0)).toBe(5);
  });
});

describe('multiply', () => {
  it('multiply 2 and 2', () => {
    expect(multiply(2,2)).toBe(4);
  });
});

