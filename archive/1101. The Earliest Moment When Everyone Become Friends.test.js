//1101. The Earliest Moment When Everyone Become Friends
const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')



/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
function earliestAcq(logs, n) {
    const unionFind = [];
    let connected2Zero = 1;
    
    function find(i) {
        const p = unionFind[i];
    
        if (p === i) {
            return i;
        }
    
        const newP = find(p);
        if(newP === 0 && unionFind[i] !== 0){
            connected2Zero++;
        }
        unionFind[i] = newP;
        return unionFind[i];
    }
    
    function union(i, j) {
        const pi = find(i);
        const pj = find(j);
        const p = Math.min(pi, pj);
        if (p === 0) {
            if (unionFind[pi] !== 0){
                connected2Zero++;
            } 
            if (unionFind[pj] !== 0){
                connected2Zero++;
            } 
        }
        unionFind[pi] = p;
        unionFind[pj] = p;
    }
    
    function sort2D(a, b) {
        return a[0] - b[0];
    }
    
    logs.sort(sort2D);
    for (let i = 0; i < n; i++) {
        unionFind.push(i);
    }

    for (const log of logs) {
        union(log[1], log[2]);
        for (let i = 0; i < n; i++) {
            find(i);
        }
        if (connected2Zero == n) {
            return log[0];
        }
    }
    return -1;
}

function test(logs, n, expected) {
    const actual = earliestAcq(logs, n);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('1101. The Earliest Moment When Everyone Become Friends', () => {
    it('1101. 1', () => { test([[20190101, 0, 1], [20190104, 3, 4], [20190107, 2, 3], [20190211, 1, 5], [20190224, 2, 4], [20190301, 0, 3], [20190312, 1, 2], [20190322, 4, 5]], 6, 20190301) });
    it('1101. 2', () => { test([[0, 2, 0], [1, 0, 1], [3, 0, 3], [4, 1, 2], [7, 3, 1]], 4, 3) });
    //it('1101. 3', () => { test() });
});


/*
Runtime: 68 ms, faster than 98.30% of JavaScript online submissions for The Earliest Moment When Everyone Become Friends.
Memory Usage: 45.8 MB, less than 28.23% of JavaScript online submissions for The Earliest Moment When Everyone Become Friends.
*/