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
       const mid = left + Math.ceil((right - left) / 2);
       if (condition(mid)) {
           left = mid;
       } else {
           right = mid - 1;
       }
   }
   return left;
}

/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
function maxDistance (position, m) {
    const n = position.length;
    position.sort((a,b)=>a-b);
    function condition(dis) {
        let ans = 1;
        let previousPosition = position[0];
        for (let i=0;i<n;i++) {
            if (position[i]-previousPosition>=dis){
                ans+=1
                previousPosition = position[i]
            }
        }
        return ans >= m;
    }

    return binarySearchSmallest(1, position[n-1]-position[0], condition);
}

function test(...args) {
    const expected = args.pop();
    const actual = maxDistance (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1552. Magnetic Force Between Two Balls', () => {
    it('1552. 1', () => {test([1,2,3,4,7], 3, 3)});
    it('1552. 2', () => {test([5,4,3,2,1,1000000000], 2, 999999999)});
    //it('1552. 3', () => {test()});
});


/*
Runtime: 265 ms, faster than 66.67% of JavaScript online submissions for Magnetic Force Between Two Balls.
Memory Usage: 53.4 MB, less than 69.44% of JavaScript online submissions for Magnetic Force Between Two Balls.
*/