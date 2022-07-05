
const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);

    for (let i=1;i<n;i++) {
        if (ratings[i]>ratings[i-1]) {
            candies[i] = Math.max(candies[i-1]+1, candies[i]);
        }
    }

    for (let i=n-2;i>=0;i--) {
        if(ratings[i]>ratings[i+1]) {
            candies[i] = Math.max(candies[i+1]+1, candies[i])
        }
    }

    return _.sum(candies);
};


function test(...args) {
    const expected = args.pop();
    const actual = candy (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('135. Candy', () => {
    it('135. 1', () => {test( [1,0,2],  5)});
    it('135. 2', () => {test( [1,2,2],  4)});
});


/*
Runtime: 85 ms, faster than 80.63% of JavaScript online submissions for Candy.
Memory Usage: 45 MB, less than 85.86% of JavaScript online submissions for Candy.
*/