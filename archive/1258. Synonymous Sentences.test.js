const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')


/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 */
function generateSentences(synonyms, text) {
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

    for (const synonym of synonyms) {
        union(synonym[0], synonym[1]);
    }

    // // flatten
    for (const [key, _] of map.entries()) {
        map.set(key, find(key));
    }

    // reserse map
    const reverseMap = new Map();
    for (const [key, value] of map.entries()) {
        if (!reverseMap.has(value)) {
            reverseMap.set(value, []);
        }

        reverseMap.get(value).push(key);
    }

    // sort
    for (const [key, value] of reverseMap.entries()){
        value.sort();
    }

    const textArr = text.split(' ');

    const q = [];
    q.push('');
    for (let i = 0; i < textArr.length; i++) {
        const word = textArr[i];
        if (map.has(word)) {
            const key = map.get(word);
            const list = reverseMap.get(key);
            const qCount = q.length;
            for (let qIndex = 0; qIndex < qCount; qIndex++) {
                const sentence = q.shift();
                for (const nextWord of list) {
                    const newSentence = sentence + nextWord + ' ';
                    q.push(newSentence);
                }
            }
        } else {
            const qCount = q.length;
            for (let qIndex = 0; qIndex < qCount; qIndex++) {
                q[qIndex] += word + ' ';
            }
        }
    }

    for (let i = 0; i < q.length; i++) {
        q[i] = q[i].replace(/ $/g, '');
    }

    return q;
}

function test(synonyms, text, expected) {
    const actual = generateSentences(synonyms, text);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('1258. Synonymous Sentences', () => {
    it('1258. 1', () => { test([["happy","joy"],["sad","sorrow"],["joy","cheerful"]], "I am happy today but was sad yesterday", ["I am cheerful today but was sad yesterday","I am cheerful today but was sorrow yesterday","I am happy today but was sad yesterday","I am happy today but was sorrow yesterday","I am joy today but was sad yesterday","I am joy today but was sorrow yesterday"]) });
    it('1258. 2', () => { test([["happy","joy"],["cheerful","glad"]], "I am happy today but was sad yesterday", ["I am happy today but was sad yesterday","I am joy today but was sad yesterday"]) });
    //it('3', () => { test() });
});

/*
Runtime: 60 ms, faster than 93.94% of JavaScript online submissions for Synonymous Sentences.
Memory Usage: 42.8 MB, less than 54.55% of JavaScript online submissions for Synonymous Sentences.
*/