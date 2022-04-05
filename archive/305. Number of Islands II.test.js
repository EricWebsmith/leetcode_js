const { expect } = require("chai");
const { map } = require("lodash");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
function numIslands2(m, n, positions) {
    const nPositions = positions.length;
    const unionFind = new Map();

    function find(order) {
        if (!unionFind.has(order)) {
            unionFind.set(order, order);
            return order;
        }

        const p = unionFind.get(order);
        if (unionFind.get(p) === p) {
            return p;
        }

        return find(p);
    }

    const ans = [];

    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    let nIslands = 0;
    for (const position of positions) {
        const order = position[0] * n + position[1];
        //console.log(order);
        if (unionFind.has(order)) {
            ans.push(nIslands);
            continue;
        }
        unionFind.set(order, order);

        const connectedIslands = new Set();
        for (const direction of directions) {
            const r = position[0] + direction[0];
            const c = position[1] + direction[1];
            if (r < 0 || r >= m || c < 0 || c >= n) {
                continue;
            }

            const neigbourOrder = r * n + c;
            if (unionFind.has(neigbourOrder)) {
                const p = find(neigbourOrder);
                connectedIslands.add(p);
            }
        }

        if (connectedIslands.size === 0) {
            nIslands++;
            ans.push(nIslands);
            continue;
        }

        let prioritizedIsland = m * n;
        for (const island of connectedIslands) {
            if (island < prioritizedIsland) {
                prioritizedIsland = island;
            }
        }
        if (prioritizedIsland > order) {
            prioritizedIsland = order;
        }

        // union
        for (const island of connectedIslands) {
            unionFind.set(island, prioritizedIsland);
        }
        unionFind.set(order, prioritizedIsland);

        nIslands = nIslands - connectedIslands.size + 1;
        ans.push(nIslands);
    }
    return ans;
}

function test(m, n, positions, expected) {
    const actual = numIslands2(m, n, positions);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('305. Number of Islands II', () => {
    it('305. 1', () => { test(3, 3, [[0, 0], [0, 1], [1, 2], [2, 1]], [1, 1, 2, 3]) });
    it('305. 2', () => { test(1, 1, [[0, 0]], [1]) });
    it('305. 3', () => { test(3, 3, [[0, 0], [0, 1], [1, 2], [1, 2]], [1, 1, 2, 2]) });
    it('305. 4', () => { test(3, 3, [[0, 0], [0, 1], [1, 2], [2, 1], [1, 0], [0, 0], [2, 2], [1, 2], [1, 1], [0, 1]], [1, 1, 2, 3, 3, 3, 2, 2, 1, 1]); });
    it('305. 5', () => { test(3, 6, [[2, 2], [2, 1], [1, 3], [0, 4]], [1, 1, 2, 3]); });
});


/*
Runtime: 116 ms, faster than 98.84% of JavaScript online submissions for Number of Islands II.
Memory Usage: 51.8 MB, less than 82.56% of JavaScript online submissions for Number of Islands II.
*/