/**
 * 
 * @param {Map} map1 
 * @param {Map} map2 
 */
function MapAreEqual(map1, map2) {
    for (const c of 'abcdefghijklmnopqrstuvwxyz') {
        if (map1.get(c) !== map2.get(c)) {
            return false;
        }
    }
    return true;
}

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const n = s.length;
    const k = p.length;
    const dictP = new Map();
    const dictS = new Map();
    const ans = [];
    for (const c of 'abcdefghijklmnopqrstuvwxyz') {
        dictP.set(c, 0);
        dictS.set(c, 0);
    }

    for (let i = 0; i < k; i++) {
        dictP.set(p[i], dictP.get(p[i]) + 1);
        dictS.set(s[i], dictS.get(s[i]) + 1)
    }

    if (MapAreEqual(dictP, dictS)) {
        ans.push(0);
    }

    for (let i = 1; i <= n - k; i++) {

        dictS.set(s[i - 1], dictS.get(s[i - 1]) - 1);
        dictS.set(s[i + k - 1], dictS.get(s[i + k - 1]) + 1);
        if (MapAreEqual(dictP, dictS)) {
            ans.push(i);
        }
    }

    return ans;

};

/**
 * 
 * @param {string} s 
 * @param {string} p 
 * @param {number[]} expected 
 */
function test(s, p, expected) {
    const actual = findAnagrams(s, p);
    let result = actual.length === expected.length;
    if (result) {
        for (let i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                result = false;
                break;
            }
        }
    }

    console.log(result, actual);
}

test("cbaebabacd", "abc", [0, 6]);
test("abab", "ab", [0, 1, 2]);
test("aaaa", "ab", []);
test("abcdabcd", "abcd", [0, 1, 2, 3, 4]);