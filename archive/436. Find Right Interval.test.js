
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
function findRightInterval(intervals) {
    const n = intervals.length;
    const endMap = new Map();
    const starts = [];
    for (let i = 0; i < n; i++) {
        endMap.set(intervals[i][0], i);
        starts.push(intervals[i][0]);
    }
    starts.sort((a, b) => a - b);

    const ans = [];
    for (let i = 0; i < n; i++) {
        const end = intervals[i][1];
        let l = 0;
        let r = n;
        while (l < r) {
            const mid = (l + r) >> 1;
            if (starts[mid] < end) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        if(l===n) {
            ans.push(-1);
        } else {
            ans.push(endMap.get(starts[l]));
        }
        
    }
    return ans;
}


function test(intervals, expected) {

    const actual = findRightInterval(intervals);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('436. Find Right Interval', () => {
    it('436. 1', () => { test([[1, 2]], [-1]) });
    it('436. 2', () => { test([[3, 4], [2, 3], [1, 2]], [-1, 0, 1]) });
    it('436. 3', () => { test([[1, 4], [2, 3], [3, 4]], [-1, 2, -1]) });

});


/*
Runtime: 157 ms, faster than 80.41% of JavaScript online submissions for Find Right Interval.
Memory Usage: 50.7 MB, less than 62.89% of JavaScript online submissions for Find Right Interval.
*/