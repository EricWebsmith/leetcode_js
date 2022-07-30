
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


const ASCII_LOWERCASE_A = 97;

/**
 * 
 * @param {string} word 
 * @returns {number[]}
 */
function toSet(word){
    const result = new Array(26).fill(0);
    for (const c of word) {
        const index = c.charCodeAt(0) - ASCII_LOWERCASE_A;
        result[index]++;
    }
    return result;
}

/**
 * 
 * @param {number[][]} sets 
 */
 function mergeSets(sets) {
    const mergedSet = new Array(26).fill(0);
    for (const set of sets) {
        for (let i=0;i<26;i++) {
            mergedSet[i] = Math.max(mergedSet[i], set[i]);
        }
    }
    return mergedSet;
}

/**
 * 
 * @param {number[]} containerSet 
 * @param {number[]} containeeSet 
 */
function contains(containerSet, containeeSet) {
    for (let i=0;i<26;i++) {
        if (containerSet[i]<containeeSet[i]) {
            return false;
        }
    }

    return true;
}

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
function wordSubsets(words1, words2) {
    const sets2 = words2.map(w=>toSet(w));
    const mergedSet2 = mergeSets(sets2);

    const ans = [];
    for (const word1 of words1) {
        const set1 = toSet(word1);
        if (contains(set1, mergedSet2)){
            ans.push(word1)
        }
    }

    return ans;
}


function test(words1, words2, expected) {
    
    const actual = wordSubsets(words1, words2);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('916. Word Subsets', () => {
    it('916. 1', () => {test( ["amazon","apple","facebook","google","leetcode"], ["e","o"],  ["facebook","google","leetcode"])});
    it('916. 2', () => {test( ["amazon","apple","facebook","google","leetcode"], ["l","e"],  ["apple","google","leetcode"])});
    it('916. 3', () => {test( ["amazon","apple","facebook","google","leetcode"], ["e","oo"], ["facebook","google"])});
    it('916. 4', () => {test( ["amazon","apple","facebook","google","leetcode"], ["lo","eo"], ["google","leetcode"])});
    it('916. 5', () => {test( ["amazon","apple","facebook","google","leetcode"], ["lo","eo", "le"], ["google","leetcode"])});
    it('916. 6', () => {test( ["amazon","apple","facebook","google","leetcode"], ["leo"], ["google","leetcode"])});
});


/*
Runtime: 176 ms, faster than 100.00% of JavaScript online submissions for Word Subsets.
Memory Usage: 60.8 MB, less than 71.15% of JavaScript online submissions for Word Subsets.
*/