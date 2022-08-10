
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
function minDays(bloomDay, m, k) {
    const n = bloomDay.length;
    if (n < m * k) { return -1; }
    let l = _.min(bloomDay);
    let r = _.max(bloomDay);

    const canHaveBouquets = (nthday) => {
        let currentLength = 0;
        let bouquets = 0;
        for (let i = 0; i < n; i++) {
            const isFlower = bloomDay[i]<=nthday;
            if (isFlower) {
                currentLength++;
            } else {
                currentLength = 0;
            }

            if (currentLength >= k) {
                currentLength = currentLength - k;
                bouquets++;
                if (bouquets === m) {
                    return true;
                }
            }
        }

        return false;
    }

    while (l < r) {
        const mid = (l + r) >>> 1;
        if (!canHaveBouquets(mid)) {
            l = mid+1;
        } else {
            r = mid;
        }
    }

    return l;
}


function test(bloomDay, m, k, expected) {

    const actual = minDays(bloomDay, m, k);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1482. Minimum Number of Days to Make m Bouquets', () => {
    it('1482. 1', () => { test([1, 10, 3, 10, 2], 3, 1, 3) });
    it('1482. 2', () => { test([1, 10, 3, 10, 2], 3, 2, -1) });
    it('1482. 3', () => { test([7, 7, 7, 7, 12, 7, 7], 2, 3, 12) });

});
