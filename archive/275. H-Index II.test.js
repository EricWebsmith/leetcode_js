
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} citations
 * @return {number}
 */
function hIndex(citations) {
    const n = citations.length;

    const validate = (h) => {
        for (let i = n - 1; i >= n - h; i--) {
            if (citations[i] < h) {
                return false;
            }
        }

        return true;
    }

    let l = 0;
    let r = n + 1;
    while (l < r) {
        const mid = (l + r) >>> 1;
        if (validate(mid)) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return l - 1;
}


function test(citations, expected) {

    const actual = hIndex(citations);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('275. H-Index II', () => {
    it('275. 1', () => { test([0, 1, 3, 5, 6], 3) });
    it('275. 2', () => { test([1, 2, 100], 2) });

});

/*
Runtime: 62 ms, faster than 90.00% of JavaScript online submissions for H-Index II.
Memory Usage: 43.8 MB, less than 80.00% of JavaScript online submissions for H-Index II.
*/