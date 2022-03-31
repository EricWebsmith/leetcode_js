const { expect } = require("chai");

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
function validTree (n, edges) {
    if (edges.length+1 !== n) {
        return false;
    }

    if (n===1) { return true; }
    const edgeMap = new Map();
    for (let i = 0;i<n;i++) {
        edgeMap[i] = new Set();
    }

    for(const edge of edges){
        edgeMap[edge[0]].add(edge[1]);
        edgeMap[edge[1]].add(edge[0]);
    }

    const visited = new Set();
    let hasLoop = false;

    /**
     * 
     * @param {number} node1 
     * @param {number} node2 
     */
    function dfs(node) {
        if (hasLoop === true) {
            return;
        }

        if (visited.has(node)) {
            hasLoop = true;
            return;
        }
        visited.add(node);

        const nextNodes = edgeMap[node];
        for (const nextNode of nextNodes) {
            edgeMap[nextNode].delete(node);
            dfs(nextNode);
        }
    }

    const firstNode = edges[0][0];
    dfs(firstNode);

    return !hasLoop;
}

/**
 * 
 * @param {number} n 
 * @param {number[][]} edges 
 * @param {number} expected 
 */
function test(n, edges, expected) {
    const actual = validTree (n, edges);
    expect(actual).to.be.eql(expected);
}

describe('Graph Valid Tree', () => {
    it('1', () => {test(5, [[0,1],[0,2],[0,3],[1,4]], true)});
    it('2', () => {test(5, [[0,1],[1,2],[2,3],[1,3],[1,4]], false)});
    it('3', () => {test(5, [[0,1],[2,3]], false)});
    it('4', () => {test(4, [[2,3],[1,2],[1,3]], false)});
});

/*
Runtime: 76 ms, faster than 88.50% of JavaScript online submissions for Graph Valid Tree.
Memory Usage: 44.1 MB, less than 95.88% of JavaScript online submissions for Graph Valid Tree.
*/