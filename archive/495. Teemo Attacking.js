/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let ans = duration;
    for(let i = 1;i<timeSeries.length;i++){
        const diff = timeSeries[i] - timeSeries[i-1];
        if(diff<duration){
            ans += diff; 
        }
        else{
            ans += duration;
        }
    }

    return ans;
};

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @param {number} expected
 * @returns {void}
 */
function test(timeSeries, duration, expected){
    const actual = findPoisonedDuration(timeSeries, duration);
    const result = expected === actual;
    console.log(result, expected, actual);
}

test([1,4], 2, 4);
test([1,2], 2, 3);
test([1,2,3], 2, 4);
test([2,3,4], 10, 12);
test([2], 10, 10);


/*
Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Teemo Attacking.
Memory Usage: 45.9 MB, less than 6.99% of JavaScript online submissions for Teemo Attacking.
*/