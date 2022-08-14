
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {string} pattern
 * @return {string}
 */
function smallestNumber(pattern) {
    const n = pattern.length;
    const stack = [];
    let ans = '';
    for(let i=1;i<=n+1;i++) {
        stack.push(i);
        if(i===n+1 || pattern[i-1] === 'I') {
            while(stack.length>0) {
                ans += `${stack.pop()}`;
            }
        }
    }

    return ans;
}


function test(pattern, expected) {
    
    const actual = smallestNumber(pattern);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6150. Construct Smallest Number From DI String', () => {
    it('6150. 1', () => {test( "IIIDIDDD",  "123549876")});
    it('6150. 2', () => {test( "DDD",  "4321")});
   
});
