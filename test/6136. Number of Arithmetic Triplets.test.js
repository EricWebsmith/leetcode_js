
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
function arithmeticTriplets(nums, diff) {

    const n = nums.length;
    const map = {};
    for (let i=0;i<n;i++) {
        map[nums[i]] = i;
    }

    let ans = 0;
    const visited = new Set();
    for (let i=0;i<n;i++) {
        if(visited.has(nums[i])) {
            continue;
        }

        let current = nums[i];
        let count = 1;
        while(map.hasOwnProperty(current+diff)) {
            current+=diff;
            count++;
            visited.add(current)
        }

        if (count>=3) {
            ans+=(count-2);
        }
    }

    return ans;
}


function test(nums, diff, expected) {
    
    const actual = arithmeticTriplets(nums, diff);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6136. Number of Arithmetic Triplets', () => {
    it('6136. 1', () => {test( [0,1,4,6,7,10], 3,  2)});
    it('6136. 2', () => {test( [4,5,6,7,8,9], 2,  2)});
   
});
