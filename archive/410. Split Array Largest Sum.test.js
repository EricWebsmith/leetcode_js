const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
function splitArray(nums, m) {
    let left = _.max(nums);
    let right = _.sum(nums);

    function canSplit(largest) {
        let subArray = 0;
        let curSum = 0;
        for (let i = 0; i<nums.length; i++) {
            curSum += nums[i];
            if (curSum > largest) {
                subArray += 1;
                curSum = nums[i];
            }
        }

        return subArray+1<=m;
    }

    let ans =  left;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (canSplit(mid)) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};

/**
 * 
 * @param {number[]} nums
 * @param {number} m
 * @return {number} expected 
 */
 function test(nums, m, expected) {
    const actual = splitArray (nums, m);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('Graph Valid Tree', () => {
    it('1', () => {test([7,2,5,10,8], 2, 18)});
    it('2', () => {test([1,2,3,4,5], 2, 9)});
    it('3', () => {test([1,4,4], 3, 40)});
});

/*
Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Split Array Largest Sum.
Memory Usage: 41.7 MB, less than 93.23% of JavaScript online submissions for Split Array Largest Sum.
*/