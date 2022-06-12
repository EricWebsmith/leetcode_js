const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
function calculateTax (brackets, income) {
    let previousUpper = 0;
    let tax = 0;
    for (let i=0;i<brackets.length;i++) {
        const lower = previousUpper;
        const upper = brackets[i][0];
        
        const texRate = brackets[i][1];
        const taxedSalary = Math.min(upper, income) - lower;
        if (taxedSalary<=0) {
            break;
        }

        tax += taxedSalary * texRate / 100.0;
        previousUpper = upper;
    }

    return tax;
}

function test(...args) {
    const expected = args.pop();
    const actual = calculateTax (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('5259. Calculate Amount Paid in Taxes', () => {
    it('5259. 1', () => {test([[3,50],[7,10],[12,25]], 10, 2.65000)});
    it('5259. 2', () => {test([[1,0],[4,25],[5,50]], 2, 0.25000)});
    it('5259. 3', () => {test([[2,50]], 0, 0.00000)});
});
