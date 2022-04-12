const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements(nums) {
    const n = nums.length;
    const stack = [];
    // this will firstly restore indices.
    const ans = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        let last = stack[stack.length - 1];
        while (nums[i] > nums[last]) {
            ans[last] = i;
            stack.pop();
            last = stack[stack.length - 1];
        }
        stack.push(i);
    }

    for (let i = 0; i < n; i++) {
        if (ans[i] !== -1) {
            continue;
        }

        let temp = 0;
        while(temp<i){
            if(nums[temp]>nums[i]) {
                ans[i] = temp;
                break;
            }

            if(ans[temp]===-1) {
                temp++;
                
            } else {
                temp = ans[temp];
            }
        }
    }

    //translate indices to values
    for(let i=0;i<n;i++){
        if(ans[i]===-1){
            continue;
        }
        ans[i] = nums[ans[i]];
    }

    return ans;
}

function test(nums, expected) {
    const actual = nextGreaterElements(nums);
    const result = actual.every((value, index) => value === expected[index])
    if (!result) {
        console.log(result, expected, actual);
    }
    expect(result).to.be.true;
}

describe('503. Next Greater Element II', () => {
    it('503. 1', () => { test([1, 2, 1], [2, -1, 2]) });
    it('503. 2', () => { test([1, 2, 3, 4, 3], [2, 3, 4, -1, 4]) });
    it('503. 3', () => { test([1, 3, 2, 4], [3, 4, 4, -1]) });
    it('503. 4', () => { test([4, 3, 2, 1], [-1, 4, 4, 4]) });
});


/*
Runtime: 88 ms, faster than 98.20% of JavaScript online submissions for Next Greater Element II.
Memory Usage: 47.8 MB, less than 72.49% of JavaScript online submissions for Next Greater Element II.
*/