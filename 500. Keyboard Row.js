/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const map = new Map();
    for (const c of "qwertyuiop") {
        map.set(c, 0)
        map.set(c.toUpperCase(), 0);
    }

    for (const c of "asdfghjkl") {
        map.set(c,1);
        map.set(c.toUpperCase(),1);
    }

    for (const c of "zxcvbnm") {
        map.set(c,2);
        map.set(c.toUpperCase(),2);
    }

    const ans = [];
    wordsLoop: for (const word of words) {
        const row = map.get(word[0]);
        for (let i = 0; i < word.length; i++) {
            if (row !== map.get(word[i])) {
                continue wordsLoop;
            }
        }

        ans.push(word);
    }

    return ans;
};

/**
 * @param {string[]} words
 * @param {string[]} expected
 * @return {void}
 */
function test(words, expected) {
    const actual = findWords(words);
    const result = actual.every((value, index) => value === expected[index])
    console.log(result, expected, actual);
}

test(["Hello", "Alaska", "Dad", "Peace"], ["Alaska", "Dad"]);
test(["omk"], []);
test(["adsdf", "sfd"], ["adsdf", "sfd"]);
test(["adsdf", "a"], ["adsdf", "a"]);


/*
Runtime: 72 ms, faster than 78.93% of JavaScript online submissions for Keyboard Row.
Memory Usage: 41.6 MB, less than 6.69% of JavaScript online submissions for Keyboard Row.
*/
