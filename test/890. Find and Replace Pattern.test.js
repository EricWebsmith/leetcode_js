
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode');

const letters = 'abcdefghijklmnopqrstuvwxyz';

function findPattern(word) {
    const map = new Map();
    let pattern = '';
    index = 0;
    for (let i=0;i<word.length;i++) {
        if (!map.has(word[i])) {
            map.set(word[i],  letters[index]);
            index++;
        }

        const patternIndex = map.get(word[i]);
        pattern += patternIndex;
    }
    return pattern;
}

function matchPattern(word, pattern) {
    const map = new Map();
    index = 0;
    for (let i=0;i<word.length;i++) {
        if (!map.has(word[i])) {
            map.set(word[i], letters[index]);
            index++;
        }

        const patternIndex = map.get(word[i]);
        if (pattern[i]!==patternIndex) {
            return false;
        }
    }
    return true;
}

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
function findAndReplacePattern(words, pattern) {
    const digitPattern = findPattern(pattern);
    const ans = [];
    for (const word of words) {
        if(matchPattern(word, digitPattern)) {
            ans.push(word);
        }
    }
    return ans;
}

function test(words, pattern, expected) {

    const actual = findAndReplacePattern(words, pattern);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('890. Find and Replace Pattern', () => {
    it('890. 1', () => { test(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb", ["mee", "aqq"]) });
    it('890. 2', () => { test(["a", "b", "c"], "a", ["a", "b", "c"]) });
    it('890. 3', () => { test(
        ["qxrwtncxyoqwmsxoavos","eqvzjrnqgkezxmqkhdkm","pjxmgdujohpmtsjhazhs","yqhlipeqwnylkrqnsbnr","plktdyslmoptqflowaof"], 
        "ghtxpauhingxekhnoqnk", 
        ["qxrwtncxyoqwmsxoavos","eqvzjrnqgkezxmqkhdkm","pjxmgdujohpmtsjhazhs","yqhlipeqwnylkrqnsbnr","plktdyslmoptqflowaof"]
    ) });
});


/*
Runtime: 69 ms, faster than 95.00% of JavaScript online submissions for Find and Replace Pattern.
Memory Usage: 43.9 MB, less than 75.00% of JavaScript online submissions for Find and Replace Pattern.
*/