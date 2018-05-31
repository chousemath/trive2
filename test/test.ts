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
  M.describe('#greaterBid', () => {
    M.it('should return the greater bid', () => {
      const bid1 = { dealer: 'bob', amount: 33, updatedAt: 1 };
      const bid2 = { dealer: 'doug', amount: 1, updatedAt: 6 };
      const greaterBid = T.greaterBid(bid1, bid2);
      A.equal(greaterBid.dealer, "bob");
      A.equal(greaterBid.amount, 33);
    });
  });
  M.describe('#lesserBid', () => {
    M.it('should return the lesser bid', () => {
      const bid1 = { dealer: 'bob', amount: 33, updatedAt: 1 };
      const bid2 = { dealer: 'doug', amount: 1, updatedAt: 6 };
      const lesserBid = T.lesserBid(bid1, bid2);
      A.equal(lesserBid.dealer, "doug");
      A.equal(lesserBid.amount, 1);
    });
  });
  M.describe('#maxBid', () => {
    M.it('should extract the maximum bid from a list of bids', () => {
      const bids: Array<any> = [
        { dealer: "jo", amount: 10, updatedAt: 0 },
        { dealer: "bob", amount: 33, updatedAt: 1 },
        { dealer: "doug", amount: 1, updatedAt: 6 },
        { dealer: "jim", amount: -10, updatedAt: 2 }
      ];
      const maxBid = T.maxBid(bids);
      A.equal(maxBid.dealer, "bob");
      A.equal(maxBid.amount, 33);
    });
  });
  M.describe('#minBid', () => {
    M.it('should extract the minimum bid from a list of bids', () => {
      const bids: Array<any> = [
        { dealer: "jo", amount: 10, updatedAt: 0 },
        { dealer: "bob", amount: 33, updatedAt: 1 },
        { dealer: "doug", amount: 2, updatedAt: 6 },
        { dealer: "jim", amount: 11, updatedAt: 2 }
      ];
      const minBid = T.minBid(bids);
      A.equal(minBid.dealer, "doug");
      A.equal(minBid.amount, 2);
    });
  });
});