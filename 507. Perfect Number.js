/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num == 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i) { continue; }
        sum += num / i + i;
    }

    return sum === num;
};

/**
 * 
 * @param {number} num 
 * @param {boolean} expected 
 */
function test(num, expected) {
    const actual = checkPerfectNumber(num);
    console.log(actual === expected, expected, actual);
}

function search() {
    console.log('perfect numbers:');
    for (let i = 1; i < 100000; i++) {
        if (checkPerfectNumber(i)) {
            console.log(i);
        }
    }
}

console.time("timer");
search();
console.timeEnd("timer");

function checkPerfectNumberBySearch(num) {
    const condidates = [6, 28, 496, 8128,33550336];
    return condidates.includes(num);
}

// test(28, true);
// test(7, false);
// test(6, true);
// test(8, false);
// test(9, false);
// test(10, false);
// test(11, false);
// test(12, false);
// test(100000000, false);

/*
checkPerfectNumber
Runtime: 99 ms, faster than 76.70% of JavaScript online submissions for Perfect Number.
Memory Usage: 42.3 MB, less than 5.02% of JavaScript online submissions for Perfect Number.
*/

/*
checkPerfectNumberBySearch
Runtime: 60 ms, faster than 99.64% of JavaScript online submissions for Perfect Number.
Memory Usage: 42.2 MB, less than 5.02% of JavaScript online submissions for Perfect Number.
*/