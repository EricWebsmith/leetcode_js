
const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
    let previous = 0;
    let current = 0;
    let ans = 0;
    let flip = 0;
    for (const num of nums) {
        if (num === 1) {
            current++;
        } else if (num === 0) {
            flip = 1;
            ans = Math.max(ans, current + previous + 1);
            previous = current;
            current = 0;
        }
    }

    ans = Math.max(ans, current + previous + flip);

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = findMaxConsecutiveOnes(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('487. Max Consecutive Ones II', () => {

    it('487. 1', () => { test([1, 0, 1, 1, 0], 4) });
    it('487. 2', () => { test([1, 0, 1, 1, 0, 1], 4) });
    it('487. 1', () => { test([1], 1) });
});

/*
Runtime: 67 ms, faster than 98.57% of JavaScript online submissions for Max Consecutive Ones II.
Memory Usage: 45.2 MB, less than 11.17% of JavaScript online submissions for Max Consecutive Ones II.
*/