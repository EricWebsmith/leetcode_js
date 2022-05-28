const { expect } = require("chai");

function getMid(left, right) {
    if (right - left & 1 === 1) {
        return left + (right - left - 1) / 2;
    } else {
        return left + (right - left) / 2;
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function triangleNumber(nums) {
    nums.sort((a, b) => a - b);
    let ans = 0;
    for (let i = nums.length - 1; i > 1; i--) {
        let start = 0; let end = i - 1;
        while (start < end) {
            if (nums[i] < nums[start] + nums[end]) { ans += end - start; end--; }
            else { start++; }
        }
    }
    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = triangleNumber(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('611. Valid Triangle Number', () => {
    it('611. 1', () => { test([2, 2, 3, 4], 3) });
    it('611. 2', () => { test([4, 2, 3, 4], 4) });
    it('611. 3', () => { test([0, 0], 0) });
    it('611. 4', () => { test([0, 0, 0], 0) });
    it('611. 5', () => { test([34, 75, 96, 10, 60, 70, 70, 45], 36) });
});


/*
Runtime: 105 ms, faster than 96.41% of JavaScript online submissions for Valid Triangle Number.
Memory Usage: 44 MB, less than 67.66% of JavaScript online submissions for Valid Triangle Number.
*/