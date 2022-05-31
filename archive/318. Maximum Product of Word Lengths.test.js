const { expect } = require("chai");


/**
 * 
 * @param {Set<string>} s1 
 * @param {Set<string>} s2 
 * @returns 
 */
function haveCommonCharacters(s1, s2) {
    for (const c1 of s1) {
        if (s2.has(c1)) {
            return true;
        }
    }
    return false;
}

/**
 * @param {string[]} words
 * @return {number}
 */
function maxProduct (words) {
    let ans = 0;
    const characterSets = words.map((word) => new Set(word));

    for (let i = 0; i<words.length;i++) {
        for (let j = i+1; j<words.length;j++) {
            if (!haveCommonCharacters(characterSets[i], characterSets[j])) {
                ans = Math.max(ans, words[i].length * words[j].length);
            }
        }
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = maxProduct (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('318. Maximum Product of Word Lengths', () => {
    it('318. 1', () => {test(["abcw","baz","foo","bar","xtfn","abcdef"], 16)});
    it('318. 2', () => {test(["a","ab","abc","d","cd","bcd","abcd"], 4)});
    it('318. 3', () => {test(["a","aa","aaa","aaaa"], 0)});
});


/*
Runtime: 235 ms, faster than 74.63% of JavaScript online submissions for Maximum Product of Word Lengths.
Memory Usage: 49.9 MB, less than 38.81% of JavaScript online submissions for Maximum Product of Word Lengths.
*/