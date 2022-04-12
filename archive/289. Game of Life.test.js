const { expect } = require("chai");

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function gameOfLife(board) {
    const m = board.length;
    const n = board[0].length;
    const ans = new Array(m);
    for (let i=0;i<m;i++) {
        ans[i] = new Array(n).fill(0);
    }
    //.map((item) => new Array(n));
    const directions = [[-1, -1], [-1, 0], [0, -1], [-1, 1], [1, -1], [1, 0], [0, 1], [1, 1]]


    /**
     * 
     * @param {number} r 
     * @param {number} c 
     * @returns {number}
     */
    function getLiveNeighers(r, c) {
        const nLiveNeighers = directions.reduce((acc, direction) => {
            if (r + direction[0] < 0 || r + direction[0] === m || c + direction[1] < 0 || c + direction[1] === n) {
                return acc;
            }
            return acc + board[r + direction[0]][c + direction[1]];
        }, 0)
        if (board[r][c] === 1) {
            return (nLiveNeighers === 2 || nLiveNeighers === 3)? 1: 0;
        } else {
            return nLiveNeighers === 3 ? 1: 0;
        }
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            ans[r][c] = getLiveNeighers(r, c);
        }
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            board[r][c] = ans[r][c];
        }
    }

    return board;
}

function test(expected, args) {
    const actual = gameOfLife(args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('289. Game of Life', () => {
    it('289. 1', () => { test([[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]], [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]) });
    it('289. 2', () => { test([[1, 1], [1, 1]], [[1, 1], [1, 0]]) });
    //it('3', () => {test()});
});


/*
Runtime: 60 ms, faster than 95.59% of JavaScript online submissions for Game of Life.
Memory Usage: 42.3 MB, less than 63.88% of JavaScript online submissions for Game of Life.
*/