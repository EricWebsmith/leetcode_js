
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
function taskSchedulerII(tasks, space) {
    const n = tasks.length;
    const map = new Map();
    let idle = 0;
    for (let i = 0; i < n; i++) {

        if (map.has(tasks[i])) {
            const previous = map.get(tasks[i]);
            const distance = i + idle - previous - 1;
            if (distance < space) {
                idle += space - distance;
            }
        }
        map.set(tasks[i], i + idle);
    }

    return n + idle;
}


function test(tasks, space, expected) {

    const actual = taskSchedulerII(tasks, space);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6174. Task Scheduler II', () => {
    it('6174. 1', () => { test([1, 2, 1, 2, 3, 1], 3, 9) });
    it('6174. 2', () => { test([5, 8, 8, 5], 2, 6) });
    it('6174. 3', () => { test([4, 10, 10, 9, 10, 4, 10, 4], 8, 30) });
});
