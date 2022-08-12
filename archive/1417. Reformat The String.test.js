
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')



/**
 * @param {string} s
 * @return {string}
 */
function reformat(s) {
    const digitArray = '0123456789'.split('');
    let digits = [];
    let letters = [];

    let ans = '';
    for (const c of s) {
        if (digitArray.includes(c)) {
            digits.push(c);
        } else {
            letters.push(c);
        }
    }

    if (Math.abs(digits.length - letters.length) > 1) {
        return '';
    }

    if (digits.length > letters.length) {
        const t = letters;
        letters = digits;
        digits = t;
    }

    while (digits.length > 0 || letters.length > 0) {
        ans += letters.pop() ?? '';
        ans += digits.pop() ?? '';
    }

    return ans;

}


function test(s, expected) {

    const actual = reformat(s);
    // if (actual !== expected) {
    //     console.log(actual, expected);
    // }
    expect(actual).to.be.oneOf(expected);
}

describe('1417. Reformat The String', () => {
    it('1417. 1', () => { test("a0b1c2", ["c2b1a0", "2c1b0a", "0a1b2c", "0a1b2c", "a0b1c2", "0a1b2c", "0c2a1b"]) });
    it('1417. 2', () => { test("leetcode", [""]) });
    it('1417. 3', () => { test("1229857369", [""]) });

});
