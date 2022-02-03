/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length;
    let lowestPrice = prices[0];
    let profit = 0;
    for(let i = 0;i<n; i++ ){
        profit = Math.max(profit, prices[i] - lowestPrice);
        lowestPrice = Math.min(lowestPrice, prices[i]);
    }

    return profit;
};

/**
 * @param {number[]} prices
 * @param {number} expected
 */
function test(prices, expected) {
    const actual = maxProfit(prices);
    console.log(expected === actual, actual);
}

test([7, 1, 5, 3, 6, 4], 5);
test([7, 6, 4, 3, 1], 0)