/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    const n = s.length;
    const m = Math.floor(n / k);
    const remain = n % k;

    const ans = [];

    for (let i = 0; i < m; i++) {
        const item = s.substring(i * k, i * k + k);
        ans.push(item);
    }

    if (remain > 0) {
        let lastItem = s.substring(m * k, m * k + remain);
        for (let i = 0; i < k - remain; i++) {
            lastItem += fill;
        }
        ans.push(lastItem);
    }

    return ans;
};

const test1 = divideString("abcdefghi", 3, "x");
console.log(test1);

const test2 = divideString("abcdefghij", 3, "x");
console.log(test2);

/*
Runtime: 68 ms, faster than 98.80% of JavaScript online submissions for Divide a String Into Groups of Size k.
Memory Usage: 40.2 MB, less than 40.66% of JavaScript online submissions for Divide a String Into Groups of Size k.
*/