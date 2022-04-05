const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {string[]} equations
 * @return {boolean}
 */
function equationsPossible (equations) {
    const map = new Map();

    /**
     * 
     * @param {string} word
     */
    function find(word) {
        if (!map.has(word)) {
            map.set(word, word);
            return word;
        }

        const p = map.get(word);
        if (map.get(p) === p) {
            return p;
        }
        return find(p);
    }

    /**
     * 
     * @param {string} c 
     * @param {string} d
     */
    function union(c, d) {
        const pc = find(c);
        const pd = find(d);
        const p = pc < pd ? pc : pd;
        map.set(pc, p);
        map.set(pd, p);
    }

    for (const equation of equations) {
        if (equation[1] === '=') {
            union(equation[0], equation[3]);
        }
    }

    // // flatten
    for (const [key, value] of map.entries()) {
        map.set(key, find(key));
    }

    for (const equation of equations) {
        if (equation[1] === '!') {
            if (equation[0] === equation[3]) {
                return false;
            }

            if (!map.has(equation[0]) || !map.has(equation[3])) {
                continue;
            }
            const p1 = find(equation[0]);
            const p2 = find(equation[3]);

            if (p1 === p2) {
                return false;
            }
        }
    }

    return true;
}

function test(equations, expected) {
    const actual = equationsPossible(equations);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('990. Satisfiability of Equality Equations', () => {
    it('990. 1', () => {test(["a==b","b!=a"], false)});
    it('990. 2', () => {test(["b==a","a==b"], true)});
    it('990. 3', () => {test(["c==c","b==d","x!=z"], true)});
    it('990. 4', () => {test(["a!=a"], false)});
});


/*
Runtime: 72 ms, faster than 96.52% of JavaScript online submissions for Satisfiability of Equality Equations.
Memory Usage: 46 MB, less than 64.35% of JavaScript online submissions for Satisfiability of Equality Equations.
*/