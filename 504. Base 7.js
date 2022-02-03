/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    if (num > -7 && num < 7) { return num.toString(); }
    let ans = '';
    const sign = num >= 0;
    if (num < 0) { num = -num; }
    while (num > 0) {
        ans = (num % 7).toString() + ans;
        num = Math.floor(num / 7);

    }

    if (!sign) { ans = '-' + ans; }
    return ans;
};

/*
Runtime: 64 ms, faster than 99.41% of JavaScript online submissions for Base 7.
Memory Usage: 42.5 MB, less than 5.33% of JavaScript online submissions for Base 7.
*/