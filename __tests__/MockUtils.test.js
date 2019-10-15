import * as Utils from '../Utils';
import * as MockUtils from '../MockUtils';

// jest.mock('../Utils.js', () => {
//   return {
//     sum: jest.fn(() => 'lorem'),
//     sub: jest.fn(() => 'ipsum'),
//   };
// });
jest.mock('../Utils.js');

test('calls math.add', () => {
  expect(MockUtils.doAdd(1, 2)).toBe('lorem');
  expect(Utils.sum).toHaveBeenCalledWith(1, 2);
});

test('calls math.subtract', () => {
  expect(MockUtils.doSubtract(1, 2)).toBe('ipsum');
  expect(Utils.sub).toHaveBeenCalledWith(1, 2);
});
