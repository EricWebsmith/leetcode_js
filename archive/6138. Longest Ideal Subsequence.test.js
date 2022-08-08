
const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function longestIdealString(s, k) {
    const n = s.length;
    const ASCII_LOWERCASE_A = 97;
    const codes = [];
    for (let i = 0; i < n; i++) {
        codes.push(s.charCodeAt(i) - ASCII_LOWERCASE_A);
    }

    const dp = new Array(n).fill(1);

    const previousMap = {};
    previousMap[codes[0]] = 0;
    for (let i = 1; i < n; i++) {
        const code = codes[i];
        for (let letterCode = 0; letterCode < 26; letterCode++) {
            if (Math.abs(letterCode - code) <= k && previousMap.hasOwnProperty(letterCode)) {
                const previousIndex = previousMap[letterCode];
                dp[i] = Math.max(dp[i], dp[previousIndex] + 1);
            }
        }
        previousMap[codes[i]] = i;
    }

    return _.max(dp);
}


function test(s, k, expected) {

    const actual = longestIdealString(s, k);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6138. Longest Ideal Subsequence', () => {
    it('6138. 1', () => { test("acfgbd", 2, 4) });
    it('6138. 2', () => { test("abcd", 3, 4) });

});
