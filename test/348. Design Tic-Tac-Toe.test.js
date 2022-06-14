
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

/**
 * 
 * @param {string[]} actions 
 * @param {Array} params 
 * @param {Array} expected 
 */
function test(actions, params, expected) {
    const obj = new TicTacToe();
    for (let i=1;i<actions.length;i++) {
        switch(actions[i]) {
            case 'move':
                expect(obj.move(...params[i])).to.be.eql(expected[i]);
                break;

        }
    }
}

describe('348. Design Tic-Tac-Toe', () => {

    it('348. 1', () => {test(["TicTacToe", "move", "move", "move", "move", "move", "move", "move"], [[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]], [null, 0, 0, 0, 0, 0, 0, 1])});    
});

