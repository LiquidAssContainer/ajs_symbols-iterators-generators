import canIterate from '../generators';

test.each([
  [new Map(), true],
  [new Set(), true],
  [null, false],
  [undefined, false],
  [10, false],
  ['Netology', true],
])('Testik', (value, expected) => {
  const result = canIterate(value);
  expect(result).toBe(expected);
});
