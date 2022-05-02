const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * 
 * @param {string} s 
 * @param {number} p 
 */
function goBack(s, p) {
    let skip = 0;
    while(p>=0) {
        if(s[p] === '#') {
            skip++;
        } else if(skip>0){
            skip--
        } else {
            break;
        }
        p--;
    }
    return p;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
    let ps = s.length - 1;
    let pt = t.length - 1;
    while(ps >=0 || pt >= 0) {
        ps = goBack(s, ps);
        pt = goBack(t, pt);

        if (ps>=0 ^ pt>=0) {
            return false;
        }

        if (ps>=0 && pt>=0 && s[ps] !=t[pt]) {
            return false;
        }

        ps--;
        pt--;
    }

    return true;
}

function test(expected, ...args) {
    const actual = backspaceCompare (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('844. Backspace String Compare', () => {
    it('844. 1', () => {test(true, "ab#c", "ad#c")});
    it('844. 2', () => {test(true, "ab##", "c#d#")});
    it('844. 3', () => {test(false, "a#c", "b")});
});


/*
Runtime: 66 ms, faster than 81.47% of JavaScript online submissions for Backspace String Compare.
Memory Usage: 41.5 MB, less than 99.66% of JavaScript online submissions for Backspace String Compare.
*/