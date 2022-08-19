
const { expect } = require("chai");
const _ = require('lodash');


/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const n = s.length;
    const map = {};

    let maxLength = 0;
    let left = 0;
    for (let right = 0; right < n; right++) {
        const c = s[right];
        if (map.hasOwnProperty(c) && map[c] >= left) {
            maxLength = Math.max(maxLength, right - left);
            left = map[c] + 1;
        }
        map[c] = right;
    }

    maxLength = Math.max(maxLength, s.length - left);

    return maxLength;
}


function test(s, expected) {

    const actual = lengthOfLongestSubstring(s);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('3. Longest Substring Without Repeating Characters', () => {
    it('3. 1', () => { test("abcabcbb", 3) });
    it('3. 2', () => { test("bbbbb", 1) });
    it('3. 3', () => { test("pwwkew", 3) });
});

/*
Runtime: 129 ms, faster than 69.00% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 48.1 MB, less than 53.53% of JavaScript online submissions for Longest Substring Without Repeating Characters.
*/