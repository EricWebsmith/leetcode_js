const { expect } = require("chai");

/**
 * @param {string} s
 * @return {boolean}
 */
function getIsPalindrome(s) {
    const half = Math.floor(s.length / 2);
    for (let i=0;i<half;i++) {
        if(s[i]!==s[s.length-i-1]) {
            return false;
        }
    }

    return true;
}

/**
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub (s) {
    const isPalindrome = getIsPalindrome(s);
    return isPalindrome?1:2;
}

function test(...args) {
    const expected = args.pop();
    const actual = removePalindromeSub (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1332. Remove Palindromic Subsequences', () => {
    it('1', () => {test("ababa", 1)});
    it('2', () => {test("abb", 2)});
    it('3', () => {test("baabb", 2)});
    it('4', () => {test("abbaaaab", 2)});
});


/*
Runtime: 59 ms, faster than 91.30% of JavaScript online submissions for Remove Palindromic Subsequences.
Memory Usage: 41.9 MB, less than 69.57% of JavaScript online submissions for Remove Palindromic Subsequences.
*/