/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let sIndex = 0;
    let ans = 0;
    for (let i = 0; i < g.length; i++) {
        while (sIndex < s.length && s[sIndex] < g[i]) {
            sIndex++;
        }

        if (sIndex < s.length) {
            ans++;
            sIndex++;
        } else {
            break;
        }
    }

    return ans;
};

console.log(findContentChildren([1, 2, 3], [3]));

/*
Runtime: 116 ms, faster than 62.23% of JavaScript online submissions for Assign Cookies.
Memory Usage: 45 MB, less than 6.50% of JavaScript online submissions for Assign Cookies.
*/