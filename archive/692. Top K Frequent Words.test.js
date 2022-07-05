
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
    const wordMap = {};
    for (const word of words) {
        wordMap[word] = (wordMap[word]??0) + 1;
    }

    const wordArr = [];
    
    for (let [word, freq] of Object.entries(wordMap)) {
        wordArr.push([word, freq]);
    }

    wordArr.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        }

        return a[0].localeCompare(b[0]);
    })

    return wordArr.map(ele => ele[0]).slice(0, k);
}

function test(...args) {
    const expected = args.pop();
    const actual = topKFrequent (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('692. Top K Frequent Words', () => {

    it('692. 1', () => {test(["i","love","leetcode","i","love","coding"],  2, ["i","love"])});
    it('692. 2', () => {test(["the","day","is","sunny","the","the","the","sunny","is","is"],  4, ["the","is","sunny","day"])});    
});

/*
Runtime: 99 ms, faster than 74.05% of JavaScript online submissions for Top K Frequent Words.
Memory Usage: 48.1 MB, less than 25.81% of JavaScript online submissions for Top K Frequent Words.
*/
