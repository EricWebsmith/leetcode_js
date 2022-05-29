const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
function rearrangeCharacters (s, target) {
    const targetMap = {};
    for (const t of target) {
        if (!targetMap.hasOwnProperty(t)) {
            targetMap[t] = 0;
        }

        targetMap[t]++;
    }

    const sourceMap = {};
    for (const c of s) {
        if (!targetMap.hasOwnProperty(c)){
            continue;
        }

        if(!sourceMap.hasOwnProperty(c)){
            sourceMap[c] = 0;
        }
        sourceMap[c]++;
    }

    let ans = 100;
    for (const key of Object.keys(targetMap)) {
        const targetCount = targetMap[key];
        if(!sourceMap.hasOwnProperty(key)) {
            return 0;
        }
        const sourceCount = sourceMap[key];
        const current = Math.floor(sourceCount / targetCount);
        ans = Math.min(ans, current);
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = rearrangeCharacters (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6078. Rearrange Characters to Make Target String', () => {
    it('6078. 1', () => {test("ilovecodingonleetcode", "code", 2)});
    it('6078. 2', () => {test("abcba", "abc", 1)});
    it('6078. 3', () => {test("abbaccaddaeea", "aaaaa", 1)});
});
