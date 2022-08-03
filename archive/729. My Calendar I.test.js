
const { expect } = require("chai");


function bisectLeft(a, x, lo = 0, hi = a.length) {
    while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (a[mid][0] < x) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

class MyCalendar {
    constructor() {
        this.intervals = [];
    }

    /** 
     * @param {number} start 
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        const insertPosition = bisectLeft(this.intervals, start)

        if (insertPosition < this.intervals.length && end > this.intervals[insertPosition][0]) {
            return false;
        }

        if (insertPosition - 1 >= 0 && start < this.intervals[insertPosition-1][1]) {
            return false;
        }

        if (insertPosition === this.intervals.length) {
            this.intervals.push([start, end]);
        } else {
            this.intervals.splice(insertPosition, 0, [start, end]);
        }

        return true;
    }
}

function test(actions, params, expected) {
    const obj = new MyCalendar(...params[0]);
    for (let i = 1; i < actions.length; i++) {
        console.log(`--------------------${i}--------------------`);
        console.log(obj.intervals);
        console.log(...params[i]);
        switch (actions[i]) {

            case 'book':
                expect(obj.book(...params[i]) ?? null).to.be.eql(expected[i]);
                break;

        }
    }
}

describe('729. My Calendar I', () => {
    it('729. 1', () => { test(["MyCalendar", "book", "book", "book"], [[], [10, 20], [15, 25], [20, 30]], [null, true, false, true]) });

});

/*
Runtime: 154 ms, faster than 98.00% of JavaScript online submissions for My Calendar I.
Memory Usage: 50.7 MB, less than 70.00% of JavaScript online submissions for My Calendar I.
*/