const { expect } = require('chai');

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
    // if endword not in wordlist
    let found = false;
    for (const word of wordList) {
        if (word === endWord) {
            found = true;
            break;
        }
    }
    if (!found) { return 0; }

    wordList.push(beginWord);
    const n = wordList.length;
    const m = beginWord.length;
    const groupWordMap = new Map();
    const wordGroupMap = new Map();
    for (const word of wordList) {
        const groups = [];
        for(let i=0;i<m;i++){
            const groupName = word.substring(0,i) + '*' + word.substring(i+1,m);
            const group = groupWordMap.get(groupName)??[];
            group.push(word);
            groupWordMap.set(groupName, group);
            groups.push(group);
        }
        wordGroupMap.set(word, groups);
    }
    
    let ans = 1;
    let current = new Set([beginWord]);
    const visited = new Set(current);
    while(current.size>0){
        const newCurrent = new Set();
        for(const word of current){
            const groups = wordGroupMap.get(word);
            for(const group of groups){
                for(const neighbor of group){
                    if(neighbor === endWord){
                        return ans+1;
                    }
    
                    if(visited.has(neighbor)){
                        continue;
                    }
    
                    newCurrent.add(neighbor);
    
                    visited.add(neighbor);
                }
            }
        }
        current = newCurrent;
        ans ++;
    }

    return 0;
};

describe('127. Word Ladder', ()=>{

    const testCases = [
        ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"], 5],
        ["hit", "lot", ["hot", "dot", "dog", "lot", "log", "hit", "abc", "cog"], 3],
        ["hit", "cog", ["hot", "dot", "dog", "lot"], 0],
        ["hit", "hat", ["hot", "dot", "dog", "lot", "log", "hit", "abc", "hat"], 2],
        ["hot", "dog", ["hot", "dog"], 0],
        ["lost", "miss", ["most","mist","miss","lost","fist","fish"], 40]
    ];

    for(let i = 0; i < testCases.length;i++){
        it(`test case ${i}`, ()=>{
            const expected = testCases[i].pop();
            const actual = ladderLength.apply(null, testCases[i]);
            expect(actual).eqls(expected);
            //assert.equal(actual, expected);
        });
    }
});

/*
Runtime: 167 ms, faster than 94.14% of JavaScript online submissions for Word Ladder.
Memory Usage: 61.2 MB, less than 15.18% of JavaScript online submissions for Word Ladder.
*/