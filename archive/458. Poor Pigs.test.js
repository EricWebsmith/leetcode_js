const { expect } = require("chai");

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
function poorPigs(buckets, minutesToDie, minutesToTest) {
    const states = Math.floor(minutesToTest / minutesToDie) + 1;
    return Math.ceil(Math.log(buckets) / Math.log(states));
}


function test(buckets, minutesToDie, minutesToTest, expected) {
    
    const actual = poorPigs(buckets, minutesToDie, minutesToTest);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('458. Poor Pigs', () => {
    it('458. 1', () => {test( 1000, 15, 60,  5)});
    it('458. 2', () => {test( 4, 15, 15,  2)});
    it('458. 3', () => {test( 4, 15, 30,  2)});
   
});


/*
Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Poor Pigs.
Memory Usage: 41.9 MB, less than 44.44% of JavaScript online submissions for Poor Pigs.
*/