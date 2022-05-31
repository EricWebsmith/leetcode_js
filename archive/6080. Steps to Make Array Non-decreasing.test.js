const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {number}
 */
function totalSteps(nums) {
    let ans = 0;
    nums.reverse();
    const lst = [[nums[0], 0]];
    for (let i = 1; i < nums.length; i++) {
        let current = 0;
        while (lst.length > 0 && lst[lst.length - 1][0] < nums[i]) {
            current = Math.max(current + 1, lst[lst.length - 1][1])
            lst.pop();
        }

        lst.push([nums[i], current]);
        ans = Math.max(ans, current);
    }

    return ans;
}


function test(...args) {
    const expected = args.pop();
    const actual = totalSteps(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('-------------', () => {
    it('1', () => { test([5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11], 3) });
    it('2', () => { test([4, 5, 7, 7, 13], 0) });
    it('3', () => { test([10, 1, 2, 3, 4, 5, 6, 1, 2, 3], 6) });
    it('4', () => { test([7, 14, 4, 14, 13, 2, 6, 13], 3) });
    it('5', () => { test([5, 14, 15, 2, 11, 5, 13, 15], 3) });
});

/*
Runtime: 158 ms, faster than 100.00% of JavaScript online submissions for Steps to Make Array Non-decreasing.
Memory Usage: 71.7 MB, less than 100.00% of JavaScript online submissions for Steps to Make Array Non-decreasing.
*/