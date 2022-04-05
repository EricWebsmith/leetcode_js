const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures (temperatures) {
    const n = temperatures.length;
    const stack = [0];
    const ans = Array(n).fill(0);
    for (let i = 1; i<n;i++) {
        while (stack.length>0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            const previous = stack.pop();
            ans[previous] = i - previous;
        }
        stack.push(i);
    }
    return ans;
}

function test(temperatures, expected) {
    const actual = dailyTemperatures (temperatures);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('739. Daily Temperatures', () => {
    it('1', () => {test([73,74,75,71,69,72,76,73],[1,1,4,2,1,1,0,0])});
    it('2', () => {test([30,40,50,60],[1,1,1,0])});
    it('3', () => {test([30,60,90],[1,1,0])});
    it('4', () => {test([10,5,20],[2,1,0])});
});


/*
Runtime: 216 ms, faster than 94.42% of JavaScript online submissions for Daily Temperatures.
Memory Usage: 65.4 MB, less than 39.17% of JavaScript online submissions for Daily Temperatures.
*/