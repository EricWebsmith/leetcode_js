
const { expect } = require("chai");

function bisectLeft(a, x, index, lo = 0, hi = a.length) {
    while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (a[mid][index] < x[index]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    let startInsertPos = bisectLeft(intervals, newInterval, 0);
    const endInsertPos = bisectLeft(intervals, newInterval, 1);

    if (startInsertPos > endInsertPos ) {
        return intervals;
    }

    if (endInsertPos < intervals.length && newInterval[1] >= intervals[endInsertPos][0]) {
        newInterval[1] = intervals[endInsertPos][1];
        intervals.splice(endInsertPos, 1);
    }

    intervals.splice(startInsertPos, endInsertPos-startInsertPos);


    if (intervals.length>0 && startInsertPos - 1 >= 0 && newInterval[0] <= intervals[startInsertPos - 1][1]) {
        newInterval[0] = intervals[startInsertPos-1][0];
        intervals.splice(startInsertPos-1, 1);
        startInsertPos--;
    }

    intervals.splice(startInsertPos, 0, newInterval);

    return intervals;
}


function test(intervals, newInterval, expected) {

    const actual = insert(intervals, newInterval);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('57. Insert Interval', () => {
    it('57. 1', () => { test([[1, 3], [6, 9]], [2, 5], [[1, 5], [6, 9]]) });
    it('57. 2', () => { test([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8], [[1, 2], [3, 10], [12, 16]]) });
    it('57. 3', () => { test([[1,5]], [2,3], [[1,5]]) });
    it('57. 3', () => { test([[0,5],[8,9]], [3,4], [[0,5],[8,9]]) });

});


/*
Runtime: 79 ms, faster than 87.81% of JavaScript online submissions for Insert Interval.
Memory Usage: 44.5 MB, less than 31.92% of JavaScript online submissions for Insert Interval.
*/