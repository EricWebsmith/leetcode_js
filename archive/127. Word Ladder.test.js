const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
    const MaxWordLength = 10000;
    let beginWordIndex = wordList.indexOf(beginWord);
    if (beginWordIndex === -1) {
        wordList.unshift(beginWord);
        beginWordIndex = 0;
    }

    const endWordIndex = wordList.indexOf(endWord);
    if (endWordIndex === -1) { return 0; }

    const n = wordList.length;
    const wordLength = wordList[0].length;
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
            if (dp[index]!==MaxWordLength) {
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

    return dp[endWordIndex] === MaxWordLength ? 0 : dp[endWordIndex];
}


function test(beginWord, endWord, wordList, expected) {

    const actual = ladderLength(beginWord, endWord, wordList);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('127. Word Ladder', () => {
    it('127. 1', () => { test("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"], 5) });
    it('127. 2', () => { test("hit", "cog", ["hot", "dot", "dog", "lot", "log"], 0) });
    it('127. 3', () => { test("a", "c", ["a", "b", "c"], 2) });
    it('127. 4', () => { test("hot", "dog", ["hot", "dog", "dot"], 3) });

});


/*
Runtime: 150 ms, faster than 96.96% of JavaScript online submissions for Word Ladder.
Memory Usage: 62.2 MB, less than 34.27% of JavaScript online submissions for Word Ladder.
*/