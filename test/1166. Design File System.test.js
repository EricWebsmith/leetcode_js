
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


var FileSystem = function() {
    
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
    
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
    
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */

/**
 * 
 * @param {string[]} actions 
 * @param {Array} params 
 * @param {Array} expected 
 */
function test(actions, params, expected) {
    const obj = new FileSystem();
    for (let i=1;i<actions.length;i++) {
        switch(actions[i]) {
            case 'createPath':
                expect(obj.createPath(...params[i])).to.be.eql(expected[i]);
                break;
            case 'get':
                expect(obj.get(...params[i])).to.be.eql(expected[i]);
                break;

        }
    }
}

describe('1166. Design File System', () => {

    it('1166. 1', () => {test(["FileSystem","createPath","get"], [[],["/a",1],["/a"]], [null,true,1])});
    it('1166. 2', () => {test(["FileSystem","createPath","createPath","get","createPath","get"], [[],["/leet",1],["/leet/code",2],["/leet/code"],["/c/d",1],["/c"]], [null,true,true,2,false,-1])});    
});

