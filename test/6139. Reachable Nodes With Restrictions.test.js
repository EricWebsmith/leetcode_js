
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
function reachableNodes(n, edges, restricted) {
    const map = [];
    for (let i=0;i<n;i++) {
        map.push([]);
    }

    for (const edge of edges) {
        map[edge[0]].push(edge[1]);
        map[edge[1]].push(edge[0]);
    }

    const visited = new Array(n).fill(0);
    for (const r of restricted) {
        visited[r] = 1;
    }

    let reached = 0;
    function dfs(i) {
        if (visited[i]===1) {
            return;
        }

        visited[i] = 1;
        reached++;
        const nextArray = map[i];
        for (const j of nextArray) {
            dfs(j);
        }


    }

    dfs(0);

    return reached;
}


function test(n, edges, restricted, expected) {
    
    const actual = reachableNodes(n, edges, restricted);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6139. Reachable Nodes With Restrictions', () => {
    it('6139. 1', () => {test( 7, [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], [4,5],  4)});
    it('6139. 2', () => {test( 7, [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]], [4,2,1],  3)});
   
});
