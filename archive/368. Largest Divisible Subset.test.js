
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode');


/**
 * Step 1 Build Graph
 * Step 2 DFS Graph recursively
 * @param {number[]} nums
 * @return {number[]}
 */
function largestDivisibleSubset(nums) {
    const n = nums.length;

    nums.sort((a, b)=>a-b);
    const edges = new Map();
    edges.set(0, []);
    const visited = new Set();
    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {
            if (nums[j] % nums[i] === 0) {
                visited.add(nums[j]);
                // heads
                if (!visited.has(nums[i]) && !edges.get(0).includes(nums[i])) {
                    edges.get(0).push(nums[i]);
                }
                if (!edges.has(nums[i])) {
                    edges.set(nums[i], []);
                }
                edges.get(nums[i]).push(nums[j]);
            }
        }
    }

    const cache = new Map();

    /**
     * 
     * @param {number} index 
     * @returns {number[]}
     */
    const dfs = (index) => {
        if (!edges.has(index)) {
            return [index];
        }

        if (cache.has(index)) {
            return cache.get(index);
        }

        let maxRest = [];
        for (const next of edges.get(index)) {
            const rest = dfs(next);
            if (rest.length > maxRest.length) {
                maxRest = rest;
            }
        }

        const result = [index, ...maxRest];
        cache.set(index, result);
        return result;
    }

    const maxSubset = dfs(0);
    maxSubset.shift();

    if (maxSubset.length === 0) {
        return [nums[0]];
    }

    return maxSubset;
}


function test(nums, expected) {

    const actual = largestDivisibleSubset(nums);
    expect(actual).to.be.eql(expected);
}

describe('368. Largest Divisible Subset', () => {
    it('368. 1', () => { test([1, 2, 3], [1, 2]) });
    it('368. 2', () => { test([1, 2, 4, 8], [1, 2, 4, 8]) });
    it('368. 3', () => { test([1], [1]) });
    it('368. 4', () => { test([3, 4, 16, 8], [4, 8, 16]) });

});


/*
Runtime: 125 ms, faster than 73.33% of JavaScript online submissions for Largest Divisible Subset.
Memory Usage: 48.7 MB, less than 20.00% of JavaScript online submissions for Largest Divisible Subset.
*/