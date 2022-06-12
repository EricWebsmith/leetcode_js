const { expect } = require("chai");

/**
 * See 1760
 * @param {number} left 
 * @param {number} right 
 * @param {function} condition
 * @returns 
 */
function binarySearchSmallest(left, right, condition) {
    // add 1 to right if condition may not meet.
    while (left < right) {
        const mid = left + Math.floor((right - left + 1) / 2);
        if (condition(mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }

    }
    return left;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countSubarrays(nums, k) {
    const n = nums.length;
    const acc = [];
    acc.push(nums[0]);
    for (let i = 1; i < n; i++) {
        acc.push(nums[i] + acc[i - 1]);
    }

    let ans = 0;
    for (let start = 0; start < n; start++) {
        const condition = (length) => {
            if (length === 0) { return 0; }
            const sum = start === 0 ? acc[start + length - 1] : acc[start + length - 1] - acc[start - 1];
            const score = sum * length;
            return score < k;
        };
        const len = binarySearchSmallest(0, n - start, condition);
        ans += len;
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = countSubarrays(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('2302. Count Subarrays With Score Less Than K', () => {
    it('2302. 1', () => { test([2, 1, 4, 3, 5], 10, 6) });
    it('2302. 2', () => { test([1, 1, 1], 5, 5) });
    //it('6098. 3', () => {test()});
});


/*
Runtime: 242 ms, faster than 100.00% of JavaScript online submissions for Count Subarrays With Score Less Than K.
Memory Usage: 63.3 MB, less than 100.00% of JavaScript online submissions for Count Subarrays With Score Less Than K.
*/