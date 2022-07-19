
const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
function makesquare(matchsticks) {
    const n = matchsticks.length;
    const sum = _.sum(matchsticks);
    const sideLength = sum / 4
    if (sideLength !== Math.floor(sideLength)) {
        return false;
    }
    const sides = [0,0,0,0];

    matchsticks.sort((a, b) => b-a);

    const backtrack = (i) => {
        if (i === n) {
            return true;
        }

        for (let j=0;j<4;j++) {
            if(sides[j] + matchsticks[i]<=sideLength) {
                sides[j] += matchsticks[i];
                if(backtrack(i+1)){
                    return true;
                }

                sides[j] -= matchsticks[i];
            }
        }

        return false;
    }

    return backtrack(0);
}

function test(...args) {
    const expected = args.pop();
    const actual = makesquare (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('473. Matchsticks to Square', () => {

    it('473. 1', () => {test([1,1,2,2,2], true)});
    it('473. 2', () => {test([3,3,3,3,4], false)});    
});

/*
Runtime: 410 ms, faster than 50.72% of JavaScript online submissions for Matchsticks to Square.
Memory Usage: 42.2 MB, less than 92.75% of JavaScript online submissions for Matchsticks to Square.
*/