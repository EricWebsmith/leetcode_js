const { expect } = require("chai");
const _ = require('lodash');

function isPalindrome(s, start, end) {
    let left = start;
    let right = end;
    while (left < right) {
        if (s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome (s) {
    const n = s.length;
    let left = 0;    
    let right = n - 1;
    while(left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
            continue;
        }
        return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
    }

    return true;
}

function test(s, expected) {
    const actual = validPalindrome (s);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('680. Valid Palindrome II', () => {
    it('1', () => {test("aba", true)});
    it('2', () => {test("abca", true)});
    it('3', () => {test("abc", false)});
    it('4', () => {test("ebcbbececabbacecbbcbe", true)});
});

/*
Runtime: 72 ms, faster than 96.06% of JavaScript online submissions for Valid Palindrome II.
Memory Usage: 48.6 MB, less than 31.33% of JavaScript online submissions for Valid Palindrome II.
*/