
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number} n
 */
var TicTacToe = function (n) {
    this.n = n;
    this.matrix = [];
    for (let i = 0; i < n; i++) {
        const row = new Array(n).fill('');
        this.matrix.push(row);
    }
    this.playSigns = [0, 'X', 'O'];
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
    this.matrix[row][col] = this.playSigns[player];

    let win = false;
    for (let r = 0; r < this.n; r++) {
        win = true;
        for (let c = 0; c < this.n; c++) {
            if (this.matrix[r][c] !== this.playSigns[player]) {
                win = false;
                break;
            }
        }

        if (win) {
            return player;
        }
    }

    for (let c = 0; c < this.n; c++) {
        win = true;
        for (let r = 0; r < this.n; r++) {
            if (this.matrix[r][c] !== this.playSigns[player]) {
                win = false;
                break;
            }
        }

        if (win) {
            return player;
        }
    }

    win = true;
    for (let i = 0; i < this.n; i++) {
        if (this.matrix[i][i] !== this.playSigns[player]) {
            win = false;
            break;
        }
    }
    if (win) {
        return player;
    }

    win = true;
    for (let i = 0; i < this.n; i++) {
        if (this.matrix[i][this.n - i - 1] !== this.playSigns[player]) {
            win = false;
            break;
        }
    }
    if (win) {
        return player;
    }

    return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */


function test(actions, params, expected) {
    const obj = new TicTacToe(...params[0]);
    for (let i = 1; i < actions.length; i++) {
        switch (actions[i]) {
            case 'move':
                expect(obj.move(...params[i])).to.be.eql(expected[i]);
                break;
        }
    }
}

describe('348. Design Tic-Tac-Toe', () => {
    it('348. 1', () => { test(["TicTacToe", "move", "move", "move", "move", "move", "move", "move"], [[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]], [null, 0, 0, 0, 0, 0, 0, 1]) });

});


/*
Runtime: 119 ms, faster than 88.65% of JavaScript online submissions for Design Tic-Tac-Toe.
Memory Usage: 49 MB, less than 58.16% of JavaScript online submissions for Design Tic-Tac-Toe.
*/