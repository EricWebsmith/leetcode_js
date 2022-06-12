const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * See 1760
 * @param {number} left 
 * @param {number} right 
 * @param {function} condition
 * @returns 
 */
 function binarySearchSmallest(left, right, condition) {
    // add 1 to right if condition may not meet.
   while (left < right) {
       const mid = left + Math.floor((right - left) / 2);
       if (condition(mid)) {
        right = mid;
    } else {
        left = mid + 1;
    }

   }
   return left;
}

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
function successfulPairs (spells, potions, success) {
    potions.sort((a, b) => a - b);
    
    const ans = [];
    for (const spell of spells) {
        const newSuccess = Math.ceil(success / spell);
        const condition = (candidate) => potions[candidate]>=newSuccess;
        // if (!condition(potions[0])) {
        //     ans.push(0);
        //     continue;
        // }
        const subAns = potions.length - binarySearchSmallest(0 , potions.length, condition);
        ans.push(subAns);
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = successfulPairs (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6096. Successful Pairs of Spells and Potions', () => {
    it('6096. 1', () => {test([5,1,3], [1,2,3,4,5], 7, [4,0,3])});
    it('6096. 2', () => {test([3,1,2], [8,5,8], 16, [2,0,2])});
    //it('6096. 3', () => {test()});
});
