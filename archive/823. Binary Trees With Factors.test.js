
const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {number[]} arr
 * @return {number}
 */
function numFactoredBinaryTrees(arr) {
    const mod = 1e9+7;
    arr.sort((a, b) => a - b);
    const n = arr.length;
    const map = new Map;
    for (let i = 0; i < n; i++) {
        map.set(arr[i], i);
    }

    // dp[c] = num of trees rooted at c.
    const dp = new Array(n).fill(1);

    for (let i=1;i<n;i++) {
        for (let j=0;j<i;j++) {
            if(arr[i] % arr[j] === 0 && map.has(arr[i]/arr[j])) {
                const k = map.get(arr[i]/arr[j]);
                dp[i] += dp[j] * dp[k] % mod;
            }
        }
    }

    return _.sum(dp) % mod;
}


function test(arr, expected) {

    const actual = numFactoredBinaryTrees(arr);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('823. Binary Trees With Factors', () => {
    it('823. 1', () => { test([2, 4], 3) });
    it('823. 2', () => { test([2, 4, 5, 10], 7) });
    it('823. 3', () => { test([2], 1) });
    it('823. 4', () => { test([18, 3, 6, 2], 12) });
    it('823. 5', () => { test([45, 42, 2, 18, 23, 1170, 12, 41, 40, 9, 47, 24, 33, 28, 10, 32, 29, 17, 46, 11, 759, 37, 6, 26, 21, 49, 31, 14, 19, 8, 13, 7, 27, 22, 3, 36, 34, 38, 39, 30, 43, 15, 4, 16, 35, 25, 20, 44, 5, 48], 777) });
    it('823. 6', () => { test([2, 3, 4, 6, 12], 18) });

});


/*
Runtime: 109 ms, faster than 88.89% of JavaScript online submissions for Binary Trees With Factors.
Memory Usage: 44.7 MB, less than 77.78% of JavaScript online submissions for Binary Trees With Factors.
*/