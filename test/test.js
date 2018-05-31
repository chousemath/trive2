"use strict";
exports.__esModule = true;
var A = require("assert");
var M = require("mocha");
var T = require("../index");
M.describe('Trive', function () {
    M.describe('#calculateDistance', function () {
        M.it('should calculate the correct distance between two longitude/latitude points', function () {
            A.equal(Math.round(100 * T.calculateDistance(32.9697, -96.80322, 29.46786, -98.53506, "K")) / 100, 422.74);
            A.equal(Math.round(100 * T.calculateDistance(32.9697, -96.80322, 29.46786, -98.53506, "N")) / 100, 228.11);
            A.equal(Math.round(100 * T.calculateDistance(32.9697, -96.80322, 29.46786, -98.53506, "")) / 100, 262.68);
            A.equal(Math.round(100 * T.calculateDistance(33.1234, -97.1234, 28.4321, -99.4321, "K")) / 100, 566.28);
            A.equal(Math.round(100 * T.calculateDistance(33.1234, -97.1234, 28.4321, -99.4321, "N")) / 100, 305.57);
            A.equal(Math.round(100 * T.calculateDistance(33.1234, -97.1234, 28.4321, -99.4321, "")) / 100, 351.87);
        });
    });
    M.describe('#greaterBid', function () {
        M.it('should return the greater bid', function () {
            var bid1 = { dealer: 'bob', amount: 33, updatedAt: 1 };
            var bid2 = { dealer: 'doug', amount: 1, updatedAt: 6 };
            var greaterBid = T.greaterBid(bid1, bid2);
            A.equal(greaterBid.dealer, "bob");
            A.equal(greaterBid.amount, 33);
        });
    });
    M.describe('#lesserBid', function () {
        M.it('should return the lesser bid', function () {
            var bid1 = { dealer: 'bob', amount: 33, updatedAt: 1 };
            var bid2 = { dealer: 'doug', amount: 1, updatedAt: 6 };
            var lesserBid = T.lesserBid(bid1, bid2);
            A.equal(lesserBid.dealer, "doug");
            A.equal(lesserBid.amount, 1);
        });
    });
    M.describe('#maxBid', function () {
        M.it('should extract the maximum bid from a list of bids', function () {
            var bids = [
                { dealer: "jo", amount: 10, updatedAt: 0 },
                { dealer: "bob", amount: 33, updatedAt: 1 },
                { dealer: "doug", amount: 1, updatedAt: 6 },
                { dealer: "jim", amount: -10, updatedAt: 2 }
            ];
            var maxBid = T.maxBid(bids);
            A.equal(maxBid.dealer, "bob");
            A.equal(maxBid.amount, 33);
        });
    });
    M.describe('#minBid', function () {
        M.it('should extract the minimum bid from a list of bids', function () {
            var bids = [
                { dealer: "jo", amount: 10, updatedAt: 0 },
                { dealer: "bob", amount: 33, updatedAt: 1 },
                { dealer: "doug", amount: 2, updatedAt: 6 },
                { dealer: "jim", amount: 11, updatedAt: 2 }
            ];
            var minBid = T.minBid(bids);
            A.equal(minBid.dealer, "doug");
            A.equal(minBid.amount, 2);
        });
    });
});
