const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * 
 * @param {number} n 
 * @param {number} c 
 * @returns {number}
 */
function choose(n, c) {
    if (n < c) { return 0; }
    if (n === c) { return 1; }
    if (c === 2) {
        return n * (n - 1) / 2;
    }

    if (c === 3) {
        return n * (n - 1) / 2 * (n - 2) / 3;
    }
}

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function threeSumMulti(arr, target) {
    const counter = new Map();
    for (const num of arr) {
        if (!counter.has(num)) {
            counter.set(num, 0);
        }
        counter.set(num, counter.get(num) + 1);
    }

    let ans = 0;
    for (const i of counter.keys()) {
        for (const j of counter.keys()) {
            const k = target - i - j;
            if (i > j || j > k || !counter.has(k)) {
                continue;
            }

            if (i === j && j === k) {
                ans += choose(counter.get(i), 3)
                ans = ans % 1000000007
            } else if (i == j) {
                ans += choose(counter.get(i), 2) * counter.get(k) % 1000000007;
                ans = ans % 1000000007
            } else if (j === k) {
                ans += counter.get(i) * choose(counter.get(j), 2) % 1000000007;
                ans = ans % 1000000007
            } else {
                ans += counter.get(i) * counter.get(j) * counter.get(k) % 1000000007;
                ans = ans % 1000000007
            }
        }
    }
    return ans;
}

function test(arr, target, expected) {
    const actual = threeSumMulti(arr, target);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('923. 3Sum With Multiplicity', () => {
    it('923. 1', () => { test([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8, 20) });
    it('923. 2', () => { test([1, 1, 2, 2, 2, 2], 5, 12) });
    //it('923. 3', () => {test()});
});


/*
Runtime: 76 ms, faster than 92.31% of JavaScript online submissions for 3Sum With Multiplicity.
Memory Usage: 45.5 MB, less than 15.38% of JavaScript online submissions for 3Sum With Multiplicity.
*/