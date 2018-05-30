import * as A from 'assert';
import * as M from 'mocha';
import * as T from '../index';

M.describe('Trive', () => {
  M.describe('#calculateDistance', () => {
    M.it('should calculate the correct distance between two longitude/latitude points', () => {
      A.equal(Math.round(100 * T.calculateDistance(32.9697, -96.80322, 29.46786, -98.53506, "K")) / 100, 422.74);
      A.equal(Math.round(100 * T.calculateDistance(32.9697, -96.80322, 29.46786, -98.53506, "N")) / 100, 228.11);
      A.equal(Math.round(100 * T.calculateDistance(32.9697, -96.80322, 29.46786, -98.53506, "")) / 100, 262.68);
      A.equal(Math.round(100 * T.calculateDistance(33.1234, -97.1234, 28.4321, -99.4321, "K")) / 100, 566.28);
      A.equal(Math.round(100 * T.calculateDistance(33.1234, -97.1234, 28.4321, -99.4321, "N")) / 100, 305.57);
      A.equal(Math.round(100 * T.calculateDistance(33.1234, -97.1234, 28.4321, -99.4321, "")) / 100, 351.87);
    });
  });
});