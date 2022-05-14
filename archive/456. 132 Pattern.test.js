const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function find132pattern(nums) {
    const n = nums.length;
    // pair [num, minLeft], mono decreasing
    const stack = []; 
    curMin = nums[0];

    for (let i=1;i<n;i++) {
        while(stack.length>0 && nums[i]>=stack[stack.length-1][0]){
            stack.pop();
        }
        if(stack.length>0 && nums[i]>stack[stack.length-1][1]) {
            return true;
        }

        stack.push([nums[i], curMin]);

        curMin = Math.min(curMin, nums[i]);
    }

    return false;
}


function test(...args) {
    const expected = args.pop();
    const actual = find132pattern(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('456. 132 Pattern', () => {
    it('456. 2', () => { test([3, 1, 4, 2], true) });
    it('456. 1', () => { test([1, 2, 3, 4], false) });
    it('456. 3', () => { test([-1, 3, 2, 0], true) });
    it('456. 4', () => { test([3, 5, 0, 3, 4], true) });
    it('456. 5', () => { test([-2, 1, 2, -2, 1, 2], true) });
    it('456. 6', () => { test([1, 3, 2, 4, 5, 6, 7, 8, 9, 10], true) });
});

/*
Runtime: 80 ms, faster than 83.33% of JavaScript online submissions for 132 Pattern.
Memory Usage: 54.9 MB, less than 38.89% of JavaScript online submissions for 132 Pattern.
*/