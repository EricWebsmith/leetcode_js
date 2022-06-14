
const { expect } = require("chai");

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function longestCommonSubsequence(word1, word2) {
    const n1 = word1.length;
    const n2 = word2.length;
    let previousDp = null;

    for (let i=0;i<=n1;i++) {
        const dp = new Array(n2+1).fill(0);
        for(let j=0;j<=n2;j++) {
            if(i===0 || j===0) {
                continue;
            }

            if(word1[i-1] === word2[j-1]) {
                dp[j] = previousDp[j-1]+1;
            } 
            else{
                dp[j] = Math.max(previousDp[j], dp[j-1]);
            }
        }
        previousDp = dp;
    }
    return previousDp[n2];
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
    const lcs = longestCommonSubsequence(word1, word2);
    return word1.length + word2.length - lcs * 2;
};

function test(...args) {
    const expected = args.pop();
    const actual = minDistance (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('583. Delete Operation for Two Strings', () => {

    it('583. 1', () => {test("sea",  "eat",  2)});
    it('583. 2', () => {test("leetcode",  "etco",  4)});    
});

/*
Runtime: 87 ms, faster than 97.44% of JavaScript online submissions for Delete Operation for Two Strings.
Memory Usage: 47.3 MB, less than 93.16% of JavaScript online submissions for Delete Operation for Two Strings.
*/