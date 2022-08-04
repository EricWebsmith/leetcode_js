
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
function mirrorReflection(p, q) {
    
}


function test(p, q, expected) {
    
    const actual = mirrorReflection(p, q);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('858. Mirror Reflection', () => {
    it('858. 1', () => {test( 2, 1,  2)});
    it('858. 2', () => {test( 3, 1,  1)});
   
});
