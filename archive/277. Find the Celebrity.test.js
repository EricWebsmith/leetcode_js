const { expect } = require("chai");

let graph = null;

/**
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 */
const knows = function (a, b) {
    return graph[a][b] === 1;
};

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function (n) {
        let celebrity = 0;
        for (let i=0;i<n;i++) {
            if(knows(celebrity, i)) {
                celebrity = i;
            }
        }

        for (let i=0;i< n;i++) {
            if (i === celebrity) {
                continue;
            }
            if (knows(celebrity, i) || !knows(i, celebrity) ) {
                return -1;
            }
        }
        return celebrity;
    };
};

/**
 * 
 * @param  {...any} args 
 */
function test(...args) {
    const [graphParam, expected] = args.pop();
    graph = graphParam;
    const n = graph.length;
    const func = solution(knows);
    //const func = s;
    const actual = func(n);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('277. Find the Celebrity', () => {
    it('277. 1', () => { test([[1, 1, 0], [0, 1, 0], [1, 1, 1]], 1) });
    it('277. 2', () => { test([[1, 0, 1], [1, 1, 0], [0, 1, 1]], -1) });
    it('277. 3', () => { test([[1, 1], [1, 1]], -1) });
    it('277. 4', () => { test([[1,1,0],[0,1,1],[0,1,1]], -1) });
});

/*
Runtime: 92 ms, faster than 89.97% of JavaScript online submissions for Find the Celebrity.
Memory Usage: 44.6 MB, less than 70.23% of JavaScript online submissions for Find the Celebrity.
*/
