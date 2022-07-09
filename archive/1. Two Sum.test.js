
const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const n = nums.length;
    const map = {};
    for (let i = 0; i < n; i++) {
        const complement = target - nums[i];
        if(map[complement] !== undefined){
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

    return [];
};

function test(...args) {
    const expected = args.pop();
    const actual = twoSum (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1. Two Sum', () => {
    it('1. 1', () => {test([2,7,11,15],  9, [0,1])});
    it('1. 2', () => {test([3,2,4],  6, [1,2])});
    it('1. 3', () => {test([3,3],  6, [0,1])});    
});

