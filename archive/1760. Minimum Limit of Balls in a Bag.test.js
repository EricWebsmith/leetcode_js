const { expect } = require("chai");

/**
 * 
 * @param {number} left 
 * @param {number} right 
 * @param {function} condition
 * @returns 
 */
function binarySearchSmallest(left, right, condition) {
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (condition(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }

    }
    return left;
}

/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
function minimumSize(nums, maxOperations) {
    let left = 1;
    let right = Math.max(...nums);

    function condition(finalSize) {
        let ops = 0;
        for (const num of nums) {
            const current = Math.ceil(num / finalSize) - 1;
            if (current > 0) {
                ops += current;
            }
        }
        return ops <= maxOperations;
    }

    const ans = binarySearchSmallest(left, right, condition);
    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = minimumSize(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1760. Minimum Limit of Balls in a Bag', () => {
    it('1760. 1', () => { test([9], 2, 3) });
    it('1760. 2', () => { test([2,4,8,2], 4, 2) });
    it('1760. 3', () => { test([7,17], 2, 7) });
});


/*
Runtime: 146 ms, faster than 88.61% of JavaScript online submissions for Minimum Limit of Balls in a Bag.
Memory Usage: 53.3 MB, less than 48.10% of JavaScript online submissions for Minimum Limit of Balls in a Bag.
*/