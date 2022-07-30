
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

const letters = 'abcdefghijklmnopqrstuvwxyz';

/**
 * 
 * @param {string} s 
 * @returns {string}
 */
function normalize(s) {
    const map = new Map();
    let result = '';
    let index = 0;
    for (let i=0;i<s.length;i++) {
        if(!map.has(s[i])) {
            map.set(s[i], letters[index]);
            index++;
        }

        const normalizedChar = map.get(s[i]);
        result += normalizedChar;
    }
    return result;
}

/**
 * 
 * @param {string} word 
 * @param {string} normalizedPattern 
 * @returns {boolean}
 */
function compare(word, normalizedPattern) {
    const map = new Map();
    let index = 0;
    for (let i=0;i<word.length;i++) {
        if(!map.has(word[i])) {
            map.set(word[i], letters[index]);
            index++;
        }

        const normalizedChar = map.get(word[i]);
        if (normalizedChar !== normalizedPattern[i]) {
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
    const normalizedPattern = normalize(pattern);
    const result = [];
    for(const word of words) {
        if (compare(word, normalizedPattern)) {
            result.push(word);
        }
    }

    return result;
}


function test(words, pattern, expected) {
    
    const actual = findAndReplacePattern(words, pattern);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('890. Find and Replace Pattern', () => {
    it('890. 1', () => {test( ["abc","deq","mee","aqq","dkd","ccc"], "abb",  ["mee","aqq"])});
    it('890. 2', () => {test( ["a","b","c"], "a",  ["a","b","c"])});
   
});
