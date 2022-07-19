
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

function getKey(num) {
    let ans = 0;
    while (num > 0) {
        ans += num % 10;
        num = Math.floor(num / 10);
    }

    return ans;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumSum(nums) {
    const pairMap = new Map();
    for (const num of nums) {
        const key = getKey(num);
        if (!pairMap.has(key)) {
            pairMap.set(key, { max1: num, max2: 0 })
        } else {
            const pair = pairMap.get(key);
            if (num > pair.max2) {
                pair.max2 = num;
            }

            if (pair.max1<pair.max2) {
                let temp = pair.max1;
                pair.max1 = pair.max2;
                pair.max2 = temp;
            }
        }
    }

    let ans = -1;
    for (const [_key, pair] of pairMap.entries()) {
        
        if (pair.max2 > 0) {
            ans = Math.max(ans, pair.max1 + pair.max2);
        }
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = maximumSum(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6164. Max Sum of a Pair With Equal Sum of Digits', () => {

    it('6164. 1', () => { test([18, 43, 36, 13, 7], 54) });
    it('6164. 2', () => { test([10, 12, 19, 14], -1) });
    it('6164. 3', () => { test([823703329, 480039933, 809171582, 932997750, 273044544, 169377999, 934873215, 233647188, 158618699, 202520394, 68072925, 125681501, 670651183, 230820178, 915758279, 752568096, 296064268, 151228344, 375377293, 209059107, 448933132, 818820630, 110175008, 806565076, 739731036, 489874660, 282855112, 47714602, 584068185, 891589173, 876914517, 580918354, 479971782, 449499425, 216865394, 854065554, 82508309, 382132812, 894006664, 305065615, 387620257, 816387629, 665212188, 126543967, 879206027, 904333398, 728770713, 658820347, 503837967, 638662017, 281639650, 133495536, 144456727, 538669949, 966915953, 593517802, 668414263, 928153417, 318735728, 629384449, 48746121, 151760257, 514192873, 148335554, 963367452, 464392190, 763425250, 281001523, 363726765, 207303869, 768796407, 317099854, 418615735, 353528229, 552853579, 536131170, 299553121, 321258134, 969494602, 974060371, 915287366], 1882674232) });
});

