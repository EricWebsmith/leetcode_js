/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s === ""){
        return true;
    }

    let sp = 0;
    let tp = 0;
    for(; tp< t.length; tp++){
     
        if(t[tp] === s[sp]){
            sp++;
        }

        if(sp === s.length){
            return true;
        }
    }

    return false;
};

console.log(isSubsequence("abc", "aabbcc"), true);
console.log(isSubsequence("ab", "ab"), true);
console.log(isSubsequence("ab", "bbaa"), true);
console.log(isSubsequence("abc", "cbaba"), false);
console.log(isSubsequence("abc", "ahbgdc"), true);
console.log(isSubsequence("axc", "ahbgdc"), false);
console.log(isSubsequence("", "aabbcc"), true);
console.log(isSubsequence("abc", ""), false);
console.log(isSubsequence("", ""), true);