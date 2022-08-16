
const { expect } = require("chai");
const _ = require('lodash');

/**
 * Check if t is predecesor of s
 * @param {string} s 
 * @param {string} t 
 */
function isPredecessorOf(s, t) {
    let sIndex = 0;
    let tIndex = 0;
    let diff = 0;
    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
            tIndex++;
        } else {
            tIndex++;
            diff++;
            if (diff === 2) {
                return false;
            }
        }
    }

    return true;
}

/**
 * @param {string[]} words
 * @return {number}
 */
function longestStrChain(words) {
    // for _.groupBy, the key is sorted.
    const groups = _.groupBy(words, w => w.length);

    const dp = {};
    for (const word of words) {
        dp[word] = 1;
    }

    let previous = [];
    for (const [groupKey, current] of Object.entries(groups)) {
        for (const p of previous) {
            for (const d of current) {
                if (isPredecessorOf(p, d)) {
                    dp[d] = Math.max(dp[d], dp[p] + 1);
                }
            }
        }
        previous = current;
    }

    return _.max(Object.values(dp));
}


function test(words, expected) {

    const actual = longestStrChain(words);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1048. Longest String Chain', () => {
    it('1048. 1', () => { test(["a", "b", "ba", "bca", "bda", "bdca"], 4) });
    it('1048. 2', () => { test(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"], 5) });
    it('1048. 3', () => { test(["abcd", "dbqca"], 1) });
    it('1048. 4', () => { test(["dbqca", "abcd"], 1) });
    it('1048. 5', () => { test(["a", "ab", "ac", "bd", "abc", "abd", "abdd"], 4) });

});


/*
Runtime: 122 ms, faster than 91.93% of JavaScript online submissions for Longest String Chain.
Memory Usage: 50.3 MB, less than 41.24% of JavaScript online submissions for Longest String Chain.
*/