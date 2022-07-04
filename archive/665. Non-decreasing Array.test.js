
const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function checkPossibility(nums) {
    const n = nums.length;
    if (n <= 2) { return true; }
    let modifies = new Map();
    
    // scan from left to right
    for (let i = 1; i <= n-1; i++) {
        if (nums[i] < nums[i - 1]) {
            modifies.set(i ,nums[i]);
            nums[i] = nums[i - 1];
        }
    }

    if (modifies.size<=1) {
        return true;
    }

    //restore
    for (const [position, value] of modifies.entries()){
        nums[position] = value;
    }
    modifies.clear();

    // scan from right to left
    for(let i=n-2;i>=0;i--) {
        if (modifies.size>1) {
            return false;
        }
        if(nums[i]>nums[i+1]) {
            modifies.set(i ,nums[i]);
            nums[i] = nums[i+1];
        }
    }
    return modifies.size <= 1;
};

function test(...args) {
    const expected = args.pop();
    const actual = checkPossibility(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('665. Non-decreasing Array', () => {

    it('665. 1', () => { test([4, 2, 3], true) });
    it('665. 2', () => { test([4, 2, 1], false) });
    it('665. 3', () => { test([5, 7, 1, 8], true) });
    it('665. 4', () => { test([3, 4, 2, 3], false) });
    it('665. 5', () => { test([-1,4,2,3], true) });
});

/*
Runtime: 78 ms, faster than 76.98% of JavaScript online submissions for Non-decreasing Array.
Memory Usage: 52.3 MB, less than 6.35% of JavaScript online submissions for Non-decreasing Array.
*/