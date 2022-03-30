/**
 * @param {number} n
 * @return {number}
 */
function countOrders (n) {
    let ans = 1;
    let modulo = 1000000007;
    for(let i=1;i<=n;i++) {
        ans *= i;
        ans %= modulo;
        ans *= (2*i-1);
        ans %= modulo;
    }
    return ans;
}

