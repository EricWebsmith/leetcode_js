
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode');




/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
function findLadders(beginWord, endWord, wordList) {
    const wordLength = wordList[0].length;

    const MaxWordLength = 10000;
    let beginWordIndex = wordList.indexOf(beginWord);
    if (beginWordIndex === -1) {
        wordList.unshift(beginWord);
        beginWordIndex = 0;
    }

    const endWordIndex = wordList.indexOf(endWord);
    if (endWordIndex === -1) { return []; }

    const n = wordList.length;

    const edges = wordList.map(word => []);

    const groupWordMap = new Map();

    wordList.forEach((word, wordIndex) => {
        for (let i = 0; i < wordLength; i++) {
            const pattern = word.substring(0, i) + '*' + word.substring(i + 1);
            if (!groupWordMap.has(pattern)) {
                groupWordMap.set(pattern, []);
            }
            groupWordMap.get(pattern).push(wordIndex);
        }
    });

    for (const group of groupWordMap.values()) {
        for (let i=0;i<group.length;i++) {
            for(let j=0;j<group.length;j++) {
                if(!edges[group[i]].includes(group[j])) {
                    edges[group[i]].push(group[j]);
                    edges[group[j]].push(group[i]);
                }
                
            }
        }
    }

    const dp = new Array(n).fill(MaxWordLength);

    let current = [beginWordIndex];
    let length = 1;
    while (current.length > 0) {
        const newCurrent = []
        for (let i = 0; i < current.length; i++) {
            const index = current[i];
            if (dp[index] !== MaxWordLength) {
                continue;
            }
            dp[index] = length;
            for (const next of edges[index]) {
                newCurrent.push(next);
            }

        }
        current = newCurrent;
        length++;
    }


    if (dp[endWordIndex] === MaxWordLength) {
        return [];
    }

    const traceArray = new Array(dp[endWordIndex]);
    traceArray[dp[endWordIndex] - 1] = endWordIndex;
    const ans = [];
    function traceback(currentIndex, distance) {
        traceArray[distance - 1] = currentIndex;
        if (distance === 1) {
            const iAns = [];
            for (const index of traceArray) {
                iAns.push(wordList[index]);
            }
            ans.push(iAns);
            return;
        }

        for (const prev of edges[currentIndex]) {
            if (dp[prev] === distance - 1) {
                traceback(prev, distance - 1);
            }
        }

    }

    traceback(endWordIndex, dp[endWordIndex]);
    return ans;
}


function test(beginWord, endWord, wordList, expected) {

    const actual = findLadders(beginWord, endWord, wordList);
    // if (actual !== expected) {
    //     console.log(actual, expected);
    // }
    expect(actual).to.be.eql(expected);
}

describe('126. Word Ladder II', () => {
    it('126. 1', () => { test("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"], [["hit", "hot", "dot", "dog", "cog"], ["hit", "hot", "lot", "log", "cog"]]) });
    it('126. 2', () => { test("hit", "cog", ["hot", "dot", "dog", "lot", "log"], []) });

});

/*
Runtime: 113 ms, faster than 81.91% of JavaScript online submissions for Word Ladder II.
Memory Usage: 50.4 MB, less than 24.62% of JavaScript online submissions for Word Ladder II.
*/