/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const n = s.length;

    for (let i = 1; i <= n / 2; i++) {
        if (n % i !== 0) {
            continue;
        }

        for (let j = i; j < n; j++) {
            if (s[j] !== s[j % i]) {
                break;
            }
            if (j === n - 1) {
                return true;
            }
        }
    }

    return false;
};

function test(s, expected){
    const actual = repeatedSubstringPattern(s);
    const result = expected === actual;
    console.log(result, actual);
}

test("abab", true);
test("aba", false);
test("abcabcabcabc", true);
test("bb", true);
test("ccc", true);
test("abaababaab", true);

/*
Runtime: 91 ms, faster than 75.00% of JavaScript online submissions for Repeated Substring Pattern.
Memory Usage: 44.4 MB, less than 61.34% of JavaScript online submissions for Repeated Substring Pattern.
*/