
const { expect } = require("chai");

class UnionFind {
    /** @param {number} n  */
    constructor(n) {
        const ufArray = [];
        for (let i = 0; i < n; i++) {
            ufArray.push(i);
        }
        this.ufArray = ufArray;
    }

    /** @param {number} x  @returns {number} */
    find(x) {
        if (this.ufArray[x] !== x) {
            this.ufArray[x] = this.find(this.ufArray[x]);
        }

        return this.ufArray[x];
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @returns {void}
     */
    union(x, y) {
        const px = this.find(x);
        const py = this.find(y);
        if (px === py) {
            return;
        }

        if (px < py) {
            this.ufArray[py] = px;
        } else {
            this.ufArray[px] = py;
        }
    }


    countGroups() {
        let groups = 0;
        for (let i = 0; i < this.ufArray.length; i++) {
            if (this.ufArray[i] === i) {
                groups++;
            }
        }

        return groups;
    }
}

/**
 * @param {number[][]} stones
 * @return {number}
 */
function removeStones(stones) {
    const n = stones.length;
    const ufObj = new UnionFind(n);

    const rows = {};
    const cols = {};
    for (let i = 0; i < n; i++) {
        const [row, col] = stones[i];
        if (!rows.hasOwnProperty(row)) {
            rows[row] = [];
        }

        if (!cols.hasOwnProperty(col)) {
            cols[col] = [];
        }
        
        rows[row].push(i);
        cols[col].push(i);
    }

    for (const v of Object.values(rows)) {
        for (let i = 1; i < v.length; i++) {
            ufObj.union(v[i - 1], v[i]);
        }
    }

    for (const v of Object.values(cols)) {
        for (let i = 1; i < v.length; i++) {
            ufObj.union(v[i - 1], v[i]);
        }
    }

    const groups = ufObj.countGroups();
    return n - groups;
}


function test(stones, expected) {

    const actual = removeStones(stones);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('947. Most Stones Removed with Same Row or Column', () => {
    it('947. 1', () => { test([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]], 5) });
    it('947. 2', () => { test([[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]], 3) });
    it('947. 3', () => { test([[0, 0]], 0) });

});

/*
Runtime: 162 ms, faster than 67.49% of JavaScript online submissions for Most Stones Removed with Same Row or Column.
Memory Usage: 51.1 MB, less than 29.06% of JavaScript online submissions for Most Stones Removed with Same Row or Column.
*/