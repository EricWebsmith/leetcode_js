
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
function probabilityOfHeads(prob, target) {
    const n = prob.length;
    const cache = [];
    for (let i = 0;i<=n;i++) {
        cache.push(new Array(target+1).fill(-1));
    }

    const solve = (index, currentTarget) => {
        if (cache[index][currentTarget] != -1) {
            return cache[index][currentTarget];
        }

        let p = 1;
        if(currentTarget === 0) {
            for (let i=index;i<n;i++) {
                p *= 1- prob[i];
            }
        } else if (index === n) {
            return 0;
        } else {
            if(currentTarget > 0) {
                p = prob[index] * solve(index+1, target-1);
            }
            p += (1-prob[index]) * solve(index+1, currentTarget);
        }
        cache[index][currentTarget] = p;
        return p;
    }

    return solve(0, target);
}

function test(...args) {
    const expected = args.pop();
    const actual = probabilityOfHeads (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1230. Toss Strange Coins', () => {

    it('1230. 1', () => {test([0.4],  1, 0.40000)});
    it('1230. 2', () => {test([0.5,0.5,0.5,0.5,0.5],  0, 0.03125)});    
    it('1230. 3', () => {test([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 99, 0)});    
    it('1230. 4', () => {test([0.2,0.3,0.4,0.5,0.6],  3, 0.03125)});  
});

