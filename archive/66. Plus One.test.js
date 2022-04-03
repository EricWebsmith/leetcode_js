const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne (digits) {
    let carry = 1;
    const n = digits.length;
    for (let i = n - 1; i>=0;i--) {
        if (digits[i] + carry === 10 ) {
            carry = 1;
            digits[i] = 0;
        } else if (carry === 1) {
            digits[i] += 1;
            carry = 0;
        }
    }
    if (carry === 1) {
        digits.unshift(1);
    }

    return digits;
}

function test(digits, expected) {
    const actual = plusOne(digits);
    console.log(actual, expected);
    expect(actual).to.have.members(expected);
}

describe('66. Plus One', () => {
    it('1', () => {test([4,3,2,1], [4,3,2,2])});
    it('2', () => {test([9], [1,0])});
    it('3', () => {test([1,2,3],[1,2,4])});
});

/*
Runtime: 68 ms, faster than 73.64% of JavaScript online submissions for Plus One.
Memory Usage: 42 MB, less than 68.40% of JavaScript online submissions for Plus One.
*/