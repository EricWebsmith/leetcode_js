const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

class Codec {
    constructor() {
    }

    /** 
     * @param {Node|null} nt
     * @return {TreeNode|null}
     */
    // Encodes an n-ary tree to a binary tree.
    encode(nt) {
        if (nt === null) { return null;}
        const bt = new TreeNode(nt.val);
        if (nt.children.length > 0){
            bt.left = this.encode(nt.children[0]);
        }
        let current = bt.left;
        for (let i=1;i<nt.children.length;i++) {
            current.right = this.encode(nt.children[i]);
            current = current.right;
        }
        return bt;
    }

    /** 
     * @param {TreeNode|null} bt 
     * @return {Node|null}
     */
    // Decodes your binary tree to an n-ary tree.
    decode(bt) {
        if (bt === null) { return null;}
        const nt = new Node(bt.val, []);
        if(bt.left) {
            nt.children.push(this.decode(bt.left));
            let current = bt.left;
            current = current.right;
            while(current) {
                //nt.children.push(new Node(current.val));
                nt.children.push(this.decode(current));
                current = current.right;
            }
        }
        return nt;
    }
}

/**
 * 
 * @param {Node} expected 
 */
function test(expected) {
    const codec = new Codec();
    const nt = array2Node(expected);
    //console.log(JSON.stringify(nt, null, 2));
    const bt = codec.encode(nt);
    //console.log(JSON.stringify(bt, null, 2));
    const actualNaryTree = codec.decode(bt);
    const actual = node2Array(actualNaryTree);
    if (actual.toString() !== expected.toString()) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('431. Encode N-ary Tree to Binary Tree', () => {
    it('431. 1', () => { test( [1,null,3,2,4,null,5,6]) });
    it('431. 2', () => { test([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]) });
    it('431. 3', () => { test([]) });
});


/*
Runtime: 82 ms, faster than 100.00% of JavaScript online submissions for Encode N-ary Tree to Binary Tree.
Memory Usage: 46.2 MB, less than 94.12% of JavaScript online submissions for Encode N-ary Tree to Binary Tree.
*/