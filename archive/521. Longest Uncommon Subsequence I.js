/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
    if(a === b){
        return -1;
    }

    if(a.length!==b.length){
        return Math.max(a.length, b.length);
    }

    return a.length;
};

/*
Runtime: 60 ms, faster than 96.51% of JavaScript online submissions for Longest Uncommon Subsequence I.
Memory Usage: 41.9 MB, less than 8.14% of JavaScript online submissions for Longest Uncommon Subsequence I.
*/