const { expect } = require("chai");

/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
function discountPrices (sentence, discount) {
    const words = sentence.split(' ');
    for (let i=0;i<words.length;i++) {
        if(words[i] === '$') {
            continue;
        }
        if(words[i][0] === '$') {
            let isNumber = true;
            for (let j=1;j<words[i].length;j++) {
                if (!'0123456789'.includes(words[i][j])) {
                    isNumber = false;
                    break;
                }
            }

            if (!isNumber) {
                continue;
            }

            const number = parseInt(words[i].replace('$', ''));
            const newNumber = number * (100 - discount) / 100;
            words[i] = '$'+newNumber.toFixed(2);
        }
    }

    return words.join(' ');
}

function test(...args) {
    const expected = args.pop();
    const actual = discountPrices (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6079. Apply Discount to Prices', () => {
    it('6079. 1', () => {test("there are $1 $2 and 5$ candies in the shop", 50, "there are $0.50 $1.00 and 5$ candies in the shop")});
    it('6079. 2', () => {test("1 2 $3 4 $5 $6 7 8$ $9 $10$", 100, "1 2 $0.00 4 $0.00 $0.00 7 8$ $0.00 $10$")});
    it('6079. 3', () => {test("there are $1 $2 and 5$ candies in the shop", 67, "there are $0.33 $0.66 and 5$ candies in the shop")});
    it('6079. 4', () => {test("$7383692 5q $5870426", 64, "$2658129.12 5q $2113353.36")});
});
