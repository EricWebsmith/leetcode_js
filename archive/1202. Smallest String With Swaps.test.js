const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
function smallestStringWithSwaps(s, pairs) {
    const n = s.length;
    const arr = Array.from(s);
    const map = new Map();

    /**
     * 
     * @param {string} c
     */
    function find(c) {
        if (!map.has(c)) {
            map.set(c, c);
            return c;
        }

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

    for (const pair of pairs) {
        union(pair[0], pair[1]);
    }

    // // flatten
    for (const [key, value] of map.entries()) {
        map.set(key, find(key));
    }

    // reverse
    // reserse map
    const reverseMap = new Map();
    for (const [key, value] of map.entries()) {
        if (!reverseMap.has(value)) {
            reverseMap.set(value, []);
        }

        reverseMap.get(value).push(key);
    }

    for(const [key, list] of reverseMap.entries()) {
        list.sort((a, b) => a-b);
        const chars = list.map((index) => arr[index]);
        chars.sort();
        for (let i=0;i<list.length;i++) {
            arr[list[i]] = chars[i];
        }
    }

    return arr.join('');
}

function test(s, pairs, expected) {
    const actual = smallestStringWithSwaps(s, pairs);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1202. Smallest String With Swaps', () => {
    it('1202. 1', () => { test("dcab", [[0, 3], [1, 2]], "bacd") });
    it('1202. 2', () => { test("dcab", [[0, 3], [1, 2], [0, 2]], "abcd") });
    it('1202. 3', () => { test("cba", [[0, 1], [1, 2]], "abc") });
    it('1202. 4', () => { test("vbjjxgdfnru", [[8,6],[3,4],[5,2],[5,5],[3,5],[7,10],[6,0],[10,0],[7,1],[4,8],[6,2]], "bdfgjjnuvrx"    ) });
});


/*
Runtime: 232 ms, faster than 92.31% of JavaScript online submissions for Smallest String With Swaps.
Memory Usage: 70.3 MB, less than 97.80% of JavaScript online submissions for Smallest String With Swaps.
*/