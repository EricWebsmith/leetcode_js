/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const n = score.length;
    const sorted = [...score];
    sorted.sort((a, b) => b - a);
    const map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(sorted[i], i);
    }

    const ans = [];
    for (let i = 0; i < n; i++) {
        const position = map.get(score[i]);
        switch (position) {
            case 0:
                ans.push('Gold Medal');
                break;
            case 1:
                ans.push('Silver Medal');
                break;
            case 2:
                ans.push('Bronze Medal');
                break;
            default:
                ans.push((position + 1).toString());
                break;
        }
    }

    return ans;
};


/**
 * @param {number[]} score
 * @param {string[]} expected
 * @returns {void}
 */
function test(score, expected) {
    const actual = findRelativeRanks(score);
    const result = actual.every((val, index) => val === expected[index]);
    console.log(result, expected, actual);
}

test([5, 4, 3, 2, 1], ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]);
test([10, 3, 8, 9, 4], ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]);

/*
Runtime: 80 ms, faster than 97.72% of JavaScript online submissions for Relative Ranks.
Memory Usage: 45.6 MB, less than 11.79% of JavaScript online submissions for Relative Ranks.
*/