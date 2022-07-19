
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * 
 * @param {*} array 
 * @returns {number[]}
 */
function getRankings(array) {
    return array
        .map((v, i) => [v, i])
        .sort((a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0];
            }
            return a[1] - b[1];
        })
        .map((a, i) => [...a, i + 1])
        .sort((a, b) => a[1] - b[1])
        .map(a => a[2]);
}

/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
function smallestTrimmedNumbers(nums, queries) {
    const n = nums;
    const numberLength = nums[0].length;
    const answers = [];

    for (const query of queries) {
        const [k, trim] = query;
        const newNums = nums.map((num, i) => [num.substring(numberLength - trim), i]);
        newNums.sort((a, b) => {
            if (a[0] !== b[0]) {
                return a[0] > b[0] ? 1 : -1;
            }
            return a[1] - b[1];
        })
        answers.push(newNums[k - 1][1]);
    }
    return answers;
}

function test(...args) {
    const expected = args.pop();
    const actual = smallestTrimmedNumbers(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6121. Query Kth Smallest Trimmed Number', () => {

    it('6121. 1', () => { test(["102", "473", "251", "814"], [[1, 1], [2, 3], [4, 2], [1, 2]], [2, 2, 1, 0]) });
    it('6121. 2', () => { test(["24", "37", "96", "04"], [[2, 1], [2, 2]], [3, 0]) });
    it('6121. 3', () => { test(["24", "37", "96", "24"], [[2, 1]], [3]) });
    it('6121. 4', () => { test(["24", "37", "96", "24"], [[1, 1]], [0]) });
    it('6121. 5', () => {
        test(
            ["22222222222222222222222222222222222222222222222225",
                "22222222222222222222222222222222222222222222222221",
                "22222222222222222222222222222222222222222222222223",
                "22222222222222222222222222222222222222222222222228",
                "22222222222222222222222222222222222222222222222226"],
            [[1, 40], [3, 40], [2, 40], [5, 40], [4, 40]], [1, 0, 2, 3, 4]
        )
    });
});

