
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


class TrieNode {
    constructor() {
        this.children = new Map();
        this.index = -1;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * 
     * @param {string} word 
     * @param {number} index 
     */
    insert(word, index) {
        let current = this.root;
        for (const c of word) {
            if (!current.children.has(c)) {
                current.children.set(c, new TrieNode());
            }
            current = current.children.get(c);
            current.index = index;
        }
    }

    /**@param {string} prefix */
    find(prefix) {
        let current = this.root;
        for (const c of prefix) {
            if (!current.children.has(c)) {
                return -1;
            }
            current = current.children.get(c);
        }
        return current.index;
    }
}



class WordFilter {
    /**
    * @param {string[]} words
    */
    constructor(words) {
        this.trie_ = new Trie();
        for (let i = 0; i < words.length; i++) {
            for (let j=0;j<=words[i].length;j++) {
                let newWord = words[i].substring(words[i].length-j) + '_' + words[i];
                this.trie_.insert(newWord, i);
            }
        }
    }

    /** 
     * @param {string} prefix 
     * @param {string} suffix
     * @return {number}
     */
    f(prefix, suffix) {
        const key = suffix + '_' + prefix;
        return this.trie_.find(key);
    };
};


/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */


function test(actions, params, expected) {
    const obj = new WordFilter(...params[0]);
    for (let i = 1; i < actions.length; i++) {
        switch (actions[i]) {

            case 'f':
                expect(obj.f(...params[i])).to.be.eql(expected[i]);
                break;

        }
    }
}

describe('745. Prefix and Suffix Search', () => {
    it('745. 1', () => { test(["WordFilter", "f"], [[["apple"]], ["a", "e"]], [null, 0]) });
    it('745. 2', () => { test(["WordFilter", "f", 'f'], [[["leetcode", "look", "lee", "code"]], ["l", "e"], ['l', 'k']], [null, 2, 1]) });
});


/*
Runtime: 683 ms, faster than 79.31% of JavaScript online submissions for Prefix and Suffix Search.
Memory Usage: 77.4 MB, less than 58.62% of JavaScript online submissions for Prefix and Suffix Search.
*/
