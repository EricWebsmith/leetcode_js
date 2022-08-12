
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode');


/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {

    const cache = new Map();

    const validPart = (part) => {
        if (cache.has(part)) {
            return cache[part];
        }

        const result = part.match(/^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/)?true:false;
        cache[part] = result;
        return result;
    }

    let ans = [[]];
    for (let i = 0; i < 3; i++) {
        const newAns = [];
        for (const iAns of ans) {
            const previousLength = iAns.reduce((a, c) => a + c.length, 0);
            for (let l = 1; l <= 3; l++) {
                const newPart = s.substring(previousLength, previousLength+l);
                if(!validPart(newPart)) {
                    continue;
                }
                const iNewAns = [...iAns];
                iNewAns.push(newPart);
                newAns.push(iNewAns);
            }
        }
        ans = newAns;
    }

    const finalAns = [];
    for (const iAns of ans) {
        const previousLength = iAns.reduce((a, c) => a + c.length, 0);
        const lastPart = s.substring(previousLength);
        if (validPart(lastPart)) {
            finalAns.push(`${iAns[0]}.${iAns[1]}.${iAns[2]}.${lastPart}`);
        }
    }

    return finalAns;
}


function test(s, expected) {

    const actual = restoreIpAddresses(s);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('93. Restore IP Addresses', () => {
    it('93. 1', () => { test("25525511135", ["255.255.11.135", "255.255.111.35"]) });
    it('93. 2', () => { test("0000", ["0.0.0.0"]) });
    it('93. 3', () => { test("101023", ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"]) });

});
