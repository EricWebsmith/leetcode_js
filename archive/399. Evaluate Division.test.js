const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function calcEquation(equations, values, queries) {
    const graph = {};
    for (let i = 0; i < equations.length; i++) {
        if (!graph[equations[i][0]]) {
            graph[equations[i][0]] = {};
        }
        if (!graph[equations[i][1]]) {
            graph[equations[i][1]] = {};
        }
        graph[equations[i][0]][equations[i][1]] = values[i];
        graph[equations[i][1]][equations[i][0]] = 1/values[i];
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {Set} visited 
     * @returns 
     */
    function dfs(x, y, visited) {
        if(!graph.hasOwnProperty(x) || !graph.hasOwnProperty(y)){
            return -1;
        }

        if(graph[x].hasOwnProperty(y)){
            return graph[x][y];
        }
            
        for(const key of Object.keys(graph[x])) {
            if(visited.has(key)) {
                continue;
            }
            visited.add(key);
            const temp = dfs(key, y, visited);
            if (temp === -1) {
                continue;
            }
            return graph[x][key] * temp;
        }
        return -1;
    }

    const ans = [];
    for(const [x, y] of queries) {
        ans.push(dfs(x, y, new Set()));
    }

    return ans;
}

function test(expected, ...args) {
    const actual = calcEquation(...args);
    if (actual.toString() !== expected.toString()) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('399. Evaluate Division', () => {
    it('399. 1', () => { test([6.00000, 0.50000, -1.00000, 1.00000, -1.00000], [["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]) });
    it('399. 2', () => { test([3.75000, 0.40000, 5.00000, 0.20000], [["a", "b"], ["b", "c"], ["bc", "cd"]], [1.5, 2.5, 5.0], [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]]) });
    it('399. 3', () => { test([0.50000, 2.00000, -1.00000, -1.00000], [["a", "b"]], [0.5], [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]]) });
    it('399. 4', () => { test([0.50000], [["a", "b"]], [0.5], [["a", "b"]]) });
});
