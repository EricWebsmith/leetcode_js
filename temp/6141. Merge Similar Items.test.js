
const { expect } = require("chai");

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
function mergeSimilarItems(items1, items2) {
    items1.sort((a, b) => a[0] - b[0]);
    items2.sort((a, b) => a[0] - b[0]);

    let i = 0;
    let j = 0;
    const ans = [];
    while (i < items1.length || j < items2.length) {
        if (j >= items2.length) {
            ans.push(items1[i]);
            i++;
        } else if (i >= items1.length) {
            ans.push(items2[j]);
            j++;
        } else if (items1[i][0] < items2[j][0]) {
            ans.push(items1[i]);
            i++;
        } else if (items2[j][0] < items1[i][0]) {
            ans.push(items2[j]);
            j++;
        } else {
            ans.push([items1[i][0], items1[i][1] + items2[j][1]]);
            i++;
            j++;
        }
    }

    return ans;
}


function test(items1, items2, expected) {

    const actual = mergeSimilarItems(items1, items2);
    expect(actual).to.be.eql(expected);
}

describe('6141. Merge Similar Items', () => {
    it('6141. 1', () => { test([[1, 1], [4, 5], [3, 8]], [[3, 1], [1, 5]], [[1, 6], [3, 9], [4, 5]]) });
    it('6141. 2', () => { test([[1, 1], [3, 2], [2, 3]], [[2, 1], [3, 2], [1, 3]], [[1, 4], [2, 4], [3, 4]]) });
    it('6141. 3', () => { test([[1, 3], [2, 2]], [[7, 1], [2, 2], [1, 4]], [[1, 7], [2, 4], [7, 1]]) });
    it('6141. 4', () => { test([[5, 1], [4, 2], [3, 3], [2, 4], [1, 5]], [[7, 1], [6, 2], [5, 3], [4, 4]], [[1, 5], [2, 4], [3, 3], [4, 6], [5, 4], [6, 2], [7, 1]]) });

});
