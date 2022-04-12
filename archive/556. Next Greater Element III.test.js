const { expect } = require("chai");

/**
 * @param {number} n
 * @return {number}
 */
function nextGreaterElement(n) {
    const arr = [];
    while (n > 0) {
        const t = n % 10;
        arr.unshift(t);
        n = Math.floor(n / 10);
    }

    //next permutation
    let pivot = -1;
    for (let i = arr.length; i > 0; i--) {
        if (arr[i - 1] < arr[i]) {
            pivot = i - 1;
            break;
        }
    }

    if (pivot === -1) {
        return -1;
    }

    let replace = pivot + 1;
    for (let i = pivot + 1; i < arr.length; i++) {
        if (arr[i] < arr[replace] && arr[i] > arr[pivot]) {
            replace = i;
        }
    }

    [arr[pivot], arr[replace]] = [arr[replace], arr[pivot]];

    const tail = arr.slice(pivot + 1);
    tail.sort((a, b) => a - b);
    for (let i = pivot + 1; i < arr.length; i++) {
        arr[i] = tail[i - pivot - 1];
    }

    let ans = 0;
    let mask = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        ans += arr[i] * mask;
        mask *= 10;
    }
    if (ans > 2147483647) {
        return -1;
    }

    return ans;
}

function test(n, expected) {
    const actual = nextGreaterElement(n);
    expect(actual).to.be.eql(expected);
}

describe('556. Next Greater Element III', () => {
    it('556. 1', () => { test(12, 21); });
    it('556. 2', () => { test(21, -1); });
    it('556. 3', () => { test(210, -1); });
    it('556. 4', () => { test(201, 210); });
    it('556. 5', () => { test(120, 201); });
    it('556. 6', () => { test(124653, 125346); });
    it('556. 6', () => { test(2147483486, -1); });

});


/*
Runtime: 56 ms, faster than 97.95% of JavaScript online submissions for Next Greater Element III.
Memory Usage: 42.3 MB, less than 41.10% of JavaScript online submissions for Next Greater Element III.
*/