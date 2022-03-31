/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    const n = s.length;
    if(n===0) {return 0;}
    let words = 1;
    for (let i = 1; i < n; i++) {
        if(s[i]===' ' && s[i-1]!==' '){
            words++;
        }
    }

    if(s[n-1]===' '){
        words--;
    }

    return words;
};

/*
Runtime: 56 ms, faster than 99.28% of JavaScript online submissions for Number of Segments in a String.
Memory Usage: 42.1 MB, less than 5.76% of JavaScript online submissions for Number of Segments in a String.
*/