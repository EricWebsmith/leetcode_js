const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function checkIfExist (arr) {
    const set = new Set();
    for(const num of arr) {
        if ((num & 1) === 0) {
            const half = num/2;
            if (set.has(half)) {
                return true;
            }
        }

        const double = num * 2;
        if (set.has(double)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

function test(expected, args) {
    const actual = checkIfExist (args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1346. Check If N and Its Double Exist', () => {
    it('1346. 1', () => {test(true, [10,2,5,3])});
    it('1346. 2', () => {test(true, [7,1,14,11])});
    it('1346. 3', () => {test(false,  [3,1,7,11])});
});


/*
Runtime: 60 ms, faster than 96.73% of JavaScript online submissions for Check If N and Its Double Exist.
Memory Usage: 44 MB, less than 47.55% of JavaScript online submissions for Check If N and Its Double Exist.
*/