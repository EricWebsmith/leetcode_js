/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    const map = new Map();
    const englishLetters = 'abcdefghijklmnopqrstuvwxyz';
    const reversedEnglishLetters = 'zyxwvutsrqponmlkjihgfedcba';
    for (let i = 0; i < 26; i++) {
        map.set(englishLetters[i], 0);
    }

    for (let i = 0; i < s.length; i++) {
        const key = s[i];
        const count = map.get(key);
        map.set(key, count + 1);
    }

    let ans = '';
    let hasLetters = true;
    while (hasLetters) {
        for (const key of englishLetters) {
            const count = map.get(key);
            if (count > 0) {
                ans += key;
                map.set(key, count - 1);
            }
        }

        hasLetters = false;
        for (const key of reversedEnglishLetters) {
            const count = map.get(key);
            if (count > 0) {
                ans += key;
                map.set(key, count - 1);
                hasLetters = true;
            }
        }
    }

    return ans;
};


function test(s, expected) {
    const actual = sortString(s);
    const result = actual === expected;
    console.log(result, expected, actual);
}

test("aaaabbbbcccc", "abccbaabccba");
test("rat", "art");

/*
Runtime: 80 ms, faster than 98.78% of JavaScript online submissions for Increasing Decreasing String.
Memory Usage: 46 MB, less than 18.29% of JavaScript online submissions for Increasing Decreasing String.
*/