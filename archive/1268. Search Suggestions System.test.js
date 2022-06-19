
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 function suggestedProducts(products, searchWord) {
    products.sort();
    let map = {};
    
    products.forEach(p=>{
        let current = map;
        for(let i=0; i<p.length; i++) {
            if(!current[p.charAt(i)]){
                current[p.charAt(i)] = {};
            }
            current = current[p.charAt(i)];
            if(!current['']) {
                current[''] = [];
            }
            current[''].push(p)
        }
    });
    let result = Array(searchWord.length).fill([]);
    let current = map;
    for(let i=0; i<searchWord.length; i++) {
        if(current[searchWord.charAt(i)]) {
            result[i] = current[searchWord.charAt(i)][''].slice(0, 3);
            current = current[searchWord.charAt(i)]
        } else
            break
        
    }
    return result
}


function test(...args) {
    const expected = args.pop();
    const actual = suggestedProducts (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1268. Search Suggestions System', () => {

    it('1268. 1', () => {test(["mobile","mouse","moneypot","monitor","mousepad"],  "mouse", [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
])});
    it('1268. 2', () => {test(["havana"],  "havana", [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]])});
    it('1268. 3', () => {test(["bags","baggage","banner","box","cloths"],  "bags", [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]])});    
});

/*
Runtime: 125 ms, faster than 92.93% of JavaScript online submissions for Search Suggestions System.
Memory Usage: 55 MB, less than 41.34% of JavaScript online submissions for Search Suggestions System.
*/