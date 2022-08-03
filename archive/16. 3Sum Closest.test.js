
const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    const n = nums.length;
    if (n === 3) {
        return _.sum(nums);
    }
    let diff = Number.MAX_SAFE_INTEGER;
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= n-3; i++) {
        lo = i + 1;
        hi = n - 1;
        while (lo < hi) {
            const sum = nums[i] + nums[lo] + nums[hi];
            const currentDiff = sum - target;
            if (Math.abs(currentDiff) < Math.abs(diff)) {
                diff = currentDiff;
                if (diff === 0) {
                    break;
                }
            }

            if (sum < target) {
                lo++;
            } else {
                hi--;
            }
        }
    }

    return target + diff;
}


function test(nums, target, expected) {

    const actual = threeSumClosest(nums, target);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('16. 3Sum Closest', () => {
    it('16. 1', () => { test([-1, 2, 1, -4], 1, 2) });
    it('16. 2', () => { test([0, 0, 0], 1, 0) });

});

/*
Runtime: 166 ms, faster than 79.52% of JavaScript online submissions for 3Sum Closest.
Memory Usage: 43.4 MB, less than 83.61% of JavaScript online submissions for 3Sum Closest.
*/