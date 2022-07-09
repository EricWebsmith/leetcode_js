
const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxResult(nums, k) {
    const n = nums.length;
    const dp = new Array(n).fill(-1000000000);
    dp[0] = nums[0];
    const dq = [];
    dq.push(0);
    for (let i = 1; i < n; i++) {
        // pop the old index
        while (dq.length>0 && dq[0] < i-k) {
            dq.shift();
        }

        dp[i] = dp[dq[0]] + nums[i];

        // pop the smaller value
        while(dq.length>0 && dp[i]>=dp[dq[dq.length-1]]) {
            dq.pop();
        }

        dq.push(i)
    }
    return dp[n - 1];
}

function test(...args) {
    const expected = args.pop();
    const actual = maxResult(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1696. Jump Game VI', () => {
    it('1696. 1', () => { test([1, -1, -2, 4, -7, 3], 2, 7) });
    it('1696. 2', () => { test([10, -5, -2, 4, 0, 3], 3, 17) });
    it('1696. 3', () => { test([1, -5, -20, 4, -1, 3, -6, -3], 2, 0) });
});

/*
Runtime: 98 ms, faster than 100.00% of JavaScript online submissions for Jump Game VI.
Memory Usage: 53.9 MB, less than 63.33% of JavaScript online submissions for Jump Game VI.
*/