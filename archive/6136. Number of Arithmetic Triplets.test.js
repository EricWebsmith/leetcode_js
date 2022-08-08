
const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
function arithmeticTriplets(nums, diff) {

    const n = nums.length;
    const set = new Set();
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (set.has(nums[i]-diff) && set.has(nums[i]-diff-diff)) {
            ans++;
        }
        set.add(nums[i]);
    }
    return ans;
}


function test(nums, diff, expected) {

    const actual = arithmeticTriplets(nums, diff);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6136. Number of Arithmetic Triplets', () => {
    it('6136. 1', () => { test([0, 1, 4, 6, 7, 10], 3, 2) });
    it('6136. 2', () => { test([4, 5, 6, 7, 8, 9], 2, 2) });

});
