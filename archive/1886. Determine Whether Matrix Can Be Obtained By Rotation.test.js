const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')



/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
function findRotation(mat, target) {
    const n = mat.length;

    function _0(r,c) {
        return [r, c];
    }

    function _90(r,c) {
        return [c, n-1-r];
    }

    function _180(r,c) {
        return [n-1-r, n-1-c];
    }

    function _270(r,c) {
        return [n-1-c, r];
    }

    /**
     * 
     * @param {number[][]} mat 
     * @returns {number[][]}
     */
    function rotate(coordinateFunc) {
        const ans = [];
        for (let r = 0; r < n; r++) {
            ans[r] = new Array(n).fill(0);
        }

        let same = true;
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                const [r2, c2] = coordinateFunc(r, c);
                if (mat[r2][c2]!==target[r][c]) {
                    same = false;
                    break;
                }
            }
        }

        return same;
    }

    if (rotate(_0)) {return true;}
    if (rotate(_90)) {return true;}
    if (rotate(_180)) {return true;}
    if (rotate(_270)) {return true;}
    return false;
}

function test(mat, target, expected) {
    const actual = findRotation(mat, target);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1886. Determine Whether Matrix Can Be Obtained By Rotation', () => {
    it('1', () => { test([[0, 1], [1, 0]], [[1, 0], [0, 1]], true) });
    it('2', () => { test([[0, 1], [1, 1]], [[1, 0], [0, 1]], false) });
    it('3', () => { test([[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1, 1], [0, 1, 0], [0, 0, 0]], true) });
    it('4', () => { test([[0,0],[1,0]], [[1,0],[0,0]], true) });
    it('5', () => { test([[0,0,0],[0,0,1],[0,0,1]], [[0,0,0],[0,0,1],[0,0,1]], true) });
});


/*
Runtime: 60 ms, faster than 97.87% of JavaScript online submissions for Determine Whether Matrix Can Be Obtained By Rotation.
Memory Usage: 44.8 MB, less than 7.45% of JavaScript online submissions for Determine Whether Matrix Can Be Obtained By Rotation.
*/