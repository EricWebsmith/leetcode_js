
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


var WordDictionary = function() {
    
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/**
 * 
 * @param {string[]} actions 
 * @param {Array} params 
 * @param {Array} expected 
 */
function test(actions, params, expected) {
    const obj = new WordDictionary();
    for (let i=1;i<actions.length;i++) {
        switch(actions[i]) {
            case 'search':
                expect(obj.search(...params[i])).to.be.eql(expected[i]);
                break;
            case 'addWord':
                expect(obj.addWord(...params[i])).to.be.eql(expected[i]);
                break;

        }
    }
}

describe('211. Design Add and Search Words Data Structure', () => {

    it('211. 1', () => {test(["WordDictionary","addWord","addWord","addWord","search","search","search","search"], [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]], [null,null,null,null,false,true,true,true])});    
});

