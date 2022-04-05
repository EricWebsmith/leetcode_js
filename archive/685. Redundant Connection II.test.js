const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
function findRedundantDirectedConnection(edges) {
    const parentMap = new Map();
    function hasCycle(v) {
        p = parentMap.get(v);
        while (p) {
            if (p === v) {
                return true;
            }
            p = parentMap.get(p);
        }

        return false;
    }

    let ans1 = [];
    let ans2 = [];
    let hasDuplicateParent = false;
    for (const edge of edges) {
        const [parent, child] = edge;
        if (parentMap.has(child)) {
            ans1 = [parentMap.get(child), child]
            ans2 = [parent, child];
            hasDuplicateParent = true;
            edge[0] = edge[1] = -1;
        } else {
            parentMap.set(child, parent);
        }
    }

    parentMap.clear();
    for (const [parent, child] of edges) {
        if (parent < 0) { continue; }
        parentMap.set(child, parent);
        if (hasCycle(child)) {
            return hasDuplicateParent ? ans1 : [parent, child];
        }
    }

    return ans2;
}

function test(edges, expected) {
    const actual = findRedundantDirectedConnection(edges);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('685. Redundant Connection II', () => {
    it('685. 1', () => { test([[1, 2], [1, 3], [2, 3]], [2, 3]) });
    it('685. 2', () => { test([[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]], [4, 1]) });
    it('685. 3', () => { test([[2, 1], [3, 1], [4, 2], [1, 4]], [2, 1]) });
});


/*
Runtime: 80 ms, faster than 78.95% of JavaScript online submissions for Redundant Connection II.
Memory Usage: 45.2 MB, less than 68.42% of JavaScript online submissions for Redundant Connection II.
*/