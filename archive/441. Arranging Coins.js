/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    let sum = 0;

    for(let i=0;;i++)    {
        sum+=i;
        if(sum>n){
            return i-1;
        }
    }
};

/*
Runtime: 84 ms, faster than 99.26% of JavaScript online submissions for Arranging Coins.
Memory Usage: 44.4 MB, less than 11.30% of JavaScript online submissions for Arranging Coins.
*/

