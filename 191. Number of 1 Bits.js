/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 function hammingWeight (n) {
    let ans = 0;
    while(n > 0){
        ans += (n & 1);
        n = n / 2;
    }    
    return ans;
}


console.log(hammingWeight(7));

/*
Runtime: 77 ms, faster than 74.31% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 43.9 MB, less than 10.96% of JavaScript online submissions for Number of 1 Bits.
*/