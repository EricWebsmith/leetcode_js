const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {string} password
 * @return {boolean}
 */
function strongPasswordCheckerII(password) {
    if (password.length < 8) {
        return false;
    }

    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let hasSpecial = false;
    for (let i = 0; i < password.length; i++) {
        if (i > 0 && password[i] == password[i - 1]) {
            return false;
        }

        if (Array.from('abcdefghijklmnopqrstuvwxyz').includes(password[i])) {
            hasLower = true;
        } else if (Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').includes(password[i])) {
            hasUpper = true;
        } else if (Array.from('0123456789').includes(password[i])) {
            hasDigit = true;
        } else if (Array.from("!@#$%^&*()-+").includes(password[i])) {
            hasSpecial = true;
        }
    }

    return hasLower && hasUpper && hasDigit && hasSpecial

}

function test(...args) {
    const expected = args.pop();
    const actual = strongPasswordCheckerII(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6095. Strong Password Checker II', () => {
    it('6095. 1', () => { test("IloveLe3tcode!", true) });
    it('6095. 2', () => { test("Me+You--IsMyDream", false) });
    it('6095. 3', () => { test("1aB!", false) });
});
