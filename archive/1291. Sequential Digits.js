/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
function sequentialDigits(low, high) {
    const candidates = [
        123456789,
        12345678,
        1234567,
        123456,
        12345,
        1234,
        123,
        12,
        1,
        23456789,
        2345678,
        234567,
        23456,
        2345,
        234,
        23,
        2,
        3456789,
        345678,
        34567,
        3456,
        345,
        34,
        3,
        456789,
        45678,
        4567,
        456,
        45,
        4,
        56789,
        5678,
        567,
        56,
        5,
        6789,
        678,
        67,
        6,
        789,
        78,
        7,
        89,
        8,
        9
    ];

    candidates.sort((a, b) => a - b);

    const ans = candidates.filter(c => c >= low && c <= high);
    return ans;
};

function test(low, high) {
    const ans = sequentialDigits(low, high);
    console.log(ans);
}

test(100, 300);
test(1000, 13000);



const a = [12, 234, 123, 23];
a.sort((a, b) => a - b);
console.log(a);