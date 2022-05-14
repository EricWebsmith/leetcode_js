const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
  } = require('@datastructures-js/priority-queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function networkDelayTime(times, n, k) {
    const graph = [];
    for (let i = 0; i < n; i++) {
        graph.push([]);
    }

    for (const time of times) {
        graph[time[0] - 1].push([time[1] - 1, time[2]]);
    }

    return dijkstra(graph, k-1);
}

/**
 * 
 * @param {Array[Array[number]]} graph 
 * @param {number} start 
 */
function dijkstra(graph, start) {
    const n = graph.length;
    const distances = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    distances[start] = 0;
    const q = new MinPriorityQueue( (x, y) => {
            if (!y) {return x;}
            if (x[0] != y[0]) return x[0] - y[0];
            return x[1] - y[1];
        });
    // const q = new MinPriorityQueue({
    //     compare: (x, y) => {
    //         if (x[0] != y[0]) return x[0] - y[0];
    //         return x[1] - y[1];
    //     }
    // });
    q.enqueue([start, 0]);
    while(q.size() > 0 ) {
        const [current, totalDistance] = q.dequeue();
        if (totalDistance > distances[current]) {continue;}
        for (const [next, stepDistance] of graph[current]) {
            if (stepDistance === -1) { continue; }
            const newTotalDistance = totalDistance+stepDistance;
            distances[next] = Math.min(distances[next], newTotalDistance)
            q.enqueue([next, newTotalDistance]);
        }
    }
    
    const maxDistance = Math.max(...distances);
    if (maxDistance === Number.MAX_SAFE_INTEGER)
    {
        return -1;
    }
    return maxDistance;
}

function test(...args) {
    const expected = args.pop();
    const actual = networkDelayTime(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('743. Network Delay Time', () => {
    it('743. 1', () => { test([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2, 2) });
    it('743. 2', () => { test([[1, 2, 1]], 2, 1, 1) });
    it('743. 3', () => { test([[1, 2, 1]], 2, 2, -1) });
    it('743. 4', () => { test([[1, 2, 1], [2, 3, 2], [1, 3, 2]], 3, 1, 2) });
    it('743. 5', () => { test([[2,4,10],[5,2,38],[3,4,33],[4,2,76],[3,2,64],[1,5,54],[1,4,98],[2,3,61],[2,1,0],[3,5,77],[5,1,34],[3,1,79],[5,3,2],[1,2,59],[4,3,46],[5,4,44],[2,5,89],[4,5,21],[1,3,86],[4,1,95]], 5, 1, 69) });
});
