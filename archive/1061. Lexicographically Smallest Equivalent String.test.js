const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
function smallestEquivalentString(s1, s2, baseStr) {
    const map = new Map();
    const aAt = 'a'.charCodeAt(0);
    const zAt = 'z'.charCodeAt(0);
    for (let i = aAt; i <= zAt; i++) {
        const c = String.fromCharCode(i);
        map.set(c, c);
    }

    /**
     * 
     * @param {string} c
     */
    function find(c) {
        const p = map.get(c);
        if (map.get(p) === p) {
            return p;
        }
        return find(p);
    }

    /**
     * 
     * @param {string} c 
     * @param {string} d
     */
    function union(c, d) {
        const pc = find(c);
        const pd = find(d);
        const p = pc < pd ? pc : pd;
        map.set(pc, p);
        map.set(pd, p);
    }

    const n = s1.length;
    for (let i = 0; i < n; i++) {
        union(s1[i], s2[i]);
    }

    // flatten
    for (let i = aAt; i <= zAt; i++) {
        const c = String.fromCharCode(i);
        const p = find(c);
        map.set(c, p);
    }

    let ans = '';
    for (let i = 0; i < baseStr.length; i++) {
        ans += map.get(baseStr[i]);
    }
    return ans;
}

function test(s1, s2, baseStr, expected) {
    const actual = smallestEquivalentString(s1, s2, baseStr);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('1061. Lexicographically Smallest Equivalent String', () => {
    it('1061. 1', () => { test("parker", "morris", "parser", "makkek") });
    it('1061. 2', () => { test("hello", "world", "hold", "hdld") });
    it('1061. 3', () => { test("leetcode", "programs", "sourcecode", "aauaaaaada") });
    it('1061. 4', () => { test("a", "b", "c", "c") });
    it('1061. 5', () => { test("ab", "ba", "bb", "aa") });
});


/*
Runtime: 76 ms, faster than 96.15% of JavaScript online submissions for Lexicographically Smallest Equivalent String.
Memory Usage: 45.9 MB, less than 46.15% of JavaScript online submissions for Lexicographically Smallest Equivalent String.
*/