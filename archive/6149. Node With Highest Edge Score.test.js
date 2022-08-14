
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} edges
 * @return {number}
 */
function edgeScore(edges) {
    const scores = {};
    for(let i=0;i<edges.length;i++) {
        scores[edges[i]] = (scores[edges[i]]??0) + i;
    }

    let maxScore = 0;
    let maxIndex = 0;
    for (const [sIndex, score] of Object.entries(scores)) {
        const index = parseInt(sIndex);
        if (score > maxScore) {
            maxIndex = index;
            maxScore = score;
        } else if (score === maxScore && index<maxIndex) {
            maxIndex = index;
        }


    }

    return maxIndex;
}


function test(edges, expected) {
    
    const actual = edgeScore(edges);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6149. Node With Highest Edge Score', () => {
    it('6149. 1', () => {test( [1,0,0,0,0,7,7,5],  7)});
    it('6149. 2', () => {test( [2,0,0,2],  0)});
   
});
