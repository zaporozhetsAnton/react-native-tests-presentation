import {sum, mul, sub, div, uppercase} from '../Utils';

test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2);
});
test('Multiplying 1 * 1 equals 1', () => {
  expect(mul(1, 1)).toBe(1);
});
test('Subtracting 1 - 1 equals 0', () => {
  expect(sub(1, 1)).toBe(0);
});
test('Dividing 1 / 1 equals 1', () => {
  expect(div(1, 1)).toBe(1);
});

test('Adding 1 + 1 does not equal 3', () => {
  expect(sum(1, 1)).not.toBe(3);
});

test("uppercase 'test' to equal 'TEST'", () =>
  uppercase('test').then(str => {
    expect(str).toBe('TEST');
  }));

test("uppercase '' to equal 'Empty string'", () =>
  uppercase('').catch(str => {
    expect(str).toBe('Empty string');
  }));

test("uppercase 'test' to equal 'TEST' async", async () => {
  const str = await uppercase('test');
  expect(str).toBe('TEST');
  try {
    const strTwo = await uppercase('');
  } catch (e) {
    expect(e).toMatch('Empty string');
  }
});
