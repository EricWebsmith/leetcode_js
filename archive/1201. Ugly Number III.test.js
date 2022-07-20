
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function gcd(a, b) {
    if (a < b) {
        const temp = a;
        a = b;
        b = temp;
    }

    if (b === 0) { return a; }

    const r = a % b;
    return gcd(b, r);
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function lcm(a, b) {
    const c = gcd(a, b);
    return a / c * b;
}

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function (n, a, b, c) {
    let left = 1;
    let right = 2000000000;
    const ab = lcm(a, b);
    const ac = lcm(a, c);
    const bc = lcm(b, c);
    const abc = lcm(a, bc);
    while (left < right) {
        const m = left + Math.floor((right - left) / 2);
        const k = Math.floor(m / a) + Math.floor(m / b) + Math.floor(m / c) -
              Math.floor(m / ab) - Math.floor(m / bc) - Math.floor(m / ac) +
            Math.floor(m / abc);
        if (k >= n) {
            right = m;
        } else {
            left = m + 1;
        }
    }

    return left;
}


function test(...args) {
    const expected = args.pop();
    const actual = nthUglyNumber(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1201. Ugly Number III', () => {
    it('1201. 1', () => { test(3, 2, 3, 5, 4) });
    it('1201. 2', () => { test(4, 2, 3, 4, 6) });
    it('1201. 3', () => { test(5, 2, 11, 13, 10) });

});
