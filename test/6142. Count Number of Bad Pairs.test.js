
const { expect } = require("chai");
const _ = require('lodash');


/**
 * @param {number[]} nums
 * @return {number}
 */
function countBadPairs(nums) {
    const n = nums.length;
    for (let i=0;i<n;i++) {
        nums[i] -= i;
    }

    const countObj = {};
    for (const num of nums) {
        countObj[num] = (countObj[num]??0) + 1;
    }

    let ans = 0;
    for (const c of Object.values(countObj)) {
        if (c>1) {
            ans += c * (c-1) / 2;
        }
    }

    return n * (n-1) / 2 -  ans;
}


function test(nums, expected) {
    
    const actual = countBadPairs(nums);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6142. Count Number of Bad Pairs', () => {
    it('6142. 1', () => {test( [4,1,3,3],  5)});
    it('6142. 2', () => {test( [1,2,3,4,5],  0)});
   
});
