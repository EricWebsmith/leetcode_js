const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumUniqueSubarray(nums) {
    const n = nums.length;
    const positions = new Map();
    let start = 0;
    const acc = [];
    let maxSubarray = nums[0];
    for (let i = 0; i < n; i++) {
        if (i===0) {
            acc.push(nums[0]);
        } else {
            acc.push(acc[i-1]+nums[i]);
        }

        if (positions.has(nums[i]) && positions.get(nums[i])+1>start) {
            start = positions.get(nums[i]) + 1;
        }

        if (start === 0) {
            maxSubarray = Math.max(maxSubarray, acc[i]);
        } else {
            
            maxSubarray = Math.max(maxSubarray, acc[i] - acc[start-1]);
        }

        positions.set(nums[i], i);
    }

    return maxSubarray;
}

function test(...args) {
    const expected = args.pop();
    const actual = maximumUniqueSubarray(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1695. Maximum Erasure Value', () => {
    it('1695. 1', () => { test([4, 2, 4, 5, 6], 17) });
    it('1695. 2', () => { test([5, 2, 1, 2, 5, 2, 1, 2, 5], 8) });
    //it('1695. 3', () => {test()});
});


/*
Runtime: 133 ms, faster than 96.67% of JavaScript online submissions for Maximum Erasure Value.
Memory Usage: 64.9 MB, less than 45.00% of JavaScript online submissions for Maximum Erasure Value.
*/