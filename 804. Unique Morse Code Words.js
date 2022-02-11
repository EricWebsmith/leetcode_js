/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const n = words.length;
    if(n===1) {return 1;}
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const map = new Map();
    for(let i=0;i<26;i++){
        map.set(letters[i], morseCodes[i]);
    }
    const set = new Set();
    for(const word of words){
        let morseTrans = '';
        for(const c of word){
            morseTrans += map.get(c);
        }
        console.log(morseTrans);
        set.add(morseTrans);
    }

    return set.size;
};

function test(words, expected){
    const actual = uniqueMorseRepresentations(words);
    const result = actual === expected;
    console.log(result, expected, actual);
}

test(["gin","zen","gig","msg"], 2);