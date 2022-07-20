
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode');
const { head } = require("lodash");

/**
 * 
 * @param {string} word 
 */
function* wordGen(word) {
    for(let i=0;i<word.length;i++) {
        yield word[i];
    }
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
function numMatchingSubseq(s, words) {
    const aCode = 'a'.charCodeAt(0);
    let ans = 0;
    const heads = [];
    for(let i=0;i<26;i++) {
        heads.push([]);
    }

    for(const word of words) {
        const g = wordGen(word);
        const first = g.next().value;
        heads[first.charCodeAt(0)-aCode].push(g);
    }

    for(const letter of s) {
        const letterIndex = letter.charCodeAt(0) - aCode;
        const oldBucket = heads[letterIndex];
        heads[letterIndex] = [];

        while(oldBucket.length>0) {
            const g = oldBucket.pop();
            const next = g.next();
            if (next.done) {
                ans++;
            } else {
                heads[next.value.charCodeAt(0) - aCode].push(g);
            }
        }
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = numMatchingSubseq (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('792. Number of Matching Subsequences', () => {
    it('792. 1', () => {test( "abcde", ["a","bb","acd","ace"],  3)});
    it('792. 2', () => {test( "dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"],  2)});
   
});

/*
Runtime: 143 ms, faster than 90.50% of JavaScript online submissions for Number of Matching Subsequences.
Memory Usage: 53.3 MB, less than 47.11% of JavaScript online submissions for Number of Matching Subsequences.
*/