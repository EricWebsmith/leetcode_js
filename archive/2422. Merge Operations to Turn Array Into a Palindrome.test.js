const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations (nums) {
    const n = nums.length;
    let left = 0;
    let right = n-1;
    let leftSum = nums[0];
    let rightSum = nums[n-1];

    let ans = 0;
    while(left<right) {
        if (leftSum == rightSum) {
            left++;
            leftSum += nums[left]
            right--;
            rightSum += nums[right]
        } else if(leftSum<rightSum) {
            left++;
            leftSum += nums[left];
            ans++;
        } else if (leftSum>rightSum) {
            right--;
            rightSum += nums[right];
            ans++
        }
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = minimumOperations (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('2422. Merge Operations to Turn Array Into a Palindrome', () => {
    it('1', () => {test([4,3,2,1,2,3,1], 2)});
    it('2', () => {test([1,2,3,4], 3)});
    it('3', () => {test([1,2,3,2,1], 0)});
});

/*
Runtime: 163 ms, faster than 100.00% of JavaScript online submissions for Merge Operations to Turn Array Into a Palindrome.
Memory Usage: 53.9 MB, less than 100.00% of JavaScript online submissions for Merge Operations to Turn Array Into a Palindrome.
*/