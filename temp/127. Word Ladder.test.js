
const { Queue } = require("@datastructures-js/queue");
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

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let diff = 0;
            for (let k = 0; k < wordLength; k++) {
                if (wordList[i][k] !== wordList[j][k]) {
                    diff++;
                }
            }
            if (diff <= 1) {
                edges[i].push(j);
                edges[j].push(i);
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
                // if (dp[next] === MaxWordLength){
                    
                // }
                newCurrent.push(next);
            }

        }
        current = newCurrent;
        length++;
    }

    console.log(dp);
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
