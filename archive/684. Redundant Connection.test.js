const _ = require('lodash');
const { expect } = require("chai");

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
function findRedundantConnection(edges) {
    const n = edges.length;
    const unionFind = [];
    for (let i = 0; i < n; i++) {
        unionFind.push(i);
    }

    function find(i) {
        if (unionFind[i] === i) {
            return i;
        }
    
        unionFind[i] = find(unionFind[i]);
        return unionFind[i];
    }

    for (const edge of edges) {
        const p1 = find(edge[0]);
        const p2 = find(edge[1]);
        if (p1 === p2){
            return edge;
        }

        const min = _.min([p1, p2]);
        unionFind[p1] = min;
        unionFind[p2] = min;
    }

    return [0, 0];
}

function test(edges, expected) {
    const actual = findRedundantConnection(edges);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('684. Redundant Connection', () => {
    it('1', () => { test([[1,2],[1,3],[2,3]], [2,3]) });
    it('2', () => { test([[1,2],[2,3],[3,4],[1,4],[1,5]], [1,4]) });
    //it('3', () => { test() });
});

/*
Runtime: 76 ms, faster than 83.27% of JavaScript online submissions for Redundant Connection.
Memory Usage: 45.2 MB, less than 54.48% of JavaScript online submissions for Redundant Connection.
*/