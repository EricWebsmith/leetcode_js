
const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
function maxProfitAssignment(difficulty, profit, worker) {
    const n = difficulty.length;
    const diff_prof = []
    for (let i = 0; i < n; i++) {
        diff_prof.push([difficulty[i], profit[i]]);
    }

    diff_prof.sort((a, b) => b[1] - a[1]);

    worker.sort((a, b) => a - b);
    let ans = 0;
    for (const [d, p] of diff_prof) {
        // select workers can do the job
        let l = 0;
        let r = worker.length;
        while (l < r) {
            const mid = (l + r) >> 1;
            if (worker[mid] < d) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        if (l === worker.length) {
            continue;
        }

        const nWorkers = worker.length - l;
        worker.splice(l, nWorkers);
        ans += p * nWorkers;

        if (worker.length === 0) {
            break;
        }
    }

    return ans;
}


function test(difficulty, profit, worker, expected) {

    const actual = maxProfitAssignment(difficulty, profit, worker);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('826. Most Profit Assigning Work', () => {
    it('826. 1', () => { test([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7], 100) });
    it('826. 2', () => { test([85, 47, 57], [24, 66, 99], [40, 25, 25], 0) });
    it('826. 3', () => {
        test([2, 17, 19, 20, 24, 29, 33, 43, 50, 51, 57, 67, 70, 72, 73, 75, 80, 82, 87, 90],
            [6, 7, 10, 17, 18, 29, 30, 31, 34, 39, 40, 42, 48, 54, 57, 78, 78, 78, 83, 88],
            [12, 9, 11, 41, 11, 87, 48, 6, 48, 93, 76, 73, 7, 50, 55, 97, 47, 33, 46, 10], 693)
    });

});

/*
Runtime: 118 ms, faster than 93.40% of JavaScript online submissions for Most Profit Assigning Work.
Memory Usage: 50.3 MB, less than 27.36% of JavaScript online submissions for Most Profit Assigning Work.
*/
