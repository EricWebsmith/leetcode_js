/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr (haystack, needle) {
    if(haystack===''){
        return 0;
    }

    return haystack.indexOf(needle);
}

/*
Runtime: 64 ms, faster than 93.84% of JavaScript online submissions for Implement strStr().
Memory Usage: 42.1 MB, less than 90.42% of JavaScript online submissions for Implement strStr().
*/