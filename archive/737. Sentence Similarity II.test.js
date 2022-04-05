const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')



/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
function areSentencesSimilarTwo(sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) {return false;}
    const map = new Map();

    /**
     * 
     * @param {string} word
     */
    function find(word) {
        if (!map.has(word)) {
            map.set(word, word);
            return word;
        }

        const p = map.get(word);
        if (map.get(p) === p) {
            return p;
        }
        return find(p);
    }

    /**
     * 
     * @param {string} c 
     * @param {string} d
     */
    function union(c, d) {
        const pc = find(c);
        const pd = find(d);
        const p = pc < pd ? pc : pd;
        map.set(pc, p);
        map.set(pd, p);
    }

    for (const similarPair of similarPairs) {
        union(similarPair[0], similarPair[1]);
    }

    // // flatten
    for (const [key, value] of map.entries()) {
        map.set(key, find(key));
    }

    for (let i = 0; i < sentence1.length; i++) {
        const p1 = find(sentence1[i]);
        const p2 = find(sentence2[i]);
        if (p1 !== p2) {
            return false;
        }
    }

    return true;
}

function test(sentence1, sentence2, similarPairs, expected) {
    const actual = areSentencesSimilarTwo(sentence1, sentence2, similarPairs);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('737. Sentence Similarity II', () => {
    it('737. 1', () => { test(["great", "acting", "skills"], ["fine", "drama", "talent"], [["great", "good"], ["fine", "good"], ["drama", "acting"], ["skills", "talent"]], true) });
    it('737. 2', () => { test(["I", "love", "leetcode"], ["I", "love", "onepiece"], [["manga", "onepiece"], ["platform", "anime"], ["leetcode", "platform"], ["anime", "manga"]], true) });
    it('737. 3', () => { test(["I", "love", "leetcode"], ["I", "love", "onepiece"], [["manga", "hunterXhunter"], ["platform", "anime"], ["leetcode", "platform"], ["anime", "manga"]], false) });
    it('737. 4', ()=>{test(["an","extraordinary","meal"], ["one","good","dinner"],
    [["great","good"],["extraordinary","good"],["well","good"],["wonderful","good"],["excellent","good"],["fine","good"],["nice","good"],["any","one"],["some","one"],["unique","one"],["the","one"],["an","one"],["single","one"],["a","one"],["truck","car"],["wagon","car"],["automobile","car"],["auto","car"],["vehicle","car"],["entertain","have"],["drink","have"],["eat","have"],["take","have"],["fruits","meal"],["brunch","meal"],["breakfast","meal"],["food","meal"],["dinner","meal"],["super","meal"],["lunch","meal"],["possess","own"],["keep","own"],["have","own"],["extremely","very"],["actually","very"],["really","very"],["super","very"]],
    true
    )})
});


/*
Runtime: 104 ms, faster than 100.00% of JavaScript online submissions for Sentence Similarity II.
Memory Usage: 52.7 MB, less than 53.06% of JavaScript online submissions for Sentence Similarity II.
*/