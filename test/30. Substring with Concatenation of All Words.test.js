
const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
    const includes = (bag1, bag2) => {
        for (const [key, value] of Object.entries(bag1)) {
            if (bag2[key]!==value) {
                return false;
            }
        }
    
        return true;
    }

    const step = words[0].length;
    const nWords = words.length;
    const windowLength = step * nWords;
    const targetBag = {};
    for (const word of words) {
        targetBag[word] = (targetBag[word] ?? 0) + 1;
    }

    const ans = [];
    for (let mod = 0; mod < step; mod++) {
        const currentBag = {};

        // first window
        for (let currentIndex = mod;currentIndex<windowLength+mod;currentIndex+=step) {
            const word = s.substring(currentIndex, currentIndex + step);
            currentBag[word] = (currentBag[word]??0) + 1;
        }

        // check first window
        if (includes(targetBag, currentBag)) {
            ans.push(mod);
        }

        // move forword, always remove the first word and add a new word
        for (let lastWordIndex = mod+windowLength;lastWordIndex<=s.length - step;lastWordIndex+=step) {
            // remove 
            const lostWord = s.substring(lastWordIndex - windowLength, lastWordIndex - windowLength +  step);
            currentBag[lostWord]--;
            // add new word to bag
            const lastWord = s.substring(lastWordIndex, lastWordIndex + step);
            currentBag[lastWord] = (currentBag[lastWord]??0) + 1;
    
            if (includes(targetBag, currentBag)) {
                ans.push(lastWordIndex - windowLength + step);
            }
        }
    }

    return ans;
}

function test(s, words, expected) {

    const actual = findSubstring(s, words);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.have.members(expected);
}

describe('30. Substring with Concatenation of All Words', () => {
    it('30. 1', () => { test("barfoothefoobarman", ["foo", "bar"], [0, 9]) });
    it('30. 2', () => { test("wordgoodgoodgoodbestword", ["word", "good", "best", "word"], []) });
    it('30. 3', () => { test("barfoofoobarthefoobarman", ["bar", "foo", "the"], [6, 9, 12]) });
    it('30. 4', () => { test("aabbccddeaabbccdd", ["ab", "bc", "cd"], [1, 10]) });

});

/*
Runtime: 474 ms, faster than 62.72% of JavaScript online submissions for Substring with Concatenation of All Words.
Memory Usage: 55.1 MB, less than 23.90% of JavaScript online submissions for Substring with Concatenation of All Words.
*/