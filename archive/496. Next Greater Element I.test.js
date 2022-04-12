const { expect } = require("chai");

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    const stack = [];
    const map = new Map();
    for (let i = 0;i<nums2.length;i++){
        let last = stack[stack.length-1];
        while(nums2[i]>nums2[last]) {
            map.set(nums2[last], nums2[i]);
            stack.pop();
            last = stack[stack.length-1];
        }
        stack.push(i);
    }

    const ans = [];
    for (let i = 0; i < nums1.length; i++) {
        if(map.has(nums1[i])) {
            ans.push(map.get(nums1[i]));
        } else{
            ans.push(-1);
        }
    }
    return ans;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} expected
 * @return {void}
 */
function test(nums1, nums2, expected) {
    const actual = nextGreaterElement(nums1, nums2);
    const result = actual.every((value, index) => value === expected[index])
    if (!result) {
        console.log(result, expected, actual);
    }
    expect(result).to.be.true;
}

describe('496. Next Greater Element I', () => {
    it('496. 1', () => {test([4, 1, 2], [1, 3, 4, 2], [-1, 3, -1]);});
    it('496. 2', () => {test([2, 4], [1, 2, 3, 4], [3, -1]);});
    it('496. 3', () => {test([1], [1, 2, 3, 4], [2]);});
    it('496. 4', () => {test([3], [1, 2, 3, 4], [4]);});
    it('496. 5', () => {test([4], [1, 2, 3, 4], [-1]);});
});

/*
Runtime: 60 ms, faster than 98.53% of JavaScript online submissions for Next Greater Element I.
Memory Usage: 44.9 MB, less than 16.62% of JavaScript online submissions for Next Greater Element I.
*/