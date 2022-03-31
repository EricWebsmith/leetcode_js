/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const n = s.length;
    let ans = -1;
    let c = '\0';
    const map = new Map();
    for(let i=0;i<n;i++){
        const count = map.get(s[i]);
        if(count){
            map.set(s[i], count+1)
        }else{
            map.set(s[i], 1);
        }
    }

    for(let i=0;i<n;i++){
        if(map.get(s[i])===1){
            return i;
        }
    }

    return -1;
};

/**
 * @param {string} s 
 * @param {boolean} expected 
 */
function test(s, expected){
    const actual = firstUniqChar(s);
    console.log(actual===expected, actual);
}

test("leetcode", 0);
test("loveleetcode", 2);
test("aabb", -1);


/*
Runtime: 104 ms, faster than 88.00% of JavaScript online submissions for First Unique Character in a String.
Memory Usage: 45.7 MB, less than 21.10% of JavaScript online submissions for First Unique Character in a String.
*/