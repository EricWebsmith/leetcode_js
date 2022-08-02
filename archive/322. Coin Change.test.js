
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    const MAX_AMOUNT = 100000;
    const dp = new Array(amount + 1).fill(MAX_AMOUNT);
    dp[0] = 0;
    for (let i = 0; i < amount; i++) {
        if (dp[i] === MAX_AMOUNT) {
            continue;
        }

        for (const coin of coins) {
            if (i + coin <= amount) {
                dp[i + coin] = Math.min(dp[i] + 1, dp[i + coin]);
            }
        }
    }

    return dp[amount] === MAX_AMOUNT ? -1 : dp[amount];
}


function test(coins, amount, expected) {

    const actual = coinChange(coins, amount);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('322. Coin Change', () => {
    it('322. 1', () => { test([1, 2, 5], 11, 3) });
    it('322. 2', () => { test([2], 3, -1) });
    it('322. 3', () => { test([1], 0, 0) });

});

/*
Runtime: 124 ms, faster than 88.10% of JavaScript online submissions for Coin Change.
Memory Usage: 45.5 MB, less than 97.42% of JavaScript online submissions for Coin Change.
*/